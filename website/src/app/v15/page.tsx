import Image from "next/image";
import Link from "next/link";
import { Fraunces, Nunito_Sans } from "next/font/google";
import { VersionNav } from "@/components/version-nav";
import { BuyerPopup } from "@/components/buyer-popup";
import { DesignInfoModal } from "@/components/design-info-modal";
import { MobileNav } from "@/components/mobile-nav";
import { Reveal } from "@/components/reveal";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-v15-display",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-v15-body",
});

const navLinks = [
  { href: "/verkaufen", label: "Verkaufen" },
  { href: "/immobilien", label: "Immobilien" },
  { href: "/wertermittlung", label: "Wertermittlung" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

const properties = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    title: "Stadtvilla am Schlossgarten",
    location: "Erlangen · Altstadt",
    size: "285 m²",
    rooms: "7 Zimmer",
    tag: "Verkauf",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    title: "Penthouse mit Dachterrasse",
    location: "Röthelheimpark",
    size: "142 m²",
    rooms: "4 Zimmer",
    tag: "Exklusiv",
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    title: "Architektenhaus im Grünen",
    location: "Burgberg",
    size: "210 m²",
    rooms: "5 Zimmer",
    tag: "Neubau",
  },
];

const services = [
  {
    number: "01",
    title: "Präzise Wertermittlung",
    description: "Was ist Ihre Immobilie wirklich wert? Wir analysieren den Markt und geben Ihnen eine ehrliche, fundierte Einschätzung. Kostenlos.",
  },
  {
    number: "02",
    title: "Diskrete Vermarktung",
    description: "Wir kennen vorgemerkte Käufer persönlich. So findet Ihre Immobilie den richtigen neuen Besitzer — ohne großes Aufsehen.",
  },
  {
    number: "03",
    title: "Begleitung bis zum Notar",
    description: "Gutachter, Finanzierung, Notartermin — wir kümmern uns um alles. Sie lehnen sich zurück.",
  },
];

