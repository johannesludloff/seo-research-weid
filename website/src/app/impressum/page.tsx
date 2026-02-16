import { Metadata } from "next";
import { NavLayout } from "@/components/nav-layout";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Impressum | WEID Immobilien",
  description: "Impressum und rechtliche Informationen zu WEID Immobilien Erlangen.",
};

/**
 * Impressum page.
 * 
 * TODO: Fill in actual company details
 * - Full legal name
 * - Address
 * - Contact info
 * - Register info (HRB, etc.)
 * - VAT ID
 * - Professional regulations
 */
export default function ImpressumPage() {
  return (
    <NavLayout>
      <section className="px-6 py-20 md:px-14">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h1 className="font-display text-4xl">Impressum</h1>
          </Reveal>

          <Reveal className="mt-12 space-y-8 text-taupe">
            <div>
              <h2 className="mb-3 font-display text-xl text-noir">Angaben gemäß § 5 TMG</h2>
              <p>
                WEID Immobilien<br />
                [Vollständiger Name / Rechtsform]<br />
                [Straße Nr.]<br />
                91054 Erlangen
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">Kontakt</h2>
              <p>
                Telefon: +49 9131 [Nummer]<br />
                E-Mail: info@weid-immobilien.de
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">Vertreten durch</h2>
              <p>[Name des Geschäftsführers / Inhabers]</p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht Fürth<br />
                Registernummer: [HRB XXXXX]
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
                [DE XXXXXXXXX]
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">Aufsichtsbehörde</h2>
              <p>
                Zuständige Aufsichtsbehörde: IHK Nürnberg für Mittelfranken<br />
                Erlaubnis nach § 34c GewO
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">Berufsbezeichnung</h2>
              <p>
                Immobilienmakler<br />
                Verliehen in: Deutschland
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">
                Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-noir underline hover:text-espresso"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </NavLayout>
  );
}
