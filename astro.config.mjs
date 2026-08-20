// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domaine de production (à confirmer au déploiement) — sert au sitemap et aux URLs canoniques.
// Sur Netlify, `URL` contient l'adresse du déploiement : la démo s'auto-référence
// au lieu de pointer vers le site du cabinet. En local, le domaine cible s'applique.
export default defineConfig({
  site: process.env.URL ?? 'https://www.sagefemmevannes.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
