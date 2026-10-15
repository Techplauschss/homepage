import Link from 'next/link'

export default function WeddingFooter() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-8 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm">
          © {new Date().getFullYear()} Martin Sauer. Alle Rechte vorbehalten.
        </p>
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
          <Link href="/datenschutz" className="hover:text-rose-400 transition-colors">
            Datenschutz
          </Link>
          <Link href="/impressum" className="hover:text-rose-400 transition-colors">
            Impressum
          </Link>
          <Link href="/" className="hover:text-rose-400 transition-colors">
            Zur Hauptseite
          </Link>
        </div>
      </div>
    </footer>
  )
}
