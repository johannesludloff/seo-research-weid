'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

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
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('weid_buyer_popup_seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Lead collected:', email);
      setSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-ivory border-warm-sand max-w-[440px] p-8">
        <DialogHeader className="space-y-4">
          <div className="mx-auto bg-parchment w-12 h-12 rounded-full flex items-center justify-center text-espresso mb-2">
            <Mail size={24} strokeWidth={1.5} />
          </div>
          <DialogTitle className="font-display text-3xl text-center leading-tight">
            Suchen Sie Ihr neues Zuhause in Erlangen?
          </DialogTitle>
          <DialogDescription className="text-taupe text-center text-[15px] leading-relaxed">
            Werden Sie Teil unserer exklusiven Interessentenliste und erhalten Sie neue Objekte noch vor der offiziellen Veröffentlichung.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center animate-in fade-in zoom-in duration-300">
            <p className="text-espresso font-medium">Vielen Dank! Wir haben Sie vorgemerkt.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border-warm-sand/50 focus:border-espresso focus:ring-espresso/10 h-12"
            />
            <Button type="submit" className="w-full h-12 text-[13px] uppercase tracking-[0.15em]">
              Jetzt anmelden
            </Button>
            <p className="text-[10px] text-taupe/60 text-center leading-relaxed">
              Mit der Anmeldung akzeptieren Sie unsere Datenschutzbestimmungen. Abmeldung jederzeit möglich.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
