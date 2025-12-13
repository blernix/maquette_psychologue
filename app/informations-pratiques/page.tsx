/**
 * Page Informations pratiques
 * Adresse, horaires, tarifs, remboursements, accès
 */

import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import Card from '@/components/Card'
import InfoBox from '@/components/InfoBox'
import Map from '@/components/Map'
import { Button } from '@/components/Button'
import { generateMetadata as generatePageMetadata, siteConfig } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Informations pratiques',
  description:
    'Cabinet de psychologie à Lyon 3. Horaires, tarifs, remboursements Mon Soutien Psy, accès et parking. Consultations sur rendez-vous.',
  path: '/informations-pratiques',
})

export default function InformationsPratiquesPage() {
  const address = `${siteConfig.professional.address.street}, ${siteConfig.professional.address.postalCode} ${siteConfig.professional.address.city}`

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[{ label: 'Accueil', href: '/' }, { label: 'Informations pratiques' }]}
          />

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mt-6">
            Informations pratiques
          </h1>
          <p className="text-xl text-neutral-700 mt-4 max-w-3xl">
            Tout ce que vous devez savoir avant votre consultation
          </p>
        </div>
      </section>

      {/* Grille d'informations */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Adresse */}
            <Card hover padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-3">
                    Adresse du cabinet
                  </h2>
                  <address className="not-italic text-neutral-700 space-y-2">
                    <p className="font-semibold">Cabinet Dr. Sophie Martin</p>
                    <p>{siteConfig.professional.address.street}</p>
                    <p>
                      {siteConfig.professional.address.postalCode}{' '}
                      {siteConfig.professional.address.city}
                    </p>
                  </address>
                </div>
              </div>
            </Card>

            {/* Horaires */}
            <Card hover padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-3">
                    Horaires d'ouverture
                  </h2>
                  <div className="space-y-2 text-neutral-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Lundi - Vendredi :</span>
                      <span>9h00 - 19h00</span>
                    </div>
                    <div className="flex justify-between text-neutral-500">
                      <span className="font-medium">Samedi - Dimanche :</span>
                      <span>Fermé</span>
                    </div>
                    <p className="text-sm text-neutral-600 mt-4">
                      <strong>Sur rendez-vous uniquement</strong>
                      <br />
                      Pause déjeuner : 12h30 - 14h00
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Téléphone et email */}
            <Card hover padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-3">
                    Contact
                  </h2>
                  <div className="space-y-3 text-neutral-700">
                    <div>
                      <p className="text-sm text-neutral-600 mb-1">Téléphone :</p>
                      <a
                        href={`tel:${siteConfig.professional.phone.replace(/\s/g, '')}`}
                        className="text-primary-500 hover:text-primary-600 font-medium underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                      >
                        {siteConfig.professional.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-600 mb-1">Email :</p>
                      <a
                        href={`mailto:${siteConfig.professional.email}`}
                        className="text-primary-500 hover:text-primary-600 font-medium underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded break-all"
                      >
                        {siteConfig.professional.email}
                      </a>
                    </div>
                    <p className="text-sm text-neutral-600 mt-4">
                      Réponse sous 24-48 heures
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Accès */}
            <Card hover padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-3">
                    Accès et transports
                  </h2>
                  <div className="space-y-2 text-neutral-700 text-sm">
                    <div>
                      <p className="font-medium text-neutral-900">Métro :</p>
                      <p>Ligne B - Arrêt Place Guichard (5 min à pied)</p>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900">Bus :</p>
                      <p>Lignes C3, C13, C16 - Arrêt Lacassagne</p>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900">Parking :</p>
                      <p>Parking public Place Guichard</p>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900">Accessibilité :</p>
                      <p>✓ Accès PMR (personnes à mobilité réduite)</p>
                      <p>✓ Ascenseur disponible</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Photo du cabinet */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6 text-center">
              Le cabinet
            </h2>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-large">
              <img
                src="/images/cabinet.png"
                alt="Cabinet de psychologie Dr. Sophie Martin à Lyon 3"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Carte Google Maps */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6 text-center">
              Localisation
            </h2>
            <Map address={address} title="Localisation du cabinet Dr. Sophie Martin" />
          </div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 text-center mb-4">
              Tarifs des consultations
            </h2>
            <p className="text-center text-neutral-700 mb-12">
              Les tarifs indiqués sont ceux pratiqués en 2025
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card hover className="text-center">
                <div className="text-4xl mb-4">👤</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Consultation adulte
                </h3>
                <p className="text-3xl font-bold text-primary-500 mb-2">70€</p>
                <p className="text-sm text-neutral-600">Durée : 45-50 minutes</p>
              </Card>

              <Card hover className="text-center">
                <div className="text-4xl mb-4">🧒</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Enfant / Adolescent
                </h3>
                <p className="text-3xl font-bold text-primary-500 mb-2">65€</p>
                <p className="text-sm text-neutral-600">Durée : 45-50 minutes</p>
              </Card>

              <Card hover className="text-center">
                <div className="text-4xl mb-4">💑</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Thérapie de couple
                </h3>
                <p className="text-3xl font-bold text-primary-500 mb-2">90€</p>
                <p className="text-sm text-neutral-600">Durée : 60 minutes</p>
              </Card>
            </div>

            <InfoBox type="info" className="mb-6">
              <h3 className="font-semibold mb-2">Modalités de paiement</h3>
              <p className="text-sm">
                Le règlement s'effectue à la fin de chaque séance par chèque, espèces ou
                virement bancaire. Une facture vous sera remise pour vos éventuels
                remboursements.
              </p>
            </InfoBox>

            <InfoBox type="warning">
              <h3 className="font-semibold mb-2">Politique d'annulation</h3>
              <p className="text-sm">
                En cas d'empêchement, merci de prévenir au moins <strong>24 heures à
                l'avance</strong>. Toute séance non annulée dans ce délai sera due.
              </p>
            </InfoBox>
          </div>
        </div>
      </section>

      {/* Section Remboursements */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 text-center mb-12">
              Remboursements
            </h2>

            <div className="space-y-6">
              {/* Mon Soutien Psy */}
              <Card className="border-2 border-primary-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center flex-shrink-0">
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
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                      Dispositif « Mon Soutien Psy » ✅
                    </h3>
                    <div className="space-y-2 text-neutral-700">
                      <p>
                        <strong className="text-primary-600">
                          Nouveau en 2025 : 12 séances remboursées par an, SANS ordonnance !
                        </strong>
                      </p>
                      <p>
                        Le dispositif « Mon Soutien Psy » permet le remboursement de{' '}
                        <strong>jusqu'à 12 séances</strong> par an par l'Assurance Maladie,
                        désormais <strong>sans prescription médicale préalable</strong>.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Prise en charge : 60% par la Sécurité sociale</li>
                        <li>Complément mutuelle : selon votre contrat</li>
                        <li>Reste à charge : variable selon votre mutuelle</li>
                        <li>Nombre de séances : 12 maximum par an</li>
                      </ul>
                      <p className="text-sm text-neutral-600 mt-3">
                        💡 Renseignez-vous lors de votre prise de contact pour savoir si vous
                        êtes éligible.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Mutuelle */}
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-100 text-secondary-500 flex items-center justify-center flex-shrink-0">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      Remboursement par votre mutuelle
                    </h3>
                    <p className="text-neutral-700 mb-2">
                      De nombreuses mutuelles proposent un remboursement partiel ou total des
                      consultations de psychologue, <strong>selon votre contrat</strong>.
                    </p>
                    <p className="text-sm text-neutral-600">
                      💡 Vérifiez auprès de votre mutuelle les conditions de prise en charge
                      (nombre de séances, montant remboursé).
                    </p>
                  </div>
                </div>
              </Card>

              {/* Sécurité sociale */}
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center flex-shrink-0">
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      Sécurité sociale (hors Mon Soutien Psy)
                    </h3>
                    <p className="text-neutral-700">
                      Les consultations chez un psychologue libéral ne sont{' '}
                      <strong>pas remboursées</strong> par la Sécurité sociale en dehors du
                      dispositif « Mon Soutien Psy ».
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              D'autres questions ?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-50">
              N'hésitez pas à me contacter pour toute information complémentaire ou à consulter
              la page FAQ.
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
                  Consulter la FAQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
