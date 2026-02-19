import { SITE } from "@/lib/site";

export default function Publications() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Publications</h1>
      <p className="text-zinc-300 leading-7 max-w-3xl">
        Working papers and artifacts. This page is intentionally minimal: titles, status, and links.
      </p>

      <div className="space-y-3">
        {SITE.publications.map((p) => (
          <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-zinc-400">{p.year} · {p.venue}</div>
            <div className="mt-1 text-base font-medium tracking-tight">{p.title}</div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-zinc-200 hover:text-white">
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
