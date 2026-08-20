// Génération du robots.txt — fonction pure (testable Vitest).
// Alimentée par la source unique src/data/site.ts : le sitemap est annoncé sur le
// domaine du déploiement courant, jamais sur un domaine écrit en dur.
import { site } from '../data/site';

export function robotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap-index.xml
`;
}
