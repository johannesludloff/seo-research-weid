"use client";

import Script from "next/script";

/**
 * Google Tag Manager with Consentmanager Integration
 *
 * Uses automatic blocking (Basic Implementation):
 * - GTM is blocked until user gives consent
 * - Consentmanager handles the blocking via cmplazyload class
 * - Consent signals are sent automatically
 *
 * Setup:
 * 1. Add GTM Container ID to .env.local as NEXT_PUBLIC_GTM_ID
 * 2. Ensure consentmanager has Google Tag Manager (vendor s2878) in vendor list
 *
 * @see https://help.consentmanager.net/books/cmp/page/working-with-google-tag-manager
 */

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * GTM Head Component
 * Place in <head> tag - loads the main GTM script
 */
export function GoogleTagManagerHead() {
  // Don't render if no GTM ID configured
  if (!GTM_ID) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[GoogleTagManager] Missing NEXT_PUBLIC_GTM_ID. " +
        "Google Tag Manager will not be loaded."
      );
    }
    return null;
  }

  return (
    <>
      {/*
        Google Tag Manager Head Script with Consentmanager Automatic Blocking

        - type="text/plain" prevents execution until consent
        - class="cmplazyload" tells consentmanager to manage this script
        - data-cmp-vendor="s2878" maps to Google Tag Manager vendor
      */}
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        type="text/plain"
        className="cmplazyload"
        data-cmp-vendor="s2878"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  );
}

/**
 * GTM Body Component
 * Place as first child in <body> tag - noscript fallback
 */
export function GoogleTagManagerBody() {
  if (!GTM_ID) {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

// Type declaration for GTM dataLayer
declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}
