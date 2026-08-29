import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://v0-kyuva.vercel.app/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://v0-kyuva.vercel.app/support",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://v0-kyuva.vercel.app/privacy",
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]
}
