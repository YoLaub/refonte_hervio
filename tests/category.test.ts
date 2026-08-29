import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { categoryVisual } from '../src/lib/category';
import { serviceCategories } from '../src/content/schema';

describe('visuels de catégorie', () => {
  it('fournit un visuel complet pour chaque catégorie', () => {
    for (const c of serviceCategories) {
      const v = categoryVisual(c);
      expect(v.label.length).toBeGreaterThan(0);
      expect(v.gradient).toMatch(/^from-.+ to-.+$/);
      expect(v.icon.length).toBeGreaterThan(0);
    }
  });

  it('pointe vers une photo par défaut réellement présente dans /public', () => {
    for (const c of serviceCategories) {
      const { image } = categoryVisual(c);
      expect(image).toMatch(/^\/.+\.(jpg|jpeg|png|webp|avif)$/);
      expect(existsSync(join(process.cwd(), 'public', image)), `${c}: ${image} manquant`).toBe(true);
    }
  });

  it('associe la bonne icône à la grossesse et au bébé', () => {
    expect(categoryVisual('enceinte').icon).toBe('grossesse');
    expect(categoryVisual('apres').icon).toBe('bebe');
  });
});
