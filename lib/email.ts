/**
 * Service d'envoi d'emails avec Nodemailer
 */

import nodemailer from 'nodemailer'
import type { ContactFormData } from './validation'

// Configuration du transporteur SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465', // true pour le port 465, false pour les autres
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

/**
 * Envoie un email de demande de contact au psychologue
 */
export async function sendContactEmail(data: ContactFormData) {
  const consultationTypes = {
    'première-consultation': 'Première consultation',
    'suivi-adulte': 'Suivi adulte',
    'enfant-adolescent': 'Enfant / Adolescent',
    'couple': 'Thérapie de couple',
    'autre': 'Autre',
  }

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #2D3748;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #4A90E2 0%, #7EC4B6 100%);
          color: white;
          padding: 30px;
          border-radius: 8px 8px 0 0;
          text-align: center;
        }
        .content {
          background: #ffffff;
          padding: 30px;
          border: 1px solid #E7E5E4;
          border-top: none;
        }
        .field {
          margin-bottom: 20px;
        }
        .field-label {
          font-weight: 600;
          color: #44403C;
          margin-bottom: 5px;
        }
        .field-value {
          color: #2D3748;
          padding: 10px;
          background: #F5F5F4;
          border-radius: 4px;
        }
        .message-box {
          background: #F5F5F4;
          padding: 15px;
          border-radius: 4px;
          border-left: 4px solid #4A90E2;
          margin-top: 10px;
        }
        .footer {
          background: #F5F5F4;
          padding: 20px;
          border-radius: 0 0 8px 8px;
          text-align: center;
          font-size: 12px;
          color: #78716C;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 style="margin: 0;">Nouvelle demande de contact</h1>
        <p style="margin: 10px 0 0 0;">Via le formulaire du site web</p>
      </div>

      <div class="content">
        <div class="field">
          <div class="field-label">Nom complet :</div>
          <div class="field-value">${data.firstName} ${data.lastName}</div>
        </div>

        <div class="field">
          <div class="field-label">Email :</div>
          <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
        </div>

        <div class="field">
          <div class="field-label">Téléphone :</div>
          <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
        </div>

        <div class="field">
          <div class="field-label">Type de consultation :</div>
          <div class="field-value">${consultationTypes[data.consultationType]}</div>
        </div>

        <div class="field">
          <div class="field-label">Message :</div>
          <div class="message-box">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>
      </div>

      <div class="footer">
        <p>Ce message a été envoyé depuis le formulaire de contact de votre site web.</p>
        <p>Date : ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</p>
        <p style="margin-top: 15px;">
          <strong>Rappel RGPD :</strong> Ces informations sont confidentielles et doivent être traitées conformément au RGPD.
        </p>
      </div>
    </body>
    </html>
  `

  const emailText = `
Nouvelle demande de contact

Nom complet : ${data.firstName} ${data.lastName}
Email : ${data.email}
Téléphone : ${data.phone}
Type de consultation : ${consultationTypes[data.consultationType]}

Message :
${data.message}

---
Date : ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}
Ce message a été envoyé depuis le formulaire de contact de votre site web.
  `

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouvelle demande de contact - ${data.firstName} ${data.lastName}`,
      text: emailText,
      html: emailHtml,
      replyTo: data.email,
    })

    return { success: true }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    throw new Error('Erreur lors de l\'envoi de l\'email')
  }
}

/**
 * Envoie un email de confirmation au patient (optionnel)
 */
export async function sendConfirmationEmail(data: ContactFormData) {
  const emailHtml = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #2D3748;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #4A90E2 0%, #7EC4B6 100%);
          color: white;
          padding: 30px;
          border-radius: 8px 8px 0 0;
          text-align: center;
        }
        .content {
          background: #ffffff;
          padding: 30px;
          border: 1px solid #E7E5E4;
          border-top: none;
        }
        .footer {
          background: #F5F5F4;
          padding: 20px;
          border-radius: 0 0 8px 8px;
          text-align: center;
          font-size: 12px;
          color: #78716C;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 style="margin: 0;">Demande de contact bien reçue</h1>
      </div>

      <div class="content">
        <p>Bonjour ${data.firstName},</p>

        <p>Votre demande de contact a bien été reçue. Je vous remercie pour votre confiance.</p>

        <p>Je reviendrai vers vous dans les plus brefs délais, généralement sous 24 à 48 heures, pour convenir d'un rendez-vous.</p>

        <p>En attendant, si vous avez des questions urgentes, n'hésitez pas à me contacter directement par téléphone.</p>

        <p style="margin-top: 30px;">Cordialement,<br><strong>Dr. Sophie Martin</strong><br>Psychologue Clinicienne</p>
      </div>

      <div class="footer">
        <p>
          <strong>Dr. Sophie Martin</strong> | Psychologue Clinicienne<br>
          25 rue de la République, 69003 Lyon<br>
          Tél : 06 XX XX XX XX | Email : contact@sophiemartin-psy.fr
        </p>
      </div>
    </body>
    </html>
  `

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: data.email,
      subject: 'Confirmation de votre demande de contact',
      html: emailHtml,
    })

    return { success: true }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email de confirmation:', error)
    // On ne lance pas d'erreur car c'est un email secondaire
    return { success: false }
  }
}
