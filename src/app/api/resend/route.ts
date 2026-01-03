import { EmailTemplate } from "@/components/ModeloEmail";
import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY não está definida");
      return Response.json(
        { error: "API key não configurada" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { from, to, subject, ...dados } = body;

    if (!from || !to || !subject) {
      return Response.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      react: EmailTemplate(dados),
    });

    if (error) {
      console.error("Erro do Resend:", error);
      return Response.json(
        { error: error || "Erro ao enviar email" },
        { status: 500 }
      );
    }

    console.log("Email enviado com sucesso:", data);
    return Response.json(data);
  } catch (error) {
    console.error("Erro na rota:", error);
    return Response.json(
      {
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}
