import { Metadata } from "next";
import { NavLayout } from "@/components/nav-layout";
import { PageHeader } from "@/components/page-header";
import { SectionPlaceholder } from "@/components/section-placeholder";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Immobilie verkaufen in Erlangen | WEID Immobilien",
  description:
    "Verkaufen Sie Ihre Immobilie in Erlangen mit WEID Immobilien. Professionelle Bewertung, diskrete Vermarktung und persönliche Betreuung.",
  openGraph: {
    title: "Immobilie verkaufen in Erlangen | WEID Immobilien",
    description:
      "Verkaufen Sie Ihre Immobilie in Erlangen mit WEID Immobilien. Professionelle Bewertung, diskrete Vermarktung und persönliche Betreuung.",
    url: '/verkaufen',
  },
  alternates: {
    canonical: '/verkaufen',
  },
};

export default function VerkaufenPage() {
  return (
    <NavLayout>
      <PageHeader
        eyebrow="Für Eigentümer"
        title="Ihre Immobilie verdient den besten Auftritt"
        subtitle="Wir begleiten Sie vom ersten Gespräch bis zur Übergabe — mit Klarheit, Diskretion und lokaler Expertise."
      />

      {/* USPs / Leistungen */}
      <section className="px-6 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="mb-12 font-display text-3xl md:text-4xl">
              Unsere Leistungen für Sie
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Präzise Bewertung",
                desc: "Marktgerechte Wertermittlung basierend auf lokaler Expertise und aktuellen Vergleichsdaten.",
              },
              {
                title: "Diskrete Vermarktung",
                desc: "Professionelle Exposés und zielgerichtete Ansprache — auf Wunsch auch Off-Market.",
              },
              {
                title: "Persönliche Betreuung",
                desc: "Ein Ansprechpartner von der Bewertung bis zum Notar. Keine Callcenter, keine Weitergabe.",
              },
            ].map((item) => (
              <Reveal key={item.title} className="border-t border-warm-sand pt-6">
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-taupe">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess — Placeholder */}
      <SectionPlaceholder
        label="Verkaufsprozess"
        description="Schritt-für-Schritt Visualisierung (Design TBD)"
        variant="muted"
      />

      {/* Referenzen / Trust — Placeholder */}
      <SectionPlaceholder
        label="Referenzen & Kundenstimmen"
        description="Testimonials oder verkaufte Objekte (Design TBD)"
        variant="light"
      />

      {/* CTA / Kontakt */}
      <section className="bg-noir px-6 py-20 text-ivory md:px-14">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-ivory/60">
              Nächster Schritt
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              Lassen Sie uns über Ihre Immobilie sprechen
            </h2>
            <p className="mt-4 text-ivory/70">
              Kostenlose und unverbindliche Erstberatung. Wir melden uns innerhalb von 24 Stunden.
            </p>
          </Reveal>
          <div className="rounded bg-ivory p-8 text-noir">
            <LeadForm
              title=""
              submitLabel="Beratung anfragen"
            />
          </div>
        </div>
      </section>
    </NavLayout>
  );
}
