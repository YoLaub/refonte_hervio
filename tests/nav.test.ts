import { describe, it, expect } from 'vitest';
import { nav, allLinks } from '../src/data/nav';

describe('navigation', () => {
  it('contient les 4 rubriques principales attendues', () => {
    const labels = nav.map((g) => g.label);
    expect(labels).toContain('Je suis enceinte');
    expect(labels).toContain('Après la naissance');
    expect(labels).toContain('Acupuncture');
    expect(labels).toContain('Contact');
  });

  it('tous les liens sont des slugs internes normalisés (/.../ ou /)', () => {
    for (const l of allLinks()) {
      expect(l.href).toMatch(/^\/([a-z0-9-]+\/)?$|^\/[a-z0-9-]+\/$/);
    }
  });

  it('aplatit les 12 pages du périmètre', () => {
    // Accueil, Cabinet, 3 grossesse, 4 après-naissance, gynéco, acupuncture, contact
    expect(allLinks()).toHaveLength(12);
  });

  it('ne contient aucun doublon de slug', () => {
    const hrefs = allLinks().map((l) => l.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});
