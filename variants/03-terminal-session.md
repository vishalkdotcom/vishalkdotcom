<div align="center">
  <img src="./assets/terminal-session.svg" width="100%" alt="vk@workstation — Architecture & Proof Verification Session" />
</div>

<br />

```toml
# ~/.config/vishal/identity.toml
name       = "Vishal Kumar"
role       = "Senior Frontend Engineer (React / Next.js / Product UI)"
experience = "13+ years software · 7+ years React/Next.js · Remote (Punjab, IN)"
focus      = ["Reporting & BI UI", "High-State Forms", "Frontend Platform & Build Perf", "AI-Native Delivery"]
contact    = { site = "https://vishalk.com", cv = "https://vishalk.com/vishal-cv.pdf", email = "hello@vishalk.com" }
```

### `$ ls -la ./shipped-tools`

```text
drwxr-xr-x  supplychain-plus   https://sc-plus.vercel.app       Next.js 16 · pgvector · Explainable supplier risk & LLM audit
drwxr-xr-x  prompt-survey      https://qgenai.vercel.app        Next.js 15 · AI SDK   · Prompt-to-survey & i18n builder
drwxr-xr-x  snap2paper         https://mcq.vishalk.com          Gemini Vision · jsPDF · Camera photo to printable MCQ sheet
drwxr-xr-x  photogrid          https://printgrid.vishalk.com    Canvas API · Local    · Passport & ID print sheet layout
drwxr-xr-x  pdfgrid            https://pdfgrid.vishalk.com      PDF-lib · Workers     · Client-side N-up PDF grid compiler
drwxr-xr-x  april-desktop      github.com/vishalkdotcom/april   Tauri 2 · Rust        · Jira/GitHub PR & story point tracker
drwxr-xr-x  agent-skills       github.com/vishalkdotcom/skills  44+ Skills            · Spec -> Tickets -> Implement -> Review
drwxr-xr-x  dotfiles           github.com/vishalkdotcom/dotfiles Chezmoi · PWSH 7 AST · Declarative Windows workstation
```

### `$ git log --oneline --grep="evidence" -n 6`

- **`a91f4c2`** `fix(scoring)`: prove facility-first vs question-first drift (`71.47` vs `71.40`); unify dashboard & Excel authority
- **`c408e1b`** `perf(build)`: Next.js 16 + de-barrel + CI cache → production build `84.5s → 40.6s` (`2.08x` via `hyperfine`)
- **`e72b901`** `arch(editor)`: reject rich-text migration after worktree bundle proof (`350 KiB` vs `164 KiB` gzip)
- **`b18d3a4`** `arch(state)`: keep RTK on App Router SSR (`WPM-2255`); ship Jotai → Zustand on React Native (`WPM-3132`)
- **`f03c819`** `feat(analytics)`: respondent-grain dbt/Trino relational division + 9 PRs in custom Metabase fork
- **`d59e210`** `fix(sync)`: guard Indicator Bank backfill on `PK >= 10` lineage in 500-row atomic batches (`45/45` tests)

---

<div align="center">
  <a href="https://vishalk.com"><b>vishalk.com</b></a> · <a href="https://vishalk.com/vishal-cv.pdf"><b>Resume (PDF)</b></a> · <a href="https://www.linkedin.com/in/vishalkdotcom"><b>LinkedIn</b></a> · <a href="mailto:hello@vishalk.com"><b>hello@vishalk.com</b></a>
</div>
