<p align="center">
  <a href="https://vishalk.com">
    <img src="./assets/04-arcade-proof-cabinet.svg" width="100%" alt="Vishal Kumar — Arcade Proof Cabinet 1986" />
  </a>
</p>

<p align="center">
  <a href="https://vishalk.com"><strong>[ PRESS START → VISHALK.COM ]</strong></a> ·
  <a href="https://sc-plus.vercel.app"><strong>[ PLAY SUPPLYCHAIN+ ]</strong></a> ·
  <a href="https://qgenai.vercel.app"><strong>[ PLAY PROMPTSURVEY ]</strong></a> ·
  <a href="mailto:hello@vishalk.com"><strong>[ INSERT COIN: HELLO@VISHALK.COM ]</strong></a>
</p>

---

### `BOSS RUSH LOG // 4 PRODUCTION ENCOUNTERS CLEARED`

1. **`STAGE 01 · THE SCORE DRIFT HYDRA (WPM-3469)`** — Dashboard (`Metabase`) and Excel (`Django/Pandas`) computed overall scores differently. Built an 8-facility counterexample (`54.31` facility-first vs `54.90` question-first), crowned Trino/Metabase cards the single scoring authority, and turned Django into a pure validating pivot layer.
2. **`STAGE 02 · THE 84.5s BUILD GOLEM (WPM-3019)`** — Self-initiated Next.js 16 upgrade + barrel-file removal + cached CI pipeline cut quiet-machine production builds from **`84.5s ± 11.4s` to `40.6s` (`2.08×`)**. On `vishalk.com`, cutting over to SolidJS 2 CSR dropped cold builds to **`683 ms`** and total gzipped JS+CSS to **`29.02 kB`**.
3. **`STAGE 03 · THE 350 KiB EDITOR TROJAN (WPM-3487)`** — Instead of trusting package marketing, wired the candidate rich-text editor into an isolated worktree production build. Measured **`350 KiB` gzip (`10.1 MiB` install)** vs **`164 KiB` gzip (`1.8 MiB` install)** for `MDXEditor` and vetoed the migration.
4. **`STAGE 04 · THE PR #155 SIX-BUG GAUNTLET`** — Line-by-line review of a customer-facing Metabase migration caught **6 merge-blocking bugs** before merge: brand-only check breaking facility score cards, swapped `question_type` `1` & `3`, unsupported types silently coerced to `SINGLE_SELECT`, overly broad guard zeroing valid API responses, stale client filter desync, and repo-wide `@ts-ignore`.
