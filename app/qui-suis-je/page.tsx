/**
 * Page Qui suis-je ?
 * Présentation du psychologue, parcours, formation, approches thérapeutiques
 */

import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import Card from '@/components/Card'
import InfoBox from '@/components/InfoBox'
import { Button } from '@/components/Button'
import { generateMetadata as generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Qui suis-je ?',
  description:
    'Dr. Sophie Martin, psychologue clinicienne diplômée à Lyon. Plus de 10 ans d\'expérience en TCC et thérapie systémique. Découvrez mon parcours et ma philosophie de travail.',
  path: '/qui-suis-je',
})

export default function QuiSuisJePage() {
  return (
    <>
      {/* Hero simple */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[{ label: 'Accueil', href: '/' }, { label: 'Qui suis-je ?' }]}
          />

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mt-6">
            Qui suis-je ?
          </h1>
          <p className="text-xl text-neutral-700 mt-4 max-w-3xl">
            Psychologue clinicienne engagée dans un accompagnement humain et bienveillant
          </p>
        </div>
      </section>

      {/* Section avec photo et présentation */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Photo professionnelle */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-medium mb-6">
                  <img
                    src="/images/profil.png"
                    alt="Dr. Sophie Martin, Psychologue Clinicienne"
                    className="w-full h-full object-cover"
                  />
                </div>

                <Card>
                  <h3 className="font-semibold text-neutral-900 mb-2">Dr. Sophie Martin</h3>
                  <p className="text-sm text-neutral-600 mb-4">Psychologue Clinicienne</p>

                  <div className="text-sm space-y-2 text-neutral-700">
                    <p>
                      <strong>N° ADELI :</strong>
                      <br />
                      [À REMPLIR]
                    </p>
                    <p>
                      <strong>Diplôme :</strong>
                      <br />
                      Master 2 Psychologie Clinique
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contenu textuel */}
            <div className="lg:col-span-2 space-y-8">
              {/* Présentation */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
                  Mon parcours
                </h2>
                <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
                  <p>
                    Titulaire d'un Master 2 en Psychologie Clinique et Psychopathologie de
                    l'Université Lumière Lyon 2, j'exerce en tant que psychologue clinicienne
                    depuis plus de 10 ans.
                  </p>
                  <p>
                    Mon parcours professionnel m'a amenée à travailler dans différents contextes :
                    services hospitaliers de psychiatrie, centre médico-psychologique (CMP), et
                    depuis 2015, en cabinet libéral à Lyon 3ème.
                  </p>
                  <p>
                    Cette diversité d'expériences m'a permis d'accompagner des publics variés
                    (enfants, adolescents, adultes, couples) et de développer une approche
                    thérapeutique riche et adaptable aux besoins de chacun.
                  </p>
                </div>
              </div>

              {/* Formation */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
                  Formation et spécialisations
                </h2>
                <div className="space-y-4">
                  <Card hover>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
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
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">
                          Master 2 Psychologie Clinique et Psychopathologie
                        </h3>
                        <p className="text-sm text-neutral-600">Université Lumière Lyon 2</p>
                      </div>
                    </div>
                  </Card>

                  <Card hover>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
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
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">
                          Formation en Thérapies Cognitives et Comportementales (TCC)
                        </h3>
                        <p className="text-sm text-neutral-600">
                          Association Française de Thérapie Comportementale et Cognitive (AFTCC)
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card hover>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
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
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">
                          Formation en Thérapie Systémique et de Couple
                        </h3>
                        <p className="text-sm text-neutral-600">
                          Institut de Formation et de Thérapie Systémique
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card hover>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
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
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">
                          Formation continue en psychotraumatologie et EMDR
                        </h3>
                        <p className="text-sm text-neutral-600">
                          En cours de certification
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Approches thérapeutiques */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
                  Mes approches thérapeutiques
                </h2>
                <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
                  <p>
                    Ma pratique s'inscrit dans une approche <strong>intégrative</strong>,
                    adaptée aux besoins spécifiques de chaque personne. Je m'appuie
                    principalement sur :
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Card>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Thérapies Cognitives et Comportementales (TCC)
                    </h3>
                    <p className="text-sm text-neutral-700">
                      Approche scientifiquement validée qui permet de modifier les pensées et
                      comportements problématiques à l'origine de souffrances psychologiques.
                    </p>
                  </Card>

                  <Card>
                    <h3 className="font-semibold text-neutral-900 mb-2">Approche systémique</h3>
                    <p className="text-sm text-neutral-700">
                      Particulièrement adaptée à la thérapie de couple et familiale, cette
                      approche considère les interactions et la dynamique relationnelle.
                    </p>
                  </Card>

                  <Card>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Psychologie clinique humaniste
                    </h3>
                    <p className="text-sm text-neutral-700">
                      Une posture d'écoute empathique et bienveillante, centrée sur la personne
                      et ses ressources.
                    </p>
                  </Card>

                  <Card>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Psychotraumatologie et EMDR
                    </h3>
                    <p className="text-sm text-neutral-700">
                      Prise en charge spécifique des traumatismes psychiques (ESPT, événements
                      traumatiques).
                    </p>
                  </Card>
                </div>
              </div>

              {/* Valeurs et philosophie */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
                  Ma philosophie de travail
                </h2>
                <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
                  <p>
                    Je crois profondément que chaque personne possède en elle les ressources
                    nécessaires pour faire face aux difficultés de la vie. Mon rôle est de vous
                    accompagner pour les révéler et les mobiliser.
                  </p>
                  <p>
                    Dans mon cabinet, vous trouverez un espace sécurisé, sans jugement, où vous
                    pourrez vous exprimer librement. Je m'engage à :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respecter votre rythme et vos besoins</li>
                    <li>Garantir la confidentialité de nos échanges</li>
                    <li>Adapter mes outils thérapeutiques à votre situation unique</li>
                    <li>
                      Travailler en collaboration avec vous vers des objectifs que nous définirons
                      ensemble
                    </li>
                    <li>Me former continuellement pour vous offrir un accompagnement de qualité</li>
                  </ul>
                </div>
              </div>

              {/* Code de déontologie */}
              <InfoBox type="info">
                <p>
                  <strong>Éthique et déontologie :</strong> En tant que psychologue, je respecte
                  le Code de Déontologie des Psychologues (actualisé en février 2012). Ce code
                  garantit le respect de votre dignité, votre autonomie, votre vie privée et la
                  confidentialité de nos échanges.
                </p>
              </InfoBox>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  Envie d'en savoir plus ou de prendre rendez-vous ?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Je serais ravie d'échanger avec vous et de répondre à vos questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/prendre-rendez-vous">
                    <Button variant="accent" size="lg">
                      Prendre rendez-vous
                    </Button>
                  </Link>
                  <Link href="/faq">
                    <Button variant="secondary" size="lg">
                      Questions fréquentes
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
