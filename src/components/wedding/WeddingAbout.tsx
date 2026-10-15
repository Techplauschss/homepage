'use client'

import Image from 'next/image'
// Platzhalterbild – bei Bedarf durch ein echtes Portrait ersetzen
import Portrait from '@/assets/Portrait_01.jpeg'
import FadeInUp from '@/components/FadeInUp'

export default function WeddingAbout() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-stone-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <FadeInUp>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:mx-0">
              <Image
                src={Portrait}
                alt="Martin Sauer, Hochzeitsfotograf"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </div>
          </FadeInUp>

          <FadeInUp delay="200">
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-rose-600 dark:text-rose-400 mb-3 font-medium">
              Über mich
            </p>
            <h2 className="font-poppins text-2xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-5 sm:mb-6 leading-tight">
              Momente statt Posen.
            </h2>
            <p className="text-sm sm:text-lg text-stone-600 dark:text-stone-300 mb-4 sm:mb-6 leading-relaxed">
              Ich bin <span className="font-semibold text-stone-900 dark:text-stone-100">Martin Sauer</span> und
              begleite als Videoproduzent seit Jahren Unternehmen und Privatpersonen dabei, ihre Geschichten
              filmisch festzuhalten. Diese Erfahrung – ein Gespür für echte Momente, Licht und Timing –
              bringe ich auch in die Hochzeitsfotografie ein.
            </p>
            <p className="text-sm sm:text-lg text-stone-600 dark:text-stone-300 mb-8 leading-relaxed">
              Statt gestellter Posen begleite ich euren Tag unaufdringlich und halte fest, was wirklich zählt:
              Lachen, Tränen, kleine Blicke – die Momente, an die ihr euch noch in vielen Jahren erinnern wollt.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md">
              <div className="border-l-2 border-rose-400 pl-4">
                <div className="text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100">Deutschlandweit</div>
                <div className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">Anreise möglich</div>
              </div>
              <div className="border-l-2 border-rose-400 pl-4">
                <div className="text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100">Persönlich</div>
                <div className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">Kein Studio-Team, nur ich</div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
