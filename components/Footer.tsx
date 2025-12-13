/**
 * Composant Footer avec informations de contact et liens légaux
 */

import Link from 'next/link'
import { siteConfig } from '@/lib/seo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-800 text-neutral-200" role="contentinfo">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Colonne 1 : À propos */}
          <div>
            <h2 className="text-lg font-heading font-semibold text-white mb-4">
              Dr. Sophie Martin
            </h2>
            <p className="text-sm text-neutral-300 mb-4">
              Psychologue clinicienne diplômée, je vous accompagne avec bienveillance
              dans vos difficultés personnelles, relationnelles et émotionnelles.
            </p>
            <p className="text-xs text-neutral-400">
              N° ADELI : {siteConfig.professional.adeli}
            </p>
          </div>

          {/* Colonne 2 : Contact */}
          <div>
            <h2 className="text-lg font-heading font-semibold text-white mb-4">
              Contact
            </h2>
            <address className="not-italic text-sm space-y-2">
              <p className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {siteConfig.professional.address.street}
                  <br />
                  {siteConfig.professional.address.postalCode}{' '}
                  {siteConfig.professional.address.city}
                </span>
              </p>

              <p className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${siteConfig.professional.phone.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                >
                  {siteConfig.professional.phone}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${siteConfig.professional.email}`}
                  className="hover:text-white transition-colors underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                >
                  {siteConfig.professional.email}
                </a>
              </p>
            </address>
          </div>

          {/* Colonne 3 : Horaires & Liens */}
          <div>
            <h2 className="text-lg font-heading font-semibold text-white mb-4">
              Horaires
            </h2>
            <div className="text-sm space-y-1 mb-6">
              <p>Lundi - Vendredi : 9h00 - 19h00</p>
              <p className="text-neutral-400">Samedi - Dimanche : Fermé</p>
              <p className="text-xs text-neutral-400 mt-2">Sur rendez-vous uniquement</p>
            </div>

            <h3 className="text-sm font-semibold text-white mb-2">
              Liens utiles
            </h3>
            <nav aria-label="Liens légaux" className="text-sm space-y-1">
              <Link
                href="/mentions-legales"
                className="block hover:text-white transition-colors underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="block hover:text-white transition-colors underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
              >
                Politique de confidentialité
              </Link>
            </nav>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-12 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>
              © {currentYear} Dr. Sophie Martin - Psychologue. Tous droits réservés.
            </p>
            <p className="text-xs">
              Site conforme RGPD • Accessible WCAG 2.1 AA
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
