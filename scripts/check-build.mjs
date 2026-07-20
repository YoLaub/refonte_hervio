// Vérification E2E : le build statique contient bien les informations critiques.
// Usage : npm run build && npm run e2e
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf-8');

const musts = [
  ['lien Doctolib Lénaïg', 'doctolib.fr/sage-femme/vannes/lenaig-hervio-le-mercier'],
  ['lien Doctolib Julie', 'doctolib.fr/sage-femme/vannes/julie-quintin'],
  ['téléphone Lénaïg', '06 60 07 94 23'],
  ['téléphone Julie', '06 33 07 23 24'],
  ['adresse', '53 avenue Edouard Herriot'],
  ['skip-link', 'Aller au contenu principal'],
  ['langue fr', 'lang="fr"'],
];

let ok = true;
for (const [label, needle] of musts) {
  if (html.includes(needle)) {
    console.log(`  ✓ ${label}`);
  } else {
    console.error(`  ✗ MANQUANT : ${label} (${needle})`);
    ok = false;
  }
}

if (!ok) {
  console.error('\nE2E échoué : le build ne contient pas tout le contenu critique.');
  process.exit(1);
}
console.log('\nE2E OK : contenu critique présent dans dist/index.html');
