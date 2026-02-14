import { Metadata } from "next";
import { NavLayout } from "@/components/nav-layout";
import { PageHeader } from "@/components/page-header";
import { SectionPlaceholder } from "@/components/section-placeholder";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Immobilien in Erlangen | WEID Immobilien",
  description:
    "Aktuelle Immobilienangebote in Erlangen und Umgebung. Häuser, Wohnungen und Grundstücke — kuratiert von WEID Immobilien.",
};

/**
 * Immobilien listing page.
 * 
 * TODO: Connect to Propstack API
 * - Fetch listings from Propstack
 * - Implement filters (type, price, area)
 * - Add pagination
 */
export default function ImmobilienPage() {
  return (
    <NavLayout>
      <PageHeader
        eyebrow="Unsere Objekte"
        title="Immobilien in Erlangen"
        subtitle="Kuratierte Auswahl an Häusern, Wohnungen und Grundstücken — jedes Objekt persönlich geprüft."
      />

      {/* Filter Bar — Placeholder */}
      <section className="border-b border-warm-sand px-6 py-6 md:px-14">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4">
          <span className="text-xs uppercase tracking-[0.15em] text-taupe">Filter:</span>
          {["Alle", "Häuser", "Wohnungen", "Grundstücke"].map((filter) => (
            <button
              key={filter}
              className="rounded-none border border-warm-sand px-4 py-2 text-xs uppercase tracking-[0.1em] transition-colors first:border-noir first:bg-noir first:text-ivory hover:border-noir"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Listing Grid — Placeholder for Propstack */}
      <section className="px-6 py-16 md:px-14">
        <div className="mx-auto max-w-6xl">
          <SectionPlaceholder
            label="Propstack Immobilien-Feed"
            description="Hier werden die aktuellen Objekte aus Propstack angezeigt. Grid-Layout mit Karten."
            variant="light"
            minHeight="min-h-[500px]"
          />

          {/* Example card structure for reference */}
          <Reveal className="mt-12">
            <p className="mb-4 text-xs uppercase tracking-[0.15em] text-taupe">
              Beispiel-Kartenstruktur:
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Link
                  key={i}
                  href={`/immobilien/beispiel-${i}`}
                  className="group block border border-warm-sand transition-colors hover:border-espresso"
                >
                  <div className="aspect-[4/3] bg-parchment" />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.15em] text-taupe">
                      Wohnung · Burgberg
                    </p>
                    <h3 className="mt-2 font-display text-xl group-hover:text-espresso">
                      Lichtdurchflutete 3-Zimmer-Wohnung
                    </h3>
                    <p className="mt-3 text-lg">€ 385.000</p>
                    <p className="mt-1 text-sm text-taupe">85 m² · 3 Zimmer · Balkon</p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-parchment px-6 py-16 md:px-14">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl">
            Nicht das Richtige dabei?
          </h2>
          <p className="mt-4 text-taupe">
            Wir haben auch Off-Market-Objekte. Lassen Sie sich unverbindlich beraten.
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
