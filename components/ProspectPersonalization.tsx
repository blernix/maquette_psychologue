'use client'

/**
 * Personnalisation de la maquette à partir des paramètres d'URL.
 *
 * Le site est exporté en statique (`output: 'export'`), donc `searchParams`
 * n'est pas disponible au rendu serveur. On lit donc les paramètres côté
 * client, après hydratation. Sans paramètre, le contenu actuel (praticien
 * fictif) est conservé à l'identique.
 *
 * Paramètres reconnus : `nom`, `ville`, `prenom`, `email`, `adresse`,
 * `code_postal`.
 * Le paramètre `src` (campagne) est volontairement ignoré et laissé dans l'URL.
 *
 * Sécurité : chaque valeur est nettoyée (trim + troncature à 60 caractères) et
 * n'est jamais injectée comme HTML (rendu texte uniquement, React échappe).
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/seo'

export interface ProspectIdentity {
  nom: string | null
  ville: string | null
  prenom: string | null
  email: string | null
  adresse: string | null
  code_postal: string | null
  /** Vrai dès qu'au moins un paramètre reconnu est fourni dans l'URL. */
  active: boolean
}

/** Valeur affichée tant qu'aucun paramètre n'est fourni. */
export const PROSPECT_NAME_FALLBACK = 'Dr. Sophie Martin'
export const PROSPECT_CITY_FALLBACK = 'Lyon'

/** Longueur maximale acceptée pour chaque valeur. */
const MAX_LENGTH = 60

const EMPTY_IDENTITY: ProspectIdentity = {
  nom: null,
  ville: null,
  prenom: null,
  email: null,
  adresse: null,
  code_postal: null,
  active: false,
}

/**
 * Nettoie une valeur d'URL : trim puis troncature à 60 caractères.
 * Renvoie `null` si la valeur est absente ou vide.
 */
function sanitize(value: string | null): string | null {
  if (!value) return null
  const trimmed = value.trim()
  if (!trimmed) return null
  return trimmed.slice(0, MAX_LENGTH)
}

function replaceAll(input: string, search: string, replacement: string): string {
  if (!search) return input
  return input.split(search).join(replacement)
}

/**
 * Lit l'identité du prospect depuis l'URL, côté client.
 * Renvoie l'identité vide avant hydratation.
 */
export function useProspectIdentity(): ProspectIdentity {
  const [identity, setIdentity] = useState<ProspectIdentity>(EMPTY_IDENTITY)

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const next = {
        nom: sanitize(params.get('nom')),
        ville: sanitize(params.get('ville')),
        prenom: sanitize(params.get('prenom')),
        email: sanitize(params.get('email')),
        adresse: sanitize(params.get('adresse')),
        code_postal: sanitize(params.get('code_postal')),
      }
      const active = Object.values(next).some((value) => value !== null)
      if (active) {
        setIdentity({ ...next, active: true })
      }
    } catch {
      // URLSearchParams indisponible : on garde l'identité par défaut.
    }
  }, [])

  return identity
}

export interface ProspectTextProps {
  /** Texte affiché tant qu'aucun paramètre n'est fourni. */
  fallback?: string
}

/**
 * Affiche le nom du prospect (`nom`), sinon le nom fictif.
 */
export function ProspectName({ fallback = PROSPECT_NAME_FALLBACK }: ProspectTextProps) {
  const { nom } = useProspectIdentity()
  return <>{nom ?? fallback}</>
}

/**
 * Affiche la ville du prospect (`ville`), sinon la ville fictive.
 */
export function ProspectCity({ fallback = PROSPECT_CITY_FALLBACK }: ProspectTextProps) {
  const { ville } = useProspectIdentity()
  return <>{ville ?? fallback}</>
}

/**
 * Affiche l'adresse postale du prospect (`adresse`), sinon l'adresse fictive.
 */
export function ProspectStreet({ fallback }: { fallback: string }) {
  const { adresse } = useProspectIdentity()
  return <>{adresse ?? fallback}</>
}

/**
 * Affiche le code postal du prospect (`code_postal`), sinon le code fictif.
 */
export function ProspectPostal({ fallback }: { fallback: string }) {
  const { code_postal } = useProspectIdentity()
  return <>{code_postal ?? fallback}</>
}

/**
 * Adresse email du prospect.
 *
 * - `?email=` fourni : adresse affichée et cliquable (mailto).
 * - Aucun `?email=` mais page personnalisée : libellé neutre « Nous écrire »
 *   pointant vers le formulaire de contact, jamais d'adresse inventée.
 * - Aucun paramètre : adresse de démonstration d'origine, contenu intact.
 */
