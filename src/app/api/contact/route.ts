import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_EMAIL ?? "geral@habilux.pt";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Habilux <onboarding@resend.dev>";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Email service not configured." },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = await request.json().catch(() => null);
  if (!body) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, subject, message, website } = body;

  // Honeypot — bots fill this hidden field
  if (website) {
    return Response.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return Response.json({ error: "Campos obrigatórios em falta." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Email inválido." }, { status: 400 });
  }

  if (name.length > 120 || email.length > 254 || message.length > 2000) {
    return Response.json({ error: "Dados demasiado longos." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Habilux] ${subject ?? "Contacto do site"} — ${name}`,
    text: [
      `Nome: ${name}`,
      `Email: ${email}`,
      phone ? `Telefone: ${phone}` : null,
      `Assunto: ${subject ?? "Não especificado"}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
