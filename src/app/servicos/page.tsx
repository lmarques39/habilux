import type { Metadata } from "next";
import Link from "next/link";
import { Home, Landmark, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Eyebrow, Heading, Text } from "@/components/atoms/Typography";
import { type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços — Habilux",
  description:
    "Mediação imobiliária, promoção bancária e certificados energéticos em Viana do Castelo. Conheça todos os serviços da Habilux.",
};

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

const services: Service[] = [
  {
    icon: Home,
    title: "Mediação Imobiliária",
    description:
      "Compramos, vendemos e arrendamos imóveis com um acompanhamento personalizado do início ao fim. Com licença AMI n.º 11192, garantimos um processo seguro, legal e transparente.",
    points: [
      "Avaliação do imóvel sem compromisso",
      "Divulgação em portais imobiliários",
      "Acompanhamento em visitas",
      "Negociação e proposta de compra",
      "Apoio na escritura e processos notariais",
    ],
  },
  {
    icon: Landmark,
    title: "Promoção Bancária",
    description:
      "Ajudamos a encontrar as melhores condições de crédito habitação e outros produtos bancários. Analisamos propostas de vários bancos e orientamos na tomada de decisão.",
    points: [
      "Análise da capacidade financeira",
      "Simulações de crédito habitação",
      "Comparação de propostas bancárias",
      "Acompanhamento no processo de aprovação",
      "Apoio na gestão de seguros associados",
    ],
  },
  {
    icon: Zap,
    title: "Certificados Energéticos",
    description:
      "Emissão de certificados energéticos obrigatórios para qualquer imóvel colocado à venda ou arrendamento. Processo rápido com técnicos certificados pela ADENE.",
    points: [
      "Certificação por técnico credenciado ADENE",
      "Avaliação presencial do imóvel",
      "Emissão do certificado SCE",
      "Registo no sistema nacional",
      "Validade de 10 anos",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
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
          <Eyebrow className="mb-4">O que oferecemos</Eyebrow>
          <Heading as="h1" size="5xl" className="text-white mb-4 max-w-2xl">
            Serviços especializados
          </Heading>
          <Text size="lg" className="text-stone-400 max-w-xl">
            Três áreas de atuação para responder a todas as necessidades do
            mercado imobiliário com rigor e proximidade.
          </Text>
        </div>
      </section>

      {/* Services detail */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-24">
          {services.map(({ icon: Icon, title, description, points }, i) => (
            <div
              key={title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start ${
                i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold-300 text-gold-500">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <Heading as="h2" size="2xl" className="text-stone-900">
                    {title}
                  </Heading>
                </div>
                <Text muted className="mb-8">
                  {description}
                </Text>
                <Link
                  href="/contactos"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-600 transition-colors duration-200"
                >
                  Pedir informações
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Points */}
              <div className="bg-stone-50 p-8 border border-stone-200">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500 mb-6">
                  O que inclui
                </p>
                <ul className="flex flex-col gap-4">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="text-gold-500 shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <Text size="sm" muted>
                        {point}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-50 border-t border-stone-200 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <Heading as="h2" size="3xl" className="text-stone-900 mb-4">
            Tem alguma dúvida?
          </Heading>
          <Text muted size="lg" className="mb-8">
            Entre em contacto connosco e esclarecemos tudo sem compromisso.
          </Text>
          <Link
            href="/contactos"
            className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-stone-800 transition-colors duration-200"
          >
            Fale connosco
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
