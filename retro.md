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
