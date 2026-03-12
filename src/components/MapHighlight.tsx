import { mapZones } from "@/content/map";

export const MapHighlight = () => (
  <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#fee2b3] via-[#fde1d5] to-[#f6f4f1] p-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full border border-white/60" />
        <div className="absolute right-10 top-14 h-40 w-40 rounded-full border border-white/40" />
      </div>
      <div className="relative space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-600">地图预览</p>
        <h3 className="text-2xl font-semibold text-slate-900">先找片区，再排路线</h3>
        <p className="text-sm text-slate-600">
          将曼哈顿与布鲁克林拆成 4 个易理解的区域，一键串联附近景点、用餐与购物地点。后续将接入可互动地图。
        </p>
      </div>
    </div>
    <div className="grid gap-4">
      {mapZones.map((zone) => (
        <article key={zone.name} className="card-surface p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">ZONE</p>
              <h4 className="text-lg font-semibold text-slate-900">{zone.name}</h4>
              <p className="text-xs text-slate-500">{zone.label}</p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">建议串联</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">{zone.highlights.join(" · ")}</p>
        </article>
      ))}
    </div>
  </div>
);
