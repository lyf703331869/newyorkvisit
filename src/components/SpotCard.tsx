import { ArrowUpRight } from "lucide-react";
import type { Attraction } from "@/content/attractions";

export const SpotCard = ({ name, tagline, tags, stay, bestTime, ticket }: Attraction) => (
  <article className="card-surface p-5">
    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
        <p className="text-sm text-slate-600">{tagline}</p>
      </div>
      {ticket && (
        <a
          href={ticket.url}
          className="inline-flex items-center gap-1 text-sm font-semibold text-coral"
        >
          {ticket.label}
          <ArrowUpRight size={16} />
        </a>
      )}
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="tag-pill text-slate-600">
          {tag}
        </span>
      ))}
    </div>
    <div className="mt-4 grid gap-4 text-xs text-slate-500 sm:grid-cols-2">
      <div>
        <p className="text-slate-400">建议停留</p>
        <p className="mt-1 text-base text-slate-900">{stay}</p>
      </div>
      <div>
        <p className="text-slate-400">最佳时间</p>
        <p className="mt-1 text-base text-slate-900">{bestTime}</p>
      </div>
    </div>
  </article>
);
