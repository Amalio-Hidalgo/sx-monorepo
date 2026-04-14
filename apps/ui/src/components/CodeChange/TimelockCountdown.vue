<script setup lang="ts">
import { useCodeChange } from '@/composables/useCodeChange';

const props = defineProps<{
  proposalId: string;
  timelockEnd: number; // Unix timestamp
  codeReleaseStatus: 'hidden' | 'released' | 'vetoed';
  isAdmin: boolean;
}>();

const emit = defineEmits<{
  (e: 'released'): void;
  (e: 'vetoed'): void;
}>();

const { releaseCode, vetoProposal } = useCodeChange();
const { web3 } = useWeb3();

const now = ref(Math.floor(Date.now() / 1000));
const releasing = ref(false);
const vetoing = ref(false);
const actionError = ref<string | null>(null);

// Update clock every second
let interval: ReturnType<typeof setInterval>;
onMounted(() => {
  interval = setInterval(() => {
    now.value = Math.floor(Date.now() / 1000);
  }, 1000);
});
onUnmounted(() => clearInterval(interval));

const timeRemaining = computed(() => {
  const diff = props.timelockEnd - now.value;
  if (diff <= 0) return null;

  const days = Math.floor(diff / 86400);
  const hours = Math.floor((diff % 86400) / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = diff % 60;

  if (days > 0) return `${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
  return `${minutes}m ${seconds}s`;
});

const timelockExpired = computed(() => now.value >= props.timelockEnd);
const canRelease = computed(() => timelockExpired.value && props.codeReleaseStatus === 'hidden');
const canVeto = computed(() => !timelockExpired.value && props.isAdmin && props.codeReleaseStatus === 'hidden');

async function handleRelease() {
  if (!web3.value.account) return;
  releasing.value = true;
  actionError.value = null;
  try {
    await releaseCode(props.proposalId, web3.value.account);
    emit('released');
  } catch (e: any) {
    actionError.value = e.message;
  } finally {
    releasing.value = false;
  }
}

async function handleVeto() {
  if (!web3.value.account) return;
  vetoing.value = true;
  actionError.value = null;
  try {
    await vetoProposal(props.proposalId, web3.value.account);
    emit('vetoed');
  } catch (e: any) {
    actionError.value = e.message;
  } finally {
    vetoing.value = false;
  }
}
</script>

<template>
  <div class="rounded-xl border border-skin-border p-4 space-y-3">
    <div class="flex items-center gap-2 text-sm font-semibold text-skin-text uppercase tracking-wider">
      <IH-clock class="size-4" />
      <span>Code Release</span>
    </div>

    <!-- Released -->
    <div v-if="codeReleaseStatus === 'released'" class="flex items-center gap-2 text-green-500">
      <IH-check-circle class="size-5" />
      <span class="font-medium">Code Released</span>
    </div>

    <!-- Vetoed -->
    <div v-else-if="codeReleaseStatus === 'vetoed'" class="flex items-center gap-2 text-red-500">
      <IH-x-circle class="size-5" />
      <span class="font-medium">Vetoed by Admin</span>
    </div>

    <!-- Timelock active -->
    <template v-else>
      <!-- Countdown -->
      <div v-if="timeRemaining" class="text-center">
        <div class="text-2xl font-bold text-skin-link font-mono">
          {{ timeRemaining }}
        </div>
        <div class="text-xs text-skin-text mt-1">until code can be released</div>
      </div>

      <!-- Timelock expired -->
      <div v-else class="text-center">
        <div class="text-sm text-green-500 font-medium">Timelock expired</div>
      </div>

      <!-- Progress bar -->
      <div class="h-1.5 bg-skin-border rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-1000"
          :class="timelockExpired ? 'bg-green-500' : 'bg-[#384aff]'"
          :style="{ width: `${Math.min(100, ((now - (timelockEnd - (timelockEnd - now))) / (timelockEnd - (timelockEnd - now))) * 100 || 0)}%` }"
        />
      </div>

      <!-- Actions -->
      <div class="flex gap-2">
        <button
          v-if="canRelease"
          :disabled="releasing"
          class="flex-1 py-2 px-4 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition-colors disabled:opacity-50"
          @click="handleRelease"
        >
          {{ releasing ? 'Releasing...' : 'Release Code' }}
        </button>

        <button
          v-if="canVeto"
          :disabled="vetoing"
          class="flex-1 py-2 px-4 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 font-medium hover:bg-red-500/20 transition-colors disabled:opacity-50"
          @click="handleVeto"
        >
          {{ vetoing ? 'Vetoing...' : 'Veto' }}
        </button>
      </div>

      <!-- Error -->
      <div v-if="actionError" class="text-xs text-red-500">
        {{ actionError }}
      </div>
    </template>
  </div>
</template>
