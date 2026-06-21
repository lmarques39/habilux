import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Eyebrow } from "@/components/atoms/Typography";
import StatBlock from "@/components/molecules/StatBlock";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Blue top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <Eyebrow className="mb-6 text-blue-300">Viana do Castelo · AMI 11192</Eyebrow>

          <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6">
            O seu imóvel,{" "}
            <span className="text-blue-400">a nossa</span>{" "}
            dedicação.
          </h1>

          <p className="text-stone-400 text-lg sm:text-xl leading-relaxed max-w-xl mb-10">
            Mais de 25 anos a acompanhar famílias e investidores em Viana do
            Castelo. Mediação imobiliária, promoção bancária e certificados
            energéticos com rigor e proximidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/propriedades"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-blue-600 transition-colors duration-200"
            >
              Ver Propriedades
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contactos"
              className="inline-flex items-center justify-center gap-2 border border-stone-600 text-stone-300 px-8 py-4 text-sm font-semibold tracking-wide hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
            >
              Fale Connosco
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-10 border-t border-navy-800 grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-xl">
          {[
            { value: "25+", label: "Anos de experiência" },
            { value: "AMI", label: "Licença 11192" },
            { value: "3", label: "Serviços especializados" },
          ].map(({ value, label }) => (
            <StatBlock key={label} value={value} label={label} inverted />
          ))}
        </div>
      </div>

      {/* Decorative building icon */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
        <Building2 size={500} strokeWidth={0.5} className="text-white" />
      </div>
    </section>
  );
}
