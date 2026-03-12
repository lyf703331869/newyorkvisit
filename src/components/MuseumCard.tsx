import { ArrowUpRight } from "lucide-react";
import type { Museum } from "@/content/museums";

export const MuseumCard = ({ name, highlight, suitedFor, duration, mustSee, ticket }: Museum) => (
  <article className="card-glass p-5 space-y-4">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-slate-300">{highlight}</p>
      </div>
      <a href={ticket.url} className="text-sm text-amber-300 inline-flex items-center gap-1">
        {ticket.label}
        <ArrowUpRight size={14} />
      </a>
    </div>
    <div className="grid gap-3 text-xs text-slate-400 sm:grid-cols-3">
      <div>
        <p className="text-white/60">适合人群</p>
        <p className="text-white mt-1">{suitedFor}</p>
      </div>
      <div>
        <p className="text-white/60">推荐时长</p>
        <p className="text-white mt-1">{duration}</p>
      </div>
      {ticket.note && (
        <div>
          <p className="text-white/60">提示</p>
          <p className="text-white mt-1">{ticket.note}</p>
        </div>
      )}
    </div>
    <div className="text-xs text-slate-400">
      <p className="text-white/60">必看内容</p>
      <p className="mt-1 text-white">{mustSee.join(" · ")}</p>
    </div>
  </article>
);
