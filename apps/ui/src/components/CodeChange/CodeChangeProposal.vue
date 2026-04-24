<script setup lang="ts">
import AttestationBadge from './AttestationBadge.vue';
import type { Attestation, AttestationStatus } from './AttestationBadge.vue';
import ScreenshotPreview from './ScreenshotPreview.vue';
import CompensationTerms from './CompensationTerms.vue';
import type { CompensationInfo } from './CompensationTerms.vue';

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
};

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
      class="rounded-xl border border-purple-500/30 bg-purple-500/10 p-4 flex items-start gap-3"
    >
      <div class="size-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 text-lg">
        🔒
      </div>
      <div class="flex-1 min-w-0">
        <div class="font-semibold text-skin-link mb-1">Source code sealed</div>
        <div class="text-sm text-skin-text leading-relaxed">
          The patch was encrypted to the enclave's public key and decrypted inside the TEE only.
          Voters evaluate the behavior preview below. The source is published after the vote passes
          and the timelock expires.
        </div>
        <div v-if="data.patchCommitment" class="mt-2 text-xs font-mono text-skin-text break-all">
          <span class="text-skin-text/60">patch commitment:</span> {{ data.patchCommitment }}
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

    <!-- Screenshot Preview -->
    <div>
      <UiEyebrow class="mb-3 flex items-center gap-2">
        <IH-photograph />
        TEE-Verified Preview
      </UiEyebrow>
      <ScreenshotPreview
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
