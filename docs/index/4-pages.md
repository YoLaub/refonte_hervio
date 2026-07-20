---
id: okf-4
feature: pages
branch: feature/pages
status: done
files:
  - src/pages/index.astro
  - src/pages/le-cabinet.astro
  - src/pages/contact.astro
  - src/pages/[...service].astro
  - src/styles/global.css
  - scripts/check-build.mjs
tests:
  - tests/services.test.ts (schéma) + E2E check-build.mjs (12 pages)
decisions:
  - "2026-07-20 : route dynamique [...service].astro (getStaticPaths sur la collection) → 9 pages prestation avec nav latérale par catégorie."
  - "2026-07-20 : styles .prose maison dans global.css (pas de plugin @tailwindcss/typography)."
  - "2026-07-20 : contact = carte coordonnées + lien Google Maps (pas d'iframe, coordonnées GPS inconnues)."
---

**Quoi** : les 12 pages du site. Accueil (hero dégradé + 3 axes + coordonnées),
Le cabinet, Contact, et les 9 prestations générées depuis la collection. E2E vérifie la
présence des 12 fichiers HTML + le contenu critique. 11 tests + build + E2E verts.

**Pièges** : screenshots via l'extension Chrome échouent sur l'onglet du serveur dev
(page « busy ») → tester sur `astro preview` (statique) dans un onglet neuf.
Le serveur dev peut planter au reload quand package.json change en cours d'édition.
