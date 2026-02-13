import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { MobileNav } from "@/components/mobile-nav";
import { Marquee } from "@/components/marquee";
import { VersionNav } from "@/components/version-nav";

const images = {
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop",
  heroAlt: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2400&auto=format&fit=crop",
  property1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  property2: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
  property3: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  property4: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
  detail: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop",
  team: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2000&auto=format&fit=crop",
};

const stats = [
  { value: "200+", label: "Immobilien" },
  { value: "15", label: "Jahre Erfahrung" },
  { value: "98%", label: "Zufriedenheit" },
  { value: "1.2", label: "Mrd. € Volumen" },
];

const services = [
  { title: "Ankauf", description: "Gezielte Suche und Akquisition exklusiver Objekte nach Ihren Kriterien." },
  { title: "Verkauf", description: "Diskrete Vermarktung mit strategischer Positionierung im Premium-Segment." },
  { title: "Beratung", description: "Ganzheitliche Begleitung von der ersten Idee bis zum Vertragsabschluss." },
  { title: "Vermietung", description: "Auswahl qualifizierter Mieter und professionelles Mietmanagement." },
];

const properties = [
  { image: images.property1, title: "Villa am Park", location: "Erlangen", area: "320 m²", rooms: 8 },
  { image: images.property2, title: "Stadthaus", location: "Nürnberg", area: "180 m²", rooms: 5 },
  { image: images.property3, title: "Loft", location: "Fürth", area: "145 m²", rooms: 3 },
  { image: images.property4, title: "Landhaus", location: "Erlangen", area: "410 m²", rooms: 10 },
];

