import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HYJdevelop｜興新手冊",
    short_name: "興新手冊",
    description: "國立中興大學新生生活與行政 FAQ 指南",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    theme_color: "#0f172a",
    background_color: "#f5f6f1",
    lang: "zh-Hant",
    // PWA 圖標
    icons: [
      {
        src: "/hyj-nchuguide-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/hyj-nchuguide-mark.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    // 快速訪問快捷方式
    shortcuts: [
      {
        name: "常見問答",
        url: "/?search=all",
        icons: [],
      },
      {
        name: "選課相關",
        url: "/?board=courses",
        icons: [],
      },
      {
        name: "宿舍相關",
        url: "/?board=dorm",
        icons: [],
      },
    ],
    categories: ["education", "reference"],
  };
}
