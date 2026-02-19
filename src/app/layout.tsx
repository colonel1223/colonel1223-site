import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Spencer K. Cottrell — AI Systems Researcher | Machine Learning | AI Infrastructure",
    template: "%s | Spencer K. Cottrell"
  },
  description: "AI systems, research, models, and engineering work by Spencer K. Cottrell."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
