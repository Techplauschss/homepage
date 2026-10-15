'use client'

import Image, { StaticImageData } from 'next/image'
import FadeInUp from '@/components/FadeInUp'
import KissWillow from '@/assets/wedding/gallery-kiss-willow.jpg'
import Rings from '@/assets/wedding/gallery-rings.jpg'
import CeremonyCandles from '@/assets/wedding/gallery-ceremony-candles.jpg'
import PortraitPalace from '@/assets/wedding/gallery-portrait-palace.jpg'
import Confetti from '@/assets/wedding/gallery-confetti.jpg'
import CandidLaugh from '@/assets/wedding/gallery-candid-laugh.jpg'
import ViewEstate from '@/assets/wedding/gallery-view-estate.jpg'

interface Tile {
  src: StaticImageData
  alt: string
  span?: string
  objectPosition?: string
}

const tiles: Tile[] = [
  { src: KissWillow, alt: 'Brautpaar beim Kuss unter einer Trauerweide' },
  { src: Rings, alt: 'Eheringe auf einem Kissen' },
  { src: CeremonyCandles, alt: 'Brautpaar während der Trauung' },
  { src: PortraitPalace, alt: 'Brautpaar vor einem Schloss', span: 'col-span-2', objectPosition: 'center 15%' },
  { src: Confetti, alt: 'Brautpaar wird mit Konfetti empfangen', span: 'col-span-2' },
  { src: CandidLaugh, alt: 'Ausgelassener Moment mit dem Brautpaar' },
  { src: ViewEstate, alt: 'Brautpaar blickt über ein Weingut' },
]

export default function WeddingGallery() {
  return (
    <section id="wedding-gallery" className="py-16 sm:py-24 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeInUp>
          <div className="text-center mb-10 sm:mb-14">
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-rose-600 dark:text-rose-400 mb-3 font-medium">
              Galerie
            </p>
            <h2 className="font-poppins text-2xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
              Ein paar Eindrücke
            </h2>
          </div>
        </FadeInUp>

        <FadeInUp delay="200">
          <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[200px] sm:auto-rows-[260px] gap-3 sm:gap-4 grid-flow-row-dense">
            {tiles.map((tile, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden shadow-md ${tile.span ?? ''}`}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  style={tile.objectPosition ? { objectPosition: tile.objectPosition } : undefined}
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
