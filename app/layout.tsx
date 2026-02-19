import "./globals.css";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: "Research hub: AI safety, systems inquiry, publications, and deployed artifacts.",
  metadataBase: new URL("https://colonel1223.net"),
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "AI safety · systems inquiry · applied research artifacts.",
    url: "https://colonel1223.net",
    siteName: "colonel1223.net",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "AI safety · systems inquiry · applied research artifacts.",
  },
};

function Nav() {
  const items = [
    ["Research", "/research"],
    ["Publications", "/publications"],
    ["Projects", "/projects"],
    ["Contact", "/contact"],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="/" className="font-medium tracking-tight">{SITE.name}</a>
        <nav className="flex gap-5 text-sm text-zinc-300">
          {items.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-white">{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="mx-auto max-w-5xl px-5 py-10">{children}</main>
        <footer className="mx-auto max-w-5xl px-5 pb-10 text-sm text-zinc-500">
          <div className="border-t border-white/10 pt-6 flex flex-col gap-2">
            <div>{SITE.location}</div>
            <div className="flex gap-4">
              <a href={SITE.links.github}>GitHub</a>
              <a href={SITE.links.linkedin}>LinkedIn</a>
              <a href={SITE.links.x}>X</a>
              <a href={SITE.links.email}>Email</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
