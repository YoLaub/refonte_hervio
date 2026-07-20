// Vérification E2E : le build statique contient les infos critiques ET les 12 pages.
// Usage : npm run build && npm run e2e
import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const dist = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', dist), 'utf-8');

const musts = [
  ['lien Doctolib Lénaïg', 'doctolib.fr/sage-femme/vannes/lenaig-hervio-le-mercier'],
  ['lien Doctolib Julie', 'doctolib.fr/sage-femme/vannes/julie-quintin'],
  ['téléphone Lénaïg', '06 60 07 94 23'],
  ['téléphone Julie', '06 33 07 23 24'],
  ['adresse', '53 avenue Edouard Herriot'],
  ['skip-link', 'Aller au contenu principal'],
  ['langue fr', 'lang="fr"'],
  ['nav rubrique grossesse', 'Je suis enceinte'],
  ['nav rubrique après naissance', 'Après la naissance'],
  ['footer convention secteur 1', 'Secteur 1'],
];

// Les 12 pages attendues (une page = un fichier index.html généré).
const pages = [
  'index.html',
  'le-cabinet/index.html',
  'contact/index.html',
  'consultations-de-grossesse/index.html',
  'entretien-prenatal-du-4eme-mois/index.html',
  'preparation-a-la-naissance-et-a-la-parentalite/index.html',
  'suivi-apres-accouchement/index.html',
  'soutien-a-lallaitement/index.html',
  'reeducation-du-perinee/index.html',
  'visite-post-natale/index.html',
  'suivi-gynecologique-et-contraception/index.html',
  'acupuncture/index.html',
];

let ok = true;

for (const [label, needle] of musts) {
  if (html.includes(needle)) console.log(`  ✓ ${label}`);
  else { console.error(`  ✗ MANQUANT : ${label} (${needle})`); ok = false; }
}

console.log(`\n  Pages générées (${pages.length} attendues) :`);
for (const p of pages) {
  try {
    await access(fileURLToPath(new URL(p, dist)));
    console.log(`  ✓ ${p}`);
  } catch {
    console.error(`  ✗ MANQUANTE : ${p}`);
    ok = false;
  }
}

if (!ok) {
  console.error('\nE2E échoué : contenu critique ou page manquante.');
  process.exit(1);
}
console.log('\nE2E OK : contenu critique + 12 pages présentes.');
