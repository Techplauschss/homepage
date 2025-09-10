import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Imagefilme Sauer | Videoproduktion & Imagefilme Lausitz | Martin Sauer",
  description: "Professioneller Videograf in Dresden, Cottbus & Lausitz. Spezialist für Imagefilme, Recruiting-Videos, Werbevideoproduktion, Hochzeitsvideos & Eventvideos. Jetzt kostenlos beraten lassen!",
  keywords: "Imagefilme Sauer, Videoproduktion Dresden, Imagefilm Dresden, Videograf Cottbus, Videoproduktion Lausitz, Imagevideo, Werbevideo, Recruitingvideo, Hochzeitsvideo Dresden, Eventvideo Cottbus, Corporate Video, Produktvideo, Drohnenvideo",
  authors: [{ name: "Martin Sauer - Imagefilme-Sauer" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://imagefilme-sauer.de"
  },
  openGraph: {
    title: "Imagefilme Sauer | Videoproduktion & Imagefilme Lausitz",
    description: "Professioneller Videograf in Dresden, Cottbus & Lausitz. Imagefilme, Recruiting-Videos, Werbevideos & mehr.",
    url: "https://imagefilme-sauer.de",
    siteName: "Imagefilme-Sauer",
    images: [
      {
        url: "/Portrait_01.jpeg",
        width: 1200,
        height: 630,
        alt: "Videograf Martin Sauer aus Dresden"
      }
    ],
    locale: "de_DE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Imagefilme Sauer | Videoproduktion & Imagefilme Lausitz",
    description: "Professioneller Videograf in Dresden, Cottbus & Lausitz für Imagefilme, Recruiting-Videos & mehr.",
    images: ["/Portrait_01.jpeg"]
  },
  other: {
    "geo.region": "DE-SN",
    "geo.placename": "Dresden",
    "geo.position": "51.0504;13.7373"
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon.png', type: 'image/png', sizes: '96x96' },
    ],
    shortcut: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/favicon.png', type: 'image/png', sizes: '180x180' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.png',
        color: '#3b82f6'
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
