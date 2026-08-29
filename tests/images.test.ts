import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (p: string) => readFileSync(join(root, p), 'utf-8');

// Les photos référencées « en dur » dans les pages (hors visuels de catégorie,
// couverts par category.test.ts). Chaque entrée : [page, chemin public attendu].
const refs: [string, string][] = [
  ['src/pages/index.astro', '/hero/accueil.jpg'],
  ['src/pages/le-cabinet.astro', '/cabinet/salle.jpg'],
];

describe('photos des pages', () => {
  for (const [page, image] of refs) {
    it(`${page} référence ${image} et le fichier existe avec un alt`, () => {
      const html = read(page);
      expect(html).toContain(`src="${image}"`);
      // L'<img> qui porte ce src doit avoir un attribut alt non vide.
      const tag = html.match(new RegExp(`<img[^>]*src="${image.replace('/', '\\/')}"[^>]*>`, 's'));
      expect(tag, `<img> introuvable pour ${image}`).not.toBeNull();
      expect(tag![0]).toMatch(/alt="[^"]+"/);
      expect(existsSync(join(root, 'public', image)), `${image} manquant dans /public`).toBe(true);
    });
  }
});
