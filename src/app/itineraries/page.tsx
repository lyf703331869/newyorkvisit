import { itineraries } from "@/content/itineraries";
import { ItineraryCard } from "@/components/ItineraryCard";

export const metadata = {
  title: "纽约行程规划｜纽约城市漫游",
  description: "1 / 3 / 5 日路线、亲子/季节主题行程与每日建议。",
};

export default function ItinerariesPage() {
  return (
    <main className="section-padding space-y-8">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">ITINERARIES</p>
        <h1 className="text-3xl font-semibold text-white">行程攻略</h1>
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">
          按天数、人群、季节选择合适路线，后续可扩展 AI 行程生成与地图串联。
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {itineraries.map((itinerary) => (
          <ItineraryCard key={itinerary.title} {...itinerary} />
        ))}
      </div>
    </main>
  );
}
