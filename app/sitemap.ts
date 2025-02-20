import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://elitebrothersfirenext.vercel.app/https://",
      lastModified: new Date(),
    },
    {
      url: "https://elitebrothersfirenext.vercel.app/fireextinguishers",
      lastModified: new Date(),
    },
    {
      url: "https://elitebrothersfirenext.vercel.app/emergencyexitlighting",
      lastModified: new Date(),
    },
    {
      url: "https://elitebrothersfirenext.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://elitebrothersfirenext.vercel.app/faq",
      lastModified: new Date(),
    },
    {
      url: "https://elitebrothersfirenext.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}
