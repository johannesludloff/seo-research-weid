import { Metadata } from "next";
import { NavLayout } from "@/components/nav-layout";
import { SectionPlaceholder } from "@/components/section-placeholder";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

/**
 * Dynamic property detail page.
 * 
 * TODO: Connect to Propstack API
 * - Fetch property details by ID
 * - Generate static paths for all properties
 * - Add image gallery
 * - Add floor plans, energy certificate, etc.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  // TODO: Fetch property title from Propstack
  return {
    title: `Objekt ${id} | WEID Immobilien`,
    description: "Immobiliendetails bei WEID Immobilien Erlangen.",
  };
}

export default async function ImmobilieDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <NavLayout>
      {/* Breadcrumb */}
      <div className="border-b border-warm-sand px-6 py-4 md:px-14">
        <div className="mx-auto max-w-6xl text-xs uppercase tracking-[0.15em] text-taupe">
          <Link href="/immobilien" className="hover:text-noir">
            Immobilien
          </Link>
          <span className="mx-2">/</span>
          <span className="text-noir">Objekt {id}</span>
        </div>
      </div>

      {/* Image Gallery — Placeholder */}
      <SectionPlaceholder
        label="Bildergalerie"
        description="Hauptbild + Thumbnails / Lightbox (Propstack-Bilder)"
        variant="muted"
        minHeight="min-h-[400px]"
      />

      {/* Property Info */}
      <section className="px-6 py-12 md:px-14">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_380px]">
          {/* Main Content */}
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.15em] text-taupe">
                Wohnung · Erlangen Burgberg
              </p>
              <h1 className="mt-3 font-display text-3xl md:text-4xl">
                Lichtdurchflutete 3-Zimmer-Wohnung mit Blick ins Grüne
              </h1>
              <p className="mt-4 text-2xl">€ 385.000</p>
            </Reveal>

            {/* Quick Facts */}
            <Reveal className="mt-8 grid grid-cols-2 gap-4 border-y border-warm-sand py-6 md:grid-cols-4">
              {[
                { label: "Wohnfläche", value: "85 m²" },
                { label: "Zimmer", value: "3" },
                { label: "Baujahr", value: "2018" },
                { label: "Etage", value: "2. OG" },
              ].map((fact) => (
                <div key={fact.label}>
                  <p className="text-xs uppercase tracking-[0.1em] text-taupe">{fact.label}</p>
                  <p className="mt-1 text-lg">{fact.value}</p>
                </div>
              ))}
            </Reveal>

            {/* Description — Placeholder */}
            <Reveal className="mt-8">
              <h2 className="mb-4 font-display text-xl">Beschreibung</h2>
              <div className="space-y-4 text-taupe">
                <p>
                  [Propstack: Objektbeschreibung] — Diese Sektion wird mit dem Beschreibungstext
                  aus Propstack gefüllt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>
            </Reveal>

            {/* Features — Placeholder */}
            <SectionPlaceholder
              label="Ausstattung & Details"
              description="Feature-Liste aus Propstack (Aufzug, Balkon, TG-Stellplatz, etc.)"
              variant="light"
              minHeight="min-h-[150px]"
            />

            {/* Location / Map — Placeholder */}
            <SectionPlaceholder
              label="Lage & Umgebung"
              description="Karte + Stadtteil-Info + Infrastruktur"
              variant="muted"
              minHeight="min-h-[200px]"
            />
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
