<script setup lang="ts">
import CodeChangeProposal from '@/components/CodeChange/CodeChangeProposal.vue';
import AttestationBadge from '@/components/CodeChange/AttestationBadge.vue';
import type { CodeChangeData } from '@/components/CodeChange/CodeChangeProposal.vue';
import type { Attestation } from '@/components/CodeChange/AttestationBadge.vue';

const { setTitle } = useTitle();
setTitle('Code Change Proposal - GitHub Integration Demo');

// Simulated vote state
const hasVoted = ref(false);
const selectedChoice = ref<'for' | 'against' | 'abstain' | null>(null);
const voteCount = ref(47);
const forVotes = ref(892_450);
const againstVotes = ref(123_200);
const abstainVotes = ref(45_800);
const totalVp = computed(() => forVotes.value + againstVotes.value + abstainVotes.value);
const quorum = 500_000;
const quorumReached = computed(() => forVotes.value + againstVotes.value >= quorum);

function handleVote(choice: 'for' | 'against' | 'abstain') {
  selectedChoice.value = choice;
  hasVoted.value = true;
  voteCount.value += 1;
  if (choice === 'for') forVotes.value += 15_000;
  else if (choice === 'against') againstVotes.value += 15_000;
  else abstainVotes.value += 15_000;
}

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toString();
}

// Build the mock attestation
const mockAttestation: Attestation = {
  version: '1.0.0',
  enclave: {
    type: 'sgx-dcap',
    mrenclave: 'a3f8c2d1e5b94706..82c1d3f07a9e4b56',
    mrsigner: '7b2e4f8a1c3d5609..f4a2b7e1d8c36950'
  },
  measurements: {
    code_hash: 'e7a3f2c8d1b5490682c1d3f07a9e4b56789abcdef0123456789abcdef012345',
    output_hash: '4f8a1c3d56097b2e4f8a1c3d56097b2e4f8a1c3d56097b2e4f8a1c3d560970',
    repo_url: 'https://github.com/snapshot-labs/sx-monorepo',
    branch: 'feat/github-integration',
    base_branch: 'main',
    timestamp: new Date(Date.now() - 3600000).toISOString()
  },
  signature: 'a7c3e8f2d1b54906a7c3e8f2d1b54906a7c3e8f2d1b54906a7c3e8f2d1b54906',
  certificate: '-----BEGIN TEE ATTESTATION-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A...\n-----END TEE ATTESTATION-----'
};

