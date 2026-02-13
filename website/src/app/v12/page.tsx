'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';
import { MobileNav } from '@/components/mobile-nav';

const images = {
  hero1: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop',
  hero2: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2400&auto=format&fit=crop',
  property1: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
  property2: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop',
  property3: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
  property4: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop',
  property5: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2000&auto=format&fit=crop',
  detail: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop',
};

const stats = [
  { value: '200+', label: 'Immobilien' },
  { value: '15', label: 'Jahre' },
  { value: '98%', label: 'Zufrieden' },
  { value: '1.2', label: 'Mrd. €' },
];

const services = [
  { title: 'Ankauf', description: 'Gezielte Suche und Akquisition exklusiver Objekte' },
  { title: 'Verkauf', description: 'Diskrete Vermarktung im Premium-Segment' },
  { title: 'Beratung', description: 'Ganzheitliche Begleitung bis zum Abschluss' },
  { title: 'Vermietung', description: 'Auswahl qualifizierter Mieter' },
];

const properties = [
  { image: images.property1, title: 'Villa am Park', location: 'Erlangen', area: '320 m²', type: 'Villa' },
  { image: images.property2, title: 'Stadthaus', location: 'Nürnberg', area: '180 m²', type: 'Stadthaus' },
  { image: images.property3, title: 'Loft', location: 'Fürth', area: '145 m²', type: 'Loft' },
  { image: images.property4, title: 'Landhaus', location: 'Erlangen', area: '410 m²', type: 'Landhaus' },
  { image: images.property5, title: 'Penthouse', location: 'Nürnberg', area: '220 m²', type: 'Penthouse' },
];

