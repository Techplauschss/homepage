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
      const headerHeight = 80 // Etwas weniger Offset für bessere Positionierung
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
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex-shrink-0 flex items-center ml-4 sm:ml-6 lg:ml-8">
            <Link href="/" className="text-2xl font-semibold text-gray-900 font-poppins tracking-tight">
              Image- & Videoproduktionen Sauer
            </Link>
            <Image
              src={Logo}
              alt="Image- & Videoproduktionen Sauer Logo"
              width={32}
              height={32}
              className="ml-4"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'about' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Über mich
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'services' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Leistungen
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'portfolio' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'contact' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Kontakt
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button
              onClick={() => scrollToSection('about')}
              className={`block px-3 py-2 text-base font-medium w-full text-left ${
                activeSection === 'about' 
                  ? 'text-blue-600 font-bold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`block px-3 py-2 text-base font-medium w-full text-left ${
                activeSection === 'services' 
                  ? 'text-blue-600 font-bold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`block px-3 py-2 text-base font-medium w-full text-left ${
                activeSection === 'portfolio' 
                  ? 'text-blue-600 font-bold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`block px-3 py-2 text-base font-medium w-full text-left ${
                activeSection === 'contact' 
                  ? 'text-blue-600 font-bold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
