/**
 * Composant Card réutilisable
 */

import React from 'react'
import clsx from 'clsx'

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
  as?: React.ElementType
}

export default function Card({
  children,
  className,
  hover = false,
  padding = 'md',
  as: Component = 'div',
}: CardProps) {
  return (
    <Component
      className={clsx(
        'bg-white rounded-xl shadow-soft transition-shadow duration-200',
        {
          'hover:shadow-medium': hover,
          'p-4': padding === 'sm',
          'p-6': padding === 'md',
          'p-8': padding === 'lg',
        },
        className
      )}
    >
      {children}
    </Component>
  )
}
