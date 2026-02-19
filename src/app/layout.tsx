import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Spencer K. Cottrell — AI Systems Researcher",
    template: "%s | Spencer K. Cottrell"
  },
  description: "AI systems, machine learning, research infrastructure, and engineering work by Spencer K. Cottrell.",
  keywords: [
    "AI researcher",
    "machine learning engineer",
    "AI systems",
    "artificial intelligence",
    "deep learning",
    "AI infrastructure",
    "AGI research"
  ],
  openGraph: {
    title: "Spencer K. Cottrell — AI Systems Researcher",
    description: "AI systems and machine learning research.",
    url: "https://colonel1223.net",
    siteName: "Spencer K. Cottrell AI Research",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Spencer K. Cottrell — AI Systems Researcher",
    description: "AI systems and machine learning research."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Spencer K. Cottrell",
              url: "https://colonel1223.net",
              jobTitle: "AI Systems Researcher",
              sameAs: [
                "https://github.com/colonel1223",
                "https://www.linkedin.com/in/spencercottrell/",
                "https://x.com/colonel_1223"
              ]
            })
          }}
        />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
