/**
 * Page Prendre rendez-vous
 * Formulaire de contact avec informations pratiques
 */

import { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ContactForm from '@/components/ContactForm'
import Card from '@/components/Card'
import InfoBox from '@/components/InfoBox'
import { generateMetadata as generatePageMetadata, siteConfig } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Prendre rendez-vous',
  description:
    'Contactez Dr. Sophie Martin, psychologue à Lyon 3, pour prendre rendez-vous. Réponse sous 24-48h. Formulaire sécurisé et confidentiel.',
  path: '/prendre-rendez-vous',
})

export default function PrendreRendezVousPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[{ label: 'Accueil', href: '/' }, { label: 'Prendre rendez-vous' }]}
          />

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mt-6">
            Prendre rendez-vous
          </h1>
          <p className="text-xl text-neutral-700 mt-4 max-w-3xl">
            Faire le premier pas vers un mieux-être
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Colonne gauche : Informations */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  Comment prendre rendez-vous ?
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Remplissez le formulaire ci-contre et je vous recontacterai dans les{' '}
                  <strong>24 à 48 heures</strong> pour convenir d'un premier rendez-vous.
                </p>
              </div>

              <Card>
                <h3 className="font-semibold text-neutral-900 mb-3">
                  Autres moyens de contact
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-neutral-600 mb-1">Téléphone :</p>
                    <a
                      href={`tel:${siteConfig.professional.phone.replace(/\s/g, '')}`}
                      className="text-primary-500 hover:text-primary-600 font-medium underline"
                    >
                      {siteConfig.professional.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-neutral-600 mb-1">Email :</p>
                    <a
                      href={`mailto:${siteConfig.professional.email}`}
                      className="text-primary-500 hover:text-primary-600 font-medium underline break-all"
                    >
                      {siteConfig.professional.email}
                    </a>
                  </div>
                </div>
              </Card>

              <InfoBox type="info">
                <h4 className="font-semibold mb-2 text-sm">Doctolib (bientôt disponible)</h4>
                <p className="text-sm">
                  La prise de rendez-vous en ligne via Doctolib sera prochainement disponible
                  pour plus de flexibilité.
                </p>
              </InfoBox>

              <Card>
                <h3 className="font-semibold text-neutral-900 mb-3">
                  Première consultation
                </h3>
                <div className="space-y-2 text-sm text-neutral-700">
                  <p>
                    La première séance permet de faire connaissance et de définir ensemble vos
                    objectifs thérapeutiques.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Durée : 45-50 minutes</li>
                    <li>Échange sur votre motif de consultation</li>
                    <li>Discussion sur les modalités de suivi</li>
                  </ul>
                </div>
              </Card>

              <InfoBox type="success">
                <h4 className="font-semibold mb-2 text-sm">Confidentialité garantie</h4>
                <p className="text-sm">
                  Vos données sont strictement confidentielles et protégées conformément au
                  RGPD. Elles ne seront jamais partagées.
                </p>
              </InfoBox>
            </div>

            {/* Colonne droite : Formulaire */}
            <div className="lg:col-span-2">
              <Card padding="lg">
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
                  Formulaire de contact
                </h2>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ rapide */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 text-center mb-12">
              Questions fréquentes avant la première séance
            </h2>

            <div className="space-y-4">
              <Card hover>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Que se passe-t-il lors de la première séance ?
                </h3>
                <p className="text-sm text-neutral-700">
                  La première séance est un temps d'écoute et d'échange. Nous discuterons de
                  votre situation, de vos difficultés et de vos attentes. Ensemble, nous
                  définirons les objectifs thérapeutiques et les modalités du suivi (fréquence,
                  approche).
                </p>
              </Card>

              <Card hover>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Combien de temps dure une thérapie ?
                </h3>
                <p className="text-sm text-neutral-700">
                  La durée varie selon les personnes et les problématiques. Certains
                  consultent pour quelques séances ciblées (5-10 séances), d'autres pour un
                  suivi plus long. Nous ferons régulièrement le point ensemble sur votre
                  évolution.
                </p>
              </Card>

              <Card hover>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Puis-je consulter en visioconférence ?
                </h3>
                <p className="text-sm text-neutral-700">
                  Oui, les consultations en visioconférence sont possibles via un outil
                  sécurisé, notamment si vous ne pouvez pas vous déplacer ou si vous habitez
                  loin du cabinet.
                </p>
              </Card>

              <Card hover>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Comment annuler un rendez-vous ?
                </h3>
                <p className="text-sm text-neutral-700">
                  En cas d'empêchement, merci de me prévenir au moins 24 heures à l'avance par
                  téléphone ou email. Toute séance non annulée dans ce délai sera due.
                </p>
              </Card>

              <Card hover>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Suis-je remboursé(e) ?
                </h3>
                <p className="text-sm text-neutral-700">
                  Oui ! Grâce au dispositif « Mon Soutien Psy », vous pouvez bénéficier de 12
                  séances remboursées par an, sans ordonnance. De nombreuses mutuelles
                  proposent également un remboursement complémentaire.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
