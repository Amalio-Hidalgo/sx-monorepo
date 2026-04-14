<script setup lang="ts">
export type CompensationInfo = {
  token: string;
  amount: string;
  recipient: string;
  recipientName?: string;
  milestones?: { label: string; percentage: number; status: 'pending' | 'complete' | 'active' }[];
};

const props = withDefaults(
  defineProps<{
    compensation: CompensationInfo;
    compact?: boolean;
  }>(),
  {
    compact: false
  }
);

const totalCompleted = computed(() => {
  if (!props.compensation.milestones) return 0;
  return props.compensation.milestones
    .filter(m => m.status === 'complete')
    .reduce((sum, m) => sum + m.percentage, 0);
});

function shortenAddress(addr: string): string {
  if (!addr || addr.length < 10) return addr;
  return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
}
</script>

<template>
  <div v-if="compact" class="flex items-center gap-2 text-sm">
    <IH-cash class="size-4 text-skin-text" />
    <span class="text-skin-link font-semibold">{{ compensation.amount }} {{ compensation.token }}</span>
    <span class="text-skin-text">to</span>
    <span class="font-mono text-xs text-skin-link">{{ compensation.recipientName || shortenAddress(compensation.recipient) }}</span>
  </div>

  <div v-else class="rounded-xl border border-skin-border bg-skin-bg">
    <div class="p-4">
      <div class="flex items-center justify-between mb-3">
        <UiEyebrow class="flex items-center gap-2">
          <IH-cash />
          Compensation
        </UiEyebrow>
        <UiPill variant="secondary" :label="compensation.token" />
      </div>

      <div class="flex items-baseline gap-2 mb-3">
        <span class="text-3xl font-bold text-skin-link">{{ compensation.amount }}</span>
        <span class="text-lg text-skin-text">{{ compensation.token }}</span>
      </div>

      <div class="flex items-center gap-2 text-sm text-skin-text mb-4">
        <IH-user class="size-4" />
        <span>Recipient:</span>
        <span class="font-mono text-xs text-skin-link">
          {{ compensation.recipientName || shortenAddress(compensation.recipient) }}
        </span>
      </div>

      <!-- Milestones -->
      <div v-if="compensation.milestones?.length" class="space-y-2">
        <div class="text-sm text-skin-text font-medium mb-1">Release Schedule</div>

        <!-- Progress bar -->
        <div class="h-2 bg-skin-border rounded-full overflow-hidden">
          <div
            class="h-full bg-green-500 rounded-full transition-all"
            :style="{ width: `${totalCompleted}%` }"
          />
        </div>

        <div class="space-y-1.5">
          <div
            v-for="milestone in compensation.milestones"
            :key="milestone.label"
            class="flex items-center justify-between text-sm"
          >
            <div class="flex items-center gap-2">
              <IH-check-circle
                v-if="milestone.status === 'complete'"
                class="size-4 text-green-500"
              />
              <IH-clock
                v-else-if="milestone.status === 'active'"
                class="size-4 text-yellow-500"
              />
              <div
                v-else
                class="size-4 rounded-full border-2 border-skin-border"
              />
              <span
                :class="milestone.status === 'complete' ? 'text-skin-text line-through' : 'text-skin-link'"
              >
                {{ milestone.label }}
              </span>
            </div>
            <span class="text-skin-text">{{ milestone.percentage }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
