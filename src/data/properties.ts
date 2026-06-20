import { type Property } from "@/components/molecules/PropertyCard";

// Real listings from António Jorge Carvalho Rocha (Imovirtual, June 2026)
// Replace image URLs when client provides photos
export const properties: Property[] = [
  {
    id: "1",
    title: "Apartamento T2 — Vista Rio",
    location: "Lomba, Gondomar, Porto",
    price: 215000,
    type: "Apartamento",
    bedrooms: 2,
    area: 75,
    image: null,
    slug: "apartamento-t2-lomba-gondomar",
  },
  {
    id: "2",
    title: "Moradia T2 com Paisagem Magnífica",
    location: "Perre, Viana do Castelo",
    price: 240000,
    type: "Moradia",
    bedrooms: 2,
    area: 88,
    image: null,
    slug: "moradia-t2-perre",
  },
  {
    id: "3",
    title: "Moradia T3 + T1 — Duplex",
    location: "Subportela, Viana do Castelo",
    price: 340000,
    type: "Moradia",
    bedrooms: 4,
    area: 208,
    image: null,
    slug: "moradia-t4-subportela",
  },
  {
    id: "4",
    title: "Moradia T2 para Restauro — Centro",
    location: "Alvarães, Viana do Castelo",
    price: 180000,
    type: "Moradia",
    bedrooms: 2,
    area: 120,
    image: null,
    slug: "moradia-t2-alvaraes",
  },
  {
    id: "5",
    title: "Casa para Restauro com Projeto",
    location: "Anha, Viana do Castelo",
    price: 95000,
    type: "Moradia",
    bedrooms: 2,
    area: 120,
    image: null,
    slug: "casa-restauro-anha",
  },
  {
    id: "6",
    title: "Ruínas com Lote Magnífico",
    location: "Chafé, Viana do Castelo",
    price: 96000,
    type: "Terreno",
    area: 180,
    image: null,
    slug: "ruinas-lote-chafe",
  },
];

export const featuredProperties = properties.slice(0, 3);
