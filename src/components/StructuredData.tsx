'use client'

export default function StructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Imagefilme-Sauer",
    "description": "Professioneller Videograf und Videoproduktion in Dresden, Cottbus und der Lausitz. Spezialist für Imagefilme, Recruiting-Videos, Werbevideos, Hochzeitsvideos und Eventvideos.",
    "url": "https://imagefilme-sauer.de",
    "telephone": "+49-XXX-XXXXXXX", // Hier deine echte Telefonnummer eintragen
    "email": "kontakt@imagefilme-sauer.de", // Hier deine echte E-Mail eintragen
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dresden",
      "addressRegion": "Sachsen",
      "addressCountry": "DE"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dresden"
      },
      {
        "@type": "City", 
        "name": "Cottbus"
      },
      {
        "@type": "GeoCircle",
        "name": "Lausitz"
      }
    ],
    "serviceType": [
      "Videoproduktion",
      "Imagefilm",
      "Recruiting Video",
      "Werbevideo",
      "Hochzeitsvideo",
      "Eventvideo",
      "Corporate Video",
      "Produktvideo"
    ],
    "priceRange": "€€",
    "image": "https://imagefilme-sauer.de/Portrait_01.jpeg",
    "founder": {
      "@type": "Person",
      "name": "Martin Sauer"
    }
  };

  const professionalServiceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Imagefilme-Sauer - Imagefilme Sauer",
    "description": "Professionelle Videoproduktion und Imagefilme in Dresden, Cottbus und der Lausitz",
    "serviceType": "Videoproduktion",
    "provider": {
      "@type": "Person",
      "name": "Martin Sauer",
      "jobTitle": "Videograf",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dresden",
        "addressRegion": "Sachsen",
        "addressCountry": "DE"
      }
    },
    "areaServed": ["Dresden", "Cottbus", "Lausitz"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Videoproduktion Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Imagefilm Produktion",
            "description": "Professionelle Imagefilme für Unternehmen in Dresden und Umgebung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Recruiting Video",
            "description": "Recruiting-Videos zur Mitarbeitergewinnung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Werbevideo",
            "description": "Werbevideos für Marketing und Werbung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hochzeitsvideo",
            "description": "Hochzeitsvideos in Dresden und der Lausitz"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Eventvideo",
            "description": "Professionelle Eventvideos in Cottbus und Umgebung"
          }
        }
      ]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://imagefilme-sauer.de"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData)
        }}
      />
    </>
  );
}
