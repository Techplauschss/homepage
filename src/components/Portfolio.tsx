'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const portfolioItems: Array<{
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
  }> = []

  const categories = [
    { id: 'all', name: 'Alle Projekte' },
    { id: 'imagefilm', name: 'Imagefilme' },
    { id: 'recruiting', name: 'Podcasts' },
    { id: 'product', name: 'Produktvideos' },
    { id: 'social', name: 'Social Media' },
    { id: 'event', name: 'Events' },
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
          selectedCategory === 'youtube' || selectedCategory === 'recruiting'
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
              {/* 16:9 Aspect Ratio Container */}
              <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    console.log('Image failed to load:', item.image);
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={(e) => {
                    console.log('Image loaded successfully:', item.image);
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 text-center">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold mb-2 block mx-auto hover:bg-gray-100 transition-colors">
                      Projekt ansehen
                    </button>
                    <div className="text-white text-sm">
                      {item.category === 'youtube' ? 'YouTube Video' : 'Projekt Details'}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minigame Thumbnails Section - Only show for YouTube category */}
        {selectedCategory === 'youtube' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(() => {
              const episodes = [
                { num: 1, title: "Stemp Wellnessresort Minigames S1E1", subtitle: "Staffel 1, Folge 1", url: "https://www.youtube.com/watch?v=Hllapyo7LO4&list=PLzTmcq76iGjWOYOY3t0O4sjGFocn_vFG-" },
                { num: 2, title: "Stemp Wellnessresort Minigames S1E2", subtitle: "Staffel 1, Folge 2", url: "https://youtu.be/PHLaxnB1Qs0?si=NevheDvWnlDZyfkS" },
                { num: 3, title: "Stemp Wellnessresort Minigames S1E3", subtitle: "Staffel 1, Folge 3", url: "https://youtu.be/-925K4xpt_4?si=Oaax6W09gcog69_d" },
                { num: 4, title: "Stemp Wellnessresort Minigames S1E4", subtitle: "Staffel 1, Folge 4", url: "https://youtu.be/lYe-FjWXvac?si=zb6Ete9i7tN5IKwU" },
                { num: 5, title: "Stemp Wellnessresort Minigames S2E1", subtitle: "Staffel 2, Folge 1", url: "https://youtu.be/VNjW0vMIK80?si=rqdmpuuz99SmLgMz" },
                { num: 6, title: "Stemp Wellnessresort Minigames S2E2", subtitle: "Staffel 2, Folge 2", url: "https://youtu.be/1Opipz2zJ04?si=prDUesRKacYRiCnO" },
                { num: 7, title: "Stemp Wellnessresort Minigames S2E3", subtitle: "Staffel 2, Folge 3", url: "https://youtu.be/curAXIzgQ7E?si=yu13X6Ci8rsZp6fL" },
                { num: 8, title: "Stemp Wellnessresort Minigames S2E4", subtitle: "Staffel 2, Folge 4", url: "https://youtu.be/X-xkvNlUvUk?si=pyzsf-uTCrNdq8J_" }
              ];
              
              return episodes.map((ep) => (
                <div key={ep.num} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-105">
                  <a
                    href={ep.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-video overflow-hidden cursor-pointer"
                  >
                    <img
                      src={`/minigame-thumbnails/${ep.num.toString().padStart(2, '0')}_thumbnail.jpg`}
                      alt={ep.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.log('Image failed to load:', `/minigame-thumbnails/${ep.num.toString().padStart(2, '0')}_thumbnail.jpg`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </a>
                  <div className="p-4 relative">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{ep.title}</h4>
                    <p className="text-sm text-gray-600">{ep.subtitle}</p>
                    
                    {/* Play Button - Bottom Right */}
                    <a
                      href={ep.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-all duration-200 transform hover:scale-110 shadow-sm hover:shadow-md flex items-center justify-center shadow-blue-500/30 hover:shadow-blue-500/50"
                      style={{
                        boxShadow: '0 0 10px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
                      }}
                    >
                      <svg 
                        className="w-4 h-4" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ));
            })()}
          </div>
          </div>
        )}

        {/* Podcast Thumbnails Section - Only show for recruiting (Podcasts) category */}
        {selectedCategory === 'recruiting' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(() => {
              const episodes = [
                { num: 1, title: "Ratschkammerl Folge 1", subtitle: "Vorstellungsrunde", url: "#" },
                { num: 2, title: "Ratschkammerl Folge 2", subtitle: "Verenas & Tamaras Spezialfolge", url: "#" },
                { num: 3, title: "Ratschkammerl Folge 3", subtitle: "Wie läuft eine Ausbildung ab?", url: "#" },
                { num: 4, title: "Ratschkammerl Folge 4", subtitle: "Karrierefolge", url: "#" },
                { num: 5, title: "Ratschkammerl Folge 5", subtitle: "Stemp's Zauberbackstube", url: "#" },
                { num: 6, title: "Ratschkammerl Folge 6", subtitle: "Berufsbild Rezeptionistin", url: "#" },
                { num: 7, title: "Ratschkammerl Folge 7", subtitle: "Allrounder Maria zu Gast", url: "#" }
              ];
              
              return episodes.map((ep) => (
                <div key={ep.num} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-105">
                  <a
                    href={ep.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-video overflow-hidden cursor-pointer"
                  >
                    <img
                      src={`/podcast-thumbnails/${ep.num.toString().padStart(2, '0')} thumbnail.jpg`}
                      alt={ep.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.log('Image failed to load:', `/podcast-thumbnails/${ep.num.toString().padStart(2, '0')} thumbnail.jpg`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </a>
                  <div className="p-4 relative">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{ep.title}</h4>
                    <p className="text-sm text-gray-600">{ep.subtitle}</p>
                    
                    {/* Play Button - Bottom Right */}
                    <a
                      href={ep.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 transition-all duration-200 transform hover:scale-110 shadow-sm hover:shadow-md flex items-center justify-center shadow-green-500/30 hover:shadow-green-500/50"
                      style={{
                        boxShadow: '0 0 10px rgba(34, 197, 94, 0.3), 0 0 20px rgba(34, 197, 94, 0.1)'
                      }}
                    >
                      <svg 
                        className="w-4 h-4" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ));
            })()}
          </div>
          </div>
        )}

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
