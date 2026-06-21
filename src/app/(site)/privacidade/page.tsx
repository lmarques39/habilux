import type { Metadata } from "next";
import { Eyebrow, Heading, Text } from "@/components/atoms/Typography";

export const metadata: Metadata = {
  title: "Política de Privacidade — Habilux",
  description:
    "Política de privacidade e cookies da Habilux — Investimentos Imobiliários, Viana do Castelo.",
};

const sections = [
  {
    title: "Quem somos",
    content:
      "A Habilux — Investimentos Imobiliários é uma empresa de mediação imobiliária com sede em Rua do Sol, n.º 210, r/c esquerdo, Amorosa, Chafé, 4935-580 Viana do Castelo, titular da Licença AMI n.º 11192. Para efeitos do Regulamento Geral sobre a Proteção de Dados (RGPD), a Habilux é o responsável pelo tratamento dos seus dados pessoais.",
  },
  {
    title: "Dados que recolhemos",
    content:
      "Recolhemos os dados que nos fornece voluntariamente através do formulário de contacto: nome, endereço de e-mail, número de telefone (opcional) e a mensagem que nos envia. Não recolhemos dados pessoais por qualquer outro meio, nem tratamos dados sensíveis.",
  },
  {
    title: "Como usamos os seus dados",
    content:
      "Os dados fornecidos através do formulário de contacto são utilizados exclusivamente para responder à sua mensagem e prestar o serviço solicitado. Não partilhamos os seus dados com terceiros para fins comerciais, nem os utilizamos para envio de comunicações não solicitadas.",
  },
  {
    title: "Cookies",
    content:
      "Este website utiliza cookies técnicos necessários ao seu funcionamento. Os cookies permitem-nos melhorar a sua experiência de navegação. Pode aceitar ou recusar o uso de cookies através do aviso apresentado na sua primeira visita. A recusa de cookies não afeta o funcionamento do website.",
  },
  {
    title: "Conservação dos dados",
    content:
      "Os dados recolhidos através do formulário de contacto são conservados pelo período necessário à gestão do pedido e, no máximo, por um período de 12 meses, após o qual são eliminados.",
  },
  {
    title: "Os seus direitos",
    content:
      "Ao abrigo do RGPD, tem direito a aceder, retificar, apagar ou limitar o tratamento dos seus dados pessoais, bem como o direito à portabilidade e à oposição. Para exercer qualquer um destes direitos, contacte-nos através do e-mail antoniorc@sapo.pt ou por carta para a morada indicada acima. Tem ainda o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD) em cnpd.pt.",
  },
  {
    title: "Alterações a esta política",
    content:
      "A presente política pode ser atualizada periodicamente. A data da última revisão é indicada no rodapé desta página. Recomendamos que consulte esta página regularmente.",
  },
];

export default function PrivacyPage() {
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
          <Eyebrow className="mb-4">Legal</Eyebrow>
          <Heading as="h1" size="5xl" className="text-white max-w-xl">
            Política de Privacidade
          </Heading>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {sections.map(({ title, content }) => (
              <div key={title}>
                <Heading as="h2" size="xl" className="text-stone-900 mb-4">
                  {title}
                </Heading>
                <Text muted>{content}</Text>
              </div>
            ))}
          </div>

          <p className="mt-16 text-xs text-stone-400 border-t border-stone-100 pt-6">
            Última revisão: junho de 2026
          </p>
        </div>
      </section>
    </>
  );
}
