import type { Itinerary } from "@/content/itineraries";

export const ItineraryCard = ({ title, days, theme, highlight, plan }: Itinerary) => (
  <article className="card-glass p-5 space-y-3">
    <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
      <span>{days} DAY</span>
      <span>•</span>
      <span>{theme}</span>
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-sm text-slate-300">{highlight}</p>
    <ul className="mt-3 space-y-2 text-xs text-slate-400">
      {plan.map((item) => (
        <li key={item} className="rounded-2xl bg-white/5 px-3 py-2 text-white/80">
          {item}
        </li>
      ))}
    </ul>
    <button className="w-full rounded-full border border-white/20 py-2 text-sm text-white/90">
      下载行程 PDF（预留）
    </button>
  </article>
);
