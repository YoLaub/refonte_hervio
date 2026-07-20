// Construction des données structurées schema.org — fonction pure (testable Vitest).
// Alimentée par la source unique src/data/site.ts.
import { site, practitioners, type Practitioner } from '../data/site';

export function medicalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: site.nom,
    url: site.url,
    telephone: practitioners.map((p) => p.telHref),
    medicalSpecialty: 'Midwifery',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.adresse.rue,
      postalCode: site.adresse.codePostal,
      addressLocality: site.adresse.ville,
      addressCountry: site.adresse.pays,
    },
    sameAs: [site.facebook],
    employee: practitioners.map(physicianJsonLd),
  };
}

export function physicianJsonLd(p: Practitioner) {
  return {
    '@type': 'Physician',
    name: p.nom,
    medicalSpecialty: 'Midwifery',
    telephone: p.telHref,
    availableService: {
      '@type': 'MedicalProcedure',
      name: 'Suivi de grossesse, gynécologie, préparation à la naissance',
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: p.doctolib,
    },
  };
}
