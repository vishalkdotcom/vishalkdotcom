<div align="center">
  <img src="./assets/editorial-masthead.svg" width="100%" alt="The Engineering Monograph — Vishal Kumar" />
</div>

<br />

<table>
<tr>
<td width="33%" valign="top">

#### 01 · ONE SCORING AUTHORITY
Dashboards (`Metabase/Trino`) and Excel exports (`Django/pandas`) disagreed on customer survey scores. Instead of patching symptoms, I wrote a counterexample harness proving question-first vs. facility-first averaging diverged (**71.47 vs. 71.40** on 2 facilities; **54.90 vs. 54.31** on 8). Analytics cards became the single scoring authority; Django became a thin validation & pivot projection layer.

</td>
<td width="33%" valign="top">

#### 02 · THE CONFIDENT "NO"
Good senior engineering includes knowing when *not* to migrate. When a "lighter" rich-text editor was pitched, an isolated production build proved its lazy chunk was **350 KiB gzip** vs. our existing **164 KiB gzip** (`MDXEditor`). When evaluating Zustand for a Next.js App Router web app, per-request SSR store overhead meant staying on **RTK** saved 7–13h of churn—while migrating to **Zustand** on client-only React Native made sense.

</td>
<td width="33%" valign="top">

#### 03 · MEASURED VELOCITY
Over 36% of my shipped tickets (61 of 168) were self-initiated improvements spotted while working in adjacent code. A 3-ticket cluster upgrading to **Next.js 16**, stripping barrel files, and caching CI steps cut production build times from **84.5s ± 11.4s to 40.6s ± 3.2s** (`2.08×` faster, verified via `hyperfine`).

</td>
</tr>
</table>

---

### Selected Works & Live Instruments

- **[SupplyChain+](https://sc-plus.vercel.app)** · *Next.js 16, React 19, Drizzle, pgvector, AI SDK* — Explainable supplier risk breakdown, vector complaint clustering, and multi-provider LLM audit assistant. [[source](https://github.com/vishalkdotcom/supplychain-plus)]
- **[PromptSurvey](https://qgenai.vercel.app)** · *Next.js 15, React 19, Vercel AI SDK, IndexedDB* — Natural-language prompt to structured multi-type survey builder with per-item regeneration and localization.
- **[Snap2Paper](https://mcq.vishalk.com)** · *Gemini Vision, React, jsPDF* — Converts photographed exam sheets into editable MCQ banks and formatted PDF printouts. [[source](https://github.com/vishalkdotcom/Snap2Paper)]
- **[PhotoGrid](https://printgrid.vishalk.com)** & **[PDFGrid](https://pdfgrid.vishalk.com)** · *Zero-upload browser utilities* — Client-side passport sheet composer and N-up PDF grid compiler. [[photogrid](https://github.com/vishalkdotcom/photogrid) · [pdfgrid](https://github.com/vishalkdotcom/pdfgrid)]
- **[April](https://github.com/vishalkdotcom/april)** · *Tauri 2, Rust, React 19* — Desktop engineering velocity & Jira/GitHub PR tracker with incremental JQL watermarks.
- **[Agent Skills](https://github.com/vishalkdotcom/skills)** & **[Dotfiles](https://github.com/vishalkdotcom/dotfiles)** — 44+ structured AI agent workflows and Chezmoi/PowerShell 7 AST-rewriting workstation config.

---

<div align="center">
  <sub><b>Vishal Kumar</b> · Punjab, India (Remote) · <a href="https://vishalk.com">vishalk.com</a> · <a href="https://vishalk.com/vishal-cv.pdf">Curriculum Vitae (PDF)</a> · <a href="https://www.linkedin.com/in/vishalkdotcom">LinkedIn</a> · <a href="mailto:hello@vishalk.com">hello@vishalk.com</a></sub>
</div>
