import { attractions } from "@/content/attractions";
import { SpotCard } from "@/components/SpotCard";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "纽约景点指南｜纽约城市漫游",
  description: "为中国游客整理的纽约必玩景点、建议停留时间与门票链接。",
};

export default function AttractionsPage() {
  return (
    <main className="section-padding space-y-8">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">ATTRACTIONS</p>
        <h1 className="text-3xl font-semibold text-white">纽约必去景点全集</h1>
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">
          针对第一次来纽约的旅行者，提供建议停留时间、适合人群、交通与购票链接。
        </p>
      </header>
      <SectionHeader title="核心景点" subtitle="以下内容可按人群/主题二次筛选（预留）" />
      <div className="grid gap-4 md:grid-cols-2">
        {attractions.map((spot) => (
          <SpotCard key={spot.name} {...spot} />
        ))}
      </div>
    </main>
  );
}
