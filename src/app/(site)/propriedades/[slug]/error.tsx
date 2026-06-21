"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Heading, Text } from "@/components/atoms/Typography";

export default function PropertyError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <Heading as="h1" size="3xl" className="text-stone-900 mb-4">
          Não foi possível carregar esta propriedade
        </Heading>
        <Text muted className="mb-10 max-w-md mx-auto">
          Ocorreu um erro ao obter os dados. Verifique a sua ligação e tente novamente.
        </Text>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
          >
            Tentar novamente
          </button>
          <Link
            href="/propriedades"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wide border border-stone-200 text-stone-600 hover:border-stone-400 transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            Ver todas as propriedades
          </Link>
        </div>
      </div>
    </section>
  );
}
