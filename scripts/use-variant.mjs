#!/usr/bin/env node
/**
 * Switch the active root GitHub Profile README.md between the 5 complete variants.
 *
 * Usage:
 *   node scripts/use-variant.mjs 1   # V1: Quiet Workbench Ledger
 *   node scripts/use-variant.mjs 2   # V2: The Engineering Proof Ledger
 *   node scripts/use-variant.mjs 3   # V3: Triptych Bento App-Shell (Full SVG)
 *   node scripts/use-variant.mjs 4   # V4: Dual-Legibility Protocol (CLI / YAML)
 *   node scripts/use-variant.mjs 5   # V5: Multi-Tab Interactive Repository Dossier
 */

import { copyFileSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

const VARIANTS = {
  "1": {
    slug: "v1-quiet-workbench",
    name: "Variant 1 — Quiet Workbench Ledger",
    path: resolve(rootDir, "variants/v1-quiet-workbench/README.md"),
  },
  "2": {
    slug: "v2-engineering-ledger",
    name: "Variant 2 — The Engineering Proof Ledger",
    path: resolve(rootDir, "variants/v2-engineering-ledger/README.md"),
  },
  "3": {
    slug: "v3-triptych-bento-svg",
    name: "Variant 3 — Triptych Bento App-Shell",
    path: resolve(rootDir, "variants/v3-triptych-bento-svg/README.md"),
  },
  "4": {
    slug: "v4-dual-legibility-cli",
    name: "Variant 4 — Dual-Legibility Protocol (Accept: text/markdown)",
    path: resolve(rootDir, "variants/v4-dual-legibility-cli/README.md"),
  },
  "5": {
    slug: "v5-multi-tab-dossier",
    name: "Variant 5 — Multi-Tab Interactive Repository Dossier",
    path: resolve(rootDir, "variants/v5-multi-tab-dossier/README.md"),
  },
};

const arg = (process.argv[2] || "").trim();
const match =
  VARIANTS[arg] ||
  Object.values(VARIANTS).find((v) => v.slug === arg);

if (!match) {
  console.error("Usage: node scripts/use-variant.mjs <1|2|3|4|5>");
  for (const [key, info] of Object.entries(VARIANTS)) {
    console.error(`  ${key} -> ${info.name} (${info.slug})`);
  }
  process.exit(1);
}

const raw = readFileSync(match.path, "utf8");
// Strip the top `# Variant X — ...` heading so the root profile README starts cleanly with the visual header
const cleaned = raw
  .replace(/^# Variant \d+[^\n]*\n+/, "")
  .replace(/^<!-- Deploy:[^\n]*-->\n+/, "")
  .replaceAll("../../", "./");

const banner = `<!--
  Active GitHub Profile Variant: ${match.name} (${match.slug})
  Switch at any time with: node scripts/use-variant.mjs <1|2|3|4|5>
  All 5 self-contained variants live in ./variants/
-->\n\n`;

const dest = resolve(rootDir, "README.md");
writeFileSync(dest, banner + cleaned, "utf8");
console.log(`Activated ${match.name} -> README.md`);