export function ProspectEmail({ className }: { className?: string }) {
  const identity = useProspectIdentity()

  if (identity.email) {
    return (
      <a href={`mailto:${identity.email}`} className={className} data-prospect-email="">
        {identity.email}
      </a>
    )
  }

  if (identity.active) {
    return (
      <Link href="/prendre-rendez-vous" className={className} data-prospect-email="neutral">
        Nous écrire
      </Link>
    )
  }

  return (
    <a
      href={`mailto:${siteConfig.professional.email}`}
      className={className}
      data-prospect-email="fallback"
    >
      {siteConfig.professional.email}
    </a>
  )
}

export interface ProspectImageProps {
  src: string
  /** Modèle d'attribut alt, avec les jetons `{nom}` et `{ville}`. */
  alt: string
  fallbackName?: string
  fallbackCity?: string
  className?: string
  loading?: 'eager' | 'lazy'
}

/**
 * Image dont l'attribut `alt` est personnalisé avec l'identité du prospect
 * (utile pour l'accessibilité et le SEO). Sans paramètre, le rendu est
 * strictement identique au contenu actuel.
 */
export function ProspectImage({
  src,
  alt,
  fallbackName = PROSPECT_NAME_FALLBACK,
  fallbackCity = PROSPECT_CITY_FALLBACK,
  className,
  loading,
}: ProspectImageProps) {
  const { nom, ville } = useProspectIdentity()
  const resolvedAlt = alt
    .split('{nom}')
    .join(nom ?? fallbackName)
    .split('{ville}')
    .join(ville ?? fallbackCity)

  return <img src={src} alt={resolvedAlt} className={className} loading={loading} />
}

const META_SELECTORS = [
  'meta[name="description"]',
  'meta[name="author"]',
  'meta[name="creator"]',
  'meta[name="publisher"]',
  'meta[name="keywords"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:site_name"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
]

/**
 * Remplace le nom et la ville fictifs dans un texte, sans jamais injecter de
 * HTML. Opération idempotente.
 */
function personalizeText(text: string, identity: ProspectIdentity): string {
  let result = text
  if (identity.nom) {
    result = replaceAll(result, PROSPECT_NAME_FALLBACK, identity.nom)
  }
  if (identity.ville) {
    result = replaceAll(result, PROSPECT_CITY_FALLBACK, identity.ville)
  }
  return result
}

/**
 * Met à jour `<title>`, les meta descriptions et les données structurées
 * côté client. Idempotent, réappliqué tant que le `<head>` change (Next.js
 * peut réinjecter les valeurs par défaut après l'hydratation).
 */
function applyIdentityToDocument(identity: ProspectIdentity) {
  if (typeof document === 'undefined') return

  const title = personalizeText(document.title, identity)
  // Le template de titre peut dupliquer le nom (ex. « Page | Nom | Nom ») :
  // on fusionne les segments identiques consécutifs.
  const segments = title.split(' | ')
  const nextTitle = segments
    .filter((segment, index) => segment !== segments[index - 1])
    .join(' | ')
  if (document.title !== nextTitle) {
    document.title = nextTitle
  }

  META_SELECTORS.forEach((selector) => {
    const element = document.querySelector<HTMLMetaElement>(selector)
    if (!element) return
    const content = element.getAttribute('content')
    if (!content) return
    const nextContent = personalizeText(content, identity)
    if (content !== nextContent) {
      element.setAttribute('content', nextContent)
    }
  })

  // Données structurées : on met à jour les scripts rendus par le serveur
  // plutôt que d'en régénérer (risque de doublon à l'hydratation).
  document
    .querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]')
    .forEach((schemaElement) => {
      if (!schemaElement.textContent) return
      try {
        const data = JSON.parse(schemaElement.textContent)
        if (identity.nom) data.name = identity.nom
        if (identity.email) {
          data.email = identity.email
        } else if (identity.active) {
          delete data.email
        }
        if (identity.active) {
          // L'URL/identifiant et l'image de démonstration contiennent le nom
          // du personnage fictif : on les retire en mode personnalisé.
          delete data.url
          delete data['@id']
          delete data.image
        }
        if (data.address) {
          if (identity.adresse) data.address.streetAddress = identity.adresse
          if (identity.ville) data.address.addressLocality = identity.ville
          if (identity.code_postal) data.address.postalCode = identity.code_postal
        }
        if (data.areaServed && identity.ville) {
          data.areaServed.name = identity.ville
        }
        const nextSchema = JSON.stringify(data)
        if (schemaElement.textContent !== nextSchema) {
          schemaElement.textContent = nextSchema
        }
      } catch {
        // JSON-LD illisible : on laisse le contenu d'origine.
      }
    })
}

/**
 * Composant sans rendu, à monter une seule fois. `usePathname` force la
 * réapplication à chaque navigation cliente.
 */
export default function ProspectPersonalization() {
  const identity = useProspectIdentity()
  const pathname = usePathname()

  useEffect(() => {
    if (!identity.active) return

    const apply = () => applyIdentityToDocument(identity)
    apply()

    const observer = new MutationObserver(apply)
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
    })
    const frame = window.requestAnimationFrame(apply)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
    }
  }, [identity, pathname])

  return null
}
