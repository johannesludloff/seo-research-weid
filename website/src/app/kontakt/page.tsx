import { Metadata } from "next";
import { NavLayout } from "@/components/nav-layout";
import { PageHeader } from "@/components/page-header";
import { LeadForm } from "@/components/lead-form";
import { SectionPlaceholder } from "@/components/section-placeholder";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Kontakt | WEID Immobilien Erlangen",
  description:
    "Kontaktieren Sie WEID Immobilien in Erlangen. Telefon, E-Mail oder Kontaktformular — wir sind für Sie da.",
  openGraph: {
    title: "Kontakt | WEID Immobilien Erlangen",
    description:
      "Kontaktieren Sie WEID Immobilien in Erlangen. Telefon, E-Mail oder Kontaktformular — wir sind für Sie da.",
    url: '/kontakt',
  },
  alternates: {
    canonical: '/kontakt',
  },
};

export default function KontaktPage() {
  return (
    <NavLayout>
      <PageHeader
        eyebrow="Kontakt"
        title="Wir freuen uns auf Ihre Nachricht"
        subtitle="Ob Frage, Anliegen oder Terminwunsch — wir sind für Sie da."
      />

      <section className="px-6 py-16 md:px-14">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Contact Info */}
          <div>
            <Reveal>
              <h2 className="font-display text-2xl">Direkter Kontakt</h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              <Reveal className="border-t border-warm-sand pt-6">
                <p className="text-xs uppercase tracking-[0.15em] text-taupe">Adresse</p>
                <p className="mt-2">
                  WEID Immobilien<br />
                  [Straße Nr.]<br />
                  91054 Erlangen
                </p>
              </Reveal>

              <Reveal className="border-t border-warm-sand pt-6">
                <p className="text-xs uppercase tracking-[0.15em] text-taupe">Telefon</p>
                <p className="mt-2">
                  <a href="tel:+499131XXXXXX" className="hover:text-espresso">
                    +49 9131 [Nummer]
                  </a>
                </p>
              </Reveal>

              <Reveal className="border-t border-warm-sand pt-6">
                <p className="text-xs uppercase tracking-[0.15em] text-taupe">E-Mail</p>
                <p className="mt-2">
                  <a href="mailto:info@weid-immobilien.de" className="hover:text-espresso">
                    info@weid-immobilien.de
                  </a>
                </p>
              </Reveal>

              <Reveal className="border-t border-warm-sand pt-6">
                <p className="text-xs uppercase tracking-[0.15em] text-taupe">Öffnungszeiten</p>
                <p className="mt-2">
                  Mo – Fr: 9:00 – 18:00 Uhr<br />
                  Sa: nach Vereinbarung
                </p>
              </Reveal>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10">
              <SectionPlaceholder
                label="Google Maps"
                description="Interaktive Karte mit Standort"
                variant="muted"
                minHeight="min-h-[200px]"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded border border-warm-sand bg-parchment p-8">
            <LeadForm
              title="Nachricht senden"
              subtitle="Wir melden uns schnellstmöglich bei Ihnen."
              submitLabel="Nachricht senden"
            />
          </div>
        </div>
      </section>
    </NavLayout>
  );
}
