"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { trackEvent } from "@/components/analytics";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  variant?: "default" | "wertermittlung";
}

/**
 * Reusable lead capture form.
 * Connected to /api/contact for email notifications via Resend.
 */
export function LeadForm({
  title = "Kontakt aufnehmen",
  subtitle,
  submitLabel = "Absenden",
  variant = "default",
}: LeadFormProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);

      const payload: Record<string, string> = {
        type: variant === "wertermittlung" ? "wertermittlung" : "contact",
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string || "",
        message: formData.get("message") as string || "",
      };

      if (variant === "wertermittlung") {
        payload.address = formData.get("address") as string;
        payload.propertyType = formData.get("propertyType") as string;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ein Fehler ist aufgetreten");
      }

      // Track successful submission
      trackEvent(
        "form_submit",
        "Contact",
        variant === "wertermittlung" ? "Wertermittlung" : "Kontakt",
        1
      );

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
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
      {error && (
        <div className="mb-6 rounded bg-red-50 px-4 py-3 text-sm text-red-800 border border-red-200">
          {error}
        </div>
      )}
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
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Wird gesendet..." : submitLabel}
          </Button>
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
