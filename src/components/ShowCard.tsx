import { ArrowUpRight } from "lucide-react";
import type { Show } from "@/content/shows";

export const ShowCard = ({ title, genre, forWhom, summary, tips, ticket }: Show) => (
  <article className="card-glass p-5 flex flex-col gap-3">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">BROADWAY</p>
        <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
        <p className="text-sm text-slate-300">{genre} · {forWhom}</p>
      </div>
      <a href={ticket.url} className="text-sm text-amber-300 inline-flex items-center gap-1">
        {ticket.label}
        <ArrowUpRight size={14} />
      </a>
    </div>
    <p className="text-sm text-slate-200">{summary}</p>
    <ul className="text-xs text-slate-400 list-disc pl-5">
      {tips.map((tip) => (
        <li key={tip}>{tip}</li>
      ))}
    </ul>
  </article>
);
