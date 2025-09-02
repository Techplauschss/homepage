'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/Logo.png'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth)
    
    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
      const isMobile = window.innerWidth < 640 // sm breakpoint
      const headerHeight = isMobile ? 50 : 80 // Kleinerer Offset auf Mobile
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm">
      <div className="px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-6">
          <div className="flex-shrink-0 flex items-center ml-1 sm:ml-2 md:ml-4 lg:ml-8">
            <Link href="/" className="hidden sm:block text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100 font-poppins tracking-tight">
              Image- & Videoproduktionen Sauer
            </Link>
            <div className="flex items-center">
              <Image
                src={Logo}
                alt="Image- & Videoproduktionen Sauer Logo"
                width={24}
                height={24}
                className="ml-0 sm:ml-3 md:ml-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
              />
              <span className="block sm:hidden ml-2 text-sm font-semibold text-gray-900 dark:text-gray-100 font-poppins tracking-tight">
                Imagefilme Sauer
              </span>
            </div>
          </div>
          
          {/* Navigation - Visible on all screen sizes */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`px-1 sm:px-2 md:px-3 py-2 text-[10px] sm:text-sm font-medium transition-colors ${
                  activeSection === 'about' 
                    ? 'text-blue-600 dark:text-blue-400 font-bold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                Über mich
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`px-1 sm:px-2 md:px-3 py-2 text-[10px] sm:text-sm font-medium transition-colors ${
                  activeSection === 'services' 
                    ? 'text-blue-600 dark:text-blue-400 font-bold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                Leistungen
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`px-1 sm:px-2 md:px-3 py-2 text-[10px] sm:text-sm font-medium transition-colors ${
                  activeSection === 'portfolio' 
                    ? 'text-blue-600 dark:text-blue-400 font-bold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-1 sm:px-2 md:px-3 py-2 text-[10px] sm:text-sm font-medium transition-colors ${
                  activeSection === 'contact' 
                    ? 'text-blue-600 dark:text-blue-400 font-bold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                } ${windowWidth > 910 ? 'block' : 'hidden'}`}
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
