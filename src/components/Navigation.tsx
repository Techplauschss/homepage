'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/Logo.png'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset für bessere Erkennung

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-6">
          <div className="flex-shrink-0 flex items-center ml-1 sm:ml-2 md:ml-4 lg:ml-8">
            <Link href="/" className="hidden sm:block text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 font-poppins tracking-tight">
              Image- & Videoproduktionen Sauer
            </Link>
            <Image
              src={Logo}
              alt="Image- & Videoproduktionen Sauer Logo"
              width={24}
              height={24}
              className="ml-0 sm:ml-3 md:ml-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
            />
          </div>
          
          {/* Navigation - Visible on all screen sizes */}
          <div className="block">
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`px-1 sm:px-2 md:px-3 py-2 text-[10px] sm:text-sm font-medium transition-colors ${
                  activeSection === 'about' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Über mich
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`px-1 sm:px-2 md:px-3 py-2 text-[10px] sm:text-sm font-medium transition-colors ${
                  activeSection === 'services' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Leistungen
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`px-1 sm:px-2 md:px-3 py-2 text-[10px] sm:text-sm font-medium transition-colors ${
                  activeSection === 'portfolio' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-1 sm:px-2 md:px-3 py-2 text-[10px] sm:text-sm font-medium transition-colors ${
                  activeSection === 'contact' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Kontakt
              </button>
            </div>
          </div>

        </div>
      </div>

    </nav>
  )
}
