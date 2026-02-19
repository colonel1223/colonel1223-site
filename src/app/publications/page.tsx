import Shell from "../../components/Shell";

export default function Page() {
  return (
    <Shell
      title="publications"
      subtitle="Professional section — attach real artifacts later."
    >
      <div className="grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-5">
          <div className="text-sm text-zinc-400">Status</div>
          <div className="mt-2 text-lg font-semibold">Ready</div>
          <div className="mt-2 text-sm text-zinc-400">
            Content will be attached here (papers, links, infrastructure details, metrics).
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-5">
          <div className="text-sm text-zinc-400">Next</div>
          <div className="mt-2 text-lg font-semibold">Attach artifacts</div>
          <div className="mt-2 text-sm text-zinc-400">
            This section will host production work and research outputs.
          </div>
        </div>

      </div>
    </Shell>
  );
}
