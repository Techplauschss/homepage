'use client'

export default function Services() {
  const services = [
    {
      title: "Imagefilm-Produktion",
      description: "Professionelle Imagefilme, die Ihre Unternehmensidentität authentisch und beeindruckend präsentieren.",
      features: ["Konzeptentwicklung", "Drehbuch", "Professionelle Aufnahmen", "Post-Production"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Recruiting-Videos",
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
    <section id="services" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:25px_25px] sm:bg-[size:50px_50px]"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Optimale <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Videolösungen</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Von der ersten Idee bis zum fertigen Film - ich biete Ihnen das komplette Spektrum 
            moderner Videoproduktion aus einer Hand.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20 shadow-xl hover:shadow-2xl text-center">
              <div className="text-blue-400 mb-4 sm:mb-5 lg:mb-6 flex justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4 lg:mb-5 leading-tight">{service.title}</h3>
              <p className="hidden sm:block text-sm lg:text-base text-gray-100 mb-4 lg:mb-5 leading-relaxed">{service.description}</p>
              <ul className="space-y-1.5 sm:space-y-2 lg:space-y-2.5 text-left">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-100 justify-start">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-blue-400 mr-2 sm:mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                const headerHeight = 80
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerHeight

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                })
              }
            }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20 backdrop-blur-sm w-full sm:w-auto"
          >
            Kostenloses Beratungsgespräch
          </button>
        </div>
      </div>
    </section>
  )
}
