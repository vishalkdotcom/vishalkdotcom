<p align="center">
  <a href="https://vishalk.com">
    <img src="./assets/03-silicon-wafer-die.svg" width="100%" alt="Vishal Kumar — Isometric Silicon Die &amp; Wafer Interconnect" />
  </a>
</p>

<p align="center">
  <a href="https://vishalk.com"><strong>vishalk.com</strong></a> ·
  <a href="https://vishalk.com/work"><strong>Work Dossiers</strong></a> ·
  <a href="https://vishalk.com/resume"><strong>Resume (PDF)</strong></a> ·
  <a href="mailto:hello@vishalk.com"><strong>hello@vishalk.com</strong></a> ·
  <a href="https://www.linkedin.com/in/vishalkdotcom"><strong>LinkedIn</strong></a>
</p>

---

### `DIE FLOORPLAN // HARDWARE-GRADE VERIFICATION SPECS`

| Block | Subsystem | Measured Invariant | Architectural Implementation |
| :--- | :--- | :--- | :--- |
| **`L1 · BUILD`** | **Next.js 16 + De-Barrel** | `84.5s ± 11.4s → 40.6s` (**2.08×**) | Upgraded Next.js 16, eliminated barrel re-exports, and wired cached CI/CD alongside legacy CRA. |
| **`L2 · PARITY`** | **Single Scoring Authority** | `54.90 == 54.90` (**0% XLS drift**) | Proved `54.31 vs 54.90` 8-facility divergence; made Trino/Metabase cards authoritative and Django a pure XLS pivot layer. |
| **`L3 · BUNDLE`** | **Isolated Worktree Bake-Off** | `164 KiB` kept vs `350 KiB` vetoed | Tested candidate editor in a real production build (`10.1 MiB` vs `1.8 MiB` install) and rejected the rewrite. |
| **`L4 · GATE`** | **PR #155 Review Gatekeeper** | **6 merge-blocking bugs** stopped | Caught brand-only score lock, swapped `question_type` `1` & `3`, zeroed API guard, stale client filter, and repo-wide `@ts-ignore`. |

---

### `PERIPHERAL PINS // LIVE STOREFRONTS`

- **[SupplyChain+ (`sc-plus.vercel.app`)](https://sc-plus.vercel.app)** — Explainable supplier-risk scoring, pgvector complaint clustering, and compliance evidence export (`Next.js 16 · React 19 · Drizzle · Vercel AI SDK`).
- **[PromptSurvey (`qgenai.vercel.app`)](https://qgenai.vercel.app)** — Multi-provider AI survey builder with per-question regeneration and multilingual translation (`Next.js 15 · React 19 · Zod · IndexedDB`).
- **[Snap2Paper (`mcq.vishalk.com`)](https://mcq.vishalk.com/)** · **[PhotoGrid (`printgrid.vishalk.com`)](https://printgrid.vishalk.com/)** · **[PDFGrid (`pdfgrid.vishalk.com`)](https://pdfgrid.vishalk.com/)** — On-device Gemini Vision MCQ digitizer, passport/wallet sheet arranger, and N-up PDF compiler.
