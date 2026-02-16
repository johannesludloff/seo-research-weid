import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NavLayout } from "@/components/nav-layout";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { getProperty, getProperties } from "@/lib/propstack/api";
import { PropstackUnit } from "@/lib/propstack/types";
import { ImageCarousel } from "@/components/image-carousel";

interface Props {
  params: Promise<{ id: string }>;
}

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

export async function generateStaticParams() {
  const properties = await getProperties();
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const property = await getProperty(id);

  if (!property) {
    return {
      title: "Objekt nicht gefunden | WEID Immobilien",
    };
  }

  const title = `${property.title} | WEID Immobilien`;
  const description = property.description_note?.slice(0, 160) || `${getPropertyTypeLabel(property)} in ${property.city}`;
  const imageUrl = property.images[0]?.big || property.images[0]?.original;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/immobilien/${id}`,
      images: imageUrl ? [
        {
          url: imageUrl,
          alt: property.title,
        },
      ] : undefined,
    },
    alternates: {
      canonical: `/immobilien/${id}`,
    },
  };
}

export default async function ImmobilieDetailPage({ params }: Props) {
  const { id } = await params;
  const property = await getProperty(id);

  if (!property) {
    notFound();
  }

  const images = property.images.map((img) => img.big || img.original);

  return (
    <NavLayout>
      {/* Breadcrumb */}
      <div className="border-b border-warm-sand px-6 py-4 md:px-14">
        <div className="mx-auto max-w-6xl text-xs uppercase tracking-[0.15em] text-taupe">
          <Link href="/immobilien" className="hover:text-noir transition-colors">
            Immobilien
          </Link>
          <span className="mx-2">/</span>
          <span className="text-noir">{property.title}</span>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-6 py-8 md:px-14">
          {images.length > 0 ? (
            <ImageCarousel images={images} />
          ) : (
            <div className="aspect-[16/9] bg-warm-sand/30 flex items-center justify-center">
              <p className="text-taupe">Keine Bilder verfügbar</p>
            </div>
          )}
        </div>
      </section>

      {/* Property Info */}
      <section className="px-6 py-12 md:px-14">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_380px]">
          {/* Main Content */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white"
                  style={{ backgroundColor: property.status.color }}
                >
                  {property.status.name}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-taupe">
                  {property.marketing_type === "RENT" ? "Zur Miete" : "Zum Kauf"}
                </span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.15em] text-taupe">
                {getPropertyTypeLabel(property)} · {property.city}
              </p>
              <h1 className="mt-3 font-display text-3xl md:text-4xl">
                {property.title}
              </h1>
              <p className="mt-4 font-display text-3xl text-espresso">
                {formatPrice(property)}
              </p>
            </Reveal>

            {/* Quick Facts */}
            <Reveal className="mt-8 grid grid-cols-2 gap-4 border-y border-warm-sand py-6 md:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-taupe">Wohnfläche</p>
                <p className="mt-1 text-lg">{property.living_space} m²</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-taupe">Zimmer</p>
                <p className="mt-1 text-lg">{property.number_of_rooms}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-taupe">Baujahr</p>
                <p className="mt-1 text-lg">{property.construction_year}</p>
              </div>
              {property.plot_area && (
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-taupe">Grundstück</p>
                  <p className="mt-1 text-lg">{property.plot_area} m²</p>
                </div>
              )}
              {!property.plot_area && (
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-taupe">Bäder</p>
                  <p className="mt-1 text-lg">{property.number_of_bath_rooms}</p>
                </div>
              )}
            </Reveal>

            {/* Description */}
            <Reveal className="mt-8">
              <h2 className="mb-4 font-display text-xl">Beschreibung</h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-taupe">
                <p>{property.description_note}</p>
              </div>
            </Reveal>

            {/* Location */}
            <Reveal className="mt-8">
              <h2 className="mb-4 font-display text-xl">Lage</h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-taupe">
                <p>{property.location_note}</p>
                <p className="text-sm">
                  <strong>Adresse:</strong> {property.street} {property.house_number}, {property.zip_code} {property.city}
                </p>
              </div>
            </Reveal>

            {/* Details Grid */}
            <Reveal className="mt-8">
              <h2 className="mb-4 font-display text-xl">Details</h2>
              <div className="grid grid-cols-2 gap-4 rounded border border-warm-sand bg-parchment/50 p-6 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-taupe">Objekttyp</p>
                  <p className="mt-1">{getPropertyTypeLabel(property)}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-taupe">Kategorie</p>
                  <p className="mt-1">{property.rs_category.replace(/_/g, " ")}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-taupe">Schlafzimmer</p>
                  <p className="mt-1">{property.number_of_bed_rooms}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-taupe">Badezimmer</p>
                  <p className="mt-1">{property.number_of_bath_rooms}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-taupe">Objekt-Nr.</p>
                  <p className="mt-1">{property.unit_id}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-taupe">PLZ / Ort</p>
                  <p className="mt-1">{property.zip_code} {property.city}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded border border-warm-sand bg-parchment p-6">
              <p className="mb-4 text-xs uppercase tracking-[0.15em] text-taupe">
                Interesse an diesem Objekt?
              </p>
              <LeadForm
                title=""
                subtitle="Wir melden uns innerhalb von 24 Stunden."
                submitLabel="Anfrage senden"
              />
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" asChild className="w-full">
                <Link href="/immobilien">← Alle Objekte</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </NavLayout>
  );
}
