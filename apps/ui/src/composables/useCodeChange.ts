import { ref, computed } from 'vue';

const DEFAULT_TEE_URL = 'https://tee-build-production.up.railway.app';
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
    vetoProposal
  };
}
