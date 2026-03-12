export type Attraction = {
  name: string;
  tagline: string;
  tags: string[];
  stay: string;
  bestTime: string;
  highlights: string[];
  ticket?: { label: string; url: string };
  nearby: string[];
};

export const attractions: Attraction[] = [
  {
    name: "中央公园 Central Park",
    tagline: "纽约的绿色心脏，四季皆宜",
    tags: ["自然", "家庭友好", "免费"],
    stay: "建议 2-3 小时",
    bestTime: "清晨或日落",
    highlights: ["Bethesda Terrace", "湖区划船", "Museum Mile"],
    ticket: { label: "查看导览/活动票", url: "https://www.centralparknyc.org" },
    nearby: ["大都会博物馆", "第五大道", "上东区咖啡馆"],
  },
  {
    name: "自由女神 + 埃利斯岛",
    tagline: "第一次来纽约必打卡的历史象征",
    tags: ["地标", "轮渡", "需预约"],
    stay: "半日",
    bestTime: "上午 9:00 前",
    highlights: ["皇冠/基座门票", "音频讲解", "埃利斯岛移民博物馆"],
    ticket: { label: "预约官方轮渡", url: "https://www.statuecitycruises.com" },
    nearby: ["炮台公园", "华尔街", "Oculus"],
  },
  {
    name: "帝国大厦",
    tagline: "1930s 装饰艺术摩天楼，夜景首选",
    tags: ["夜景", "观景台", "CityPASS"],
    stay: "1.5 小时",
    bestTime: "日落后 1 小时",
    highlights: ["86 层露天观景台", "102 层封闭观景", "互动展"],
    ticket: { label: "购票及时间预约", url: "https://www.esbnyc.com" },
    nearby: ["韩国城", "布莱恩公园", "梅西百货"],
  },
  {
    name: "洛克菲勒中心 Top of the Rock",
    tagline: "俯瞰中央公园与帝国大厦的最佳视角",
    tags: ["观景台", "黄金时刻"],
    stay: "1 小时",
    bestTime: "日落 + 蓝调时刻",
    highlights: ["三层观景台", "The Beam 体验", "圣诞树 / 滑冰场"],
    ticket: { label: "预约观景时间", url: "https://www.topoftherocknyc.com" },
    nearby: ["五大道", "圣派翠克大教堂", "无线电城"],
  },
  {
    name: "布鲁克林大桥 + DUMBO",
    tagline: "一次拍到曼哈顿天际线与石板街",
    tags: ["步行", "摄影", "免费"],
    stay: "2 小时",
    bestTime: "早晨或日落",
    highlights: ["大桥步道", "曼哈顿大桥打卡位", "Brooklyn Bridge Park"],
    ticket: undefined,
    nearby: ["Jane's Carousel", "Time Out Market", "Brooklyn Heights"],
  },
  {
    name: "One World Observatory",
    tagline: "西半球最高观景台，俯瞰港口与自由女神",
    tags: ["纪念意义", "观景台"],
    stay: "1-1.5 小时",
    bestTime: "晴朗午后",
    highlights: ["Sky Pod 电梯", "City Pulse 互动讲解", "酒吧"],
    ticket: { label: "购票", url: "https://www.oneworldobservatory.com" },
    nearby: ["9/11 纪念馆", "布鲁克菲尔德广场", "华尔街"],
  },
];
