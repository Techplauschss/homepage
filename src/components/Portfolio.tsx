'use client'

import { useState } from 'react'
import Image from 'next/image'
import SchulzeiPhone from '../assets/some-thumbnails/Schulze_iPhone.png'
import StempiPhone from '../assets/some-thumbnails/Stemp_iPhone.png'

// Video Gallery Component with Navigation
const VideoGallery = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  
  const videos = [
    { id: '02', name: 'VW California', file: '02_VWCalifornia.mp4' },
    { id: '03', name: 'Vorstellung Miethe', file: '03_VorstellungMiethe.mp4' },
    { id: '04', name: 'Audi SQ5', file: '04_AudiSQ5.mp4' },
    { id: '05', name: 'Enyaq Coupé', file: '05_EnyaqCoupé.mp4' },
    { id: '06', name: 'Octavia Exclusive', file: '06_OctaviaExclusive.mp4' }
  ]

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const currentVideo = videos[currentVideoIndex]

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Video Navigation Row */}
      <div className="flex items-center justify-center space-x-4 group">
        {/* Left Arrow */}
        <button
          onClick={prevVideo}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Vorheriges Video"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Video Container */}
        <div className="relative w-80 rounded-lg overflow-hidden shadow-lg">
          <video 
            key={currentVideo.file} // Force re-render when video changes
            controls 
            autoPlay={currentVideoIndex === 0}
            muted={currentVideoIndex === 0}
            className="w-full h-auto rounded-lg"
            preload="metadata"
            onError={(e) => {
              console.log('Video failed to load:', `/${currentVideo.file}`);
            }}
          >
            <source src={`/${currentVideo.file}`} type="video/mp4" />
            Ihr Browser unterstützt das Video-Format nicht.
          </video>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextVideo}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Nächstes Video"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Video Dots Indicator */}
      <div className="flex justify-center items-center mt-4 space-x-1">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentVideoIndex 
                ? 'bg-blue-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Video ${index + 1} anzeigen`}
          />
        ))}
      </div>
    </div>
  )
}

