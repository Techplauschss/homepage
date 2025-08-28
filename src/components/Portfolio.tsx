'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const portfolioItems = [
    {
      id: 1,
      title: "TechCorp Imagefilm",
      category: "imagefilm",
      description: "Ein moderner Imagefilm für ein führendes Technologieunternehmen",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["Corporate", "Technology", "Innovation"]
    },
    {
      id: 2,
      title: "Startup Recruiting Video",
      category: "recruiting",
      description: "Authentisches Recruiting-Video für ein junges Startup",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["Recruiting", "Startup", "Team"]
    },
    {
      id: 3,
      title: "Produktpräsentation E-Bike",
      category: "product",
      description: "Dynamische Präsentation eines innovativen E-Bikes",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["Product", "Lifestyle", "Innovation"]
    },
    {
      id: 4,
      title: "Firmenveranstaltung 2024",
      category: "event",
      description: "Professionelle Dokumentation einer Firmenveranstaltung",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["Event", "Corporate", "Documentation"]
    },
    {
      id: 5,
      title: "Social Media Kampagne",
      category: "social",
      description: "Kreative Social Media Videos für verschiedene Plattformen",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["Social Media", "Campaign", "Creative"]
    },
    {
      id: 6,
      title: "Animiertes Erklärvideo",
      category: "animation",
      description: "Animiertes Erklärvideo für komplexe Dienstleistungen",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["Animation", "Explanation", "Creative"]
    },
    {
      id: 7,
      title: "Stemp Wellnessresort Minigames S1E1",
      category: "youtube",
      description: "Staffel 1, Folge 1",
      image: "/minigame-thumbnails/01 thumbnail.jpg",
      tags: ["YouTube", "Hotelbranche"]
    },
    {
      id: 8,
      title: "Stemp Wellnessresort Minigames S1E2",
      category: "youtube",
      description: "Staffel 1, Folge 2",
      image: "/minigame-thumbnails/02 thumbnail.jpg",
      tags: ["YouTube", "Hotelbranche"]
    },
    {
      id: 9,
      title: "Stemp Wellnessresort Minigames S1E3",
      category: "youtube",
      description: "Staffel 1, Folge 3",
      image: "/minigame-thumbnails/03 thumbnail.jpg",
      tags: ["YouTube", "Hotelbranche"]
    },
    {
      id: 10,
      title: "Stemp Wellnessresort Minigames S1E4",
      category: "youtube",
      description: "Staffel 1, Folge 4",
      image: "/minigame-thumbnails/04 thumbnail.jpg",
      tags: ["YouTube", "Hotelbranche"]
    },
    {
      id: 11,
      title: "Stemp Wellnessresort Minigames S2E1",
      category: "youtube",
      description: "Staffel 2, Folge 1",
      image: "/minigame-thumbnails/05 thumbnail.jpg",
      tags: ["YouTube", "Hotelbranche"]
    },
    {
      id: 12,
      title: "Stemp Wellnessresort Minigames S2E2",
      category: "youtube",
      description: "Staffel 2, Folge 2",
      image: "/minigame-thumbnails/06 thumbnail.jpg",
      tags: ["YouTube", "Hotelbranche"]
    },
    {
      id: 13,
      title: "Stemp Wellnessresort Minigames S2E3",
      category: "youtube",
      description: "Staffel 2, Folge 3",
      image: "/minigame-thumbnails/07 thumbnail.jpg",
      tags: ["YouTube", "Hotelbranche"]
    },
    {
      id: 14,
      title: "Stemp Wellnessresort Minigames S2E4",
      category: "youtube",
      description: "Staffel 2, Folge 4",
      image: "/minigame-thumbnails/08 thumbnail.jpg",
      tags: ["YouTube", "Hotelbranche"]
    }
  ]

  const categories = [
    { id: 'all', name: 'Alle Projekte' },
    { id: 'imagefilm', name: 'Imagefilme' },
    { id: 'recruiting', name: 'Recruiting' },
    { id: 'product', name: 'Produktvideos' },
    { id: 'event', name: 'Events' },
    { id: 'social', name: 'Social Media' },
    { id: 'animation', name: 'Animation' },
    { id: 'youtube', name: 'YouTube-Formate' }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mein <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Entdecken Sie eine Auswahl meiner erfolgreich realisierten Projekte 
            und lassen Sie sich von der Vielfalt meiner Arbeit inspirieren.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className={`grid gap-8 ${
          selectedCategory === 'youtube' 
            ? 'md:grid-cols-2 lg:grid-cols-4' 
            : 'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden h-64">
                {typeof item.image === 'string' ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    fill
                  />
                )}
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300 transform translate-y-4 hover:translate-y-0">
                    Projekt ansehen
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Interessiert an meinem Portfolio? Gerne zeige ich Ihnen weitere Referenzen.
          </p>
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
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Vollständiges Portfolio anfordern
          </button>
        </div>
      </div>
    </section>
  )
}
