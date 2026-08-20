// Source UNIQUE des informations du cabinet. Ne jamais dupliquer ces valeurs ailleurs :
// header, footer, contact, JSON-LD et boutons Doctolib s'alimentent tous ici.

export interface Practitioner {
  nom: string;
  role: string;
  tel: string; // format affiché
  telHref: string; // format tel: (E.164 sans espaces)
  doctolib: string;
  // Chemin de la photo dans /public (ex. '/equipe/lenaig.jpg'). Laisser undefined
  // affiche un avatar avec les initiales. Déposer le fichier suffit à l'activer.
  photo?: string;
  // Courte présentation — à compléter avec la praticienne (voir docs/content-source.md).
  presentation?: string;
}

export const practitioners: Practitioner[] = [
  {
    nom: 'Lénaïg Hervio - Le Mercier',
    role: 'Sage-femme',
    tel: '06 60 07 94 23',
    telHref: '+33660079423',
    doctolib: 'https://www.doctolib.fr/sage-femme/vannes/lenaig-hervio-le-mercier',
    // photo: '/equipe/lenaig.jpg',
  },
  {
    nom: 'Julie Quintin',
    role: 'Sage-femme',
    tel: '06 33 07 23 24',
    telHref: '+33633072324',
    doctolib: 'https://www.doctolib.fr/sage-femme/vannes/julie-quintin',
    // photo: '/equipe/julie.jpg',
  },
];

// Initiales pour l'avatar par défaut (« Lénaïg Hervio - Le Mercier » → « LH »).
export function initials(nom: string): string {
  return nom
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((m) => m[0]?.toUpperCase() ?? '')
    .join('');
}

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
  // Sur Netlify, `URL` contient l'adresse du déploiement : la démo s'auto-référence
  // (canonique + données structurées) au lieu de pointer vers le site du cabinet.
  url: process.env.URL ?? 'https://www.sagefemmevannes.com',
} as const;

export const adresseComplete = `${site.adresse.rue}, ${site.adresse.codePostal} ${site.adresse.ville}`;
