export function StructuredData() {
  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "WEID Immobilien",
    "url": "https://weid-immobilien.de",
    "logo": "https://weid-immobilien.de/logo.png",
    "image": "https://weid-immobilien.de/og-image.jpg",
    "areaServed": {
      "@type": "City",
      "name": "Erlangen",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Erlangen",
        "addressRegion": "Bayern",
        "addressCountry": "DE"
      }
    },
    "priceRange": "$$",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WEID Immobilien",
    "url": "https://weid-immobilien.de",
    "telephone": "+49-9131-XXXXXX",
    "email": "info@weid-immobilien.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Straße Nr.]",
      "addressLocality": "Erlangen",
      "postalCode": "91054",
      "addressRegion": "Bayern",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.5975",
      "longitude": "11.0041"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": []
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WEID Immobilien",
    "url": "https://weid-immobilien.de",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://weid-immobilien.de/immobilien?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realEstateAgentSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  );
}
