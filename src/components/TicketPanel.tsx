import { tickets } from "@/content/tickets";
import { ArrowUpRight } from "lucide-react";

export const TicketPanel = () => (
  <div className="grid gap-4 lg:grid-cols-2">
    {tickets.map((ticket) => (
      <article key={ticket.name} className="card-surface p-5 space-y-3">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
          <span>{ticket.category}</span>
          <span className="text-slate-500">门票专区</span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{ticket.name}</h3>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-700">官方渠道</p>
          <a href={ticket.official} className="inline-flex items-center gap-1 text-coral">
            {ticket.official}
            <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-700">可靠平台</p>
          <ul className="mt-1 space-y-1">
            {ticket.partners.map((partner) => (
              <li key={partner.label}>
                <a href={partner.url} className="text-slate-800 hover:text-coral">
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