export default function V11HomePage() {
  return (
    <main className="bg-ivory text-noir">
      {/* ━━━ Header ━━━ */}
      <header className="fixed left-0 right-0 top-0 z-50 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          <Link href="/v11" className="font-display text-lg tracking-[0.18em] text-noir">
            WEID
          </Link>
          <nav className="hidden items-center gap-10 text-[10px] font-medium uppercase tracking-[0.25em] text-noir md:flex">
            <Link className="transition-opacity hover:opacity-50" href="/verkaufen">Verkaufen</Link>
            <Link className="transition-opacity hover:opacity-50" href="/immobilien">Immobilien</Link>
            <Link className="transition-opacity hover:opacity-50" href="/wertermittlung">Wertermittlung</Link>
            <Link className="transition-opacity hover:opacity-50" href="/ueber-uns">Über uns</Link>
            <Link className="transition-opacity hover:opacity-50" href="/kontakt">Kontakt</Link>
          </nav>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      {/* ━━━ Hero — Split Editorial ━━━ */}
      <section className="relative min-h-screen w-full pt-20">
        <div className="grid h-full md:grid-cols-2 lg:grid-cols-12">
          {/* Left: Big editorial text */}
          <div className="flex flex-col justify-center px-6 pb-16 md:px-12 md:py-32 lg:px-20 lg:py-40">
            <Reveal variant="left">
              <p className="text-[10px] uppercase tracking-[0.5em] text-taupe">
                Immobilien
              </p>
            </Reveal>
            <Reveal variant="left" delay={100}>
              <h1 className="mt-6 font-display text-5xl font-light leading-[0.9] md:text-7xl lg:text-8xl">
                Räume<br />
                <span className="italic text-taupe">gestalten</span><br />
                Werte<br />
                schaffen
              </h1>
            </Reveal>
            <Reveal variant="left" delay={200}>
              <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-taupe">
                Wir verbinden architektonische Exzellenz mit diskreter 
                Expertise. Für Menschen, die das Besondere suchen.
              </p>
            </Reveal>
            <Reveal variant="left" delay={300}>
              <div className="mt-10">
                <Button asChild>
                  <Link href="/immobilien">Entdecken</Link>
                </Button>
              </div>
            </Reveal>
          </div>
          
          {/* Right: Full-bleed image */}
          <div className="relative h-[50vh] md:h-auto lg:col-span-7">
            <Image
              src={images.hero}
              alt="Elegante Architektur"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-noir/10" />
          </div>
        </div>
      </section>

      {/* ━━━ Stats — Horizontal Marquee Style ━━━ */}
      <section className="border-y border-warm-sand/30 bg-parchment/30 py-12 md:py-16">
        <div className="flex items-center justify-around px-6 md:px-12 lg:px-20">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} variant="fade" delay={i * 100}>
              <div className="text-center">
                <p className="font-display text-4xl md:text-5xl lg:text-6xl text-noir">
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-taupe">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ━━━ Services — Asymmetric Grid ━━━ */}
      <section className="bg-ivory px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Large label left */}
          <div className="lg:col-span-4">
            <Reveal variant="up">
              <p className="text-[10px] uppercase tracking-[0.5em] text-taupe">
                Leistungen
              </p>
              <h2 className="mt-6 font-display text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
                Was wir<br />
                <span className="italic text-taupe">tun</span>
              </h2>
            </Reveal>
          </div>
          
          {/* Services grid - asymmetric */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-2 lg:gap-12">
            {services.map((service, i) => (
              <Reveal key={service.title} variant="up" delay={i * 100}>
                <div className="group border-l-2 border-warm-sand pl-6 transition-all duration-500 hover:border-noir">
                  <h3 className="font-display text-2xl text-noir">{service.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-taupe group-hover:text-noir/80">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Property Showcase — Magazine Layout ━━━ */}
      <section className="bg-noir px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mb-16 flex flex-col gap-4 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal variant="up">
              <p className="text-[10px] uppercase tracking-[0.5em] text-taupe">
                Ausgewählte Objekte
              </p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <h2 className="mt-4 font-display text-4xl font-light text-ivory md:text-5xl lg:text-6xl">
                Unser Portfolio
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200}>
            <Button variant="outline" size="sm" asChild>
              <Link href="/immobilien">Alle ansehen</Link>
            </Button>
          </Reveal>
        </div>

        {/* Asymmetric property grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {properties.map((property, i) => (
            <Reveal key={property.title} variant="up" delay={i * 100}>
              <div className={`group relative overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <div className={`relative ${i === 0 ? 'aspect-[4/3] md:aspect-auto md:h-full' : 'aspect-[3/4]'} w-full`}>
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-ivory">
                  <h3 className="font-display text-xl md:text-2xl">{property.title}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-ivory/60">
                    {property.location} · {property.area} · {property.rooms} Zimmer
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ━━━ Quote / Statement — Editorial Break ━━━ */}
      <section className="relative px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal variant="fade">
            <span className="font-display text-8xl text-warm-sand/20 md:text-9xl">"</span>
          </Reveal>
          <Reveal variant="fade" delay={150}>
            <p className="font-display text-3xl font-light leading-tight italic text-noir md:text-5xl lg:text-6xl">
              Das Haus, das Sie suchen,<br />
              existiert vielleicht schon.<br />
              <span className="text-taupe">Wir finden es.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Team Teaser — Split Layout ━━━ */}
      <section className="bg-parchment/50">
        <div className="grid md:grid-cols-2 lg:grid-cols-12">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto lg:col-span-7 lg:h-[70vh]">
            <Image
              src={images.team}
              alt="WEID Team"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Text */}
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24 lg:col-span-5 lg:px-16">
            <Reveal variant="right">
              <p className="text-[10px] uppercase tracking-[0.5em] text-taupe">
                Über uns
              </p>
            </Reveal>
            <Reveal variant="right" delay={100}>
              <h2 className="mt-6 font-display text-4xl font-light text-noir md:text-5xl">
                Menschen,<br />
                <span className="italic text-taupe">die verstehen</span>
              </h2>
            </Reveal>
            <Reveal variant="right" delay={200}>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-taupe">
                WEID Immobilien steht für vertrauensvolle Zusammenarbeit. 
                Wir begleiten Sie mit Erfahrung und Diskretion — bei jedem 
                Schritt, jeder Entscheidung.
              </p>
            </Reveal>
            <Reveal variant="right" delay={300}>
              <div className="mt-10">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/ueber-uns">Mehr über uns</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━ CTA — Bold Minimal ━━━ */}
      <section className="bg-ivory px-6 py-24 md:px-12 md:py-36 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal variant="up">
              <p className="text-[10px] uppercase tracking-[0.5em] text-taupe">
                Kontakt
              </p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <h2 className="mt-6 font-display text-5xl font-light leading-[0.9] text-noir md:text-6xl lg:text-7xl">
                Sprechen<br />
                wir über<br />
                <span className="italic text-taupe">Ihre Ideen</span>
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200}>
            <div className="max-w-md">
              <p className="text-[15px] leading-relaxed text-taupe">
                Jedes Projekt beginnt mit einem Gespräch. Rufen Sie uns an 
                oder schreiben Sie uns — wir freuen uns auf Sie.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild>
                  <Link href="/kontakt">Kontakt aufnehmen</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/wertermittlung">Wertermittlung</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer className="bg-noir px-6 py-16 text-ivory md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <Link href="/v11" className="font-display text-lg tracking-[0.15em]">
              WEID IMMOBILIEN
            </Link>
            <p className="mt-4 text-[12px] leading-relaxed text-ivory/40">
              Ausgewählte Wohnimmobilien in Erlangen und Umgebung — 
              mit Diskretion und Erfahrung.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/30">
              Navigation
            </p>
            <nav className="mt-5 flex flex-col gap-3 text-[12px] text-ivory/50">
              <Link href="/verkaufen" className="transition-colors hover:text-ivory">Verkaufen</Link>
              <Link href="/immobilien" className="transition-colors hover:text-ivory">Immobilien</Link>
              <Link href="/wertermittlung" className="transition-colors hover:text-ivory">Wertermittlung</Link>
              <Link href="/ueber-uns" className="transition-colors hover:text-ivory">Über uns</Link>
              <Link href="/kontakt" className="transition-colors hover:text-ivory">Kontakt</Link>
            </nav>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/30">
              Kontakt
            </p>
            <div className="mt-5 text-[12px] leading-relaxed text-ivory/50">
              <p>Hauptstraße 42</p>
              <p>91054 Erlangen</p>
              <p className="mt-3">
                <a href="tel:+499131123456" className="transition-colors hover:text-ivory">
                  09131 / 123 456
                </a>
              </p>
              <p className="mt-1">
                <a href="mailto:info@weid-immobilien.de" className="transition-colors hover:text-ivory">
                  info@weid-immobilien.de
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl border-t border-ivory/10 pt-8">
          <div className="flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-ivory/20 md:flex-row md:justify-between">
            <span>© {new Date().getFullYear()} WEID Immobilien</span>
            <div className="flex gap-6">
              <Link className="transition-colors hover:text-ivory/50" href="/impressum">
                Impressum
              </Link>
              <Link className="transition-colors hover:text-ivory/50" href="/datenschutz">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Model Attribution */}
      <div className="fixed bottom-4 left-4 z-50 text-[10px] uppercase tracking-wider text-taupe">
        M2.5
      </div>
    
      <VersionNav current={11} />
    </main>
  );
}
