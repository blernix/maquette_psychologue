'use client'

/**
 * Personnalisation de la maquette à partir des paramètres d'URL.
 *
 * Le site est exporté en statique (`output: 'export'`), donc `searchParams`
 * n'est pas disponible au rendu serveur. On lit donc les paramètres côté
 * client, après hydratation. Sans paramètre, le contenu actuel (praticien
 * fictif) est conservé à l'identique.
 *
 * Paramètres reconnus : `nom`, `ville`, `prenom`.
 * Le paramètre `src` (campagne) est volontairement ignoré et laissé dans l'URL.
 *
 * Sécurité : chaque valeur est nettoyée (trim + troncature à 60 caractères) et
 * n'est jamais injectée comme HTML (rendu texte uniquement, React échappe).
 */

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export interface ProspectIdentity {
  nom: string | null
  ville: string | null
  prenom: string | null
}

/** Valeur affichée tant qu'aucun paramètre n'est fourni. */
export const PROSPECT_NAME_FALLBACK = 'Dr. Sophie Martin'
export const PROSPECT_CITY_FALLBACK = 'Lyon'

/** Longueur maximale acceptée pour chaque valeur. */
const MAX_LENGTH = 60

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

/**
 * Lit l'identité du prospect depuis l'URL, côté client.
 * Renvoie `{ nom: null, ville: null, prenom: null }` avant hydratation.
 */
export function useProspectIdentity(): ProspectIdentity {
  const [identity, setIdentity] = useState<ProspectIdentity>({
    nom: null,
    ville: null,
    prenom: null,
  })

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      setIdentity({
        nom: sanitize(params.get('nom')),
        ville: sanitize(params.get('ville')),
        prenom: sanitize(params.get('prenom')),
      })
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
 * Le rendu React échappe automatiquement le texte.
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
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
]

/**
 * Remplace le nom fictif par celui du prospect dans `<title>` et les meta
 * descriptions, sans jamais injecter de HTML. Opération idempotente.
 */
function applyIdentityToDocument(nom: string | null) {
  if (typeof document === 'undefined' || !nom) return

  const title = document.title.split(PROSPECT_NAME_FALLBACK).join(nom)
  // Le template de titre peut dupliquer le nom (ex. « Page | Nom | Nom ») :
  // on fusionne les segments identiques consécutifs.
  const segments = title.split(' | ')
  document.title = segments
    .filter((segment, index) => segment !== segments[index - 1])
    .join(' | ')

  META_SELECTORS.forEach((selector) => {
    const element = document.querySelector<HTMLMetaElement>(selector)
    if (!element) return
    const content = element.getAttribute('content')
    if (!content || !content.includes(PROSPECT_NAME_FALLBACK)) return
    element.setAttribute('content', content.split(PROSPECT_NAME_FALLBACK).join(nom))
  })
}

/**
 * Met à jour le `<title>` et les meta descriptions côté client quand un nom de
 * prospect est fourni. Composant sans rendu, à monter une seule fois.
 *
 * `usePathname` force la réapplication à chaque navigation cliente : Next.js
 * réécrit le `<head>` pour la nouvelle page, il faut donc re-personnaliser.
 */
export default function ProspectPersonalization() {
  const { nom } = useProspectIdentity()
  const pathname = usePathname()

  useEffect(() => {
    if (!nom) return

    applyIdentityToDocument(nom)
    // Next.js peut mettre à jour <head> juste après le commit : on réapplique
    // au frame suivant (opération idempotente).
    const frame = window.requestAnimationFrame(() => applyIdentityToDocument(nom))
    return () => window.cancelAnimationFrame(frame)
  }, [nom, pathname])

  return null
}
