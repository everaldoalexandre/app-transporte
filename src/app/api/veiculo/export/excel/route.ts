import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { Prisma, PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const modelos = searchParams.getAll("modelo");
  const proprietario = searchParams.get("proprietarioVeiculo") || "";

  const where: Prisma.VeiculoWhereInput = {};

  if (modelos.length > 0) {
    where.modelo = {
      is: {
        modelo: {
          in: modelos,
          mode: "insensitive",
        },
      },
    };
  }

  if (proprietario && proprietario !== "") {
    where.proprietarioVeiculo = proprietario;
  }

  const veiculos = await prisma.veiculo.findMany({
    where,
    include: {
      modelo: true,
    },
  });

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Veículos");

  sheet.columns = [
    { header: "Modelo", key: "modelo", width: 15 },
    { header: "Proprietário", key: "proprietarioVeiculo", width: 15 },
    { header: "Placa", key: "placaVeiculo", width: 10 },
    { header: "Chassi", key: "chassiVeiculo", width: 25 },
    { header: "Renavam", key: "renavamVeiculo", width: 25 },
  ];

  veiculos.forEach((v) => {
    sheet.addRow({
      modelo: v.modelo?.modelo,
      proprietarioVeiculo: v.proprietarioVeiculo,
      placaVeiculo: v.placaVeiculo,
      chassiVeiculo: v.chassiVeiculo,
      renavamVeiculo: v.renavamVeiculo,
    });
  });

  const buffer = await workbook.xlsx.writeBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": "attachment; filename=veiculos.xlsx",
    },
  });
}
