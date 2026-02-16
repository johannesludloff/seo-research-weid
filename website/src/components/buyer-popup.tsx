'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyRound } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function BuyerPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('weid_buyer_popup_seen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 10000); // 10 Sekunden

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('weid_buyer_popup_seen', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "buyer",
          email: email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ein Fehler ist aufgetreten");
      }

      // Track successful submission
      trackEvent("form_submit", "Lead", "Buyer Popup", 1);

      setSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 2500);
    } catch (err) {
      console.error("Buyer popup submission error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-ivory border-warm-sand max-w-[440px] p-8">
        <DialogHeader className="space-y-4">
          <div className="mx-auto bg-parchment w-14 h-14 rounded-full flex items-center justify-center text-espresso mb-2">
            <KeyRound size={26} strokeWidth={1.5} />
          </div>
          <DialogTitle className="font-display text-2xl md:text-3xl text-center leading-tight text-noir">
            70% unserer Objekte werden verkauft, bevor sie online gehen.
          </DialogTitle>
          <DialogDescription className="text-taupe text-center text-[15px] leading-relaxed">
            Die besten Immobilien in Erlangen erreichen nie die Portale. Als Vorgemerkter erfahren Sie es zuerst – oft Tage vor allen anderen.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center animate-in fade-in zoom-in duration-300">
            <p className="text-espresso font-medium text-lg">Sie sind dabei.</p>
            <p className="text-taupe text-sm mt-2">Ab sofort erfahren Sie von neuen Objekten, bevor sie veröffentlicht werden.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {error && (
              <div className="rounded bg-red-50 px-3 py-2 text-xs text-red-800 border border-red-200">
                {error}
              </div>
            )}
            <Input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className="bg-white border-warm-sand/50 focus:border-espresso focus:ring-espresso/10 h-12 text-noir"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-[13px] uppercase tracking-[0.15em]"
            >
              {isSubmitting ? "Wird gesendet..." : "Jetzt vormerken"}
            </Button>
            <p className="text-[11px] text-taupe/60 text-center leading-relaxed">
              Kein Spam. Abmeldung jederzeit möglich. <a href="/datenschutz" className="underline hover:text-taupe">Datenschutz</a>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
