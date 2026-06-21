import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Square } from "lucide-react";
import Badge from "@/components/atoms/Badge";

export type PropertyType = "Apartamento" | "Moradia" | "Comercial" | "Terreno";

export type TransactionType = "venda" | "arrendamento";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  type: PropertyType;
  transaction?: TransactionType;
  bedrooms?: number;
  area?: number;
  image: string | null;
  slug: string;
}

interface PropertyCardProps {
  property: Property;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { title, location, price, type, bedrooms, area, image, slug } = property;

  return (
    <Link
      href={`/propriedades/${slug}`}
      className="group flex flex-col bg-white border border-stone-200 hover:border-blue-500 transition-colors duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-100">
            <Square size={40} className="text-stone-300" strokeWidth={1} />
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge variant="dark">{type}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        <h3 className="font-bold text-lg text-stone-900 leading-snug group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-1.5 text-stone-500 text-sm">
          <MapPin size={13} className="shrink-0" />
          <span className="truncate">{location}</span>
        </div>

        {/* Details row */}
        {(bedrooms || area) && (
          <div className="flex items-center gap-4 text-xs text-stone-400 border-t border-stone-100 pt-3">
            {bedrooms && (
              <span className="flex items-center gap-1.5">
                <BedDouble size={13} />
                {bedrooms} {bedrooms === 1 ? "quarto" : "quartos"}
              </span>
            )}
            {area && (
              <span className="flex items-center gap-1.5">
                <Square size={13} />
                {area} m²
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <p className="font-bold text-2xl text-blue-500 mt-1">
          {formatPrice(price)}
        </p>
      </div>
    </Link>
  );
}
