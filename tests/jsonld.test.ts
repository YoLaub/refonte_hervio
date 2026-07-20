import { describe, it, expect } from 'vitest';
import { medicalBusinessJsonLd } from '../src/lib/jsonld';

describe('JSON-LD MedicalClinic', () => {
  const ld = medicalBusinessJsonLd();

  it('décrit une clinique médicale valide schema.org', () => {
    expect(ld['@context']).toBe('https://schema.org');
    expect(ld['@type']).toBe('MedicalClinic');
    expect(ld.address['@type']).toBe('PostalAddress');
    expect(ld.address.addressLocality).toBe('Vannes');
    expect(ld.address.postalCode).toBe('56000');
  });

  it('liste les 2 praticiennes en tant que Physician avec action de réservation', () => {
    expect(ld.employee).toHaveLength(2);
    for (const e of ld.employee) {
      expect(e['@type']).toBe('Physician');
      expect(e.potentialAction.target).toMatch(/doctolib\.fr/);
      expect(e.telephone).toMatch(/^\+33\d{9}$/);
    }
  });

  it('est sérialisable en JSON sans cycle', () => {
    expect(() => JSON.stringify(ld)).not.toThrow();
  });
});
