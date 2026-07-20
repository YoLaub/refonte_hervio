---
id: okf-3
feature: content-collections
branch: feature/content-collections
status: done
files:
  - src/content.config.ts
  - src/content/schema.ts
  - src/content/services/*.md (9 fiches)
  - package.json
tests:
  - tests/services.test.ts
decisions:
  - "2026-07-20 : collection « services » via glob loader (Content Layer Astro 5), 9 prestations en Markdown."
  - "2026-07-20 : schéma Zod isolé dans src/content/schema.ts, importé depuis 'zod' (pas astro:content) pour être testable en Vitest ; zod + gray-matter ajoutés en deps."
  - "2026-07-20 : slugs des fichiers = slugs de nav.ts (conservation SEO du site actuel)."
---

**Quoi** : collection de contenu « services » (9 fiches de prestation en Markdown,
frontmatter title/category/order/seo), schéma Zod partagé et testé. Contenu repris de
docs/content-source.md. Build valide le schéma sur les 9 fiches ; 11 tests verts.

**Pièges** : gray-matter/js-yaml casse si une valeur de frontmatter contient « : » non
quotée (description « 4ème mois : un temps… ») → quoter la valeur. Schéma Zod à importer
depuis 'zod' et non 'astro:content' (virtuel, non résolvable hors runtime, cassait Vitest).
