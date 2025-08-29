import Navigation from '@/components/Navigation'
import Link from 'next/link'

export const metadata = {
  title: "Impressum | Imagefilme-Sauer",
  description: "Impressum und rechtliche Angaben von Imagefilme-Sauer",
}

export default function Impressum() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
            <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>
            
            <div className="text-gray-300 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="space-y-2">
                  <p><strong>Einzelunternehmen:</strong> Imagefilme-Sauer</p>
                  <p><strong>Inhaber:</strong> Martin Sauer</p>
                  <p><strong>Anschrift:</strong></p>
                  <p className="ml-4">
                    Clara-Zetkin-Str. 51<br />
                    01159 Dresden<br />
                    Deutschland
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Kontakt</h2>
                <div className="space-y-2">
                  <p><strong>Telefon:</strong> +49 151 53352436</p>
                  <p><strong>E-Mail:</strong> service@imagefilme-sauer.de</p>
                  <p><strong>Website:</strong> www.imagefilme-sauer.de</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Steuerliche Angaben</h2>
                <div className="space-y-2">
                  <p><strong>Umsatzsteuer-Identifikationsnummer:</strong> [Falls vorhanden: DE123456789]</p>
                  <p><strong>Steuernummer:</strong> [Ihre Steuernummer]</p>
                  <p><strong>Finanzamt:</strong> [Zuständiges Finanzamt]</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Berufliche Angaben</h2>
                <div className="space-y-2">
                  <p><strong>Berufsbezeichnung:</strong> Videofilmer / Medienproduzent</p>
                  <p><strong>Verliehen in:</strong> Deutschland</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <div className="space-y-2">
                  <p>Martin Sauer</p>
                  <p>
                    Clara-Zetkin-Str. 51<br />
                    01159 Dresden
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Haftungsausschluss</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Haftung für Inhalte</h3>
                    <p className="text-sm leading-relaxed">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                      allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                      unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                      Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Haftung für Links</h3>
                    <p className="text-sm leading-relaxed">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                      Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                      verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Urheberrecht</h3>
                    <p className="text-sm leading-relaxed">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                      Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                      Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Online-Streitbeilegung (OS)</h2>
                <p className="text-sm leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-400 hover:text-blue-300 ml-1 underline">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, 
                  an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-700">
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
