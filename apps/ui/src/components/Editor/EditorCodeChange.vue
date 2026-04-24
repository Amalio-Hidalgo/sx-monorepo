<script setup lang="ts">
/**
 * Editor section: Code Change Proposal (sealed submission).
 *
 * Authors paste a git diff that gets encrypted client-side with libsodium
 * sealed_box against the TEE enclave's public key. The plaintext never leaves
 * the browser until it lands inside the enclave. Voters evaluate the behavior
 * preview the TEE produces, not the source code.
 */

export type CodeChangeInput = {
  enabled: boolean;
  baseRepoUrl: string;
  baseCommit: string;
  patch: string;
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

const patchLines = computed(() => local.value.patch.split('\n').length);
const patchBytes = computed(() => new TextEncoder().encode(local.value.patch).length);
const baseCommitValid = computed(() => /^[0-9a-fA-F]{40}$/.test(local.value.baseCommit));
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
          :class="local.enabled ? 'bg-purple-500/15 text-purple-400' : 'bg-skin-border/40 text-skin-text'"
        >
          ⚙
        </div>
        <div>
          <div class="text-sm font-semibold text-skin-link">Code Change (sealed)</div>
          <div class="text-xs text-skin-text">
            <template v-if="local.enabled">Patch encrypted to the TEE enclave; source sealed during voting</template>
            <template v-else>Submit an encrypted patch; voters see a verified preview, not the source</template>
          </div>
        </div>
      </div>
      <div
        class="size-9 rounded-full p-1 transition"
        :class="local.enabled ? 'bg-purple-500/40' : 'bg-skin-border/40'"
      >
        <div
          class="size-7 rounded-full bg-white transition-transform"
          :class="local.enabled ? 'translate-x-0' : '-translate-x-0'"
        />
      </div>
    </button>

    <div v-if="local.enabled" class="border-t border-skin-border p-4 space-y-3">
      <div>
        <UiEyebrow class="mb-1.5">Public base repo URL</UiEyebrow>
        <input
          :value="local.baseRepoUrl"
          type="text"
          placeholder="https://github.com/owner/repo"
          class="s-input s-input-pill !w-full"
          @input="(e: any) => update('baseRepoUrl', e.target.value)"
        />
        <div class="text-xs text-skin-text mt-1">
          The enclave checks out this repo at the exact commit below before applying your patch.
        </div>
      </div>

      <div>
        <UiEyebrow class="mb-1.5">Base commit (40-char SHA)</UiEyebrow>
        <input
          :value="local.baseCommit"
          type="text"
          placeholder="e.g. 9c8f5a2b1d4e7f6a3c5b8d9e2f1a4c7b6d9e3f5a"
          class="s-input s-input-pill !w-full font-mono text-xs"
          :class="local.baseCommit && !baseCommitValid ? '!border-red-500' : ''"
          @input="(e: any) => update('baseCommit', e.target.value.trim())"
        />
        <div class="text-xs mt-1" :class="local.baseCommit && !baseCommitValid ? 'text-red-400' : 'text-skin-text'">
          <template v-if="local.baseCommit && !baseCommitValid">Must be a 40-char hex SHA</template>
          <template v-else>Pin the exact commit your patch applies against — the enclave verifies this.</template>
        </div>
      </div>

      <div>
        <UiEyebrow class="mb-1.5">Patch (git diff output)</UiEyebrow>
        <textarea
          :value="local.patch"
          rows="10"
          placeholder="diff --git a/file.txt b/file.txt&#10;index abc..def 100644&#10;--- a/file.txt&#10;+++ b/file.txt&#10;@@ -1 +1 @@&#10;-old&#10;+new"
          class="s-input s-input-pill !w-full font-mono text-xs !rounded-lg !py-2 !px-3"
          style="resize: vertical"
          @input="(e: any) => update('patch', e.target.value)"
        />
        <div class="text-xs text-skin-text mt-1">
          Paste the output of <code class="s-input-mono">git diff {{ local.baseCommit ? local.baseCommit.slice(0, 7) + '..HEAD' : 'BASE..HEAD' }}</code>.
          <span v-if="local.patch">{{ patchLines }} lines, {{ patchBytes }} bytes — encrypted client-side before upload.</span>
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
        <span class="text-purple-400 font-semibold">Sealed submission:</span>
        your patch is encrypted in the browser against the enclave's published public key.
        The enclave decrypts it internally, applies it on the base commit, and produces a signed
        TEE attestation + verified preview. Source stays sealed until the vote passes and the
        timelock expires.
      </div>
    </div>
  </div>
</template>
