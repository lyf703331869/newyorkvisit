import { ArrowUpRight } from "lucide-react";
import type { Museum } from "@/content/museums";

export const MuseumCard = ({ name, highlight, suitedFor, duration, mustSee, ticket }: Museum) => (
  <article className="card-surface p-5 space-y-4">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <p className="text-sm text-slate-600">{highlight}</p>
      </div>
      <a href={ticket.url} className="text-sm font-semibold text-coral inline-flex items-center gap-1">
        {ticket.label}
        <ArrowUpRight size={14} />
      </a>
    </div>
    <div className="grid gap-3 text-xs text-slate-500 sm:grid-cols-3">
      <div>
        <p className="text-slate-400">适合人群</p>
        <p className="text-slate-900 mt-1">{suitedFor}</p>
      </div>
      <div>
        <p className="text-slate-400">推荐时长</p>
        <p className="text-slate-900 mt-1">{duration}</p>
      </div>
      {ticket.note && (
        <div>
          <p className="text-slate-400">提示</p>
          <p className="text-slate-900 mt-1">{ticket.note}</p>
        </div>
      )}
    </div>
    <div className="text-xs text-slate-500">
      <p className="text-slate-400">必看内容</p>
      <p className="mt-1 text-slate-900">{mustSee.join(" · ")}</p>
    </div>
  </article>
);
