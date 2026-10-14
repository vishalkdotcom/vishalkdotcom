<div align="center">
  <img src="./assets/architecture-board.svg" width="100%" alt="Vishal Kumar — Architecture & Decision Telemetry" />
</div>

<br />

<div align="center">

**[vishalk.com](https://vishalk.com)** · **[Resume (PDF)](https://vishalk.com/vishal-cv.pdf)** · **[LinkedIn](https://www.linkedin.com/in/vishalkdotcom)** · **[hello@vishalk.com](mailto:hello@vishalk.com)**

</div>

---

### Architectural Decisions & Proof Ledger

| Problem Space | Engineering Call | Verified Outcome |
| :--- | :--- | :--- |
| **Dashboard ↔ Excel Score Drift**<br/><sub>Metabase / Trino / Django / Pandas</sub> | Built a Python + Trino counterexample harness proving facility-first vs. question-first averages diverged (`71.47` vs `71.40` across 2 facilities; `54.90` vs `54.31` across 8). Promoted analytics cards to single scoring authority. | **100% parity** across web dashboards and Excel exports |
| **Next.js Production Build Bottleneck**<br/><sub>Next.js 16 / TypeScript / CI</sub> | Self-initiated 3-ticket cluster: Next.js 16 upgrade, barrel-file elimination, and CI lint/build caching. Benchmarked via `hyperfine` on an isolated machine. | **`84.5s → 40.6s`** (`2.08×` faster production build) |
| **Rich-Text Editor Replacement Pitch**<br/><sub>Next.js Bundle Analysis</sub> | Built a production worktree bake-off before migrating. Measured candidate lazy chunk at `350 KiB` gzip (`10.1 MiB` install) vs. existing `MDXEditor` at `164 KiB` gzip (`1.8 MiB` install). | **Rejected migration** with reproducible bundle proof |
| **State Management across Runtimes**<br/><sub>Redux Toolkit / Zustand / Jotai</sub> | Prototyped a real slice (`WPM-2255`). Found App Router per-request SSR store constraints negated Zustand's ergonomics on web—stayed on **RTK**. Migrated Jotai → **Zustand** on client-only **React Native** (`WPM-3132`). | Saved **7–13h** web churn; simplified mobile state |
| **Multi-Select Survey Double Counting**<br/><sub>dbt / Trino / Custom Metabase Fork</sub> | Re-modeled survey marts at respondent grain with relational division (`OR` within field, `AND` across fields) + fast pre-aggregated mart for unfiltered loads; shipped 9 PRs to custom Metabase fork. | **Zero double-counting** + banker's rounding & SQL pivot |
| **Multilingual Indicator Bank Sync**<br/><sub>Django / Next.js / OpenPyXL</sub> | Designed 4 admin surfaces + protected Excel round-trip templates with hidden stable IDs. Caught ambiguous lineage on `PK >= 10` during backfill and gated updates by association in 500-row atomic batches. | **45/45** regression tests green; zero orphan overwrites |

---

### Live Systems & Open-Source Work

| System | Stack | What It Does | Links |
| :--- | :--- | :--- | :--- |
| **SupplyChain+** | `Next.js 16` `React 19` `Drizzle` `pgvector` `AI SDK` | Explainable supplier-risk scoring, semantic complaint clustering, regulatory radar & multi-LLM audit assistant. | **[Live App ↗](https://sc-plus.vercel.app)** · [Source](https://github.com/vishalkdotcom/supplychain-plus) |
| **PromptSurvey** | `Next.js 15` `React 19` `AI SDK` `Zod` `IndexedDB` | Prompt-to-survey generator with multi-type questions, per-question AI regeneration & multilingual translation. | **[Live App ↗](https://qgenai.vercel.app)** |
| **Snap2Paper** | `React` `TypeScript` `Gemini Vision` `jsPDF` | Turns photographed exam papers into structured digital MCQs and print-ready PDF question sheets. | **[mcq.vishalk.com ↗](https://mcq.vishalk.com)** · [Source](https://github.com/vishalkdotcom/Snap2Paper) |
| **PhotoGrid** | `TypeScript` `Canvas API` `Zero-Upload` | Client-side passport & ID photo sheet generator (A4 / 4×6) with precision crop and cut guides. | **[printgrid.vishalk.com ↗](https://printgrid.vishalk.com)** · [Source](https://github.com/vishalkdotcom/photogrid) |
| **PDFGrid** | `TypeScript` `PDF-lib` `Web Workers` | Browser-local N-up PDF layout compiler—merges multi-page PDFs into compact grid sheets with zero server transfer. | **[pdfgrid.vishalk.com ↗](https://pdfgrid.vishalk.com)** · [Source](https://github.com/vishalkdotcom/pdfgrid) |
| **April** | `Tauri 2` `Rust` `React 19` `SQLite` | Native desktop Story Point & Jira/GitHub PR tracker with incremental JQL watermarks and offline sync. | [Source](https://github.com/vishalkdotcom/april) |
| **EduCal** | `Expo` `React Native` `Gemini Structured Output` | Mobile education cost planner with live currency conversion and 18 Maestro E2E verification flows. | [Source](https://github.com/vishalkdotcom/educal) |
| **Agent Skills** | `TypeScript` `Playwright` `Prompt Engineering` | 44+ composable agent workflows (`grill-with-docs → to-spec → to-tickets → implement → code-review`). | [Source](https://github.com/vishalkdotcom/skills) |
| **Dotfiles** | `Chezmoi` `PowerShell 7 AST` `Windows Terminal` | Declarative Windows workstation with AST-rewriting Unix coreutils translations and warm-ink terminal ergonomics. | [Source](https://github.com/vishalkdotcom/dotfiles) |

<!--
  README Variants included in this repo:
  - variants/01-architecture-telemetry.md (Active Default)
  - variants/02-editorial-broadsheet.md
  - variants/03-terminal-session.md
  - variants/04-quiet-ledger.md
  Swap anytime: cp variants/02-editorial-broadsheet.md README.md
-->
