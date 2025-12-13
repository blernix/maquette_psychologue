# TODO - Checklist de personnalisation

Ce fichier liste tous les éléments à modifier avant la mise en production du site.

## 🔴 OBLIGATOIRE (À faire AVANT le lancement)

### 1. Informations professionnelles

#### Fichier `lib/seo.ts`
- [ ] Remplacer **"Dr. Sophie Martin"** par votre nom complet
- [ ] Modifier le **titre du site** (ligne `title`)
- [ ] Adapter la **description** du site
- [ ] Remplir le **numéro ADELI** (format : 12 chiffres)
- [ ] Remplir le **numéro SIRET** (format : 14 chiffres)
- [ ] Remplacer l'**email** de contact
- [ ] Remplacer le **numéro de téléphone**
- [ ] Modifier l'**adresse** du cabinet (rue, code postal, ville)
- [ ] Ajuster les **coordonnées GPS** (latitude, longitude) pour la carte

#### Fichier `.env.local`
- [ ] Configurer **SMTP** pour l'envoi d'emails (voir README.md)
  - [ ] SMTP_HOST
  - [ ] SMTP_PORT
  - [ ] SMTP_USER
  - [ ] SMTP_PASSWORD
  - [ ] SMTP_FROM
  - [ ] CONTACT_EMAIL
- [ ] (Optionnel) Ajouter **Google Maps API Key** : NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
- [ ] Définir **NEXT_PUBLIC_SITE_URL** (URL de production)

### 2. Contenu des pages

#### Page "Qui suis-je ?" (`app/qui-suis-je/page.tsx`)
- [ ] Remplacer le **parcours professionnel** (lignes 50-60)
- [ ] Modifier les **formations** et diplômes (lignes 80-130)
- [ ] Adapter les **approches thérapeutiques** (lignes 150-200)
- [ ] Personnaliser la **philosophie de travail** (lignes 220-250)

#### Page "Spécialités" (`app/specialites/page.tsx`)
- [ ] Vérifier et adapter les **8 spécialités** listées
- [ ] Modifier les **descriptions** si nécessaire
- [ ] Ajuster les **approches thérapeutiques** pour chaque spécialité

#### Page "Informations pratiques" (`app/informations-pratiques/page.tsx`)
- [ ] Vérifier et adapter les **horaires d'ouverture**
- [ ] Modifier les **tarifs** si différents :
  - [ ] Consultation adulte (actuellement 70€)
  - [ ] Enfant/ado (actuellement 65€)
  - [ ] Couple (actuellement 90€)
- [ ] Adapter les **informations d'accès** (métro, bus, parking)
- [ ] Vérifier les **informations de remboursement** (Mon Soutien Psy)

#### Page d'accueil (`app/page.tsx`)
- [ ] Adapter les **témoignages** (lignes 250-280)
- [ ] Personnaliser le **texte de présentation** (lignes 50-80)

### 3. Mentions légales

#### Page "Mentions légales" (`app/mentions-legales/page.tsx`)
- [ ] Remplir les **informations de l'hébergeur** (lignes 80-90)
  - [ ] Nom de l'hébergeur
  - [ ] Adresse de l'hébergeur
  - [ ] URL du site de l'hébergeur

### 4. Images

#### Dossier `/public/images/`
- [ ] Remplacer **placeholder-profile.jpg** par votre photo professionnelle
  - Format : JPG ou WebP
  - Dimensions recommandées : 800x1000px minimum
  - Poids : < 500 Ko
- [ ] Remplacer **placeholder-cabinet.jpg** par une photo de votre cabinet
  - Format : JPG ou WebP
  - Dimensions recommandées : 1200x800px minimum
  - Poids : < 700 Ko
- [ ] Créer **og-image.jpg** pour les réseaux sociaux
  - Dimensions : 1200x630px (OBLIGATOIRE)
  - Contenu : Nom + titre + photo
  - Poids : < 500 Ko

