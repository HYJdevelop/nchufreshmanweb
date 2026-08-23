import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HYJdevelop｜興新手冊",
    short_name: "興新手冊",
    description: "國立中興大學新生生活與行政 FAQ 指南。",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f6f1",
    theme_color: "#0f172a",
    lang: "zh-Hant",
    icons: [
      {
        src: "/hyj-nchuguide-mark.svg",
        sizes: "96x96",
        type: "image/svg+xml",
      },
    ],
  };
}
