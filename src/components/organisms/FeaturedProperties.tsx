import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Heading, Text } from "@/components/atoms/Typography";
import PropertyCard, { type Property } from "@/components/molecules/PropertyCard";
import { client } from "@/sanity/lib/client";
import { featuredPropertiesQuery } from "@/sanity/lib/queries";

export default async function FeaturedProperties() {
  const featuredProperties = await client.fetch<Property[]>(featuredPropertiesQuery);
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <Eyebrow className="mb-4">Imóveis em destaque</Eyebrow>
            <Heading as="h2" size="4xl" className="text-stone-900">
              Propriedades disponíveis
            </Heading>
          </div>
          <Link
            href="/propriedades"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-600 transition-colors duration-200 shrink-0"
          >
            Ver todas as propriedades
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/propriedades"
            className="inline-flex items-center gap-2 border border-stone-900 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-200"
          >
            Ver todas as propriedades
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
