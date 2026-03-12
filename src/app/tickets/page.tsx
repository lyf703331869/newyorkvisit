import { TicketPanel } from "@/components/TicketPanel";

export const metadata = {
  title: "纽约门票专区｜纽约城市漫游",
  description: "官方购票链接与可靠渠道，覆盖景点、博物馆与百老汇。",
};

export default function TicketsPage() {
  return (
    <main className="section-padding space-y-8">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">TICKETS</p>
        <h1 className="text-3xl font-semibold text-white">纽约门票入口</h1>
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">
          为每个景点/博物馆/百老汇预留官方网站与可靠票务平台，后续可接入价格比较与会员系统。
        </p>
      </header>
      <TicketPanel />
    </main>
  );
}
