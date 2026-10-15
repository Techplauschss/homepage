'use client'

import { useState } from 'react'
import FadeInUp from '@/components/FadeInUp'

export default function WeddingContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    location: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    const details = [
      formData.weddingDate && `Hochzeitsdatum: ${formData.weddingDate}`,
      formData.location && `Ort: ${formData.location}`,
    ].filter(Boolean).join('\n')

    const composedMessage = details ? `${details}\n\n${formData.message}` : formData.message

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project: 'Hochzeitsfotografie',
          message: composedMessage,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Vielen Dank! Eure Anfrage ist angekommen. Ich melde mich so schnell wie möglich bei euch.',
        })
        setFormData({ name: '', email: '', phone: '', weddingDate: '', location: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Ein Fehler ist aufgetreten. Bitte versucht es später erneut.',
        })
      }
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Ein Fehler ist aufgetreten. Bitte überprüft eure Internetverbindung und versucht es erneut.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="wedding-contact" className="py-16 sm:py-24 bg-stone-900 dark:bg-stone-950 text-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeInUp>
          <div className="text-center mb-10 sm:mb-14">
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-rose-400 mb-3 font-medium">
              Kontakt
            </p>
            <h2 className="font-poppins text-2xl sm:text-4xl font-bold mb-4">
              Erzählt mir von eurem Tag
            </h2>
            <p className="text-sm sm:text-lg text-stone-300 max-w-xl mx-auto">
              Schreibt mir einfach ein paar Eckdaten – ich melde mich zeitnah für ein persönliches Gespräch.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay="200">
          <form onSubmit={handleSubmit} className="bg-stone-800 dark:bg-stone-900 rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2">
                  Namen *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white placeholder-stone-400 text-sm sm:text-base"
                  placeholder="Braut & Bräutigam"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white placeholder-stone-400 text-sm sm:text-base"
                  placeholder="eure@email.de"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="weddingDate" className="block text-sm font-medium text-stone-300 mb-2">
                  Hochzeitsdatum
                </label>
                <input
                  type="date"
                  id="weddingDate"
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white placeholder-stone-400 text-sm sm:text-base [color-scheme:dark]"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-stone-300 mb-2">
                  Ort / Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white placeholder-stone-400 text-sm sm:text-base"
                  placeholder="z.B. Dresden"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-stone-300 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white placeholder-stone-400 text-sm sm:text-base"
                placeholder="+49 123 456789"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2">
                Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white placeholder-stone-400 resize-none text-sm sm:text-base"
                placeholder="Erzählt mir kurz von eurer Feier..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-semibold py-3.5 rounded-full text-base transition-all duration-300 transform shadow-lg ${
                isSubmitting
                  ? 'bg-stone-600 cursor-not-allowed'
                  : 'bg-rose-600 hover:bg-rose-700 hover:scale-[1.02]'
              } text-white`}
            >
              {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
            </button>

            {submitStatus.type && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-green-100 border border-green-400 text-green-700'
                  : 'bg-red-100 border border-red-400 text-red-700'
              }`}>
                <p className="text-sm font-medium">{submitStatus.message}</p>
              </div>
            )}
          </form>
        </FadeInUp>
      </div>
    </section>
  )
}
