<script setup lang="ts">
/**
 * Compact build-progress panel shown on the proposal page while the TEE is
 * cloning/applying/building. Polled by Proposal/Overview every 5s.
 */

const props = withDefaults(
  defineProps<{
    status?: string;        // 'queued' | 'running' | 'complete' | 'error'
    progress?: number;      // 0..100
    log?: string[];
    error?: string | null;
  }>(),
  { status: 'queued', progress: 0, log: () => [], error: null }
);

const pct = computed(() => Math.max(0, Math.min(100, Math.round(props.progress || 0))));
const tailLines = computed(() => (props.log || []).slice(-6));

const label = computed(() => {
  if (props.status === 'complete') return 'Build complete';
  if (props.status === 'error') return 'Build failed';
  if (props.status === 'running') return `Building in enclave (${pct.value}%)`;
  return 'Queued — waiting for an enclave slot';
});

const barClass = computed(() => {
  if (props.status === 'error') return 'bg-red-500';
  if (props.status === 'complete') return 'bg-green-500';
  return 'bg-purple-500';
});
</script>

<template>
  <div class="rounded-xl border border-skin-border bg-skin-bg p-4 space-y-3">
    <div class="flex items-center justify-between gap-3">
      <div class="text-sm font-semibold text-skin-link">{{ label }}</div>
      <div class="text-xs text-skin-text font-mono">{{ pct }}%</div>
    </div>

    <div class="h-1.5 w-full rounded-full bg-skin-border/40 overflow-hidden">
      <div
        class="h-full transition-all duration-500 ease-out"
        :class="barClass"
        :style="{ width: pct + '%' }"
      />
    </div>

    <div v-if="error" class="text-xs text-red-400 font-mono break-words">{{ error }}</div>

    <div v-if="tailLines.length" class="rounded-md bg-skin-border/30 p-2 max-h-40 overflow-y-auto">
      <div
        v-for="(line, i) in tailLines"
        :key="i"
        class="font-mono text-[11px] text-skin-text whitespace-pre-wrap"
      >
        {{ line }}
      </div>
    </div>
  </div>
</template>
