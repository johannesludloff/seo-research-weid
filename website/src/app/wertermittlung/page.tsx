import { Metadata } from "next";
import { NavLayout } from "@/components/nav-layout";
import { PageHeader } from "@/components/page-header";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Kostenlose Immobilienbewertung Erlangen | WEID Immobilien",
  description:
    "Kostenlose und unverbindliche Wertermittlung für Ihre Immobilie in Erlangen. Professionelle Bewertung durch lokale Experten.",
  openGraph: {
    title: "Kostenlose Immobilienbewertung Erlangen | WEID Immobilien",
    description:
      "Kostenlose und unverbindliche Wertermittlung für Ihre Immobilie in Erlangen. Professionelle Bewertung durch lokale Experten.",
    url: '/wertermittlung',
  },
  alternates: {
    canonical: '/wertermittlung',
  },
};

export default function WertermittlungPage() {
  return (
    <NavLayout>
      <PageHeader
        eyebrow="Kostenlos & unverbindlich"
        title="Was ist Ihre Immobilie wert?"
        subtitle="Erhalten Sie eine professionelle Einschätzung — basierend auf lokaler Marktkenntnis und aktuellen Vergleichsdaten."
      />

      <section className="px-6 py-16 md:px-14">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Benefits */}
          <div>
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl">
                Warum eine professionelle Bewertung?
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Marktgerechter Preis",
                  desc: "Zu hohe Preise schrecken ab, zu niedrige kosten Geld. Wir finden die richtige Balance.",
                },
                {
                  title: "Fundierte Grundlage",
                  desc: "Unsere Bewertung basiert auf echten Verkaufsdaten aus Erlangen — nicht auf Algorithmen.",
                },
                {
                  title: "Keine Verpflichtung",
                  desc: "Die Erstbewertung ist kostenlos. Sie entscheiden danach frei, ob Sie verkaufen möchten.",
                },
                {
                  title: "Persönliches Gespräch",
                  desc: "Wir besprechen die Bewertung mit Ihnen — transparent und ohne Druck.",
                },
              ].map((item) => (
                <Reveal key={item.title} className="flex gap-4">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-espresso" />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="mt-1 text-taupe">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 border-t border-warm-sand pt-8">
              <p className="text-xs uppercase tracking-[0.15em] text-taupe">So funktioniert's</p>
              <ol className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="font-display text-lg">1.</span>
                  <span>Sie füllen das Formular aus</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-lg">2.</span>
                  <span>Wir melden uns innerhalb von 24h</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-lg">3.</span>
                  <span>Optionaler Vor-Ort-Termin für präzise Bewertung</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-lg">4.</span>
                  <span>Sie erhalten Ihre Werteinschätzung</span>
                </li>
              </ol>
            </Reveal>
          </div>

          {/* Form */}
          <div className="rounded border border-warm-sand bg-parchment p-8">
            <LeadForm
              title="Jetzt Wert anfragen"
              subtitle="Füllen Sie das Formular aus — wir melden uns schnellstmöglich."
              submitLabel="Kostenlose Bewertung anfragen"
              variant="wertermittlung"
            />
          </div>
        </div>
      </section>
    </NavLayout>
  );
}
