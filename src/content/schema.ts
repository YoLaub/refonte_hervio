import { z } from 'zod';

// Schéma d'une fiche de prestation. Exporté séparément pour être testé en unitaire
// (Vitest) sans démarrer le runtime Astro. Réutilisé par src/content.config.ts.
// On importe zod directement (et non depuis astro:content, non résolvable hors runtime).
export const serviceCategories = ['enceinte', 'apres', 'gyneco', 'acupuncture'] as const;

export const serviceSchema = z.object({
  title: z.string().min(3),
  category: z.enum(serviceCategories),
  order: z.number().int().nonnegative(),
  seo: z.object({
    title: z.string().min(10),
    description: z.string().min(30).max(160),
  }),
  // Photo d'illustration optionnelle (chemin dans /public, ex. '/services/perinee.jpg').
  // Absente → illustration placeholder par catégorie (voir CategoryIllustration.astro).
  image: z.string().optional(),
  // slug dérivé du nom de fichier par Astro ; pas dans le frontmatter.
});

export type Service = z.infer<typeof serviceSchema>;
