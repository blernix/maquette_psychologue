/**
 * Page FAQ (Questions fréquentes)
 * Avec Schema.org FAQPage pour le SEO
 */

import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import Card from '@/components/Card'
import { Button } from '@/components/Button'
import { generateMetadata as generatePageMetadata, generateFAQSchema } from '@/lib/seo'

const faqs = [
  {
    category: 'À propos de la psychologie',
    questions: [
      {
        question: 'Quelle est la différence entre un psychologue, un psychiatre et un psychothérapeute ?',
        answer:
          'Le **psychologue** est titulaire d\'un Master 2 en psychologie (Bac+5) et peut pratiquer la psychothérapie. Il ne prescrit pas de médicaments.\n\nLe **psychiatre** est un médecin spécialisé en psychiatrie. Il peut prescrire des médicaments et pratiquer la psychothérapie.\n\nLe **psychothérapeute** est un titre réglementé qui peut être porté par des psychologues, psychiatres ou professionnels ayant suivi une formation spécifique validée.\n\nEn résumé : le psychologue et le psychiatre sont deux professions complémentaires. Le psychiatre intervient principalement sur les aspects médicaux (prescription), le psychologue sur l\'accompagnement thérapeutique par la parole.',
      },
      {
        question: 'Qu\'est-ce que les TCC (Thérapies Cognitives et Comportementales) ?',
        answer:
          'Les TCC sont des thérapies brèves, structurées et scientifiquement validées. Elles visent à modifier les **pensées négatives** (cognitions) et les **comportements problématiques** qui entretiennent la souffrance psychologique.\n\nElles sont particulièrement efficaces pour : anxiété, dépression, phobies, TOC, troubles du comportement alimentaire.\n\nLa TCC est une approche **active et collaborative** : vous travaillez activement avec le thérapeute et pouvez avoir des exercices à faire entre les séances.',
      },
    ],
  },
  {
    category: 'Première consultation',
    questions: [
      {
        question: 'Comment se passe la première séance ?',
        answer:
          'La première séance est un temps d\'**écoute et de rencontre**. Nous discuterons ensemble de :\n\n- Votre motif de consultation et vos difficultés actuelles\n- Votre histoire personnelle (anamnèse)\n- Vos attentes et objectifs thérapeutiques\n- Les modalités du suivi (fréquence, approche, durée estimée)\n\nC\'est aussi l\'occasion de poser toutes vos questions et de voir si le courant passe entre nous. Le lien thérapeutique est essentiel à la réussite de la thérapie.\n\nDurée : 45-50 minutes.',
      },
      {
        question: 'Dois-je préparer quelque chose avant la première séance ?',
        answer:
          'Aucune préparation particulière n\'est nécessaire. Venez simplement tel(le) que vous êtes.\n\nVous pouvez éventuellement réfléchir à :\n- Ce qui vous amène à consulter\n- Vos attentes vis-à-vis de la thérapie\n- Les questions que vous souhaitez me poser\n\nSi vous avez des documents médicaux pertinents (anciens comptes-rendus, bilans), vous pouvez les apporter, mais ce n\'est pas obligatoire.',
      },
      {
        question: 'Combien de temps dure une thérapie ?',
        answer:
          'La durée varie selon les personnes et les problématiques :\n\n- **Thérapie brève** (5-10 séances) : pour des difficultés ponctuelles, gestion du stress, préparation à un événement\n- **Thérapie moyenne** (10-30 séances) : anxiété, dépression, problèmes relationnels\n- **Thérapie longue** (plusieurs mois à années) : traumatismes complexes, restructuration profonde\n\nNous ferons régulièrement le point ensemble sur votre évolution et réévaluerons vos objectifs. Vous êtes libre d\'arrêter à tout moment.',
      },
    ],
  },
  {
    category: 'Tarifs et remboursements',
    questions: [
      {
        question: 'Combien coûte une séance ?',
        answer:
          '**Tarifs 2025 :**\n- Consultation adulte : **70€**\n- Consultation enfant/adolescent : **65€**\n- Thérapie de couple : **90€**\n\nDurée : 45-50 minutes (60 minutes pour les couples)\n\nLe règlement s\'effectue à la fin de chaque séance (chèque, espèces ou virement). Une facture vous sera remise.',
      },
      {
        question: 'Suis-je remboursé(e) par la Sécurité sociale ou ma mutuelle ?',
        answer:
          '**Dispositif "Mon Soutien Psy" (2025) :**\nGrande nouvelle ! Vous pouvez bénéficier de **12 séances remboursées par an, SANS ordonnance préalable**.\n- Prise en charge : 60% par la Sécurité sociale\n- Complément mutuelle selon votre contrat\n- Éligibilité : personnes de 3 ans et plus présentant des troubles légers à modérés\n\n**Mutuelles :**\nDe nombreuses mutuelles proposent un remboursement partiel ou total des consultations psychologiques. Vérifiez votre contrat ou contactez votre mutuelle.\n\n**Sécurité sociale (hors Mon Soutien Psy) :**\nLes consultations chez un psychologue libéral ne sont pas remboursées en dehors de ce dispositif.',
      },
      {
        question: 'Comment bénéficier du dispositif "Mon Soutien Psy" ?',
        answer:
          'Depuis 2025, **aucune ordonnance n\'est nécessaire** pour bénéficier de ce dispositif !\n\n**Démarche simplifiée :**\n1. Prenez rendez-vous directement avec moi\n2. Lors de la première séance, je vous fournirai les documents nécessaires\n3. Envoyez les documents à votre caisse d\'Assurance Maladie\n4. Vous bénéficiez d\'un remboursement pour jusqu\'à 12 séances par an\n\nRenseignez-vous lors de votre prise de contact, je vous guiderai dans les démarches.',
      },
    ],
  },
  {
    category: 'Modalités pratiques',
    questions: [
      {
        question: 'À quelle fréquence dois-je venir en consultation ?',
        answer:
          'La fréquence est adaptée à vos besoins et objectifs :\n\n- **1 fois par semaine** : thérapie intensive, difficultés aiguës\n- **1 fois tous les 15 jours** : rythme le plus courant, bon équilibre\n- **1 fois par mois** : suivi d\'entretien, consolidation des acquis\n\nNous définirons ensemble le rythme le plus adapté à votre situation.',
      },
      {
        question: 'Puis-je consulter en visioconférence ?',
        answer:
          'Oui, les **consultations en ligne** sont possibles via un outil de visioconférence sécurisé.\n\nElles sont particulièrement adaptées si :\n- Vous habitez loin du cabinet\n- Vous avez des difficultés à vous déplacer\n- Votre emploi du temps est très contraint\n- Vous êtes en déplacement temporaire\n\nLe tarif est le même qu\'en présentiel. La qualité thérapeutique est généralement similaire, même si le présentiel reste préférable quand c\'est possible.',
      },
      {
        question: 'Comment annuler ou reporter un rendez-vous ?',
        answer:
          '**Délai d\'annulation : 24 heures minimum**\n\nSi vous ne pouvez pas venir à votre rendez-vous, merci de me prévenir au moins **24 heures à l\'avance** par téléphone ou email.\n\n**Important :** Toute séance non annulée dans ce délai sera due (sauf urgence ou force majeure).\n\nCette règle permet de proposer le créneau à une autre personne en attente.',
      },
      {
        question: 'Les séances sont-elles confidentielles ?',
        answer:
          '**Oui, absolument.**\n\nEn tant que psychologue, je suis soumise au **secret professionnel** (article 226-13 du Code pénal) et au **Code de déontologie des psychologues**.\n\nCela signifie que :\n- Tout ce que vous me dites reste strictement confidentiel\n- Je ne peux partager aucune information sans votre accord explicite\n- Le secret s\'applique même après la fin de notre relation thérapeutique\n\nLes seules exceptions légales concernent la protection en cas de danger grave et imminent, ou sur réquisition judiciaire.',
      },
    ],
  },
  {
    category: 'Public et spécialités',
    questions: [
      {
        question: 'À partir de quel âge peut-on consulter un psychologue ?',
        answer:
          'J\'accueille les **enfants à partir de 6 ans**, les **adolescents** et les **adultes** (sans limite d\'âge).\n\n**Pour les enfants** (6-12 ans) : approche ludique adaptée (jeu, dessin), avec implication des parents.\n\n**Pour les adolescents** (12-18 ans) : accompagnement spécifique aux problématiques de cet âge (identité, scolarité, relations).\n\nPour les enfants de moins de 6 ans, je peux vous orienter vers des confrères spécialisés en petite enfance.',
      },
      {
        question: 'Accompagnez-vous les couples ?',
        answer:
          'Oui, je propose de la **thérapie de couple** en approche systémique.\n\nLa thérapie de couple est adaptée pour :\n- Améliorer la communication\n- Résoudre des conflits récurrents\n- Traverser une crise (infidélité, deuil, etc.)\n- Repenser la relation après une naissance\n- Accompagner une séparation dans le respect mutuel\n\n**Tarif :** 90€ la séance (60 minutes)',
      },
      {
        question: 'Faut-il être "malade" pour consulter un psychologue ?',
        answer:
          '**Non, absolument pas !**\n\nConsulter un psychologue, c\'est :\n- Prendre soin de sa santé mentale, comme on prend soin de sa santé physique\n- Traverser un moment difficile (deuil, séparation, burn-out)\n- Mieux se connaître et développer son potentiel\n- Améliorer ses relations\n- Gérer son stress ou ses émotions\n\nLa thérapie n\'est pas réservée aux "malades mentaux". C\'est un espace pour **toute personne qui en ressent le besoin**.',
      },
    ],
  },
]

