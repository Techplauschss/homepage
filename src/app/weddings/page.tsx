import WeddingHero from '@/components/wedding/WeddingHero'
import WeddingAbout from '@/components/wedding/WeddingAbout'
import WeddingGallery from '@/components/wedding/WeddingGallery'
import WeddingPackages from '@/components/wedding/WeddingPackages'
import WeddingContact from '@/components/wedding/WeddingContact'
import WeddingFooter from '@/components/wedding/WeddingFooter'

export default function WeddingsPage() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <WeddingHero />
      <WeddingAbout />
      <WeddingGallery />
      <WeddingPackages />
      <WeddingContact />
      <WeddingFooter />
    </main>
  )
}
