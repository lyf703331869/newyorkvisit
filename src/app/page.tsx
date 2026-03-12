import { SectionHeader } from "@/components/SectionHeader";
import { QuickLinks } from "@/components/QuickLinks";
import { SpotCard } from "@/components/SpotCard";
import { MuseumCard } from "@/components/MuseumCard";
import { ShowCard } from "@/components/ShowCard";
import { ItineraryCard } from "@/components/ItineraryCard";
import { InfoStrip } from "@/components/InfoStrip";
import { TicketPanel } from "@/components/TicketPanel";
import { attractions } from "@/content/attractions";
import { museums } from "@/content/museums";
import { shows } from "@/content/shows";
import { itineraries } from "@/content/itineraries";
import { essentials } from "@/content/essentials";

const quickLinks = [
  { title: "热门景点", href: "/attractions", desc: "纽约必去地标" },
  { title: "博物馆", href: "/museums", desc: "世界级藏品" },
  { title: "百老汇", href: "/broadway", desc: "剧目推荐" },
  { title: "经典行程", href: "/itineraries", desc: "1/3/5 日路线" },
  { title: "门票专区", href: "/tickets", desc: "官方与票务平台" },
  { title: "实用信息", href: "/essentials", desc: "交通 / 安全 / eSIM" },
  { title: "最新攻略", href: "/guides", desc: "编辑精选" },
];

export default function HomePage() {
  return (
    <main className="space-y-20 pb-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-60" />
        <div className="relative section-padding flex min-h-[70vh] flex-col justify-center gap-6">
          <span className="text-xs uppercase tracking-[0.45em] text-slate-300">纽约城市漫游 NYC Roam</span>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            面向中国游客的纽约中文旅游指南
          </h1>
          <p className="max-w-2xl text-base text-slate-200 md:text-lg">
            热门景点、博物馆、百老汇、行程规划与门票入口，一站式解决第一次纽约自由行的所有疑问。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/itineraries" className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-black">
              立即规划行程
            </a>
            <a href="/tickets" className="rounded-full border border-white/25 px-6 py-3 text-sm text-white">
              查看门票专区
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <SectionHeader title="快速入口" subtitle="手机端左右滑动查看" />
        <QuickLinks links={quickLinks} />
      </section>

      <section className="section-padding bg-midnight/60">
        <SectionHeader
          eyebrow="ATTRACTIONS"
          title="纽约必去地标"
          subtitle="附建议停留时间与购票链接"
          action={<a href="/attractions" className="text-sm text-dune">查看全部</a>}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {attractions.slice(0, 4).map((spot) => (
            <SpotCard key={spot.name} {...spot} />
          ))}
        </div>
      </section>

      <section className="section-padding">
        <SectionHeader
          eyebrow="MUSEUMS"
          title="世界级博物馆"
          subtitle="馆藏亮点 + 预约信息"
          action={<a href="/museums" className="text-sm text-dune">查看博物馆合集</a>}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {museums.slice(0, 4).map((museum) => (
            <MuseumCard key={museum.name} {...museum} />
          ))}
        </div>
      </section>

      <section className="section-padding bg-white/5">
        <SectionHeader
          eyebrow="BROADWAY"
          title="百老汇新手指南"
          subtitle="热门剧目 + 购票建议"
          action={<a href="/broadway" className="text-sm text-dune">查看剧目</a>}
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {shows.slice(0, 4).map((show) => (
            <ShowCard key={show.title} {...show} />
          ))}
        </div>
      </section>

      <section className="section-padding">
        <SectionHeader
          eyebrow="ITINERARIES"
          title="行程推荐"
          subtitle="1 / 3 / 5 日与主题路线"
          action={<a href="/itineraries" className="text-sm text-dune">全部行程</a>}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {itineraries.map((it) => (
            <ItineraryCard key={it.title} {...it} />
          ))}
        </div>
      </section>

      <section className="section-padding bg-midnight/70">
        <SectionHeader
          eyebrow="ESSENTIALS"
          title="实用信息"
          subtitle="交通、网络、小费、安全、FAQ"
          action={<a href="/essentials" className="text-sm text-dune">查看全部</a>}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {essentials.map((item) => (
            <InfoStrip key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section-padding">
        <SectionHeader eyebrow="TICKETS" title="门票专区" subtitle="官方 & 可靠票务链接" />
        <TicketPanel />
      </section>
    </main>
  );
}
