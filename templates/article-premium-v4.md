# Template Article Premium V4 — Documentation & Guide de Référence
**Projet** : *Le Jardin des Pensées (HIKMA & NOUR)*  
**Version** : `V4.0 (Architecture V6)`  
**Dépôt** : `hikmamind/jardin-des-pensees`

---

## 1. Objectif du Template

Le **Template Article Premium V4** est le modèle architectural et graphique unique de référence pour tous les futurs articles longs et études approfondies du site, couvrant les 5 piliers :
- 🏛️ **Philosophie** (`/philosophie/`)
- 🧠 **Psychologie** (`/psychologie/`)
- ⚡ **Développement personnel** (`/developpement-personnel/`)
- 🌿 **Sagesse & Art de vivre** (`/sagesse/`)
- 📜 **Pensée islamique** (`/islam/`)

Ce template garantit une expérience de lecture immersive, académique, élégante (*Dark Academia*) et parfaitement bilingue/trilingue (Arabe, Français, Anglais) avec gestion native du RTL/LTR.

---

## 2. Structure Logique Obligatoire (15 Composants)

Chaque article généré à partir de ce modèle doit respecter strictement l'ordre des 15 composants suivants :

1. **HEADER GLOBAL & NAVBAR** : Navigation fluide, logo officiel Hikma & Nour, liens piliers, sélecteur de langue interactif.
2. **FIL D’ARIANE (Breadcrumb)** : `Accueil › Pilier › Titre Article` + JSON-LD BreadcrumbList.
3. **HERO ARTICLE** : Badge pilier/catégorie, titre H1 noble, sous-titre explicatif, temps de lecture, date et signature éditoriale.
4. **IMAGE PRINCIPALE** : Image de couverture haute définition 16:9 dans son cadre vitré doré, avec texte alternatif.
5. **INTRODUCTION & LEAD** : Paragraphe d'accroche mis en valeur avec bordure d'accentuation dorée.
6. **TABLE DES MATIÈRES (ToC)** : Grille interactive listant les 10 sections numérotées avec ancres `#section-01` à `#section-10`.
7. **CORPS DE L'ARTICLE (10 Sections)** : 10 sections thématiques structurées, contenant arguments, analyses conceptuelles et exemples historiques.
8. **CONCLUSION & SYNTHÈSE** : Résumé analytique et mise en perspective de la réflexion.
9. **POINTS À RETENIR (Key Takeaways)** : Encadré émeraude/or récapitulant les 3 à 5 leçons maîtresses.
10. **CITATIONS MAJEURES** : Bannière de citations fortes avec auteur et référence vérifiée de l'ouvrage.
11. **PENSEURS ASSOCIÉS** : Grille de cartes reliant les auteurs/penseurs au dossier `/thinkers/?thinker=[id]` ou `/thinkers/[slug]/`.
12. **PARCOURS ASSOCIÉ** : Carte de liaison vers le parcours thématique correspondant (`/[pillar]/parcours/[slug]/`).
13. **ARTICLES RECOMMANDÉS** : Suggestions de lectures complémentaires réelles dans le même thème.
14. **CTA D'EXPLORATION** : Bloc d'incitation à la poursuite de la recherche et à l'exploration du pilier.
15. **FOOTER GLOBAL** : Pied de page officiel avec mentions de copyright et crédits.

---

## 3. Système de Placeholders

Le fichier `templates/article-premium-v4.html` utilise des balises de remplacement normalisées à renseigner lors de la création d'un article physique :

