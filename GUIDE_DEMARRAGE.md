# 🚀 Guide de démarrage rapide

Bienvenue ! Ce guide vous accompagne pas à pas pour lancer votre site de psychologue.

## ⚡ Démarrage en 5 minutes

### 1. Installer les dépendances

```bash
npm install
```

### 2. Créer le fichier de configuration

Copiez le fichier d'exemple :

```bash
cp .env.local.example .env.local
```

Puis éditez `.env.local` avec vos informations :

```env
# Configuration minimale pour tester
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASSWORD=votre-mot-de-passe-app
CONTACT_EMAIL=votre-email@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Note Gmail** : Pour obtenir un mot de passe d'application :
> 1. Allez sur https://myaccount.google.com/security
> 2. Activez la validation en 2 étapes
> 3. Générez un mot de passe d'application

### 3. Lancer le site

```bash
npm run dev
```

Ouvrez http://localhost:3000 dans votre navigateur. 🎉

## 📋 Prochaines étapes

### Étape 1 : Personnaliser les informations (15 min)

Éditez le fichier `lib/seo.ts` et remplacez :
- ✏️ "Dr. Sophie Martin" par votre nom
- ✏️ Votre numéro ADELI
- ✏️ Votre adresse email et téléphone
- ✏️ L'adresse de votre cabinet

### Étape 2 : Tester le formulaire (5 min)

1. Allez sur http://localhost:3000/prendre-rendez-vous
2. Remplissez et envoyez le formulaire
3. Vérifiez que vous recevez bien l'email

Si ça ne fonctionne pas, vérifiez votre configuration SMTP dans `.env.local`.

### Étape 3 : Ajouter vos photos (10 min)

Placez vos 3 images dans `/public/images/` :
- 📸 `placeholder-profile.jpg` : votre photo professionnelle
- 📸 `placeholder-cabinet.jpg` : photo de votre cabinet
- 📸 `og-image.jpg` : image pour les réseaux sociaux (1200x630px)

Consultez `/public/images/README.md` pour les spécifications détaillées.

### Étape 4 : Personnaliser le contenu (30-60 min)

Éditez ces pages pour adapter le contenu :

1. **Qui suis-je ?** → `app/qui-suis-je/page.tsx`
   - Votre parcours
   - Vos formations
   - Votre philosophie de travail

2. **Spécialités** → `app/specialites/page.tsx`
   - Vérifiez les spécialités listées
   - Adaptez si nécessaire

3. **Informations pratiques** → `app/informations-pratiques/page.tsx`
   - Horaires
   - Tarifs
   - Accès (métro, bus, parking)

4. **Page d'accueil** → `app/page.tsx`
   - Témoignages (lignes 250-280)

## 🔍 Vérifications avant mise en ligne

Utilisez cette checklist :

- [ ] ✅ Toutes les informations personnelles sont à jour
- [ ] ✅ Le formulaire de contact fonctionne
- [ ] ✅ Les 3 images sont en place
- [ ] ✅ Les tarifs sont corrects
- [ ] ✅ Les horaires sont à jour
- [ ] ✅ Le numéro ADELI est rempli
- [ ] ✅ Les mentions légales sont complètes
- [ ] ✅ Testé sur mobile et desktop

## 🌐 Mise en ligne

### Option 1 : Vercel (Recommandé - Gratuit)

1. Créez un compte sur https://vercel.com
2. Installez Vercel CLI : `npm install -g vercel`
3. Déployez : `vercel`
4. Ajoutez vos variables d'environnement dans le dashboard Vercel
5. Votre site est en ligne ! 🎉

### Option 2 : Netlify

1. Créez un compte sur https://netlify.com
2. Connectez votre repository GitHub
3. Configurez :
   - Build command : `npm run build`
   - Publish directory : `.next`
4. Ajoutez vos variables d'environnement
5. Déployez !

## 🆘 Problèmes courants

### Le formulaire ne fonctionne pas
- Vérifiez votre configuration SMTP dans `.env.local`
- Assurez-vous que le port est correct (587 ou 465)
- Vérifiez que l'email et le mot de passe sont corrects

### Les images ne s'affichent pas
- Vérifiez que les fichiers sont bien dans `/public/images/`
- Vérifiez les noms de fichiers (exactement comme indiqué)
- Essayez de relancer le serveur : `npm run dev`

### Erreur de build
- Supprimez `node_modules` et `.next`
- Réinstallez : `npm install`
- Relancez : `npm run dev`

## 📚 Documentation complète

- **README.md** : Installation et configuration détaillées
- **TODO.md** : Checklist complète de personnalisation
- **lib/seo.ts** : Configuration SEO et informations du site

## 💡 Conseils

1. **Commencez simple** : Personnalisez d'abord les infos de base, peaufinez ensuite
2. **Testez régulièrement** : Vérifiez après chaque modification
3. **Sauvegardez** : Utilisez Git pour versionner vos changements
4. **Demandez de l'aide** : N'hésitez pas à solliciter un développeur si besoin

## 🎯 Objectif

Votre site professionnel en ligne en **1-2 heures** maximum !

---

**Bon courage ! 🚀**

*Si vous rencontrez un problème, consultez les fichiers README.md et TODO.md pour plus de détails.*
