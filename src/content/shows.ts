export type Show = {
  title: string;
  genre: string;
  forWhom: string;
  summary: string;
  tips: string[];
  ticket: { label: string; url: string };
};

export const shows: Show[] = [
  {
    title: "The Lion King",
    genre: "家庭 / 经典",
    forWhom: "亲子 / 第一次看百老汇",
    summary: "迪士尼经典，绚烂服装与非洲鼓点，视觉震撼",
    tips: ["提前 2-3 个月订票", "视线最好选前中区"],
    ticket: { label: "购票", url: "https://www.broadway.com/shows/the-lion-king" },
  },
  {
    title: "Hamilton",
    genre: "历史 / 嘻哈",
    forWhom: "英文听力佳、想体验现代百老汇",
    summary: "讲述美国开国元勋汉密尔顿的故事，嘻哈+R&B 融合",
    tips: ["每日官方抽签(10美元票)", "推荐提前熟悉原声"],
    ticket: { label: "官方购票", url: "https://hamiltonmusical.com" },
  },
  {
    title: "Wicked",
    genre: "奇幻 / 女性向",
    forWhom: "朋友/情侣",
    summary: "来自《绿野仙踪》的前传故事，场景华丽",
    tips: ["可选择下午场", "部分日期有票价优惠"],
    ticket: { label: "购票", url: "https://wickedthemusical.com" },
  },
  {
    title: "Chicago",
    genre: "爵士 / 经典",
    forWhom: "想看经典编舞",
    summary: "以芝加哥 1920 年代为背景，爵士与黑白舞台美学",
    tips: ["常有折扣票", "乐池视角极佳"],
    ticket: { label: "购票", url: "https://chicagothemusical.com" },
  },
  {
    title: "MJ the Musical",
    genre: "音乐传奇",
    forWhom: "流行音乐爱好者",
    summary: "重现迈克尔·杰克逊巅峰演出",
    tips: ["建议提前 6 周购票", "音量较大，可备耳塞"],
    ticket: { label: "购票", url: "https://newyork.mjthemusical.com" },
  },
  {
    title: "Harry Potter and the Cursed Child",
    genre: "奇幻",
    forWhom: "哈迷 / 家庭",
    summary: "舞台魔法效果拉满的续作故事",
    tips: ["演出 3 小时 30 分", "建议提前到场"],
    ticket: { label: "购票", url: "https://www.harrypottertheplay.com" },
  },
];
