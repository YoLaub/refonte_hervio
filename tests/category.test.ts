import { describe, it, expect } from 'vitest';
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

  it('associe la bonne icône à la grossesse et au bébé', () => {
    expect(categoryVisual('enceinte').icon).toBe('grossesse');
    expect(categoryVisual('apres').icon).toBe('bebe');
  });
});
