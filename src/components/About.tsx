'use client'

import Image from 'next/image'
import FadeInUp from '@/components/FadeInUp'

export default function About() {
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

        {/* Kundenstimme / Testimonial - zentriert unterhalb */}
        <FadeInUp delay="200">
          <div className="hidden sm:block mt-12 sm:mt-16 mx-auto w-[calc(100%-8rem)] md:w-[calc(100%-10rem)] max-w-3xl lg:max-w-4xl bg-white dark:bg-gray-800 p-6 sm:py-8 sm:pl-10 sm:pr-20 md:pr-28 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600 dark:border-blue-400 relative text-left">
          <blockquote className="relative z-10">
            <p className="text-sm sm:text-base italic text-gray-700 dark:text-gray-300 leading-relaxed">
              Mit Image- & Videoproduktionen Sauer haben wir einen äußerst zuverlässigen Partner für unser Videoprojekt gefunden. Von der ersten Absprache bis zum fertigen Schnitt lief alles sehr reibungslos und unkompliziert. Besonders hervorheben möchten wir die schnelle und direkte Kommunikation, auf Rückfragen wurde immer zügig reagiert und zeitnah geantwortet, was uns die Zusammenarbeit sehr erleichtert hat. Wir schätzen außerdem die strukturierte Arbeitsweise und die kreativen Impulse, die in das Projekt eingebracht wurden.
              <span className="not-italic font-semibold text-gray-900 dark:text-gray-100 ml-2 text-xs sm:text-sm"> – Steuerberaterkammer Stuttgart KdöR</span>
            </p>
            </blockquote>
            
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
              <Image
                src="/stbk-logo-circle.png"
                alt="Steuerberaterkammer Stuttgart KdöR"
                width={144}
                height={144}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full shadow-lg bg-white dark:bg-gray-800"
              />
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
