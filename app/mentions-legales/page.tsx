/**
 * Page Mentions légales
 * Obligatoire pour tout site professionnel
 */

import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import Card from '@/components/Card'
import { generateMetadata as generatePageMetadata, siteConfig } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Mentions légales',
  description: 'Mentions légales du cabinet de psychologie Dr. Sophie Martin à Lyon.',
  path: '/mentions-legales',
})

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[{ label: 'Accueil', href: '/' }, { label: 'Mentions légales' }]}
          />

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mt-6">
            Mentions légales
          </h1>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Éditeur du site */}
            <Card className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                1. Éditeur du site
              </h2>
              <div className="space-y-2 text-neutral-700">
                <p>
                  <strong>Nom :</strong> {siteConfig.professional.name}
                </p>
                <p>
                  <strong>Profession :</strong> Psychologue Clinicienne
                </p>
                <p>
                  <strong>Numéro ADELI :</strong> {siteConfig.professional.adeli}
                </p>
                <p>
                  <strong>SIRET :</strong> {siteConfig.professional.siret}
                </p>
                <p>
                  <strong>Adresse professionnelle :</strong>
                  <br />
                  {siteConfig.professional.address.street}
                  <br />
                  {siteConfig.professional.address.postalCode}{' '}
                  {siteConfig.professional.address.city}
                </p>
                <p>
                  <strong>Téléphone :</strong>{' '}
                  <a
                    href={`tel:${siteConfig.professional.phone.replace(/\s/g, '')}`}
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    {siteConfig.professional.phone}
                  </a>
                </p>
                <p>
                  <strong>Email :</strong>{' '}
                  <a
                    href={`mailto:${siteConfig.professional.email}`}
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    {siteConfig.professional.email}
                  </a>
                </p>
              </div>
            </Card>

            {/* Directeur de publication */}
            <Card className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                2. Directeur de publication
              </h2>
              <p className="text-neutral-700">
                Le directeur de la publication du site est {siteConfig.professional.name}.
              </p>
            </Card>

            {/* Hébergement */}
            <Card className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                3. Hébergement du site
              </h2>
              <div className="space-y-2 text-neutral-700">
                <p>
                  <strong>Hébergeur :</strong> [NOM DE L'HÉBERGEUR À REMPLIR]
                </p>
                <p>
                  <strong>Adresse :</strong> [ADRESSE DE L'HÉBERGEUR À REMPLIR]
                </p>
                <p>
                  <strong>Site web :</strong> [URL DE L'HÉBERGEUR À REMPLIR]
                </p>
                <p className="text-sm text-neutral-600 mt-4">
                  Exemples d'hébergeurs couramment utilisés : Vercel (vercel.com), Netlify
                  (netlify.com), OVH (ovhcloud.com), etc.
                </p>
              </div>
            </Card>

            {/* Inscription professionnelle */}
            <Card className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                4. Inscription professionnelle
              </h2>
              <div className="space-y-2 text-neutral-700">
                <p>
                  {siteConfig.professional.name} est psychologue clinicienne, inscrite au
                  répertoire ADELI sous le numéro {siteConfig.professional.adeli}.
                </p>
                <p>
                  L'exercice de la profession de psychologue est réglementé par :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Loi n°85-772 du 25 juillet 1985 portant sur le titre de psychologue
                  </li>
                  <li>
                    Décret n°90-255 du 22 mars 1990 fixant la liste des diplômes permettant de
                    faire usage professionnel du titre de psychologue
                  </li>
                  <li>
                    Code de déontologie des psychologues (actualisé en février 2012)
                  </li>
                </ul>
                <p className="mt-4">
                  <strong>Autorité de tutelle :</strong> Agence Régionale de Santé (ARS)
                  Auvergne-Rhône-Alpes
                </p>
              </div>
            </Card>

            {/* Propriété intellectuelle */}
            <Card className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                5. Propriété intellectuelle
              </h2>
              <div className="space-y-3 text-neutral-700">
                <p>
                  L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes,
                  etc.) est la propriété exclusive de {siteConfig.professional.name}, à
                  l'exception des marques, logos ou contenus appartenant à d'autres sociétés
                  partenaires ou auteurs.
                </p>
                <p>
                  Toute reproduction, distribution, modification, adaptation, retransmission ou
                  publication de ces différents éléments est strictement interdite sans l'accord
                  exprès par écrit de {siteConfig.professional.name}.
                </p>
                <p>
                  Cette représentation ou reproduction, par quelque procédé que ce soit,
                  constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du
                  Code de la propriété intellectuelle.
                </p>
              </div>
            </Card>

            {/* Données personnelles */}
            <Card className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                6. Protection des données personnelles
              </h2>
              <p className="text-neutral-700">
                Pour toute information concernant le traitement de vos données personnelles et
                vos droits en la matière, veuillez consulter notre{' '}
                <Link
                  href="/politique-confidentialite"
                  className="text-primary-500 hover:text-primary-600 underline font-medium"
                >
                  Politique de confidentialité et RGPD
                </Link>
                .
              </p>
            </Card>

            {/* Cookies */}
            <Card className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                7. Cookies
              </h2>
              <div className="space-y-3 text-neutral-700">
                <p>
                  Ce site utilise uniquement des cookies techniques strictement nécessaires à
                  son fonctionnement (navigation, sécurité). Aucun cookie publicitaire ou de
                  traçage n'est utilisé.
                </p>
                <p>
                  Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre
                  navigateur. Cela peut cependant affecter le bon fonctionnement du site.
                </p>
              </div>
            </Card>

            {/* Responsabilité */}
            <Card className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                8. Limitation de responsabilité
              </h2>
              <div className="space-y-3 text-neutral-700">
                <p>
                  {siteConfig.professional.name} s'efforce de fournir sur le site des
                  informations aussi précises que possible. Toutefois, elle ne pourra être tenue
                  responsable des oublis, inexactitudes ou carences dans la mise à jour,
                  qu'elles soient de son fait ou du fait des tiers partenaires qui lui
                  fournissent ces informations.
                </p>
                <p>
                  Les informations fournies sur ce site le sont à titre informatif et ne se
                  substituent en aucun cas à une consultation médicale ou psychologique
                  personnalisée.
                </p>
                <p>
                  {siteConfig.professional.name} ne pourra être tenue responsable en cas de
                  force majeure ou du fait imprévisible et insurmontable d'un tiers.
                </p>
              </div>
            </Card>

            {/* Liens hypertextes */}
            <Card className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                9. Liens hypertextes
              </h2>
              <div className="space-y-3 text-neutral-700">
                <p>
                  Le site peut contenir des liens vers d'autres sites web. {siteConfig.professional.name}{' '}
                  n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à
                  leur contenu.
                </p>
                <p>
                  La mise en place de liens hypertextes vers le présent site nécessite
                  l'autorisation préalable et écrite de {siteConfig.professional.name}.
                </p>
              </div>
            </Card>

            {/* Droit applicable */}
            <Card className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                10. Droit applicable et juridiction compétente
              </h2>
              <div className="space-y-3 text-neutral-700">
                <p>
                  Les présentes mentions légales sont régies par le droit français.
                </p>
                <p>
                  En cas de litige et à défaut d'accord amiable, le différend sera porté devant
                  les tribunaux français conformément aux règles de compétence en vigueur.
                </p>
              </div>
            </Card>

            {/* Contact */}
            <Card>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                11. Contact
              </h2>
              <p className="text-neutral-700">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter
                :
              </p>
              <ul className="list-none space-y-2 mt-4 text-neutral-700">
                <li>
                  <strong>Par téléphone :</strong>{' '}
                  <a
                    href={`tel:${siteConfig.professional.phone.replace(/\s/g, '')}`}
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    {siteConfig.professional.phone}
                  </a>
                </li>
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
                  <strong>Par courrier :</strong>
                  <br />
                  {siteConfig.professional.name}
                  <br />
                  {siteConfig.professional.address.street}
                  <br />
                  {siteConfig.professional.address.postalCode}{' '}
                  {siteConfig.professional.address.city}
                </li>
              </ul>
            </Card>

            <p className="text-sm text-neutral-600 mt-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
