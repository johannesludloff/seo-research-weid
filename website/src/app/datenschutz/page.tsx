import { Metadata } from "next";
import { NavLayout } from "@/components/nav-layout";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | WEID Immobilien",
  description: "Datenschutzerklärung von WEID Immobilien Erlangen.",
};

/**
 * Datenschutz page.
 * 
 * TODO: Review with legal / data protection officer
 * - Verify all processing activities are listed
 * - Add specific tools used (Analytics, CRM, etc.)
 * - Update contact details
 */
export default function DatenschutzPage() {
  return (
    <NavLayout>
      <section className="px-6 py-20 md:px-14">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h1 className="font-display text-4xl">Datenschutzerklärung</h1>
          </Reveal>

          <Reveal className="mt-12 space-y-8 text-taupe">
            <div>
              <h2 className="mb-3 font-display text-xl text-noir">1. Datenschutz auf einen Blick</h2>
              <h3 className="mb-2 font-medium text-noir">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-noir">Datenerfassung auf dieser Website</h3>
              <p className="mb-2">
                <strong>Wer ist verantwortlich für die Datenerfassung?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                Dessen Kontaktdaten können Sie dem Impressum entnehmen.
              </p>
              <p>
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen
                (z.B. über ein Kontaktformular). Andere Daten werden automatisch beim Besuch
                der Website durch unsere IT-Systeme erfasst (z.B. Browser, Betriebssystem, Uhrzeit).
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">2. Verantwortliche Stelle</h2>
              <p>
                WEID Immobilien<br />
                [Straße Nr.]<br />
                91054 Erlangen<br />
                E-Mail: info@weid-immobilien.de
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">3. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
                <li>Berichtigung unrichtiger Daten zu verlangen</li>
                <li>Löschung Ihrer Daten zu verlangen</li>
                <li>Einschränkung der Verarbeitung zu verlangen</li>
                <li>Datenübertragbarkeit zu verlangen</li>
                <li>Widerspruch gegen die Verarbeitung einzulegen</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="mb-2 mt-4 font-medium text-noir">Cookies</h3>
              <p>
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem
                Endgerät gespeichert werden. Einige Cookies sind technisch notwendig, andere
                helfen uns, die Website zu verbessern (Analyse-Cookies).
              </p>
              <p className="mt-2">
                Sie können Ihre Einwilligung jederzeit über unseren Cookie-Banner anpassen oder widerrufen.
              </p>

              <h3 className="mb-2 mt-4 font-medium text-noir">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                einschließlich der von Ihnen angegebenen Kontaktdaten zur Bearbeitung der Anfrage
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-2">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) und Art. 6 Abs. 1
                lit. f DSGVO (berechtigtes Interesse).
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">5. Analyse-Tools</h2>
              
              <h3 className="mb-2 mt-4 font-medium text-noir">Google Analytics</h3>
              <p>
                Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland
                Limited. Die Nutzung erfolgt nur mit Ihrer Einwilligung über unseren Cookie-Banner.
              </p>
              <p className="mt-2">
                IP-Anonymisierung ist aktiviert. Ihre IP-Adresse wird innerhalb der EU gekürzt,
                bevor sie an Google-Server übertragen wird.
              </p>

              <h3 className="mb-2 mt-4 font-medium text-noir">Google Tag Manager</h3>
              <p>
                Wir verwenden den Google Tag Manager zur Verwaltung von Website-Tags. Der Tag Manager
                selbst speichert keine personenbezogenen Daten.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">6. Externe Dienste</h2>
              
              <h3 className="mb-2 mt-4 font-medium text-noir">Google Maps</h3>
              <p>
                Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist Google
                Ireland Limited. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre
                IP-Adresse zu speichern.
              </p>

              <h3 className="mb-2 mt-4 font-medium text-noir">Propstack</h3>
              <p>
                Für die Darstellung unserer Immobilienangebote nutzen wir die Software Propstack.
                Beim Abruf von Objektdaten können Daten an Propstack übermittelt werden.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">7. Speicherdauer</h2>
              <p>
                Wir speichern Ihre Daten nur so lange, wie es für die Erfüllung des jeweiligen
                Zwecks erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl text-noir">8. Änderungen</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen
                umzusetzen.
              </p>
              <p className="mt-2">Stand: Februar 2026</p>
            </div>
          </Reveal>
        </div>
      </section>
    </NavLayout>
  );
}
