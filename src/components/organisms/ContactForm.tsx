"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle, AlertCircle, Loader, Home } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const subjects = [
  "Informação sobre imóvel",
  "Avaliação de imóvel",
  "Arrendamento",
  "Crédito habitação",
  "Outro",
];

const inputClass =
  "w-full border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-blue-500 focus:outline-none transition-colors duration-200";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const searchParams = useSearchParams();
  const imovel = searchParams.get("imovel") ?? "";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? "Erro inesperado. Tente novamente.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Sem ligação. Verifique a sua internet e tente novamente.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <CheckCircle size={40} className="text-blue-500" strokeWidth={1.5} />
        <h2 className="font-bold text-2xl text-stone-900">
          Mensagem enviada
        </h2>
        <p className="text-stone-500 text-base leading-relaxed max-w-md">
          Obrigado pelo contacto. Entraremos em contacto consigo o mais brevemente
          possível.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-blue-500 hover:text-blue-600 underline underline-offset-4 transition-colors duration-200"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Property context chip */}
      {imovel && (
        <div className="flex items-center gap-2.5 bg-blue-50 border border-blue-100 px-4 py-3 text-sm text-blue-700">
          <Home size={14} className="shrink-0" />
          <span>Sobre o imóvel: <strong>{imovel}</strong></span>
        </div>
      )}

      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
            Nome <span className="text-blue-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="O seu nome"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
            Email <span className="text-blue-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="email@exemplo.pt"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="9xx xxx xxx"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
            Assunto
          </label>
          <select
            id="subject"
            name="subject"
            className={inputClass}
            defaultValue={imovel ? "Informação sobre imóvel" : subjects[0]}
          >
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
          Mensagem <span className="text-blue-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Escreva a sua mensagem..."
          className={`${inputClass} resize-none`}
          defaultValue={imovel ? `Olá, tenho interesse no imóvel "${imovel}". Gostaria de receber mais informações.` : ""}
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2.5 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold text-sm px-8 py-4 transition-colors duration-200 self-start"
      >
        {status === "loading" ? (
          <>
            <Loader size={16} className="animate-spin" />
            A enviar...
          </>
        ) : (
          <>
            <Send size={16} />
            Enviar mensagem
          </>
        )}
      </button>
    </form>
  );
}
