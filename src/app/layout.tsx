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
  title: "Videograf Dresden | Imagefilme & Videoproduktion Lausitz | Martin Sauer",
  description: "Professioneller Videograf in Dresden, Cottbus & Lausitz. Spezialist für Imagefilme, Recruiting-Videos, Werbevideoproduktion, Hochzeitsvideos & Eventvideos. Jetzt kostenlos beraten lassen!",
  keywords: "Videograf Dresden, Videoproduktion Dresden, Imagefilm Dresden, Videograf Cottbus, Videoproduktion Lausitz, Imagevideo, Werbevideo, Recruitingvideo, Hochzeitsvideo Dresden, Eventvideo Cottbus, Corporate Video, Produktvideo, Drohnenvideo",
  authors: [{ name: "Martin Sauer - Imagefilme-Sauer" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://imagefilme-sauer.de"
  },
  openGraph: {
    title: "Videograf Dresden | Imagefilme & Videoproduktion Lausitz",
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
    title: "Videograf Dresden | Imagefilme & Videoproduktion Lausitz",
    description: "Professioneller Videograf in Dresden, Cottbus & Lausitz für Imagefilme, Recruiting-Videos & mehr.",
    images: ["/Portrait_01.jpeg"]
  },
  other: {
    "geo.region": "DE-SN",
    "geo.placename": "Dresden",
    "geo.position": "51.0504;13.7373"
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
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
