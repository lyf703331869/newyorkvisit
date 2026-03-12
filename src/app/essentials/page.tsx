import { essentials } from "@/content/essentials";
import { InfoStrip } from "@/components/InfoStrip";

export const metadata = {
  title: "纽约实用信息｜纽约城市漫游",
  description: "地铁、机场、eSIM、小费、治安、门票与中国游客 FAQ。",
};

export default function EssentialsPage() {
  return (
    <main className="section-padding space-y-8">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">ESSENTIALS</p>
        <h1 className="text-3xl font-semibold text-white">实用信息</h1>
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">
          针对中国游客最关心的问题整理，后续可扩展 FAQ 搜索、地图、订阅等功能。
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {essentials.map((item) => (
          <InfoStrip key={item.title} {...item} />
        ))}
      </div>
    </main>
  );
}
