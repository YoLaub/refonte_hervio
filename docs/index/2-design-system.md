---
id: okf-2
feature: design-system
branch: feature/design-system
status: done
files:
  - src/styles/global.css
  - src/data/nav.ts
  - src/components/DoctolibCTA.astro
  - src/components/Header.astro
  - src/components/Footer.astro
  - src/layouts/BaseLayout.astro
tests:
  - tests/nav.test.ts
decisions:
  - "2026-07-20 : direction visuelle « Sérénité végétale » (sauge #3f7d67 + terracotta #e8a598, titres serif humaniste)."
  - "2026-07-20 : nav en donnée pure (src/data/nav.ts) consommée par Header ET Footer, slugs = ceux du site actuel (SEO)."
  - "2026-07-20 : menus déroulants hover + focus-within (CSS), menu mobile via <details> natif — zéro JS."
  - "2026-07-20 : polices système (pas de webfont externe) — à réévaluer avec @fontsource si besoin identité."
---

**Quoi** : charte graphique (tokens Tailwind v4 @theme), Header sticky avec menus
déroulants accessibles + menu mobile sans JS, Footer (coordonnées, plan du site,
Doctolib, convention), composant unique `DoctolibCTA`. BaseLayout assemble le tout.

**Pièges** : menus déroulants accessibles sans JS = `:hover, :focus-within` sur le
conteneur (clavier OK) ; menu mobile = `<details>/<summary>` natif.
