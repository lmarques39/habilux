"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/propriedades", label: "Propriedades" },
  { href: "/contactos", label: "Contactos" },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-extrabold text-2xl tracking-tight text-navy-900">
              HABILUX
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-500">
              Investimentos Imobiliários
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(href, pathname)
                    ? "text-blue-500"
                    : "text-stone-600 hover:text-blue-500"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contactos"
            className="hidden md:inline-flex items-center gap-2 border border-stone-900 px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-200"
          >
            Fale Connosco
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-stone-700"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(href, pathname)
                    ? "text-blue-500"
                    : "text-stone-700 hover:text-blue-500"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contactos"
            onClick={() => setMobileOpen(false)}
            className="mt-6 flex items-center justify-center border border-stone-900 px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-200"
          >
            Fale Connosco
          </Link>
        </div>
      )}
    </header>
  );
}
