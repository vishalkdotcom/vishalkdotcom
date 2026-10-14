<p align="left">
  <a href="./README.md"><img src="./assets/tab-overview-active.svg" alt="01 Overview" height="28" /></a>
  <a href="./WORK.md"><img src="./assets/tab-work.svg" alt="02 Work (10)" height="28" /></a>
  <a href="./DECISIONS.md"><img src="./assets/tab-decisions.svg" alt="03 Decisions" height="28" /></a>
  <a href="./STACK.md"><img src="./assets/tab-stack.svg" alt="04 Stack/Env" height="28" /></a>
</p>

# `◇ 04` Stack, Design System & Workstation

### Frontend & Full-Stack Engineering
- **UI Runtimes**: React 19, Next.js (15/16 App Router), SolidJS 2, TypeScript (strict), Tailwind CSS v4
- **Data & Analytics**: Trino, Metabase (embedded & API), Snowflake, pgvector, Drizzle ORM, IndexedDB
- **Backend & Pipelines**: Django / Django REST Framework, Python, FastAPI, Streamlit, Node.js / Bun
- **Document & Canvas Systems**: Client-side PDF compilation (`pdf-lib`, `PDF.js`), HTML5 Canvas print-exact sheet layout, protected Excel import/export pipelines
- **Quality & Tooling**: Vitest, Playwright, Oxlint, Oxfmt, Vite 8, Cloudflare Pages

---

### Quiet Workbench Visual Grammar
- **Palette**: Cool-neutral OKLCH surfaces (`hue 250`) with desaturated cobalt signal (`hue 255`), 1px hairline borders, and zero decorative blur.
- **Typography**: `Inter` / `Plus Jakarta Sans` UI copy paired with `JetBrains Mono` / `IBM Plex Mono` for tabular metrics (`font-variant-numeric: tabular-nums`).
- **Dual-Legibility Web**: Every route on [`vishalk.com`](https://vishalk.com) serves both human readers and AI agents (`Accept: text/markdown` + `/llms.txt`).

---

### Reproducible Workstation (`vishalkdotcom/dotfiles`)
Bootstrap via [chezmoi](https://www.chezmoi.io/):

```powershell
chezmoi init --apply vishalkdotcom
```
