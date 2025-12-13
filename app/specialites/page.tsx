/**
 * Page Spécialités
 * Détail des domaines d'intervention et approches thérapeutiques
 */

import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import Card from '@/components/Card'
import { Button } from '@/components/Button'
import { generateMetadata as generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Spécialités et domaines d\'intervention',
  description:
    'Psychologue spécialisée en anxiété, dépression, thérapie de couple, enfants et adolescents. TCC, thérapie systémique et accompagnement personnalisé à Lyon.',
  path: '/specialites',
})

const specialties = [
  {
    title: 'Anxiété et troubles anxieux',
    icon: '🧠',
    description:
      'Accompagnement des troubles anxieux généralisés, crises d\'angoisse, phobies spécifiques, anxiété sociale et anticipatoire.',
    details: [
      'Crise de panique et agoraphobie',
      'Troubles obsessionnels compulsifs (TOC)',
      'Phobies spécifiques (animaux, hauteurs, etc.)',
      'Anxiété de performance (examens, prise de parole)',
      'Gestion du stress quotidien',
    ],
    approach:
      'Thérapie cognitivo-comportementale (TCC) avec techniques de relaxation, restructuration cognitive et exposition progressive.',
  },
  {
    title: 'Dépression et troubles de l\'humeur',
    icon: '💙',
    description:
      'Soutien lors d\'épisodes dépressifs, tristesse persistante, perte d\'élan vital et difficultés émotionnelles.',
    details: [
      'Épisode dépressif caractérisé',
      'Dépression saisonnière',
      'Troubles bipolaires (en complément d\'un suivi psychiatrique)',
      'Sentiment de vide et perte de sens',
      'Difficultés à ressentir du plaisir (anhédonie)',
    ],
    approach:
      'Approche intégrative combinant TCC, activation comportementale et soutien psychologique.',
  },
  {
    title: 'Thérapie de couple',
    icon: '💑',
    description:
      'Accompagnement des couples en difficulté pour améliorer la communication, résoudre les conflits et retrouver une harmonie relationnelle.',
    details: [
      'Problèmes de communication',
      'Conflits récurrents',
      'Infidélité et reconstruction de la confiance',
      'Difficultés sexuelles',
      'Séparation et reconstruction',
    ],
    approach:
      'Thérapie systémique centrée sur les interactions du couple, amélioration de la communication et résolution de conflits.',
  },
  {
    title: 'Enfants et adolescents',
    icon: '👨‍👩‍👧‍👦',
    description:
      'Suivi psychologique adapté aux jeunes : difficultés scolaires, comportementales, émotionnelles et relationnelles.',
    details: [
      'Troubles du comportement',
      'Difficultés scolaires et harcèlement',
      'Gestion des émotions (colère, tristesse)',
      'Troubles de l\'attention (TDAH)',
      'Anxiété de séparation',
      'Troubles du sommeil',
    ],
    approach:
      'Approche ludique et adaptée à l\'âge, avec implication des parents. Utilisation du jeu, du dessin et de techniques TCC adaptées.',
  },
  {
    title: 'Événements de vie et transitions',
    icon: '🌱',
    description:
      'Accompagnement lors de périodes de transition ou d\'événements difficiles de la vie.',
    details: [
      'Deuil et perte',
      'Séparation et divorce',
      'Burn-out professionnel',
      'Reconversion professionnelle',
      'Parentalité et post-partum',
      'Maladie grave (annonce, adaptation)',
    ],
    approach:
      'Soutien psychologique et accompagnement dans le processus d\'adaptation et de résilience.',
  },
  {
    title: 'Confiance en soi et estime de soi',
    icon: '✨',
    description:
      'Travail sur l\'image de soi, l\'affirmation de soi et le développement du potentiel personnel.',
    details: [
      'Faible estime de soi',
      'Difficultés d\'affirmation de soi',
      'Perfectionnisme et syndrome de l\'imposteur',
      'Hypersensibilité',
      'Développement personnel',
    ],
    approach:
      'TCC, travail sur les croyances limitantes et exercices pratiques d\'affirmation de soi.',
  },
  {
    title: 'Traumatismes psychiques',
    icon: '🛡️',
    description:
      'Prise en charge spécialisée des traumatismes psychologiques et état de stress post-traumatique (ESPT).',
    details: [
      'Stress post-traumatique (ESPT)',
      'Agression (physique, sexuelle, verbale)',
      'Accident grave',
      'Traumatismes de l\'enfance',
      'Violences conjugales',
    ],
    approach:
      'Psychotraumatologie et EMDR (Eye Movement Desensitization and Reprocessing) en cours de certification.',
  },
  {
    title: 'Addictions et comportements compulsifs',
    icon: '🔓',
    description:
      'Accompagnement dans la gestion des addictions et comportements compulsifs.',
    details: [
      'Addictions comportementales (jeux, réseaux sociaux)',
      'Troubles du comportement alimentaire (TCA)',
      'Dépendance affective',
      'Achats compulsifs',
    ],
    approach:
      'TCC et approche motivationnelle, en complément d\'un suivi médical si nécessaire.',
  },
]