## 🟠 IMPORTANT (Recommandé)

### 5. Test du formulaire de contact
- [ ] Envoyer un **message de test** depuis le formulaire
- [ ] Vérifier la **réception de l'email**
- [ ] Tester la **validation des champs** (erreurs)
- [ ] Vérifier l'**accessibilité** (navigation clavier)

### 6. SEO et référencement
- [ ] Créer un compte **Google Search Console**
  - [ ] Ajouter le code de vérification dans `app/layout.tsx` (ligne 80)
- [ ] (Optionnel) Créer un compte **Google Analytics**
- [ ] Vérifier les **métadonnées** de chaque page
- [ ] Tester avec **Google Rich Results Test** : https://search.google.com/test/rich-results

### 7. Accessibilité
- [ ] Tester la **navigation au clavier** (Tab, Enter, Espace)
- [ ] Vérifier les **contrastes de couleurs** : https://webaim.org/resources/contrastchecker/
- [ ] Tester avec un **lecteur d'écran** (NVDA, VoiceOver)
- [ ] Valider avec **WAVE** : https://wave.webaim.org/

### 8. Performance
- [ ] Tester avec **Lighthouse** (score > 90 sur tous les critères)
- [ ] Optimiser les **images** (compression, WebP)
- [ ] Vérifier le **temps de chargement** (< 3 secondes)

## 🟢 OPTIONNEL (Améliorations possibles)

### 9. Fonctionnalités supplémentaires
- [ ] Intégration **Doctolib** pour prise de RDV en ligne
- [ ] Ajout d'une **section blog** pour articles
- [ ] Création de **landing pages** spécialisées (anxiété, dépression, etc.)
- [ ] Mise en place de **newsletters**
- [ ] Ajout de **témoignages vidéo**
- [ ] Création d'un **podcast**

### 10. Marketing et communication
- [ ] Créer des **cartes de visite** avec l'URL du site
- [ ] Partager le site sur **réseaux professionnels** (LinkedIn)
- [ ] Référencer le site sur **annuaires** (Pages Jaunes, MonPsy, etc.)
- [ ] Créer une **page Google My Business**

### 11. Monitoring
- [ ] Mettre en place un **monitoring** (Uptime Robot, Pingdom)
- [ ] Configurer des **alertes** en cas de problème
- [ ] Analyser les **statistiques** de fréquentation

## 📝 Notes importantes

### Données personnelles (RGPD)
- ⚠️ Le site est conforme RGPD **seulement si** vous respectez :
  - Conservation des données limitée (10 ans max pour dossiers patients)
  - Consentement explicite pour le formulaire de contact
  - Droit d'accès, rectification, suppression
  - Sécurisation des données (HTTPS, accès restreint)

### Numéro ADELI
- Le numéro ADELI est **obligatoire** pour exercer en tant que psychologue
- Format : 12 chiffres (ex : 699012345678)
- Vous pouvez le demander à l'ARS de votre région si vous ne l'avez pas

### Hébergement des données de santé
- Si vous stockez des dossiers patients en ligne : **hébergeur HDS obligatoire**
- Sinon : hébergement classique OK (Vercel, Netlify, OVH)
- Ce site ne stocke **aucune donnée de santé** en ligne (uniquement en local)

## ✅ Validation finale

Avant de mettre en ligne, vérifiez que :

- [ ] Toutes les sections **OBLIGATOIRE** sont complétées
- [ ] Les **emails de test** fonctionnent
- [ ] Le site est **accessible** (WCAG 2.1 AA)
- [ ] Les **performances** sont optimales (Lighthouse)
- [ ] La **conformité RGPD** est assurée
- [ ] Les **mentions légales** sont complètes
- [ ] Les **images** sont optimisées et personnalisées

---

**Bon courage pour le lancement de votre site ! 🚀**

Si vous avez des questions, n'hésitez pas à consulter le README.md ou à contacter un développeur.
