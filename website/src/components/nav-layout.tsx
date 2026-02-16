import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";

interface NavLayoutProps {
  children: React.ReactNode;
}

/**
 * Shared navigation layout wrapper.
 * Use this to wrap all pages for consistent header/footer.
 */
export function NavLayout({ children }: NavLayoutProps) {
  return (
    <div className="bg-ivory text-noir">
      <header className="px-6 py-8 md:px-14">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-display text-2xl tracking-wide">
            WEID Immobilien
          </Link>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] md:flex">
            <Link className="transition-colors hover:text-espresso" href="/verkaufen">
              Verkaufen
            </Link>
            <Link className="transition-colors hover:text-espresso" href="/immobilien">
              Immobilien
            </Link>
            <Link className="transition-colors hover:text-espresso" href="/wertermittlung">
              Wertermittlung
            </Link>
            <Link className="transition-colors hover:text-espresso" href="/ueber-uns">
              Über uns
            </Link>
            <Link className="transition-colors hover:text-espresso" href="/kontakt">
              Kontakt
            </Link>
          </nav>
          <MobileNav />
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-noir px-6 py-10 text-ivory md:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="font-display text-xl">WEID Immobilien</p>
              <p className="mt-2 text-sm text-ivory/70">
                Ihr Partner für Immobilien in Erlangen
              </p>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ivory/50">Navigation</p>
              <div className="flex flex-col gap-2 text-sm text-ivory/70">
                <Link href="/verkaufen" className="hover:text-ivory">Verkaufen</Link>
                <Link href="/immobilien" className="hover:text-ivory">Immobilien</Link>
                <Link href="/wertermittlung" className="hover:text-ivory">Wertermittlung</Link>
                <Link href="/kontakt" className="hover:text-ivory">Kontakt</Link>
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ivory/50">Rechtliches</p>
              <div className="flex flex-col gap-2 text-sm text-ivory/70">
                <Link href="/impressum" className="hover:text-ivory">Impressum</Link>
                <Link href="/datenschutz" className="hover:text-ivory">Datenschutz</Link>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-ivory/20 pt-8 text-xs uppercase tracking-[0.2em] text-ivory/50">
            © {new Date().getFullYear()} WEID Immobilien · Erlangen
          </div>
        </div>
      </footer>
    </div>
  );
}
