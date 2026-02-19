import React from "react";

export function Panel(props: { title: string; children: React.ReactNode; subtle?: boolean }) {
  const { title, children, subtle } = props;
  return (
    <section className={`rounded-2xl border ${subtle ? "border-zinc-800/60 bg-zinc-950/40" : "border-zinc-800 bg-zinc-950/70"} p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]`}>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-medium tracking-wide text-zinc-200">{title}</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-zinc-800/0 via-zinc-800/70 to-zinc-800/0 ml-4" />
      </div>
      {children}
    </section>
  );
}
