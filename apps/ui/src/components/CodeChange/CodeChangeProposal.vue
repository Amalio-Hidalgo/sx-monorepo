<script setup lang="ts">
import AttestationBadge from './AttestationBadge.vue';
import type { Attestation, AttestationStatus } from './AttestationBadge.vue';
import ScreenshotPreview from './ScreenshotPreview.vue';
import CompensationTerms from './CompensationTerms.vue';
import type { CompensationInfo } from './CompensationTerms.vue';
import BuildProgress from './BuildProgress.vue';

export type CodeChangeData = {
  repoUrl: string;
  branch: string;
  baseBranch: string;
  baseCommit?: string;        // sealed-patch submissions
  patchCommitment?: string;   // sha256 of sealed ciphertext
  sealed?: boolean;           // true => source sealed inside enclave
  prNumber?: number;
  prTitle?: string;
  screenshots: {
    before: string;
    after: string;
  };
  attestation: Attestation | null;
  attestationStatus: AttestationStatus;
  compensation: CompensationInfo;
  diffStats?: {
    filesChanged: number;
    additions: number;
    deletions: number;
  };
  // While the TEE is still running — shown instead of screenshots
  build?: {
    status?: string;
    progress?: number;
    log?: string[];
    error?: string | null;
  };
  // Post-vote release state
  geState?: string;                // 'building' | 'ready' | 'queued' | 'released' | 'vetoed' | 'failed'
  snapshotProposalId?: string | number;
  releaseBranch?: string | null;
  releasePrUrl?: string | null;
  canRelease?: boolean;            // true => show Publish / Veto buttons (caller decides auth)
};

const emit = defineEmits<{
  (e: 'release'): void;
  (e: 'veto'): void;
}>();

defineProps<{
  data: CodeChangeData;
}>();

function getRepoName(url: string): string {
  if (!url) return '';
  const parts = url.replace(/\.git$/, '').split('/');
  return parts.slice(-2).join('/');
}
</script>

