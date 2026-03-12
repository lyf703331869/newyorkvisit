import { museums } from "@/content/museums";
import { MuseumCard } from "@/components/MuseumCard";

export const metadata = {
  title: "纽约博物馆攻略｜纽约城市漫游",
  description: "大都会、MoMA、美国自然历史等博物馆的馆藏亮点与门票信息。",
};

export default function MuseumsPage() {
  return (
    <main className="section-padding space-y-8">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">MUSEUMS</p>
        <h1 className="text-3xl font-semibold text-white">世界级博物馆合集</h1>
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">
          馆藏特色、适合人群、推荐参观时长、必看展区与门票预约链接一站式获取。
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {museums.map((museum) => (
          <MuseumCard key={museum.name} {...museum} />
        ))}
      </div>
    </main>
  );
}
