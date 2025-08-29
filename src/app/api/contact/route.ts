import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, project, message } = await request.json()

    // Validierung der erforderlichen Felder
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich' },
        { status: 400 }
      )
    }

    // E-Mail-Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: parseInt(process.env.SMTP_PORT || '587') === 465, // true für 465, false für 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Zusätzliche Optionen für Lima-City
      tls: {
        rejectUnauthorized: false // Weniger strenge SSL-Validierung
      },
      debug: true, // Debug-Modus aktivieren
      logger: true // Logging aktivieren
    })

    // Verbindung testen
    console.log('Teste SMTP-Verbindung...')
    await transporter.verify()
    console.log('SMTP-Verbindung erfolgreich!')

    // E-Mail-Inhalt zusammenstellen
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'service@imagefilme-sauer.de',
      subject: `Neue Projektanfrage von ${name}`,
      html: `
        <h2>Neue Projektanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        ${project ? `<p><strong>Projektart:</strong> ${project}</p>` : ''}
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Diese E-Mail wurde über das Kontaktformular auf imagefilme-sauer.de gesendet.</em></p>
      `,
    }

    // Bestätigungs-E-Mail an den Absender
    const confirmationMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Bestätigung Ihrer Projektanfrage - Imagefilme Sauer',
      html: `
        <h2>Vielen Dank für Ihre Anfrage!</h2>
        <p>Liebe/r ${name},</p>
        <p>vielen Dank für Ihr Interesse an unseren Dienstleistungen. Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
        
        <h3>Ihre Anfrage im Überblick:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        ${project ? `<p><strong>Projektart:</strong> ${project}</p>` : ''}
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <p>Mit freundlichen Grüßen<br>
        Ihr Team von Imagefilme Sauer</p>
        
        <hr>
        <p><em>Falls Sie diese E-Mail nicht erwartet haben, können Sie sie einfach ignorieren.</em></p>
      `,
    }

    // E-Mails versenden
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json(
      { message: 'E-Mail erfolgreich gesendet' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Detaillierter Fehler beim Senden der E-Mail:', error)
    
    // Mehr Details zum Fehler loggen
    if (error instanceof Error) {
      console.error('Fehler-Message:', error.message)
      console.error('Fehler-Stack:', error.stack)
    }
    
    return NextResponse.json(
      { 
        error: 'Fehler beim Senden der E-Mail', 
        details: error instanceof Error ? error.message : 'Unbekannter Fehler',
        smtp: {
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          user: process.env.SMTP_USER ? 'konfiguriert' : 'nicht konfiguriert'
        }
      },
      { status: 500 }
    )
  }
}
