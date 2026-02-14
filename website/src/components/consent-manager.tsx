"use client";

import Script from "next/script";

/**
 * Consentmanager CMP Integration
 * 
 * DSGVO-compliant cookie consent using consentmanager.net
 * - Google Consent Mode v2 enabled
 * - Automatic blocking until consent (Basic Implementation)
 * - German language by default
 * 
 * Setup required:
 * 1. Create account at consentmanager.net
 * 2. Add your domain and configure vendors (Google Analytics)
 * 3. Get your CMP ID and add to .env.local as NEXT_PUBLIC_CONSENTMANAGER_ID
 * 
 * @see https://help.consentmanager.net/books/cmp/page/working-with-google-consent-mode-v2-automatic-blocking-code
 */

const CMP_ID = process.env.NEXT_PUBLIC_CONSENTMANAGER_ID;

export function ConsentManager() {
  // Don't render if no CMP ID configured
  if (!CMP_ID) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[ConsentManager] Missing NEXT_PUBLIC_CONSENTMANAGER_ID. " +
        "Cookie consent banner will not be shown."
      );
    }
    return null;
  }

  return (
    <>
      {/* Consentmanager CMP - must load BEFORE any tracking scripts */}
      <Script
        id="consentmanager-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.cmp_host = "delivery.consentmanager.net";
            window.cmp_cdn = "cdn.consentmanager.net";
            window.cmp_codesrc = 16;
          `,
        }}
      />
      <Script
        id="consentmanager"
        src={`https://cdn.consentmanager.net/delivery/autoblocking/${CMP_ID}.js`}
        strategy="beforeInteractive"
        data-cmp-ab="1"
      />
    </>
  );
}
