"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import PropertyCard, { type Property, type PropertyType } from "@/components/molecules/PropertyCard";

const filters: { label: string; value: PropertyType | "Todos" }[] = [
  { label: "Todos", value: "Todos" },
  { label: "Apartamento", value: "Apartamento" },
  { label: "Moradia", value: "Moradia" },
  { label: "Comercial", value: "Comercial" },
  { label: "Terreno", value: "Terreno" },
];

export default function PropertiesClient({ properties }: { properties: Property[] }) {
  const [active, setActive] = useState<PropertyType | "Todos">("Todos");

  const filtered =
    active === "Todos"
      ? properties
      : properties.filter((p) => p.type === active);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <SlidersHorizontal size={15} className="text-stone-400 shrink-0" />
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest border transition-colors duration-200 cursor-pointer ${
                active === value
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-600 border-stone-200 hover:border-stone-900 hover:text-stone-900"
              }`}
            >
              {label}
            </button>
          ))}
          <span className="ml-auto text-sm text-stone-400">
            {filtered.length} {filtered.length === 1 ? "imóvel" : "imóveis"}
          </span>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-stone-400 text-lg mb-2">
              Nenhum imóvel encontrado.
            </p>
            <button
              onClick={() => setActive("Todos")}
              className="text-sm text-gold-500 font-semibold hover:text-gold-600 underline underline-offset-4"
            >
              Ver todos os imóveis
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
