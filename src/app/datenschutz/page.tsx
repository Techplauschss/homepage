import Navigation from '@/components/Navigation'
import Link from 'next/link'

export const metadata = {
  title: "Datenschutzerklärung | Imagefilme-Sauer",
  description: "Datenschutzerklärung und Informationen zum Umgang mit personenbezogenen Daten",
}

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
            <h1 className="text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>
            
            <div className="text-gray-300 space-y-8">
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Allgemeine Hinweise</h3>
                  <p className="text-sm leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                    passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                    persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
                    Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-white mt-6">Datenerfassung auf dieser Website</h3>
                  <p className="text-sm leading-relaxed">
                    <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                    können Sie dem Impressum dieser Website entnehmen.
                  </p>
                  
                  <p className="text-sm leading-relaxed">
                    <strong>Wie erfassen wir Ihre Daten?</strong><br />
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                    z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch 
                    oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor 
                    allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                  
                  <p className="text-sm leading-relaxed">
                    <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                    Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                  
                  <p className="text-sm leading-relaxed">
                    <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                    oder Löschung dieser Daten zu verlangen.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Hosting</h2>
                <p className="text-sm leading-relaxed">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                
                <h3 className="text-lg font-semibold text-white mt-4">Externes Hosting</h3>
                <p className="text-sm leading-relaxed">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                  werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
                  Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe 
                  und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und 
                  bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und 
                  effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <h3 className="text-lg font-semibold text-white">Datenschutz</h3>
                <p className="text-sm leading-relaxed">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                  personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie 
                  dieser Datenschutzerklärung.
                </p>
                
                <h3 className="text-lg font-semibold text-white mt-6">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-sm leading-relaxed">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-gray-700 p-4 rounded-lg mt-2">
                  <p className="text-sm">
                    Martin Sauer<br />
                    Imagefilme-Sauer<br />
                    Clara-Zetkin-Str. 51<br />
                    01159 Dresden<br />
                    Deutschland<br /><br />
                    Telefon: +49 151 53352436<br />
                    E-Mail: service@imagefilme-sauer.de
                  </p>
                </div>
                
                <h3 className="text-lg font-semibold text-white mt-6">Speicherdauer</h3>
                <p className="text-sm leading-relaxed">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
                  Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
                  berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, 
                  werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung 
                  Ihrer personenbezogenen Daten haben.
                </p>
                
                <h3 className="text-lg font-semibold text-white mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="text-sm leading-relaxed">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
                  eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
                  erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
                
                <h3 className="text-lg font-semibold text-white mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                <p className="text-sm leading-relaxed">
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                  Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres 
                  Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet 
                  anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-lg font-semibold text-white">Server-Log-Dateien</h3>
                <p className="text-sm leading-relaxed">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside text-sm leading-relaxed mt-2 ml-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-sm leading-relaxed mt-2">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung 
                  dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein 
                  berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
                </p>
                
                <h3 className="text-lg font-semibold text-white mt-6">Kontaktformular</h3>
                <p className="text-sm leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre 
                  Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher 
                  Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten 
                  Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung 
                  auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung 
                  entfällt. Zwingende gesetzliche Bestimmungen bleiben unberührt.
                </p>
                
                <h3 className="text-lg font-semibold text-white mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="text-sm leading-relaxed">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus 
                  hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei 
                  uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Ihre Rechte</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Recht auf Auskunft</h3>
                    <p className="text-sm leading-relaxed">
                      Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden 
                      und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend 
                      den gesetzlichen Bestimmungen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white">Recht auf Berichtigung</h3>
                    <p className="text-sm leading-relaxed">
                      Sie haben entsprechend den gesetzlichen Bestimmungen das Recht, die Vervollständigung der Sie 
                      betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white">Recht auf Löschung und Einschränkung der Verarbeitung</h3>
                    <p className="text-sm leading-relaxed">
                      Sie haben nach Maßgabe der gesetzlichen Bestimmungen das Recht, zu verlangen, dass Sie betreffende 
                      Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Bestimmungen eine 
                      Einschränkung der Verarbeitung der Daten zu verlangen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white">Recht auf Datenübertragbarkeit</h3>
                    <p className="text-sm leading-relaxed">
                      Sie haben das Recht, Sie betreffende Daten, die Sie uns zur Verfügung gestellt haben, nach Maßgabe 
                      der gesetzlichen Bestimmungen in einem strukturierten, gängigen und maschinenlesbaren Format zu 
                      erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
                <p className="text-sm leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum 
                  Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. 
                  TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des 
                  Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, 
                  nicht von Dritten mitgelesen werden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Kontakt</h2>
                <p className="text-sm leading-relaxed">
                  Bei Fragen zum Datenschutz, zur Ausübung Ihrer Rechte oder Beschwerden können Sie sich jederzeit an 
                  uns wenden:
                </p>
                <div className="bg-gray-700 p-4 rounded-lg mt-2">
                  <p className="text-sm">
                    Martin Sauer<br />
                    Imagefilme-Sauer<br />
                    Clara-Zetkin-Str. 51<br />
                    01159 Dresden<br />
                    Deutschland<br /><br />
                    Telefon: +49 151 53352436<br />
                    E-Mail: service@imagefilme-sauer.de
                  </p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-700 text-sm text-gray-400">
                <p>Stand: August 2025</p>
              </div>

              <div className="mt-8">
                <Link 
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Zurück zur Startseite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
