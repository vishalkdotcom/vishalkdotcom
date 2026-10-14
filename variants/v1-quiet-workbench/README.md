# Variant 1 — Quiet Workbench Ledger

<!-- Deploy: copy this file to /README.md or run `node scripts/use-variant.mjs 1` -->

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/v1-workbench-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="../../assets/v1-workbench-light.svg" />
  <img alt="Vishal Kumar — Senior Frontend Engineer" src="../../assets/v1-workbench-dark.svg" width="100%" />
</picture>

<p align="left">
  <a href="https://vishalk.com"><b>vishalk.com</b></a> ·
  <a href="https://vishalk.com/work">Work Index</a> ·
  <a href="https://vishalk.com/resume">Resume</a> ·
  <a href="https://vishalk.com/contact">Contact</a> ·
  <a href="https://www.linkedin.com/in/vishalkdotcom">LinkedIn</a> ·
  <a href="https://vishalk.com/llms.txt"><code>llms.txt</code></a>
</p>

---

### `◈` Production Systems & Live Storefronts

| Surface | Class | Stack & Architecture | Access |
| :--- | :--- | :--- | :--- |
| **WFP Engage Reporting** | `INTERNAL` · Labor Solutions | Next.js · TypeScript · Metabase · Trino · Django | [Case Dossier →](https://vishalk.com/work/engage-reporting) |
| **Multilingual Indicator Bank** | `INTERNAL` · Labor Solutions | Next.js · Django REST · Protected Excel IO · i18n | [Case Dossier →](https://vishalk.com/work/indicator-bank) |
| **Store Measurement & ML Ops** | `INTERNAL` · Advance Auto Parts | Next.js · Tremor/Nivo · Snowflake · Streamlit | [Case Dossier →](https://vishalk.com/work/measurement-framework) |
| **Snap2Paper** | `PUBLIC` · Live Tool | Gemini Vision · Client-side PDF · React 19 | [`mcq.vishalk.com ↗`](https://mcq.vishalk.com/) |
| **PhotoGrid** | `PUBLIC` · Live Tool | Browser-local Canvas · Print-exact A4 / 4×6 | [`printgrid.vishalk.com ↗`](https://printgrid.vishalk.com/) |
| **PDFGrid** | `PUBLIC` · Live Tool | Browser-local N-up PDF Layout Compiler | [`pdfgrid.vishalk.com ↗`](https://pdfgrid.vishalk.com/) |
| **SupplyChain+** | `PROTOTYPE` · Live Demo | Next.js 16 · React 19 · pgvector · Drizzle · AI SDK | [`sc-plus.vercel.app ↗`](https://sc-plus.vercel.app) |
| **PromptSurvey** | `PROTOTYPE` · Live Demo | Next.js 15 · React 19 · AI SDK · Zod · IndexedDB | [`qgenai.vercel.app ↗`](https://qgenai.vercel.app) |

---

### `◊` Measured Engineering Decisions

- **Score Parity Authority** — Diagnosed why executive dashboards and raw Excel exports produced conflicting numbers (facility-first vs. respondent-first aggregation grains) and established analytics cards as the single scoring authority across Trino, Metabase, Django, and Next.js.
- **Next.js 16 Build Pipeline (`2.08×`)** — Self-initiated upgrade across 107 files paired with barrel-file elimination (`optimizePackageImports`) and CI cache hardening, reducing clean production builds from **`84.5s → 40.6s`**.
- **Evidence-Led Reversals** — Benchmarked lazy-loaded rich-text editor bundles (**`164 KiB` vs. `350 KiB`** gzip JS) and state-management migration POCs before committing team roadmap time—halting migrations whose measured cost outweighed their architectural payoff.

---

<sub>Dual-legibility web: every route on <a href="https://vishalk.com">vishalk.com</a> serves structured Markdown when requested with <code>Accept: text/markdown</code>.</sub>
