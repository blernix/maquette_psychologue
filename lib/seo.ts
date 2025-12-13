/**
 * Utilitaires et configurations SEO pour le site
 */

import { Metadata } from 'next'

// Informations du site (à personnaliser)
export const siteConfig = {
  name: 'Dr. Sophie Martin',
  title: 'Psychologue à Lyon 3 | Dr. Sophie Martin',
  description: 'Psychologue clinicienne à Lyon 3ème. Accompagnement bienveillant pour anxiété, dépression, thérapie de couple. Consultations adultes, enfants et adolescents. Remboursement Mon Soutien Psy.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sophiemartin-psy.fr',
  locale: 'fr_FR',
  author: 'Dr. Sophie Martin',

  // Coordonnées professionnelles
  professional: {
    name: 'Dr. Sophie Martin',
    title: 'Psychologue Clinicienne',
    adeli: '[NUMÉRO ADELI À REMPLIR]',
    siret: '[NUMÉRO SIRET À REMPLIR]',
    email: 'contact@sophiemartin-psy.fr',
    phone: '06 XX XX XX XX',
    address: {
      street: '25 rue de la République',
      postalCode: '69003',
      city: 'Lyon',
      region: 'Auvergne-Rhône-Alpes',
      country: 'FR'
    }
  },

  // Réseaux sociaux (optionnel)
  social: {
    // facebook: '',
    // linkedin: '',
    // instagram: '',
  }
}

/**
 * Génère les métadonnées de base pour une page
 */
export function generateMetadata({
  title,
  description,
  path = '',
  ogImage,
}: {
  title: string
  description: string
  path?: string
  ogImage?: string
}): Metadata {
  const url = `${siteConfig.url}${path}`
  const image = ogImage || `${siteConfig.url}/og-image.jpg`

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    keywords: [
      'psychologue Lyon',
      'psychologue Lyon 3',
      'thérapie Lyon',
      'consultation psychologique',
      'anxiété',
      'dépression',
      'thérapie de couple',
      'psychologue enfants',
      'psychologue adolescents',
      'TCC',
      'thérapie cognitive',
      'Mon Soutien Psy',
      'remboursement psychologue',
    ],
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      title,
      description,
      siteName: siteConfig.title,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

/**
 * Génère le JSON-LD pour Schema.org (LocalBusiness + Psychologist)
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Psychologist',
    '@id': siteConfig.url,
    name: siteConfig.professional.name,
    image: `${siteConfig.url}/images/profile.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.professional.phone,
    email: siteConfig.professional.email,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.professional.address.street,
      addressLocality: siteConfig.professional.address.city,
      postalCode: siteConfig.professional.address.postalCode,
      addressRegion: siteConfig.professional.address.region,
      addressCountry: siteConfig.professional.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Coordonnées approximatives de Lyon 3ème (à ajuster)
      latitude: 45.7578,
      longitude: 4.8351,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Lyon',
      '@id': 'https://www.wikidata.org/wiki/Q456',
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  }
}

/**
 * Génère le JSON-LD pour une page d'article/blog
 */
export function generateArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  image,
}: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image || `${siteConfig.url}/og-image.jpg`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: siteConfig.professional.name,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.professional.name,
    },
  }
}

/**
 * Génère le JSON-LD pour la page FAQ
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Génère le breadcrumb schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
