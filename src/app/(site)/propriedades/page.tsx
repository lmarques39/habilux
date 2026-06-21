import { Suspense } from "react";
import type { Metadata } from "next";
import { Eyebrow, Heading } from "@/components/atoms/Typography";
import PropertiesClient from "@/components/organisms/PropertiesClient";
import { type Property } from "@/components/molecules/PropertyCard";
import { client } from "@/sanity/lib/client";
import { allPropertiesQuery } from "@/sanity/lib/queries";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Propriedades — Habilux",
  description:
    "Imóveis disponíveis para compra e arrendamento em Viana do Castelo. Apartamentos, moradias, espaços comerciais e terrenos.",
};

export default async function PropertiesPage() {
  const properties = await client.fetch<Property[]>(allPropertiesQuery);
  return (
    <>
      {/* Page header — server rendered */}
      <section className="relative bg-navy-900 pt-20 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-12">
          <Eyebrow className="mb-4">Imóveis disponíveis</Eyebrow>
          <Heading as="h1" size="5xl" className="text-white mb-4 max-w-2xl">
            Propriedades
          </Heading>
          <p className="text-blue-200 text-lg leading-relaxed max-w-xl">
            Encontre o imóvel certo em Viana do Castelo e região. Atualizado
            regularmente com as melhores oportunidades do mercado.
          </p>
        </div>
      </section>

      {/* Suspense required: useSearchParams inside a prerendered page needs a boundary */}
      <Suspense fallback={<div className="bg-white py-16 lg:py-24" />}>
        <PropertiesClient properties={properties} />
      </Suspense>
    </>
  );
}
