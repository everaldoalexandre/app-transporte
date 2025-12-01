import { PrismaClient, Prisma } from "@/generated/prisma";
import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

const userData = [
  
  {
    name: "Everaldo",
    email: "e@e.com",
    password: "teste123",
    acesso: {
      connect: { id: "1923d61c-6f4a-4b44-9651-98b802151313" }
    }
  },
  {
    name: "Everaldo",
    email: "e3@e.com",
    password: "teste123",
    acesso: {
      connect: { id: "1923d61c-6f4a-4b44-9651-98b802151313" }
    }
  },
];

const secretariasData = [
  { id: "b4279091-986c-4598-93ed-eb2385606394", nome: "SEDUC" },
  { id: "45ff928f-ee0c-4ff1-b582-90f9951e840e", nome: "SAD" },
  { id: "d1fcb980-9228-4d9d-9d96-eb3d15a45c2a", nome: "SMS" },
];

const veiculosData: Prisma.VeiculoCreateWithoutUserInput[] = [
  {
    placaVeiculo: "ABC-1234",
    chassiVeiculo: "9BWZZZ377VT004251",
    renavamVeiculo: "12345678901",
    proprietarioVeiculo: "Prefeitura Municipal",
    crlvVeiculo: "CRLV12345",
    secretaria: {
      connect: { id: "b4279091-986c-4598-93ed-eb2385606394" }
    }
  },
  {
    placaVeiculo: "XYZ-5678",
    chassiVeiculo: "8ADZZZ123VT987654",
    renavamVeiculo: "98765432100",
    proprietarioVeiculo: "Secretaria de Transportes",
    crlvVeiculo: "CRLV67890",
    secretaria: {
      connect: { id: "b4279091-986c-4598-93ed-eb2385606394" }
    }
  },
  {
    placaVeiculo: "DEF-4321",
    chassiVeiculo: "7GHZZZ555VT111222",
    renavamVeiculo: "11223344556",
    proprietarioVeiculo: "Secretaria de Obras",
    crlvVeiculo: "CRLV10003",
    secretaria: {
      connect: { id: "b4279091-986c-4598-93ed-eb2385606394" }
    }
  },
  {
    placaVeiculo: "GHI-8765",
    chassiVeiculo: "6JKZZZ666VT333444",
    renavamVeiculo: "22334455667",
    proprietarioVeiculo: "Secretaria de Saúde",
    crlvVeiculo: "CRLV10004",
    secretaria: {
      connect: { id: "b4279091-986c-4598-93ed-eb2385606394" }
    }
  },
  {
    placaVeiculo: "JKL-1122",
    chassiVeiculo: "5LMZZZ777VT555666",
    renavamVeiculo: "33445566778",
    proprietarioVeiculo: "Secretaria de Educação",
    crlvVeiculo: "CRLV10005",
    secretaria: {
      connect: { id: "b4279091-986c-4598-93ed-eb2385606394" }
    }
  },
  {
    placaVeiculo: "MNO-3344",
    chassiVeiculo: "4NOZZZ888VT777888",
    renavamVeiculo: "44556677889",
    proprietarioVeiculo: "Secretaria de Transportes",
    crlvVeiculo: "CRLV10006",
    secretaria: {
      connect: { id: "b4279091-986c-4598-93ed-eb2385606394" }
    }
  },
  {
    placaVeiculo: "PQR-5566",
    chassiVeiculo: "3PQZZZ999VT999000",
    renavamVeiculo: "55667788990",
    proprietarioVeiculo: "Secretaria de Obras",
    crlvVeiculo: "CRLV10007",
    secretaria: {
      connect: { id: "d1fcb980-9228-4d9d-9d96-eb3d15a45c2a" }
    }
  },
  {
    placaVeiculo: "STU-7788",
    chassiVeiculo: "2RSZZZ111VT222333",
    renavamVeiculo: "66778899001",
    proprietarioVeiculo: "Secretaria de Saúde",
    crlvVeiculo: "CRLV10008",
    secretaria: {
      connect: { id: "d1fcb980-9228-4d9d-9d96-eb3d15a45c2a" }
    }
  },
  {
    placaVeiculo: "VWX-9900",
    chassiVeiculo: "1TUZZZ222VT444555",
    renavamVeiculo: "77889900112",
    proprietarioVeiculo: "Secretaria de Educação",
    crlvVeiculo: "CRLV10009",
    secretaria: {
      connect: { id: "d1fcb980-9228-4d9d-9d96-eb3d15a45c2a" }
    }
  },
  {
    placaVeiculo: "YZA-1111",
    chassiVeiculo: "9VWZZZ333VT666777",
    renavamVeiculo: "88990011223",
    proprietarioVeiculo: "Secretaria de Transportes",
    crlvVeiculo: "CRLV10010",
    secretaria: {
      connect: { id: "d1fcb980-9228-4d9d-9d96-eb3d15a45c2a" }
    }
  },
  {
    placaVeiculo: "BCD-2222",
    chassiVeiculo: "8XYZZZ444VT888999",
    renavamVeiculo: "99001122334",
    proprietarioVeiculo: "Secretaria de Obras",
    crlvVeiculo: "CRLV10011",
    secretaria: {
      connect: { id: "d1fcb980-9228-4d9d-9d96-eb3d15a45c2a" }
    }
  },
  {
    placaVeiculo: "EFG-3333",
    chassiVeiculo: "7YZAZZ555VT000111",
    renavamVeiculo: "10111213141",
    proprietarioVeiculo: "Secretaria de Saúde",
    crlvVeiculo: "CRLV10012",
    secretaria: {
      connect: { id: "d1fcb980-9228-4d9d-9d96-eb3d15a45c2a" }
    }
  },
  {
    placaVeiculo: "HIJ-4444",
    chassiVeiculo: "6BCZZZ666VT222333",
    renavamVeiculo: "12131415161",
    proprietarioVeiculo: "Secretaria de Educação",
    crlvVeiculo: "CRLV10013",
    secretaria: {
      connect: { id: "d1fcb980-9228-4d9d-9d96-eb3d15a45c2a" }
    }
  },
  {
    placaVeiculo: "KLM-5555",
    chassiVeiculo: "5CDZZZ777VT444555",
    renavamVeiculo: "13141516171",
    proprietarioVeiculo: "Secretaria de Transportes",
    crlvVeiculo: "CRLV10014",
    secretaria: {
      connect: { id: "d1fcb980-9228-4d9d-9d96-eb3d15a45c2a" }
    }
  },
  {
    placaVeiculo: "NOP-6666",
    chassiVeiculo: "4DEZZZ888VT666777",
    renavamVeiculo: "14151617181",
    proprietarioVeiculo: "Secretaria de Obras",
    crlvVeiculo: "CRLV10015",
    secretaria: {
      connect: { id: "d1fcb980-9228-4d9d-9d96-eb3d15a45c2a" }
    }
  },
  {
    placaVeiculo: "QRS-7777",
    chassiVeiculo: "3EFZZZ999VT888999",
    renavamVeiculo: "15161718191",
    proprietarioVeiculo: "Secretaria de Saúde",
    crlvVeiculo: "CRLV10016",
    secretaria: {
      connect: { id: "d1fcb980-9228-4d9d-9d96-eb3d15a45c2a" }
    }
  },
  {
    placaVeiculo: "TUV-8888",
    chassiVeiculo: "2FGZZZ111VT000111",
    renavamVeiculo: "16171819202",
    proprietarioVeiculo: "Secretaria de Educação",
    crlvVeiculo: "CRLV10017",
    secretaria: {
      connect: { id: "45ff928f-ee0c-4ff1-b582-90f9951e840e" }
    }
  },
  {
    placaVeiculo: "WXY-9999",
    chassiVeiculo: "1GHZZZ222VT222333",
    renavamVeiculo: "17181920212",
    proprietarioVeiculo: "Secretaria de Transportes",
    crlvVeiculo: "CRLV10018",
    secretaria: {
      connect: { id: "45ff928f-ee0c-4ff1-b582-90f9951e840e" }
    }
  },
  {
    placaVeiculo: "ZAB-0001",
    chassiVeiculo: "9IJZZZ333VT444555",
    renavamVeiculo: "18192021222",
    proprietarioVeiculo: "Secretaria de Obras",
    crlvVeiculo: "CRLV10019",
    secretaria: {
      connect: { id: "45ff928f-ee0c-4ff1-b582-90f9951e840e" }
    }
  },
  {
    placaVeiculo: "CDE-0002",
    chassiVeiculo: "8KLZZZ444VT666777",
    renavamVeiculo: "19202122232",
    proprietarioVeiculo: "Secretaria de Saúde",
    crlvVeiculo: "CRLV10020",
    secretaria: {
      connect: { id: "45ff928f-ee0c-4ff1-b582-90f9951e840e" }
    }
  }
];

