import Link from "next/link";
import PageLayout from "@/components/templates/PageLayout";
import { Eyebrow, Heading, Text } from "@/components/atoms/Typography";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="relative flex-1 flex items-center justify-center bg-navy-900 py-32 overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 text-center px-6">
          <Eyebrow className="mb-6 text-blue-400">Erro 404</Eyebrow>
          <Heading as="h1" size="5xl" className="text-white mb-6">
            Página não encontrada
          </Heading>
          <Text size="lg" className="text-stone-300 mb-10 max-w-md mx-auto">
            A página que procura não existe ou foi movida.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
            >
              Voltar ao início
            </Link>
            <Link
              href="/propriedades"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide border border-stone-400 text-stone-200 hover:border-white hover:text-white transition-colors duration-200"
            >
              Ver propriedades
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
