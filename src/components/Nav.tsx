const links = [
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/models", label: "Models" },
  { href: "/demos", label: "Demos" },
  { href: "/writing", label: "Writing" },
  { href: "/vision", label: "Vision" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="font-semibold tracking-wide">
          colonel1223<span className="text-zinc-500">.net</span>
        </a>
        <nav className="hidden gap-5 text-sm md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-zinc-400 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://github.com/colonel1223"
          className="rounded-xl border border-zinc-800 px-3 py-1.5 text-xs text-zinc-300 hover:border-zinc-500"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