const demandasData: Prisma.DemandaCreateWithoutUserInput[] = [
  {
    emailSolicitante: "usuario1@teste.com",
    demandaDetalhe: "Viagem a Recife",
    pessoaSolicitante: "João da Silva",
    lotacao: '30',
    secretariaSolicitante: "SEDUC",
    destino: "Recife",
    origem: "Caruaru",
    contato: "81999990000",
    dataHoraIda: "20-11-2025",
    dataHoraVolta: "25-11-2025",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario2@teste.com",
    demandaDetalhe: "Entrega de documentos",
    pessoaSolicitante: "Maria Oliveira",
    lotacao: '30',
    secretariaSolicitante: "Saúde",
    destino: "Olinda",
    origem: "Recife",
    contato: "81988887777",
    dataHoraIda: "20-11-2025",
    dataHoraVolta: "25-11-2025",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario1gcg@teste.com",
    demandaDetalhe: "Reunião administrativa",
    pessoaSolicitante: "João Silva",
    lotacao: '30',
    secretariaSolicitante: "Educação",
    destino: "Recife",
    origem: "Caruaru",
    contato: "81999990001",
    dataHoraIda: "2025-11-10T08:00:00",
    dataHoraVolta: "2025-11-10T18:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario2uh@teste.com",
    demandaDetalhe: "Entrega de documentos",
    pessoaSolicitante: "Maria Oliveira",
    lotacao: '30',
    secretariaSolicitante: "Saúde",
    destino: "Olinda",
    origem: "Recife",
    contato: "81988887777",
    dataHoraIda: "2025-11-20T08:00:00",
    dataHoraVolta: "2025-11-25T18:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario3@teste.com",
    demandaDetalhe: "Inspeção em escola municipal",
    pessoaSolicitante: "Carlos Andrade",
    lotacao: '30',
    secretariaSolicitante: "Educação",
    destino: "Garanhuns",
    origem: "Recife",
    contato: "81999993333",
    dataHoraIda: "2025-11-12T07:00:00",
    dataHoraVolta: "2025-11-12T17:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario4@teste.com",
    demandaDetalhe: "Transporte de equipe técnica",
    pessoaSolicitante: "Fernanda Costa",
    lotacao: '30',
    secretariaSolicitante: "Infraestrutura",
    destino: "Petrolina",
    origem: "Recife",
    contato: "81988885555",
    dataHoraIda: "2025-11-18T06:00:00",
    dataHoraVolta: "2025-11-20T20:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario5@teste.com",
    demandaDetalhe: "Visita a unidade hospitalar",
    pessoaSolicitante: "Roberto Lima",
    lotacao: '30',
    secretariaSolicitante: "Saúde",
    destino: "Caruaru",
    origem: "Recife",
    contato: "81988884444",
    dataHoraIda: "2025-11-11T09:00:00",
    dataHoraVolta: "2025-11-11T17:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario6@teste.com",
    demandaDetalhe: "Participação em seminário",
    pessoaSolicitante: "Juliana Souza",
    lotacao: '30',
    secretariaSolicitante: "Educação",
    destino: "Gravatá",
    origem: "Recife",
    contato: "81977776666",
    dataHoraIda: "2025-11-14T07:00:00",
    dataHoraVolta: "2025-11-15T18:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario7@teste.com",
    demandaDetalhe: "Coleta de materiais",
    pessoaSolicitante: "Pedro Martins",
    lotacao: '30',
    secretariaSolicitante: "Obras",
    destino: "Paulista",
    origem: "Recife",
    contato: "81966665555",
    dataHoraIda: "2025-11-17T09:00:00",
    dataHoraVolta: "2025-11-17T17:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario8@teste.com",
    demandaDetalhe: "Entrega de ofícios",
    pessoaSolicitante: "Larissa Ramos",
    lotacao: '30',
    secretariaSolicitante: "Administração",
    destino: "Abreu e Lima",
    origem: "Recife",
    contato: "81955554444",
    dataHoraIda: "2025-11-19T08:00:00",
    dataHoraVolta: "2025-11-19T15:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario9@teste.com",
    demandaDetalhe: "Acompanhamento de obra pública",
    pessoaSolicitante: "Eduardo Nunes",
    lotacao: '30',
    secretariaSolicitante: "Infraestrutura",
    destino: "Ipojuca",
    origem: "Recife",
    contato: "81944443333",
    dataHoraIda: "2025-11-13T06:30:00",
    dataHoraVolta: "2025-11-13T19:30:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario10@teste.com",
    demandaDetalhe: "Transporte de materiais escolares",
    pessoaSolicitante: "Patrícia Gomes",
    lotacao: '30',
    secretariaSolicitante: "Educação",
    destino: "Vitória de Santo Antão",
    origem: "Recife",
    contato: "81933332222",
    dataHoraIda: "2025-11-15T07:00:00",
    dataHoraVolta: "2025-11-15T17:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario11@teste.com",
    demandaDetalhe: "Supervisão de obras",
    pessoaSolicitante: "Ricardo Barbosa",
    lotacao: '30',
    secretariaSolicitante: "Obras",
    destino: "Goiana",
    origem: "Recife",
    contato: "81922221111",
    dataHoraIda: "2025-11-21T08:00:00",
    dataHoraVolta: "2025-11-21T18:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario12@teste.com",
    demandaDetalhe: "Capacitação de servidores",
    pessoaSolicitante: "Bianca Freitas",
    lotacao: '30',
    secretariaSolicitante: "Administração",
    destino: "Carpina",
    origem: "Recife",
    contato: "81911110000",
    dataHoraIda: "2025-11-16T09:00:00",
    dataHoraVolta: "2025-11-16T17:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario13@teste.com",
    demandaDetalhe: "Entrega de equipamentos médicos",
    pessoaSolicitante: "Marcelo Dias",
    lotacao: '30',
    secretariaSolicitante: "Saúde",
    destino: "Surubim",
    origem: "Recife",
    contato: "81910101010",
    dataHoraIda: "2025-11-14T08:00:00",
    dataHoraVolta: "2025-11-14T18:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario14@teste.com",
    demandaDetalhe: "Visita técnica em escola rural",
    pessoaSolicitante: "Sérgio Almeida",
    lotacao: '30',
    secretariaSolicitante: "Educação",
    destino: "Pesqueira",
    origem: "Recife",
    contato: "81920202020",
    dataHoraIda: "2025-11-18T06:00:00",
    dataHoraVolta: "2025-11-18T21:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario15@teste.com",
    demandaDetalhe: "Transporte de materiais de obra",
    pessoaSolicitante: "Cláudia Lima",
    lotacao: '30',
    secretariaSolicitante: "Obras",
    destino: "Arcoverde",
    origem: "Recife",
    contato: "81930303030",
    dataHoraIda: "2025-11-19T05:30:00",
    dataHoraVolta: "2025-11-19T19:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario16@teste.com",
    demandaDetalhe: "Fiscalização sanitária",
    pessoaSolicitante: "Rafael Santos",
    lotacao: '30',
    secretariaSolicitante: "Saúde",
    destino: "Paulista",
    origem: "Recife",
    contato: "81940404040",
    dataHoraIda: "2025-11-22T07:00:00",
    dataHoraVolta: "2025-11-22T17:30:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario17@teste.com",
    demandaDetalhe: "Entrega de documentos oficiais",
    pessoaSolicitante: "Vanessa Brito",
    lotacao: '30',
    secretariaSolicitante: "Administração",
    destino: "Gravatá",
    origem: "Recife",
    contato: "81950505050",
    dataHoraIda: "2025-11-12T08:00:00",
    dataHoraVolta: "2025-11-12T14:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario18@teste.com",
    demandaDetalhe: "Treinamento técnico",
    pessoaSolicitante: "André Melo",
    lotacao: '30',
    secretariaSolicitante: "Infraestrutura",
    destino: "Bezerros",
    origem: "Recife",
    contato: "81960606060",
    dataHoraIda: "2025-11-23T07:00:00",
    dataHoraVolta: "2025-11-23T19:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario19@teste.com",
    demandaDetalhe: "Visita de inspeção",
    pessoaSolicitante: "Carla Fernandes",
    lotacao: '30',
    secretariaSolicitante: "Saúde",
    destino: "Gravatá",
    origem: "Recife",
    contato: "81970707070",
    dataHoraIda: "2025-11-24T09:00:00",
    dataHoraVolta: "2025-11-24T17:00:00",
    statusDemanda: "Aguardando",
  },
  {
    emailSolicitante: "usuario20@teste.com",
    demandaDetalhe: "Entrega de materiais didáticos",
    pessoaSolicitante: "Fábio Pereira",
    lotacao: '30',
    secretariaSolicitante: "Educação",
    destino: "Palmares",
    origem: "Recife",
    contato: "81980808080",
    dataHoraIda: "2025-11-25T07:30:00",
    dataHoraVolta: "2025-11-25T18:30:00",
    statusDemanda: "Aguardando",
  },
];

