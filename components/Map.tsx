'use client'

/**
 * Composant Map pour afficher une carte Google Maps
 * Utilise un iframe pour une solution simple et accessible
 */

export interface MapProps {
  address: string
  title?: string
}

export default function Map({
  address,
  title = 'Localisation du cabinet',
}: MapProps) {
  // Encoder l'adresse pour l'URL
  const encodedAddress = encodeURIComponent(address)
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}`

  // URL pour ouvrir dans Google Maps
  const openInMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`

  return (
    <div className="rounded-xl overflow-hidden shadow-medium">
      <div className="relative w-full h-[400px]">
        {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={title}
            aria-label={`Carte montrant l'emplacement : ${address}`}
          />
        ) : (
          // Fallback si pas de clé API
          <div className="w-full h-full bg-neutral-100 flex flex-col items-center justify-center p-8 text-center">
            <svg
              className="w-16 h-16 text-neutral-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
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
            <p className="text-neutral-700 font-medium mb-2">{address}</p>
            <a
              href={openInMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded px-2 py-1"
            >
              Ouvrir dans Google Maps
            </a>
          </div>
        )}
      </div>

      {/* Lien pour ouvrir dans l'application Google Maps */}
      <div className="bg-neutral-50 px-6 py-4 border-t border-neutral-200">
        <a
          href={openInMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary-500 hover:text-primary-600 font-medium inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded px-2 py-1"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Ouvrir dans Google Maps
        </a>
      </div>
    </div>
  )
}