export default function SpecialitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Spécialités' }]} />

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mt-6">
            Mes spécialités et domaines d'intervention
          </h1>
          <p className="text-xl text-neutral-700 mt-4 max-w-3xl">
            Un accompagnement adapté à vos besoins spécifiques
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Fort de plus de 10 ans d'expérience, j'accompagne les adultes, enfants,
              adolescents et couples dans diverses problématiques psychologiques. Mon approche
              intégrative me permet d'adapter les outils thérapeutiques à votre situation
              unique.
            </p>
          </div>

          {/* Liste des spécialités */}
          <div className="space-y-8">
            {specialties.map((specialty, index) => (
              <Card key={index} hover className="transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Icône et titre */}
                  <div className="lg:col-span-3">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl flex-shrink-0" aria-hidden="true">
                        {specialty.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-heading font-bold text-neutral-900">
                          {specialty.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Description et détails */}
                  <div className="lg:col-span-9 space-y-4">
                    <p className="text-neutral-700 leading-relaxed">{specialty.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-2">
                          Problématiques traitées :
                        </h3>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          {specialty.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <svg
                                className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-2">
                          Approche thérapeutique :
                        </h3>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                          {specialty.approach}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pour qui ? */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 text-center mb-12">
              Pour qui ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card hover>
                <div className="text-center">
                  <div className="text-4xl mb-4">👤</div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Adultes</h3>
                  <p className="text-neutral-700">
                    Accompagnement individuel pour toutes problématiques psychologiques :
                    anxiété, dépression, burn-out, transitions de vie, traumatismes, etc.
                  </p>
                </div>
              </Card>

              <Card hover>
                <div className="text-center">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Couples</h3>
                  <p className="text-neutral-700">
                    Thérapie de couple pour améliorer la communication, résoudre les conflits
                    et reconstruire la relation.
                  </p>
                </div>
              </Card>

              <Card hover>
                <div className="text-center">
                  <div className="text-4xl mb-4">🧒</div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Enfants (à partir de 6 ans)
                  </h3>
                  <p className="text-neutral-700">
                    Suivi adapté aux enfants avec approche ludique : difficultés scolaires,
                    émotionnelles, comportementales.
                  </p>
                </div>
              </Card>

              <Card hover>
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍🎓</div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Adolescents</h3>
                  <p className="text-neutral-700">
                    Accompagnement spécifique des ados : identité, orientation, relations,
                    anxiété, dépression.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Vous vous reconnaissez dans l'une de ces problématiques ?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-50">
              N'hésitez pas à me contacter pour en discuter. Ensemble, nous trouverons la
              meilleure approche pour vous accompagner.
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