export async function main() {
  try {
    console.log("🌱 Iniciando seed do banco de dados...");

    // 1. Criar secretarias primeiro
    

    // 2. Criar usuários
    console.log("\n👥 Criando usuários...");
    const createdUsers: { id: string; email: string }[] = [];

    for (const user of userData) {
      // Verificar se usuário já existe
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (existingUser) {
        createdUsers.push({ id: existingUser.id, email: existingUser.email });
        console.log(`ℹ️ Usuário já existe: ${existingUser.email}`);
        continue;
      }

      // Criar novo usuário
      try {
        await auth.api.signUpEmail({
          body: {
            email: user.email,
            name: user.name,
            password: user.password,
          },
        });

        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (dbUser) {
          createdUsers.push({ id: dbUser.id, email: dbUser.email });
          console.log(`✅ Usuário criado: ${dbUser.email}`);
        }
      } catch (error) {
        console.error(`❌ Erro ao criar usuário ${user.email}:`, error);
      }
    }

    const mainUser = createdUsers[0];

    if (!mainUser) {
      throw new Error("Nenhum usuário encontrado para vincular dados.");
    }

    // Vincular usuário às secretarias
    console.log("\n🔗 Vinculando usuário às secretarias...");
    for (const sec of secretariasData) {
      const exists = await prisma.userSecretaria.findUnique({
        where: {
          userId_secretariaId: {
            userId: mainUser.id,
            secretariaId: sec.id,
          },
        },
      });

      if (!exists) {
        await prisma.userSecretaria.create({
          data: {
            userId: mainUser.id,
            secretariaId: sec.id,
          },
        });
        console.log(`✅ Usuário vinculado à ${sec.nome}`);
      } else {
        console.log(`ℹ️ Vínculo já existe: ${sec.nome}`);
      }
    }

    // 3. Criar veículos
    console.log("\n🚗 Criando veículos...");
    for (const v of veiculosData) {
      const exists = await prisma.veiculo.findUnique({
        where: { placaVeiculo: v.placaVeiculo },
      });

      if (!exists) {
        await prisma.veiculo.create({
          data: {
            ...v,
            user: {
              connect: { id: mainUser.id },
            },
          },
        });
        console.log(`✅ Veículo criado: ${v.placaVeiculo}`);
      } else {
        console.log(`ℹ️ Veículo já existe: ${v.placaVeiculo}`);
      }
    }

    // 4. Criar demandas
    for (const demanda of demandasData) {
      // Buscar secretaria correspondente
      const secretaria = await prisma.secretaria.findFirst({
        where: {
          nome: {
            contains: demanda.secretariaSolicitante,
            mode: 'insensitive'
          }
        }
      });
    
      // Verificar se demanda já existe (usando combinação de campos únicos)
      const exists = await prisma.demanda.findFirst({
        where: {
          emailSolicitante: demanda.emailSolicitante,
          dataHoraIda: demanda.dataHoraIda,
          destino: demanda.destino
        }
      });
    
      if (!exists) {
        await prisma.demanda.create({
          data: {
            ...demanda,
            user: {
              connect: { id: mainUser.id }
            },
            secretaria: secretaria ? {
              connect: { id: secretaria.id }
            } : undefined,
            // Você pode conectar um veículo aleatório se quiser
            // veiculo: { connect: { id: algumVeiculoId } }
          }
        });
        console.log(`✅ Demanda criada: ${demanda.pessoaSolicitante} - ${demanda.destino}`);
      } else {
        console.log(`ℹ️ Demanda já existe: ${demanda.pessoaSolicitante} - ${demanda.destino}`);
      }
    }
   
  } catch (error) {
    console.error("\n❌ Erro durante o seed:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();