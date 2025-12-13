/**
 * Composant Hero pour la section d'accueil
 */

import { Button } from './Button'
import Link from 'next/link'

export interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  imageSrc?: string
  imageAlt?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Prendre rendez-vous',
  ctaHref = '/prendre-rendez-vous',
  secondaryCtaText,
  secondaryCtaHref,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="animate-slide-up">
            {subtitle && (
              <p className="text-primary-500 font-semibold mb-4 text-lg">
                {subtitle}
              </p>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 mb-6 leading-tight">
              {title}
            </h1>

            {description && (
              <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed">
                {description}
              </p>
            )}

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={ctaHref}>
                <Button variant="accent" size="lg">
                  {ctaText}
                </Button>
              </Link>

              {secondaryCtaText && secondaryCtaHref && (
                <Link href={secondaryCtaHref}>
                  <Button variant="secondary" size="lg">
                    {secondaryCtaText}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Image (si fournie) */}
          {imageSrc && (
            <div className="relative animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={imageSrc}
                  alt={imageAlt || ''}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Décoration */}
              <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-primary-200 rounded-full opacity-20 blur-3xl" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-secondary-200 rounded-full opacity-20 blur-3xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
