---
id: okf-6
feature: equipe-photos
branch: feature/equipe-photos
status: done
files:
  - src/data/site.ts
  - src/components/PractitionerCard.astro
  - src/components/TeamSection.astro
  - src/pages/index.astro
  - src/pages/le-cabinet.astro
  - public/equipe/README.md
tests:
  - tests/site.test.ts (role + initiales)
decisions:
  - "2026-07-21 : zones photo des praticiennes (retour client « impersonnel ») — carte avec avatar photo OU initiales si photo absente."
  - "2026-07-21 : photos optionnelles via champ photo dans site.ts + fichiers /public/equipe ; avatar initiales par défaut (fonction initials() testée)."
  - "2026-07-21 : TeamSection réutilisable placée sur l'accueil et la page Le cabinet."
---

**Quoi** : incarnation du cabinet. Composant PractitionerCard (avatar photo ou initiales
sur fond sauge, nom, rôle, tél, RDV) + TeamSection réutilisable, sur l'accueil et Le
cabinet. Dégradation gracieuse : sans photo, avatar à initiales. 16 tests + build + E2E verts.

**Pièges** : bg pleine largeur d'une section = wrapper externe (bg) + conteneur interne
(max-w), sinon le fond ne couvre que la largeur du contenu centré.

**À faire (client)** : déposer lenaig.jpg / julie.jpg dans public/equipe et décommenter
`photo:` dans site.ts ; ajouter une courte présentation (champ `presentation`).
