# CLAUDE.md

Guidance pour Claude Code (claude.ai/code) sur ce dépôt.

## Ce qui est construit

Refonte **moderne** du site vitrine du **Cabinet de sages-femmes de Vannes** —
Lénaïg HERVIO - LE MERCIER & Julie QUINTIN. Le site actuel
(http://www.sagefemmevannes.com/) est un WordPress de 2015 (thème KREATIF Studio).
Objectif : un site statique rapide, accessible, responsive et bien référencé, qui
**reprend l'intégralité du contenu existant** en le modernisant (design, structure,
performance, accessibilité). Ce n'est pas un ajout de fonctionnalités : c'est une
refonte iso-contenu + modernisation.

Public : femmes enceintes, jeunes parents, femmes en suivi gynécologique, dans le
bassin de Vannes (56). Ton : rassurant, humain, professionnel de santé.

## Stack (validée 2026-07-20)

- **Astro 5** (site statique, 0 JS par défaut, îlots si besoin).
- **Tailwind CSS** (design system, thème clair).
- Contenu en **Markdown** via Astro Content Collections (`src/content/`), pas en dur
  dans les `.astro`.
- Build statique déployable sur OVH (hébergeur actuel) / Netlify / Vercel.
- **Prise de RDV = liens Doctolib** (pas de back-office, pas de base de données) :
  - Lénaïg Hervio Le Mercier : https://www.doctolib.fr/sage-femme/vannes/lenaig-hervio-le-mercier
  - Julie Quintin : https://www.doctolib.fr/sage-femme/vannes/julie-quintin
  - Boutons « Prendre rendez-vous » visibles (header + sections), CTA principal du site.

## Infos cabinet (source de vérité)

- **Praticiennes** : Lénaïg HERVIO - LE MERCIER, Julie QUINTIN. Sages-femmes.
- **Adresse** : 53 avenue Edouard Herriot, 56000 Vannes.
- **Téléphones** : Lénaïg 06 60 07 94 23 · Julie 06 33 07 23 24.
- **Convention** : Secteur 1, tarifs conventionnels sans dépassement d'honoraires,
  **tiers-payant** pratiqué (pas d'avance de frais sur les actes pris en charge).
- **Facebook** : Cabinet Sages-femmes Vannes.
- Maternités partenaires citées : CHBA, Clinique Océane.
- Le contenu textuel verbatim de chaque page est archivé dans
  `docs/content-source.md` — **c'est la référence à reprendre**, ne pas réinventer le
  contenu médical.

## Arborescence des pages (~12, à conserver)

- **Accueil** — hero + 3 axes (grossesse / après la naissance / gynéco) + coordonnées.
- **Le cabinet** — présentation des praticiennes, adresse, convention, liens utiles.
- **Je suis enceinte** : Consultations de grossesse · Entretien prénatal du 4ème mois ·
  Cours de préparation à la naissance et à la parentalité.
- **Après la naissance** : Suivi après l'accouchement · Soutien à l'allaitement ·
  Rééducation du périnée · Visite post-natale.
- **Suivi gynécologique et contraception** (mentionne pilule / stérilet / implant).
- **Acupuncture**.
- **Contact** — coordonnées, plan/carte, liens Doctolib, téléphones.

Navigation : regrouper « Je suis enceinte » et « Après la naissance » en menus
déroulants, comme le site actuel. Footer : coordonnées + convention + mentions.

## Commandes

- Installer : `npm install`
- Dev : `npm run dev`
- Build : `npm run build`
- Preview build : `npm run preview`
- Tests : `npm test` (Vitest)
- (Ces commandes seront réelles après la Phase 2 bootstrap.)

## Workflow (skill greenfield-tdd-okf)

Git-flow : `main` (jalons stables) ← `dev` ← une branche par feature. **Merge `--no-ff`
vers `dev` uniquement si tests verts + build OK + E2E fait. Jamais de commit direct sur
`main`/`dev`.** Fiche OKF par feature dans `docs/index/<n>-<feature>.md` (template :
`.claude/skills/greenfield-tdd-okf/references/okf-fiche-template.md`, corps ≤15 lignes,
décisions datées). Pièges dans `retro.md` quand ils mordent ; pièges génériques aussi
dans `references/pieges.md`. Créer `docs/index/` + `retro.md` dès le bootstrap.

TDD sur un site statique : la « logique pure » testable = collections de contenu
(schémas Zod), helpers d'URL/SEO, composants critiques (données structurées, liens
Doctolib, coordonnées). L'E2E = `npm run build` qui passe + vérification du HTML généré
(présence des CTA Doctolib, adresse, téléphones, balises SEO).

## Contraintes qualité

- **Accessibilité (RGAA/WCAG AA)** : contrastes, focus visible, alt sur images, nav
  clavier, HTML sémantique. C'est un site de santé, l'accessibilité est non négociable.
- **SEO local** : title/meta par page, données structurées `MedicalBusiness` /
  `Physician`, sitemap, URLs propres (conserver les slugs existants pour ne pas perdre
  le référencement, ou prévoir des redirections 301).
- **Performance** : Lighthouse ≥ 95, images optimisées (`astro:assets`), pas de JS
  inutile.
- **Responsive** mobile-first (la majorité des consultations du contenu se fait au tel).
- **DRY / SOLID** : coordonnées, praticiennes et liens Doctolib centralisés dans une
  seule source (`src/data/` ou config), jamais copiés-collés dans les pages.
- **Ne jamais supprimer** fichier/contenu sans accord explicite. Proposer, attendre
  validation.
- Contenu médical : reprendre le texte source tel quel (`docs/content-source.md`), ne
  pas inventer ni modifier les informations de santé.

## Crédits / attribution

Conception originale : KREATIF Studio (à retirer/remplacer selon accord). Photographie
créditée « RLG Photographie » sur le site actuel — vérifier les droits avant réemploi
des images.
