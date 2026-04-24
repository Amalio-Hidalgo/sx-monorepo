<script setup lang="ts">
/**
 * Editor section: Code Change Proposal.
 *
 * When enabled, after the user submits the proposal we POST to our /ge/proposal
 * backend to register the GitHub Execution data. The TEE service builds the PR
 * inside an Intel TDX enclave and produces a verified preview, which is rendered
 * automatically by Proposal/Overview.vue.
 */

export type CodeChangeInput = {
  enabled: boolean;
  repoUrl: string;
  prBranch: string;
  baseBranch: string;
  prNumber: string;
  prTitle: string;
  compensationAmount: string; // wei / atomic units
  compensationSymbol: string;
  compensationRecipient: string;
};

const props = defineProps<{
  modelValue: CodeChangeInput;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: CodeChangeInput];
}>();

const local = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v),
});

function update(field: keyof CodeChangeInput, value: any) {
  emit('update:modelValue', { ...local.value, [field]: value });
}
</script>

<template>
  <div class="rounded-lg border border-skin-border bg-skin-block-bg overflow-hidden">
    <button
      type="button"
      class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-skin-bg/30"
      @click="update('enabled', !local.enabled)"
    >
      <div class="flex items-center gap-2.5">
        <div
          class="size-8 rounded-lg flex items-center justify-center text-sm"
          :class="local.enabled ? 'bg-green-500/15 text-green-500' : 'bg-skin-border/40 text-skin-text'"
        >
          ⚙
        </div>
        <div>
          <div class="text-sm font-semibold text-skin-link">Code Change</div>
          <div class="text-xs text-skin-text">
            <template v-if="local.enabled">TEE-verified preview will be attached</template>
            <template v-else>Attach a GitHub PR + verified preview (off)</template>
          </div>
        </div>
      </div>
      <div
        class="size-9 rounded-full p-1 transition"
        :class="local.enabled ? 'bg-green-500/30' : 'bg-skin-border/40'"
      >
        <div
          class="size-7 rounded-full bg-white transition-transform"
          :class="local.enabled ? 'translate-x-0' : '-translate-x-0'"
        />
      </div>
    </button>

    <div v-if="local.enabled" class="border-t border-skin-border p-4 space-y-3">
      <div>
        <UiEyebrow class="mb-1.5">GitHub Repo URL</UiEyebrow>
        <input
          :value="local.repoUrl"
          type="text"
          placeholder="https://github.com/owner/repo"
          class="s-input s-input-pill !w-full"
          @input="(e: any) => update('repoUrl', e.target.value)"
        />
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <UiEyebrow class="mb-1.5">PR Branch</UiEyebrow>
          <input
            :value="local.prBranch"
            type="text"
            placeholder="feat/my-change"
            class="s-input s-input-pill !w-full"
            @input="(e: any) => update('prBranch', e.target.value)"
          />
        </div>
        <div>
          <UiEyebrow class="mb-1.5">Base Branch</UiEyebrow>
          <input
            :value="local.baseBranch"
            type="text"
            placeholder="main"
            class="s-input s-input-pill !w-full"
            @input="(e: any) => update('baseBranch', e.target.value)"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <UiEyebrow class="mb-1.5">PR Number (optional)</UiEyebrow>
          <input
            :value="local.prNumber"
            type="number"
            placeholder="1842"
            class="s-input s-input-pill !w-full"
            @input="(e: any) => update('prNumber', e.target.value)"
          />
        </div>
        <div>
          <UiEyebrow class="mb-1.5">PR Title (optional)</UiEyebrow>
          <input
            :value="local.prTitle"
            type="text"
            placeholder="Short description"
            class="s-input s-input-pill !w-full"
            @input="(e: any) => update('prTitle', e.target.value)"
          />
        </div>
      </div>

      <div class="pt-3 border-t border-skin-border/40">
        <div class="text-xs text-skin-text uppercase tracking-wider font-semibold mb-2">
          Compensation (locked in escrow if vote passes)
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div>
            <UiEyebrow class="mb-1.5">Amount</UiEyebrow>
            <input
              :value="local.compensationAmount"
              type="text"
              placeholder="0"
              class="s-input s-input-pill !w-full font-mono"
              @input="(e: any) => update('compensationAmount', e.target.value)"
            />
          </div>
          <div>
            <UiEyebrow class="mb-1.5">Symbol</UiEyebrow>
            <input
              :value="local.compensationSymbol"
              type="text"
              placeholder="USDC"
              class="s-input s-input-pill !w-full"
              @input="(e: any) => update('compensationSymbol', e.target.value)"
            />
          </div>
          <div>
            <UiEyebrow class="mb-1.5">Recipient</UiEyebrow>
            <input
              :value="local.compensationRecipient"
              type="text"
              placeholder="0x…"
              class="s-input s-input-pill !w-full font-mono text-xs"
              @input="(e: any) => update('compensationRecipient', e.target.value)"
            />
          </div>
        </div>
      </div>

      <div class="text-xs text-skin-text leading-relaxed pt-2">
        Once the proposal is created, the TEE service clones the repo, builds the PR inside an
        Intel TDX enclave, and posts the signed attestation + screenshots to this proposal page.
        Voters see the verified preview alongside voting.
      </div>
    </div>
  </div>
</template>
