'use client'

export default function EnhancedSEO() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Imagefilme-Sauer",
    "alternateName": "Martin Sauer Videoproduktion",
    "url": "https://imagefilme-sauer.de",
    "logo": "https://imagefilme-sauer.de/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-XXX-XXXXXXX", // Hier echte Nummer eintragen
      "contactType": "customer service",
      "areaServed": ["Dresden", "Cottbus", "Lausitz", "Sachsen", "Brandenburg"],
      "availableLanguage": ["German"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dresden",
      "addressRegion": "Sachsen",
      "addressCountry": "DE"
    },
    "sameAs": [
      "https://www.facebook.com/imagefilme.sauer", // Falls vorhanden
      "https://www.instagram.com/imagefilme_sauer", // Falls vorhanden
      "https://www.linkedin.com/in/martin-sauer-videograf" // Falls vorhanden
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Imagefilme-Sauer",
    "url": "https://imagefilme-sauer.de",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://imagefilme-sauer.de/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Bieten Sie Videoproduktion in Dresden an?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wir bieten professionelle Videoproduktion in Dresden und Umgebung an. Dazu gehören Imagefilme, Werbevideos, Hochzeitsvideos und Eventvideos."
        }
      },
      {
        "@type": "Question", 
        "name": "Erstellen Sie auch Videos in Cottbus und der Lausitz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Selbstverständlich! Wir sind spezialisiert auf Videoproduktionen in Cottbus und der gesamten Lausitz-Region in Brandenburg."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet ein Imagefilm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Kosten für einen Imagefilm hängen von verschiedenen Faktoren ab wie Länge, Komplexität und Produktionsaufwand. Kontaktieren Sie uns für ein individuelles Angebot."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert die Produktion eines Videos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Produktionsdauer variiert je nach Projekt. Ein einfaches Video kann in 1-2 Wochen fertig sein, während komplexere Produktionen 4-6 Wochen dauern können."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData)
        }}
      />
    </>
  );
}
