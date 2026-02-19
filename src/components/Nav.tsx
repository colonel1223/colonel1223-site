export default function Nav() {
  const links = ["research","projects","models","demos","writing","vision","cv","contact"];
  return (
    <nav className="border-b border-zinc-800">
      <div className="mx-auto max-w-5xl px-6 py-4 flex gap-6 text-sm">
        <a href="/" className="font-semibold">colonel1223</a>
        {links.map(l=>(
          <a key={l} href={`/${l}`} className="text-zinc-400 hover:text-white capitalize">{l}</a>
        ))}
      </div>
    </nav>
  );
}