export default function V15Page() {
  return (
    <div className={`${fraunces.variable} ${nunito.variable} min-h-screen bg-[#f8f3eb] text-[#5c4033]`}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#f8f3eb]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/v15" className="font-[var(--font-v15-display)] text-2xl font-semibold text-[#2d5016]">
              WEID Immobilien
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[var(--font-v15-body)] text-sm text-[#5c4033] hover:text-[#2d5016] transition-colors px-4 py-2 hover:bg-[#e8ede3] rounded-full"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Nav */}
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-[#f8f3eb] py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="left">
              <div className="relative">
                {/* Decorative leaf SVG */}
                <svg
                  className="absolute -left-8 -top-8 w-24 h-24 text-[#8fa07a] opacity-30"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 80 Q 20 20, 80 20"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M30 70 Q 30 30, 70 30"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>

                <h1 className="font-[var(--font-v15-display)] text-5xl md:text-6xl lg:text-7xl font-light text-[#2d5016] leading-[1.1]">
                  Zuhause beginnt mit{" "}
                  <span className="italic font-medium text-[#c2562d]">Vertrauen</span>.
                </h1>
                <p className="mt-8 font-[var(--font-v15-body)] text-lg md:text-xl text-[#5c4033] leading-relaxed max-w-xl">
                  Seit über 15 Jahren begleiten wir Menschen in Erlangen bei einer der wichtigsten Entscheidungen ihres Lebens.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/immobilien"
                    className="font-[var(--font-v15-body)] font-semibold text-sm px-8 py-4 bg-[#c2562d] text-white rounded-full shadow-lg hover:bg-[#a84825] transition-all hover:scale-105"
                  >
                    Objekte entdecken
                  </Link>
                  <Link
                    href="/kontakt"
                    className="font-[var(--font-v15-body)] font-semibold text-sm px-8 py-4 border-2 border-[#2d5016] text-[#2d5016] rounded-full hover:bg-[#2d5016] hover:text-white transition-all"
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl rotate-1">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
                    alt="Wohnzimmer mit natürlichem Licht"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[#f8f3eb]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <div className="bg-[#e8ede3] rounded-2xl px-12 py-16 shadow-lg">
              <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[#8fa07a]/30">
                <div className="text-center pt-6 md:pt-0">
                  <div className="font-[var(--font-v15-display)] text-6xl md:text-7xl font-semibold text-[#2d5016]">
                    15+
                  </div>
                  <div className="mt-3 font-[var(--font-v15-body)] text-[#5c4033] text-sm uppercase tracking-wider">
                    Jahre in Erlangen
                  </div>
                </div>
                <div className="text-center pt-6 md:pt-0">
                  <div className="font-[var(--font-v15-display)] text-6xl md:text-7xl font-semibold text-[#2d5016]">
                    240+
                  </div>
                  <div className="mt-3 font-[var(--font-v15-body)] text-[#5c4033] text-sm uppercase tracking-wider">
                    Vermittelte Objekte
                  </div>
                </div>
                <div className="text-center pt-6 md:pt-0">
                  <div className="font-[var(--font-v15-display)] text-6xl md:text-7xl font-semibold text-[#2d5016]">
                    Ø 47
                  </div>
                  <div className="mt-3 font-[var(--font-v15-body)] text-[#5c4033] text-sm uppercase tracking-wider">
                    Tage bis Verkauf
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 bg-[#f8f3eb]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="font-[var(--font-v15-display)] text-4xl md:text-5xl font-medium text-[#2d5016] text-center mb-16">
              Was wir für Sie tun
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Reveal key={service.number} variant="up" delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#c2562d] flex items-center justify-center mb-6">
                    <span className="font-[var(--font-v15-display)] text-white font-semibold">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-v15-display)] text-2xl font-semibold text-[#2d5016] mb-4">
                    {service.title}
                  </h3>
                  <p className="font-[var(--font-v15-body)] text-[#5c4033] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-24 md:py-32 bg-[#e8ede3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="font-[var(--font-v15-display)] text-4xl md:text-5xl font-medium text-[#2d5016] text-center mb-16">
              Ausgewählte Objekte
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <Reveal key={property.title} variant="up" delay={index * 100}>
                <Link
                  href="/immobilien"
                  className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-4 py-1.5 bg-[#8fa07a] text-white text-xs font-[var(--font-v15-body)] font-semibold rounded-full">
                        {property.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-[var(--font-v15-display)] text-xl font-semibold text-[#2d5016] mb-2 group-hover:text-[#c2562d] transition-colors">
                      {property.title}
                    </h3>
                    <p className="font-[var(--font-v15-body)] text-sm text-[#5c4033] mb-4">
                      {property.location}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[#5c4033] font-[var(--font-v15-body)]">
                      <span>{property.size}</span>
                      <span className="w-1 h-1 rounded-full bg-[#8fa07a]"></span>
                      <span>{property.rooms}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About/Team */}
      <section className="py-24 md:py-32 bg-[#f8f3eb]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl -rotate-1">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1400&auto=format&fit=crop"
                    alt="WEID Immobilien Team"
                    width={700}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <div>
                <h2 className="font-[var(--font-v15-display)] text-4xl md:text-5xl font-medium text-[#2d5016] mb-6">
                  Persönlich. Verbindlich.
                </h2>
                <div className="space-y-4 font-[var(--font-v15-body)] text-lg text-[#5c4033] leading-relaxed">
                  <p>
                    Wir sind kein großes Maklerhaus mit Dutzenden Mitarbeitern. Wir sind ein kleines, eingespieltes Team, das Erlangen in- und auswendig kennt.
                  </p>
                  <p>
                    Jede Immobilie hat ihre eigene Geschichte. Jeder Verkauf ist emotional. Wir nehmen uns die Zeit, die es braucht — für Fragen, für Unsicherheiten, für das gute Gefühl.
                  </p>
                  <p>
                    Seit 2008 arbeiten wir nach einem einfachen Prinzip: Ehrlichkeit vor schnellem Gewinn. Beziehung vor Transaktion.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/ueber-uns"
                    className="font-[var(--font-v15-body)] font-semibold text-sm px-8 py-4 bg-[#c2562d] text-white rounded-full shadow-lg hover:bg-[#a84825] inline-block transition-all hover:scale-105"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#f8f3eb]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal variant="up">
            <div className="bg-[#2d5016] rounded-2xl px-12 py-16 text-center shadow-xl">
              <h2 className="font-[var(--font-v15-display)] text-4xl md:text-5xl font-medium text-[#f8f3eb] mb-6">
                Ihr nächster Schritt beginnt hier.
              </h2>
              <p className="font-[var(--font-v15-body)] text-lg text-[#e8ede3] mb-8 max-w-2xl mx-auto">
                Ob Verkauf, Kauf oder erste Orientierung — wir sind für Sie da. Ohne Druck. Ohne Kleingedrucktes.
              </p>
              <Link
                href="/kontakt"
                className="font-[var(--font-v15-body)] font-semibold text-sm px-10 py-4 bg-white text-[#2d5016] rounded-full shadow-lg hover:bg-[#c2562d] hover:text-white inline-block transition-all hover:scale-105"
              >
                Jetzt Kontakt aufnehmen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5016] text-[#f8f3eb] rounded-t-3xl">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-[#8fa07a]/30">
            <div>
              <div className="font-[var(--font-v15-display)] text-2xl font-semibold mb-4">
                WEID Immobilien
              </div>
              <p className="font-[var(--font-v15-body)] text-[#e8ede3] text-sm leading-relaxed">
                Ihr vertrauensvoller Partner für Immobilien in Erlangen seit 2008.
              </p>
            </div>

            <div>
              <h3 className="font-[var(--font-v15-body)] font-semibold text-sm uppercase tracking-wider mb-4">
                Kontakt
              </h3>
              <div className="font-[var(--font-v15-body)] text-[#e8ede3] text-sm space-y-2">
                <p>Hauptstraße 123</p>
                <p>91054 Erlangen</p>
                <p className="mt-4">Tel: 09131 / 123 456</p>
                <p>info@weid-immobilien.de</p>
              </div>
            </div>

            <div>
              <h3 className="font-[var(--font-v15-body)] font-semibold text-sm uppercase tracking-wider mb-4">
                Navigation
              </h3>
              <nav className="font-[var(--font-v15-body)] text-[#e8ede3] text-sm space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-[var(--font-v15-body)] text-[#e8ede3] text-sm">
            <p>&copy; 2024 WEID Immobilien. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link href="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Overlays */}
      <div className="fixed bottom-4 left-4 z-50 rounded-full bg-[#2d5016] px-4 py-1.5 text-[10px] uppercase tracking-wider text-[#f8f3eb]">
        V15 — Naturstein
      </div>

      <VersionNav current={15} total={15} />
      <BuyerPopup />
      <DesignInfoModal
        designName="Naturstein"
        subtitle="Organic Warmth & Natural Craft"
        fontDisplay="Fraunces"
        fontDisplayReason="An 'old style' variable serif with a soft, organic wobble in its letterforms. Where Cormorant (V1-V12) is classically elegant and Bodoni (V13) is razor-sharp, Fraunces feels handcrafted and warm — like letters carved in natural stone."
        fontBody="Nunito Sans"
        fontBodyReason="A rounded sans-serif with friendly, approachable proportions. Its soft terminals echo the organic shapes throughout the design, creating a cohesive warmth that's impossible with geometric fonts."
        colors={[
          { name: "Linen", hex: "#f8f3eb", usage: "Primary background" },
          { name: "Forest", hex: "#2d5016", usage: "Headings & accents" },
          { name: "Terracotta", hex: "#c2562d", usage: "CTAs & highlights" },
          { name: "Sage", hex: "#8fa07a", usage: "Tags & secondary" },
          { name: "Walnut", hex: "#5c4033", usage: "Body text" },
          { name: "Light Sage", hex: "#e8ede3", usage: "Section backgrounds" },
        ]}
        spacingPhilosophy="Flowing, generous, and unhurried. Sections breathe with 128px+ vertical padding. Rounded corners (16-24px) on every surface soften the visual rhythm. Cards float with soft shadows rather than sitting on harsh borders. The spacing evokes the feeling of walking through a sun-lit Franconian garden."
        overallRationale="Naturstein is designed for the human side of real estate — the emotion, the trust, the life change. While V13 sells penthouses and V14 sells data-driven precision, this design sells the feeling of coming home. The earthy palette connects to Erlangen's Franconian landscape, the rounded forms feel approachable, and the warm typography invites rather than impresses. This is for families, not investors."
      />
    </div>
  );
}