const codeChangeData: CodeChangeData = {
  repoUrl: 'https://github.com/snapshot-labs/sx-monorepo',
  branch: 'feat/github-integration',
  baseBranch: 'main',
  prNumber: 1842,
  prTitle: 'Add GitHub integration with TEE-verified code previews',
  screenshots: {
    // Use placeholder SVGs for demo - in production these come from the TEE build service
    before: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='900'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23191b21'/%3E%3Cstop offset='1' stop-color='%23212330'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23bg)' width='1440' height='900'/%3E%3Crect x='0' y='0' width='1440' height='56' fill='%23252834' /%3E%3Ccircle cx='32' cy='28' r='14' fill='%23384aff'/%3E%3Crect x='56' y='18' width='120' height='20' rx='4' fill='%23383b47'/%3E%3Crect x='1200' y='14' width='100' height='28' rx='14' fill='%23384aff'/%3E%3Ctext x='1250' y='33' font-family='system-ui' font-size='13' fill='white' text-anchor='middle'%3EConnect%3C/text%3E%3Crect x='60' y='80' width='900' height='40' rx='8' fill='%23252834'/%3E%3Ctext x='80' y='105' font-family='system-ui' font-size='14' fill='%23666'%3ESearch spaces...%3C/text%3E%3Crect x='60' y='150' width='420' height='280' rx='12' fill='%23252834'/%3E%3Ctext x='80' y='180' font-family='system-ui' font-size='16' fill='%23999'%3ESIP-42: Treasury Diversification%3C/text%3E%3Crect x='80' y='195' width='60' height='22' rx='4' fill='%23166534'/%3E%3Ctext x='90' y='210' font-family='system-ui' font-size='11' fill='%2322c55e'%3EActive%3C/text%3E%3Crect x='80' y='230' width='380' height='8' rx='4' fill='%23383b47'/%3E%3Crect x='80' y='230' width='260' height='8' rx='4' fill='%23384aff'/%3E%3Crect x='80' y='250' width='380' height='8' rx='4' fill='%23383b47'/%3E%3Crect x='80' y='250' width='140' height='8' rx='4' fill='%23ef4444'/%3E%3Crect x='500' y='150' width='420' height='280' rx='12' fill='%23252834'/%3E%3Ctext x='520' y='180' font-family='system-ui' font-size='16' fill='%23999'%3ESIP-41: Update Voting Strategy%3C/text%3E%3Crect x='520' y='195' width='60' height='22' rx='4' fill='%23713f12'/%3E%3Ctext x='530' y='210' font-family='system-ui' font-size='11' fill='%23eab308'%3EPending%3C/text%3E%3Ctext x='720' y='800' font-family='system-ui' font-size='18' fill='%23555' text-anchor='middle'%3ESnapshot - Standard Proposal View%3C/text%3E%3C/svg%3E",
    after: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='900'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23191b21'/%3E%3Cstop offset='1' stop-color='%23212330'/%3E%3C/linearGradient%3E%3ClinearGradient id='glow' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23384aff' stop-opacity='0.15'/%3E%3Cstop offset='1' stop-color='%2322c55e' stop-opacity='0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23bg)' width='1440' height='900'/%3E%3Crect x='0' y='0' width='1440' height='56' fill='%23252834' /%3E%3Ccircle cx='32' cy='28' r='14' fill='%23384aff'/%3E%3Crect x='56' y='18' width='120' height='20' rx='4' fill='%23383b47'/%3E%3Crect x='1200' y='14' width='100' height='28' rx='14' fill='%23384aff'/%3E%3Ctext x='1250' y='33' font-family='system-ui' font-size='13' fill='white' text-anchor='middle'%3EConnect%3C/text%3E%3Ctext x='80' y='105' font-family='system-ui,sans-serif' font-size='32' fill='white' font-weight='bold'%3ESIP-43: GitHub Integration with TEE Previews%3C/text%3E%3Crect x='60' y='120' width='110' height='24' rx='4' fill='%23166534'/%3E%3Ctext x='72' y='136' font-family='system-ui' font-size='12' fill='%2322c55e'%3EActive - 3d left%3C/text%3E%3Crect x='60' y='165' width='900' height='320' rx='12' fill='url(%23glow)' stroke='%23384aff' stroke-opacity='0.3' stroke-width='1'/%3E%3Crect x='80' y='185' width='60' height='22' rx='4' fill='%2322c55e20'/%3E%3Ccircle cx='93' cy='196' r='7' fill='none' stroke='%2322c55e' stroke-width='2'/%3E%3Cline x1='89' y1='196' x2='92' y2='199' stroke='%2322c55e' stroke-width='2'/%3E%3Cline x1='92' y1='199' x2='98' y2='192' stroke='%2322c55e' stroke-width='2'/%3E%3Ctext x='115' y='200' font-family='system-ui' font-size='13' fill='%2322c55e' font-weight='600'%3ETEE Verified%3C/text%3E%3Ctext x='240' y='200' font-family='monospace' font-size='11' fill='%23666'%3Esgx-dcap | e7a3f2c8...%3C/text%3E%3Crect x='80' y='220' width='420' height='240' rx='8' fill='%23191b21'/%3E%3Ctext x='100' y='245' font-family='system-ui' font-size='11' fill='%2322c55e' font-weight='600'%3EProposed%3C/text%3E%3Crect x='80' y='255' width='420' height='200' fill='%23252834'/%3E%3Ctext x='200' y='360' font-family='system-ui' font-size='14' fill='%23666' text-anchor='middle'%3ECode Preview%3C/text%3E%3Crect x='520' y='220' width='420' height='240' rx='8' fill='%23191b21'/%3E%3Ctext x='540' y='245' font-family='system-ui' font-size='11' fill='%23ef4444' font-weight='600'%3ECurrent%3C/text%3E%3Crect x='520' y='255' width='420' height='200' fill='%23252834'/%3E%3Crect x='60' y='510' width='900' height='100' rx='12' fill='%23252834'/%3E%3Ctext x='80' y='540' font-family='system-ui' font-size='13' fill='%23666'%3ECompensation%3C/text%3E%3Ctext x='80' y='570' font-family='system-ui' font-size='24' fill='white' font-weight='bold'%3E25,000 USDC%3C/text%3E%3Ctext x='260' y='570' font-family='system-ui' font-size='14' fill='%23666'%3Eto contributor.eth%3C/text%3E%3Crect x='1000' y='165' width='380' height='200' rx='12' fill='%23252834'/%3E%3Ctext x='1020' y='195' font-family='system-ui' font-size='13' fill='%23666'%3ECast your vote%3C/text%3E%3Crect x='1020' y='210' width='340' height='40' rx='8' fill='%23166534' /%3E%3Ctext x='1190' y='235' font-family='system-ui' font-size='14' fill='%2322c55e' text-anchor='middle' font-weight='600'%3EFor%3C/text%3E%3Crect x='1020' y='260' width='340' height='40' rx='8' fill='%23450a0a' /%3E%3Ctext x='1190' y='285' font-family='system-ui' font-size='14' fill='%23ef4444' text-anchor='middle' font-weight='600'%3EAgainst%3C/text%3E%3Crect x='1020' y='310' width='340' height='40' rx='8' fill='%2327272a' /%3E%3Ctext x='1190' y='335' font-family='system-ui' font-size='14' fill='%23999' text-anchor='middle' font-weight='600'%3EAbstain%3C/text%3E%3Ctext x='720' y='800' font-family='system-ui' font-size='18' fill='%23384aff' text-anchor='middle' font-weight='600'%3ESnapshot - Code Change Proposal with GitHub Integration%3C/text%3E%3C/svg%3E"
  },
  attestation: mockAttestation,
  attestationStatus: 'verified',
  compensation: {
    token: 'USDC',
    amount: '25,000',
    recipient: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18',
    recipientName: 'contributor.eth',
    milestones: [
      { label: 'PR merged to staging', percentage: 30, status: 'complete' },
      { label: 'Deployed to production', percentage: 40, status: 'active' },
      { label: '30-day stability period', percentage: 30, status: 'pending' }
    ]
  },
  diffStats: {
    filesChanged: 24,
    additions: 1847,
    deletions: 203
  }
};

