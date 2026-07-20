import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { serviceSchema } from './content/schema';

// Collection « services » : une fiche de prestation par fichier Markdown.
// Le slug de l'URL = nom du fichier (voir src/pages/[...service].astro).
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: serviceSchema,
});

export const collections = { services };
