'use client'

import { useState } from 'react'
import Image from 'next/image'
import FadeInUp from '@/components/FadeInUp'

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0)
  const [prevTestimonial, setPrevTestimonial] = useState<number | null>(null)

  const testimonials = [
    {
      id: 1,
      logo: '/stbk-logo-circle.png',
      alt: 'Steuerberaterkammer Stuttgart KdöR',
      text: 'Mit Image- & Videoproduktionen Sauer haben wir einen äußerst zuverlässigen Partner für unser Videoprojekt gefunden. Von der ersten Absprache bis zum fertigen Schnitt lief alles sehr reibungslos und unkompliziert. Besonders hervorheben möchten wir die schnelle und direkte Kommunikation, auf Rückfragen wurde immer zügig reagiert und zeitnah geantwortet, was uns die Zusammenarbeit sehr erleichtert hat. Wir schätzen außerdem die strukturierte Arbeitsweise und die kreativen Impulse, die in das Projekt eingebracht wurden.',
      author: 'Steuerberaterkammer Stuttgart KdöR'
    },
    {
      id: 2,
      logo: '/lmr-logo-circle.png',
      alt: 'Landesmusikrat Brandenburg e.V.',
      text: 'Die Zusammenarbeit mit Image- & Videoproduktionen Sauer haben wir als sehr zuverlässig, struktuiert und stets kundenorientiert erlebt. Jeder Wunsch wurde zeitnah umgesetzt, Absprachen konnten immer unkompliziert und auf kurzem Weg getroffen werden. Wir fragen Martin Sauer für weitere Projekte jederzeit wieder an. Die Qualität seiner Arbeit ist modern und hochwertig. Man hat immer ein Lächeln im Gesicht, wenn man seine Ergebnisse anschaut. Vielen Dank für die bisherige Zusammenarbeit und Bereicherung unserer Arbeit!',
      author: 'Landesmusikrat Brandenburg e.V.'
    },
    {
      id: 3,
      logo: '/rw-logo-circle.png',
      alt: 'Richard Wöhr GmbH',
      text: 'Die Zusammenarbeit mit Image- & Videoproduktionen Sauer war absolut unkompliziert und effizient. Unser bestehendes Videomaterial wurde in kürzester Zeit professionell neu aufbereitet – wir sind mit der schnellen Umsetzung und dem Ergebnis sehr zufrieden.',
      author: 'Richard Wöhr GmbH'
    }
  ]

  return (
    <section id="about" className="py-6 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-35 items-center">
          <FadeInUp>
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
              Über <span className="text-blue-600 dark:text-blue-400">mich</span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Ich heiße <span className="font-semibold text-gray-900 dark:text-gray-100">Martin Sauer</span>,
              und seit mehr als fünf Jahren lebe ich meine Leidenschaft für die Videoproduktion. 
              Mit einem Auge fürs Detail und einem Gespür für Geschichten widme ich mich jedem 
              Projekt mit Hingabe, egal ob in der Region <strong>Dresden und der Lausitz  oder deutschlandweit.</strong>
            </p>
            <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Meine Expertise erstreckt sich über alle Aspekte der Videoproduktion: von der ersten 
              Idee bis zum finalen Schnitt. Ich bin stets auf der Suche nach neuen, spannenden 
              Projekten und freue mich, mit Ihnen gemeinsam Ihren Videowunsch in die Tat umzusetzen!
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md dark:shadow-lg">
                <div className="text-xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">50+</div>
                <div className="text-xs sm:text-base text-gray-700 dark:text-gray-300">Erfolgreiche Projekte</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md dark:shadow-lg">
                <div className="text-xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">5+</div>
                <div className="text-xs sm:text-base text-gray-700 dark:text-gray-300">Jahre Branchenerfahrung</div>
              </div>
            </div>
          </FadeInUp>
          
          <FadeInUp delay="200">
            <div className="relative mt-8 lg:mt-0">
            {/* Portrait Container */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/Portrait_01.jpeg"
                  alt="Martin Sauer, Videograf für Dresden, Lausitz und Cottbus"
                  width={600}
                  height={800}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Mission Box - overlays the bottom of the image */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-blue-600/95 dark:bg-blue-500/95 backdrop-blur-sm rounded-xl p-3 sm:p-6 text-white shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Meine Mission</h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Ich glaube daran, dass jedes Unternehmen und jede Person eine einzigartige Geschichte hat, 
                  die es wert ist, erzählt zu werden.
                </p>
              </div>
            </div>
            </div>
          </FadeInUp>
        </div>

        {/* Kundenstimmen / Testimonials */}
        <FadeInUp delay="200">
          <div className="hidden sm:block mt-12 sm:mt-16 mx-auto max-w-5xl px-4">
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-stretch">
              {/* Logos */}
              <div className="flex flex-row sm:flex-col justify-center items-center gap-4 sm:gap-6 flex-shrink-0">
                {testimonials.map((t, index) => (
                  <div
                    key={t.id}
                    className="relative cursor-pointer transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => {
                  if (activeTestimonial !== index) {
                    setPrevTestimonial(activeTestimonial)
                    setActiveTestimonial(index)
                  }
                }}
                onClick={() => {
                  if (activeTestimonial !== index) {
                    setPrevTestimonial(activeTestimonial)
                    setActiveTestimonial(index)
                  }
                }}
                  >
                    <Image
                      src={t.logo}
                      alt={t.alt}
                      width={144}
                      height={144}
                      className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full shadow-md bg-white dark:bg-gray-800 object-contain p-2 transition-all duration-300 ${
                        activeTestimonial !== index
                          ? 'opacity-50 grayscale scale-95'
                          : 'opacity-100 scale-100 ring-2 ring-blue-500/40'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Text Box */}
              <div className="relative flex-1 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-gray-900/50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] p-6 sm:p-8 md:p-10 border border-blue-100/60 dark:border-gray-700/50 flex items-center overflow-hidden">
                {/* Decorative Quote Icon */}
                <svg className="absolute top-4 left-4 sm:top-6 sm:left-6 w-20 h-20 sm:w-24 sm:h-24 text-blue-600/5 dark:text-blue-400/5 transform -scale-x-100 pointer-events-none" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <div className="relative w-full min-h-[260px] sm:min-h-[200px] flex items-center z-10">
                  {/* Testimonial Texts */}
              {testimonials.map((t, index) => {
                const isActive = activeTestimonial === index;
                const isPrev = prevTestimonial === index;

                return (
                  <div
                    key={t.id}
                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out ${
                      isActive 
                        ? 'opacity-100 translate-x-0 scale-100 blur-0 delay-150 z-10' 
                        : isPrev
                          ? 'opacity-0 translate-x-8 scale-95 blur-sm z-0 pointer-events-none'
                          : 'opacity-0 -translate-x-8 scale-95 blur-sm z-0 pointer-events-none'
                    }`}
                  >
                    <blockquote className="max-w-3xl mx-auto sm:mx-0 text-center sm:text-left">
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-4 sm:mb-6 font-medium">
                          "{t.text}"
                        </p>
                        <footer className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                          <div className="w-8 sm:w-10 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex-shrink-0"></div>
                          <span className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">
                            {t.author}
                          </span>
                        </footer>
                      </blockquote>
                    </div>
                )
              })}
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
