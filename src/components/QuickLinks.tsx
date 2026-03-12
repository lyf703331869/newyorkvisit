type QuickLink = { title: string; href: string; desc: string };

type Props = { links: QuickLink[] };

export const QuickLinks = ({ links }: Props) => (
  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {links.map((link) => (
      <a
        key={link.title}
        href={link.href}
        className="card-glass block p-5 transition hover:border-white/30"
      >
        <h3 className="text-lg font-semibold text-white">{link.title}</h3>
        <p className="mt-2 text-sm text-slate-400">{link.desc}</p>
      </a>
    ))}
  </div>
);
