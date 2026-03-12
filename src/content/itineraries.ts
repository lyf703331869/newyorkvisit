export type Itinerary = {
  title: string;
  days: number;
  theme: string;
  highlight: string;
  plan: string[];
};

export const itineraries: Itinerary[] = [
  {
    title: "纽约 1 日经典速览",
    days: 1,
    theme: "第一次到访",
    highlight: "时代广场 → 洛克菲勒 → 中央公园 → 百老汇夜场",
    plan: [
      "上午：洛克菲勒中心观景，步行至第五大道",
      "中午：布莱恩公园附近轻食",
      "下午：中央公园南段 + MoMA",
      "晚上：百老汇夜场 / 夜游时代广场",
    ],
  },
  {
    title: "纽约 3 日自由行",
    days: 3,
    theme: "综合体验",
    highlight: "曼哈顿经典 + 自由女神 + 博物馆",
    plan: [
      "Day1：中城（帝国大厦、洛克菲勒、百老汇）",
      "Day2：下城（自由女神、9/11、世贸一号）",
      "Day3：上城（中央公园、大都会、上西区咖啡）",
    ],
  },
  {
    title: "5 日深度行程",
    days: 5,
    theme: "慢速探索",
    highlight: "加入布鲁克林、High Line、Chelsea Market",
    plan: [
      "Day1：中城核心",
      "Day2：下城金融区 + 自由女神",
      "Day3：布鲁克林大桥 + DUMBO + 威廉斯堡",
      "Day4：博物馆日（The Met / MoMA 二选一 + 购物）",
      "Day5：High Line + Chelsea Market + Hudson Yards",
    ],
  },
  {
    title: "亲子友好路线",
    days: 3,
    theme: "家庭",
    highlight: "自然历史博物馆 + 中央公园 + 百老汇 Lion King",
    plan: [
      "Day1：上西区（自然历史 + 中央公园动物园）",
      "Day2：下城轮渡日", 
      "Day3：户外 + Lion King 夜场",
    ],
  },
];
