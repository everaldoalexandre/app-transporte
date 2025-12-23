import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { formatDateTimeBR } from "@/lib/date";
import { Prisma, PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  const where: Prisma.DemandaWhereInput = {};

  if (from || to) {
    where.dataHoraIda = {
      ...(from && { gte: `${from}T00:00:00` }),
      ...(to && { lte: `${to}T23:59:59.999` }),
    };
  }

  const demandas = await prisma.demanda.findMany({
    where,
    include: {
      veiculo: true,
      motorista: true,
      secretaria: true,
    },
    orderBy: { dataHoraIda: "asc" },
  });

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Demandas");

  sheet.columns = [
    { header: "Categoria", key: "categoria", width: 15 },
    { header: "Status", key: "statusDemanda", width: 15 },
    { header: "Secretaria", key: "secretaria", width: 10 },
    { header: "E-mail", key: "emailSolicitante", width: 25 },
    { header: "Solicitante", key: "pessoaSolicitante", width: 25 },
    { header: "Contato", key: "contato", width: 15 },
    { header: "Origem", key: "origem", width: 30 },
    { header: "Destino", key: "destino", width: 30 },
    { header: "Detalhe", key: "demandaDetalhe", width: 35 },
    { header: "KM Rodado", key: "kmRodado", width: 12 },
    { header: "Lotação", key: "lotacao", width: 10 },
    { header: "Recurso", key: "recurso", width: 10 },
    { header: "Data/Hora Ida", key: "dataHoraIda", width: 20 },
    { header: "Data/Hora Volta", key: "dataHoraVolta", width: 20 },
    { header: "Veículo", key: "veiculo", width: 10 },
    { header: "Motorista", key: "motorista", width: 25 },
  ];

  demandas.forEach((d) => {
    sheet.addRow({
      categoria: d.categoria,
      statusDemanda: d.statusDemanda,
      emailSolicitante: d.emailSolicitante,
      contato: d.contato,
      origem: d.origem,
      destino: d.destino,
      pessoaSolicitante: d.pessoaSolicitante,
      demandaDetalhe: d.demandaDetalhe,
      kmRodado: d.kmRodado,
      lotacao: d.lotacao,
      recurso: d.recurso,
      dataHoraIda: formatDateTimeBR(d.dataHoraIda),
      dataHoraVolta: formatDateTimeBR(d.dataHoraVolta),
      veiculo: d.veiculo?.placaVeiculo ?? "-",
      motorista: d.motorista?.nome ?? "-",
      secretaria: d.secretaria?.nome ?? "-",
    });
  });

  const buffer = await workbook.xlsx.writeBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": "attachment; filename=demandas.xlsx",
    },
  });
}
