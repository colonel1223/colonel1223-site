import { SITE } from "@/lib/site";

function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group block rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-medium tracking-tight">{title}</h3>
        <span className="text-zinc-500 group-hover:text-zinc-300">↗</span>
      </div>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{desc}</p>
    </a>
  );
}

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm text-zinc-400">{SITE.location}</p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {SITE.tagline}
        </h1>
        <p className="max-w-2xl text-zinc-300 leading-7">
          I build research artifacts that make complex AI risk and deployment dynamics legible:
          models, interactive visualizations, and systems analyses—designed to be read, tested, and debated.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {SITE.selected.map((x) => (
          <Card key={x.title} title={x.title} desc={x.desc} href={x.href} />
        ))}
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-base font-medium tracking-tight">Current focus</h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
          {SITE.focus.map((x) => (
            <li key={x} className="flex gap-2">
              <span className="text-zinc-500">•</span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
