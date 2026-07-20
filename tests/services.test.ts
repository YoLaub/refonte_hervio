import { describe, it, expect } from 'vitest';
import { readdirSync } from 'node:fs';
import matter from 'gray-matter';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { serviceSchema, serviceCategories } from '../src/content/schema';

const dir = join(process.cwd(), 'src/content/services');
const files = readdirSync(dir).filter((f) => f.endsWith('.md'));

describe('schéma de prestation', () => {
  it('accepte une fiche valide', () => {
    const ok = serviceSchema.safeParse({
      title: 'Acupuncture',
      category: 'acupuncture',
      order: 1,
      seo: { title: 'Acupuncture à Vannes', description: 'x'.repeat(40) },
    });
    expect(ok.success).toBe(true);
  });

  it('rejette une catégorie inconnue et une description trop courte', () => {
    expect(serviceSchema.safeParse({ title: 'X', category: 'inconnu', order: 0, seo: { title: 'titre valide ok', description: 'court' } }).success).toBe(false);
  });
});

describe('fiches de prestation', () => {
  it('les 9 fiches existent et respectent le schéma', () => {
    expect(files).toHaveLength(9);
    for (const f of files) {
      const { data } = matter(readFileSync(join(dir, f), 'utf-8'));
      const res = serviceSchema.safeParse(data);
      expect(res.success, `${f}: ${JSON.stringify(res.error?.issues)}`).toBe(true);
    }
  });

  it('couvre chaque catégorie', () => {
    const cats = files.map((f) => matter(readFileSync(join(dir, f), 'utf-8')).data.category);
    for (const c of serviceCategories) expect(cats).toContain(c);
  });
});
