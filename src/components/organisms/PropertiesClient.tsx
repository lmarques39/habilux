"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import PropertyCard, { type Property, type PropertyType, type TransactionType } from "@/components/molecules/PropertyCard";

const typeFilters: { label: string; value: PropertyType | "Todos" }[] = [
  { label: "Todos", value: "Todos" },
  { label: "Apartamento", value: "Apartamento" },
  { label: "Moradia", value: "Moradia" },
  { label: "Comercial", value: "Comercial" },
  { label: "Terreno", value: "Terreno" },
];

const transactionFilters: { label: string; value: TransactionType | "Todos" }[] = [
  { label: "Comprar e Arrendar", value: "Todos" },
  { label: "Venda", value: "venda" },
  { label: "Arrendamento", value: "arrendamento" },
];

const PAGE_SIZE = 24;

export default function PropertiesClient({ properties }: { properties: Property[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeType = (searchParams.get("tipo") as PropertyType | null) ?? "Todos";
  const activeTransaction = (searchParams.get("negocio") as TransactionType | null) ?? "Todos";
  const page = Math.max(1, parseInt(searchParams.get("pagina") ?? "1"));

  function updateParams(updates: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(updates)) {
      if (!value) params.delete(key);
      else params.set(key, value);
    }
    const qs = params.toString();
    router.replace(pathname + (qs ? `?${qs}` : ""), { scroll: true });
  }

  function setFilter(key: string, value: string | null) {
    updateParams({ [key]: value === "Todos" ? null : value, pagina: null });
  }

  function setPage(n: number) {
    updateParams({ pagina: n === 1 ? null : String(n) });
  }

  const filtered = properties.filter((p) => {
    if (activeType !== "Todos" && p.type !== activeType) return false;
    if (activeTransaction !== "Todos" && p.transaction !== activeTransaction) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const currentPage = Math.min(page, Math.max(1, totalPages));
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filter bar */}
        <div className="mb-10 flex flex-col gap-3">
          {/* Transaction filter */}
          <div className="flex flex-wrap gap-2">
            {transactionFilters.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setFilter("negocio", value)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold uppercase tracking-widest border transition-colors duration-200 cursor-pointer ${
                  activeTransaction === value
                    ? "bg-navy-900 text-white border-navy-900"
                    : "bg-white text-stone-600 border-stone-200 hover:border-navy-900 hover:text-navy-900"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Type filter */}
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal size={14} className="text-stone-400" />
            {typeFilters.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setFilter("tipo", value)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold uppercase tracking-widest border transition-colors duration-200 cursor-pointer ${
                  activeType === value
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-stone-600 border-stone-200 hover:border-blue-500 hover:text-blue-500"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <p className="text-sm text-stone-400">
            {filtered.length} {filtered.length === 1 ? "imóvel" : "imóveis"}
          </p>
        </div>

        {/* Grid */}
        {paged.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paged.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-stone-400 text-lg mb-2">
              Nenhum imóvel encontrado.
            </p>
            <button
              onClick={() => updateParams({ tipo: null, negocio: null, pagina: null })}
              className="text-sm text-blue-500 font-semibold hover:text-blue-600 underline underline-offset-4"
            >
              Ver todos os imóveis
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={() => setPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border border-stone-200 text-stone-600 hover:border-blue-500 hover:text-blue-500 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={14} />
              Anterior
            </button>
            <span className="text-sm text-stone-500">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border border-stone-200 text-stone-600 hover:border-blue-500 hover:text-blue-500 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Seguinte
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
