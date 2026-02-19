import GithubFeed from "../components/GithubFeed";
import Shell from "../components/Shell";

const featured = [
  { title: "Probabilistic Models", desc: "Research artifacts: papers + visualizations (attach later).", href: "/research" },
  { title: "AI Systems", desc: "Agents, pipelines, and infrastructure work (attach later).", href: "/projects" },
  { title: "Demos", desc: "Interactive proof: no screenshots-only portfolios.", href: "/demos" },
];

export default function Home() {
  return (
    <Shell
      title="Spencer K. Cottrell"
      subtitle="AI systems + research artifacts: papers, models, demos, and engineering work — built for reproducibility, clarity, and signal."
    >
      <div className="flex flex-wrap gap-3">
        <a className="rounded-2xl border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-500" href="/research">
          View Research
        </a>
        <a className="rounded-2xl border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-500" href="/projects">
          View Projects
        </a>
        <a className="rounded-2xl border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-500" href="/models">
          View Models
        </a>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {featured.map((c) => (
          <a key={c.title} href={c.href} className="rounded-2xl border border-zinc-900 bg-zinc-950 p-5 hover:border-zinc-700">
            <div className="text-lg font-semibold">{c.title}</div>
            <div className="mt-2 text-sm text-zinc-400">{c.desc}</div>
            <div className="mt-4 text-xs text-zinc-500">Open →</div>
          </a>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
        <div className="text-sm text-zinc-400">Current focus</div>
        <div className="mt-2 flex flex-wrap gap-2 text-sm">
          {["AI safety", "agent systems", "embodied intelligence", "ML infrastructure", "probabilistic modeling"].map((t) => (
            <span key={t} className="rounded-full border border-zinc-800 px-3 py-1 text-zinc-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Shell>
  );
}
