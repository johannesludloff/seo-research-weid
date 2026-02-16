'use client';

import Image from "next/image";
import Link from "next/link";
import { useProperties } from "@/lib/propstack/hooks";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { getProperties } from "@/lib/propstack/api";
import { PropstackUnit } from "@/lib/propstack/types";

export const metadata: Metadata = {
  title: "Immobilien in Erlangen | WEID Immobilien",
  description:
    "Aktuelle Immobilienangebote in Erlangen und Umgebung. Häuser, Wohnungen und Grundstücke — kuratiert von WEID Immobilien.",
  openGraph: {
    title: "Immobilien in Erlangen | WEID Immobilien",
    description:
      "Aktuelle Immobilienangebote in Erlangen und Umgebung. Häuser, Wohnungen und Grundstücke — kuratiert von WEID Immobilien.",
    url: '/immobilien',
  },
  alternates: {
    canonical: '/immobilien',
  },
};

function formatPrice(property: PropstackUnit): string {
  if (property.marketing_type === "RENT") {
    return `€ ${property.base_rent?.toLocaleString("de-DE")} /Monat`;
  }
  return `€ ${property.price.toLocaleString("de-DE")}`;
}

function getPropertyTypeLabel(property: PropstackUnit): string {
  const typeMap: Record<string, string> = {
    APARTMENT: "Wohnung",
    HOUSE: "Haus",
    LAND: "Grundstück",
    COMMERCIAL: "Gewerbe",
  };
  return typeMap[property.rs_type] || property.rs_type;
}

function getMarketingLabel(property: PropstackUnit): string {
  return property.marketing_type === "RENT" ? "Miete" : "Kauf";
}

export default async function ImmobilienPage() {
  const properties = await getProperties();

  return (
    <main className="min-h-screen bg-ivory text-noir pt-32 pb-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.3em] text-taupe mb-4">
              Portfolio
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              Ausgewählte <br />
              <span className="italic text-espresso">Immobilien.</span>
            </h1>
          </Reveal>
        </header>

        {loading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/5] bg-parchment rounded-sm" />
            ))}
          </div>
        ) : error ? (
          <div className="bg-parchment p-12 text-center rounded-sm border border-warm-sand">
            <p className="text-taupe">Fehler beim Laden der Immobilien.</p>
            <Button variant="outline" className="mt-6" onClick={() => window.location.reload()}>
              Erneut versuchen
            </Button>
          </div>
        ) : (
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property, i) => (
              <Reveal key={property.id} delay={i * 50}>
                <Link href={`/immobilien/${property.id}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-6">
                    <Image
                      src={property.images[0]?.url || "https://picsum.photos/seed/weid-placeholder/800/1000"}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-ivory/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-wider text-espresso">
                        {property.marketing_type === 'buy' ? 'Kauf' : 'Miete'}
                      </span>
                      {property.is_exclusive && (
                        <span className="bg-espresso text-ivory px-3 py-1 text-[10px] uppercase tracking-wider">
                          Exklusiv
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-[10px] uppercase tracking-widest text-taupe mb-2">
                    {property.location.city} {property.location.district ? `· ${property.location.district}` : ''}
                  </p>
                  <h3 className="font-display text-2xl mb-4 leading-tight group-hover:text-espresso transition-colors">
                    {property.title}
                  </h3>

                  <div className="flex gap-4 items-center text-[11px] uppercase tracking-wider text-taupe border-t border-warm-sand/30 pt-4">
                    <span>{property.features.area_living} m²</span>
                    <span className="text-warm-sand/40">|</span>
                    <span>{property.features.rooms} Zimmer</span>
                    <div className="ml-auto font-medium text-espresso">
                      {property.prices.buy ? (
                        new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(property.prices.buy)
                      ) : (
                        `${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(property.prices.rent_cold || 0)} mtl.`
                      )}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
