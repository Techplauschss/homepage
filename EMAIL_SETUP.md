# E-Mail-Konfiguration für das Kontaktformular

## Setup

1. **Kopieren Sie die Umgebungsvariablen:**
   ```bash
   cp .env.example .env.local
   ```

2. **Konfigurieren Sie Ihre SMTP-Einstellungen in `.env.local`:**

### Für Gmail:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ihr-email@gmail.com
SMTP_PASS=ihr-app-passwort
```

**Gmail Setup:**
1. Aktivieren Sie die 2-Faktor-Authentifizierung für Ihr Google-Konto
2. Gehen Sie zu [Google App-Passwörter](https://myaccount.google.com/apppasswords)
3. Erstellen Sie ein neues App-Passwort für "Mail"
4. Verwenden Sie dieses App-Passwort in `SMTP_PASS`

### Für andere E-Mail-Provider:

**Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=ihr-email@outlook.com
SMTP_PASS=ihr-passwort
```

**Yahoo:**
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=ihr-email@yahoo.com
SMTP_PASS=ihr-app-passwort
```

**Eigener SMTP-Server:**
```env
SMTP_HOST=mail.ihre-domain.de
SMTP_PORT=587
SMTP_USER=ihr-email@ihre-domain.de
SMTP_PASS=ihr-passwort
```

## Funktionsweise

- Das Kontaktformular sendet Anfragen an die API-Route `/api/contact`
- Die API sendet zwei E-Mails:
  1. **An service@imagefilme-sauer.de:** Die eigentliche Projektanfrage
  2. **An den Absender:** Eine Bestätigungsmail

## Testing

Starten Sie den Entwicklungsserver:
```bash
npm run dev
```

Besuchen Sie die Seite und testen Sie das Kontaktformular im Abschnitt "Kontakt".

## Troubleshooting

- Stellen Sie sicher, dass alle Umgebungsvariablen korrekt gesetzt sind
- Bei Gmail: Verwenden Sie ein App-Passwort, nicht Ihr normales Passwort
- Überprüfen Sie die SMTP-Einstellungen Ihres E-Mail-Providers
- Schauen Sie in die Browser-Konsole und Server-Logs für Fehlermeldungen
