import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Colonel1223 Lab — Spencer K. Cottrell",
    template: "%s — Colonel1223 Lab",
  },
  description:
    "Research artifacts, systems work, and reproducible demos by Spencer K. Cottrell.",
  metadataBase: new URL("https://colonel1223.net"),
  openGraph: {
    title: "Colonel1223 Lab — Spencer K. Cottrell",
    description:
      "Research artifacts, systems work, and reproducible demos by Spencer K. Cottrell.",
    url: "https://colonel1223.net",
    siteName: "Colonel1223 Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colonel1223 Lab — Spencer K. Cottrell",
    description:
      "Research artifacts, systems work, and reproducible demos by Spencer K. Cottrell.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-zinc-100">{children}</body>
    </html>
  );
}
