import { tickets } from "@/content/tickets";

export const TicketPanel = () => (
  <div className="grid gap-4 lg:grid-cols-2">
    {tickets.map((ticket) => (
      <article key={ticket.name} className="card-glass p-5 space-y-3">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
          <span>{ticket.category}</span>
          <span className="text-white/70">门票专区</span>
        </div>
        <h3 className="text-xl font-semibold text-white">{ticket.name}</h3>
        <div className="text-sm text-slate-300">
          <p>官方渠道：</p>
          <a href={ticket.official} className="text-amber-300">{ticket.official}</a>
        </div>
        <div className="text-sm text-slate-300">
          <p>可靠平台：</p>
          <ul className="mt-1 space-y-1">
            {ticket.partners.map((partner) => (
              <li key={partner.label}>
                <a href={partner.url} className="text-white/90 hover:text-amber-300">
                  {partner.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>
    ))}
  </div>
);
