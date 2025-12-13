/**
 * API Route pour gérer les soumissions du formulaire de contact
 * POST /api/contact
 */

import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation'
import { sendContactEmail, sendConfirmationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    // Récupération des données du formulaire
    const body = await request.json()

    // Validation des données avec Zod
    const validationResult = contactFormSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Données invalides',
          details: validationResult.error.flatten(),
        },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Vérification du honeypot (anti-spam)
    if (data.website) {
      // Si le champ honeypot est rempli, c'est probablement un bot
      // On retourne un succès pour ne pas révéler l'existence du honeypot
      return NextResponse.json({ success: true })
    }

    // Rate limiting basique (optionnel mais recommandé)
    // En production, utiliser une solution plus robuste comme Upstash Rate Limit

    // Envoi de l'email au psychologue
    await sendContactEmail(data)

    // Envoi optionnel d'un email de confirmation au patient
    // Décommenter si souhaité :
    // await sendConfirmationEmail(data)

    return NextResponse.json(
      {
        success: true,
        message: 'Votre demande a bien été envoyée.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur dans l\'API contact:', error)

    return NextResponse.json(
      {
        error: 'Une erreur est survenue lors de l\'envoi de votre message.',
      },
      { status: 500 }
    )
  }
}

// Méthodes HTTP non autorisées
export async function GET() {
  return NextResponse.json(
    { error: 'Méthode non autorisée' },
    { status: 405 }
  )
}
