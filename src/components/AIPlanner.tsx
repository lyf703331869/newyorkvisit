const dayOptions = ["1 天速览", "3 天经典", "5 天深度", "亲子", "情侣", "博物馆"];
const vibeOptions = ["地标打卡", "文艺漫游", "户外/公园", "雨天计划", "圣诞季", "百老汇+美食"];

export const AIPlanner = () => (
  <div className="grid gap-8 lg:grid-cols-2 card-surface p-8">
    <div>
      <p className="text-xs uppercase tracking-[0.4em] text-slate-500">AI 行程实验室</p>
      <h3 className="mt-3 text-2xl font-semibold text-slate-900">根据你的兴趣自动排出纽约行程</h3>
      <p className="mt-3 text-sm text-slate-600">
        选择天数与旅行风格，AI 会在几秒内给出 Day-by-day 建议、门票清单与地图串联。功能正在内测，欢迎抢先体验。
      </p>
      <ul className="mt-6 space-y-2 text-sm text-slate-600">
        <li>• 输出包含每日亮点、交通建议、可选加点</li>
        <li>• 自动匹配门票组合与折扣</li>
        <li>• 支持邮件发送或导出 PDF</li>
      </ul>
    </div>
    <form className="space-y-4">
      <label className="block text-sm font-semibold text-slate-700">旅程天数 / 主题</label>
      <div className="flex flex-wrap gap-2">
        {dayOptions.map((opt) => (
          <button
            type="button"
            key={opt}
            className="tag-pill border border-transparent hover:border-coral"
          >
            {opt}
          </button>
        ))}
      </div>
      <label className="block text-sm font-semibold text-slate-700">旅行氛围</label>
      <div className="flex flex-wrap gap-2">
        {vibeOptions.map((opt) => (
          <button key={opt} type="button" className="tag-pill border border-transparent hover:border-coral">
            {opt}
          </button>
        ))}
      </div>
      <label className="block text-sm font-semibold text-slate-700">出行日期（可选）</label>
      <input type="date" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
      <button type="button" className="w-full rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white">
        一键生成行程（即将上线）
      </button>
    </form>
  </div>
);