// Générer les données pour le Schema.org
const allQuestions = faqs.flatMap((category) =>
  category.questions.map((q) => ({
    question: q.question,
    answer: q.answer,
  }))
)

export const metadata: Metadata = generatePageMetadata({
  title: 'Questions fréquentes (FAQ)',
  description:
    'Trouvez les réponses à vos questions sur les consultations psychologiques : tarifs, remboursements, déroulement des séances, confidentialité.',
  path: '/faq',
})

export default function FAQPage() {
  return (
    <>
      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(allQuestions)),
        }}
      />

      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'FAQ' }]} />

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mt-6">
            Questions fréquentes
          </h1>
          <p className="text-xl text-neutral-700 mt-4 max-w-3xl">
            Trouvez les réponses à vos questions sur les consultations psychologiques
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-primary-500 mb-6">
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <Card key={faqIndex} hover>
                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer list-none">
                          <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                            {faq.question}
                          </h3>
                          <svg
                            className="w-6 h-6 text-primary-500 flex-shrink-0 transition-transform group-open:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>

                        <div className="mt-4 pt-4 border-t border-neutral-200 text-neutral-700 leading-relaxed">
                          {faq.answer.split('\n\n').map((paragraph, i) => {
                            // Gérer les listes à puces
                            if (paragraph.startsWith('- ')) {
                              const items = paragraph
                                .split('\n- ')
                                .filter(Boolean)
                                .map((item) => item.replace(/^- /, ''))

                              return (
                                <ul key={i} className="list-disc pl-6 space-y-1 mb-4">
                                  {items.map((item, j) => (
                                    <li
                                      key={j}
                                      dangerouslySetInnerHTML={{
                                        __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                                      }}
                                    />
                                  ))}
                                </ul>
                              )
                            }

                            // Paragraphe normal avec gras
                            return (
                              <p
                                key={i}
                                className="mb-4 last:mb-0"
                                dangerouslySetInnerHTML={{
                                  __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                                }}
                              />
                            )
                          })}
                        </div>
                      </details>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Vous n'avez pas trouvé la réponse à votre question ?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-50">
              N'hésitez pas à me contacter directement. Je serai ravie de répondre à toutes vos
              interrogations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prendre-rendez-vous">
                <Button variant="accent" size="lg">
                  Me contacter
                </Button>
              </Link>
              <Link href="/qui-suis-je">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-500 hover:bg-primary-50"
                >
                  En savoir plus sur moi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
