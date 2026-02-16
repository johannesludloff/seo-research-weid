import { Metadata } from "next";
import { NavLayout } from "@/components/nav-layout";
import { PageHeader } from "@/components/page-header";
import { SectionPlaceholder } from "@/components/section-placeholder";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns | WEID Immobilien Erlangen",
  description:
    "Lernen Sie WEID Immobilien kennen — Ihr lokaler Partner für Immobilien in Erlangen. Geschichte, Team und Werte.",
};

export default function UeberUnsPage() {
  return (
    <NavLayout>
      <PageHeader
        eyebrow="Über uns"
        title="Immobilien mit Haltung"
        subtitle="Lokal verwurzelt, persönlich engagiert — seit [Jahr] in Erlangen."
      />

      {/* Story */}
      <section className="px-6 py-16 md:px-14">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl">Unsere Geschichte</h2>
            <div className="mt-6 space-y-4 text-taupe">
              <p>
                [Platzhalter für Firmengeschichte] — WEID Immobilien wurde gegründet mit der Vision,
                Immobilienverkauf in Erlangen persönlicher und transparenter zu gestalten.
              </p>
              <p>
                Als inhabergeführtes Unternehmen legen wir Wert auf direkte Kommunikation,
                ehrliche Beratung und nachhaltige Kundenbeziehungen.
              </p>
              <p>
                Unser Fokus liegt auf dem Erlanger Markt — hier kennen wir jeden Stadtteil,
                jede Entwicklung und den realistischen Wert Ihrer Immobilie.
              </p>
            </div>
          </Reveal>

          <SectionPlaceholder
            label="Bild / Team-Foto"
            description="Professionelles Teamfoto oder Bürobild"
            variant="muted"
            minHeight="min-h-[300px]"
          />
        </div>
      </section>

      {/* Values */}
      <section className="bg-parchment px-6 py-16 md:px-14">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="font-display text-2xl md:text-3xl">Unsere Werte</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Ehrlichkeit",
                desc: "Wir sagen, was wir denken — auch wenn es nicht das ist, was Sie hören wollen.",
              },
              {
                title: "Lokale Expertise",
                desc: "Erlangen ist unser Zuhause. Wir kennen den Markt, nicht nur die Zahlen.",
              },
              {
                title: "Persönlicher Service",
                desc: "Ein Ansprechpartner, keine Weitergabe. Wir begleiten Sie vom Anfang bis zum Ende.",
              },
            ].map((value) => (
              <Reveal key={value.title} className="text-center">
                <h3 className="font-display text-xl">{value.title}</h3>
                <p className="mt-3 text-taupe">{value.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team — Placeholder */}
      <section className="px-6 py-16 md:px-14">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl">Unser Team</h2>
            <p className="mt-4 text-taupe">Die Menschen hinter WEID Immobilien.</p>
          </Reveal>

          <SectionPlaceholder
            label="Team-Grid"
            description="Teamfotos mit Namen und Positionen (Design TBD)"
            variant="light"
            minHeight="min-h-[250px]"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-noir px-6 py-16 text-ivory md:px-14">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl">
            Lernen Sie uns persönlich kennen
          </h2>
          <p className="mt-4 text-ivory/70">
            Vereinbaren Sie ein unverbindliches Gespräch — wir freuen uns auf Sie.
          </p>
          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </NavLayout>
  );
}
