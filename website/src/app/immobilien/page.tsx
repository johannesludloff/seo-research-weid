import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NavLayout } from "@/components/nav-layout";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { getProperties } from "@/lib/propstack/api";
import { PropstackUnit } from "@/lib/propstack/types";

export const metadata: Metadata = {
  title: "Immobilien in Erlangen | WEID Immobilien",
  description:
    "Aktuelle Immobilienangebote in Erlangen und Umgebung. Häuser, Wohnungen und Grundstücke — kuratiert von WEID Immobilien.",
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
    <NavLayout>
      <PageHeader
        eyebrow="Unsere Objekte"
        title="Immobilien in Erlangen"
        subtitle="Kuratierte Auswahl an Häusern, Wohnungen und Grundstücken — jedes Objekt persönlich geprüft."
      />

      {/* Filter Bar */}
      <section className="border-b border-warm-sand px-6 py-6 md:px-14">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4">
          <span className="text-xs uppercase tracking-[0.15em] text-taupe">Filter:</span>
          {["Alle", "Kauf", "Miete"].map((filter, i) => (
            <button
              key={filter}
              className={`rounded-none border px-4 py-2 text-xs uppercase tracking-[0.1em] transition-colors ${
                i === 0
                  ? "border-noir bg-noir text-ivory"
                  : "border-warm-sand hover:border-noir"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Property Grid */}
      <section className="px-6 py-16 md:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property, index) => (
              <Reveal key={property.id} delay={index * 80}>
                <Link
                  href={`/immobilien/${property.id}`}
                  className="group block border border-warm-sand transition-all duration-300 hover:border-espresso hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-parchment">
                    {property.images[0] && (
                      <Image
                        src={property.images[0].medium}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {/* Status Badge */}
                    <span
                      className="absolute left-4 top-4 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white"
                      style={{ backgroundColor: property.status.color }}
                    >
                      {property.status.name}
                    </span>
                    {/* Marketing Type */}
                    <span className="absolute right-4 top-4 bg-noir/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-ivory">
                      {getMarketingLabel(property)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.15em] text-taupe">
                      {getPropertyTypeLabel(property)} · {property.city}
                    </p>
                    <h3 className="mt-2 font-display text-xl leading-tight transition-colors group-hover:text-espresso">
                      {property.title}
                    </h3>
                    <p className="mt-3 font-display text-xl text-espresso">
                      {formatPrice(property)}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-taupe">
                      <span>{property.living_space} m²</span>
                      <span className="text-warm-sand">·</span>
                      <span>{property.number_of_rooms} Zimmer</span>
                      {property.plot_area && (
                        <>
                          <span className="text-warm-sand">·</span>
                          <span>{property.plot_area} m² Grund</span>
                        </>
                      )}
                    </div>
                    <p className="mt-3 text-xs text-taupe/70">
                      {property.street} {property.house_number}, {property.zip_code} {property.city}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {properties.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-taupe">
                Aktuell keine Objekte verfügbar. Schauen Sie bald wieder vorbei.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-parchment px-6 py-16 md:px-14">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl">
            Nicht das Richtige dabei?
          </h2>
          <p className="mt-4 text-taupe">
            Wir haben auch Off-Market-Objekte, die nicht öffentlich inseriert sind. 
            Registrieren Sie sich für unsere Interessentenliste.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/wertermittlung">Eigene Immobilie bewerten</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </NavLayout>
  );
}
