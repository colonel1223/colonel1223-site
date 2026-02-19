import { SITE } from "@/lib/site";

export default function Projects() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <p className="text-zinc-300 leading-7 max-w-3xl">
        Case studies with an emphasis on clarity: what was built, why it matters, and where to explore it.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {SITE.projects.map((p) => (
          <a key={p.title} href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined}
             rel={p.href.startsWith("http") ? "noreferrer" : undefined}
             className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition">
            <div className="text-base font-medium tracking-tight">{p.title}</div>
            <div className="mt-2 text-sm text-zinc-300">{p.outcome}</div>
            <div className="mt-3 text-xs text-zinc-400">{p.stack}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
