'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyRound } from "lucide-react";

export function BuyerPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Backend-Integration für Lead-Erfassung
      console.log('Lead erfasst:', email);
      setSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 2500);
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
            <Input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border-warm-sand/50 focus:border-espresso focus:ring-espresso/10 h-12 text-noir"
            />
            <Button type="submit" className="w-full h-12 text-[13px] uppercase tracking-[0.15em]">
              Exklusiv-Zugang sichern
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
