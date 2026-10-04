export type ProspectField =
  | 'nom'
  | 'ville'
  | 'prenom'
  | 'email'
  | 'adresse'
  | 'code_postal'
  | 'tel'
  | 'acces'

export interface ProspectIdentity {
  nom: string | null
  ville: string | null
  prenom: string | null
  email: string | null
  adresse: string | null
  code_postal: string | null
  tel: string | null
  acces: string | null
  /** Vrai dès qu'au moins un paramètre reconnu est fourni dans l'URL. */
  active: boolean
}

export interface ProspectContact {
  /** Vrai dès qu'un paramètre est fourni dans l'URL. */
  active: boolean
  /** Lignes d'adresse à afficher (déjà résolues, jamais inventées). */
  addressLines: string[]
  /** Adresse sur une seule ligne, pour la carte et schema.org. */
  addressOneLine: string | null
  showAddress: boolean
  /** Requête de recherche Google Maps, ou null s'il n'y a rien à situer. */
  mapHref: string | null
  /** Téléphone à afficher, ou null s'il doit être masqué. */
  phone: string | null
  phoneHref: string | null
  /** Accès (métro / bus / parking), ou null. */
  acces: string | null
}

/** Coordonnées de démonstration utilisées quand aucun paramètre n'est fourni. */
export interface ProspectDemoContact {
  street: string
  postalCode: string
  city: string
  phone: string
}

export const EMPTY_PROSPECT_IDENTITY: ProspectIdentity = {
  nom: null,
  ville: null,
  prenom: null,
  email: null,
  adresse: null,
  code_postal: null,
  tel: null,
  acces: null,
  active: false,
}

function mapsHref(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

/**
 * Résout les coordonnées affichables selon les paramètres d'URL.
 *
 * - Aucun paramètre : contenu de démonstration d'origine, intact.
 * - Page personnalisée : on n'invente jamais une adresse, un code postal ou un
 *   téléphone d'une autre ville. Adresse absente → ville seule ; ville absente
 *   aussi → bloc masqué. Téléphone / accès absents → masqués.
 */
export function resolveProspectContact(
  identity: ProspectIdentity,
  demo: ProspectDemoContact
): ProspectContact {
  const active = identity.active

  let addressLines: string[] = []
  let addressOneLine: string | null = null

  if (!active) {
    addressLines = [demo.street, `${demo.postalCode} ${demo.city}`]
    addressOneLine = `${demo.street}, ${demo.postalCode} ${demo.city}`
  } else {
    const locality = [identity.code_postal, identity.ville]
      .filter(Boolean)
      .join(' ')
    if (identity.adresse) {
      addressLines = [identity.adresse]
      if (locality) addressLines.push(locality)
      addressOneLine = [identity.adresse, locality].filter(Boolean).join(', ')
    } else if (identity.ville) {
      addressLines = [`Cabinet à ${identity.ville}`]
      addressOneLine = identity.ville
    }
  }

  const showAddress = addressLines.length > 0

  let mapHref: string | null = null
  if (!active) {
    if (addressOneLine) mapHref = mapsHref(addressOneLine)
  } else if (identity.adresse) {
    const query = [
      identity.adresse,
      [identity.code_postal, identity.ville].filter(Boolean).join(' '),
    ]
      .filter(Boolean)
      .join(', ')
    mapHref = mapsHref(query)
  } else if (identity.ville) {
    mapHref = mapsHref(identity.ville)
  }

  const phone = active ? identity.tel : demo.phone
  const phoneHref = phone ? `tel:${phone.replace(/\s/g, '')}` : null

  return {
    active,
    addressLines,
    addressOneLine,
    showAddress,
    mapHref,
    phone,
    phoneHref,
    acces: active ? identity.acces : null,
  }
}
