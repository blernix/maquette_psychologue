/**
 * Layout racine de l'application
 * Inclut les métadonnées globales, les polices, Header et Footer
 */

import type { Metadata, Viewport } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig, generateLocalBusinessSchema } from '@/lib/seo'

// Configuration des polices Google
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})

// Métadonnées globales
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
    'thérapie cognitive comportementale',
    'Mon Soutien Psy',
    'remboursement psychologue',
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
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
  verification: {
    // À ajouter après création des comptes
    // google: 'VOTRE_CODE_VERIFICATION_GOOGLE',
    // bing: 'VOTRE_CODE_VERIFICATION_BING',
  },
}

// Configuration du viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4A90E2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${nunito.variable}`}
    >
      <head>
        {/* Schema.org JSON-LD pour LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
