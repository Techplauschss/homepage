import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import StructuredData from '@/components/StructuredData'
import EnhancedSEO from '@/components/EnhancedSEO'

export default function Home() {
  return (
    <>
      <StructuredData />
      <EnhancedSEO />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
