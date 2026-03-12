export type TicketCombo = {
  name: string;
  includes: string[];
  bestFor: string;
  estSave: string;
  providers: { label: string; url: string }[];
};

export const ticketCombos: TicketCombo[] = [
  {
    name: "CityPASS 经典 5 选 2",
    includes: ["帝国大厦", "Top of the Rock / 自由女神", "大都会", "美国自然历史"],
    bestFor: "第一次来、停留 3-5 天",
    estSave: "≈ 节省 100 美元",
    providers: [{ label: "CityPASS 官网", url: "https://www.citypass.com/new-york" }],
  },
  {
    name: "GoCity 无限通票",
    includes: ["80+ 景点", "巴士/游船", "百老汇体验"],
    bestFor: "想高密度刷景点或家庭同行",
    estSave: "取决于行程 (最多 50%)",
    providers: [{ label: "GoCity", url: "https://gocity.com/new-york" }],
  },
  {
    name: "百老汇折扣聚合",
    includes: ["TodayTix Lottery", "TKTS 当天折扣", "官方 Rush"] ,
    bestFor: "对座位灵活、想捡漏热门剧",
    estSave: "单张票可省 30-60%",
    providers: [
      { label: "TodayTix", url: "https://www.todaytix.com" },
      { label: "TKTS", url: "https://www.tdf.org" },
    ],
  },
];
