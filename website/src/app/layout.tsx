import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ConsentManager } from "@/components/consent-manager";
import { Analytics } from "@/components/analytics";
import { FacebookPixel } from "@/components/facebook-pixel";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "@/components/google-tag-manager";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://weid-immobilien.de'),
  title: "WEID Immobilien | Erlangen",
  description: "Ihr lokaler Immobilienmakler in Erlangen. Verkauf, Bewertung und persönliche Beratung.",
  openGraph: {
    siteName: 'WEID Immobilien',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WEID Immobilien - Ihr Immobilienmakler in Erlangen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Consentmanager CMP - must load before any tracking */}
        <ConsentManager />
        {/* GTM Head - blocked by consentmanager until consent */}
        <GoogleTagManagerHead />
        {/* JSON-LD Structured Data */}
        <StructuredData />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-body`}>
        {/* GTM Body (noscript) - should be first in body */}
        <GoogleTagManagerBody />
        {children}
        {/* GA4 - blocked by consentmanager until consent */}
        <Analytics />
        {/* Facebook Pixel - blocked by consentmanager until consent */}
        <FacebookPixel />
      </body>
    </html>
  );
}