<template>
  <div class="space-y-6">
    <!-- Source sealed banner (shown only for sealed submissions) -->
    <div
      v-if="data.sealed"
      class="rounded-xl border p-4 flex items-start gap-3"
      :class="data.geState === 'released'
        ? 'border-green-500/30 bg-green-500/10'
        : data.geState === 'vetoed'
          ? 'border-yellow-500/30 bg-yellow-500/10'
          : 'border-purple-500/30 bg-purple-500/10'"
    >
      <div
        class="size-10 rounded-lg flex items-center justify-center shrink-0 text-lg"
        :class="data.geState === 'released'
          ? 'bg-green-500/20 text-green-400'
          : data.geState === 'vetoed'
            ? 'bg-yellow-500/20 text-yellow-400'
            : 'bg-purple-500/20 text-purple-400'"
      >
        {{ data.geState === 'released' ? '🔓' : data.geState === 'vetoed' ? '⛔' : '🔒' }}
      </div>
      <div class="flex-1 min-w-0">
        <div class="font-semibold text-skin-link mb-1">
          <template v-if="data.geState === 'released'">Source code released</template>
          <template v-else-if="data.geState === 'vetoed'">Proposal vetoed — source discarded</template>
          <template v-else>Source code sealed</template>
        </div>
        <div class="text-sm text-skin-text leading-relaxed">
          <template v-if="data.geState === 'released'">
            The enclave pushed the attested source to
            <a
              v-if="data.releasePrUrl"
              :href="data.releasePrUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-skin-link hover:underline"
            >PR on {{ getRepoName(data.repoUrl) }}</a>
            <template v-else-if="data.releaseBranch">
              branch <code class="s-input-mono">{{ data.releaseBranch }}</code> of {{ getRepoName(data.repoUrl) }}
            </template>
            <template v-else>{{ getRepoName(data.repoUrl) }}</template>.
          </template>
          <template v-else-if="data.geState === 'vetoed'">
            The enclave discarded the patched source. Nothing was published to {{ getRepoName(data.repoUrl) }}.
          </template>
          <template v-else>
            The patch was encrypted to the enclave's public key and decrypted inside the TEE only.
            Voters evaluate the behavior preview below. The source is published after the vote passes.
          </template>
        </div>
        <div v-if="data.patchCommitment" class="mt-2 text-xs font-mono text-skin-text break-all">
          <span class="text-skin-text/60">patch commitment:</span> {{ data.patchCommitment }}
        </div>
        <div v-if="data.canRelease && (data.geState === 'ready' || data.geState === 'queued')" class="mt-3 flex gap-2">
          <button
            type="button"
            class="px-3 py-1.5 text-xs font-semibold rounded-full border border-green-500/40 bg-green-500/15 text-green-400 hover:bg-green-500/25 transition"
            @click="emit('release')"
          >
            Publish source → open PR
          </button>
          <button
            type="button"
            class="px-3 py-1.5 text-xs font-semibold rounded-full border border-yellow-500/40 bg-yellow-500/15 text-yellow-400 hover:bg-yellow-500/25 transition"
            @click="emit('veto')"
          >
            Veto & discard
          </button>
        </div>
      </div>
    </div>

    <!-- GitHub Reference -->
    <div class="rounded-xl border border-skin-border bg-skin-bg p-4">
      <div class="flex items-start justify-between">
        <div class="flex items-start gap-3">
          <div class="size-10 rounded-lg bg-skin-border flex items-center justify-center shrink-0">
            <IH-code class="size-5 text-skin-text" />
          </div>
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-sm text-skin-text">
                {{ data.sealed ? 'Base repo' : 'Code change from' }}
              </span>
              <a
                :href="data.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono text-sm text-skin-link hover:underline"
              >
                {{ getRepoName(data.repoUrl) }}
              </a>
            </div>
            <div v-if="data.sealed && data.baseCommit" class="flex items-center gap-2 text-sm">
              <span class="text-skin-text">@</span>
              <span class="font-mono text-xs px-1.5 py-0.5 rounded bg-skin-border text-skin-text">
                {{ data.baseCommit.slice(0, 10) }}
              </span>
              <span class="text-skin-text">+ sealed patch</span>
            </div>
            <div v-else-if="data.prNumber" class="flex items-center gap-2">
              <a
                :href="`${data.repoUrl}/pull/${data.prNumber}`"
                target="_blank"
                rel="noopener noreferrer"
                class="text-skin-link font-semibold hover:underline"
              >
                #{{ data.prNumber }}: {{ data.prTitle || 'Pull Request' }}
              </a>
            </div>
            <div v-else class="flex items-center gap-2 text-sm">
              <span class="font-mono px-1.5 py-0.5 rounded bg-skin-border text-skin-link">{{ data.branch }}</span>
              <IH-arrow-sm-right class="size-4 text-skin-text" />
              <span class="font-mono px-1.5 py-0.5 rounded bg-skin-border text-skin-text">{{ data.baseBranch }}</span>
            </div>
          </div>
        </div>

        <!-- Diff stats -->
        <div v-if="data.diffStats" class="flex items-center gap-3 text-sm">
          <span class="text-skin-text">{{ data.diffStats.filesChanged }} files</span>
          <span class="text-green-500">+{{ data.diffStats.additions }}</span>
          <span class="text-red-500">-{{ data.diffStats.deletions }}</span>
        </div>
      </div>
    </div>

    <!-- TEE Attestation -->
    <AttestationBadge
      :status="data.attestationStatus"
      :attestation="data.attestation"
    />

    <!-- Screenshot Preview (or build progress while TEE still running) -->
    <div>
      <UiEyebrow class="mb-3 flex items-center gap-2">
        <IH-photograph />
        TEE-Verified Preview
      </UiEyebrow>
      <BuildProgress
        v-if="data.build && data.build.status !== 'complete'"
        :status="data.build.status"
        :progress="data.build.progress"
        :log="data.build.log"
        :error="data.build.error"
      />
      <ScreenshotPreview
        v-else
        :before-url="data.screenshots.before"
        :after-url="data.screenshots.after"
        before-label="Current"
        after-label="Proposed"
        :repo-url="data.repoUrl"
        :branch="data.branch"
        :base-branch="data.baseBranch"
      />
    </div>

    <!-- Compensation -->
    <CompensationTerms :compensation="data.compensation" />
  </div>
</template>
