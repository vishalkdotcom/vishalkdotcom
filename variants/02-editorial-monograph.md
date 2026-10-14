<div align="center">
  <a href="https://vishalk.com">
    <img src="./assets/editorial-masthead.svg" width="100%" alt="Vishal Kumar — The Engineering Broadsheet" />
  </a>
</div>

<br />

> **Dispatch from the workbench:** I build complex React and Next.js product interfaces for remote teams — reporting surfaces, multilingual form/admin platforms, and cross-stack glue across Django, Metabase, and dbt/Trino. For the last two years I have run a spec-first, AI-native workflow where every line is benchmarked, reviewed, tested, and human-owned.

---

### I. Three Times I Said "No" (With Receipts)

| Proposal | Investigation | Finding | Decision |
| :--- | :--- | :--- | :--- |
| **Recompute survey scores in Django for Excel exports** | Built a Trino + Python comparison harness across multi-facility cohorts instead of assuming plausible formulas matched. | Question-first column means diverged from facility-first scores (`71.47` vs `71.40` on 2 sites; `54.90` vs `54.31` on 8 sites). | **Single Authority:** Analytics cards own scoring; Django validates, pivots, and writes workbooks without recomputing. |
| **Replace MDXEditor with a "lighter" rich-text editor** | Wired the candidate into an isolated Next.js production worktree using the exact same lazy-loading boundary. | Candidate emitted **350 KiB gzip** (`10.1 MiB` install) vs. MDXEditor's **164 KiB gzip** (`1.8 MiB` install). | **Vetoed migration:** Saved >2× lazy JS payload by benchmarking the real bundle instead of npm badges. |
| **Migrate Next.js App Router global state from RTK to Zustand** | Built a real slice POC, audited 5 slices, and checked Next.js SSR concurrency rules. | Per-request server store creation required the same boilerplate in both libraries; saved 7–13h of churn. | **Kept RTK on Web; adopted Zustand in React Native** where client-only runtime made the win real. |

---

### II. Selected Works & Instruments

| System | Surface | What Shipped |
| :--- | :--- | :--- |
| **Engage Reporting & Custom BI** | *Labor Solutions · Production* | Summary, Categories & Misc dashboards across Next.js, 9 custom Metabase fork PRs (SQL Pivot, Response Distribution, banker's rounding), and respondent-grain dbt/Trino marts. |
| **Multilingual Indicator Bank** | *Labor Solutions · Production* | 4 Next.js admin surfaces + Django Excel engine with hidden stable IDs, protected sheets, partial-success row imports, and idempotent survey association. |
| **Model Deployment & Store KPIs** | *Advance Auto Parts · Production* | Self-service ML model hosting dashboard (Next.js, TS, Tailwind) eliminating manual deployment tickets, plus Snowflake/Streamlit store sales-forecast views. |
| **[SupplyChain+](https://sc-plus.vercel.app)** · [`repo`](https://github.com/vishalkdotcom/supplychain-plus) | *Public Prototype* | Explainable supplier-risk scoring, `pgvector` complaint clustering, and audit-oriented compliance evidence export (Next.js 16, React 19, Drizzle). |
| **[PromptSurvey](https://qgenai.vercel.app)** | *Public Prototype* | Prompt-to-survey builder with multi-type questions, per-question AI regeneration, and multi-language translation (Next.js 15, AI SDK, Zod). |
| **[Snap2Paper](https://mcq.vishalk.com) · [PhotoGrid](https://printgrid.vishalk.com) · [PDFGrid](https://pdfgrid.vishalk.com)** | *Public Utilities* | Local-first browser tools: Gemini vision paper-to-MCQ digitizer, A4/4×6 passport photo layout tool, and on-device N-up PDF compiler. |
| **[April](https://github.com/vishalkdotcom/april) · [EduCal](https://github.com/vishalkdotcom/educal) · [skills](https://github.com/vishalkdotcom/skills)** | *Open Source* | Tauri 2 + Rust desktop Jira velocity tracker; Expo + Gemini multi-country education planner; 40+ structured AI agent skills. |

---

<p align="center">
  <a href="https://vishalk.com">Portfolio (vishalk.com)</a> ·
  <a href="https://vishalk.com/vishal-cv.pdf">Curriculum Vitae (PDF)</a> ·
  <a href="https://www.linkedin.com/in/vishalkdotcom">LinkedIn</a> ·
  <a href="mailto:hello@vishalk.com">hello@vishalk.com</a>
</p>
