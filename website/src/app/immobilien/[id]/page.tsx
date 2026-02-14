import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NavLayout } from "@/components/nav-layout";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { getProperties, getProperty } from "@/lib/propstack/api";
import { PropstackUnit } from "@/lib/propstack/types";

interface Props {
  params: Promise<{ id: string }>;
}

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
  const suffix = property.marketing_type === "RENT" ? " / Monat" : "";
  return `${priceFormatter.format(value)}${suffix}`;
}

function typeLabel(property: PropstackUnit): string {
  if (property.rs_type === "HOUSE") return "Haus";
  if (property.rs_type === "PLOT") return "Grundstuck";
  return "Wohnung";
}

export async function generateStaticParams() {
  const properties = await getProperties();
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const property = await getProperty(id);

  if (!property) {
    return {
      title: "Objekt nicht gefunden | WEID Immobilien",
      description: "Dieses Immobilienangebot ist nicht mehr verfugbar.",
    };
  }

  return {
    title: `${property.title} | WEID Immobilien`,
    description: property.description_note,
  };
}

export default async function ImmobilieDetailPage({ params }: Props) {
  const { id } = await params;
  const property = await getProperty(id);

  if (!property) {
    notFound();
  }

  const heroImage = property.images[0]?.original ?? "https://picsum.photos/seed/weid-detail-fallback/1920/1280";
  const galleryImages = property.images.slice(1);

  return (
    <NavLayout>
      <div className="border-b border-warm-sand px-6 py-4 md:px-14">
        <div className="mx-auto max-w-6xl text-xs uppercase tracking-[0.15em] text-taupe">
          <Link href="/immobilien" className="hover:text-noir">
            Immobilien
          </Link>
          <span className="mx-2">/</span>
          <span className="text-noir">{property.title}</span>
        </div>
      </div>

      <section className="px-6 pt-8 md:px-14 md:pt-10">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[2fr_1fr]">
          <div className="relative aspect-[16/10] overflow-hidden border border-warm-sand bg-parchment">
            <Image
              src={heroImage}
              alt={property.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {galleryImages.map((image, index) => (
              <div key={`${image.thumb}-${index}`} className="relative aspect-[16/10] overflow-hidden border border-warm-sand bg-parchment">
                <Image
                  src={image.medium}
                  alt={`${property.title} Ansicht ${index + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-14">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.15em] text-taupe">
                {typeLabel(property)} - {property.zip_code} {property.city}
              </p>
              <h1 className="mt-3 font-display text-3xl leading-tight md:text-5xl">{property.title}</h1>
              <p className="mt-5 font-display text-4xl text-espresso">{formatPrice(property)}</p>
            </Reveal>

            <Reveal className="mt-8 grid grid-cols-2 gap-4 border-y border-warm-sand py-6 md:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-taupe">Wohnflache</p>
                <p className="mt-1 text-lg">{areaFormatter.format(property.living_space)} m2</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-taupe">Zimmer</p>
                <p className="mt-1 text-lg">{property.number_of_rooms}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-taupe">Schlafzimmer</p>
                <p className="mt-1 text-lg">{property.number_of_bed_rooms ?? "-"}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-taupe">Baujahr</p>
                <p className="mt-1 text-lg">{property.construction_year ?? "-"}</p>
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="mb-4 font-display text-2xl">Beschreibung</h2>
              <div className="space-y-4 text-taupe">
                <p>{property.description_note}</p>
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="mb-4 font-display text-2xl">Lage</h2>
              <p className="text-taupe">{property.location_note}</p>
            </Reveal>

            <Reveal className="mt-10 border border-warm-sand bg-parchment p-6">
              <h2 className="font-display text-2xl">Objektdaten</h2>
              <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
                <p>
                  <span className="text-taupe">Objektnummer:</span> {property.unit_id}
                </p>
                <p>
                  <span className="text-taupe">Status:</span> {property.status.name}
                </p>
                <p>
                  <span className="text-taupe">Adresse:</span> {property.street} {property.house_number}
                </p>
                <p>
                  <span className="text-taupe">Ort:</span> {property.zip_code} {property.city}
                </p>
                {property.plot_area ? (
                  <p>
                    <span className="text-taupe">Grundstucksflache:</span> {areaFormatter.format(property.plot_area)} m2
                  </p>
                ) : null}
                <p>
                  <span className="text-taupe">Badezimmer:</span> {property.number_of_bath_rooms ?? "-"}
                </p>
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded border border-warm-sand bg-parchment p-6">
              <p className="mb-4 text-xs uppercase tracking-[0.15em] text-taupe">Interesse an diesem Objekt?</p>
              <LeadForm
                title=""
                subtitle="Wir melden uns innerhalb von 24 Stunden mit allen Details."
                submitLabel="Anfrage senden"
              />
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" asChild className="w-full">
                <Link href="/immobilien">Alle Objekte</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </NavLayout>
  );
}
