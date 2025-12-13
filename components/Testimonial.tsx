/**
 * Composant Testimonial pour afficher un témoignage
 */

import Card from './Card'

export interface TestimonialProps {
  content: string
  author: string
  role?: string
  rating?: number
}

export default function Testimonial({
  content,
  author,
  role,
  rating = 5,
}: TestimonialProps) {
  return (
    <Card hover className="h-full flex flex-col">
      {/* Étoiles de notation */}
      {rating && (
        <div className="flex gap-1 mb-4" aria-label={`Note : ${rating} sur 5`}>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'text-accent-500' : 'text-neutral-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      {/* Guillemets décoratifs */}
      <svg
        className="w-8 h-8 text-primary-200 mb-3"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Contenu du témoignage */}
      <blockquote className="flex-1">
        <p className="text-neutral-700 leading-relaxed italic mb-4">
          {content}
        </p>
      </blockquote>

      {/* Auteur */}
      <footer className="mt-auto pt-4 border-t border-neutral-100">
        <cite className="not-italic">
          <p className="font-semibold text-neutral-900">{author}</p>
          {role && <p className="text-sm text-neutral-600">{role}</p>}
        </cite>
      </footer>
    </Card>
  )
}
