// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domaine de production (à confirmer au déploiement) — sert au sitemap et aux URLs canoniques.
export default defineConfig({
  site: 'https://www.sagefemmevannes.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
