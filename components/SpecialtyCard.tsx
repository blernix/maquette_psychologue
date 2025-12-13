/**
 * Composant SpecialtyCard pour afficher une spécialité
 */

import Card from './Card'

export interface SpecialtyCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function SpecialtyCard({
  icon,
  title,
  description,
}: SpecialtyCardProps) {
  return (
    <Card hover className="text-center h-full flex flex-col">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
        {title}
      </h3>

      <p className="text-neutral-700 leading-relaxed flex-1">
        {description}
      </p>
    </Card>
  )
}
