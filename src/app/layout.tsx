import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "纽约城市漫游 NYC Roam｜纽约中文自由行指南",
  description: "面向中国游客的纽约旅游攻略：景点、博物馆、百老汇、行程规划与门票入口。",
  metadataBase: new URL("https://nyc-roam.vercel.app"),
  openGraph: {
    title: "纽约城市漫游 NYC Roam",
    description: "纽约中文自由行攻略、行程与门票指南",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
