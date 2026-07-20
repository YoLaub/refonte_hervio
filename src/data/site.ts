// Source UNIQUE des informations du cabinet. Ne jamais dupliquer ces valeurs ailleurs :
// header, footer, contact, JSON-LD et boutons Doctolib s'alimentent tous ici.

export interface Practitioner {
  nom: string;
  tel: string; // format affiché
  telHref: string; // format tel: (E.164 sans espaces)
  doctolib: string;
}

export const practitioners: Practitioner[] = [
  {
    nom: 'Lénaïg Hervio - Le Mercier',
    tel: '06 60 07 94 23',
    telHref: '+33660079423',
    doctolib: 'https://www.doctolib.fr/sage-femme/vannes/lenaig-hervio-le-mercier',
  },
  {
    nom: 'Julie Quintin',
    tel: '06 33 07 23 24',
    telHref: '+33633072324',
    doctolib: 'https://www.doctolib.fr/sage-femme/vannes/julie-quintin',
  },
];

export const site = {
  nom: 'Cabinet de sages-femmes de Vannes',
  metier: 'Sages-femmes',
  praticiennes: 'Lénaïg Hervio - Le Mercier & Julie Quintin',
  adresse: {
    rue: '53 avenue Edouard Herriot',
    codePostal: '56000',
    ville: 'Vannes',
    pays: 'FR',
  },
  convention: 'Sage-femme conventionnée Secteur 1 — tarifs conventionnels sans dépassement d\'honoraires, tiers-payant pratiqué.',
  facebook: 'https://www.facebook.com/pages/Cabinet-Sages-femmes-Vannes/921860981208057',
  url: 'https://www.sagefemmevannes.com',
} as const;

export const adresseComplete = `${site.adresse.rue}, ${site.adresse.codePostal} ${site.adresse.ville}`;
