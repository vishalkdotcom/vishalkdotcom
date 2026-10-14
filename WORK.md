<p align="left">
  <a href="./README.md"><img src="./assets/tab-overview-active.svg" alt="01 Overview" height="28" /></a>
  <a href="./WORK.md"><img src="./assets/tab-work.svg" alt="02 Work (10)" height="28" /></a>
  <a href="./DECISIONS.md"><img src="./assets/tab-decisions.svg" alt="03 Decisions" height="28" /></a>
  <a href="./STACK.md"><img src="./assets/tab-stack.svg" alt="04 Stack/Env" height="28" /></a>
</p>

# `◊ 02` Work Inventory (10 Shipped Systems)

Every item below maps to either a live public storefront (no sign-in required) or an annotated internal production dossier on **[vishalk.com/work](https://vishalk.com/work)**.

---

### 1. Labor Solutions (`Senior Frontend · reporting & surveys`)

| Case | Surface | Summary | Stack |
| :--- | :--- | :--- | :--- |
| **[Engage Reporting](https://vishalk.com/work/engage-reporting)** | Internal Dossier | Workforce survey reporting across Summary, Categories, and Miscellaneous views with embedded Metabase analytics, site-risk heatmaps, and unified Excel scoring parity. | `Next.js` `TypeScript` `Metabase` `Trino` `Django` |
| **[Indicator Bank](https://vishalk.com/work/indicator-bank)** | Internal Dossier | Multilingual Indicator Bank across four tabs (`Indicators`, `Questions`, `Answer Sets`, `Manage Associations`) with protected Excel import/export. | `Next.js` `Django REST` `TypeScript` `Excel IO` |

---

### 2. Advance Auto Parts (`Frontend Engineer · store KPI & ML ops`)

| Case | Surface | Summary | Stack |
| :--- | :--- | :--- | :--- |
| **[Measurement Framework](https://vishalk.com/work/measurement-framework)** | Internal Dossier | Store KPI measurement and cohort comparison interface backed by Snowflake analytics tables. | `Next.js` `Tremor` `Nivo` `TypeScript` `Snowflake` |
| **[Model Deployment Framework](https://vishalk.com/work/model-deployment-framework)** | Internal Dossier | Self-service ML model hosting and deployment dashboard for internal data science teams. | `Next.js` `TypeScript` `Tailwind CSS` |
| **[Store Performance Dashboard](https://vishalk.com/work/store-dashboard)** | Internal Dossier | Store-level performance and sales-forecasting workbench. | `Streamlit` `Snowflake` `Python` |

---

### 3. Local-First Browser Tools (`Solo · zero server uploads`)

| Tool | Live URL | Summary | Stack |
| :--- | :--- | :--- | :--- |
| **Snap2Paper** | [`mcq.vishalk.com ↗`](https://mcq.vishalk.com/) · [Case](https://vishalk.com/work/snap2paper) | Gemini vision digitizer converting photographed exam pages into editable MCQ study sets and print-ready PDFs. | `React 19` `Gemini Vision` `Client PDF` |
| **PhotoGrid** | [`printgrid.vishalk.com ↗`](https://printgrid.vishalk.com/) · [Case](https://vishalk.com/work/photogrid) | Passport, visa, and stamp photo layout engine for A4 and 4×6 sheets with precision cutting guides. | `TypeScript` `Canvas 2D` `Print CSS` |
| **PDFGrid** | [`pdfgrid.vishalk.com ↗`](https://pdfgrid.vishalk.com/) · [Case](https://vishalk.com/work/pdfgrid) | Browser-local N-up PDF layout compiler with grid presets (`2×2`, `2×3`, `3×3`), margins, and page ranges. | `TypeScript` `pdf-lib` `PDF.js` |

---

### 4. Applied AI Prototypes (`Solo · end-to-end vertical slices`)

| Prototype | Live URL | Summary | Stack |
| :--- | :--- | :--- | :--- |
| **SupplyChain+** | [`sc-plus.vercel.app ↗`](https://sc-plus.vercel.app) · [Case](https://vishalk.com/work/supplychain-plus) | Supplier-risk scoring, pgvector complaint clustering, and compliance audit evidence pack export. | `Next.js 16` `React 19` `pgvector` `Drizzle` `AI SDK` |
| **PromptSurvey** | [`qgenai.vercel.app ↗`](https://qgenai.vercel.app) · [Case](https://vishalk.com/work/promptsurvey) | Prompt-to-survey builder with per-question AI regeneration, schema validation, and multi-language translation. | `Next.js 15` `React 19` `AI SDK` `Zod` `IndexedDB` |
