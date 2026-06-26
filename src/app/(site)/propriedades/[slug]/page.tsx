import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, BedDouble, Square, Phone, ArrowLeft } from "lucide-react";
import { Eyebrow, Heading, Text } from "@/components/atoms/Typography";
import Badge from "@/components/atoms/Badge";
import PropertyGallery from "@/components/organisms/PropertyGallery";
import { client } from "@/sanity/lib/client";
import { propertyBySlugQuery, allPropertySlugsQuery } from "@/sanity/lib/queries";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await client.fetch(allPropertySlugsQuery);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = await client.fetch(propertyBySlugQuery, { slug });
  if (!property) return {};

  const priceText = property.priceOnRequest
    ? "Preço sob consulta"
    : new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(property.price ?? 0);

  return {
    title: `${property.title} — Habilux`,
    description: `${property.type} em ${property.location}. ${priceText}. Habilux — Investimentos Imobiliários, Viana do Castelo.`,
  };
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = await client.fetch(propertyBySlugQuery, { slug });
  if (!property) notFound();

  const { title, location, price, priceOnRequest, type, bedrooms, area, images, description } = property;

  return (
    <>
      {/* Page header */}
      <section className="relative bg-navy-900 pt-20 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-10">
          <Link
            href="/propriedades"
            className="inline-flex items-center gap-2 text-stone-400 hover:text-blue-400 text-sm font-medium transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={14} />
            Voltar às propriedades
          </Link>

          <div className="flex flex-wrap items-start gap-4 mb-4">
            <Badge variant="primary">{type}</Badge>
          </div>

          <Heading as="h1" size="4xl" className="text-white mb-4 max-w-3xl">
            {title}
          </Heading>

          <div className="flex items-center gap-1.5 text-stone-400 text-base mb-6">
            <MapPin size={15} className="shrink-0 text-blue-400" />
            <span>{location}</span>
          </div>

          <p className="font-bold text-3xl sm:text-4xl text-blue-400">
            {priceOnRequest ? "Preço sob consulta" : price ? formatPrice(price) : null}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Images + details */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <PropertyGallery images={images ?? []} title={title} />

              {/* Property details */}
              {(bedrooms || area) && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-b border-stone-100 py-8">
                  {bedrooms && (
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-stone-400">
                        <BedDouble size={16} />
                        <span className="text-xs font-semibold uppercase tracking-widest">
                          Quartos
                        </span>
                      </div>
                      <span className="text-2xl font-bold text-stone-900">
                        {bedrooms}
                      </span>
                    </div>
                  )}
                  {area && (
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-stone-400">
                        <Square size={16} />
                        <span className="text-xs font-semibold uppercase tracking-widest">
                          Área
                        </span>
                      </div>
                      <span className="text-2xl font-bold text-stone-900">
                        {area} m²
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                      Tipo
                    </span>
                    <span className="text-2xl font-bold text-stone-900">
                      {type}
                    </span>
                  </div>
                </div>
              )}

              {/* Description */}
              {description && (
                <div>
                  <Eyebrow className="mb-4">Descrição</Eyebrow>
                  <Text muted className="whitespace-pre-line">
                    {description}
                  </Text>
                </div>
              )}
            </div>

            {/* Contact sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-stone-50 p-8 sticky top-28">
                <Eyebrow className="mb-4">Interessado?</Eyebrow>
                <Heading as="h2" size="xl" className="text-stone-900 mb-2">
                  Fale connosco
                </Heading>
                <Text muted size="sm" className="mb-6">
                  A nossa equipa responde rapidamente e trata de tudo por si.
                </Text>

                <a
                  href="tel:+351258338047"
                  className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-4 transition-colors duration-200 mb-4 w-full"
                >
                  <Phone size={18} />
                  258 338 047
                </a>

                <Link
                  href="/contactos"
                  className="flex items-center justify-center border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white font-semibold px-6 py-4 transition-colors duration-200 w-full text-sm"
                >
                  Enviar mensagem
                </Link>

                <div className="mt-8 pt-8 border-t border-stone-200">
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Habilux — Mediação Imobiliária
                    <br />
                    Licença AMI n.º 11192
                    <br />
                    Viana do Castelo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
