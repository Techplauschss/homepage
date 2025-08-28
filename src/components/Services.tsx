'use client'

export default function Services() {
  const services = [
    {
      title: "Imagefilm Produktion",
      description: "Professionelle Imagefilme, die Ihre Unternehmensidentität authentisch und beeindruckend präsentieren.",
      features: ["Konzeptentwicklung", "Drehbuch", "Professionelle Aufnahmen", "Post-Production"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Recruiting Videos",
      description: "Überzeugende Recruiting-Videos, die talentierte Mitarbeiter für Ihr Unternehmen begeistern.",
      features: ["Employer Branding", "Mitarbeiter-Interviews", "Arbeitsplatz-Präsentation", "Social Media optimiert"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Produktvideos",
      description: "Dynamische Produktpräsentationen, die Ihre Produkte ins beste Licht rücken und Kunden überzeugen.",
      features: ["Produktinszenierung", "3D-Animationen", "Lifestyle-Integration", "E-Commerce optimiert"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Event-Dokumentation",
      description: "Professionelle Dokumentation Ihrer Events und Veranstaltungen für nachhaltige Erinnerungen.",
      features: ["Live-Aufnahmen", "Multi-Kamera Setup", "Highlight-Reel", "Streaming-Services"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Social Media Content",
      description: "Maßgeschneiderte Video-Inhalte für Ihre Social Media Kanäle, die Engagement und Reichweite steigern.",
      features: ["Platform-spezifisch", "Kurze Formate", "Stories & Reels", "Content-Strategie"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 2v14a2 2 0 002 2h6a2 2 0 002-2V6M7 6H5a2 2 0 00-2 2v12a2 2 0 002 2h2M7 6h10M7 10h10M7 14h10M7 18h10" />
        </svg>
      )
    },
    {
      title: "Animation & Motion Graphics",
      description: "Kreative Animationen und Motion Graphics, die komplexe Inhalte verständlich und ansprechend vermitteln.",
      features: ["2D/3D Animation", "Logo-Animation", "Infografiken", "Erklärvideos"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unsere <span className="text-blue-600">Leistungen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Idee bis zum fertigen Film - wir bieten Ihnen das komplette Spektrum 
            moderner Videoproduktion aus einer Hand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Kostenloses Beratungsgespräch
          </button>
        </div>
      </div>
    </section>
  )
}
