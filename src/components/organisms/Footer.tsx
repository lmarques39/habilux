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
    <footer className="bg-navy-900 text-blue-200 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-col items-center md:items-start gap-1 leading-none">
              <img src="/logo-white.png" alt="HABILUX" className="w-40 h-auto" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-blue-400">
                Investimentos Imobiliários
              </p>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Mediação imobiliária com rigor e proximidade em Viana do Castelo.
              Mais de 25 anos ao serviço dos nossos clientes.
            </p>
            <p className="text-xs text-blue-400 uppercase tracking-widest">
              AMI n.º 11192
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-300 mb-1">
              Menu
            </p>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm hover:text-blue-400 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-300 mb-1">
              Contacto
            </p>
            <a
              href="tel:+351258338047"
              className="flex items-center gap-3 text-sm hover:text-blue-400 transition-colors duration-200"
            >
              <Phone size={14} className="text-blue-400 shrink-0" />
              258 338 047
            </a>
            <a
              href="mailto:antoniorc@sapo.pt"
              className="flex items-center gap-3 text-sm hover:text-blue-400 transition-colors duration-200"
            >
              <Mail size={14} className="text-blue-400 shrink-0" />
              antoniorc@sapo.pt
            </a>
            <div className="flex items-start gap-3 text-sm">
              <MapPin size={14} className="text-blue-400 shrink-0 mt-0.5" />
              <span>
                Rua do Sol, n.º 210, r/c esquerdo
                <br />
                Amorosa, Chafé · 4935-580 Viana do Castelo
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col items-center gap-2 text-xs text-blue-300/60 sm:flex-row sm:justify-between">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <img src="/logo-white.png" alt="HABILUX" className="hidden sm:block h-3.5 w-auto opacity-50" />
            <p>© {new Date().getFullYear()} Habilux — Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center justify-center gap-4 sm:justify-end">
            <Link href="/privacidade" className="hover:text-blue-300 transition-colors duration-200">
              Política de Privacidade
            </Link>
            <p>Desenvolvido por Luís Marques</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
