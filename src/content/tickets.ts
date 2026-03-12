export type TicketLink = {
  category: "景点" | "博物馆" | "百老汇";
  name: string;
  official: string;
  partners: { label: string; url: string }[];
};

export const tickets: TicketLink[] = [
  {
    category: "景点",
    name: "自由女神 & 埃利斯岛",
    official: "https://www.statuecitycruises.com",
    partners: [
      { label: "CityPASS", url: "https://www.citypass.com/new-york" },
      { label: "Klook", url: "https://www.klook.com/zh-CN/activity/" },
    ],
  },
  {
    category: "景点",
    name: "帝国大厦",
    official: "https://www.esbnyc.com",
    partners: [
      { label: "GetYourGuide", url: "https://www.getyourguide.com" },
    ],
  },
  {
    category: "博物馆",
    name: "大都会博物馆",
    official: "https://www.metmuseum.org",
    partners: [{ label: "Klook", url: "https://www.klook.com" }],
  },
  {
    category: "博物馆",
    name: "MoMA",
    official: "https://www.moma.org",
    partners: [{ label: "GetYourGuide", url: "https://www.getyourguide.com" }],
  },
  {
    category: "百老汇",
    name: "The Lion King",
    official: "https://www.lionking.com/tickets",
    partners: [{ label: "TodayTix", url: "https://www.todaytix.com" }],
  },
  {
    category: "百老汇",
    name: "Wicked",
    official: "https://wickedthemusical.com",
    partners: [{ label: "Ticketmaster", url: "https://www.ticketmaster.com" }],
  },
];
