'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import HeroPhoto from '@/assets/wedding/hero-vineyard.jpg'

export default function WeddingHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('wedding-contact')
    if (element) {
      const headerHeight = 40
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' })
    }
  }

  const scrollToGallery = () => {
    const element = document.getElementById('wedding-gallery')
    if (element) {
      const headerHeight = 40
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-end sm:items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HeroPhoto}
          alt="Brautpaar auf einem Weingut"
          fill
          className="object-cover"
          priority
          quality={95}
          sizes="100vw"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-stone-950/20" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 pb-12 sm:pb-0">
        <p className={`uppercase tracking-[0.3em] text-xs sm:text-sm text-rose-200 mb-4 transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          Hochzeitsfotografie
        </p>
        <h1 className={`font-poppins text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-4 sm:mb-6 max-w-3xl transition-all duration-1000 ease-out delay-150 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Eure Geschichte,<br />für immer eingefangen.
        </h1>
        <p className={`text-base sm:text-xl text-stone-200 max-w-xl mb-8 sm:mb-10 leading-relaxed transition-all duration-1000 ease-out delay-300 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Authentische, unaufdringliche Hochzeitsfotografie in Dresden, der Lausitz und deutschlandweit.
        </p>

        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 ease-out delay-500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button
            onClick={scrollToContact}
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3.5 px-8 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Termin anfragen
          </button>
          <button
            onClick={scrollToGallery}
            className="border-2 border-white/70 text-white hover:bg-white hover:text-stone-900 font-semibold py-3.5 px-8 rounded-full text-base transition-all duration-300 transform hover:scale-105"
          >
            Galerie ansehen
          </button>
        </div>
      </div>
    </section>
  )
}
