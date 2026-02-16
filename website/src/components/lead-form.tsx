"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  variant?: "default" | "wertermittlung";
}

/**
 * Reusable lead capture form.
 * Wire up to your form handler / API when ready.
 */
export function LeadForm({
  title = "Kontakt aufnehmen",
  subtitle,
  submitLabel = "Absenden",
  variant = "default",
}: LeadFormProps) {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to form handler (e.g., Formspree, custom API)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Reveal className="rounded bg-sage/20 px-8 py-12 text-center">
        <p className="font-display text-2xl">Vielen Dank!</p>
        <p className="mt-2 text-taupe">Wir melden uns in Kürze bei Ihnen.</p>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <form onSubmit={handleSubmit} className="space-y-6">
        {title && (
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
            {subtitle && <p className="mt-2 text-taupe">{subtitle}</p>}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.1em] text-taupe">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border-b border-warm-sand bg-transparent py-3 text-noir outline-none transition-colors focus:border-espresso"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.1em] text-taupe">
              E-Mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border-b border-warm-sand bg-transparent py-3 text-noir outline-none transition-colors focus:border-espresso"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.1em] text-taupe">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border-b border-warm-sand bg-transparent py-3 text-noir outline-none transition-colors focus:border-espresso"
          />
        </div>

        {variant === "wertermittlung" && (
          <>
            <div>
              <label htmlFor="address" className="mb-2 block text-xs uppercase tracking-[0.1em] text-taupe">
                Adresse der Immobilie *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                placeholder="Straße, PLZ, Ort"
                className="w-full border-b border-warm-sand bg-transparent py-3 text-noir outline-none transition-colors placeholder:text-taupe/50 focus:border-espresso"
              />
            </div>
            <div>
              <label htmlFor="propertyType" className="mb-2 block text-xs uppercase tracking-[0.1em] text-taupe">
                Immobilientyp *
              </label>
              <select
                id="propertyType"
                name="propertyType"
                required
                className="w-full border-b border-warm-sand bg-transparent py-3 text-noir outline-none transition-colors focus:border-espresso"
              >
                <option value="">Bitte wählen</option>
                <option value="haus">Haus</option>
                <option value="wohnung">Wohnung</option>
                <option value="grundstueck">Grundstück</option>
                <option value="gewerbe">Gewerbeimmobilie</option>
              </select>
            </div>
          </>
        )}

        <div>
          <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.1em] text-taupe">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full resize-none border-b border-warm-sand bg-transparent py-3 text-noir outline-none transition-colors focus:border-espresso"
          />
        </div>

        <div className="pt-4">
          <Button type="submit">{submitLabel}</Button>
        </div>

        <p className="text-xs text-taupe">
          * Pflichtfelder. Ihre Daten werden vertraulich behandelt.{" "}
          <a href="/datenschutz" className="underline hover:text-espresso">
            Datenschutzerklärung
          </a>
        </p>
      </form>
    </Reveal>
  );
}
