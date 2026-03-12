import { shows } from "@/content/shows";
import { ShowCard } from "@/components/ShowCard";

export const metadata = {
  title: "百老汇中文指南｜纽约城市漫游",
  description: "百老汇是什么、如何选剧、热门剧目推荐与购票建议。",
};

export default function BroadwayPage() {
  return (
    <main className="section-padding space-y-8">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">BROADWAY</p>
        <h1 className="text-3xl font-semibold text-white">百老汇专栏</h1>
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">
          了解百老汇剧院区、首选剧目、家庭/情侣/第一次观剧推荐及购票平台说明。
        </p>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        {shows.map((show) => (
          <ShowCard key={show.title} {...show} />
        ))}
      </div>
    </main>
  );
}
