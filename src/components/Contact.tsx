'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    project: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          project: '',
          message: ''
        })
        alert('Vielen Dank für Ihre Anfrage! Wir haben Ihnen eine Bestätigung per E-Mail gesendet und werden uns schnellstmöglich bei Ihnen melden.')
      } else {
        const errorData = await response.json()
        console.error('API Fehler Details:', errorData)
        throw new Error(errorData.details || errorData.error || 'Fehler beim Senden der Anfrage')
      }
    } catch (error) {
      console.error('Detaillierter Fehler beim Senden der Anfrage:', error)
      setSubmitStatus('error')
      
      // Bessere Fehlermeldung für den Benutzer
      const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler'
      alert(`Es ist ein Fehler aufgetreten: ${errorMessage}\n\nBitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Jetzt <span className="text-blue-400">Kontakt</span> aufnehmen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Haben Sie ein Projekt im Kopf? Lassen Sie mich darüber sprechen und gemeinsam 
            Ihre Vision zum Leben erwecken.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Projekt anfragen</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Ihr Unternehmen"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                  Projektart
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white hover:bg-gray-600 transition-colors duration-200 cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em'
                  }}
                >
                  <option value="" className="bg-gray-800 text-gray-400">Wählen Sie Ihr Projekt...</option>
                  <option value="imagefilm" className="bg-gray-800 text-white">Imagefilm / Unternehmensfilm</option>
                  <option value="recruiting" className="bg-gray-800 text-white">Recruiting Video</option>
                  <option value="product" className="bg-gray-800 text-white">Produktvideo / Produktpräsentation</option>
                  <option value="event" className="bg-gray-800 text-white">Event-Dokumentation</option>
                  <option value="social" className="bg-gray-800 text-white">Social Media Content</option>
                  <option value="commercial" className="bg-gray-800 text-white">Werbespot / Commercial</option>
                  <option value="testimonial" className="bg-gray-800 text-white">Testimonial / Kundenstimmen</option>
                  <option value="tutorial" className="bg-gray-800 text-white">Tutorial / Erklärfilm</option>
                  <option value="animation" className="bg-gray-800 text-white">Animation / Motion Graphics</option>
                  <option value="other" className="bg-gray-800 text-white">Sonstiges</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt und Ihre Vorstellungen..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform shadow-lg ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Kontaktinformationen</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Telefon</h4>
                    <p className="text-gray-300">+49 151 53352436</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">E-Mail</h4>
                    <p className="text-gray-300">service@imagefilme-sauer.de</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Adresse</h4>
                    <p className="text-gray-300">
                      Clara-Zetkin-Str. 51<br />
                      01159 Dresden<br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Ihre Vorteile</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Kostenlose Erstberatung
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Transparente Preisgestaltung
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Schnelle Reaktionszeiten
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Persönliche Betreuung
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-16 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Imagefilme-Sauer. Alle Rechte vorbehalten.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/datenschutz" className="text-gray-400 hover:text-blue-400 transition-colors">
              Datenschutz
            </a>
            <a href="/impressum" className="text-gray-400 hover:text-blue-400 transition-colors">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
