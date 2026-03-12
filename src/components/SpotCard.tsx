import { ArrowUpRight } from "lucide-react";
import type { Attraction } from "@/content/attractions";

export const SpotCard = ({ name, tagline, tags, stay, bestTime, ticket }: Attraction) => (
  <article className="card-glass p-5">
    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
      <div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-sm text-slate-300">{tagline}</p>
      </div>
      {ticket && (
        <a
          href={ticket.url}
          className="inline-flex items-center gap-1 text-sm text-amber-300 hover:text-amber-200"
        >
          {ticket.label}
          <ArrowUpRight size={16} />
        </a>
      )}
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
          {tag}
        </span>
      ))}
    </div>
    <div className="mt-4 grid gap-4 text-xs text-slate-400 sm:grid-cols-2">
      <div>
        <p className="text-white/60">建议停留</p>
        <p className="mt-1 text-base text-white">{stay}</p>
      </div>
      <div>
        <p className="text-white/60">最佳时间</p>
        <p className="mt-1 text-base text-white">{bestTime}</p>
      </div>
    </div>
  </article>
);
