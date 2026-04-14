<script setup lang="ts">
export type AttestationStatus = 'verified' | 'pending' | 'failed' | 'none';

export type Attestation = {
  version: string;
  enclave: {
    type: string;
    mrenclave: string;
    mrsigner: string;
  };
  measurements: {
    code_hash: string;
    output_hash: string;
    repo_url: string;
    branch: string;
    base_branch: string;
    timestamp: string;
  };
  signature?: string;
  certificate?: string;
  provider?: string;
  quote?: string;
  verification_url?: string;
};

const props = withDefaults(
  defineProps<{
    status: AttestationStatus;
    attestation?: Attestation | null;
    compact?: boolean;
    hideSource?: boolean;
  }>(),
  {
    attestation: null,
    compact: false,
    hideSource: false
  }
);

const expanded = ref(false);

const statusConfig = computed(() => {
  const configs: Record<AttestationStatus, { label: string; color: string; bg: string; icon: string }> = {
    verified: {
      label: 'TEE Verified',
      color: 'text-green-500',
      bg: 'bg-green-500/10 border-green-500/20',
      icon: 'shield-check'
    },
    pending: {
      label: 'Verification Pending',
      color: 'text-yellow-500',
      bg: 'bg-yellow-500/10 border-yellow-500/20',
      icon: 'clock'
    },
    failed: {
      label: 'Verification Failed',
      color: 'text-red-500',
      bg: 'bg-red-500/10 border-red-500/20',
      icon: 'shield-exclamation'
    },
    none: {
      label: 'No Attestation',
      color: 'text-skin-text',
      bg: 'bg-skin-border/50 border-skin-border',
      icon: 'question-mark-circle'
    }
  };
  return configs[props.status];
});

function shortenHash(hash: string): string {
  if (!hash) return '';
  return `${hash.substring(0, 8)}...${hash.substring(hash.length - 8)}`;
}
</script>

<template>
  <div v-if="compact" class="inline-flex items-center gap-1.5">
    <span
      class="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border"
      :class="[statusConfig.color, statusConfig.bg]"
    >
      <IH-shield-check v-if="status === 'verified'" class="size-3.5" />
      <IH-clock v-else-if="status === 'pending'" class="size-3.5" />
      <IH-shield-exclamation v-else-if="status === 'failed'" class="size-3.5" />
      <IH-question-mark-circle v-else class="size-3.5" />
      {{ statusConfig.label }}
    </span>
  </div>

  <div v-else class="rounded-xl border" :class="statusConfig.bg">
    <button
      type="button"
      class="w-full flex items-center justify-between p-4"
      @click="expanded = !expanded"
    >
      <div class="flex items-center gap-3">
        <div class="size-10 rounded-lg flex items-center justify-center" :class="statusConfig.bg">
          <IH-shield-check v-if="status === 'verified'" class="size-5" :class="statusConfig.color" />
          <IH-clock v-else-if="status === 'pending'" class="size-5" :class="statusConfig.color" />
          <IH-shield-exclamation v-else-if="status === 'failed'" class="size-5" :class="statusConfig.color" />
          <IH-question-mark-circle v-else class="size-5" :class="statusConfig.color" />
        </div>
        <div class="text-left">
          <div class="font-semibold text-skin-link">{{ statusConfig.label }}</div>
          <div class="text-sm text-skin-text">
            <template v-if="status === 'verified'">
              Code built inside a Trusted Execution Environment
            </template>
            <template v-else-if="status === 'pending'">
              Build is running inside TEE enclave
            </template>
            <template v-else-if="status === 'failed'">
              Attestation verification failed
            </template>
            <template v-else>
              No TEE attestation available
            </template>
          </div>
        </div>
      </div>
      <IH-chevron-down
        class="size-5 text-skin-text transition-transform"
        :class="{ 'rotate-180': expanded }"
      />
    </button>

    <div v-if="expanded && attestation" class="border-t px-4 pb-4 pt-3 space-y-3" :class="statusConfig.bg">
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div>
          <div class="text-skin-text mb-0.5">Enclave Type</div>
          <div class="text-skin-link font-mono text-xs">{{ attestation.enclave.type }}</div>
        </div>
        <div>
          <div class="text-skin-text mb-0.5">Version</div>
          <div class="text-skin-link font-mono text-xs">{{ attestation.version }}</div>
        </div>
        <div>
          <div class="text-skin-text mb-0.5">Code Hash</div>
          <div class="text-skin-link font-mono text-xs">{{ shortenHash(attestation.measurements.code_hash) }}</div>
        </div>
        <div>
          <div class="text-skin-text mb-0.5">Output Hash</div>
          <div class="text-skin-link font-mono text-xs">{{ shortenHash(attestation.measurements.output_hash) }}</div>
        </div>
        <div>
          <div class="text-skin-text mb-0.5">MRENCLAVE</div>
          <div class="text-skin-link font-mono text-xs">{{ shortenHash(attestation.enclave.mrenclave) }}</div>
        </div>
        <div>
          <div class="text-skin-text mb-0.5">MRSIGNER</div>
          <div class="text-skin-link font-mono text-xs">{{ shortenHash(attestation.enclave.mrsigner) }}</div>
        </div>
      </div>
      <!-- Source info - hidden until vote passes -->
      <div v-if="!hideSource" class="grid grid-cols-2 gap-3 text-sm border-t border-skin-border/30 pt-3">
        <div>
          <div class="text-skin-text mb-0.5">Repository</div>
          <div class="text-skin-link font-mono text-xs break-all">{{ attestation.measurements.repo_url }}</div>
        </div>
        <div>
          <div class="text-skin-text mb-0.5">Branch</div>
          <div class="text-skin-link font-mono text-xs">{{ attestation.measurements.branch }}</div>
        </div>
      </div>
      <div v-else class="text-sm border-t border-skin-border/30 pt-3">
        <div class="flex items-center gap-2 text-skin-text italic">
          <IH-lock-closed class="size-4" />
          Source details hidden until vote passes
        </div>
      </div>
      <div v-if="attestation.signature">
        <div class="text-skin-text text-sm mb-0.5">Signature</div>
        <div class="text-skin-link font-mono text-xs break-all bg-skin-bg/50 rounded-lg p-2">
          {{ attestation.signature }}
        </div>
      </div>
      <div v-if="attestation.quote">
        <div class="text-skin-text text-sm mb-0.5">TDX Quote</div>
        <div class="text-skin-link font-mono text-xs break-all bg-skin-bg/50 rounded-lg p-2 max-h-20 overflow-auto">
          {{ attestation.quote.substring(0, 128) }}...
        </div>
      </div>
      <div class="text-xs text-skin-text">
        Built at {{ new Date(attestation.measurements.timestamp).toLocaleString() }}
      </div>
    </div>
  </div>
</template>
