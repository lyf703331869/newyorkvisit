type QuickLink = { title: string; href: string; desc: string; icon?: string };

type Props = { links: QuickLink[] };

export const QuickLinks = ({ links }: Props) => (
  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {links.map((link) => (
      <a
        key={link.title}
        href={link.href}
        className="card-surface flex items-center gap-4 p-5 transition hover:shadow-2xl"
      >
        {link.icon && (
          <span className="text-2xl" aria-hidden>
            {link.icon}
          </span>
        )}
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{link.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{link.desc}</p>
        </div>
      </a>
    ))}
  </div>
);
