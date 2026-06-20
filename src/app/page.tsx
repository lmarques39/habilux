import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/organisms/HeroSection";

export const metadata: Metadata = {
  title: "Habilux — Investimentos Imobiliários em Viana do Castelo",
  description:
    "Mediação imobiliária, promoção bancária e certificados energéticos em Viana do Castelo. Mais de 25 anos de experiência. AMI 11192.",
};
import ProofStrip from "@/components/organisms/ProofStrip";
import ServicesSection from "@/components/organisms/ServicesSection";
import FeaturedProperties from "@/components/organisms/FeaturedProperties";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProofStrip />
      <ServicesSection />
      <FeaturedProperties />

      {/* Closing CTA */}
      <section className="bg-gold-400 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-700 mb-4">
            Pronto para começar?
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
            Fale connosco hoje.
          </h2>
          <p className="text-stone-700 text-lg max-w-xl mx-auto mb-10">
            A nossa equipa está disponível para o acompanhar em cada etapa do
            processo, seja na compra, venda ou arrendamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactos"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-stone-800 transition-colors duration-200"
            >
              Contactar agora
            </Link>
            <a
              href="tel:+351258338047"
              className="inline-flex items-center justify-center gap-2 border border-stone-900 text-stone-900 px-8 py-4 text-sm font-semibold tracking-wide hover:bg-stone-900 hover:text-white transition-colors duration-200"
            >
              258 338 047
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
