# PROMPTS MAQUETTES - PAGE ACTUALITÉS (Actualites.tsx)

## 🎨 PROMPT SYSTÈME DE BASE

```
Style: Luxe Institutionnel Tropical, design web moderne et élégant
Palette: Bleu royal #004AAD, Bleu nuit #001F5B, Or #C9A227, Blanc cassé #FAFAF8
Typographie: Cormorant Garamond (titres serif élégants), Outfit (corps sans-serif moderne)
Éléments: Séparateurs dorés, étiquettes en majuscules, cartes arrondies 16-24px, ombres douces
Qualité: UI/UX professionnel, haute fidélité, aspect premium académique
```

---

## SECTION 1: HERO

```
Design web hero page "Nos Actualités":

Background: Gradient hero bleu (#001F5B → #004AAD) + overlay journaux/médias subtil (opacity 10%)
Éléments: Journaux, articles, écrans, symboles actualité

Contenu centré:
- Label jaune: "Restez Informé"
- Titre géant: "Nos Actualités" (mot "Actualités" en italique jaune brillant)
- Description bleu clair: "Suivez l'actualité de l'ESCAE et de nos étudiants"

Divider vague blanche en bas
Style: Hero médiatique, dynamique, informationnel
Résolution: Desktop 1440px
```

---

## SECTION 2: À LA UNE (FEATURED)

```
Design web 2 grandes cartes articles featured:

Grid 2 colonnes (1 mobile):

Carte 1 - AFRIA 2024:
- Image: Conférence internationale AFRIA, salle pleine, bannière AFRIA visible, h-72
- Overlay: Gradient bleu vertical foncé en bas (#001F5B/90)
- Position contenu: Absolu en bas, padding 24px
- Badge jaune: "ÉVÉNEMENT"
- Date: Icône calendrier + "15 Février 2024"
- Titre lg blanc: "AFRIA 2024: Grande Conférence Internationale Réussie"
- Hover: Titre devient jaune

Carte 2 - ENGLISH DAY:
- Image: English Day, étudiants en activité, drapeaux anglais, ambiance festive
- Badge jaune: "ACADÉMIQUE"
- Date: "10 Février 2024"
- Titre: "English Day: Immersion Linguistique Totale"

Arrondis: 16px
Style: Cards featured immersives, overlay élégant, hover effects
```

---

## SECTION 3: FILTRES & RECHERCHE

```
Design web barre filtres avec recherche:

Layout horizontal:

Gauche - Barre recherche:
- Input blanc, arrondis 12px, padding 12px, width 300px
- Icône loupe grise à gauche
- Placeholder: "Rechercher un article..."
- Bordure grise, focus: bordure bleue

Droite - Boutons filtres:
- 5 boutons arrondis complets:
  * "Tous" (actif: bleu, shadow)
  * "Événements"
  * "Académique"
  * "Partenariats"
  * "Étudiants"
- Inactifs: Blanc, bordure grise, hover bleu-50

Gap: 12px
Style: Search + filters moderne, état actif clair
```

---

## SECTION 4: GRID ARTICLES

```
Design web grid 9 articles blog en 3 colonnes:

Grid 3x3 (1 mobile, 2 tablette, 3 desktop):

Article 1 - AFRIA Détails:
- Image: Photo conférence AFRIA, orateurs, h-44
- Hover image: Zoom 1.05
- Padding contenu: 20px
- Tag: Badge bleu-50 "ÉVÉNEMENT" + texte bleu
- Date: Icône calendrier + "15 Février 2024", xs gris
- Titre: 2 lignes max (line-clamp-2), semibold, hover bleu
- Excerpt: 2 lignes max, xs gris
- Lien: "Lire l'article" + chevron droite

Article 2 - English Day:
- Image: English Day activités
- Tag: "ACADÉMIQUE"
- Date: "10 Février 2024"

Article 3 - Partenariat:
- Image: Signature de document, poignée de main
- Tag: "PARTENARIAT"
- Date: "5 Février 2024"
- Titre: "Nouveau Partenariat avec l'Université de Montréal"

Article 4 - Soutenance:
- Image: Étudiant presentant, jury
- Tag: "ACADÉMIQUE"
- Titre: "Soutenances Brillantes de Master"

Article 5 - Club:
- Image: Club étudiant, activité groupe
- Tag: "ÉTUDIANTS"
- Titre: "Nouveau Club Entrepreneuriat Lancé"

Article 6 - Résultats:
- Image: Étudiants celebrant
- Tag: "ACADÉMIQUE"
- Titre: "Taux de Réussite Record 2024"

Article 7 - Visite:
- Image: Délégation officielle
- Tag: "ÉVÉNEMENT"
- Titre: "Visite du Ministre de l'Enseignement"

Article 8 - Bourse:
- Image: Remise de bourse, certificat
- Tag: "ÉTUDIANTS"
- Titre: "Programme de Bourses 2024 Renforcé"

Article 9 - Campus:
- Image: Nouveau bâtiment
- Tag: "INFRASTRUCTURE"
- Titre: "Extension du Campus Principal"

Chaque carte:
- Fond blanc, arrondis 16px, ombre sm
- Hover: Shadow-lg, translate Y -2px

Background: Blanc cassé #FAFAF8
Style: Blog grid moderne, cards informationnelles, layout magazine
```

---

## SECTION 5: PAGE ARTICLE (au clic)

```
Design web page article détail:

Hero article:
- Image article en background, overlay gradient bleu (#001F5B/80)
- Bouton retour: Coin haut gauche, cercle blanc/10, flèche gauche
- Badge catégorie: Jaune "ÉVÉNEMENT"
- Titre géant blanc: "AFRIA 2024: Grande Conférence Internationale"
- Date: Bleu clair

Section contenu:
- Max-width 768px, centré
- Background blanc
- Padding généreux

Image featured:
- Photo principale article, h-72, arrondis 16px, shadow-xl

Carte contenu:
- Fond blanc, arrondis 24px, padding 40px
- Excerpt italique Cormorant lg gris: Introduction article
- Contenu:
  * Paragraphes avec line-height confortable
  * Sous-titres semibold
  * Listes avec puces
  * Photos intégrées

Bouton retour bas:
- "Retour aux actualités" + flèche gauche

Background: Blanc cassé #FAFAF8
Style: Article layout éditorial, lecture confortable, typographie soignée
```

---

## 📐 SPÉCIFICATIONS TECHNIQUES

**Résolutions:**
- Desktop: 1440px
- Tablet: 768px
- Mobile: 375px

**Couleurs:**
- Bleu royal: #004AAD
- Bleu nuit: #001F5B
- Or: #C9A227
- Jaune: #FDB713
- Blanc cassé: #FAFAF8

**Photos types:**
- Conférences et événements officiels
- Activités académiques (soutenances, cours)
- Partenariats (signatures, rencontres)
- Vie étudiante (clubs, activités)
- Infrastructure (bâtiments, installations)

**Catégories badges:**
- ÉVÉNEMENT: Bleu
- ACADÉMIQUE: Vert
- PARTENARIAT: Or
- ÉTUDIANTS: Rouge
- INFRASTRUCTURE: Gris