| Placeholder | Description | Exemple |
| :--- | :--- | :--- |
| `{{PILLAR_SLUG}}` | Dossier du pilier parent | `developpement-personnel` |
| `{{PILLAR_NAME_AR}}` | Nom du pilier en arabe | `تطوير الذات` |
| `{{PILLAR_NAME_FR}}` | Nom du pilier en français | `Développement personnel` |
| `{{PILLAR_NAME_EN}}` | Nom du pilier en anglais | `Self-Development` |
| `{{ARTICLE_SLUG}}` | Identifiant URL de l'article | `volonte-action-habitudes` |
| `{{ARTICLE_TITLE_AR}}` | Titre H1 en arabe | `الإرادة والفعل وبناء العادات` |
| `{{ARTICLE_TITLE_FR}}` | Titre H1 en français | `La Volonté, l’Action et l’Ancrage des Habitudes` |
| `{{ARTICLE_TITLE_EN}}` | Titre H1 en anglais | `Will, Action, and the Science of Habits` |
| `{{ARTICLE_SUBTITLE_AR}}` | Sous-titre en arabe | `دراسة تحليلية في آليات العزم النفسي...` |
| `{{ARTICLE_SUBTITLE_FR}}` | Sous-titre en français | `Une exploration psychologique et philosophique...` |
| `{{ARTICLE_SUBTITLE_EN}}` | Sous-titre en anglais | `A psychological and philosophical exploration...` |
| `{{ARTICLE_DESCRIPTION_AR}}` | Description meta en arabe | `دراسة معمقة في سيكولوجيا الإرادة...` |
| `{{ARTICLE_DESCRIPTION_FR}}` | Description meta en français | `Étude approfondie sur la psychologie de la volonté...` |
| `{{ARTICLE_DESCRIPTION_EN}}` | Description meta en anglais | `In-depth study on the psychology of will...` |
| `{{ARTICLE_IMAGE}}` | Chemin relatif vers l'image | `articles/william_james_action.jpg` |
| `{{READING_TIME_AR}}` | Temps de lecture estimé (AR) | `12 دقيقة` |
| `{{READING_TIME_FR}}` | Temps de lecture estimé (FR) | `12 min de lecture` |
| `{{READING_TIME_EN}}` | Temps de lecture estimé (EN) | `12 min read` |
| `{{SECTION_01_TITLE}}` ... `10` | Titres des 10 sections | Ex: `1. La genèse de l'impulsion motrice` |
| `{{SECTION_01_CONTENT}}` ... `10` | Contenu HTML des 10 sections | Paragraphes `<p>` rédigés |
| `{{ARTICLE_CONCLUSION}}` | Texte de la conclusion | Paragraphe de synthèse |
| `{{KEY_TAKEAWAYS}}` | Éléments `<li>` des points clés | Liste à puces |
| `{{HIGHLIGHT_QUOTE_TEXT}}` | Citation principale | `« L'action n'est pas la suite de la pensée... »` |
| `{{HIGHLIGHT_QUOTE_AUTHOR}}` | Auteur et ouvrage de la citation | `— William James (Précis de Psychologie)` |
| `{{RELATED_THINKERS}}` | Cartes des penseurs liés | Cartes HTML avec avatars et rôles |
| `{{RELATED_PATH}}` | Carte du parcours lié | Carte HTML vers le parcours |
| `{{RECOMMENDED_ARTICLES}}` | Cartes d'articles recommandés | Cartes HTML vers 2 articles réels |

> [!IMPORTANT]
> Les placeholders sont réservés au fichier modèle `templates/article-premium-v4.html`. Aucun placeholder ne doit apparaître dans les pages publiées finales (ex: dans `/files/` ou `/articles/`).

---

## 4. Gestion Multilingue & RTL / LTR

L'article s'appuie sur la clé `site_lang_v1` dans `localStorage` :
- **Arabe (`ar`)** : `lang="ar"`, `dir="rtl"`, police d'écriture privilégiant *Amiri* et *Playfair Display*.
- **Français (`fr`)** : `lang="fr"`, `dir="ltr"`, typographie *Plus Jakarta Sans* et *Playfair Display*.
- **Anglais (`en`)** : `lang="en"`, `dir="ltr"`.

Le changement de langue met instantanément à jour :
1. Le titre du document et la balise meta description.
2. La barre de navigation et le fil d'Ariane.
3. Les titres, sous-titres et texte d'introduction.
4. La table des matières interactive.
5. Les titres des 10 sections et leur contenu.
6. La conclusion, les points clés et les citations.
7. Les penseurs, le parcours lié et les articles recommandés.
8. Le bouton de basculement et le pied de page.

---

## 5. Règles Éditoriales et Déontologiques

1. **Rigueur des sources et citations** :
   - Ne jamais inventer de citation ou d'ouvrage.
   - Toujours préciser l'auteur et le titre du livre de référence (ex: *Ibn Rushd, Fasl al-Maqāl* ; *William James, Principles of Psychology*).
2. **Neutralité académique et respect** :
   - Éviter tout ton péremptoire ou religieux normatif (pas de fatwas ni de verdicts dogmatiques).
   - Formuler les nuances historiques et philosophiques : *« Les auteurs et les écoles ont proposé différentes approches à cette problématique... »*.
3. **Validité des liens** :
   - Aucun lien mort (`href="#"`, `href=""`).
   - Tout lien de penseur doit pointer vers un profil existant dans `/thinkers/`.
   - Tout lien de parcours doit pointer vers une URL physique valide (`/[pillar]/parcours/[slug]/`).
   - Aucun lien `<a>` imbriqué dans un autre `<a>`.
4. **Accessibilité et Responsive** :
   - Images avec attributs `alt` pertinents.
   - Textes lisibles sur smartphone sans débordement horizontal.
   - Table des matières fluide avec `scroll-margin-top: 100px`.

---

## 6. Checklist de Validation Avant Publication

Avant de déployer un nouvel article issu de ce template :

- [ ] Tous les placeholders `{{...}}` ont été remplacés par du contenu authentique.
- [ ] Les 10 sections sont rédigées avec soin et disposent d'un id (`#section-01` à `#section-10`).
- [ ] La table des matières redirige correctement vers chaque ancre.
- [ ] Les 3 langues (AR, FR, EN) sont renseignées sans mélange.
- [ ] Le passage AR ⇄ FR ⇄ EN fonctionne sans rechargement de page.
- [ ] Les images existent sur le serveur et sont affichées avec un ratio correct.
- [ ] Le JSON-LD `Article` et `BreadcrumbList` est présent dans le `<head>`.
- [ ] `npm run build` passe avec code de sortie 0.
