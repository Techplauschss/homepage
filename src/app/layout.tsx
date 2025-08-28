import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Imagefilme-Sauer | Professionelle Videoproduktion",
  description: "Professionelle Imagefilme, Recruiting-Videos und Videoproduktionen. Ich erwecke Ihre Marke zum Leben durch beeindruckende visuelle Kommunikation.",
  keywords: "Imagefilm, Videoproduktion, Recruiting Video, Produktvideo, Corporate Video",
  authors: [{ name: "Imagefilme-Sauer" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
