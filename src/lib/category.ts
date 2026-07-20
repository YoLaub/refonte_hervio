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
}

const visuals: Record<Category, CategoryVisual> = {
  enceinte: {
    label: 'Je suis enceinte',
    gradient: 'from-brand-200 to-brand-100',
    icon: 'grossesse',
  },
  apres: {
    label: 'Après la naissance',
    gradient: 'from-accent-300 to-brand-100',
    icon: 'bebe',
  },
  gyneco: {
    label: 'Gynécologie & contraception',
    gradient: 'from-brand-300 to-accent-300',
    icon: 'gyneco',
  },
  acupuncture: {
    label: 'Acupuncture',
    gradient: 'from-brand-200 to-accent-300',
    icon: 'acupuncture',
  },
};

export function categoryVisual(category: Category): CategoryVisual {
  return visuals[category];
}
