'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Über <span className="text-blue-600">mich</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ich heiße <span className="font-semibold text-gray-900">Martin Sauer</span>,
              und seit mehr als 9 Jahren lebe ich meine Leidenschaft für die Videoproduktion. 
              Mit einem Auge fürs Detail und einem Gespür für Geschichten widme ich mich jedem 
              Projekt mit Hingabe.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Meine Expertise erstreckt sich über alle Aspekte der Videoproduktion: von der ersten 
              Idee bis zum finalen Schnitt. Ich bin stets auf der Suche nach neuen, spannenden 
              Projekten und freue mich, mit Ihnen gemeinsam Ihren Videowunsch in die Tat umzusetzen!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700">Erfolgreiche Projekte</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-700">Jahre Branchenerfahrung</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Portrait Container */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/Portrait_01.jpeg"
                  alt="Martin Sauer - Videoproduktion"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Mission Box - overlays the bottom of the image */}
              <div className="absolute bottom-4 left-4 right-4 bg-blue-600/95 backdrop-blur-sm rounded-xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4">Meine Mission</h3>
                <p className="text-sm leading-relaxed">
                  Ich glaube daran, dass jedes Unternehmen und jede Person eine einzigartige Geschichte hat, 
                  die es wert ist, erzählt zu werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
