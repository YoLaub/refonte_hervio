---
id: okf-9
feature: photos
branch: feature/photos
status: done
files:
  - src/lib/category.ts
  - src/components/CategoryIllustration.astro
  - src/pages/index.astro
  - src/pages/le-cabinet.astro
  - public/hero/accueil.jpg
  - public/cabinet/salle.jpg
  - public/services/enceinte.jpg
  - public/services/apres.jpg
  - public/services/gyneco.jpg
  - public/services/acupuncture.jpg
  - docs/credits-images.md
tests:
  - tests/category.test.ts
  - tests/images.test.ts
decisions:
  - "2026-08-29 : photos = banque d'images libres Pexels (licence gratuite, usage commercial, sans attribution obligatoire), en attendant les vraies photos du cabinet. Crédits archivés dans docs/credits-images.md."
  - "2026-08-29 : chaque catégorie porte une photo par défaut (CategoryVisual.image) ; une fiche peut la surcharger via son frontmatter `image`. CategoryIllustration retombe sur le dégradé + icône si aucune photo."
  - "2026-08-29 : hero accueil = photo plein cadre + voile dégradé brand-900/800/700 pour garantir le contraste AA du texte blanc (inspiration sage-femme-pluvigner.fr, sans copie)."
  - "2026-08-29 : portraits des praticiennes toujours en placeholder à initiales — seule la cliente peut les fournir (voir [[6-equipe-photos]])."
  - "2026-08-31 : toutes les photos passées en noir et blanc via une règle globale `img { filter: grayscale(100%) }` (parti pris éditorial demandé par la cliente). Sûr car les seules <img> du site sont des photos."
---

**Quoi** : premières photos du site. Hero d'accueil plein cadre, photo d'ambiance
par catégorie (accueil + en-têtes des fiches prestations), photo de l'espace
d'attente sur « Le cabinet ». Toutes servies depuis `/public` (pré-dimensionnées),
`alt` rédigés, `loading="lazy"` sauf le hero (`fetchpriority="high"`).

**Pièges** : images dans `/public` = pas d'optimisation `astro:assets` ; les
redimensionner à la source avant commit. Remplacer par de vraies photos du cabinet
dès que disponibles, puis envisager la bascule vers `astro:assets`.
