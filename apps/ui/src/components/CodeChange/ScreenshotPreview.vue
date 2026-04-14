<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    beforeUrl: string;
    afterUrl: string;
    beforeLabel?: string;
    afterLabel?: string;
    repoUrl?: string;
    branch?: string;
    baseBranch?: string;
  }>(),
  {
    beforeLabel: 'Before',
    afterLabel: 'After',
    repoUrl: '',
    branch: '',
    baseBranch: 'main'
  }
);

const activeTab = ref<'before' | 'after' | 'diff'>('after');
const sliderPosition = ref(50);
const isDragging = ref(false);
const containerRef = ref<HTMLElement | null>(null);

function handleMouseDown() {
  isDragging.value = true;
}

function handleMouseMove(e: MouseEvent) {
  if (!isDragging.value || !containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
  sliderPosition.value = (x / rect.width) * 100;
}

function handleMouseUp() {
  isDragging.value = false;
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
});
</script>

<template>
  <div class="space-y-3">
    <!-- Tab bar -->
    <div class="flex items-center gap-2">
      <button
        type="button"
        class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
        :class="activeTab === 'before' ? 'bg-skin-link text-white' : 'bg-skin-border text-skin-text hover:text-skin-link'"
        @click="activeTab = 'before'"
      >
        {{ beforeLabel }}
      </button>
      <button
        type="button"
        class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
        :class="activeTab === 'after' ? 'bg-skin-link text-white' : 'bg-skin-border text-skin-text hover:text-skin-link'"
        @click="activeTab = 'after'"
      >
        {{ afterLabel }}
      </button>
      <button
        type="button"
        class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
        :class="activeTab === 'diff' ? 'bg-skin-link text-white' : 'bg-skin-border text-skin-text hover:text-skin-link'"
        @click="activeTab = 'diff'"
      >
        Compare
      </button>

      <!-- Repo info -->
      <div v-if="repoUrl" class="ml-auto flex items-center gap-2 text-sm text-skin-text">
        <IH-code class="size-4" />
        <span class="font-mono text-xs">{{ branch }}</span>
        <IH-arrow-sm-right class="size-3" />
        <span class="font-mono text-xs">{{ baseBranch }}</span>
      </div>
    </div>

    <!-- Screenshot display -->
    <div class="rounded-xl border border-skin-border overflow-hidden bg-skin-bg">
      <!-- Single view (before or after) -->
      <div v-if="activeTab !== 'diff'" class="relative">
        <img
          :src="activeTab === 'before' ? beforeUrl : afterUrl"
          :alt="activeTab === 'before' ? beforeLabel : afterLabel"
          class="w-full h-auto"
          @error="($event.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221440%22 height=%22900%22%3E%3Crect fill=%22%23191b21%22 width=%221440%22 height=%22900%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23666%22 font-size=%2224%22 font-family=%22monospace%22%3EScreenshot preview%3C/text%3E%3C/svg%3E'"
        />
        <div class="absolute top-3 left-3">
          <span
            class="text-xs font-semibold px-2 py-1 rounded-lg"
            :class="activeTab === 'before' ? 'bg-red-500/80 text-white' : 'bg-green-500/80 text-white'"
          >
            {{ activeTab === 'before' ? beforeLabel : afterLabel }}
          </span>
        </div>
      </div>

      <!-- Diff slider view -->
      <div
        v-else
        ref="containerRef"
        class="relative cursor-col-resize select-none"
        @mousedown="handleMouseDown"
      >
        <!-- After image (full) -->
        <img
          :src="afterUrl"
          :alt="afterLabel"
          class="w-full h-auto"
          @error="($event.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221440%22 height=%22900%22%3E%3Crect fill=%22%23191b21%22 width=%221440%22 height=%22900%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23666%22 font-size=%2224%22 font-family=%22monospace%22%3EAfter%3C/text%3E%3C/svg%3E'"
        />

        <!-- Before image (clipped) -->
        <div
          class="absolute inset-0 overflow-hidden"
          :style="{ width: `${sliderPosition}%` }"
        >
          <img
            :src="beforeUrl"
            :alt="beforeLabel"
            class="w-full h-auto"
            :style="{ minWidth: containerRef ? `${containerRef.clientWidth}px` : '100%' }"
            @error="($event.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221440%22 height=%22900%22%3E%3Crect fill=%22%23191b21%22 width=%221440%22 height=%22900%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23666%22 font-size=%2224%22 font-family=%22monospace%22%3EBefore%3C/text%3E%3C/svg%3E'"
          />
        </div>

        <!-- Slider line -->
        <div
          class="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
          :style="{ left: `${sliderPosition}%` }"
        >
          <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
            <IH-arrows-expand class="size-4 text-gray-700 rotate-90" />
          </div>
        </div>

        <!-- Labels -->
        <div class="absolute top-3 left-3">
          <span class="text-xs font-semibold px-2 py-1 rounded-lg bg-red-500/80 text-white">
            {{ beforeLabel }}
          </span>
        </div>
        <div class="absolute top-3 right-3">
          <span class="text-xs font-semibold px-2 py-1 rounded-lg bg-green-500/80 text-white">
            {{ afterLabel }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
