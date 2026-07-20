---
id: okf-7
feature: illustrations
branch: feature/illustrations
status: done
files:
  - src/lib/category.ts
  - src/components/CategoryIllustration.astro
  - src/content/schema.ts
  - src/pages/index.astro
  - src/pages/[...service].astro
  - public/services/README.md
tests:
  - tests/category.test.ts
decisions:
  - "2026-07-21 : illustrations par catégorie (retour client « plus de photos ») — photo si fournie, sinon dégradé + icône SVG thématique (aucun copyright)."
  - "2026-07-21 : champ image? optionnel ajouté au schéma des prestations ; dépôt d'un fichier dans /public/services suffit à l'activer."
  - "2026-07-21 : mapping catégorie→visuel isolé dans src/lib/category.ts (fonction pure testée)."
---

**Quoi** : enrichissement visuel. Bandeau illustré sur chaque page prestation et en-tête
des 3 cartes de l'accueil, via CategoryIllustration (vraie photo OU placeholder dégradé +
icône par catégorie). Dégradation gracieuse, zéro image externe. 18 tests + build + E2E verts.

**Pièges** : icônes SVG inline via `set:html` sur le <svg> ; penser à re-poser le titre
h3 quand on restructure une carte (un remplacement large peut l'avaler).

**À faire (client)** : déposer les photos dans /public/services et renseigner `image:`
dans le frontmatter des fiches.
