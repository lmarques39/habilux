import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Eyebrow, Heading, Text } from "@/components/atoms/Typography";
import ContactForm from "@/components/organisms/ContactForm";

export const metadata: Metadata = {
  title: "Contactos — Habilux",
  description:
    "Entre em contacto com a Habilux em Viana do Castelo. Telefone, email e localização da nossa agência.",
};

const schedule = [
  { day: "Segunda — Sexta", hours: "10:00 — 18:00" },
  { day: "Sábado", hours: "10:00 — 13:00" },
  { day: "Domingo", hours: "Encerrado" },
];

export default function ContactsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-navy-900 pt-20 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-12">
          <Eyebrow className="mb-4">Fale connosco</Eyebrow>
          <Heading as="h1" size="5xl" className="text-white mb-4 max-w-xl">
            Contactos
          </Heading>
          <a
            href="tel:+351258338047"
            className="text-4xl sm:text-5xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200 block mt-2"
          >
            258 338 047
          </a>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

            {/* Contact form */}
            <div className="lg:col-span-3">
              <Eyebrow className="mb-4">Formulário de contacto</Eyebrow>
              <Heading as="h2" size="2xl" className="text-stone-900 mb-8">
                Envie-nos uma mensagem
              </Heading>
              <Suspense fallback={<div className="h-64 bg-stone-50 animate-pulse" />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-500 mb-3">
                  <MapPin size={13} />
                  Morada
                </p>
                <Text className="text-stone-900 font-medium">
                  Rua do Sol, n.º 210, r/c esquerdo, Amorosa, Chafé
                </Text>
                <Text muted>4935-580 Viana do Castelo</Text>
                <a
                  href="https://maps.google.com/?q=Rua+do+Sol+210+Amorosa+Chaf%C3%A9+Viana+do+Castelo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs font-semibold text-blue-500 hover:text-blue-600 underline underline-offset-4 transition-colors duration-200"
                >
                  Ver no mapa →
                </a>
              </div>

              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-500 mb-3">
                  <Phone size={13} />
                  Telefone
                </p>
                <a
                  href="tel:+351258338047"
                  className="flex items-center gap-3 text-stone-900 font-bold text-xl hover:text-blue-500 transition-colors duration-200"
                >
                  258 338 047
                  <span className="text-xs font-normal bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Linha principal
                  </span>
                </a>
              </div>

              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-500 mb-3">
                  <Mail size={13} />
                  Email
                </p>
                <a
                  href="mailto:antoniorc@sapo.pt"
                  className="text-stone-900 font-medium hover:text-blue-500 transition-colors duration-200"
                >
                  antoniorc@sapo.pt
                </a>
              </div>

              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-500 mb-3">
                  <Clock size={13} />
                  Horário
                </p>
                <div className="flex flex-col gap-2">
                  {schedule.map(({ day, hours }) => (
                    <div key={day} className="flex gap-6">
                      <span className="text-sm text-stone-500 w-40 shrink-0">{day}</span>
                      <span className="text-sm text-stone-900 font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-stone-400 uppercase tracking-widest border-t border-stone-100 pt-6">
                Licença AMI n.º 11192
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="h-[400px] ring-1 ring-stone-200">
        <iframe
          src="https://maps.google.com/maps?q=Rua+do+Sol+210+Amorosa+Chafe+Viana+do+Castelo&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Habilux — Viana do Castelo"
        />
      </div>
    </>
  );
}
