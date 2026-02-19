import { SITE } from "@/lib/site";

export default function Contact() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <p className="text-zinc-300 leading-7 max-w-2xl">
        For research collaboration, review, or speaking: reach out via email or LinkedIn.
      </p>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm">
        <a className="block text-zinc-200 hover:text-white" href={SITE.links.email}>Email</a>
        <a className="block text-zinc-200 hover:text-white" href={SITE.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a className="block text-zinc-200 hover:text-white" href={SITE.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a className="block text-zinc-200 hover:text-white" href={SITE.links.x} target="_blank" rel="noreferrer">X ↗</a>
      </div>
    </div>
  );
}
