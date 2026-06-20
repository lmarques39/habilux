import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { allPropertySlugsQuery } from "@/sanity/lib/queries";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://habilux.vercel.app";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await client.fetch(allPropertySlugsQuery);
  const propertyEntries: MetadataRoute.Sitemap = slugs.map((s: { slug: string }) => ({
    url: `${BASE_URL}/propriedades/${s.slug}`,
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
