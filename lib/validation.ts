/**
 * Schémas de validation avec Zod
 */

import { z } from 'zod'

// Schéma de validation pour le formulaire de contact
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(50, 'Le prénom ne peut pas dépasser 50 caractères'),

  lastName: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),

  email: z
    .string()
    .email('Veuillez entrer une adresse email valide')
    .toLowerCase(),

  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      'Veuillez entrer un numéro de téléphone français valide'
    ),

  consultationType: z.enum(
    [
      'première-consultation',
      'suivi-adulte',
      'enfant-adolescent',
      'couple',
      'autre',
    ],
    {
      required_error: 'Veuillez sélectionner un type de consultation',
    }
  ),

  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),

  rgpdConsent: z
    .boolean()
    .refine((val) => val === true, {
      message:
        'Vous devez accepter la politique de confidentialité pour continuer',
    }),

  // Honeypot pour anti-spam (champ caché)
  website: z.string().max(0).optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
