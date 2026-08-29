// Métadonnées visuelles par catégorie de prestation — fonction pure (testable).
// Sert aux illustrations placeholder (dégradé + icône) quand aucune photo n'est fournie.
import type { serviceCategories } from '../content/schema';

export type Category = (typeof serviceCategories)[number];

export interface CategoryVisual {
  label: string;
  /** Classes Tailwind du dégradé de fond de l'illustration placeholder. */
  gradient: string;
  /** Clé d'icône (voir CategoryIllustration.astro). */
  icon: 'grossesse' | 'bebe' | 'gyneco' | 'acupuncture';
  /** Photo par défaut de la catégorie (chemin dans /public). Une fiche peut la
   *  surcharger via le champ `image` de son frontmatter. */
  image: string;
}

const visuals: Record<Category, CategoryVisual> = {
  enceinte: {
    label: 'Je suis enceinte',
    gradient: 'from-brand-200 to-brand-100',
    icon: 'grossesse',
    image: '/services/enceinte.jpg',
  },
  apres: {
    label: 'Après la naissance',
    gradient: 'from-accent-300 to-brand-100',
    icon: 'bebe',
    image: '/services/apres.jpg',
  },
  gyneco: {
    label: 'Gynécologie & contraception',
    gradient: 'from-brand-300 to-accent-300',
    icon: 'gyneco',
    image: '/services/gyneco.jpg',
  },
  acupuncture: {
    label: 'Acupuncture',
    gradient: 'from-brand-200 to-accent-300',
    icon: 'acupuncture',
    image: '/services/acupuncture.jpg',
  },
};

export function categoryVisual(category: Category): CategoryVisual {
  return visuals[category];
}
