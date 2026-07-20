# Pièges connus

Fichier append-only : ajouter chaque nouveau piège sous la section de la stack concernée
(créer la section si besoin, la dater). Ne consulter que les sections correspondant à la
stack du projet en cours — inutile de charger le reste en contexte.

## Génériques (toute stack)
- Webhooks inter-services : HMAC-SHA256 hex + comparaison timing-safe, contrat de payload
  partagé (schéma validé des deux côtés).
- Numérotation légale : transaction + contrainte unique (memberId, year, seq).
- Feature qui a besoin d'un secret/SMTP externe : prévoir un mode simulé (jsonTransport)
  pour que l'app tourne sans config ; le vrai transport s'active si la variable d'env est présente.
- Rendre en headless une page protégée : jeton court (JWT) lié au chemin, autorisé dans le proxy.
- Intl fr-FR : séparateurs = espaces insécables ; comparer via le formateur, pas une chaîne écrite.

## Go (2026-07, projet Kern-Orch)
- Typed-nil : un pointeur nil typé (ex. `(*bytes.Buffer)(nil)`) rangé dans un champ
  `io.Writer`/interface produit une interface NON nil → tout garde `if w == nil` échoue et
  déréférence → panic. N'assigner un pointeur à un champ interface que s'il est non-nil.
- Subprocess streaming : tester le vrai chemin avec un process externe réel (script sh dans
  `t.TempDir()`) en plus du pattern `TestHelperProcess` (`GO_WANT_HELPER_PROCESS=1`).
- Fan-out concurrent : donner un `Clone()` du state à chaque branche, merger sur une seule
  goroutine dans un ordre stable ; valider avec `go test -race`.

## Next 16 / TypeScript (2026-07, projet CRM_TEAM)
- npm workspaces + `exports` + `turbopack.root` pour un package TS partagé.
- jose/crypto sous vitest jsdom → `// @vitest-environment node` sur les tests de services.
- tsx/seeds : `import "dotenv/config"` obligatoire.
- Next : `new Response(new Uint8Array(buffer))` — BodyInit n'accepte pas Buffer directement.
- Drag & drop : HTML5 dataTransfer + useOptimistic + server action typée, zéro dépendance.

## Prisma 7 (2026-07)
- Generator `prisma-client`, prisma.config.ts + dotenv, driver adapter requis.

## Python & interop Python ↔ TS (2026-07)
- pydantic→zod : `by_alias=True, exclude_none=True` (zod `.optional()` refuse null).
- Scrapling : navigateurs via l'exe `scrapling install`, pas `python -m scrapling` ; le
  Playwright ainsi installé est réutilisable pour du rendu PDF (ne pas réembarquer Chromium).

## Astro 5 / site statique (2026-07, projet refonte sagefemmevannes)
- npm `allow-scripts` bloque les postinstall (esbuild, sharp) → build KO tant qu'on n'a
  pas `npm approve-scripts esbuild sharp` puis `npm rebuild`. Vérifier après tout install.
- Tailwind v4 : plus de `tailwind.config.js` ; config CSS-first via `@theme` dans le CSS
  + plugin `@tailwindcss/vite` dans `astro.config`. Ne pas générer de config JS.
- E2E d'un site statique = `astro build` + un script Node qui grep le HTML de `dist/`
  (CTA, coordonnées, JSON-LD, slugs attendus) ; testable sans navigateur.
- Scraper un site source WordPress OVH : le HTTPS peut servir un cert mutualisé
  (`*.hosting.ovh.net`) qui casse WebFetch → passer par `curl http://`.
- Content Collections : garder le schéma Zod dans un fichier à part importé depuis `zod`
  (PAS `astro:content`, module virtuel non résolvable en Vitest) → schéma testable en
  unitaire ET réutilisé par `content.config.ts`.
- Frontmatter YAML : une valeur contenant « : » (ex. « 4ème mois : un temps… ») doit être
  quotée, sinon gray-matter/js-yaml lève « incomplete explicit mapping pair ».
