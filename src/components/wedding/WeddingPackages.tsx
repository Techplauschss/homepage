'use client'

import FadeInUp from '@/components/FadeInUp'

interface Package {
  name: string
  description: string
  features: string[]
  highlighted?: boolean
}

const packages: Package[] = [
  {
    name: 'Standesamt',
    description: 'Für den kleinen, feinen Rahmen bei der standesamtlichen Trauung.',
    features: [
      'Begleitung der Trauung',
      'Porträt- & Paarfotos',
      'Bearbeitete Online-Galerie',
    ],
  },
  {
    name: 'Hochzeitstag',
    description: 'Von den Vorbereitungen bis zum Feiern – euer ganzer Tag.',
    features: [
      'Vorbereitung, Trauung & Feier',
      'Porträt-, Paar- & Gruppenfotos',
      'Bearbeitete Online-Galerie',
      'Persönliche Beratung im Vorfeld',
    ],
    highlighted: true,
  },
  {
    name: 'Individuell',
    description: 'Mehrtägige Feiern, freie Trauung oder besondere Wünsche.',
    features: [
      'Individuell zugeschnittener Ablauf',
      'Optional zusätzliche Fototermine',
      'Bearbeitete Online-Galerie',
      'Kombination mit Videoproduktion möglich',
    ],
  },
]

export default function WeddingPackages() {
  const scrollToContact = () => {
    const element = document.getElementById('wedding-contact')
    if (element) {
      const headerHeight = 40
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-stone-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeInUp>
          <div className="text-center mb-10 sm:mb-14">
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-rose-600 dark:text-rose-400 mb-3 font-medium">
              Leistungen
            </p>
            <h2 className="font-poppins text-2xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Passend zu eurem Tag
            </h2>
            <p className="text-sm sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
              Jede Hochzeit ist anders – deshalb bespreche ich den genauen Ablauf und die Preisgestaltung
              immer persönlich mit euch.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay="200">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col ${
                  pkg.highlighted
                    ? 'bg-stone-900 dark:bg-rose-950 text-white shadow-xl scale-100 sm:scale-105'
                    : 'bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-md'
                }`}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2">{pkg.name}</h3>
                <p className={`text-sm mb-6 leading-relaxed ${pkg.highlighted ? 'text-stone-300' : 'text-stone-500 dark:text-stone-400'}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <svg
                        className={`w-4 h-4 mr-2.5 mt-0.5 flex-shrink-0 ${pkg.highlighted ? 'text-rose-400' : 'text-rose-600 dark:text-rose-400'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={`text-xs uppercase tracking-wider mb-4 ${pkg.highlighted ? 'text-stone-400' : 'text-stone-400 dark:text-stone-500'}`}>
                  Preis auf Anfrage
                </div>
                <button
                  onClick={scrollToContact}
                  className={`w-full font-semibold py-3 rounded-full text-sm transition-all duration-300 transform hover:scale-105 ${
                    pkg.highlighted
                      ? 'bg-rose-600 hover:bg-rose-700 text-white'
                      : 'bg-stone-900 dark:bg-rose-600 text-white hover:bg-stone-800 dark:hover:bg-rose-700'
                  }`}
                >
                  Anfragen
                </button>
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
