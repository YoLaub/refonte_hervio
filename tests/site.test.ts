import { describe, it, expect } from 'vitest';
import { practitioners, site, adresseComplete, initials } from '../src/data/site';

describe('données du cabinet', () => {
  it('expose les deux praticiennes avec un lien Doctolib valide', () => {
    expect(practitioners).toHaveLength(2);
    for (const p of practitioners) {
      expect(p.doctolib).toMatch(/^https:\/\/www\.doctolib\.fr\//);
      expect(p.telHref).toMatch(/^\+33\d{9}$/);
      expect(p.nom.length).toBeGreaterThan(0);
    }
  });

  it('compose l\'adresse complète depuis la source unique', () => {
    expect(adresseComplete).toBe('53 avenue Edouard Herriot, 56000 Vannes');
  });

  it('déclare le secteur 1 et le tiers-payant dans la convention', () => {
    expect(site.convention).toMatch(/Secteur 1/);
    expect(site.convention).toMatch(/tiers-payant/);
  });

  it('chaque praticienne a un rôle affichable', () => {
    for (const p of practitioners) expect(p.role.length).toBeGreaterThan(0);
  });

  it('calcule les initiales pour l\'avatar par défaut', () => {
    expect(initials('Lénaïg Hervio - Le Mercier')).toBe('LH');
    expect(initials('Julie Quintin')).toBe('JQ');
  });
});
