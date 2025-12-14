import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const secretarias = await prisma.secretaria.findMany({
      orderBy: { nome: "asc" },
      include: {
        _count: {
          select: {
            motorista: true,
            users: true,
            demandas: true,
            veiculos: true,
          },
        },
      },
    });

    return NextResponse.json({ secretarias });
  } catch (error) {
    console.error("Erro ao carregar secretarias:", error);
    return NextResponse.error();
  }
}
