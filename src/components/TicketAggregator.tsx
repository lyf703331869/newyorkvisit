import { ticketCombos } from "@/content/ticketCombos";
import { ArrowUpRight } from "lucide-react";

export const TicketAggregator = () => (
  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
    <table className="min-w-full text-left text-sm">
      <thead className="bg-slate-50 text-xs uppercase tracking-[0.2em] text-slate-500">
        <tr>
          <th className="px-6 py-4">门票组合</th>
          <th className="px-6 py-4">包含/适用</th>
          <th className="px-6 py-4">预计节省</th>
          <th className="px-6 py-4">购买渠道</th>
        </tr>
      </thead>
      <tbody>
        {ticketCombos.map((combo) => (
          <tr key={combo.name} className="border-t border-slate-100">
            <td className="px-6 py-4">
              <p className="font-semibold text-slate-900">{combo.name}</p>
              <p className="text-xs text-slate-500">{combo.bestFor}</p>
            </td>
            <td className="px-6 py-4 text-slate-700">
              <ul className="list-disc pl-5">
                {combo.includes.map((inc) => (
                  <li key={inc}>{inc}</li>
                ))}
              </ul>
            </td>
            <td className="px-6 py-4 font-medium text-coral">{combo.estSave}</td>
            <td className="px-6 py-4 space-y-2">
              {combo.providers.map((provider) => (
                <a
                  key={provider.label}
                  href={provider.url}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700 hover:border-coral"
                >
                  {provider.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
