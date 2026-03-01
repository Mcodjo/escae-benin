# PROMPTS MAQUETTES - PAGE CONTACT (Contact.tsx)

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
Design web hero page "Contactez-Nous":

Background: Gradient hero bleu (#001F5B → #004AAD) + photo équipe accueillante ESCAE (opacity 20%)
Photo: Personnel souriant, réceptionniste, ambiance professionnelle et chaleureuse

Contenu centré:
- Label jaune: "Nous Contacter"
- Titre géant: "Contactez-Nous" (mot en italique jaune brillant)
- Description bleu clair: "Notre équipe est à votre écoute pour répondre à toutes vos questions"

Divider vague blanche en bas
Style: Hero accueillant, service client, approchable et professionnel
Résolution: Desktop 1440px
```

---

## SECTION 2: LAYOUT CONTACT (3 COLONNES)

```
Design web layout contact avec sidebar + formulaire:

Grid 3 colonnes (1 mobile, 3 desktop):
Gap: 24px

COLONNE 1 (COORDONNÉES) - 1/3 width:

Header:
- Label: Séparateurs + "Coordonnées"
- Titre: "Nos Contacts" (mot en italique)

Carte 1 - CAMPUS PRINCIPAL:
- Fond blanc, arrondis 16px, padding 20px
- Layout horizontal
- Icône location dans carré 40px bleu/15, icône bleue
- Titre sm bold: "Campus Abomey-Calavi"
- Lignes texte sm gris:
  * "01 BP 1234, Abomey-Calavi"
  * "Cotonou, Bénin"

Carte 2 - CAMPUS PORTO-NOVO:
- Icône location bleue
- Titre: "Campus Porto-Novo"
- Adresse Porto-Novo

Carte 3 - TÉLÉPHONES:
- Icône phone dans carré vert/15, icône verte
- Titre: "Téléphones"
- Liens: "+229 21 00 00 00", "+229 97 00 00 00"

Carte 4 - EMAILS:
- Icône envelope dans carré or/15, icône or
- Titre: "Emails"
- Liens: "contact@escae.benin", "admissions@escae.benin"

Carte 5 - HORAIRES:
- Icône clock dans carré rouge/15, icône rouge
- Titre: "Horaires d'ouverture"
- Liste:
  * "Lun-Ven: 08:00 - 18:00"
  * "Samedi: 09:00 - 13:00"
  * "Dimanche: Fermé"

Carte 6 - RÉSEAUX SOCIAUX:
- 4 boutons carrés 40px bleus:
  * Facebook (icône FB)
  * Twitter (icône Twitter)
  * LinkedIn (icône LN)
  * Instagram (icône IG)
- Hover: Fond or

Style: Sidebar informatif, cartes empilées, icônes colorées

---

COLONNES 2-3 (FORMULAIRE) - 2/3 width:

Carte grande:
- Fond blanc, arrondis 24px, padding 32px
- Shadow-sm

Header:
- Label: Séparateurs + "Formulaire de Contact"
- Titre: "Envoyez-nous un Message" (mot "Message" en italique)

Formulaire:

Ligne 1 - 2 colonnes:
- Input Prénom: Label "Prénom *", placeholder "Jean", arrondis 12px
- Input Nom: Label "Nom *", placeholder "Dupont"

Ligne 2 - 2 colonnes:
- Input Email: Label "Email Académique *", placeholder "jean.dupont@exemple.com"
- Input Téléphone: Label "Téléphone", placeholder "+229 ..."

Ligne 3 - 1 colonne:
- Select Sujet: Label "Sujet *"
  * Options: "Admissions & Inscriptions", "Affaires Académiques", "Partenariats", "Autre demande"
  * Icône chevron bas

Ligne 4 - 1 colonne:
- Textarea Message: Label "Message *", placeholder "Comment pouvons-nous vous aider ?", rows 5

Labels: Semibold, gris foncé, astérisque rouge pour obligatoires
Inputs: Bordure grise, focus bordure bleue + ring bleu/10

CTA:
- Bouton bleu pleine largeur, h-16, arrondis 12px
- Icône avion + "Envoyer le Message"
- Hover: Fond bleu foncé

État Loading:
- Spinner + "Envoi en cours..."

État Success:
- Icône check dans cercle vert 80px
- Titre: "Message Envoyé !"
- Description: "Nous vous répondrons dans les 24h"
- Bouton: "Envoyer un autre message"

Background section: Blanc cassé #FAFAF8
Style: Form professionnel, accessible, validation visuelle claire
```

---

## SECTION 3: CARTES MAPS

```
Design web section cartes géographiques:

Header centré:
- Titre: "Nous Trouver" (mot "Trouver" en italique bleu)
- Description: "Deux campus pour vous accueillir au Bénin"

Grid 2 colonnes (1 mobile):

Carte 1 - ABOMEY-CALAVI:
- Arrondis 16px, shadow-sm
- Header: Fond bleu #004AAD, padding 12px
  * Icône pin jaune
  * Nom: "Campus Abomey-Calavi" (blanc, bold)
  * Adresse: "01 BP 1234, Cotonou" (bleu clair, sm)
- iframe Google Maps: h-280
  * Location: Abomey-Calavi, Bénin
  * Style: Standard avec marker bleu

Carte 2 - PORTO-NOVO:
- Header: Fond bleu
  * Icône pin jaune
  * Nom: "Campus Porto-Novo"
  * Adresse Porto-Novo
- iframe Maps: h-280
  * Location: Porto-Novo, Bénin

Background: Blanc
Style: Maps intégrées élégantes, headers informatifs, géolocalisation claire
```

---

## SECTION 4: FAQ QUICK LINKS

```
Design web section liens FAQ rapides:

Layout horizontal flex:

Gauche:
- Titre lg bold: "Questions Fréquentes"
- Description gris: "Trouvez des réponses rapides avant de nous contacter"

Droite - 3 liens pills:
- Pill 1: "Processus d'admission"
- Pill 2: "Frais de scolarité"
- Pill 3: "Calendrier universitaire"

Pills:
- Fond blanc, arrondis complets, padding 12px 20px
- Bordure grise
- Hover: Bordure bleue, texte bleu
- Shadow-sm

Background: Gris clair #f8fafc
Border top: Gris clair
Padding: 48px vertical
Style: Quick links accessibles, pills modernes
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
- Blanc cassé: #FAFAF8
- Vert: #00A651 (success)
- Rouge: #E31E24 (required)

**Formulaire:**
- Validation: Astérisques rouges + bordures rouges si erreur
- Focus: Ring bleu + bordure bleue
- Success: Animation check + message vert

**Maps:**
- Google Maps intégrées
- Markers personnalisés bleus
- Zoom approprié pour voir campus
