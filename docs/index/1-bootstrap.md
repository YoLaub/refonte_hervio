---
id: okf-1
feature: bootstrap
branch: feature/bootstrap
status: done
files:
  - package.json
  - astro.config.mjs
  - tsconfig.json
  - src/data/site.ts
  - src/styles/global.css
  - src/layouts/BaseLayout.astro
  - src/pages/index.astro
  - scripts/check-build.mjs
tests:
  - tests/site.test.ts
decisions:
  - "2026-07-20 : Astro 5 + Tailwind v4 via @tailwindcss/vite (config CSS-first @theme, pas de tailwind.config.js)."
  - "2026-07-20 : infos cabinet centralisées dans src/data/site.ts (source unique, DRY)."
  - "2026-07-20 : E2E = build statique + scripts/check-build.mjs qui grep le HTML de dist/."
---

**Quoi** : squelette Astro statique + Tailwind v4 + Vitest. Source unique des données
cabinet (`site.ts`), `BaseLayout` avec SEO/canonical/skip-link, accueil provisoire.
Chaîne complète verte : `npm test` (3) → `npm run build` → `npm run e2e`.

**Pièges** : postinstall esbuild/sharp bloqués par le wrapper allow-scripts npm →
`npm approve-scripts esbuild sharp` + `npm rebuild` (voir pieges.md, section Astro/npm).
