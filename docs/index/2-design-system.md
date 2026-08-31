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
  - "2026-08-31 : coins resserrés — boutons en rounded-lg (8 px, plus de pilules), cartes/photos via --radius-2xl 0.75rem / --radius-3xl 0.875rem (~12/14 px). Portraits ronds conservés."
  - "2026-08-29 : charte révisée « Héritage modernisé » — retour au violet orchidée (#7e3f89) + touche turquoise (#147a8a) repris du logo historique sagefemmevannes.com, adoucis. Cliente : le vert sauge ne reprenait pas son identité. Tokens brand-*/accent-* redéfinis, contrastes WCAG AA revérifiés ; aucun composant modifié (tout passe par les tokens)."
  - "2026-07-20 : nav en donnée pure (src/data/nav.ts) consommée par Header ET Footer, slugs = ceux du site actuel (SEO)."
  - "2026-07-20 : menus déroulants hover + focus-within (CSS), menu mobile via <details> natif — zéro JS."
  - "2026-07-20 : polices système (pas de webfont externe) — à réévaluer avec @fontsource si besoin identité."
---

**Quoi** : charte graphique (tokens Tailwind v4 @theme), Header sticky avec menus
déroulants accessibles + menu mobile sans JS, Footer (coordonnées, plan du site,
Doctolib, convention), composant unique `DoctolibCTA`. BaseLayout assemble le tout.

**Pièges** : menus déroulants accessibles sans JS = `:hover, :focus-within` sur le
conteneur (clavier OK) ; menu mobile = `<details>/<summary>` natif.
