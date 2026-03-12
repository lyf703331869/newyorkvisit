import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { QuickLinks } from "@/components/QuickLinks";
import { SpotCard } from "@/components/SpotCard";
import { MuseumCard } from "@/components/MuseumCard";
import { ShowCard } from "@/components/ShowCard";
import { ItineraryCard } from "@/components/ItineraryCard";
import { InfoStrip } from "@/components/InfoStrip";
import { TicketPanel } from "@/components/TicketPanel";
import { CityGallery } from "@/components/CityGallery";
import { AIPlanner } from "@/components/AIPlanner";
import { MapHighlight } from "@/components/MapHighlight";
import { TicketAggregator } from "@/components/TicketAggregator";
import { attractions } from "@/content/attractions";
import { museums } from "@/content/museums";
import { shows } from "@/content/shows";
import { itineraries } from "@/content/itineraries";
import { essentials } from "@/content/essentials";

const quickLinks = [
  { title: "热门景点", href: "/attractions", desc: "纽约必去地标", icon: "🗽" },
  { title: "博物馆", href: "/museums", desc: "世界级收藏", icon: "🖼️" },
  { title: "百老汇", href: "/broadway", desc: "剧目推荐", icon: "🎭" },
  { title: "经典行程", href: "/itineraries", desc: "1/3/5 日路线", icon: "🧭" },
  { title: "门票聚合", href: "/tickets", desc: "官方 & 折扣", icon: "🎟️" },
  { title: "实用信息", href: "/essentials", desc: "交通 / eSIM / 安全", icon: "📌" },
  { title: "AI 行程", href: "#ai-planner", desc: "自动排程", icon: "🤖" },
];

export default function HomePage() {
  return (
    <main className="space-y-20 pb-20">
      <section className="section-padding grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.45em] text-slate-500">纽约城市漫游 NYC Roam</span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            面向中国游客的纽约中文旅游指南
          </h1>
          <p className="max-w-2xl text-base text-slate-700 md:text-lg">
            一站式查看攻略、景点、博物馆、百老汇、门票组合与 AI 行程助手，让第一次纽约自由行也能从容安排。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/itineraries" className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white">
              立即规划行程
            </a>
            <a href="/tickets" className="rounded-full border border-slate-300 px-6 py-3 text-sm text-slate-900">
              查看门票专区
            </a>
          </div>
          <ul className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">
            <li>✔ 精选 12+ 核心景点 + 7 座博物馆</li>
            <li>✔ 百老汇剧目分类与购票建议</li>
            <li>✔ 1/3/5 日行程模板 + AI 生成器</li>
            <li>✔ 门票聚合 + 地图区域串联</li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <Image
            src="/images/hero.jpg"
            alt="New York skyline"
            width={900}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/90 p-4 text-slate-900">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Spotlight</p>
            <h3 className="text-lg font-semibold">日落时间：Top of the Rock</h3>
            <p className="text-sm text-slate-600">提前 2-3 周预约黄金时段，顺路串联第五大道</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <SectionHeader title="快速入口" subtitle="按主题查找攻略与工具" />
        <QuickLinks links={quickLinks} />
      </section>

      <section className="section-padding">
        <SectionHeader eyebrow="CITY" title="城市质感" subtitle="图像化了解纽约不同的气质" />
        <CityGallery />
      </section>

      <section className="section-padding soft-gradient rounded-[3rem] mx-4 lg:mx-auto">
        <SectionHeader
          eyebrow="ATTRACTIONS"
          title="纽约必去地标"
          subtitle="附建议停留时间、最佳时段与门票"
          action={<a href="/attractions" className="text-sm text-coral">查看全部景点</a>}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {attractions.slice(0, 6).map((spot) => (
            <SpotCard key={spot.name} {...spot} />
          ))}
        </div>
      </section>

      <section className="section-padding">
        <SectionHeader
          eyebrow="MUSEUMS"
          title="世界级博物馆"
          subtitle="馆藏亮点 + 推荐参观时长 + 预约信息"
          action={<a href="/museums" className="text-sm text-coral">查看博物馆合集</a>}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {museums.map((museum) => (
            <MuseumCard key={museum.name} {...museum} />
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <SectionHeader
          eyebrow="BROADWAY"
          title="百老汇新手指南"
          subtitle="热门剧目 + 折扣策略"
          action={<a href="/broadway" className="text-sm text-coral">查看剧目</a>}
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
          subtitle="根据天数、人群、季节选择模板"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {itineraries.map((it) => (
            <ItineraryCard key={it.title} {...it} />
          ))}
        </div>
      </section>

      <section id="ai-planner" className="section-padding">
        <AIPlanner />
      </section>

      <section className="section-padding">
        <MapHighlight />
      </section>

      <section className="section-padding">
        <SectionHeader
          eyebrow="ESSENTIALS"
          title="实用信息"
          subtitle="交通、机场、网络、小费、安全、通票与 FAQ"
          action={<a href="/essentials" className="text-sm text-coral">查看全部</a>}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {essentials.map((item) => (
            <InfoStrip key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section-padding">
        <SectionHeader
          eyebrow="TICKETS"
          title="门票聚合"
          subtitle="对比官方、通票与折扣渠道"
        />
        <TicketAggregator />
      </section>

      <section className="section-padding">
        <SectionHeader
          eyebrow="CHANNEL"
          title="热门门票入口"
          subtitle="直接跳转官方或可靠票务平台"
        />
        <TicketPanel />
      </section>
    </main>
  );
}
