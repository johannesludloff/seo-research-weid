"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

/**
 * DSGVO-compliant cookie consent banner.
 * 
 * TODO: Connect to actual consent management
 * - Store consent in localStorage/cookie
 * - Integrate with Google Tag Manager
 * - Add granular consent options if needed
 */
export function CookieBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay to avoid layout shift on initial load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
    // TODO: Initialize analytics/tracking
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "essential");
    setVisible(false);
    // Only essential cookies
  };

  const handleSettings = () => {
    // TODO: Open detailed settings modal
    // For now, same as decline
    handleDecline();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded border border-warm-sand bg-ivory p-6 shadow-lg md:flex md:items-center md:gap-6">
        <div className="flex-1">
          <p className="font-display text-lg">Cookie-Einstellungen</p>
          <p className="mt-2 text-sm text-taupe">
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
            Einige sind technisch notwendig, andere helfen uns, die Website zu verbessern.{" "}
            <a href="/datenschutz" className="underline hover:text-espresso">
              Mehr erfahren
            </a>
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3 md:mt-0 md:flex-nowrap">
          <Button variant="ghost" size="sm" onClick={handleSettings}>
            Einstellungen
          </Button>
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Nur notwendige
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Alle akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}
