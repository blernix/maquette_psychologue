'use client'

/**
 * Composant Header avec navigation accessible
 * Menu hamburger sur mobile, navigation horizontale sur desktop
 */

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Qui suis-je ?', href: '/qui-suis-je' },
  { name: 'Spécialités', href: '/specialites' },
  { name: 'Informations pratiques', href: '/informations-pratiques' },
  { name: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      {/* Skip link pour accessibilité */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      <nav className="container-custom" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Nom */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg px-2 py-1"
            >
              <div>
                <span className="text-xl md:text-2xl font-heading font-bold text-primary-500 group-hover:text-primary-600 transition-colors">
                  Dr. Sophie Martin
                </span>
                <p className="text-xs md:text-sm text-neutral-600">
                  Psychologue Clinicienne
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                  isActive(item.href)
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-neutral-700 hover:text-primary-500 hover:bg-neutral-50'
                )}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Prendre rendez-vous */}
            <Link
              href="/prendre-rendez-vous"
              className={clsx(
                'ml-4 px-6 py-2 rounded-lg text-sm font-semibold transition-all',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500',
                isActive('/prendre-rendez-vous')
                  ? 'bg-accent-600 text-white'
                  : 'bg-accent-500 text-white hover:bg-accent-600 shadow-sm hover:shadow-md'
              )}
              aria-current={isActive('/prendre-rendez-vous') ? 'page' : undefined}
            >
              Prendre rendez-vous
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-neutral-200 py-4 animate-in"
          >
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    'px-4 py-3 rounded-lg text-base font-medium transition-colors',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                    isActive(item.href)
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-500 hover:bg-neutral-50'
                  )}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}

              {/* CTA mobile */}
              <Link
                href="/prendre-rendez-vous"
                onClick={() => setMobileMenuOpen(false)}
                className={clsx(
                  'mt-2 px-4 py-3 rounded-lg text-base font-semibold text-center transition-colors',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500',
                  isActive('/prendre-rendez-vous')
                    ? 'bg-accent-600 text-white'
                    : 'bg-accent-500 text-white hover:bg-accent-600'
                )}
                aria-current={isActive('/prendre-rendez-vous') ? 'page' : undefined}
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
