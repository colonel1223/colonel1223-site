import Nav from "../components/Nav";
export default function Home() {
  return (
    <><Nav/><main className="min-h-screen bg-black text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col gap-6">
          <p className="text-sm tracking-widest text-zinc-400">COLONEL1223 LAB</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Spencer K. Cottrell
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl">
            AI systems + research artifacts: papers, models, demos, and engineering work.
            Built for reproducibility, clarity, and signal.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a className="rounded-2xl border border-zinc-700 px-4 py-2 hover:border-zinc-400"
               href="/research">Research</a>
            <a className="rounded-2xl border border-zinc-700 px-4 py-2 hover:border-zinc-400"
               href="/projects">Projects</a>
            <a className="rounded-2xl border border-zinc-700 px-4 py-2 hover:border-zinc-400"
               href="/models">Models</a>
            <a className="rounded-2xl border border-zinc-700 px-4 py-2 hover:border-zinc-400"
               href="/demos">Demos</a>
            <a className="rounded-2xl border border-zinc-700 px-4 py-2 hover:border-zinc-400"
               href="/writing">Writing</a>
            <a className="rounded-2xl border border-zinc-700 px-4 py-2 hover:border-zinc-400"
               href="/cv">CV</a>
            <a className="rounded-2xl border border-zinc-700 px-4 py-2 hover:border-zinc-400"
               href="/contact">Contact</a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { title: "Research", desc: "Papers + technical reports (arXiv-ready formatting later)." },
              { title: "Systems", desc: "Real engineered systems: agents, pipelines, infra." },
              { title: "Demos", desc: "Interactive proof. No screenshots-only portfolios." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 shadow">
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="mt-2 text-sm text-zinc-400">{c.desc}</div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-xs text-zinc-500">
            © {new Date().getFullYear()} — colonel1223.net
          </p>
        </div>
      </div>
    </main></>
  );
}
