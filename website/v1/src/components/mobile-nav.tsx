"use client";

import * as React from "react";
import Link from "next/link";

const navLinks = [
  { label: "Verkaufen", href: "/verkaufen" },
  { label: "Immobilien", href: "/immobilien" },
  { label: "Wertermittlung", href: "/wertermittlung" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
      >
        <span
          className={`h-[1.5px] w-6 bg-current transition-all duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
        />
        <span
          className={`h-[1.5px] w-6 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`h-[1.5px] w-6 bg-current transition-all duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-noir/60 backdrop-blur-sm" />
          <nav
            className="absolute right-0 top-0 flex h-full w-72 flex-col gap-6 bg-ivory px-8 pt-24"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-2xl text-noir transition-colors hover:text-espresso"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
