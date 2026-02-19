import { SITE } from "@/lib/site";
import { Panel } from "@/components/Panel";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-200">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <Pill>Research Hub</Pill>
            <Pill>Reproducible Artifacts</Pill>
            <Pill>Systems • Intelligence • Safety</Pill>
          </div>

          <h1 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
            {SITE.name}
          </h1>

          <p className="mt-3 text-zinc-300 max-w-3xl leading-relaxed">
            {SITE.blurb}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 hover:bg-zinc-900/40" href={SITE.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 hover:bg-zinc-900/40" href={SITE.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 hover:bg-zinc-900/40" href={SITE.links.x} target="_blank" rel="noreferrer">X</a>
          </div>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {SITE.sections.map((s) => (
            <Panel key={s.title} title={s.title}>
              <ul className="space-y-3">
                {s.items.map((it) => (
                  <li key={it.label} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-zinc-100">{it.label}</div>
                      <div className="text-xs text-zinc-400 mt-1">
                        {it.href === "#" ? "Placeholder — we’ll wire this to your work next." : it.href}
                      </div>
                    </div>
                    <a
                      className="shrink-0 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-xs text-zinc-200 hover:bg-zinc-900/40"
                      href={it.href}
                      target={it.href === "#" ? undefined : "_blank"}
                      rel={it.href === "#" ? undefined : "noreferrer"}
                    >
                      Open
                    </a>
                  </li>
                ))}
              </ul>
            </Panel>
          ))}

          <Panel title="Signal (what reviewers care about)" subtle>
            <ul className="text-sm text-zinc-300 space-y-2">
              <li>• Each artifact has a “what / why / how to reproduce” block.</li>
              <li>• Clear technical scope: systems, evals, safety, economics framing.</li>
              <li>• Fast skimmability: minimal fluff, maximal evidence.</li>
              <li>• One-click links to repos + live demos.</li>
            </ul>
          </Panel>

          <Panel title="Contact" subtle>
            <div id="contact" className="text-sm text-zinc-300">
              Best contact paths are linked above.
              <div className="mt-3 text-xs text-zinc-500">
                Tip: later we’ll add a “press kit” section (bio, headshot, 3 bullets, top artifacts).
              </div>
            </div>
          </Panel>
        </div>

        <footer className="mt-12 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} {SITE.name}</span>
            <span className="text-zinc-600">colonel1223.net</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
