export default function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://imagefilme-sauer.de/#business",
    "name": "Image- & Videoproduktionen Sauer",
    "alternateName": "Imagefilme Sauer",
    "url": "https://imagefilme-sauer.de",
    "logo": "https://imagefilme-sauer.de/favicon.png",
    "image": "https://imagefilme-sauer.de/Portrait_01.jpeg",
    "telephone": "+49 151 53352436",
    "email": "service@imagefilme-sauer.de",
    "priceRange": "€€ - €€€",
    "founder": {
      "@type": "Person",
      "name": "Martin Sauer",
      "jobTitle": "Videoproduzent & Videograf"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dresden",
      "postalCode": "01159",
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
        "@type": "AdministrativeArea",
        "name": "Lausitz"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Sachsen"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Brandenburg"
      },
      {
        "@type": "Country",
        "name": "Deutschland"
      }
    ],
    "serviceType": [
      "Videoproduktion",
      "Imagefilm",
      "Unternehmensfilm",
      "Recruiting Video",
      "Werbevideo",
      "Eventvideo",
      "Drohnenaufnahmen",
      "Postproduktion"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Videoproduktion Dienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Imagefilm Produktion Dresden & Lausitz",
            "description": "Professionelle Imagefilme und Unternehmensporträts für Unternehmen, Institutionen und Organisationen in Sachsen und Brandenburg."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Recruiting-Videos",
            "description": "Zielgerichtete Mitarbeitergewinnung und Employer Branding durch emotionale Videoformate."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Eventfilme & Dokumentation",
            "description": "Dokumentation von Firmenjubiläen, Kongressen, Messen und Kulturevents."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Produkt- & Werbevideos",
            "description": "Dynamische Produktvideos und Werbespots für Web, Social Media und Kampagnen."
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
          __html: JSON.stringify(businessData)
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
