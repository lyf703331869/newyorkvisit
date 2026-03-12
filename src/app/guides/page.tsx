export const metadata = {
  title: "最新攻略｜纽约城市漫游",
  description: "编辑精选的最新攻略文章，内容占位等待后续 CMS 对接。",
};

const guides = [
  {
    title: "圣诞季怎么玩纽约",
    summary: "Rockefeller 圣诞树、Dyker Heights 灯光、百老汇节日场次。",
    updated: "2025-10-01",
  },
  {
    title: "雨天也好玩的纽约",
    summary: "室内观景台、沉浸式艺术、咖啡路线推荐。",
    updated: "2025-08-16",
  },
];

export default function GuidesPage() {
  return (
    <main className="section-padding space-y-6">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">GUIDES</p>
        <h1 className="text-3xl font-semibold text-white">最新攻略 / 编辑精选</h1>
        <p className="text-sm text-slate-300">后续可接入 CMS 或 AI 自动更新。</p>
      </header>
      <div className="grid gap-4">
        {guides.map((guide) => (
          <article key={guide.title} className="card-glass p-5">
            <p className="text-xs text-slate-400">更新于 {guide.updated}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{guide.title}</h3>
            <p className="text-sm text-slate-300">{guide.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
