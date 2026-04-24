<script setup lang="ts">
/**
 * Compact badge shown next to Snapshot X proposals that are linked to a
 * GitHub Execution entry. Visual language:
 *   - purple + lock icon when the submission is sealed (source not yet public)
 *   - grey + code icon when the build is still running
 *   - green when ready
 *   - red when failed
 */

const props = defineProps<{
  geState?: string;
  sealed?: boolean;
  buildStatus?: string;
}>();

const label = computed(() => {
  if (props.geState === 'released') return 'Released';
  if (props.geState === 'vetoed') return 'Vetoed';
  if (props.geState === 'failed' || props.buildStatus === 'error') return 'Build failed';
  if (props.geState === 'building' || props.buildStatus === 'queued' || props.buildStatus === 'running') return 'Building';
  if (props.sealed) return 'Sealed';
  return 'Code change';
});

const tone = computed(() => {
  if (props.geState === 'released') return 'green';
  if (props.geState === 'vetoed') return 'yellow';
  if (props.geState === 'failed' || props.buildStatus === 'error') return 'red';
  if (props.geState === 'building' || props.buildStatus === 'queued' || props.buildStatus === 'running') return 'grey';
  if (props.sealed) return 'purple';
  return 'grey';
});

const classes = computed(() => {
  switch (tone.value) {
    case 'purple': return 'bg-purple-500/15 text-purple-400 border-purple-500/30';
    case 'green':  return 'bg-green-500/15 text-green-500 border-green-500/30';
    case 'yellow': return 'bg-yellow-500/15 text-yellow-500 border-yellow-500/30';
    case 'red':    return 'bg-red-500/15 text-red-400 border-red-500/30';
    default:       return 'bg-skin-border/40 text-skin-text border-skin-border';
  }
});
</script>

<template>
  <span
    class="inline-flex items-center gap-1 text-[11px] leading-none px-2 py-1 rounded-full border font-medium whitespace-nowrap"
    :class="classes"
  >
    <span class="text-[10px]">{{ sealed ? '🔒' : '⚙' }}</span>
    {{ label }}
  </span>
</template>