export default function V12HomePage() {
  return (
    <main className="bg-ivory text-noir overflow-x-hidden">
      {/* ━━━ Header ━━━ */}
      <header className="fixed left-0 right-0 top-0 z-50 px-6 py-6 md:px-12 lg:px-20 mix-blend-difference">
        <div className="flex items-center justify-between">
          <Link href="/v12" className="font-display text-lg tracking-[0.18em] text-ivory">
            WEID
          </Link>
          <nav className="hidden items-center gap-10 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory md:flex">
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

      {/* ━━━ HERO — Giant Typography with Overlapping ━━━ */}
      <section className="relative min-h-screen w-full overflow-hidden bg-noir">
        {/* Giant background typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="font-display text-[20vw] leading-none text-ivory/5 rotate-90 md:rotate-0">
            IMMOBILIEN
          </h1>
        </div>
        
        {/* Overlapping image layers */}
        <div className="relative h-screen w-full">
          <div className="absolute inset-20 md:inset-32">
            <Image
              src={images.hero1}
              alt="Elegante Architektur"
              fill
              priority
              className="object-cover opacity-60"
            />
          </div>
          
          {/* Offset overlay image */}
          <div className="absolute bottom-0 right-0 h-[60vh] w-[70vw] md:h-[70vh] md:w-[50vw]">
            <Image
              src={images.hero2}
              alt="Architektur Detail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-noir/20" />
          </div>
          
          {/* Giant foreground typography */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 md:left-12 lg:left-20">
            <Reveal variant="left">
              <p className="text-[10px] uppercase tracking-[0.5em] text-warm-sand">
                Immobilien
              </p>
            </Reveal>
            <Reveal variant="left" delay={100}>
              <h1 className="mt-6 font-display text-[12vw] font-light leading-[0.8] text-ivory md:text-[10vw] lg:text-[8vw]">
                WEID
              </h1>
            </Reveal>
            <Reveal variant="left" delay={200}>
              <h1 className="font-display text-[12vw] font-light leading-[0.8] text-ivory md:text-[10vw] lg:text-[8vw]">
                <span className="italic text-warm-sand">.</span>
              </h1>
            </Reveal>
            <Reveal variant="left" delay={300}>
              <p className="mt-8 max-w-xs text-[14px] leading-relaxed text-ivory/60 md:max-w-sm">
                Architektonische Exzellenz trifft diskrete Expertise. 
                Für Menschen, die das Besondere suchen.
              </p>
            </Reveal>
            <Reveal variant="left" delay={400}>
              <div className="mt-10">
                <Button asChild>
                  <Link href="/immobilien">Entdecken</Link>
                </Button>
              </div>
            </Reveal>
          </div>
          
          {/* Vertical rotated text */}
          <div className="absolute bottom-20 left-6 md:left-12">
            <p className="vertical-text text-[10px] uppercase tracking-[0.3em] text-warm-sand writing-vertical-rl md:writing-vertical-lr rotate-180">
              Räume gestalten — Werte schaffen
            </p>
          </div>
        </div>
      </section>

      {/* ━━━ STATS — Corner Anchored Layout ━━━ */}
      <section className="relative bg-parchment py-24 md:py-32">
        {/* Giant number in background */}
        <div className="absolute right-0 top-0 font-display text-[40vw] leading-none text-noir/3 pointer-events-none select-none">
          15
        </div>
        
        <div className="relative grid gap-12 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-4 lg:px-20">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} variant="up" delay={i * 150}>
              <div className="group relative z-10 border-l border-noir pl-6">
                <p className="font-display text-6xl text-noir md:text-7xl lg:text-8xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-taupe group-hover:text-noir transition-colors">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ━━━ SERVICES — Horizontal Scroll Cards ━━━ */}
      <section className="bg-noir overflow-hidden py-24 md:py-32">
        <div className="mb-16 px-6 md:px-12 lg:px-20">
          <Reveal variant="up">
            <p className="text-[10px] uppercase tracking-[0.5em] text-warm-sand">
              Leistungen
            </p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h2 className="mt-6 font-display text-5xl font-light text-ivory md:text-7xl lg:text-8xl">
              Was wir<span className="italic text-warm-sand">.</span>
            </h2>
          </Reveal>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-8 md:px-12 lg:px-20 scrollbar-hide">
          {services.map((service, i) => (
            <Reveal key={service.title} variant="left" delay={i * 100}>
              <div className="group relative flex h-[400px] w-[300px] flex-shrink-0 overflow-hidden bg-parchment">
                <div className="absolute inset-0 bg-noir/5 transition-opacity duration-500 group-hover:bg-noir/10" />
                <div className="relative z-10 flex h-full w-full flex-col justify-end p-8">
                  <span className="font-display text-8xl text-noir/10 absolute top-4 right-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-3xl text-noir">{service.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-taupe">
                    {service.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-warm-sand transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
          {/* Spacer */}
          <div className="w-12 flex-shrink-0" />
        </div>
      </section>

      {/* ━━━ PROPERTIES — Masonry with Z-index overlap ━━━ */}
      <section className="relative bg-ivory px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mb-20 flex flex-col gap-4 md:mb-32 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal variant="up">
              <p className="text-[10px] uppercase tracking-[0.5em] text-taupe">
                Portfolio
              </p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <h2 className="mt-4 font-display text-6xl font-light text-noir md:text-8xl lg:text-9xl">
                Objekte
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200}>
            <Button variant="outline" size="sm" asChild>
              <Link href="/immobilien">Alle ansehen</Link>
            </Button>
          </Reveal>
        </div>

        {/* Masonry-style grid with overlaps */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {properties.map((property, i) => (
            <Reveal key={property.title} variant="up" delay={i * 100}>
              <div 
                className={`group relative ${i % 2 === 0 ? 'md:-mt-20' : 'md:mt-20'}`}
                style={{ zIndex: i % 2 === 0 ? 10 : 1 }}
              >
                <div className="relative overflow-hidden">
                  <div className={`relative ${i === 0 ? 'aspect-[3/4]' : 'aspect-[4/5]'} w-full`}>
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-ivory">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-warm-sand">
                    {property.type}
                  </p>
                  <h3 className="font-display text-2xl">{property.title}</h3>
                  <p className="mt-1 text-[12px] text-ivory/60">
                    {property.location} · {property.area}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ━━━ QUOTE — Full Bleed with Diagonal ━━━ */}
      <section className="relative h-[80vh] overflow-hidden bg-noir">
        <div className="absolute inset-0">
          <Image
            src={images.detail}
            alt="Architektur Detail"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/80 to-transparent" />
        </div>
        
        {/* Diagonal accent */}
        <div className="absolute -right-20 top-0 h-full w-1/2 bg-warm-sand/10 rotate-12 transform origin-top" />
        
        <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-20">
          <Reveal variant="left">
            <p className="font-display text-7xl leading-none text-ivory/10 md:text-9xl lg:text-[12rem]">
              „
            </p>
          </Reveal>
          <Reveal variant="left" delay={150}>
            <p className="font-display text-3xl font-light leading-tight text-ivory md:text-5xl lg:text-6xl max-w-3xl">
              Wir finden nicht nur Häuser.<br />
              <span className="italic text-warm-sand">Wir finden Heimat.</span>
            </p>
          </Reveal>
          <Reveal variant="left" delay={300}>
            <p className="mt-8 text-[12px] uppercase tracking-[0.3em] text-ivory/40">
              — WEID Immobilien
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━━ TEAM — Horizontal Split with Overlap ━━━ */}
      <section className="relative bg-parchment/50 py-24 md:py-32">
        <div className="grid gap-0 lg:grid-cols-12">
          {/* Text side - pushed right */}
          <div className="order-2 flex flex-col justify-center px-6 py-16 md:px-12 md:py-24 lg:order-1 lg:col-span-4 lg:col-start-2 lg:px-0">
            <Reveal variant="up">
              <p className="text-[10px] uppercase tracking-[0.5em] text-taupe">
                Über uns
              </p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <h2 className="mt-6 font-display text-5xl font-light text-noir md:text-6xl lg:text-7xl">
                Menschen<span className="italic text-warm-sand">.</span>
              </h2>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p className="mt-6 text-[15px] leading-relaxed text-taupe">
                Wir sind ein Team aus Architekten, Kaufleuten und Beratern — 
                vereint durch die Leidenschaft für außergewöhnliche Räume.
              </p>
            </Reveal>
            <Reveal variant="up" delay={300}>
              <div className="mt-10">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/ueber-uns">Mehr über uns</Link>
                </Button>
              </div>
            </Reveal>
          </div>
          
          {/* Image side - with overlap */}
          <div className="order-1 relative lg:order-2 lg:col-span-6 lg:col-start-6">
            <div className="relative h-[50vh] w-full md:h-[60vh] lg:h-[70vh]">
              <Image
                src={images.team}
                alt="WEID Team"
                fill
                className="object-cover"
              />
              {/* Floating accent */}
              <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-warm-sand/30 md:h-60 md:w-60" />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ CTA — Giant Typography ━━━ */}
      <section className="relative bg-noir px-6 py-32 md:px-12 md:py-48 lg:px-20 overflow-hidden">
        {/* Background typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="font-display text-[30vw] leading-none text-ivory/3">
            KONTAKT
          </h2>
        </div>
        
        <div className="relative z-10">
          <Reveal variant="up">
            <p className="text-[10px] uppercase tracking-[0.5em] text-warm-sand">
              Kontakt
            </p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h2 className="mt-6 font-display text-5xl font-light text-ivory md:text-7xl lg:text-8xl">
              Sprechen<br />
              wir über<br />
              <span className="italic text-warm-sand">.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ivory/60">
              Jedes Projekt beginnt mit einem Gespräch. 
              Rufen Sie uns an oder schreiben Sie uns.
            </p>
          </Reveal>
          <Reveal variant="up" delay={300}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/wertermittlung">Wertermittlung</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer className="bg-ivory px-6 py-16 text-noir md:px-12 md:py-20 lg:px-20 border-t border-warm-sand/20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <Link href="/v12" className="font-display text-lg tracking-[0.15em]">
              WEID IMMOBILIEN
            </Link>
            <p className="mt-4 text-[12px] leading-relaxed text-taupe">
              Ausgewählte Wohnimmobilien in Erlangen und Umgebung — 
              mit Diskretion und Erfahrung.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-taupe/60">
              Navigation
            </p>
            <nav className="mt-5 flex flex-col gap-3 text-[12px] text-taupe">
              <Link href="/verkaufen" className="transition-colors hover:text-noir">Verkaufen</Link>
              <Link href="/immobilien" className="transition-colors hover:text-noir">Immobilien</Link>
              <Link href="/wertermittlung" className="transition-colors hover:text-noir">Wertermittlung</Link>
              <Link href="/ueber-uns" className="transition-colors hover:text-noir">Über uns</Link>
              <Link href="/kontakt" className="transition-colors hover:text-noir">Kontakt</Link>
            </nav>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-taupe/60">
              Kontakt
            </p>
            <div className="mt-5 text-[12px] leading-relaxed text-taupe">
              <p>Hauptstraße 42</p>
              <p>91054 Erlangen</p>
              <p className="mt-3">
                <a href="tel:+499131123456" className="transition-colors hover:text-noir">
                  09131 / 123 456
                </a>
              </p>
              <p className="mt-1">
                <a href="mailto:info@weid-immobilien.de" className="transition-colors hover:text-noir">
                  info@weid-immobilien.de
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl border-t border-warm-sand/20 pt-8">
          <div className="flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-taupe/40 md:flex-row md:justify-between">
            <span>© {new Date().getFullYear()} WEID Immobilien</span>
            <div className="flex gap-6">
              <Link className="transition-colors hover:text-noir" href="/impressum">
                Impressum
              </Link>
              <Link className="transition-colors hover:text-noir" href="/datenschutz">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Model Attribution */}
      <div className="fixed bottom-4 right-4 z-50 text-[10px] uppercase tracking-wider text-taupe">
        M2.5
      </div>
    </main>
  );
}