// Simulated proposal metadata
const proposalMeta = {
  id: 'SIP-43',
  title: 'Add GitHub Integration with TEE-Verified Code Previews',
  author: {
    name: 'contributor.eth',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18'
  },
  space: {
    name: 'Snapshot',
    id: 'snapshot.eth'
  },
  state: 'active' as const,
  created: new Date(Date.now() - 86400000 * 2),
  start: new Date(Date.now() - 86400000 * 2),
  end: new Date(Date.now() + 86400000 * 3),
  body: `## Summary

This proposal introduces GitHub integration to Snapshot, enabling DAOs to create **code change proposals** that include TEE-verified previews of the actual changes.

## Motivation

Today, when a DAO votes on a code change, voters must trust that:
1. The code described in the proposal matches what will actually be deployed
2. The preview/screenshots shown are accurate representations of the change
3. The developer will deploy exactly what was approved

This creates a trust gap between governance decisions and code execution.

## Solution

We introduce a new proposal type - **Code Change Proposal** - that bridges GitHub PRs with Snapshot voting:

1. **TEE Build Service** - Code is cloned, built, and rendered inside a Trusted Execution Environment (TEE). The TEE produces cryptographic attestations proving the screenshots match the actual code.

2. **Visual Diff** - Voters see real before/after screenshots of the running application, with a slider to compare changes. No more trusting mockups.

3. **Milestone-Based Compensation** - Payment is released in stages (merge, deploy, stability period) based on on-chain verification.

4. **Attestation Verification** - Anyone can verify the TEE attestation to confirm the preview was generated from the exact code in the PR.

## Technical Details

- TEE enclave: Intel SGX with DCAP attestation
- Build environment: Node.js 20, isolated from network after clone
- Screenshot capture: Playwright running inside the enclave
- Attestation includes: code hash, output hash, MRENCLAVE, MRSIGNER

## Compensation

25,000 USDC to contributor.eth, released in milestones:
- 30% on PR merge to staging
- 40% on production deployment
- 30% after 30-day stability period`
};
</script>

