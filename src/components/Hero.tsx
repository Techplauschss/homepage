'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Frontphoto1 from '@/assets/Frontphoto_1.jpg'
import Frontphoto2 from '@/assets/Frontphoto_2.jpg'

export default function Hero() {
  const [currentBackground, setCurrentBackground] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentBackground(1)
    }, 5000) // Nach 5 Sekunden zum ersten Bild

    const timer2 = setTimeout(() => {
      setCurrentBackground(2)
    }, 10000) // Nach 10 Sekunden zum zweiten Bild

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Blauer Gradient Hintergrund */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 transition-opacity duration-1000 ${
          currentBackground === 0 ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Erstes Bild Hintergrund */}
      <div 
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
          currentBackground === 1 ? 'translate-x-0' : currentBackground === 0 ? 'translate-x-full' : '-translate-x-full'
        }`}
      >
        <Image
          src={Frontphoto1}
          alt="Videoproduktion Hintergrund"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay für bessere Textlesbarkeit */}
      </div>

      {/* Zweites Bild Hintergrund */}
      <div 
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
          currentBackground === 2 ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Image
          src={Frontphoto2}
          alt="Videoproduktion Hintergrund 2"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay für bessere Textlesbarkeit */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-poppins tracking-tight">
            Videoproduktionen nach <span className="text-blue-300">Maß.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Individuelle Videolösungen für Unternehmen & Privatpersonen.
          </p>
          <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-3xl mx-auto">
            Seit über 9 Jahren verwandeln wir Visionen in fesselnde Filme.<br />
            Ob preisgekrönte Dokumentationen oder innovative Social Media Inhalte.<br />
            Wir schaffen professionelle Videoproduktionen, die im Gedächtnis bleiben.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                  element.scrollIntoView({ behavior: 'smooth' })
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
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
      </div>
    </section>
  )
}
