# Site Web pour Psychologue - Dr. Sophie Martin

Site vitrine professionnel pour psychologue libéral, conforme RGPD, accessible WCAG 2.1 AA et optimisé SEO.

## 🎯 Caractéristiques principales

### ✅ Conformité et réglementation
- **RGPD** : Conforme au règlement européen sur la protection des données
- **Accessibilité** : WCAG 2.1 niveau AA (navigation clavier, contrastes, ARIA)
- **SEO** : Optimisé pour le référencement local (Schema.org, métadonnées)
- **Sécurité** : HTTPS, validation des formulaires, protection anti-spam

### 🎨 Design et UX
- **Responsive** : Adapté mobile, tablette et desktop
- **Performance** : Optimisé Core Web Vitals
- **Palette thérapeutique** : Couleurs apaisantes (bleu, vert)
- **Animations douces** : Transitions fluides et non agressives

### 📄 Pages incluses
1. **Accueil** : Hero, présentation, spécialités, témoignages, informations pratiques
2. **Qui suis-je ?** : Parcours, formations, approches thérapeutiques
3. **Spécialités** : Détail des 8 domaines d'intervention
4. **Informations pratiques** : Horaires, tarifs, remboursements, accès, carte
5. **Prendre rendez-vous** : Formulaire de contact sécurisé et accessible
6. **Mentions légales** : Conformité légale
7. **Politique de confidentialité / RGPD** : Protection des données (ULTRA complète)
8. **FAQ** : 20+ questions fréquentes avec Schema.org

## 🛠 Stack technique

- **Framework** : Next.js 14+ (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Formulaires** : React Hook Form + Zod
- **Email** : Nodemailer
- **Validation** : Zod schemas
- **SEO** : Métadonnées Next.js + JSON-LD Schema.org

## 📦 Installation

### Prérequis
- Node.js 18+ et npm/yarn/pnpm
- Un compte email SMTP (Gmail, SendGrid, Brevo, etc.)
- (Optionnel) Clé API Google Maps

### 1. Installation des dépendances

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 2. Configuration des variables d'environnement

Créez un fichier `.env.local` à la racine du projet (copiez `.env.local.example`) :

```env
# Configuration Email (OBLIGATOIRE pour le formulaire de contact)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=votre-email@example.com
SMTP_PASSWORD=votre-mot-de-passe
SMTP_FROM=contact@votre-site.fr
CONTACT_EMAIL=psychologue@example.com

# Google Maps (optionnel)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre-cle-api-google-maps

# URL du site (pour SEO)
NEXT_PUBLIC_SITE_URL=https://votre-site.fr
```

#### Configuration SMTP recommandée

**Gmail :**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASSWORD=mot-de-passe-application  # Créer un mot de passe d'application
```

**Brevo (ex-Sendinblue) - Recommandé :**
```env
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=votre-email@example.com
SMTP_PASSWORD=votre-cle-api-brevo
```

### 3. Lancement en développement

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 4. Build de production

```bash
npm run build
npm run start
```

## 🎨 Personnalisation

### Informations du psychologue

Modifiez le fichier `lib/seo.ts` :

```typescript
export const siteConfig = {
  name: 'Dr. Votre Nom',
  title: 'Psychologue à [Ville]',
  // ...
  professional: {
    name: 'Dr. Votre Nom',
    adeli: 'VOTRE_NUMERO_ADELI',
    siret: 'VOTRE_NUMERO_SIRET',
    email: 'contact@votre-email.fr',
    phone: '06 XX XX XX XX',
    address: {
      street: 'Votre adresse',
      postalCode: 'XXXXX',
      city: 'Votre Ville',
      // ...
    }
  }
}
```

### Couleurs du site

Modifiez le fichier `tailwind.config.ts` pour personnaliser la palette de couleurs.

### Images

Remplacez les images placeholder dans `/public/images/` :
- `placeholder-profile.jpg` : Photo professionnelle du psychologue
- `placeholder-cabinet.jpg` : Photo du cabinet
- `og-image.jpg` : Image pour les réseaux sociaux (1200x630px)

### Contenu des pages

Tous les contenus sont dans les fichiers `app/[page]/page.tsx`. Modifiez-les selon vos besoins.

## 📋 Checklist de mise en production

Consultez le fichier `TODO.md` pour la liste complète des éléments à personnaliser avant la mise en ligne.

### Points critiques :

- [ ] Remplir toutes les informations personnelles (nom, ADELI, SIRET, etc.)
- [ ] Configurer les variables d'environnement (`.env.local`)
- [ ] Remplacer les images placeholder
- [ ] Tester le formulaire de contact
- [ ] Vérifier la conformité RGPD
- [ ] Tester l'accessibilité (navigation clavier, lecteur d'écran)
- [ ] Optimiser les performances (Lighthouse)
- [ ] Configurer Google Search Console et Analytics (optionnel)
- [ ] Ajouter la clé API Google Maps
- [ ] Héberger le site (Vercel, Netlify, etc.)

## 🚀 Déploiement

### Vercel (Recommandé)

1. Push votre code sur GitHub
2. Connectez-vous à [Vercel](https://vercel.com)
3. Importez votre repository
4. Ajoutez les variables d'environnement
5. Déployez !

### Netlify

1. Push votre code sur GitHub
2. Connectez-vous à [Netlify](https://netlify.com)
3. Importez votre repository
4. Build command : `npm run build`
5. Publish directory : `.next`
6. Ajoutez les variables d'environnement
7. Déployez !

### OVH / serveur classique

1. Buildez le projet : `npm run build`
2. Uploadez les fichiers sur votre serveur
3. Configurez Node.js et PM2
4. Lancez : `pm2 start npm --name "psychologue-site" -- start`

## 🔒 Sécurité

- HTTPS obligatoire en production
- Validation des formulaires côté client ET serveur
- Honeypot anti-spam
- Protection CSRF
- Sanitisation des inputs
- Headers de sécurité (CSP, X-Frame-Options, etc.)

## ♿ Accessibilité

Le site respecte les normes WCAG 2.1 niveau AA :
- Navigation au clavier complète
- Contrastes de couleurs suffisants (4.5:1 minimum)
- Balises sémantiques HTML5
- Labels explicites sur tous les champs de formulaire
- Messages d'erreur accessibles (ARIA)
- Images avec alt text descriptif
- Skip links pour navigation rapide

## 📊 SEO

- Métadonnées optimisées par page
- Schema.org JSON-LD (LocalBusiness, Psychologist, FAQPage)
- Sitemap automatique (Next.js)
- Robots.txt
- Open Graph et Twitter Cards
- URLs propres et descriptives
- Contenu de qualité optimisé mots-clés

## 🆘 Support

Pour toute question ou problème :
1. Consultez le fichier `TODO.md`
2. Vérifiez les logs : `npm run dev` en mode développement
3. Testez le formulaire de contact en local

## 📝 License

Ce projet est un template professionnel. Vous êtes libre de l'utiliser et de le personnaliser pour votre cabinet de psychologie.

---

**Développé avec ❤️ pour les professionnels de santé mentale**

Site conforme RGPD ✅ | Accessible WCAG 2.1 AA ✅ | Optimisé SEO ✅
