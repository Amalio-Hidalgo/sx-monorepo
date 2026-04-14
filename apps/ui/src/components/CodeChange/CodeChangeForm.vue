<script setup lang="ts">
import { useCodeChange } from '@/composables/useCodeChange';
import ScreenshotPreview from './ScreenshotPreview.vue';
import AttestationBadge from './AttestationBadge.vue';

const emit = defineEmits<{
  (e: 'built', payload: {
    attestation: any;
    screenshots: { before: string; after: string };
    build: any;
  }): void;
}>();

const {
  serviceUrl,
  job,
  error,
  isBuilding,
  isComplete,
  isFailed,
  screenshots,
  attestation,
  startBuild
} = useCodeChange();

// Form state
const repoUrl = ref('');
const prBranch = ref('');
const baseBranch = ref('main');
const compensationAmount = ref('');
const compensationToken = ref('USDC');
const compensationRecipient = ref('');
const timelockDays = ref(7);

// Custom TEE URL toggle
const showAdvanced = ref(false);

const canBuild = computed(() =>
  repoUrl.value && prBranch.value && baseBranch.value && !isBuilding.value
);

async function handleBuild() {
  try {
    await startBuild({
      repoUrl: repoUrl.value,
      prBranch: prBranch.value,
      baseBranch: baseBranch.value
    });
  } catch {
    // error is already set in the composable
  }
}

// When build completes, emit the data
watch(isComplete, (complete) => {
  if (complete && job.value?.result) {
    emit('built', {
      attestation: job.value.result.attestation,
      screenshots: job.value.result.screenshots,
      build: job.value.result.build
    });
  }
});

const progressPercent = computed(() => job.value?.progress || 0);
const latestLog = computed(() => {
  const logs = job.value?.log || [];
  return logs[logs.length - 1] || '';
});

// Build the code_change_data payload for the proposal
const codeChangePayload = computed(() => {
  if (!isComplete.value || !job.value?.result) return null;
  return {
    attestation: job.value.result.attestation,
    screenshots_before_cid: job.value.result.screenshots.before,
    screenshots_after_cid: job.value.result.screenshots.after,
    compensation: {
      amount: compensationAmount.value,
      token: compensationToken.value,
      recipient: compensationRecipient.value,
      timelock_seconds: timelockDays.value * 86400
    },
    code_release_status: 'hidden' as const,
    timelock_end: null
  };
});

defineExpose({ codeChangePayload });
</script>

