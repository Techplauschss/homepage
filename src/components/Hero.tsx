'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Frontphoto1 from '@/assets/Frontphoto_1.jpg'
import Frontphoto2 from '@/assets/Frontphoto_2.jpg'
import Frontphoto3 from '@/assets/Frontphoto_3.jpg'

export default function Hero() {
  const [currentBackground, setCurrentBackground] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Animation beim Laden der Komponente starten
    setIsLoaded(true)
    
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % 3) // Zyklus zwischen 0, 1, 2
    }, 6000) // Alle 6 Sekunden wechseln

    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
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
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Erstes Bild Hintergrund */}
      <div 
        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
          currentBackground === 0 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src={Frontphoto1}
          alt="Videoproduktion Hintergrund"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent w-1/2" />
      </div>

      {/* Zweites Bild Hintergrund */}
      <div 
        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
          currentBackground === 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src={Frontphoto2}
          alt="Videoproduktion Hintergrund 2"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent w-1/2" />
      </div>

      {/* Drittes Bild Hintergrund */}
      <div 
        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
          currentBackground === 2 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src={Frontphoto3}
          alt="Videoproduktion Hintergrund 3"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent w-1/2" />
      </div>

      <div className="absolute left-8 sm:left-16 lg:left-24 xl:left-32 top-1/2 transform -translate-y-1/2 z-10 text-white">
        <div className="max-w-4xl text-left">
          <h1 className={`text-4xl md:text-6xl font-bold mb-3 leading-tight font-poppins tracking-tight transition-all duration-1000 ease-out drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Videoproduktionen nach Maß.
          </h1>
          <p className={`text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed transition-all duration-1000 ease-out delay-200 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Individuelle Videolösungen für Unternehmen & Privatpersonen.
          </p>
          <p className={`text-lg md:text-xl mb-12 text-blue-200 max-w-3xl transition-all duration-1000 ease-out delay-400 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Seit über 9 Jahren verwandle ich Visionen in fesselnde Filme.<br />
            Ob preisgekrönte Dokumentationen oder innovative Social Media Inhalte.<br />
            Ich schaffe professionelle Videoproduktionen, die im Gedächtnis bleiben.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 items-start transition-all duration-1000 ease-out delay-600 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Jetzt anfragen
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('portfolio')
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
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Portfolio ansehen
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={() => {
          const element = document.getElementById('about')
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-2"
        aria-label="Zur nächsten Sektion scrollen"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </section>
  )
}
