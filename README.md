# Tailwind v4 – Test d’intégration

Projet vitrine réalisé pour évaluer l’outil CLI de Tailwind CSS v4 à travers une page de recettes responsive.

## Technologies
- Tailwind CSS v4 (mode « single CSS entry » via `src/input.css`)
- HTML statique (`index.html`)
- JavaScript léger (`src/menu.js`) pour le menu mobile
- Assets images dans `img/`

## Installation
```bash
npm install
```

## Génération du CSS
```bash
npx tailwindcss -i src/input.css -o src/output.css --watch
```

## Structure
- `index.html` : layout principal et composants (cartes, navigation, CTA)
- `src/input.css` : import Tailwind + utilitaires personnalisés (`.card`, `.badge`, `.btn`)
- `src/output.css` : CSS généré (ne pas éditer directement)
- `src/menu.js` : logique du bouton menu mobile
- `img/` : visuels (steak, soupe, salade)

## Notes
- Utilise l’API `@theme` et `@source` propres à Tailwind v4.
- Les interactions (hover) sont gérées via `@apply` et des utilitaires Tailwind pour rester dans l’esprit du test.

## Licence
Liberté totale pour expérimenter (ajuste selon ton besoin).
