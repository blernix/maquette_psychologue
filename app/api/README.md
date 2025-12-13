# API Routes - Non utilisé en mode export statique

⚠️ **Ce dossier n'est PAS utilisé en production** car le site est configuré en **export statique** (`output: 'export'` dans `next.config.js`).

## Pourquoi ce dossier existe ?

Il contient le code d'origine pour l'API de contact, conservé comme **référence** pour :
- Comprendre la structure d'une API Next.js
- Servir de base pour votre futur microservice
- Documentation du format des données attendues

## Pour activer l'envoi d'emails

### Option 1 : Microservice externe (recommandé pour sites statiques)

1. Créez un microservice séparé (Node.js, Python, PHP, etc.)
2. Hébergez-le sur votre VPS
3. Modifiez `components/ContactForm.tsx` ligne 46 :
   ```typescript
   const response = await fetch('https://votre-api.com/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(data),
   })
   ```

### Option 2 : Repasser en mode SSR (si vous voulez utiliser cette API)

1. Supprimez `output: 'export'` de `next.config.js`
2. Décommentez le code dans `components/ContactForm.tsx`
3. Configurez `.env.local` avec vos identifiants SMTP
4. Déployez sur Vercel/Netlify (ou autre hébergeur Node.js)

## Structure de l'API de référence

```
POST /api/contact
Content-Type: application/json

{
  "firstName": "Sophie",
  "lastName": "Martin",
  "email": "sophie@example.com",
  "phone": "06 12 34 56 78",
  "consultationType": "première-consultation",
  "message": "Bonjour, je souhaite...",
  "rgpdConsent": true
}
```

---

**Pour ce projet, utilisez un microservice externe pour garder le site 100% statique.**
