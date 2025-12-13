/**
 * Page d'accueil
 * Sections : Hero, Présentation, Spécialités, Témoignages, Pourquoi consulter, Informations pratiques
 */

import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import SpecialtyCard from '@/components/SpecialtyCard'
import Testimonial from '@/components/Testimonial'
import Card from '@/components/Card'
import InfoBox from '@/components/InfoBox'
import { Button } from '@/components/Button'
import { generateMetadata as generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Accueil',
  description:
    'Psychologue clinicienne à Lyon 3ème. Accompagnement bienveillant pour anxiété, dépression, thérapie de couple. Consultations adultes, enfants et adolescents. Remboursement Mon Soutien Psy.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Bienvenue dans votre espace de bien-être"
        subtitle="Dr. Sophie Martin, Psychologue Clinicienne"
        description="Je vous accompagne avec bienveillance et professionnalisme dans vos difficultés personnelles, relationnelles et émotionnelles."
        ctaText="Prendre rendez-vous"
        ctaHref="/prendre-rendez-vous"
        secondaryCtaText="En savoir plus"
        secondaryCtaHref="/qui-suis-je"
        imageSrc="/images/psychologue.png"
        imageAlt="Dr. Sophie Martin, Psychologue Clinicienne à Lyon"
      />

      {/* Section Présentation courte */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6">
              Un accompagnement sur mesure pour retrouver votre équilibre
            </h2>
            <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
              <p>
                Psychologue clinicienne diplômée, j'exerce en cabinet libéral à Lyon 3ème
                depuis plus de 10 ans. Ma pratique est fondée sur l'écoute, la bienveillance
                et le respect de votre rythme.
              </p>
              <p>
                Formée aux thérapies cognitives et comportementales (TCC) et à l'approche
                systémique, j'accompagne les adultes, enfants, adolescents et couples dans
                leurs difficultés émotionnelles et relationnelles.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/qui-suis-je">
                <Button variant="secondary">Découvrir mon parcours</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Spécialités */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Mes domaines d'intervention
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Un accompagnement personnalisé adapté à vos besoins spécifiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <SpecialtyCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              }
              title="Anxiété & Stress"
              description="Accompagnement des troubles anxieux, crises d'angoisse, phobies et gestion du stress quotidien."
            />

            <SpecialtyCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              }
              title="Dépression"
              description="Soutien face aux épisodes dépressifs, perte d'élan vital et difficultés émotionnelles."
            />

            <SpecialtyCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
              title="Thérapie de couple"
              description="Accompagnement des couples en difficulté, amélioration de la communication et résolution de conflits."
            />

            <SpecialtyCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              }
              title="Enfants & Adolescents"
              description="Suivi psychologique adapté aux jeunes : difficultés scolaires, troubles du comportement, émotions."
            />

            <SpecialtyCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              title="Événements de vie"
              description="Soutien lors de transitions difficiles : deuil, séparation, burn-out, reconversion professionnelle."
            />

            <SpecialtyCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title="Confiance en soi"
              description="Travail sur l'estime de soi, affirmation de soi et développement personnel."
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/specialites">
              <Button variant="primary">Voir toutes les spécialités</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Pourquoi consulter */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Pourquoi consulter un psychologue ?
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Faire le premier pas vers un mieux-être
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card padding="lg">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-primary-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Dédramatiser la démarche
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Consulter un psychologue n'est pas un signe de faiblesse, au contraire. C'est
                faire preuve de courage et de bienveillance envers soi-même. Nous traversons
                tous des moments difficiles dans notre vie.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-primary-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Un espace confidentiel
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Le cabinet est un espace sécurisé et confidentiel où vous pouvez vous exprimer
                librement, sans jugement. Le secret professionnel protège vos échanges.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-primary-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Des outils concrets
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                La thérapie vous apporte des outils pratiques et des stratégies pour mieux
                comprendre vos émotions et gérer les difficultés du quotidien.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-primary-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                L'objectif est de retrouver un bien-être durable, de mieux vous connaître et
                de développer vos ressources personnelles pour faire face aux défis de la vie.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="section bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Ils me font confiance
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Témoignages de patients (anonymisés et génériques pour respecter la confidentialité)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Testimonial
              content="J'ai trouvé un véritable soutien lors d'une période difficile. L'écoute bienveillante et les outils proposés m'ont permis de retrouver confiance en moi."
              author="Marie L."
              role="Patiente"
              rating={5}
            />

            <Testimonial
              content="Excellent accompagnement pour notre couple. Nous avons appris à mieux communiquer et à résoudre nos conflits de manière constructive."
              author="Thomas et Julie"
              role="Couple en thérapie"
              rating={5}
            />

            <Testimonial
              content="Ma fille adolescente a trouvé un espace où elle peut s'exprimer librement. Les séances l'ont beaucoup aidée à gérer ses émotions et son stress scolaire."
              author="Catherine M."
              role="Parent"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Section Informations pratiques courtes */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Informations pratiques
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card padding="lg">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
                  Adresse
                </h3>
                <p className="text-neutral-700">
                  25 rue de la République
                  <br />
                  69003 Lyon
                </p>
                <p className="text-sm text-neutral-600 mt-2">
                  Métro : Ligne B - Place Guichard
                  <br />
                  Accès PMR
                </p>
              </Card>

              <Card padding="lg">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Horaires
                </h3>
                <p className="text-neutral-700">
                  Lundi - Vendredi : 9h00 - 19h00
                  <br />
                  Samedi - Dimanche : Fermé
                </p>
                <p className="text-sm text-neutral-600 mt-2">Sur rendez-vous uniquement</p>
              </Card>

              <Card padding="lg">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Tarifs
                </h3>
                <ul className="text-neutral-700 space-y-1">
                  <li>Consultation adulte : 70€</li>
                  <li>Consultation enfant/ado : 65€</li>
                  <li>Thérapie de couple : 90€</li>
                </ul>
                <p className="text-sm text-neutral-600 mt-2">Durée : 45-50 minutes</p>
              </Card>

              <Card padding="lg">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Remboursement
                </h3>
                <p className="text-neutral-700">
                  <strong className="text-primary-600">Mon Soutien Psy :</strong> 12 séances
                  remboursées sans ordonnance
                </p>
                <p className="text-sm text-neutral-600 mt-2">
                  Mutuelle : selon votre contrat
                  <br />
                  Sécurité sociale : non remboursé
                </p>
              </Card>
            </div>

            <InfoBox type="info" className="mt-8">
              <p>
                <strong>Nouveau dispositif 2025 :</strong> Grâce au programme « Mon Soutien Psy »,
                vous pouvez bénéficier de <strong>12 séances remboursées par an</strong>, SANS
                ordonnance préalable. Renseignez-vous lors de votre prise de contact.
              </p>
            </InfoBox>

            <div className="text-center mt-8">
              <Link href="/informations-pratiques">
                <Button variant="secondary">Voir toutes les informations</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="section bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Prêt(e) à faire le premier pas ?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-50">
              Contactez-moi pour convenir d'un premier rendez-vous. Je vous répondrai dans les
              plus brefs délais, généralement sous 24 à 48 heures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prendre-rendez-vous">
                <Button variant="accent" size="lg">
                  Prendre rendez-vous
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-500 hover:bg-primary-50"
                >
                  Questions fréquentes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
