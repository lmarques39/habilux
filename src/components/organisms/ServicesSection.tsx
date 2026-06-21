import Link from "next/link";
import { Home, Landmark, Zap, type LucideIcon } from "lucide-react";
import { Eyebrow, Heading, Text } from "@/components/atoms/Typography";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: "Mediação Imobiliária",
    description:
      "Acompanhamento personalizado na compra, venda e arrendamento de imóveis. Avaliação rigorosa, negociação e todo o processo documental tratado por nós.",
  },
  {
    icon: Landmark,
    title: "Promoção Bancária",
    description:
      "Apoio na obtenção de crédito habitação e produtos bancários. Analisamos as melhores propostas do mercado e orientamos em cada etapa do processo.",
  },
  {
    icon: Zap,
    title: "Certificados Energéticos",
    description:
      "Emissão de certificados energéticos obrigatórios para venda ou arrendamento. Processo rápido e eficiente com técnicos certificados.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-stone-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <Eyebrow className="mb-4">O que fazemos</Eyebrow>
          <Heading as="h2" size="4xl" className="text-stone-900 mb-4">
            Serviços especializados ao seu serviço
          </Heading>
          <Text muted size="lg">
            Uma equipa dedicada com mais de 25 anos de experiência no mercado
            imobiliário de Viana do Castelo.
          </Text>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col gap-5 bg-white p-8 border border-stone-200 hover:border-blue-500 transition-colors duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-blue-400 text-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-colors duration-300">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl text-stone-900">
                  {title}
                </h3>
                <Text muted size="sm">
                  {description}
                </Text>
              </div>
              <div className="mt-auto pt-4 border-t border-stone-100">
                <Link
                  href="/servicos"
                  className="text-xs font-semibold uppercase tracking-widest text-blue-500 group-hover:text-blue-600 transition-colors duration-200"
                >
                  Saber mais →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
