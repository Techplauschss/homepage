import type { Metadata } from 'next'
import ProjectOverview from '@/components/ProjectOverview'

export const metadata: Metadata = {
  title: 'Projektübersicht & Referenzen | Martin Sauer Videoproduktion',
  description: 'Entdecken Sie die Projektauswahl von Image- & Videoproduktionen Sauer: Imagefilme, Recruiting-Videos und Eventberichte aus Dresden, Sachsen und der Lausitz.',
  alternates: {
    canonical: 'https://imagefilme-sauer.de/projektuebersicht',
  },
}

export default function ProjectOverviewPage() {
  return <ProjectOverview />
}
