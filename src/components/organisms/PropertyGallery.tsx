"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Square } from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  const close = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, prev, next]);

  const [heroImage, ...extraImages] = images;

  return (
    <>
      {/* Hero image */}
      <div
        className="relative aspect-[4/3] bg-stone-100 overflow-hidden cursor-zoom-in"
        onClick={() => heroImage && setLightboxIndex(0)}
      >
        {heroImage ? (
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-stone-100">
            <Square size={48} className="text-stone-300" strokeWidth={1} />
            <span className="text-stone-400 text-sm">Imagens disponíveis brevemente</span>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {extraImages.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {extraImages.map((src: string, i: number) => (
            <div
              key={i}
              className="relative aspect-square bg-stone-100 overflow-hidden cursor-zoom-in"
              onClick={() => setLightboxIndex(i + 1)}
            >
              <Image
                src={src}
                alt={`${title} — fotografia ${i + 2}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90"
          onClick={close}
        >
          {/* Image area — stopPropagation so clicking the image doesn't close */}
          <div
            className="absolute inset-x-14 sm:inset-x-20 inset-y-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex!]}
              alt={`${title} — fotografia ${lightboxIndex! + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Counter */}
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums select-none pointer-events-none">
            {lightboxIndex! + 1} / {images.length}
          </span>

          {/* Close */}
          <button
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors duration-200"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Fechar"
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white transition-colors duration-200"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Anterior"
            >
              <ChevronLeft size={38} strokeWidth={1.5} />
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white transition-colors duration-200"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Seguinte"
            >
              <ChevronRight size={38} strokeWidth={1.5} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
