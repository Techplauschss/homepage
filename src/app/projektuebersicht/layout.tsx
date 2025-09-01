import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projektübersicht | Imagefilme-Sauer',
  description: 'Private Projektübersicht - Alle Webanwendungen und Projekte im Überblick',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
