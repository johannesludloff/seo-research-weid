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
    "Aktuelle Immobilienangebote in Erlangen und Umgebung. Häuser, Wohnungen und Grundstücke - kuratiert von WEID Immobilien.",
};

const priceFormatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const areaFormatter = new Intl.NumberFormat("de-DE", {
  maximumFractionDigits: 0,
});

function formatPrice(property: PropstackUnit): string {
  const value = property.marketing_type === "RENT" ? property.base_rent ?? property.price : property.price;
  const label = property.marketing_type === "RENT" ? " / Monat" : "";
  return `${priceFormatter.format(value)}${label}`;
}

function marketingLabel(type: PropstackUnit["marketing_type"]): string {
  return type === "BUY" ? "Kauf" : "Miete";
}

function typeLabel(property: PropstackUnit): string {
  if (property.rs_type === "HOUSE") return "Haus";
  if (property.rs_type === "PLOT") return "Grundstück";
  return "Wohnung";
}

export default async function ImmobilienPage() {
  const properties = await getProperties();

  return (
    <NavLayout>
      <PageHeader
        eyebrow="Unsere Objekte"
        title="Immobilien in Erlangen"
        subtitle="Kuratierte Auswahl an Häusern, Wohnungen und Grundstücken - jedes Objekt persönlich geprüft."
      />

      <section className="border-b border-warm-sand/70 bg-ivory px-6 py-5 md:px-14">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.16em] text-taupe">Aktuelles Portfolio</p>
          <p className="text-sm text-espresso">
            <span className="font-display text-xl">{properties.length}</span> Objekte verfügbar
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:px-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          {properties.length === 0 ? (
            <Reveal className="rounded border border-warm-sand bg-parchment p-10 text-center">
              <h2 className="font-display text-3xl">Derzeit keine Objekte online</h2>
              <p className="mt-4 text-taupe">
                Wir erhalten laufend neue Angebote. Melden Sie sich bei uns fur eine individuelle Suchanfrage.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/kontakt">Suchprofil anlegen</Link>
                </Button>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
              {properties.map((property, index) => (
                <Reveal
                  key={property.id}
                  className="group overflow-hidden border border-warm-sand bg-ivory transition-all hover:-translate-y-1 hover:border-espresso"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link href={`/immobilien/${property.id}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-parchment">
                      <Image
                        src={property.images[0]?.big ?? property.images[0]?.original ?? "https://picsum.photos/seed/weid-fallback/1400/933"}
                        alt={property.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 text-[11px] uppercase tracking-[0.13em]">
                        <span className="border border-ivory/60 bg-noir/65 px-3 py-1 text-ivory">
                          {marketingLabel(property.marketing_type)}
                        </span>
                        <span className="border border-ivory/60 bg-ivory/95 px-3 py-1 text-noir">
                          {property.status.name}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 p-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-taupe">
                          {typeLabel(property)} - {property.city}
                        </p>
                        <h2 className="mt-2 font-display text-2xl leading-tight text-noir">{property.title}</h2>
                      </div>

                      <p className="font-display text-3xl text-espresso">{formatPrice(property)}</p>

                      <div className="grid grid-cols-3 gap-3 border-t border-warm-sand/70 pt-4 text-sm text-taupe">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.11em]">Wohnfl.</p>
                          <p className="mt-1 text-noir">{areaFormatter.format(property.living_space)} m2</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.11em]">Zimmer</p>
                          <p className="mt-1 text-noir">{property.number_of_rooms}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.11em]">Baujahr</p>
                          <p className="mt-1 text-noir">{property.construction_year ?? "-"}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-parchment px-6 py-16 md:px-14">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl">Nicht das Richtige dabei?</h2>
          <p className="mt-4 text-taupe">
            Wir betreuen auch diskrete Off-Market-Angebote in Erlangen und Umgebung. Sprechen Sie uns an.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </NavLayout>
  );
}