<template>
  <div class="space-y-6">
    <!-- Repository info -->
    <div class="space-y-3">
      <h3 class="text-lg font-semibold text-skin-link flex items-center gap-2">
        <IH-code class="size-5" />
        Code Change
      </h3>

      <div class="space-y-2">
        <label class="block text-sm text-skin-text">Repository URL</label>
        <input
          v-model="repoUrl"
          type="text"
          placeholder="https://github.com/org/repo"
          class="w-full px-3 py-2 rounded-xl border border-skin-border bg-skin-bg text-skin-link placeholder-skin-text/50 focus:border-[#384aff] focus:outline-none"
          :disabled="isBuilding"
        />
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-sm text-skin-text">PR Branch</label>
          <input
            v-model="prBranch"
            type="text"
            placeholder="feat/my-feature"
            class="w-full px-3 py-2 rounded-xl border border-skin-border bg-skin-bg text-skin-link placeholder-skin-text/50 focus:border-[#384aff] focus:outline-none"
            :disabled="isBuilding"
          />
        </div>
        <div>
          <label class="block text-sm text-skin-text">Base Branch</label>
          <input
            v-model="baseBranch"
            type="text"
            placeholder="main"
            class="w-full px-3 py-2 rounded-xl border border-skin-border bg-skin-bg text-skin-link placeholder-skin-text/50 focus:border-[#384aff] focus:outline-none"
            :disabled="isBuilding"
          />
        </div>
      </div>
    </div>

    <!-- Compensation -->
    <div class="space-y-3">
      <h3 class="text-lg font-semibold text-skin-link flex items-center gap-2">
        <IH-cash class="size-5" />
        Compensation
      </h3>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-sm text-skin-text">Amount</label>
          <input
            v-model="compensationAmount"
            type="text"
            placeholder="10,000"
            class="w-full px-3 py-2 rounded-xl border border-skin-border bg-skin-bg text-skin-link placeholder-skin-text/50 focus:border-[#384aff] focus:outline-none"
          />
        </div>
        <div>
          <label class="block text-sm text-skin-text">Token</label>
          <input
            v-model="compensationToken"
            type="text"
            placeholder="USDC"
            class="w-full px-3 py-2 rounded-xl border border-skin-border bg-skin-bg text-skin-link placeholder-skin-text/50 focus:border-[#384aff] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm text-skin-text">Recipient Address</label>
        <input
          v-model="compensationRecipient"
          type="text"
          placeholder="0x... or ENS name"
          class="w-full px-3 py-2 rounded-xl border border-skin-border bg-skin-bg text-skin-link placeholder-skin-text/50 focus:border-[#384aff] focus:outline-none"
        />
      </div>

      <div>
        <label class="block text-sm text-skin-text">Timelock (days)</label>
        <input
          v-model.number="timelockDays"
          type="number"
          min="1"
          max="90"
          class="w-full px-3 py-2 rounded-xl border border-skin-border bg-skin-bg text-skin-link placeholder-skin-text/50 focus:border-[#384aff] focus:outline-none"
        />
      </div>
    </div>

    <!-- Advanced settings -->
    <div>
      <button
        class="text-sm text-skin-text hover:text-skin-link transition-colors flex items-center gap-1"
        @click="showAdvanced = !showAdvanced"
      >
        <IH-cog class="size-4" />
        Advanced
        <IH-chevron-down v-if="!showAdvanced" class="size-3" />
        <IH-chevron-up v-else class="size-3" />
      </button>

      <div v-if="showAdvanced" class="mt-2">
        <label class="block text-sm text-skin-text">TEE Service URL</label>
        <input
          v-model="serviceUrl"
          type="text"
          class="w-full px-3 py-2 rounded-xl border border-skin-border bg-skin-bg text-skin-link placeholder-skin-text/50 focus:border-[#384aff] focus:outline-none"
          :disabled="isBuilding"
        />
      </div>
    </div>

    <!-- Build button / Progress -->
    <div v-if="!isComplete">
      <button
        v-if="!isBuilding"
        :disabled="!canBuild"
        class="w-full py-3 px-4 rounded-xl font-semibold transition-colors"
        :class="canBuild
          ? 'bg-[#384aff] text-white hover:bg-[#384aff]/90'
          : 'bg-skin-border text-skin-text cursor-not-allowed'"
        @click="handleBuild"
      >
        <IH-play class="size-4 inline mr-2" />
        Build Preview in TEE
      </button>

      <!-- Progress bar -->
      <div v-else class="space-y-2">
        <div class="flex items-center justify-between text-sm">
          <span class="text-skin-text">Building in TEE...</span>
          <span class="text-skin-link font-mono">{{ progressPercent }}%</span>
        </div>
        <div class="h-2 bg-skin-border rounded-full overflow-hidden">
          <div
            class="h-full bg-[#384aff] rounded-full transition-all duration-500"
            :style="{ width: `${progressPercent}%` }"
          />
        </div>
        <div v-if="latestLog" class="text-xs text-skin-text font-mono truncate">
          {{ latestLog }}
        </div>
      </div>
    </div>

    <!-- Error -->
    <div v-if="isFailed || error" class="rounded-xl border border-red-500/20 bg-red-500/5 p-3">
      <div class="flex items-center gap-2 text-red-500 text-sm">
        <IH-exclamation-circle class="size-5 shrink-0" />
        <span>{{ error || job?.error || 'Build failed' }}</span>
      </div>
    </div>

    <!-- Build result -->
    <div v-if="isComplete && screenshots" class="space-y-4">
      <div class="flex items-center gap-2 text-green-500 text-sm font-medium">
        <IH-check-circle class="size-5" />
        Build complete - Review the preview below
      </div>

      <ScreenshotPreview
        :before-src="screenshots.before"
        :after-src="screenshots.after"
        repo-url=""
        branch=""
        base-branch=""
      />

      <AttestationBadge
        v-if="attestation"
        :status="attestation.provider === 'phala-tdx' ? 'verified' : 'pending'"
        :attestation="attestation"
      />
    </div>
  </div>
</template>
