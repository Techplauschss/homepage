import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hochzeitsfotografie | Martin Sauer',
  description: 'Einfühlsame, authentische Hochzeitsfotografie in Dresden, der Lausitz und deutschlandweit – von Videoproduzent Martin Sauer.',
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
