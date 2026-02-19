import Nav from "./Nav";

export default function Shell({ title, subtitle, children }: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="mx-auto max-w-5xl px-6 py-14">
        <h1 className="text-3xl md:text-5xl font-semibold">{title}</h1>
        {subtitle ? <p className="mt-3 max-w-3xl text-zinc-400">{subtitle}</p> : null}
        <div className="mt-10">{children}</div>
      </main>
      <footer className="border-t border-zinc-900 py-10">
        <div className="mx-auto max-w-5xl px-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Spencer K. Cottrell — colonel1223.net
        </div>
      </footer>
    </div>
  );
}