// Stemp TikTok Gallery Component
const StempTikTokGallery = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  
  const videos = [
    { id: '25', name: 'TikTok 25', file: 'Stemp_Tiktok_25.mp4' },
    { id: '27', name: 'TikTok 27', file: 'Stemp_Tiktok_27.mp4' },
    { id: '28', name: 'TikTok 28', file: 'Stemp_Tiktok_28.mp4' },
    { id: '34', name: 'TikTok 34', file: 'Stemp_Tiktok_34.mp4' },
    { id: '61', name: 'TikTok 61', file: 'Stemp_Tiktok_61.mp4' }
  ]

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const currentVideo = videos[currentVideoIndex]

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Video Navigation Row */}
      <div className="flex items-center justify-center space-x-4 group">
        {/* Left Arrow */}
        <button
          onClick={prevVideo}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Vorheriges TikTok"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Video Container */}
        <div className="relative w-80 rounded-lg overflow-hidden shadow-lg">
          <video 
            key={currentVideo.file} // Force re-render when video changes
            controls 
            autoPlay={currentVideoIndex === 0}
            muted={currentVideoIndex === 0}
            className="w-full h-auto rounded-lg"
            preload="metadata"
            onError={(e) => {
              console.log('TikTok failed to load:', `/${currentVideo.file}`);
            }}
          >
            <source src={`/${currentVideo.file}`} type="video/mp4" />
            Ihr Browser unterstützt das Video-Format nicht.
          </video>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextVideo}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Nächstes TikTok"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* TikTok Dots Indicator */}
      <div className="flex justify-center items-center mt-4 space-x-1">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentVideoIndex 
                ? 'bg-blue-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`TikTok ${index + 1} anzeigen`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('imageevent')

  const portfolioItems: Array<{
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
  }> = []

  const categories = [
    { id: 'imageevent', name: 'Image- & Eventvideos' },
    { id: 'social', name: 'Social Media' },
    { id: 'product', name: 'Produktvideos' },
    { id: 'recruiting', name: 'Podcasts' },
    { id: 'youtube', name: 'YouTube-Formate' }
  ]

  const filteredItems = selectedCategory === 'imageevent'
    ? portfolioItems.filter(item => item.category === 'imagefilm' || item.category === 'event')
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
          selectedCategory === 'youtube' || selectedCategory === 'recruiting' || selectedCategory === 'product'
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

        {/* Image- & Eventvideos Section - Only show for imageevent category */}
        {selectedCategory === 'imageevent' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(() => {
                const episodes = [
                  { num: 1, title: "LMR Brandenburg e.V.", subtitle: "Imagefilm", url: "https://www.youtube.com/watch?v=9-8alDSuZd4" },
                  { num: 2, title: "Das Stemp Wellnessresort", subtitle: "Imagefilm", url: "https://youtu.be/_WJFP7WYW0c" },
                  { num: 3, title: "Die Lausitz im Wandel", subtitle: "Dokumentation", url: "https://youtu.be/kbJD0z6fa58?si=ige7F7cvF7_uNh6n" },
                  { num: 4, title: "LMR Neujahrsempfang", subtitle: "Eventvideo", url: "https://youtu.be/df9zUzHkg3o?si=aqYO86f5RsSneIqH" }
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
                        src={ep.num === 1 ? `/landesmusikrat_imagefilm.jpg` : ep.num === 2 ? `/stemp_imagefilm.jpg` : ep.num === 3 ? `/filmcrew_thumbnail.jpg` : ep.num === 4 ? `/landesmusikrat2_thumbnail.jpg` : `/podcast-thumbnails/${ep.num.toString().padStart(2, '0')} thumbnail.jpg`}
                        alt={ep.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const fallbackSrc = `/podcast-thumbnails/${ep.num.toString().padStart(2, '0')} thumbnail.jpg`;
                          console.log('Image failed to load:', e.currentTarget.src, 'falling back to:', fallbackSrc);
                          if (e.currentTarget.src !== fallbackSrc) {
                            e.currentTarget.src = fallbackSrc;
                          } else {
                            e.currentTarget.style.display = 'none';
                          }
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
              {/* Erste 4 Episoden */}
              {(() => {
                const episodes = [
                  { num: 1, title: "Ratschkammerl Folge 1", subtitle: "Vorstellungsrunde", url: "https://youtu.be/NE1esKSDdj0?si=Ao1l9vHFqHcjlz9f" },
                  { num: 2, title: "Ratschkammerl Folge 2", subtitle: "Verenas & Tamaras Spezialfolge", url: "https://youtu.be/YjZ24ZG996o?si=1hJduO6g3Lh6uI0s" },
                  { num: 3, title: "Ratschkammerl Folge 3", subtitle: "Wie läuft eine Ausbildung ab?", url: "https://youtu.be/EdW-aOTy9Z0?si=tUmr18w5Kw56AiDw" },
                  { num: 4, title: "Ratschkammerl Folge 4", subtitle: "Karrierefolge", url: "https://youtu.be/cc06RnhNv28?si=O-_TZ7JugzIzP0W3" }
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
            
            {/* Letzte 3 Episoden - zentriert */}
            <div className="flex justify-center mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
                {(() => {
                  const lastEpisodes = [
                    { num: 5, title: "Ratschkammerl Folge 5", subtitle: "Stemp's Zauberbackstube", url: "https://youtu.be/rgeF0DRiCLM?si=pMwf88JJ3arKPXsI" },
                    { num: 6, title: "Ratschkammerl Folge 6", subtitle: "Berufsbild Rezeptionistin", url: "https://youtu.be/bz2tle_Kqrc?si=uiaB2v7vLZwRzQb9" },
                    { num: 7, title: "Ratschkammerl Folge 7", subtitle: "Allrounder Maria zu Gast", url: "https://youtu.be/vzdFyYje3Go?si=zqaDaSoWOg_4ucWy" }
                  ];
                  
                  return lastEpisodes.map((ep) => (
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
          </div>
        )}

        {/* Product Videos Section - Only show for product category */}
        {selectedCategory === 'product' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(() => {
              const products = [
                { num: 1, title: "iPhone 12 vs iPhone 13", subtitle: "Vergleich", url: "https://www.youtube.com/watch?v=oxfq-mdGgEQ" },
                { num: 2, title: "iPhone 13 in 2024 kaufen", subtitle: "Review", url: "https://www.youtube.com/watch?v=LxjLWCHsyV8" },
                { num: 3, title: "Der EINZIGE Laptop", subtitle: "Review", url: "https://www.youtube.com/watch?v=UKRMHywbUc8" },
                { num: 4, title: "iPhone 12 Pro in 2024", subtitle: "Review", url: "https://www.youtube.com/watch?v=UVXk8e67ErQ" },
                { num: 5, title: "iPhone 12 Pro 2024", subtitle: "Erster Eindruck", url: "https://www.youtube.com/watch?v=ODfoY5njP_A" },
                { num: 6, title: "iPhone 12 mini vs 12", subtitle: "Vergleich", url: "https://www.youtube.com/watch?v=fmMSbme_Wg8" },
                { num: 7, title: "iPhone 12 mini 2024", subtitle: "Erster Eindruck", url: "https://www.youtube.com/watch?v=F3SEQcixggI" },
                { num: 8, title: "iPhone 12 mini", subtitle: "Unboxing", url: "https://www.youtube.com/watch?v=359YjOZbFHI" },
                { num: 9, title: "iPhone 12 vs iPhone 11", subtitle: "Vergleich", url: "https://www.youtube.com/watch?v=kEkab4_0za4" },
                { num: 10, title: "iPhone 12 in 2024", subtitle: "Review", url: "https://www.youtube.com/watch?v=3wYJkujLFc0" },
                { num: 11, title: "iPhone 11 vs XR", subtitle: "Vergleich", url: "https://www.youtube.com/watch?v=Vkswv0xK-gk" },
                { num: 12, title: "Apple TV 4K", subtitle: "Review", url: "https://www.youtube.com/watch?v=yPE-yJCgu10" },
                { num: 13, title: "Refurbished iPhones", subtitle: "Fazit", url: "https://www.youtube.com/watch?v=wVAXyH4N0Vo" },
                { num: 14, title: "iPhone 11 in 2024", subtitle: "Review", url: "https://www.youtube.com/watch?v=71eMFe7d6eI" },
                { num: 15, title: "iPhone 11 in 2023", subtitle: "Erster Eindruck", url: "https://www.youtube.com/watch?v=8XUCHGiQm4s" },
                { num: 16, title: "Apple-Trick für Studenten", subtitle: "Tutorial", url: "https://www.youtube.com/watch?v=28hEMajG9w4" },
                { num: 17, title: "iPhone Xr in 2023", subtitle: "Review", url: "https://www.youtube.com/watch?v=28ZLBUOpA9o" },
                { num: 18, title: "AirPods I in 2023", subtitle: "Review", url: "https://www.youtube.com/watch?v=oKPV_erAoiQ" }
              ];
              
              return products.map((product, index) => (
                <div 
                  key={product.num} 
                  className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-105 ${
                    index === 16 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-video overflow-hidden cursor-pointer"
                  >
                    <img
                      src={`/techplausch-thumbnails/${product.num.toString().padStart(2, '0')} thumbnail.jpg`}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.log('Image failed to load:', `/techplausch-thumbnails/${product.num.toString().padStart(2, '0')} thumbnail.jpg`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </a>
                  <div className="p-4 relative">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{product.title}</h4>
                    <p className="text-sm text-gray-600">{product.subtitle}</p>
                    
                    {/* Play Button - Bottom Right */}
                    <a
                      href={product.url}
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

        {/* Social Media Section - Only show for social category */}
        {selectedCategory === 'social' && (
          <div className="space-y-16">
            {/* Erste Reihe */}
            <div className="flex justify-center items-start gap-16 flex-wrap">
              <div className="flex flex-col items-center">
                <Image
                  src={SchulzeiPhone}
                  alt="Schulze iPhone Social Media Content"
                  className="w-80 h-auto -mt-8"
                  style={{
                    filter: 'drop-shadow(0 15px 20px rgba(0, 0, 0, 0.4))'
                  }}
                />
              </div>
              <VideoGallery />
            </div>
            
            {/* Zweite Reihe */}
            <div className="flex justify-center items-start gap-16 flex-wrap">
              <div className="flex flex-col items-center">
                <Image
                  src={StempiPhone}
                  alt="Stemp iPhone Social Media Content"
                  className="w-80 h-auto -mt-8"
                  style={{
                    filter: 'drop-shadow(0 15px 20px rgba(0, 0, 0, 0.4))'
                  }}
                />
              </div>
              <StempTikTokGallery />
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
