"use client";

import Link from "next/link";
import { Eyebrow, Heading, Text } from "@/components/atoms/Typography";

export default function SiteError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="relative flex-1 flex items-center justify-center bg-navy-900 py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative z-10 text-center px-6">
        <Eyebrow className="mb-6 text-blue-400">Erro inesperado</Eyebrow>
        <Heading as="h1" size="4xl" className="text-white mb-6">
          Algo correu mal
        </Heading>
        <Text size="lg" className="text-stone-300 mb-10 max-w-md mx-auto">
          Não foi possível carregar esta página. Por favor tente novamente.
        </Text>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
          >
            Tentar novamente
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide border border-stone-400 text-stone-200 hover:border-white hover:text-white transition-colors duration-200"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}
