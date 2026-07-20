# Rétro — refonte sagefemmevannes.com

Journal des pièges spécifiques au projet, ajoutés au moment où ils mordent.

## 2026-07-20 — Bootstrap

- **Cert HTTPS du site source cassé** : `www.sagefemmevannes.com` sert un certificat OVH
  (`cluster111.hosting.ovh.net`) → WebFetch (qui force HTTPS) échoue. Récupérer le contenu
  via `curl -sL http://...`. Prévoir un vrai certificat au déploiement.
- **npm allow-scripts** : le wrapper local bloque les postinstall → esbuild/sharp non
  installés, build KO. Résolu par `npm approve-scripts esbuild sharp` + `npm rebuild`.
  (Piège générique → aussi dans `references/pieges.md`.)
- **Tailwind v4** : plus de `tailwind.config.js` ; config CSS-first via `@theme` dans
  `global.css` + plugin `@tailwindcss/vite`. Ne pas chercher/attendre un fichier config JS.

## 2026-07-21 — Pages, SEO & clôture v0.1.0

- **Screenshots via l'extension Chrome** : échouent en boucle sur l'onglet du serveur
  `astro dev` (page « busy » / injection de script en timeout). Solution : `astro preview`
  (statique) dans un **onglet neuf**. Le serveur dev peut aussi planter si `package.json`
  change en cours d'édition (redémarrage config).
- **Script JSON-LD Astro** : `set:html={JSON.stringify(data)}` + `is:inline` sur le
  `<script type="application/ld+json">`, sinon Astro le traite comme un module JS.
- **Bilan v0.1.0** : 5 features (bootstrap, design-system, content-collections, pages,
  seo-a11y), 14 tests, build + E2E (12 pages + JSON-LD) verts. Charte « Sérénité
  végétale » validée visuellement.
- **Restes fonctionnels** (hors périmètre v0.1.0, à confirmer avec la cliente) : fin de la
  page « Préparation à la naissance », 2 sous-pages contraception, coordonnées GPS pour une
  vraie carte, droits des photos (RLG Photographie), certificat HTTPS au déploiement,
  redirections 301 des anciennes URLs si les slugs changent.
