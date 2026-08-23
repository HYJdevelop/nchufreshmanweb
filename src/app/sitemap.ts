import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://nchufreshmen.hyjdevelop.com/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://nchufreshmen.hyjdevelop.com/calendar/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nchufreshmen.hyjdevelop.com/line/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nchufreshmen.hyjdevelop.com/food/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nchufreshmen.hyjdevelop.com/clubs/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
