export type Museum = {
  name: string;
  highlight: string;
  suitedFor: string;
  duration: string;
  mustSee: string[];
  ticket: { label: string; url: string; note?: string };
};

export const museums: Museum[] = [
  {
    name: "大都会艺术博物馆 The Met",
    highlight: "世界三大博物馆之一，3000 年跨文明收藏",
    suitedFor: "艺术爱好者 / 家庭",
    duration: "建议 3-4 小时",
    mustSee: ["埃及神庙 Dendur", "欧洲油画厅", "武士盔甲"],
    ticket: { label: "预约门票", url: "https://www.metmuseum.org", note: "纽约州居民可随心付" },
  },
  {
    name: "现代艺术博物馆 MoMA",
    highlight: "现代与当代艺术殿堂",
    suitedFor: "设计/创意人、雨天好去处",
    duration: "2-3 小时",
    mustSee: ["梵高《星夜》", "高迪椅", "设计与电影展"],
    ticket: { label: "购票", url: "https://www.moma.org" },
  },
  {
    name: "美国自然历史博物馆",
    highlight: "恐龙化石与宇宙展馆，亲子必去",
    suitedFor: "亲子/家庭",
    duration: "3 小时",
    mustSee: ["恐龙厅", "鲸鱼厅", "Rose Center"],
    ticket: { label: "预约时段", url: "https://www.amnh.org" },
  },
  {
    name: "古根海姆博物馆",
    highlight: "赖特螺旋建筑 + 20 世纪现代艺术",
    suitedFor: "建筑/艺术爱好者",
    duration: "1.5-2 小时",
    mustSee: ["螺旋坡道", "康定斯基收藏"],
    ticket: { label: "购票", url: "https://www.guggenheim.org" },
  },
  {
    name: "9/11 纪念馆与博物馆",
    highlight: "沉浸式历史叙事",
    suitedFor: "历史/纪实",
    duration: "2 小时",
    mustSee: ["Historical Exhibition", "Survivor Stairs"],
    ticket: { label: "购票", url: "https://www.911memorial.org" },
  },
  {
    name: "Intrepid 海空博物馆",
    highlight: "航空母舰 + 航天飞机展",
    suitedFor: "军迷 / 亲子",
    duration: "2-3 小时",
    mustSee: ["航天飞机 Enterprise", "Concorde"],
    ticket: { label: "购票", url: "https://www.intrepidmuseum.org" },
  },
  {
    name: "惠特尼美国艺术博物馆",
    highlight: "聚焦 20/21 世纪美国艺术，俯瞰 High Line",
    suitedFor: "当代艺术 / 设计",
    duration: "1.5-2 小时",
    mustSee: ["美国当代艺术双年展", "顶层露台"],
    ticket: { label: "预约", url: "https://whitney.org" },
  },
];
