import type { Metadata } from "next";
import { Eyebrow, Heading, Text } from "@/components/atoms/Typography";
import PropriedadesClient from "@/components/organisms/PropriedadesClient";

export const metadata: Metadata = {
  title: "Propriedades — Habilux",
  description:
    "Imóveis disponíveis para compra e arrendamento em Viana do Castelo. Apartamentos, moradias, espaços comerciais e terrenos.",
};

export default function PropriedadesPage() {
  return (
    <>
      {/* Page header — server rendered */}
      <section className="relative bg-stone-900 pt-20 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
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
          <Text size="lg" className="text-stone-400 max-w-xl">
            Encontre o imóvel certo em Viana do Castelo e região. Atualizado
            regularmente com as melhores oportunidades do mercado.
          </Text>
        </div>
      </section>

      {/* Interactive listings — client component */}
      <PropriedadesClient />
    </>
  );
}
