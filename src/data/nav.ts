// Structure de navigation — donnée pure, consommée par le Header et le Footer.
// Les slugs reprennent l'arborescence du site actuel (conservation SEO).

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href?: string; // page d'atterrissage du groupe (optionnelle)
  children?: NavLink[];
}

export const nav: NavGroup[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Le cabinet', href: '/le-cabinet/' },
  {
    label: 'Je suis enceinte',
    children: [
      { label: 'Consultations de grossesse', href: '/consultations-de-grossesse/' },
      { label: 'Entretien prénatal du 4ème mois', href: '/entretien-prenatal-du-4eme-mois/' },
      { label: 'Préparation à la naissance', href: '/preparation-a-la-naissance-et-a-la-parentalite/' },
    ],
  },
  {
    label: 'Après la naissance',
    children: [
      { label: 'Suivi après l\'accouchement', href: '/suivi-apres-accouchement/' },
      { label: 'Soutien à l\'allaitement', href: '/soutien-a-lallaitement/' },
      { label: 'Rééducation du périnée', href: '/reeducation-du-perinee/' },
      { label: 'Visite post-natale', href: '/visite-post-natale/' },
    ],
  },
  { label: 'Gynécologie & contraception', href: '/suivi-gynecologique-et-contraception/' },
  { label: 'Acupuncture', href: '/acupuncture/' },
  { label: 'Contact', href: '/contact/' },
];

// Aplatit la nav en liste de liens réels (pour tests, sitemap, plan du site).
export function allLinks(): NavLink[] {
  const out: NavLink[] = [];
  for (const g of nav) {
    if (g.href) out.push({ label: g.label, href: g.href });
    for (const c of g.children ?? []) out.push(c);
  }
  return out;
}
