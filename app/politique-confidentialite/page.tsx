/**
 * Page Politique de confidentialité / RGPD
 * OBLIGATOIRE et CRUCIALE pour la conformité RGPD
 * Particulièrement importante car traitement de données de santé
 */

import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import Card from '@/components/Card'
import InfoBox from '@/components/InfoBox'
import { ProspectName, ProspectCity } from '@/components/ProspectPersonalization'
import { generateMetadata as generatePageMetadata, siteConfig } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Politique de confidentialité et RGPD',
  description:
    'Politique de protection des données personnelles et de confidentialité conforme au RGPD pour le cabinet Dr. Sophie Martin.',
  path: '/politique-confidentialite',
})

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Politique de confidentialité' },
            ]}
          />

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mt-6">
            Politique de confidentialité et protection des données (RGPD)
          </h1>
          <p className="text-xl text-neutral-700 mt-4">
            Vos données personnelles sont précieuses et protégées
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <InfoBox type="info" className="mb-8">
              <p>
                <strong>En bref :</strong> Je m'engage à protéger vos données personnelles et à
                respecter votre vie privée conformément au Règlement Général sur la Protection
                des Données (RGPD) et au secret professionnel des psychologues.
              </p>
            </InfoBox>

            <div className="space-y-8">
              {/* Introduction */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  Introduction
                </h2>
                <div className="space-y-3 text-neutral-700">
                  <p>
                    La présente politique de confidentialité vous informe sur la manière dont{' '}
                    <ProspectName fallback={siteConfig.professional.name} />, psychologue clinicienne, collecte, traite et
                    protège vos données personnelles, y compris les données de santé.
                  </p>
                  <p>
                    En tant que psychologue, je suis soumise au{' '}
                    <strong>secret professionnel</strong> (article 226-13 du Code pénal) et au{' '}
                    <strong>Code de déontologie des psychologues</strong>. Cette double
                    protection garantit la confidentialité absolue de nos échanges.
                  </p>
                </div>
              </Card>

              {/* Responsable du traitement */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  1. Responsable du traitement des données
                </h2>
                <div className="space-y-2 text-neutral-700">
                  <p>
                    Le responsable du traitement de vos données personnelles est :
                  </p>
                  <ul className="list-none space-y-1 ml-4">
                    <li>
                      <strong>Nom :</strong> <ProspectName fallback={siteConfig.professional.name} />
                    </li>
                    <li>
                      <strong>Profession :</strong> Psychologue Clinicienne
                    </li>
                    <li>
                      <strong>N° ADELI :</strong> {siteConfig.professional.adeli}
                    </li>
                    <li>
                      <strong>Adresse :</strong> {siteConfig.professional.address.street},{' '}
                      {siteConfig.professional.address.postalCode}{' '}
                      <ProspectCity fallback={siteConfig.professional.address.city} />
                    </li>
                    <li>
                      <strong>Email :</strong>{' '}
                      <a
                        href={`mailto:${siteConfig.professional.email}`}
                        className="text-primary-500 hover:text-primary-600 underline"
                      >
                        {siteConfig.professional.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </Card>

              {/* Données collectées */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  2. Données personnelles collectées
                </h2>
                <div className="space-y-4 text-neutral-700">
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      2.1. Via le formulaire de contact du site web
                    </h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Type de consultation souhaité</li>
                      <li>Message de contact (motif de la demande)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      2.2. Lors des consultations psychologiques
                    </h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        Données d'identité : nom, prénom, date de naissance, adresse
                      </li>
                      <li>Coordonnées : téléphone, email</li>
                      <li>
                        <strong>Données de santé :</strong> anamnèse, motif de consultation,
                        notes cliniques, observations psychologiques, compte-rendus de séances
                      </li>
                      <li>
                        Données financières : facturation, mode de paiement (aucune
                        carte bancaire stockée)
                      </li>
                    </ul>
                    <p className="text-sm text-neutral-600 mt-2">
                      ⚠️ Les données de santé bénéficient d'une protection renforcée en tant
                      que <strong>données sensibles</strong> au sens du RGPD.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Finalités */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  3. Finalités du traitement
                </h2>
                <div className="space-y-3 text-neutral-700">
                  <p>Vos données personnelles sont collectées et traitées pour :</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Prise de rendez-vous :</strong> répondre à votre demande de
                      contact et organiser les consultations
                    </li>
                    <li>
                      <strong>Suivi psychologique :</strong> assurer le suivi thérapeutique et
                      la continuité des soins
                    </li>
                    <li>
                      <strong>Gestion administrative :</strong> facturation, édition de
                      factures, gestion des annulations
                    </li>
                    <li>
                      <strong>Obligations légales :</strong> conservation du dossier patient
                      conformément à la réglementation
                    </li>
                    <li>
                      <strong>Amélioration de la qualité des soins :</strong> analyse de ma
                      pratique professionnelle (dans le respect de l'anonymat)
                    </li>
                  </ul>
                </div>
              </Card>

              {/* Base légale */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  4. Base légale du traitement
                </h2>
                <div className="space-y-3 text-neutral-700">
                  <p>Le traitement de vos données repose sur :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Votre consentement</strong> (article 6.1.a et 9.2.a du RGPD) :
                      pour la collecte de vos données via le formulaire de contact
                    </li>
                    <li>
                      <strong>L'exécution d'un contrat de soins</strong> (article 6.1.b du
                      RGPD) : pour le suivi psychologique et la gestion administrative
                    </li>
                    <li>
                      <strong>Intérêt légitime</strong> (article 6.1.f du RGPD) : pour la
                      gestion et l'organisation du cabinet
                    </li>
                    <li>
                      <strong>Obligation légale</strong> (article 6.1.c du RGPD) :
                      conservation du dossier patient
                    </li>
                    <li>
                      <strong>Intérêt médical / raisons de santé publique</strong> (article
                      9.2.h du RGPD) : pour les données de santé
                    </li>
                  </ul>
                </div>
              </Card>

              {/* Durée de conservation */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  5. Durée de conservation des données
                </h2>
                <div className="space-y-3 text-neutral-700">
                  <p>
                    Conformément aux recommandations de l'Ordre des Médecins et de la CNIL, les
                    durées de conservation sont les suivantes :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Dossier patient (adulte) :</strong> <strong>10 ans</strong> après
                      la dernière consultation
                    </li>
                    <li>
                      <strong>Dossier patient (mineur) :</strong> jusqu'aux{' '}
                      <strong>28 ans</strong> du patient (ou 10 ans après la majorité)
                    </li>
                    <li>
                      <strong>Demandes de contact non suivies de consultation :</strong> 1 an
                      maximum
                    </li>
                    <li>
                      <strong>Données de facturation :</strong> 10 ans (obligation légale
                      comptable)
                    </li>
                  </ul>
                  <p className="text-sm text-neutral-600 mt-3">
                    Au-delà de ces durées, les données sont supprimées ou anonymisées de manière
                    irréversible.
                  </p>
                </div>
              </Card>

              {/* Destinataires */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  6. Destinataires des données
                </h2>
                <div className="space-y-3 text-neutral-700">
                  <p>
                    Vos données personnelles sont traitées de manière{' '}
                    <strong>strictement confidentielle</strong> et ne sont accessibles qu'à :
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><ProspectName fallback={siteConfig.professional.name} />, psychologue responsable du traitement</li>
                    <li>
                      Personnel autorisé éventuel (secrétariat médical, sous obligation de
                      confidentialité)
                    </li>
                  </ul>
                  <p className="mt-4">
                    <strong>Aucun partage avec des tiers</strong> sans votre consentement
                    explicite, sauf :
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Obligation légale (réquisition judiciaire)</li>
                    <li>
                      Protection de l'intégrité physique (danger grave et imminent pour vous ou
                      autrui)
                    </li>
                  </ul>
                </div>
              </Card>

              {/* Sécurité */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  7. Sécurité des données
                </h2>
                <div className="space-y-3 text-neutral-700">
                  <p>
                    Je mets en œuvre toutes les mesures techniques et organisationnelles
                    appropriées pour assurer la sécurité de vos données :
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Cryptage HTTPS :</strong> toutes les communications avec le site
                      sont chiffrées
                    </li>
                    <li>
                      <strong>Accès restreint :</strong> seules les personnes autorisées peuvent
                      accéder aux données
                    </li>
                    <li>
                      <strong>Mots de passe sécurisés :</strong> protection par mots de passe
                      forts et authentification
                    </li>
                    <li>
                      <strong>Sauvegardes régulières :</strong> pour prévenir toute perte de
                      données
                    </li>
                    <li>
                      <strong>Hébergement sécurisé :</strong> hébergeur professionnel respectant
                      les normes de sécurité
                    </li>
                    <li>
                      <strong>Dossiers papier :</strong> conservés dans des armoires fermées à
                      clé
                    </li>
                  </ul>
                </div>
              </Card>

              {/* Droits des patients */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  8. Vos droits sur vos données personnelles
                </h2>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    Conformément au RGPD, vous disposez des droits suivants sur vos données
                    personnelles :
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-neutral-900">
                        🔍 Droit d'accès (article 15 RGPD)
                      </h4>
                      <p className="text-sm">
                        Vous pouvez demander l'accès à vos données personnelles et obtenir une
                        copie de votre dossier.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900">
                        ✏️ Droit de rectification (article 16 RGPD)
                      </h4>
                      <p className="text-sm">
                        Vous pouvez demander la correction de données inexactes ou incomplètes.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900">
                        🗑️ Droit à l'effacement / "droit à l'oubli" (article 17 RGPD)
                      </h4>
                      <p className="text-sm">
                        Vous pouvez demander la suppression de vos données,{' '}
                        <strong>sauf</strong> lorsque leur conservation est nécessaire au
                        respect d'obligations légales (ex : dossier médical) ou à la défense de
                        droits en justice.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900">
                        🔒 Droit à la limitation du traitement (article 18 RGPD)
                      </h4>
                      <p className="text-sm">
                        Vous pouvez demander le gel temporaire du traitement de vos données dans
                        certaines conditions.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900">
                        📦 Droit à la portabilité (article 20 RGPD)
                      </h4>
                      <p className="text-sm">
                        Vous pouvez recevoir vos données dans un format structuré et lisible par
                        machine, et les transmettre à un autre responsable de traitement.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900">
                        ⛔ Droit d'opposition (article 21 RGPD)
                      </h4>
                      <p className="text-sm">
                        Vous pouvez vous opposer au traitement de vos données pour des raisons
                        tenant à votre situation particulière.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900">
                        ↩️ Droit de retirer votre consentement
                      </h4>
                      <p className="text-sm">
                        Lorsque le traitement repose sur votre consentement, vous pouvez le
                        retirer à tout moment.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      📧 Comment exercer vos droits ?
                    </h4>
                    <p className="text-sm mb-2">
                      Pour exercer l'un de ces droits, contactez-moi :
                    </p>
                    <ul className="list-none text-sm space-y-1">
                      <li>
                        <strong>Par email :</strong>{' '}
                        <a
                          href={`mailto:${siteConfig.professional.email}`}
                          className="text-primary-500 hover:text-primary-600 underline"
                        >
                          {siteConfig.professional.email}
                        </a>
                      </li>
                      <li>
                        <strong>Par courrier :</strong> {siteConfig.professional.address.street}
                        , {siteConfig.professional.address.postalCode}{' '}
                        <ProspectCity fallback={siteConfig.professional.address.city} />
                      </li>
                    </ul>
                    <p className="text-xs text-neutral-600 mt-3">
                      Une pièce d'identité pourra vous être demandée pour vérifier votre identité.
                      Vous recevrez une réponse dans un délai maximum d'<strong>1 mois</strong>.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Réclamation CNIL */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  9. Droit de réclamation auprès de la CNIL
                </h2>
                <div className="space-y-3 text-neutral-700">
                  <p>
                    Si vous estimez que vos droits ne sont pas respectés, vous avez le droit
                    d'introduire une réclamation auprès de l'autorité de contrôle compétente :
                  </p>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold mb-2">
                      Commission Nationale de l'Informatique et des Libertés (CNIL)
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>Adresse : 3 Place de Fontenoy - TSA 80715 - 75334 Paris Cedex 07</li>
                      <li>Téléphone : 01 53 73 22 22</li>
                      <li>
                        Site web :{' '}
                        <a
                          href="https://www.cnil.fr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-500 hover:text-primary-600 underline"
                        >
                          www.cnil.fr
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Secret professionnel */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  10. Secret professionnel et confidentialité
                </h2>
                <div className="space-y-3 text-neutral-700">
                  <p>
                    En tant que psychologue, je suis soumise au <strong>secret professionnel</strong>{' '}
                    (article 226-13 du Code pénal) et au <strong>Code de déontologie des
                    psychologues</strong>.
                  </p>
                  <p>
                    Cela signifie que :
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Tous nos échanges sont <strong>strictement confidentiels</strong>
                    </li>
                    <li>
                      Je ne peux divulguer aucune information vous concernant sans votre accord
                      explicite
                    </li>
                    <li>
                      Le secret professionnel s'applique même après la fin de notre relation
                      thérapeutique
                    </li>
                    <li>
                      Les seules exceptions légales concernent : la protection de l'intégrité
                      physique en cas de danger grave et imminent, ou sur réquisition judiciaire
                    </li>
                  </ul>
                </div>
              </Card>

              {/* Cookies */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  11. Cookies et technologies similaires
                </h2>
                <div className="space-y-3 text-neutral-700">
                  <p>
                    Ce site utilise uniquement des cookies techniques strictement nécessaires à
                    son fonctionnement (navigation, sécurité).
                  </p>
                  <p>
                    <strong>Aucun cookie publicitaire, analytique ou de traçage</strong> n'est
                    utilisé. Vos données de navigation ne sont ni collectées ni analysées.
                  </p>
                </div>
              </Card>

              {/* Modifications */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  12. Modifications de la politique de confidentialité
                </h2>
                <p className="text-neutral-700">
                  Cette politique de confidentialité peut être mise à jour. Toute modification
                  sera publiée sur cette page avec la date de mise à jour. Je vous encourage à
                  consulter régulièrement cette page.
                </p>
                <p className="text-sm text-neutral-600 mt-4">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                </p>
              </Card>

              {/* Contact */}
              <Card>
                <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  13. Contact
                </h2>
                <p className="text-neutral-700 mb-4">
                  Pour toute question concernant cette politique de confidentialité ou vos
                  données personnelles :
                </p>
                <ul className="list-none space-y-2 text-neutral-700">
                  <li>
                    <strong>Email :</strong>{' '}
                    <a
                      href={`mailto:${siteConfig.professional.email}`}
                      className="text-primary-500 hover:text-primary-600 underline"
                    >
                      {siteConfig.professional.email}
                    </a>
                  </li>
                  <li>
                    <strong>Téléphone :</strong>{' '}
                    <a
                      href={`tel:${siteConfig.professional.phone.replace(/\s/g, '')}`}
                      className="text-primary-500 hover:text-primary-600 underline"
                    >
                      {siteConfig.professional.phone}
                    </a>
                  </li>
                  <li>
                    <strong>Courrier :</strong> {siteConfig.professional.address.street},{' '}
                    {siteConfig.professional.address.postalCode}{' '}
                    <ProspectCity fallback={siteConfig.professional.address.city} />
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
