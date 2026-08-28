# Template Article Premium V4 — Documentation & Guide de Référence
**Projet** : *Le Jardin des Pensées (HIKMA & NOUR)*
**Version** : `V4.1 (Synchronisée & Stabilisée)`
**Dépôt** : `hikmamind/jardin-des-pensees`

---

## 1. Objectif du Template

Le **Template Article Premium V4** est le standard architectural, responsive et graphique unique pour tous les articles longs et études approfondies du site sur l'ensemble des 5 piliers :
- ⚡ **Développement personnel** (`/developpement-personnel/`)
- 🏛️ **Philosophie** (`/philosophie/`)
- 🧠 **Psychologie** (`/psychologie/`)
- 🌿 **Sagesse & Art de vivre** (`/sagesse/`)
- 📜 **Pensée islamique** (`/islam/`)

Il garantit une expérience de lecture immersive (*Dark Academia* épuré), parfaitement bilingue et trilingue (Arabe, Français, Anglais) avec gestion native du RTL/LTR, des polices typographiques optimisées et une largeur de lecture ergonomique (860px max).

---

## 2. Structure Logique Obligatoire (15 Composants Synchronisés)

1. **NAVBAR / HEADER GLOBAL** : Compact, logo officiel 38px, liens piliers, bouton de bascule de langue instantané (`🌐`), toggle thème (`🌙`).
2. **FIL D’ARIANE (Breadcrumb)** : `Accueil / Pilier / Parcours / Titre Article`.
3. **HERO ARTICLE PREMIUM** : Badge catégorie, H1 noble (clamp 2rem–3.1rem), sous-titre explicatif, barre de métadonnées (Auteur, Date, Temps de lecture).
4. **IMAGE HERO HD (16:9)** : Cadrage maîtrisé (clamp 240px–460px), bordure dorée subtile, légende intégrée.
5. **INTRODUCTION LEAD BOX** : Boîte d'accroche stylisée avec bordure latérale dorée (droite en RTL, gauche en LTR).
6. **TABLE DES MATIÈRES INTERACTIVE (ToC)** : Grille responsive 2 colonnes (desktop) / 1 colonne (mobile) liant les 10 sections (`#section-01` à `#section-10`).
7. **CORPS ÉDITORIAL (10 Sections)** : 10 sections structurées avec numéros dorés, sous-titres H2, paragraphes aérés et citations callout.
8. **CONCLUSION & SYNTHÈSE** : Résumé analytique et philosophique.
9. **POINTS CLÉS À RETENIR (Takeaways)** : Encadré récapitulant les points fondamentaux avec puces cochées dorées.
10. **CITATIONS ET IDÉES FONDAMENTALES** : Grille de citations clés avec attribution de l'auteur.
11. **PENSEURS ASSOCIÉS** : Grille de cartes équilibrées (portraits 200px / mobile 170px) renvoyant vers les fiches penseurs.
12. **PARCOURS ASSOCIÉ** : Carte de liaison vers le parcours thématique lié.
13. **ARTICLES RECOMMANDÉS** : Grille de 2 à 3 lectures complémentaires avec aperçu.
14. **CTA D'EXPLORATION** : Bloc d'action vers le pilier parent.
15. **FOOTER GLOBAL COMPACT** : Pied de page harmonisé avec logo Hikma & Nour (max 90px), colonnes de liens et copyright.

---

## 3. Feuille de Styles Dédiée

La feuille de style partagée se trouve dans :
```html
<link rel="stylesheet" href="../templates/article-premium-v4.css?v=5">
```
Elle centralise toutes les règles de mise en page, de largeur de lecture (`max-width: 860px`), de typographie arabe (`line-height: 2.05`), de breakpoints et de gestion RTL.

---

## 4. Tests et Conformité

Tous les articles respectent rigoureusement :
- 0 placeholder `{{` ou `}}` dans les pages publiées
- 0 lien mort `href="#"` ou `href=""`
- 0 scroll horizontal sur mobile (testé de 360px à 1440px)
- Bascule dynamique AR / FR / EN sans rechargement
