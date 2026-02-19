import "./globals.css";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.blurb,
  metadataBase: new URL(`https://${SITE.domain}`),
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.blurb,
    url: `https://${SITE.domain}`,
    siteName: SITE.domain,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.blurb,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
