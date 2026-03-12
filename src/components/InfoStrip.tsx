import type { Essential } from "@/content/essentials";

export const InfoStrip = ({ title, summary, detail }: Essential) => (
  <details className="card-glass p-4" open>
    <summary className="cursor-pointer list-none">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="text-sm text-slate-400">{summary}</p>
        </div>
        <span className="text-slate-400">展开</span>
      </div>
    </summary>
    <p className="mt-3 text-sm text-slate-200">{detail}</p>
  </details>
);
