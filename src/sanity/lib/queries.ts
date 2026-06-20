import { defineQuery } from "next-sanity";

export const allPropertiesQuery = defineQuery(`
  *[_type == "property"] | order(_createdAt desc) {
    "id": _id,
    title,
    "slug": slug.current,
    type,
    price,
    location,
    bedrooms,
    area,
    "image": images[0].asset->url,
    description,
  }
`);

export const featuredPropertiesQuery = defineQuery(`
  *[_type == "property"][0...3] | order(_createdAt desc) {
    "id": _id,
    title,
    "slug": slug.current,
    type,
    price,
    location,
    bedrooms,
    area,
    "image": images[0].asset->url,
  }
`);

export const propertyBySlugQuery = defineQuery(`
  *[_type == "property" && slug.current == $slug][0] {
    "id": _id,
    title,
    "slug": slug.current,
    type,
    price,
    location,
    bedrooms,
    area,
    "image": images[0].asset->url,
    "images": images[].asset->url,
    description,
  }
`);

export const allPropertySlugsQuery = defineQuery(`
  *[_type == "property"] { "slug": slug.current }
`);
