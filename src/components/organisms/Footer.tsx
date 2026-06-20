import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/propriedades", label: "Propriedades" },
  { href: "/contactos", label: "Contactos" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="leading-none">
              <p className="font-serif text-2xl font-bold text-white tracking-tight">
                HABILUX
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400 mt-1">
                Investimentos Imobiliários
              </p>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Mediação imobiliária com rigor e proximidade em Viana do Castelo.
              Mais de 25 anos ao serviço dos nossos clientes.
            </p>
            <p className="text-xs text-stone-600 uppercase tracking-widest">
              AMI n.º 11192
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500 mb-1">
              Menu
            </p>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm hover:text-gold-400 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500 mb-1">
              Contacto
            </p>
            <a
              href="tel:+351258338047"
              className="flex items-center gap-3 text-sm hover:text-gold-400 transition-colors duration-200"
            >
              <Phone size={14} className="text-gold-500 shrink-0" />
              258 338 047
            </a>
            <a
              href="mailto:geral@habilux.pt"
              className="flex items-center gap-3 text-sm hover:text-gold-400 transition-colors duration-200"
            >
              <Mail size={14} className="text-gold-500 shrink-0" />
              geral@habilux.pt
            </a>
            <div className="flex items-start gap-3 text-sm">
              <MapPin size={14} className="text-gold-500 shrink-0 mt-0.5" />
              <span>
                Rua do Sol, Lote 211 R/C Dto
                <br />
                4935-580 Viana do Castelo
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between gap-3 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} Habilux — Todos os direitos reservados.</p>
          <p>Desenvolvido por Luís Marques</p>
        </div>
      </div>
    </footer>
  );
}
