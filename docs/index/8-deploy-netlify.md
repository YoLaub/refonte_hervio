---
id: okf-8
feature: deploy-netlify
branch: feature/deploy-netlify
status: done
files:
  - netlify.toml
  - public/_headers
  - astro.config.mjs
  - src/data/site.ts
  - src/lib/robots.ts
  - src/pages/robots.txt.ts
tests:
  - tests/robots.test.ts
decisions:
  - "2026-08-20 : le domaine vient de process.env.URL (fourni par Netlify) avec le domaine du cabinet en repli, plutôt qu'une config à basculer à la main (un oubli publierait des canoniques pointant vers le site du client)."
  - "2026-08-20 : noindex via en-tête HTTP X-Robots-Tag et non robots.txt (robots.txt bloque le crawl mais n'empêche pas l'apparition dans les résultats)."
  - "2026-08-20 : public/robots.txt supprimé au profit d'une route générée, le fichier statique figeant le domaine."
---

**Quoi** : rend le site déployable sur Netlify en démo privée. Build statique
(`dist`), indexation refusée par en-tête, et toutes les URLs auto-référencées
(canonique, JSON-LD, sitemap, robots) suivent le domaine du déploiement.

**Pièges** :
- Le domaine était écrit à deux endroits : `astro.config.mjs` (sitemap) et
  `src/data/site.ts` (canonique + JSON-LD). Corriger le premier laissait le
  canonical pointer vers le vrai site — vérifier le HTML produit, pas la config.
- `public/_headers` n'a d'effet qu'une fois copié dans `dist` : à contrôler au build.
- À la mise en production sur le domaine du cabinet : retirer `public/_headers`.
