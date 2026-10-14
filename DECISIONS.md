<p align="left">
  <a href="./README.md"><img src="./assets/tab-overview-active.svg" alt="01 Overview" height="28" /></a>
  <a href="./WORK.md"><img src="./assets/tab-work.svg" alt="02 Work (10)" height="28" /></a>
  <a href="./DECISIONS.md"><img src="./assets/tab-decisions.svg" alt="03 Decisions" height="28" /></a>
  <a href="./STACK.md"><img src="./assets/tab-stack.svg" alt="04 Stack/Env" height="28" /></a>
</p>

# `◱ 03` Architectural Decisions & Evidence-Led Reversals

Senior frontend work is defined as much by **what you measure and refuse to ship** as by what you build. Below are five verified decisions from production systems.

---

### `ARCH-01` · Score Parity Authority Across Dashboard & Excel Exports
- **Context**: Stakeholders reported that executive dashboard cards and raw Excel exports showed different scores for the same survey campaign.
- **Root Cause**: The dashboard computed an unweighted mean of *facility scores* (facility-first grain), whereas the Excel export computed a mean across *individual respondent rows* (respondent-first grain). Whenever site sample sizes varied, the two numbers diverged.
- **Decision**: Established the analytics card pipeline as the single scoring authority across **Trino, Metabase, Django, and Next.js**, eliminating dual-formula drift.

---

### `PERF-02` · Self-Initiated Next.js 16 Upgrade & Barrel Elimination (`84.5s → 40.6s`)
- **Context**: Production builds and CI checks on the primary frontend monorepo were bottlenecking PR iteration.
- **Intervention**: Executed a 107-file upgrade to Next.js 16, stripped barrel-file imports in favor of direct module paths + `optimizePackageImports`, and fixed Docker/CI cache invalidation layers.
- **Measured Result**: Quiet-machine production build time dropped from **`84.5s` to `40.6s` (`2.08×` faster)**.

---

### `BUND-03` · Rich-Text Editor Migration Halted via Gzip Budget Gate (`164 KiB` vs `350 KiB`)
- **Context**: A migration to a heavier rich-text editor framework was proposed for survey authoring.
- **Intervention**: Built an isolated production bundle benchmark measuring lazy-loaded gzip JS transferred on editor mount.
- **Measured Result**: The proposed editor required **`350 KiB`** gzip JS vs. **`164 KiB`** for the incumbent (`+186 KiB` penalty). Recommended halting the migration, saving a multi-sprint rewrite.

---

### `STAT-04` · State-Management Migration Reversal (Redux vs. Zustand POC)
- **Context**: Investigated replacing Redux slices with Zustand to reduce boilerplate and bundle overhead, producing a working slice POC and a 7–13 hour migration estimate.
- **Decision**: After testing Next.js App Router hydration boundaries and existing selector coupling, reversed my own migration recommendation because transition risk and dual-store cognitive load outweighed the ergonomic win.

---

### `SYNC-05` · Indicator Synchronization Scope Narrowing
- **Context**: Cross-service synchronization of multilingual survey indicators risked corrupting associations when users cloned template rows.
- **Intervention**: Traced an ID-decoding edge case on copied template rows, narrowed the sync contract to explicit association boundaries, and locked behavior with **45 automated regression tests**.
