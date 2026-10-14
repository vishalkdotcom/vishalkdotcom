# GitHub Profile Variants (`vishalkdotcom/vishalkdotcom`)

Four complete, non-verbose, evidence-first GitHub Profile README variants built from real engineering artifacts across your workspace (`career-archive`, `personal`, `skills`, `dotfiles`). Each uses a custom dark/light adaptive SVG header (`prefers-color-scheme`) in `./assets/`.

> **Note:** `awesomeapps.org` is excluded across all variants until public launch.

| Variant | File | SVG Asset | Creative Direction |
| :--- | :--- | :--- | :--- |
| **01 · Architecture & Telemetry Board** *(Active in `README.md`)* | [`variants/01-architecture-telemetry.md`](./variants/01-architecture-telemetry.md) | [`assets/architecture-board.svg`](./assets/architecture-board.svg) | 3-column system schematic (Score Parity counterexample, `hyperfine` build & gzip bundle bars, RTK vs. Zustand runtime matrix) + architectural decisions ledger + live systems table. |
| **02 · The Engineering Monograph** | [`variants/02-editorial-broadsheet.md`](./variants/02-editorial-broadsheet.md) | [`assets/editorial-masthead.svg`](./assets/editorial-masthead.svg) | Broadsheet technical publication masthead (*Vol. XIII · No. 144*) with three column dispatches (*One Scoring Authority*, *The Confident "No"*, *Measured Velocity*) and curated index. |
| **03 · Workstation Verification Session** | [`variants/03-terminal-session.md`](./variants/03-terminal-session.md) | [`assets/terminal-session.svg`](./assets/terminal-session.svg) | Authentic `pwsh` / `chezmoi` terminal verification run (`vk verify --suite=architecture-claims --strict`), `identity.toml`, `ls -la ./shipped-tools`, and `git log --grep="evidence"`. |
| **04 · The Quiet Proof Ledger** | [`variants/04-quiet-ledger.md`](./variants/04-quiet-ledger.md) | [`assets/quiet-ledger.svg`](./assets/quiet-ledger.svg) | Ultra-minimalist Swiss typographic ledger—maximum signal density, zero ornament, scannable in 10 seconds. |

## Switching Active Variant

Copy any variant directly to `README.md`:

```bash
# Variant 1: Architecture & Telemetry Board (default)
cp variants/01-architecture-telemetry.md README.md

# Variant 2: The Engineering Monograph (Broadsheet)
cp variants/02-editorial-broadsheet.md README.md

# Variant 3: Workstation Verification Session (Terminal)
cp variants/03-terminal-session.md README.md

# Variant 4: The Quiet Proof Ledger (Swiss Minimal)
cp variants/04-quiet-ledger.md README.md
```
