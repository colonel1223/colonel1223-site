export const metadata = {
  title: "Spencer K. Cottrell — AI Systems Research",
  description: "AI systems, research, models, and engineering work by Spencer K. Cottrell.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
