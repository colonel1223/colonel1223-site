import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Spencer K. Cottrell — AI Systems Researcher",
    template: "%s | Spencer K. Cottrell"
  },
  description: "AI systems, research, models, infrastructure, and machine learning work."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
