import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://habilux.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const propertyEntries: MetadataRoute.Sitemap = properties.map((p) => ({
    url: `${BASE_URL}/propriedades/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/propriedades`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contactos`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    ...propertyEntries,
  ];
}
