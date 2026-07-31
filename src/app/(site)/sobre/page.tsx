import type { Metadata } from "next";
import { Eyebrow, Heading, Text } from "@/components/atoms/Typography";
import ProofStrip from "@/components/organisms/ProofStrip";

export const metadata: Metadata = {
  title: "Sobre Nós — Habilux",
  description:
    "Conheça a Habilux — mais de 25 anos de experiência em mediação imobiliária em Viana do Castelo. Uma empresa de confiança ao serviço das famílias e investidores.",
};

const values = [
  {
    title: "Rigor",
    description:
      "Cada processo é tratado com máximo cuidado documental e legal, para que nada falhe na hora mais importante.",
  },
  {
    title: "Proximidade",
    description:
      "Acreditamos que comprar ou vender um imóvel é uma das decisões mais importantes da vida. Estamos sempre ao seu lado.",
  },
  {
    title: "Transparência",
    description:
      "Informação clara em cada etapa. Sem surpresas, sem letras pequenas. Só confiança.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
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
          <Eyebrow className="mb-4">A nossa história</Eyebrow>
          <Heading as="h1" size="5xl" className="text-white mb-4 max-w-2xl">
            Mais de 25 anos ao seu serviço
          </Heading>
          <p className="text-blue-200 text-lg leading-relaxed max-w-xl">
            Uma empresa fundada na confiança, construída na experiência e dedicada
            às pessoas de Viana do Castelo.
          </p>
        </div>
      </section>
      <ProofStrip />

      {/* Story */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <Eyebrow className="mb-4">Quem somos</Eyebrow>
              <Heading as="h2" size="3xl" className="text-stone-900 mb-6">
                Uma referência em Viana do Castelo
              </Heading>
              <div className="flex flex-col gap-4">
                <Text muted>
                  A Habilux nasceu da vontade de oferecer um serviço de mediação
                  imobiliária diferente — mais próximo, mais rigoroso e mais
                  transparente. Fundada por Carlos Miguel Ferreira Santos, a empresa
                  tem acompanhado famílias e investidores há mais de 25 anos.
                </Text>
                <Text muted>
                  Com licença AMI n.º 20458, atuamos na compra, venda e
                  arrendamento de imóveis em Viana do Castelo e região. Além da
                  mediação, apoiamos os nossos clientes na obtenção de crédito
                  habitação e na emissão de certificados energéticos.
                </Text>
                <Text muted>
                  O nosso compromisso é simples: acompanhar cada cliente do início
                  ao fim, com honestidade e dedicação total.
                </Text>
              </div>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-8">
              {values.map(({ title, description }) => (
                <div key={title} className="flex gap-5">
                  <div className="w-px bg-blue-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl text-stone-900 mb-2">
                      {title}
                    </h3>
                    <Text muted size="sm">
                      {description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white italic leading-snug">
            &ldquo;O nosso sucesso mede-se pela satisfação de quem confia em nós.&rdquo;
          </p>
          <p className="mt-6 text-blue-400 text-sm font-semibold uppercase tracking-widest">
            Carlos Miguel Ferreira Santos · Fundador
          </p>
        </div>
      </section>
    </>
  );
}
