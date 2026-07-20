---
id: okf-5
feature: seo-a11y
branch: feature/seo-a11y
status: done
files:
  - src/lib/jsonld.ts
  - src/components/JsonLd.astro
  - src/components/DoctolibMenu.astro
  - src/components/Header.astro
  - src/layouts/BaseLayout.astro
  - public/robots.txt
tests:
  - tests/jsonld.test.ts
decisions:
  - "2026-07-20 : données structurées MedicalClinic + Physician (2 praticiennes, ReserveAction Doctolib), builder pur testé."
  - "2026-07-20 : header = bouton RDV compact unique déroulant (DoctolibMenu, <details> natif) au lieu des 2 gros boutons."
  - "2026-07-20 : robots.txt + sitemap (déjà généré par @astrojs/sitemap)."
---

**Quoi** : SEO technique et accessibilité. JSON-LD MedicalClinic injecté sur toutes les
pages via BaseLayout, robots.txt, bouton RDV du header compacté. 14 tests verts, build +
E2E verts (JSON-LD et 12 pages contrôlés). JSON-LD validé bien formé sur le HTML de dist.

**Pièges** : `set:html={JSON.stringify(...)}` + `is:inline` pour le script ld+json (sinon
Astro tente de le traiter comme module). Bouton déroulant a11y = `<details>/<summary>`.
