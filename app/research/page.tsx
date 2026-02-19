import { SITE } from "@/lib/site";

export default function Research() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Research</h1>
      <p className="text-zinc-300 leading-7 max-w-3xl">
        This hub collects working papers, interactive artifacts, and systems analyses.
        The goal is to make high-impact questions testable—through models, simulations, and readable narratives.
      </p>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3">
        <h2 className="text-base font-medium tracking-tight">Program themes</h2>
        <ul className="space-y-2 text-sm text-zinc-300">
          {SITE.focus.map((x) => (
            <li key={x} className="flex gap-2">
              <span className="text-zinc-500">•</span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <a className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition"
           href="https://colonel1223.github.io/transmutation-research/" target="_blank" rel="noreferrer">
          <div className="text-base font-medium tracking-tight">Transmutation Research (Interactive)</div>
          <div className="mt-2 text-sm text-zinc-300 leading-6">Interactive visualizations + writeups.</div>
        </a>

        <a className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition"
           href={SITE.links.github} target="_blank" rel="noreferrer">
          <div className="text-base font-medium tracking-tight">GitHub archive</div>
          <div className="mt-2 text-sm text-zinc-300 leading-6">Repos, releases, and deployed artifacts.</div>
        </a>
      </div>
    </div>
  );
}
