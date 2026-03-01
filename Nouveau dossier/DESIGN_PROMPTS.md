# ESCAE BÉNIN - PROMPTS DE DESIGN POUR MAQUETTES UI/UX

## 🎨 SYSTÈME DE DESIGN GLOBAL

### Philosophie de Design
**"Luxe Institutionnel Tropical"** - Un design qui allie l'élégance académique à la chaleur africaine

### Palette de Couleurs
- **Bleu Royal Principal**: #004AAD (Bleu institutionnel, utilisé pour les éléments premium)
- **Bleu Nuit Profond**: #001F5B (Fond sombre, headers, sections premium)
- **Bleu Clair**: #1a6fd4 (Hover states, accents)
- **Or/Jaune**: #C9A227 (Éléments de prestige, CTAs secondaires)
- **Or Clair**: #F0C040 (Accents dorés, highlights)
- **Rouge**: #E31E24 (Accents énergiques, urgence)
- **Vert**: #00A651 (Succès, validation, croissance)
- **Blanc Cassé**: #FAFAF8 (Fond principal des sections)
- **Gris Clair**: Bordures (#e5e7eb), Textes secondaires (#6b7280)

### Typographie
- **Display (Titres)**: Cormorant Garamond - Police serif élégante et académique
  - Tailles: 3xl-7xl (48px-96px)
  - Poids: Bold (700)
  - Style italique pour les accents colorés
- **Body (Corps de texte)**: Outfit - Police sans-serif moderne et lisible
  - Tailles: xs-lg (12px-18px)
  - Poids: Regular (400), Medium (500), Semibold (600), Bold (700)
- **Labels**: Outfit - Texte en majuscules, tracking large
  - Taille: 10-12px
  - Espacement des lettres: 0.15-0.18em

### Éléments de Design Récurrents

#### Séparateurs Dorés ("Gold Line")
- Largeur: 40-50px
- Hauteur: 2-3px
- Couleur: #C9A227
- Utilisation: Encadrer les labels de section

#### Étiquettes de Section ("Section Labels")
- Police: Outfit, majuscules, tracking large
- Couleur: #C9A227 (or) sur fond clair, #FDB713 (jaune-or) sur fond sombre
- Format: "TEXTE — Sous-texte"
- Espacement: Toujours précédé de séparateurs dorés

#### Boutons (Variants)
1. **btn-primary**: 
   - Fond: Dégradé bleu (#004AAD → #1a6fd4)
   - Texte: Blanc
   - Hover: Scale 1.02, shadow élevée

2. **btn-gold**: 
   - Fond: Dégradé or (#C9A227 → #F0C040)
   - Texte: #001F5B (bleu foncé)
   - Hover: Scale 1.02, shadow élevée

3. **btn-outline-white**: 
   - Bordure: Blanc 2px
   - Texte: Blanc
   - Fond transparent
   - Hover: Fond blanc, texte bleu

#### Cartes (Cards)
- Arrondis: 16-24px (rounded-2xl à rounded-3xl)
- Ombres: shadow-sm (légère) à shadow-xl (prononcée)
- Bordures: 1px solid #e5e7eb (gris très clair)
- Padding: 20-32px (p-5 à p-8)
- Hover: Translation Y -4px, shadow plus prononcée

#### Animations
- **Fade In**: Opacité 0→1, Translation Y 40px→0
- **Scale Hover**: Scale 1→1.02 ou 1.05
- **Image Zoom**: Transform scale sur conteneur overflow-hidden
- **Gold Shine**: Animation de brillance sur éléments or
- **Carousel**: Cross-fade entre slides (1.4s ease-in-out)

### Sections de Fond

#### "escae-gradient-hero" (Hero/Premium)
- Background: Dégradé radial bleu (#001F5B → #004AAD → #1a6fd4)
- Overlay: Image avec opacity 15-25%
- Overlay gradient: from-[#001F5B]/85 to-[#004AAD]/60

#### "escae-gradient-section" (Sections alternées)
- Background: Dégradé léger bleu/gris (#f8fafc)
- Bordures subtiles

#### Dividers (Vagues SVG)
- Utilisés entre sections pour transitions fluides
- Couleur: #FAFAF8 (blanc cassé)
- Forme: Courbes organiques

---

## 📄 PAGE 1: ACCUEIL (Home.tsx)

### Structure Générale
Page principale avec 9 sections superposées verticalement

---

### SECTION 1: HERO CAROUSEL (Full Screen)

**Disposition:**
- Hauteur: 100vh (min 580px, max 900px)
- Fond: Carousel de 3 images avec cross-fade (6s par slide)
- Overlay: Double gradient (horizontal: bleu gauche → transparent droit, vertical: bleu bas → transparent haut)
- Particules flottantes: 6 points dorés animés en float vertical

**Contenu (Gauche):**
- **Label fixe** (toujours visible, ne change jamais):
  - Séparateur doré + "ESCAE Bénin — Excellence & Innovation" (jaune-or)
  
- **Titre animé** (change avec les slides):
  - Taille: 3xl mobile, 5xl tablette, 7xl desktop
  - Exemple Slide 1: "Façonnez Votre" + "Avenir" (italique jaune)
  - Exemple Slide 2: "Une Cérémonie" + "Inoubliable" (italique jaune)
  - Animation: Fade in/out vertical (12px), durée 0.5s

- **Sous-titre animé** (change avec les slides):
  - Couleur: Bleu clair (#93c5fd)
  - Taille: text-lg
  - Animation: Fade in/out vertical (8px), durée 0.5s
  - Max-width: 600px

- **Boutons CTA** (changent avec les slides):
  - Bouton principal: btn-gold + icône flèche droite
  - Bouton secondaire: btn-outline-white
  - Gap: 12px
  - Animation: Fade opacité uniquement (0.4s)

- **Quick Stats** (fixes, jamais animés):
  - 4 statistiques en ligne horizontale
  - Bordure supérieure: blanc/20
  - Format: Valeur (2xl, or, Cormorant) + Label (xs, bleu clair, uppercase)
  - Exemples: "98% Employabilité", "2500+ Étudiants", "15+ Partenaires", "12 Filières"

**Navigation du Carousel:**
- Dots en bas: Rectangles arrondis, actif = large (32px), inactif = petit (10px)
- Flèches gauche/droite: Cercles blancs/10 backdrop-blur, centrés verticalement
- Auto-play: 6 secondes par slide

**Divider bas:**
- Vague SVG blanche cassée (#FAFAF8)

---

### SECTION 2: QUICK ACCESS CARDS

**Disposition:**
- Background: #FAFAF8
- 3 cartes en grid responsive (1 col mobile, 3 cols desktop)
- Hauteur cartes: 224px (h-56)
- Negative margin top: -16px/-24px (chevauchement avec hero)

**Format des Cartes:**
- Image de fond en pleine hauteur
- Overlay: Gradient vertical (bleu foncé 90% en bas → transparent haut)
- Hover: Image zoom 1.05
- Contenu (en bas, padding 20px):
  - Icône + Label (14px, jaune)
  - Description (blanc, 14px, 2 lignes max)

**Exemples:**
1. "Bourses" - Icône Award
2. "Formations" - Icône GraduationCap
3. "Activités" - Icône Users

---

### SECTION 3: FEATURES (Avantages)

**Disposition:**
- Background: #FAFAF8
- Padding vertical: 80px
- Titre centré + 6 cartes en grid 3 colonnes

**Header:**
- Label: Séparateurs + "Le Professionnalisme au Service du Développement" (or)
- Titre: "Avantages d'être" + "avec nous" (italique bleu)
- Sous-titre: texte gris, max-width 672px, centré

**Cartes Features:**
- Fond blanc, arrondis 16px, padding 24px
- Layout vertical
- **En haut droite**: Numéro géant (5rem, police Cormorant, couleur thématique avec stroke)
- **En haut gauche**: Icône dans cercle coloré + carré 48px
- **Titre**: Outfit semibold, bleu foncé
- **Description**: texte gris, 14px, line-height relaxed
- **Bordure hover**: Ligne colorée 2px en bas (gradient horizontal)

**Couleurs thématiques:**
- Feature 1 (Excellence): Bleu #004AAD
- Feature 2 (Recherche): Vert #00A651
- Feature 3 (Vie Estudiantine): Rouge #E31E24
- Feature 4 (Réseau): Bleu #004AAD
- Feature 5 (Carrière): Or #C9A227
- Feature 6 (Soutien): Vert #00A651

---

### SECTION 4: STATS (Excellence en Chiffres)

**Disposition:**
- Background: Dégradé hero bleu avec pattern de points en overlay (opacity 5%)
- Padding: 80px vertical
- 6 cartes statistiques en grid

**Header:**
- Label: "Avec + de 14 ans d'expérience" (jaune)
- Titre: "Notre" + "Excellence" (italique jaune) + "en Chiffres"
- Tous en blanc
- Description: Bleu clair, centré

**Cartes Stats (Glass-card):**
- Fond: Verre dépoli blanc/10 backdrop-blur
- Arrondis: 16px
- Padding: 20px
- Centré verticalement

**Contenu:**
- Icône: Cercle or/20, icône jaune, 40px
- Valeur: Compteur animé, 3xl, jaune, Cormorant, **animé au scroll**
- Label: Blanc, xs, semibold
- Description: Bleu clair, xs (masquée sur mobile)

**Exemples:**
- "98% Taux d'Employabilité"
- "2500+ Étudiants Actifs"
- "15+ Partenaires Mondiaux"

**Divider bas:** Vague SVG blanche

---

### SECTION 5: ABOUT PREVIEW (Institution d'Excellence)

**Disposition:**
- Background: #FAFAF8
- Grid 2 colonnes (1 col mobile, 2 cols desktop)
- Gap: 48px

**Colonne Gauche (Images):**
- **Desktop**: Grid 2 colonnes
  - Image 1: Grande (h-64), arrondis 16px, shadow-xl
  - Images 2-3: Plus petites (h-44), empilées avec margin-top
- **Mobile**: Une seule image principale
- **Badge absolu** (coin bas gauche):
  - Blanc, shadow-xl, arrondis 16px, padding 16px
  - Icône Award (48px, cercle bleu)
  - Texte: "Agréé par l'État" (bold) + "République du Bénin" (xs gris)

**Colonne Droite (Texte):**
- Label: "À Propos de l'ESCAE"
- Titre: "Une Institution d'" + "Excellence" (italique)
- 2 paragraphes texte gris
- 4 valeurs en grid 2x2:
  - Icône dans carré coloré + label
  - Exemples: Innovation (Or), Excellence (Bleu), Diversité (Vert), Intégrité (Rouge)
- CTA: btn-primary + flèche

---

### SECTION 6: NEWS (Actualités)

**Disposition:**
- Background: Blanc
- Padding: 80px vertical
- Header + 3 cartes en grid

**Header:**
- Label gauche: "Dernières Publications"
- Titre: "Nos" + "Actualités" (italique)
- Lien droit: "Voir tout" + flèche (hover: gap augmente)

**Cartes Actualité:**
- Image: h-48, hover zoom
- Padding contenu: 20px
- Tag catégorie: Petit badge bleu-50 + texte bleu
- Date: xs, gris clair, icône calendrier
- Titre: 2 lignes max (line-clamp-2)
- Excerpt: 2 lignes max, gris
- Lien: "Lire plus" + flèche (hover: gap augmente)

---

### SECTION 7: TESTIMONIALS (Alumni)

**Disposition:**
- Background: Dégradé section (#f8fafc)
- Padding: 80px vertical
- Carousel manuel avec dots

**Header:**
- Label: "Témoignages"
- Titre: "Les Voix Inspirantes des" + "Alumni" (italique)
- Centré

**Carte Témoignage:**
- Fond blanc, arrondis 24-32px, padding 40px
- Shadow-xl
- Layout horizontal (mobile: vertical):
  - Photo: 80x80, arrondis 16px
  - Icône quote en haut (or, opacity 60%)
  - Citation: Texte lg, gris, italique, Cormorant
  - Nom + Rôle
  - 5 étoiles (jaunes)

**Navigation:**
- Dots en bas (même style que hero)
- Auto-play: 5 secondes

---

### SECTION 8: PARTNERS (Partenaires)

**Disposition:**
- Background: #FAFAF8
- Padding: 64px vertical
- 6 logos en grid (2 cols mobile, 3 tablette, 6 desktop)

**Header:**
- Label: "Coopérations & Accréditations"
- Titre: "Nos" + "Partenaires" (italique)
- Description: xs, gris, max-width 600px

**Cartes Logo:**
- Fond blanc, arrondis 16px, padding 20px
- Hauteur: 144px
- Logo centré (max-height 56px)
- Nom partenaire: xs, gris, centré, 2 lignes max
- Hover: Shadow-xl, translate Y -6px, logo scale 1.05

---

### SECTION 9: CTA FINAL (Rejoindre l'Excellence)

**Disposition:**
- Background: Bleu foncé #001F5B
- Image overlay (opacity 10%)
- Padding: 80px vertical
- Centré

**Contenu:**
- Label: "Prêt à commencer ?" (jaune)
- Titre: "Rejoignez l'" + "Excellence" (italique jaune) (5xl-6xl)
- Description: Bleu clair, lg, max-width 672px
- 2 boutons:
  - "S'inscrire Maintenant" (btn-gold)
  - "Voir les Formations" (btn-outline-white)

---

## 📄 PAGE 2: À PROPOS (About.tsx)

### Structure Générale
Page institutionnelle avec 7 sections

---

### SECTION 1: HERO

**Disposition:**
- Background: Dégradé hero + image overlay (opacity 20%)
- Hauteur: py-24 (mobile: py-16)
- Centré

**Contenu:**
- Label: "Notre Institution" (jaune)
- Titre: "À Propos de" + "l'ESCAE" (italique jaune)
- Description: Bleu clair, lg
- Divider vague en bas

---

### SECTION 2: HISTOIRE (Décennie d'Excellence)

**Disposition:**
- Background: #FAFAF8
- Grid 2 colonnes
- Gap: 48px

**Colonne Gauche:**
- Image principale: h-96, arrondis 24px, shadow-2xl
- Badge année: Absolu, coin bas droit
  - Fond blanc, shadow-xl, arrondis 16px
  - "2012" (3xl, bleu, Cormorant)
  - "Année de Fondation" (sm, gris)

**Colonne Droite:**
- Label: "Notre Histoire"
- Titre: "Une Décennie d'" + "Excellence" (italique)
- 3 paragraphes texte gris
- 4 checkmarks en grid 2x2:
  - Icône check verte + texte
  - Exemples: "Agréé par l'État Béninois", "Système LMD reconnu"

---

### SECTION 3: MISSION & VISION

**Disposition:**
- Background: Blanc
- Grid 2 colonnes (1 col mobile)
- Gap: 32px

**Cartes (identiques en style, contenu différent):**
- Fond: Bleu (#004AAD pour Mission, #001F5B pour Vision)
- Arrondis: 24px
- Padding: 32px
- Cercles décoratifs en background (opacity 5%)

**Contenu:**
- Icône: Cercle 56px, blanc/20, icône jaune
  - Mission: Icône cible (Target)
  - Vision: Icône œil (Eye)
- Titre: Display, 3xl, blanc
- Texte: Bleu clair, leading-relaxed

---

### SECTION 4: TIMELINE (Jalons Historiques)

**Disposition:**
- Background: #FAFAF8
- Max-width: 768px, centré
- Ligne verticale: Gradient bleu → or → bleu (2px)

**Header:**
- Label: "Notre Parcours"
- Titre: "Jalons" + "Historiques" (italique)
- Centré

**Items Timeline:**
- Point: Cercle 36px bleu, bordure blanche 4px, point intérieur jaune 8px
- Carte: Fond blanc, arrondis 16px, padding 20px
  - Badge année: xs, bold, blanc sur bleu, arrondis complets
  - Titre: semibold, bleu foncé
  - Description: xs, gris

**Exemples d'événements:**
- 2012: Création
- 2014: Accréditation
- 2016: Campus Porto-Novo
- 2024: 2500+ étudiants

---

### SECTION 5: VALEURS

**Disposition:**
- Background: Blanc
- Grid 3 colonnes (1 mobile, 2 tablette, 3 desktop)
- Gap: 24px

**Header:**
- Label: "Ce qui nous Guide"
- Titre: "Nos" + "Valeurs" (italique)
- Centré

**Cartes Valeur:**
- Fond: #FAFAF8
- Arrondis: 16px
- Padding: 24px
- Icône: Carré 48px, couleur thématique/15, icône colorée
- Titre: lg, semibold, bleu foncé
- Description: sm, gris

**Valeurs (6):**
1. Excellence (Award, Bleu)
2. Innovation (Lightbulb, Or)
3. Intégrité (Heart, Rouge)
4. Diversité (Globe, Vert)
5. Communauté (Users, Bleu)
6. Savoir (BookOpen, Or)

---

### SECTION 6: ALUMNI

**Disposition:**
- Background: Dégradé section
- 3 cartes alumni + 2 images en bas

**Header:**
- Label: "Nos Ambassadeurs"
- Titre: "Nos" + "Alumni" (italique)
- Centré

**Cartes Alumni:**
- Fond blanc, arrondis 16px
- Photo 64x64, arrondis 12px
- Nom + Rôle + Promotion
- Quote avec icône citation (or)
- 5 étoiles

**Images en bas:**
- 2 images côte à côte
- Arrondis 16px, h-64

---

### SECTION 7: CTA

**Disposition:**
- Background: Bleu foncé #001F5B
- Centré, py-16

**Contenu:**
- Titre: "Rejoignez notre" + "Communauté" (italique jaune)
- Description: Bleu clair
- CTA: btn-gold "Nous Rejoindre"

---

## 📄 PAGE 3: FORMATIONS (Formations.tsx)

### Structure Générale
Page catalogue avec 7 sections

---

### SECTION 1: HERO

**Disposition:**
- Background: Dégradé hero + image bibliothèque (opacity 20%)
- Centré

**Contenu:**
- Label: "Système LMD" (jaune)
- Titre: "Nos" + "Formations" (italique jaune)
- Description: Programmes académiques rigoureux
- Divider vague en bas

---

### SECTION 2: OVERVIEW CARDS

**Disposition:**
- Background: #FAFAF8
- 4 cartes en ligne (2 mobile, 4 desktop)
- Gap: 16px

**Format Carte:**
- Fond blanc, arrondis 16px, centré
- Icône: Carré 48px, couleur/15, icône colorée
- Label: bold, sm
- Count: xs, gris

**Cartes:**
1. Licence (GraduationCap, Bleu) - "3 filières"
2. Master (BookOpen, Or) - "3 filières"
3. Doctorat (Award, Bleu foncé) - "1 filière"
4. Formation Continue (Users, Vert) - "4 programmes"

---

### SECTION 3: LICENCE

**Disposition:**
- Background: #FAFAF8
- 3 cartes en grid

**Header:**
- Label: "Premier Cycle"
- Titre: "Licence" (italique bleu)
- Description

**Cartes Formation:**
- Fond blanc, arrondis 16px
- Badge niveau: xs, bold, blanc sur couleur, arrondis complets
- Titre: lg, semibold
- Durée: Icône horloge + texte (coin haut droit)
- Description: sm, gris
- Bouton "Voir les modules" + icône chevron (expandable)
- **État expanded:**
  - Modules: Liste avec checks verts
  - Débouchés: Tags gris arrondis
- CTA: btn-primary pleine largeur

**Filières:**
1. Gestion Commerciale (Bleu)
2. Comptabilité & Finance (Vert)
3. Management des Organisations (Rouge)

---

### SECTION 4: MASTER

**Disposition:**
- Background: Blanc
- 3 cartes (identique à Licence)
- **Carte 1 featured**: Bordure or + badge "⭐ Programme Phare"

**Header:**
- Label: "Deuxième Cycle"
- Titre: "Master" (italique)

**Filières:**
1. Management des Entreprises (Bleu) - Featured
2. Finance & Banque (Or)
3. Marketing Digital (Vert)

---

### SECTION 5: DOCTORAT

**Disposition:**
- Background: #FAFAF8
- Grid 2 colonnes

**Colonne 1:**
- Carte formation Doctorat (même style)

**Colonne 2:**
- Carte spéciale fond bleu foncé
- Icône Award dans carré jaune/20
- Titre Display blanc
- Description bleu clair
- CTA: btn-gold

---

### SECTION 6: FORMATION CONTINUE

**Disposition:**
- Background: Blanc
- 4 cartes en grid (2 mobile, 4 desktop)

**Header:**
- Label: "Professionnels en Activité"
- Titre: "Formations" + "Continues" (italique)

**Cartes:**
- Fond #FAFAF8, arrondis 16px
- Emoji géant en haut (3xl)
- Titre: semibold
- Durée: Icône + texte
- Description: sm
- Lien: "S'inscrire" + flèche

---

### SECTION 7: BOURSES

**Disposition:**
- Background: Dégradé hero
- Grid 2 colonnes
- Image à droite (mobile: en bas)

**Contenu Gauche:**
- Label: "Aide Financière" (jaune)
- Titre: "Programme de" + "Bourses" (italique jaune)
- Description
- Liste 4 items avec checks jaunes
- CTA: btn-gold

**Image Droite:**
- Arrondis 24px, shadow-2xl, h-80

**Divider bas:** Vague

---

### SECTION 8: ADMISSION (Processus)

**Disposition:**
- Background: #FAFAF8
- 4 étapes en grid

**Header:**
- Label: "Processus d'Admission"
- Titre: "Comment" + "Rejoindre" (italique) + "l'ESCAE ?"
- Centré

**Cartes Étape:**
- Fond blanc, arrondis 16px, centré
- **Numéro géant** en haut droit (5rem, gris clair, Cormorant)
- Icône: Carré 56px, bleu, icône blanche, centrée
- Titre: semibold
- Description: sm, gris

**CTA Final:** btn-primary centré

---

## 📄 PAGE 4: CAMPUS (Campus.tsx)

### Structure Générale
Page descriptive avec 4 sections

---

### SECTION 1: HERO

**Contenu:**
- Label: "Nos Espaces" (jaune)
- Titre: "Nos" + "Campus" (italique jaune)
- Description: Deux campus stratégiquement situés

---

### SECTION 2: CAMPUS CARDS

**Disposition:**
- Background: #FAFAF8
- 2 grandes sections espacées (spacing-y: 64px)

**Format par Campus:**
- Grid 2 colonnes (alternance gauche/droite)
- **Images**:
  - Desktop: Grid 2 colonnes, décalées verticalement
  - Mobile: Une image principale
- **Texte**:
  - Badge "Campus Principal" (si applicable, bleu)
  - Label: Ville (or)
  - Nom campus: Display 3xl-4xl
  - Description
  - Infos contact:
    - Location (icône pin, or)
    - Phone (icône phone, or)
    - Horaires (icône clock, or)
  - CTA: btn-primary "Voir sur la Carte"

**Campus:**
1. Abomey-Calavi (Principal)
2. Porto-Novo

---

### SECTION 3: INFRASTRUCTURES

**Disposition:**
- Background: Blanc
- Grid 3 colonnes (1 mobile, 2 tablette, 3 desktop)

**Header:**
- Label: "Équipements"
- Titre: "Nos" + "Infrastructures" (italique)
- Centré

**Cartes:**
- Fond #FAFAF8, arrondis 16px
- Icône: Carré 48px, couleur/15
- Titre: semibold
- Description: sm, gris

**Infrastructures (6):**
1. Bibliothèque (BookOpen, Bleu)
2. Wi-Fi (Wifi, Vert)
3. Salles de Conférence (Users, Or)
4. Espaces de Détente (Coffee, Rouge)
5. Laboratoires (Building, Bleu)
6. Installations Sportives (Dumbbell, Vert)

---

### SECTION 4: VIE ESTUDIANTINE

**Disposition:**
- Background: #FAFAF8
- 4 images en grid (2 cols mobile, 4 desktop)

**Header:**
- Label: "Au-delà des Cours"
- Titre: "Vie" + "Estudiantine" (italique)
- Centré

**Images:**
- Arrondis 16px, h-48, hover zoom

**CTA:** btn-primary "Voir la Galerie Complète"

---

## 📄 PAGE 5: GALERIE (Galerie.tsx)

### Structure Générale
Page photos avec filtres et lightbox

---

### SECTION 1: HERO

**Contenu:**
- Label: "Nos Moments" (jaune)
- Titre: "Galerie" (italique jaune) + "Photos"
- Description: Revivez les moments forts

---

### SECTION 2: GALERIE

**Disposition:**
- Background: #FAFAF8
- Filtres + Masonry grid

**Filtres:**
- 6 boutons arrondis complets
- Actif: Bleu, shadow
- Inactif: Blanc, bordure grise, hover bleu-50
- Compteur entre parenthèses
- Catégories: Tout, Soutenances, Événements, Campus, Vie Sociale, Gala & Fêtes

**Note Spéciale "Vie Sociale":**
- Bandeau jaune-ambre en haut avec bordure
- Icône palmier + texte explicatif

**Grid Masonry:**
- Columns: 2 mobile, 3 tablette, 4 desktop
- Gap: 12-16px
- **Cartes photo**:
  - Arrondis 12px, hover scale 1.05
  - Overlay hover: Gradient bleu en bas
  - Info hover: Caption + catégorie
  - Icône loupe (coin haut droit)

**Lightbox:**
- Fond noir/95, plein écran
- Image max 80vh, arrondis 12px
- Caption + catégorie en bas
- Bouton X (coin haut droit, cercle blanc/10)

---

## 📄 PAGE 6: ACTUALITÉS (Actualites.tsx)

### Structure Générale
Page blog avec featured + grid

---

### SECTION 1: HERO

**Contenu:**
- Label: "Restez Informé" (jaune)
- Titre: "Nos" + "Actualités" (italique jaune)
- Description

---

### SECTION 2: ACTUALITÉS

**Disposition:**
- Background: #FAFAF8

### À LA UNE (Featured):
- 2 grandes cartes horizontales
- Image: h-72, overlay gradient bleu
- Contenu absolu en bas:
  - Badge catégorie (jaune) + date
  - Titre: lg, blanc, hover jaune

### FILTRES & RECHERCHE:
- Barre recherche (icône loupe) + boutons catégories
- Style identique à Galerie

### GRID ARTICLES:
- 3 colonnes (1 mobile, 2 tablette, 3 desktop)
- **Cartes**:
  - Image: h-44, hover zoom
  - Padding 20px
  - Tag catégorie (badge bleu-50) + date
  - Titre: 2 lignes max, hover bleu
  - Excerpt: 2 lignes max, xs, gris
  - Lien: "Lire l'article" + chevron

### PAGE ARTICLE (au clic):
- Hero avec image article en overlay
- Bouton retour en haut
- Badge catégorie + titre + date
- Section contenu:
  - Max-width 768px, centré
  - Image featured, h-72, shadow-xl
  - Carte blanche: excerpt (lg) + contenu
  - Bouton retour en bas

---

## 📄 PAGE 7: CONTACT (Contact.tsx)

### Structure Générale
Page formulaire avec infos contact et cartes

---

### SECTION 1: HERO

**Contenu:**
- Label: "Nous Contacter" (jaune)
- Titre: "Contactez" (italique jaune) + "-Nous"
- Description

---

### SECTION 2: CONTACT CONTENT

**Disposition:**
- Background: #FAFAF8
- Grid 3 colonnes (1 mobile, 3 desktop)

**COLONNE 1 (Coordonnées):**

**Header:**
- Label: "Coordonnées"
- Titre: "Nos" + "Contacts" (italique)

**Cartes Info (5):**
- Fond blanc, arrondis 16px, padding 20px
- Icône: Carré 40px, couleur/15, icône colorée
- Layout horizontal
- Titre: sm, bold
- Lignes de texte: sm, gris (liens si applicable)

**Infos:**
1. Campus Principal (Location, Bleu)
2. Campus Porto-Novo (Location, Bleu)
3. Téléphones (Phone, Vert)
4. Emails (Envelope, Or)
5. Horaires (Clock, Rouge)

**Carte Réseaux Sociaux:**
- 4 boutons carrés bleus
- Icônes: Facebook, Twitter, LinkedIn, Instagram
- Hover: Or

**COLONNES 2-3 (Formulaire):**

**Carte:**
- Fond blanc, arrondis 24px, padding 32px
- Shadow-sm

**Header:**
- Label: "Formulaire de Contact"
- Titre: "Envoyez-nous un" + "Message" (italique)

**Formulaire:**
- 2 colonnes pour nom/email
- 2 colonnes pour téléphone/formation
- Sujet: 1 ligne
- Message: textarea 5 lignes
- Champs:
  - Arrondis 12px, bordure grise
  - Focus: Bordure bleue, ring bleu/10
- Labels: sm, medium, gris foncé
- Astérisque rouge pour obligatoires

**CTA:**
- btn-primary pleine largeur, h-16
- Icône avion + "Envoyer le Message"
- Loading state: Spinner + "Envoi en cours..."

**État Success:**
- Icône check (cercle vert 80px)
- Titre: "Message Envoyé !"
- Description
- Bouton: "Envoyer un autre message"

---

### SECTION 3: CARTES (Maps)

**Disposition:**
- Background: Blanc
- 2 cartes côte à côte

**Header:**
- Titre: "Nous" + "Trouver" (italique)
- Description: "Deux campus pour vous accueillir"
- Centré

**Cartes Map:**
- Arrondis 16px, shadow-sm
- Header: Fond bleu, padding 12px
  - Icône pin jaune + nom campus + adresse
- iframe Google Maps: h-280

---

## 📱 COMPOSANTS COMMUNS

### HEADER (Navigation)

**TOP BAR (Desktop uniquement):**
- Fond: Bleu foncé #001F5B
- Hauteur: py-2
- 2 colonnes:
  - Gauche: Téléphone + Email (icônes + liens, hover jaune)
  - Droite: Adresse + "Agréé par l'État Béninois" (séparés par • jaune)

**MAIN NAV (Sticky):**
- Fond: Blanc permanent
- Scroll: Shadow-lg + bordure grise
- Hauteur: h-16 (mobile), h-20 (desktop)

**Logo (Gauche):**
- Image: h-14 dans cercle bleu-50
- Texte:
  - "ESCAE Bénin" (lg-xl, Cormorant, bleu foncé)
  - "E Pluribus Unum" (10px, Outfit bold, uppercase, wide tracking, or)

**Menu Desktop (Centre):**
- Liens: Outfit medium, 14px
- Actif: Bleu, fond bleu-50, rounded-lg
- Hover: Bleu, fond bleu-50
- Dropdown "Formations":
  - Icône chevron (rotation 180° hover)
  - Menu: Fond blanc, shadow-2xl, arrondis 12px
  - Items: Icône GraduationCap or + label

**CTA Desktop (Droite):**
- btn-primary "Nous Rejoindre"

**Menu Mobile:**
- Bouton hamburger: Fond bleu-50, icône bleue
- Overlay full-screen: Fond bleu foncé #001F5B
- Header mobile:
  - Logo + nom + devise (blanc/jaune)
  - Bouton X
- Liens:
  - Arrondis 12px
  - Actif: Fond blanc/15, texte jaune
  - Hover: Fond blanc/10
  - Dropdown: Chevron, sous-menu avec points jaunes
- CTA: btn-gold pleine largeur
- Footer: Téléphone

---

### FOOTER

**Disposition:**
- Fond: Bleu foncé #001F5B
- 4 colonnes (1 mobile, 2 tablette, 4 desktop)

**COLONNE 1 (Brand):**
- Logo + nom + devise
- Description: Bleu clair, sm
- 4 icônes réseaux sociaux:
  - Carrés 36px, blancs/10, arrondis 8px
  - Hover: Or

**COLONNE 2 (Formations):**
- Titre: "Nos Formations" (icône GraduationCap or)
- Liste liens:
  - Bleu clair
  - Hover: Or, flèche apparaît

**COLONNE 3 (Liens Rapides):**
- Titre: "Liens Rapides"
- Liste liens (même style)

**COLONNE 4 (Contact):**
- Titre: "Nous Contacter"
- 3 groupes d'infos:
  - Icônes or + texte bleu clair
  - Location, Phone, Email
- Newsletter:
  - Input + bouton "OK" (btn-gold)
  - Fond blanc/10

**BOTTOM BAR:**
- Bordure blanche/10
- Copyright + liens légaux
- Séparés par •

---

## 🎯 PRINCIPES D'ANIMATION

### Au Scroll (Fade In)
- Initial: opacity 0, translateY 40px
- Animate: opacity 1, translateY 0
- Duration: 0.7s
- Easing: [0.22, 1, 0.36, 1]
- Déclencheur: 80px avant visibilité
- Delay: 0-0.4s (échelonné pour éléments multiples)

### Au Hover (Cartes)
- Transform: translateY(-4px à -6px)
- Shadow: passage de sm à xl
- Transition: 0.3s

### Images (Zoom)
- Conteneur: overflow-hidden
- Image: transform scale 1 → 1.05
- Duration: 0.5s
- Déclencheur: Hover parent

### Boutons (CTAs)
- Transform: scale 1.02
- Shadow: Augmentation
- Transition: 0.2-0.3s

### Carousel
- Cross-fade: opacity 0 → 1
- Duration: 1.4s
- Easing: ease-in-out

---

## 📐 RESPONSIVE BREAKPOINTS

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md-lg)
- **Desktop**: > 1024px (xl)

### Adaptations Principales

**Titres:**
- Mobile: text-3xl (30px)
- Tablet: text-4xl-5xl (36-48px)
- Desktop: text-5xl-7xl (48-96px)

**Grid:**
- Mobile: 1 colonne
- Tablet: 2 colonnes
- Desktop: 3-4 colonnes (selon section)

**Padding:**
- Mobile: py-12, px-4
- Desktop: py-20, container (max-width 1280px)

**Hero:**
- Mobile: min-height 580px
- Desktop: 100vh, max 900px

---

## ✅ CHECKLIST QUALITÉ DESIGN

### Cohérence Visuelle
- [ ] Palette de couleurs respectée partout
- [ ] Typographie Cormorant (titres) + Outfit (corps)
- [ ] Arrondis consistants (16-24px)
- [ ] Espacements harmonieux (multiples de 4px)

### Hiérarchie
- [ ] Labels toujours avec séparateurs dorés
- [ ] Titres avec mots-clés en italique coloré
- [ ] Contrastes suffisants (WCAG AA minimum)

### Interactions
- [ ] Tous les boutons ont hover states
- [ ] Cartes ont hover: shadow + translate
- [ ] Images ont hover: zoom
- [ ] Transitions fluides (0.2-0.7s)

### Responsive
- [ ] Layouts adaptés mobile/desktop
- [ ] Images optimisées (WebP, lazy loading)
- [ ] Textes lisibles sur toutes tailles
- [ ] Menus adaptés (hamburger mobile)

### Accessibilité
- [ ] Alt text sur toutes les images
- [ ] Labels aria pour icons-only
- [ ] Focus states visibles
- [ ] Contraste texte minimum 4.5:1

---

## 🖼️ ASSETS & RESSOURCES

### Images Principales
- Hero slides: 3 images (campus, cérémonie, étudiants)
- Campus: Photos bâtiments Abomey-Calavi et Porto-Novo
- Alumni: Photos portraits diplômés
- Événements: Photos actualités (AFRIA, English Day, Club)
- Galerie: 50+ photos catégorisées

### Icônes (Font Awesome)
- Solid: graduation-cap, book-open, users, award, location-dot, phone, envelope, clock, arrow-right, check-circle, etc.
- Brands: facebook-f, twitter, linkedin-in, instagram

### Logo
- Format: PNG transparent
- Couleurs: Bleu + Or
- Utilisation: Header, footer, mobile menu

---

## 🎨 EXPORT SPECIFICATIONS

### Format Maquettes
- **Figma/Sketch/Adobe XD** recommandé
- Artboards: 375px (mobile), 768px (tablet), 1440px (desktop)
- Composants réutilisables (boutons, cartes, inputs)
- Variables de couleur définies
- Styles de texte définis

### Livrables
- Maquettes haute-fidélité (toutes pages, toutes tailles)
- Guide de style (couleurs, typos, espacements)
- Bibliothèque de composants
- Prototypes interactifs (navigation, hover states)
- Spécifications d'animation

---

Ce document contient toutes les spécifications nécessaires pour reproduire fidèlement le design du site ESCAE Bénin. Chaque section est décrite avec précision pour permettre la création de maquettes professionnelles.
