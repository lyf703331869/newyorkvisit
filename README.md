# 纽约城市漫游 NYC Roam

面向中国游客的纽约自由行中文指南。包含热门景点、博物馆、百老汇、行程攻略、实用信息与门票入口，移动端优先、可扩展至 CMS / AI 行程推荐。

## 技术栈
- Next.js App Router + TypeScript
- Tailwind CSS（自定义 city-guide 视觉）
- 内容以 `src/content/*.ts` 本地数据为主，可平滑迁移至 CMS
- 组件化布局（Hero、SectionHeader、Card、TicketPanel、AIPlanner、MapHighlight 等）

## 快速开始
```bash
npm install
npm run dev
```
浏览器访问 `http://localhost:3000`。

## 目录导览
```
src/
├── app/                # 页面（首页 + 栏目）
│   ├── page.tsx        # 首页
│   ├── attractions/    # 景点集合页
│   ├── museums/
│   ├── broadway/
│   ├── itineraries/
│   ├── essentials/
│   ├── tickets/
│   └── guides/         # 编辑精选占位
├── components/         # UI 组件
└── content/            # 内容数据（后续可接 CMS）
```

## 自定义与扩展
1. **内容更新**：修改 `src/content/*.ts` 或接入 CMS API（可在 `app/api` 新增路由）。
2. **视觉与品牌**：调整 `src/app/globals.css` 与 `tailwind.config.ts` 中的色板/字体。
3. **门票/订阅扩展**：`TicketPanel` 目前列出官方/票务链接，可拓展为价格比较或联盟链接；Footer 预留订阅模块。
4. **部署**：推荐 Vercel（`vercel deploy`），也可输出静态资源（`npm run build && npm run start`）。

## 后续待办（可选）
- 接入地图组件与附近点推荐
- 行程导出（PDF/日历订阅）
- 百老汇/门票实时库存 API
- 多语言（默认简体，可扩 Eng）
- CMS（Contentful/Sanity 等）或 Markdown 文章系统

---
© 2026 NYC Roam. Crafted for Lucas by 小龙虾。
