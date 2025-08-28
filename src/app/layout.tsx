import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imagefilme-Sauer | Professionelle Videoproduktion",
  description: "Professionelle Imagefilme, Recruiting Videos und Videoproduktionen. Wir erwecken Ihre Marke zum Leben durch beeindruckende visuelle Kommunikation.",
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
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