<template>
  <div class="min-h-screen bg-skin-bg">
    <!-- Hero banner -->
    <div class="relative overflow-hidden border-b border-skin-border">
      <div class="absolute inset-0 bg-gradient-to-br from-[#384aff]/10 via-transparent to-green-500/5" />
      <div class="relative max-w-[1200px] mx-auto px-4 py-12 md:py-16">
        <div class="flex items-center gap-2 mb-4">
          <span class="px-2.5 py-1 rounded-lg bg-[#384aff]/10 text-[#384aff] text-xs font-semibold tracking-wider uppercase">
            New Feature
          </span>
          <span class="px-2.5 py-1 rounded-lg bg-green-500/10 text-green-500 text-xs font-semibold tracking-wider uppercase">
            Proof of Concept
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-skin-link mb-4 leading-tight">
          GitHub Integration
          <br />
          <span class="text-[#384aff]">for Snapshot Governance</span>
        </h1>
        <p class="text-lg text-skin-text max-w-[640px] leading-relaxed">
          Vote on real code changes with TEE-verified previews. What you see is exactly what gets deployed - cryptographically guaranteed.
        </p>
      </div>
    </div>

    <!-- Main content: simulated proposal view -->
    <div class="flex items-stretch md:flex-row flex-col w-full">
      <!-- Left: Proposal content -->
      <div class="flex-1 grow min-w-0">
        <div class="max-w-[730px] mx-0 md:mx-auto px-4 pt-5">
          <!-- Proposal header -->
          <h1 class="mb-3 text-[42px] leading-[1.1em] break-words">
            {{ proposalMeta.title }}
          </h1>

          <div class="flex items-center gap-2 mb-4">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-sm font-medium bg-green-500/10 text-green-500 border border-green-500/20">
              <span class="size-1.5 rounded-full bg-green-500 animate-pulse" />
              Active
            </span>
            <span class="text-skin-text text-sm">
              Ends in 3 days
            </span>
          </div>

          <!-- Author -->
          <div class="flex justify-between items-center mb-6">
            <div class="flex items-center py-3">
              <div class="size-8 rounded-full bg-gradient-to-br from-[#384aff] to-purple-600 mr-2" />
              <div class="flex flex-col leading-4 gap-1">
                <div class="font-medium text-skin-link">{{ proposalMeta.author.name }}</div>
                <span class="text-skin-text text-sm">
                  In {{ proposalMeta.space.name }} - 2 days ago - {{ proposalMeta.id }}
                </span>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <AttestationBadge status="verified" compact />
            </div>
          </div>

          <!-- Code Change Section - this is the new part -->
          <CodeChangeProposal :data="codeChangeData" />

          <!-- Proposal body -->
          <div class="mt-8 mb-8 prose prose-invert max-w-none">
            <div class="space-y-4 text-skin-link">
              <h2 class="text-xl font-bold">Summary</h2>
              <p class="text-skin-text leading-relaxed">
                This proposal introduces GitHub integration to Snapshot, enabling DAOs to create code change proposals
                that include TEE-verified previews of the actual changes.
              </p>

              <h2 class="text-xl font-bold">Motivation</h2>
              <p class="text-skin-text leading-relaxed">
                Today, when a DAO votes on a code change, voters must trust that the code described in the proposal
                matches what will actually be deployed, the preview/screenshots shown are accurate representations
                of the change, and the developer will deploy exactly what was approved.
              </p>
              <p class="text-skin-text leading-relaxed">
                This creates a trust gap between governance decisions and code execution.
              </p>

              <h2 class="text-xl font-bold">Solution</h2>
              <p class="text-skin-text leading-relaxed">
                We introduce a new proposal type - <strong>Code Change Proposal</strong> - that bridges GitHub PRs
                with Snapshot voting through TEE-verified builds, visual diffs, milestone-based compensation, and
                attestation verification.
              </p>

              <h2 class="text-xl font-bold">The Meta Angle</h2>
              <div class="rounded-xl border border-[#384aff]/30 bg-[#384aff]/5 p-4">
                <p class="text-skin-link leading-relaxed">
                  <strong>This proposal is self-referential.</strong> The screenshots above show the Snapshot UI itself -
                  before and after this GitHub integration feature. The code runs in a TEE, producing the preview you
                  are looking at right now. By voting to approve this change, you are voting to deploy the very feature
                  that enables this new type of proposal.
                </p>
              </div>
            </div>
          </div>

          <!-- Vote count -->
          <div class="text-skin-text pb-8">
            {{ voteCount }} votes - Ends in 3 days
          </div>
        </div>
      </div>

      <!-- Right: Sidebar -->
      <div class="shrink-0 md:w-[340px] md:max-w-[440px] md:min-w-[340px] md:border-l border-skin-border bg-skin-bg">
        <div class="sticky top-0 flex flex-col space-y-4 p-4">
          <!-- Cast your vote -->
          <div>
            <div class="flex items-center gap-2 mb-2.5 text-xs font-semibold text-skin-text uppercase tracking-wider">
              <IH-cursor-click class="size-4" />
              <span>{{ hasVoted ? 'Your vote' : 'Cast your vote' }}</span>
            </div>

            <div v-if="!hasVoted" class="space-y-2">
              <div class="flex items-center gap-1.5 text-sm text-skin-text mb-2">
                <span>Voting power:</span>
                <span class="text-skin-link">15,000 SNAP</span>
              </div>
              <button
                class="w-full py-2.5 px-4 rounded-xl border border-green-500/30 text-green-500 hover:bg-green-500/10 transition-colors font-medium"
                @click="handleVote('for')"
              >
                For
              </button>
              <button
                class="w-full py-2.5 px-4 rounded-xl border border-red-500/30 text-red-500 hover:bg-red-500/10 transition-colors font-medium"
                @click="handleVote('against')"
              >
                Against
              </button>
              <button
                class="w-full py-2.5 px-4 rounded-xl border border-skin-border text-skin-text hover:bg-skin-border/50 transition-colors font-medium"
                @click="handleVote('abstain')"
              >
                Abstain
              </button>
            </div>

            <div v-else class="rounded-xl border border-green-500/20 bg-green-500/5 p-3">
              <div class="flex items-center gap-2 text-green-500">
                <IH-check-circle class="size-5" />
                <span class="font-medium">Voted {{ selectedChoice }}</span>
              </div>
              <div class="text-sm text-skin-text mt-1">15,000 SNAP</div>
            </div>
          </div>

          <!-- Results -->
          <div>
            <div class="flex items-center gap-2 mb-2.5 text-xs font-semibold text-skin-text uppercase tracking-wider">
              <IH-chart-square-bar class="size-4" />
              Results
            </div>

            <div class="space-y-3">
              <!-- For -->
              <div>
                <div class="flex items-center justify-between text-sm mb-1">
                  <span class="text-skin-link">For</span>
                  <span class="text-skin-text">{{ formatNumber(forVotes) }} SNAP ({{ Math.round(forVotes / totalVp * 100) }}%)</span>
                </div>
                <div class="h-2 bg-skin-border rounded-full overflow-hidden">
                  <div class="h-full bg-green-500 rounded-full transition-all" :style="{ width: `${forVotes / totalVp * 100}%` }" />
                </div>
              </div>

              <!-- Against -->
              <div>
                <div class="flex items-center justify-between text-sm mb-1">
                  <span class="text-skin-link">Against</span>
                  <span class="text-skin-text">{{ formatNumber(againstVotes) }} SNAP ({{ Math.round(againstVotes / totalVp * 100) }}%)</span>
                </div>
                <div class="h-2 bg-skin-border rounded-full overflow-hidden">
                  <div class="h-full bg-red-500 rounded-full transition-all" :style="{ width: `${againstVotes / totalVp * 100}%` }" />
                </div>
              </div>

              <!-- Abstain -->
              <div>
                <div class="flex items-center justify-between text-sm mb-1">
                  <span class="text-skin-link">Abstain</span>
                  <span class="text-skin-text">{{ formatNumber(abstainVotes) }} SNAP ({{ Math.round(abstainVotes / totalVp * 100) }}%)</span>
                </div>
                <div class="h-2 bg-skin-border rounded-full overflow-hidden">
                  <div class="h-full bg-gray-500 rounded-full transition-all" :style="{ width: `${abstainVotes / totalVp * 100}%` }" />
                </div>
              </div>

              <!-- Quorum -->
              <div class="pt-2 border-t border-skin-border">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-skin-text">Quorum</span>
                  <span :class="quorumReached ? 'text-green-500' : 'text-yellow-500'">
                    {{ formatNumber(forVotes + againstVotes) }} / {{ formatNumber(quorum) }}
                    <IH-check-circle v-if="quorumReached" class="inline-block size-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline -->
          <div>
            <div class="flex items-center gap-2 mb-2.5 text-xs font-semibold text-skin-text uppercase tracking-wider">
              <IH-clock class="size-4" />
              Timeline
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex items-center justify-between">
                <span class="text-skin-text">Created</span>
                <span class="text-skin-link">2 days ago</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-skin-text">Start</span>
                <span class="text-skin-link">2 days ago</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-skin-text">End</span>
                <span class="text-skin-link">in 3 days</span>
              </div>
            </div>
          </div>

          <!-- TEE Info -->
          <div>
            <div class="flex items-center gap-2 mb-2.5 text-xs font-semibold text-skin-text uppercase tracking-wider">
              <IH-shield-check class="size-4" />
              TEE Verification
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex items-center justify-between">
                <span class="text-skin-text">Enclave</span>
                <span class="text-skin-link font-mono text-xs">SGX-DCAP</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-skin-text">Build Status</span>
                <span class="text-green-500 flex items-center gap-1">
                  <IH-check-circle class="size-3.5" /> Verified
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-skin-text">PR</span>
                <a href="#" class="text-[#384aff] hover:underline">#1842</a>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-skin-text">Files Changed</span>
                <span class="text-skin-link">24</span>
              </div>
              <div class="flex items-center gap-2 justify-end">
                <span class="text-green-500">+1,847</span>
                <span class="text-red-500">-203</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- How it works section -->
    <div class="border-t border-skin-border">
      <div class="max-w-[1200px] mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold text-skin-link mb-2">How It Works</h2>
        <p class="text-skin-text mb-12 text-lg">End-to-end verifiable code governance in four steps.</p>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="relative p-6 rounded-xl border border-skin-border bg-skin-bg">
            <div class="text-5xl font-bold text-[#384aff]/20 mb-3">01</div>
            <h3 class="text-lg font-semibold text-skin-link mb-2">Submit PR</h3>
            <p class="text-sm text-skin-text leading-relaxed">
              Developer opens a pull request on GitHub. The PR reference is linked to a new Snapshot proposal.
            </p>
          </div>

          <div class="relative p-6 rounded-xl border border-skin-border bg-skin-bg">
            <div class="text-5xl font-bold text-[#384aff]/20 mb-3">02</div>
            <h3 class="text-lg font-semibold text-skin-link mb-2">TEE Build</h3>
            <p class="text-sm text-skin-text leading-relaxed">
              Code is cloned and built inside a Trusted Execution Environment. The TEE captures before/after screenshots and produces a cryptographic attestation.
            </p>
          </div>

          <div class="relative p-6 rounded-xl border border-skin-border bg-skin-bg">
            <div class="text-5xl font-bold text-[#384aff]/20 mb-3">03</div>
            <h3 class="text-lg font-semibold text-skin-link mb-2">Vote</h3>
            <p class="text-sm text-skin-text leading-relaxed">
              Token holders review the verified preview and vote on the proposal. They can see exactly what the change looks like, backed by TEE attestation.
            </p>
          </div>

          <div class="relative p-6 rounded-xl border border-skin-border bg-skin-bg">
            <div class="text-5xl font-bold text-[#384aff]/20 mb-3">04</div>
            <h3 class="text-lg font-semibold text-skin-link mb-2">Deploy & Pay</h3>
            <p class="text-sm text-skin-text leading-relaxed">
              Once approved, the code is deployed and compensation is released in milestones. Each stage is verifiable on-chain.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Technical architecture -->
    <div class="border-t border-skin-border bg-skin-bg">
      <div class="max-w-[1200px] mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold text-skin-link mb-8">Architecture</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-xl border border-[#384aff]/20 bg-[#384aff]/5">
            <div class="size-12 rounded-lg bg-[#384aff]/10 flex items-center justify-center mb-4">
              <IH-code class="size-6 text-[#384aff]" />
            </div>
            <h3 class="text-lg font-semibold text-skin-link mb-2">TEE Build Service</h3>
            <p class="text-sm text-skin-text leading-relaxed mb-3">
              Isolated build environment running inside Intel SGX. Clones the repo, runs the build, captures screenshots
              with Playwright, and produces DCAP attestations.
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span class="px-2 py-0.5 rounded text-xs bg-skin-border text-skin-text">Node.js</span>
              <span class="px-2 py-0.5 rounded text-xs bg-skin-border text-skin-text">Playwright</span>
              <span class="px-2 py-0.5 rounded text-xs bg-skin-border text-skin-text">Docker</span>
              <span class="px-2 py-0.5 rounded text-xs bg-skin-border text-skin-text">SGX</span>
            </div>
          </div>

          <div class="p-6 rounded-xl border border-green-500/20 bg-green-500/5">
            <div class="size-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
              <IH-shield-check class="size-6 text-green-500" />
            </div>
            <h3 class="text-lg font-semibold text-skin-link mb-2">Attestation Layer</h3>
            <p class="text-sm text-skin-text leading-relaxed mb-3">
              Cryptographic proof linking code hash, build output, and screenshots. Verifiable by anyone - the attestation
              proves the preview was generated from the exact code in the PR.
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span class="px-2 py-0.5 rounded text-xs bg-skin-border text-skin-text">MRENCLAVE</span>
              <span class="px-2 py-0.5 rounded text-xs bg-skin-border text-skin-text">MRSIGNER</span>
              <span class="px-2 py-0.5 rounded text-xs bg-skin-border text-skin-text">DCAP</span>
            </div>
          </div>

          <div class="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5">
            <div class="size-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
              <IH-cash class="size-6 text-purple-500" />
            </div>
            <h3 class="text-lg font-semibold text-skin-link mb-2">Compensation Engine</h3>
            <p class="text-sm text-skin-text leading-relaxed mb-3">
              Milestone-based payment release. Each milestone (merge, deploy, stability) can be verified on-chain.
              Funds are held in a space treasury and released automatically.
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span class="px-2 py-0.5 rounded text-xs bg-skin-border text-skin-text">Safe</span>
              <span class="px-2 py-0.5 rounded text-xs bg-skin-border text-skin-text">Milestones</span>
              <span class="px-2 py-0.5 rounded text-xs bg-skin-border text-skin-text">Escrow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
