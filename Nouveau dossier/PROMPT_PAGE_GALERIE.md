# PROMPTS MAQUETTES - PAGE GALERIE (Galerie.tsx)

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
Design web hero page "Galerie Photos":

Background: Gradient hero bleu (#001F5B → #004AAD) + collage subtil photos campus variées (opacity 15%)
Mosaique douce: Soutenances, événements, campus

Contenu centré:
- Label jaune: "Nos Moments"
- Titre géant: "Galerie Photos" (mot "Galerie" en italique jaune brillant)
- Description bleu clair: "Revivez les moments forts de la vie à l'ESCAE Bénin"

Divider vague blanche en bas
Style: Hero visuel, anticipation, célébration, mosaïque subtile
Résolution: Desktop 1440px
```

---

## SECTION 2: FILTRES

```
Design web barre filtres avec 6 catégories:

Layout horizontal centré:

Bouton 1 TOUT (actif):
- Fond bleu #004AAD, texte blanc, arrondis complets (full)
- Shadow-md
- Label: "Tout (156)"

Boutons 2-6 (inactifs):
- Fond blanc, texte gris, bordure grise
- Hover: Fond bleu-50
- Labels:
  * "Soutenances (28)"
  * "Événements (42)"
  * "Campus (35)"
  * "Vie Sociale (31)"
  * "Gala & Fêtes (20)"

Gap: 12px entre boutons
Style: Pills modernes, état actif clair, compteurs entre parenthèses
```

---

## SECTION 3: BANDEAU VIE SOCIALE

```
Design web bandeau informatif spécial:

Background: Jaune-ambre clair #FEF3C7, bordure jaune-ambre #F59E0B

Layout horizontal:
- Icône palmier 🌴 (ou icône tropical)
- Texte en gras: "Vie Sociale africaine"
- Description: "Célébrations culturelles, traditions et moments conviviaux propres à notre identité"

Arrondis: 12px
Padding: 16px
Style: Alerte informative élégante, identité culturelle
```

---

## SECTION 4: GALERIE MASONRY

```
Design web galerie masonry 4 colonnes avec photos variées:

Grid masonry (2 mobile, 3 tablette, 4 desktop):
Gap: 16px entre photos

CATÉGORIE SOUTENANCES (28 photos):
Photo 1: Étudiante en robe académique, diplôme en main, sourire radieux
Photo 2: Groupe de diplômés lançant toques en l'air, joie collective
Photo 3: Remise de diplôme, poignée de main solennelle
Photo 4: Photo de groupe promotion 2024, robes noires et blanches

CATÉGORIE ÉVÉNEMENTS (42 photos):
Photo 5: Conférence AFRIA 2024, conférencier au micro, bannière AFRIA
Photo 6: English Day, étudiants en activité linguistique, drapeaux anglais
Photo 7: Séminaire en amphithéâtre, audience attentive
Photo 8: Workshop groupe, brainstorming sur tableau blanc

CATÉGORIE CAMPUS (35 photos):
Photo 9: Vue aérienne campus Abomey-Calavi, bâtiments modernes
Photo 10: Bibliothèque intérieure, étudiants étudiant
Photo 11: Couloirs campus, architecture moderne, lumière naturelle
Photo 12: Espace extérieur vert, étudiants sous arbres

CATÉGORIE VIE SOCIALE (31 photos):
Photo 13: Groupe d'amis riant ensemble, moment convivial
Photo 14: Pause cafétéria, étudiants discutant
Photo 15: Activité sportive, match de football étudiant
Photo 16: Pique-nique campus, ambiance détendue

CATÉGORIE GALA & FÊTES (20 photos):
Photo 17: Soirée de gala élégante, étudiants en tenue formelle
Photo 18: Décoration événement festif, lumières dorées
Photo 19: Danse collective événement, énergie positive
Photo 20: Photo de groupe soirée, sourires et élégance

Chaque photo:
- Arrondis 12px
- Hover: Scale 1.05 smooth
- Overlay hover: Gradient bleu bas avec caption
- Icône loupe coin haut droit
- Caption: Titre + catégorie badge

Heights variées pour effet masonry:
- Certaines h-48, d'autres h-64, quelques h-80

Background: Blanc cassé #FAFAF8
Style: Masonry asymétrique moderne, hover effects élégants, diversité visuelle
```

---

## SECTION 5: LIGHTBOX (au clic)

```
Design web lightbox modal photo fullscreen:

Background: Noir/95 (rgba(0,0,0,0.95))
Plein écran, centré

Contenu:
- Image: Max 80vh, arrondis 12px, centrée
- Caption en bas: Titre blanc + badge catégorie bleu
- Bouton X: Coin haut droit, cercle blanc/10, icône X blanche
- Navigation: Flèches gauche/droite fantômes (hover visible)

Style: Lightbox moderne, immersive, focus sur photo
```

---

## 📐 SPÉCIFICATIONS TECHNIQUES

**Résolutions:**
- Desktop: 1440px (4 colonnes)
- Tablet: 768px (3 colonnes)
- Mobile: 375px (2 colonnes)

**Couleurs:**
- Bleu royal: #004AAD
- Bleu nuit: #001F5B
- Or: #C9A227
- Blanc cassé: #FAFAF8
- Jaune-ambre: #FEF3C7 / #F59E0B

**Photos types:**
- Soutenances: Robes académiques, diplômes, joie
- Événements: Conférences, workshops, séminaires
- Campus: Architecture, espaces, infrastructure
- Vie Sociale: Moments conviviaux, amitiés, sport
- Gala: Élégance, fêtes, célébrations

**Effet masonry:**
- Heights variées (h-48, h-64, h-80)
- Distribution naturelle et équilibrée
- Pas de lignes droites horizontales
