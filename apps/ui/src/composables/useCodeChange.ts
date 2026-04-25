import { ref, computed } from 'vue';

const DEFAULT_TEE_URL = import.meta.env.VITE_TEE_SERVICE_URL || 'https://7d07828e6b5e823257fd7aa98edce140dd92272d-3000.dstack-pha-prod5.phala.network';
const DEFAULT_HUB_URL = import.meta.env.VITE_HUB_URL || 'https://snapshot-hub-production-9e71.up.railway.app';

export type BuildJob = {
  id: string;
  status: 'queued' | 'running' | 'complete' | 'error';
  progress: number;
  log: string[];
  result: {
    screenshots: { before: string; after: string };
    attestation: any;
    build: {
      base_success: boolean;
      pr_success: boolean;
      merge_success: boolean;
      code_hash_base: string;
      code_hash_after: string;
      output_hash: string;
    };
  } | null;
  error: string | null;
};

export type CodeChangePayload = {
  attestation: any;
  screenshots_before_cid: string;
  screenshots_after_cid: string;
  compensation: {
    amount: string;
    token: string;
    recipient: string;
    timelock_seconds: number;
  };
  code_release_status: 'hidden';
  timelock_end: number | null;
};

export function useCodeChange(teeUrl?: string) {
  const serviceUrl = ref(teeUrl || DEFAULT_TEE_URL);
  const jobId = ref<string | null>(null);
  const job = ref<BuildJob | null>(null);
  const polling = ref(false);
  const error = ref<string | null>(null);

  const isBuilding = computed(() =>
    job.value?.status === 'queued' || job.value?.status === 'running'
  );

  const isComplete = computed(() => job.value?.status === 'complete');
  const isFailed = computed(() => job.value?.status === 'error');

  const screenshots = computed(() => job.value?.result?.screenshots || null);
  const attestation = computed(() => job.value?.result?.attestation || null);

  async function startBuild(params: {
    repoUrl: string;
    prBranch: string;
    baseBranch: string;
    beforeUrl?: string;
    afterUrl?: string;
  }) {
    error.value = null;
    job.value = null;

    try {
      const res = await fetch(`${serviceUrl.value}/build`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          repo_url: params.repoUrl,
          pr_branch: params.prBranch,
          base_branch: params.baseBranch,
          before_url: params.beforeUrl,
          after_url: params.afterUrl
        })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Build request failed: ${res.status}`);
      }

      const data = await res.json();
      jobId.value = data.job_id;
      job.value = {
        id: data.job_id,
        status: 'queued',
        progress: 0,
        log: [],
        result: null,
        error: null
      };

      // Start polling
      startPolling();
      return data.job_id;
    } catch (e: any) {
      error.value = e.message;
      throw e;
    }
  }

  function startPolling() {
    if (polling.value) return;
    polling.value = true;

    const poll = async () => {
      if (!jobId.value || !polling.value) return;

      try {
        const res = await fetch(`${serviceUrl.value}/build/${jobId.value}`);
        if (res.ok) {
          const data = await res.json();
          job.value = {
            id: data.id,
            status: data.status,
            progress: data.progress || 0,
            log: data.log || [],
            result: data.result,
            error: data.error
          };

          if (data.status === 'complete' || data.status === 'error') {
            polling.value = false;
            return;
          }
        }
      } catch {
        // Continue polling on network errors
      }

      if (polling.value) {
        setTimeout(poll, 2000);
      }
    };

    poll();
  }

  function stopPolling() {
    polling.value = false;
  }

  async function verifyAttestation(attestationData: any): Promise<{ valid: boolean; details?: any }> {
    try {
      const res = await fetch(`${serviceUrl.value}/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ attestation: attestationData })
      });
      return await res.json();
    } catch (e: any) {
      return { valid: false, details: { error: e.message } };
    }
  }

  async function setCodeChangeData(proposalId: string, data: CodeChangePayload, address: string) {
    const res = await fetch(`${DEFAULT_HUB_URL}/api/code-change/${proposalId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code_change_data: data, address })
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error_description || 'Failed to set code change data');
    }
    return res.json();
  }

  async function releaseCode(proposalId: string, address: string) {
    const res = await fetch(`${DEFAULT_HUB_URL}/api/code-change/${proposalId}/release`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address })
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error_description || 'Failed to release code');
    }
    return res.json();
  }

  async function vetoProposal(proposalId: string, address: string) {
    const res = await fetch(`${DEFAULT_HUB_URL}/api/code-change/${proposalId}/veto`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address })
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error_description || 'Failed to veto');
    }
    return res.json();
  }

  /**
   * Fetch GitHub Execution data for a Snapshot proposal from our Phala TEE backend.
   *
   * Returns null if the proposal has no GE record (i.e. it's a regular proposal,
   * not a code-change one). Returns the codeChangeData shape that
   * Proposal/Overview.vue + CodeChangeProposal.vue expect.
   */
  async function fetchGEProposal(snapshotProposalId: string | number): Promise<any | null> {
    try {
      const res = await fetch(`${serviceUrl.value}/ge/proposal/${snapshotProposalId}`);
      if (res.status === 404) return null;
      if (!res.ok) return null;
      const data = await res.json();
      const p = data.proposal;
      if (!p) return null;

      const buildResult = p.build?.result;
      const attestation = buildResult?.attestation || null;
      const screenshots = buildResult?.screenshots || null;

      // Map our backend shape to the codeChangeData shape Proposal/Overview consumes
      return {
        // Required by Proposal/Overview's computed
        attestation,
        screenshotsBefore: screenshots?.before || '',
        screenshotsAfter: screenshots?.after || '',
        compensation: {
          token: p.compensation.symbol,
          amount: p.compensation.amount_wei,
          recipient: p.compensation.recipient,
        },
        codeReleaseStatus:
          p.ge_state === 'released' ? 'released' :
          p.ge_state === 'vetoed' ? 'vetoed' :
          'hidden',
        timelockEnd: p.escrow_create_tx ? Math.floor(Date.now() / 1000) + p.timelock_seconds : null,
        // Bonus fields useful for the section
        ge_state: p.ge_state,
        build_status: p.build?.status,
        build_progress: p.build?.progress,
        build_log: p.build?.log,
        repo_url: p.repo_url,
        pr_branch: p.pr_branch,
        base_branch: p.base_branch,
        // Sealed-patch metadata (see /ge/submit-sealed-patch)
        base_commit: p.base_commit,
        patch_commitment: p.patch_commitment,
        sealed: p.sealed,
        // Post-vote release state
        release_branch: p.release_branch,
        release_pr_url: p.release_pr_url,
      };
    } catch (e) {
      console.warn('fetchGEProposal failed:', e);
      return null;
    }
  }

  /**
   * Fetch every GE proposal in a space in one request. Used by the dashboard
   * to mark which Snapshot X proposals are code-change proposals without N
   * round-trips. Returns a Map<proposal_id, minimal-summary>.
   */
  async function fetchGEProposalsForSpace(spaceId: string): Promise<Map<string, {
    ge_state: string;
    sealed: boolean;
    patch_commitment?: string;
    build_status?: string;
  }>> {
    const out = new Map<string, any>();
    try {
      const res = await fetch(`${serviceUrl.value}/ge/proposals?space=${encodeURIComponent(spaceId)}&limit=200`);
      if (!res.ok) return out;
      const data = await res.json();
      for (const p of (data.proposals || [])) {
        out.set(String(p.snapshot_proposal_id), {
          ge_state: p.ge_state,
          sealed: !!p.sealed,
          patch_commitment: p.patch_commitment,
          build_status: p.build?.status,
        });
      }
    } catch (e) {
      console.warn('fetchGEProposalsForSpace failed:', e);
    }
    return out;
  }

  return {
    serviceUrl,
    jobId,
    job,
    error,
    isBuilding,
    isComplete,
    isFailed,
    screenshots,
    attestation,
    startBuild,
    stopPolling,
    verifyAttestation,
    setCodeChangeData,
    releaseCode,
    vetoProposal,
    fetchGEProposal,
    fetchGEProposalsForSpace
  };
}
