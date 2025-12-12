import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const modelos = await prisma.veiculoModelo.findMany({
      orderBy: { modelo: "asc" },
    });

    return NextResponse.json({ modelos });
  } catch (error) {
    console.error("Erro ao carregar modelos:", error);
    return NextResponse.error();
  }
}
