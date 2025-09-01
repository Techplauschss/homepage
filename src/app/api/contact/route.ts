import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, project, message } = await request.json()

    // Validierung der erforderlichen Felder
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich.' },
        { status: 400 }
      )
    }

    // E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      )
    }

    // Nodemailer Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.lima-city.de',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true für 465, false für andere Ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Zusätzliche Optionen für Lima-City
      tls: {
        rejectUnauthorized: false
      }
    })

    // E-Mail-Inhalt zusammenstellen
    const projectText = project ? `Projektart: ${project}` : ''
    const companyText = company ? `Unternehmen: ${company}` : ''
    const phoneText = phone ? `Telefon: ${phone}` : ''

    const emailBody = `
Neue Kontaktanfrage von Ihrer Website:

Name: ${name}
E-Mail: ${email}
${companyText}
${phoneText}
${projectText}

Nachricht:
${message}

---
Diese Nachricht wurde über das Kontaktformular auf Ihrer Website gesendet.
    `.trim()

    // E-Mail senden
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'service@imagefilme-sauer.de',
      subject: `Projektanfrage von ${name}`,
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Neue Kontaktanfrage</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Telefon:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            ${project ? `<p><strong>Projektart:</strong> ${project}</p>` : ''}
          </div>
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0;">Nachricht:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #e0f2fe; border-radius: 8px; font-size: 12px; color: #0369a1;">
            Diese Nachricht wurde über das Kontaktformular auf Ihrer Website gesendet.
          </div>
        </div>
      `,
    })

    // Bestätigungs-E-Mail an den Sender
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Bestätigung Ihrer Anfrage - Imagefilme Sauer',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Vielen Dank für Ihre Anfrage!</h2>
          <p>Hallo ${name},</p>
          <p>vielen Dank für Ihr Interesse an meinen Dienstleistungen. Ich habe Ihre Anfrage erhalten und werde mich so schnell wie möglich bei Ihnen melden.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Ihre Anfrage im Überblick:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
            ${project ? `<p><strong>Projektart:</strong> ${project}</p>` : ''}
            <div style="margin-top: 15px;">
              <strong>Ihre Nachricht:</strong>
              <p style="white-space: pre-line; margin-top: 5px;">${message}</p>
            </div>
          </div>

          <p>In der Regel antworte ich innerhalb von 24 Stunden. Falls Sie dringende Fragen haben, können Sie mich auch direkt unter +49 151 53352436 erreichen.</p>
          
          <p>Mit freundlichen Grüßen<br>
          Martin Sauer<br>
          Imagefilme-Sauer</p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f1f5f9; border-radius: 8px; font-size: 12px; color: #64748b;">
            <p style="margin: 0;"><strong>Kontakt:</strong></p>
            <p style="margin: 5px 0;">E-Mail: service@imagefilme-sauer.de</p>
            <p style="margin: 5px 0;">Telefon: +49 151 53352436</p>
            <p style="margin: 5px 0;">Adresse: Clara-Zetkin-Str. 51, 01159 Dresden</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Ihre Nachricht wurde erfolgreich gesendet!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error)
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}
