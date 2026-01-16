import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

const SECRETARIA_ID = "7280c84c-27a7-4c81-bb58-238ae42d0c63";

type VeiculoSeed = {
  modelo: string;
  proprietario: string;
  placa: string;
  chassi: string;
  renavam: string;
};

const veiculos: VeiculoSeed[] = [
  // ===== VAN =====
  {
    modelo: "VAN",
    proprietario: "PMC",
    placa: "KHK8F33",
    chassi: "000000",
    renavam: "00828214042",
  },
  {
    modelo: "VAN",
    proprietario: "PMC",
    placa: "PCU6H53",
    chassi: "000000",
    renavam: "01140702642",
  },
  {
    modelo: "VAN",
    proprietario: "PMC",
    placa: "PCU7C53",
    chassi: "000000",
    renavam: "01140716058",
  },
  {
    modelo: "VAN",
    proprietario: "PMC",
    placa: "PCU8A73",
    chassi: "000000",
    renavam: "01140739449",
  },
  {
    modelo: "VAN",
    proprietario: "PMC",
    placa: "PCV1J93",
    chassi: "000000",
    renavam: "01140835634",
  },
  {
    modelo: "VAN",
    proprietario: "PMC",
    placa: "PCV2H93",
    chassi: "000000",
    renavam: "01140854507",
  },
  {
    modelo: "VAN",
    proprietario: "PMC",
    placa: "PCU6I93",
    chassi: "000000",
    renavam: "01140706729",
  },
  {
    modelo: "VAN",
    proprietario: "PMC",
    placa: "PCV2C63",
    chassi: "000000",
    renavam: "01140842126",
  },
  {
    modelo: "VAN",
    proprietario: "PMC",
    placa: "PCV7I93",
    chassi: "000000",
    renavam: "01140986411",
  },
  {
    modelo: "VAN",
    proprietario: "PMC",
    placa: "PCV8A43",
    chassi: "000000",
    renavam: "01140988805",
  },
  {
    modelo: "VAN",
    proprietario: "PMC",
    placa: "PCV8A73",
    chassi: "000000",
    renavam: "01140739449",
  },
  {
    modelo: "VAN",
    proprietario: "PMC",
    placa: "PCV2J53",
    chassi: "000000",
    renavam: "01140857689",
  },
  {
    modelo: "VAN",
    proprietario: "PMC",
    placa: "PCV1J13",
    chassi: "000000",
    renavam: "01140833747",
  },
  {
    modelo: "VAN",
    proprietario: "GMF",
    placa: "TIB5D12",
    chassi: "000000",
    renavam: "1437218900",
  },
  {
    modelo: "VAN",
    proprietario: "GMF",
    placa: "TID6F02",
    chassi: "000000",
    renavam: "1436565313",
  },
  {
    modelo: "VAN",
    proprietario: "GMF",
    placa: "TIF6I02",
    chassi: "000000",
    renavam: "1438349626",
  },
  {
    modelo: "VAN",
    proprietario: "GMF",
    placa: "TID5F02",
    chassi: "000000",
    renavam: "1436594976",
  },
  {
    modelo: "VAN",
    proprietario: "GMF",
    placa: "SKO9C95",
    chassi: "000000",
    renavam: "1423343830",
  },
  {
    modelo: "VAN",
    proprietario: "GMF",
    placa: "SKO2F29",
    chassi: "000000",
    renavam: "1423342485",
  },

  // ===== ÔNIBUS =====
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "KGT1656",
    chassi: "000000",
    renavam: "00151230463",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PEY4G22",
    chassi: "000000",
    renavam: "00284373842",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PEY6H44",
    chassi: "000000",
    renavam: "00316625698",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PEY3J82",
    chassi: "000000",
    renavam: "00284367818",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PFA5J52",
    chassi: "000000",
    renavam: "00284799718",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PEY4H62",
    chassi: "000000",
    renavam: "00284375314",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PEY4B02",
    chassi: "000000",
    renavam: "00284369136",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PFW4J15",
    chassi: "000000",
    renavam: "00534425941",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PFW5A75",
    chassi: "000000",
    renavam: "00534430546",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PFW4D15",
    chassi: "000000",
    renavam: "00534414524",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PFW4B35",
    chassi: "000000",
    renavam: "00534410006",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PFW5A25",
    chassi: "000000",
    renavam: "00534429467",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PCC9203",
    chassi: "000000",
    renavam: "01137830678",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PGV1189",
    chassi: "000000",
    renavam: "01129638852",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PCN2J24",
    chassi: "000000",
    renavam: "01144139420",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "QYC2902",
    chassi: "000000",
    renavam: "01209414683",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PDJ3839",
    chassi: "000000",
    renavam: "01191237173",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "QYB9597",
    chassi: "000000",
    renavam: "01199933977",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "PDJ3809",
    chassi: "000000",
    renavam: "01191250765",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8G49",
    chassi: "000000",
    renavam: "01320413401",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8G79",
    chassi: "000000",
    renavam: "01320675651",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8G89",
    chassi: "000000",
    renavam: "01320682330",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8G99",
    chassi: "000000",
    renavam: "01320682690",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8H29",
    chassi: "000000",
    renavam: "01320683182",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8H39",
    chassi: "000000",
    renavam: "01320683786",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8H49",
    chassi: "000000",
    renavam: "01320684200",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8H79",
    chassi: "000000",
    renavam: "01320684677",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8H89",
    chassi: "000000",
    renavam: "01320685193",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8I09",
    chassi: "000000",
    renavam: "01320726477",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8I19",
    chassi: "000000",
    renavam: "01320727015",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8I29",
    chassi: "000000",
    renavam: "01320728240",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8I39",
    chassi: "000000",
    renavam: "01320728704",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZP8I49",
    chassi: "000000",
    renavam: "01320729280",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZQ7I29",
    chassi: "000000",
    renavam: "01323119954",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZQ7I89",
    chassi: "000000",
    renavam: "01323324965",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZQ7I49",
    chassi: "000000",
    renavam: "01323324361",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZQ7I09",
    chassi: "000000",
    renavam: "01323325333",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZQ7I99",
    chassi: "000000",
    renavam: "01323122971",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZQ7I79",
    chassi: "000000",
    renavam: "01323122327",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZQ7I69",
    chassi: "000000",
    renavam: "01323121630",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZQ2H19",
    chassi: "000000",
    renavam: "01322952920",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "RZQ7I59",
    chassi: "000000",
    renavam: "01323120715",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "SNL1J31",
    chassi: "000000",
    renavam: "01350076284",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "SNL1H71",
    chassi: "000000",
    renavam: "01350059380",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "SNL0I01",
    chassi: "000000",
    renavam: "01350047292",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "SNL0H81",
    chassi: "000000",
    renavam: "01350046342",
  },
  {
    modelo: "ÔNIBUS",
    proprietario: "PMC",
    placa: "QYU5H52",
    chassi: "000000",
    renavam: "01260814413",
  },

  // ===== CARRO =====
  {
    modelo: "CARRO",
    proprietario: "LOCADO",
    placa: "RGK5B49",
    chassi: "000000",
    renavam: "1284176816",
  },
  {
    modelo: "CARRO",
    proprietario: "LOCADO",
    placa: "RGK5B29",
    chassi: "000000",
    renavam: "1284177456",
  },
  {
    modelo: "CARRO",
    proprietario: "LOCADO",
    placa: "RGI8F59",
    chassi: "000000",
    renavam: "1282867625",
  },
  {
    modelo: "CARRO",
    proprietario: "LOCADO",
    placa: "RQA4G78",
    chassi: "000000",
    renavam: "1326619028",
  },
  {
    modelo: "CARRO",
    proprietario: "LOCADO",
    placa: "RGG9J67",
    chassi: "000000",
    renavam: "1258183169",
  },
  {
    modelo: "CARRO",
    proprietario: "LOCADO",
    placa: "RGH0F87",
    chassi: "000000",
    renavam: "1258296028",
  },
  {
    modelo: "CARRO",
    proprietario: "LOCADO",
    placa: "RGK1E20",
    chassi: "000000",
    renavam: "1287293074",
  },
  {
    modelo: "CARRO",
    proprietario: "LOCADO",
    placa: "QYO9H82",
    chassi: "000000",
    renavam: "1244913828",
  },
  {
    modelo: "CARRO",
    proprietario: "LOCADO",
    placa: "QYY7F33",
    chassi: "000000",
    renavam: "1272047846",
  },

  // ===== MICRO-ÔNIBUS =====
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "PEY6I94",
    chassi: "000000",
    renavam: "00316628859",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "PGA0B63",
    chassi: "000000",
    renavam: "00509385109",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "PGC6I65",
    chassi: "000000",
    renavam: "00529117100",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "PGA0D93",
    chassi: "000000",
    renavam: "00509391001",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "PGA0E53",
    chassi: "000000",
    renavam: "00509392440",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "PGA0323",
    chassi: "000000",
    renavam: "00509389708",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "PGA0C23",
    chassi: "000000",
    renavam: "00509386407",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "PGA0A93",
    chassi: "000000",
    renavam: "00509381669",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "OYS4603",
    chassi: "000000",
    renavam: "00996546510",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "PGA0C73",
    chassi: "000000",
    renavam: "00509388493",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "RZQ7J19",
    chassi: "000000",
    renavam: "01323123870",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "SNM1A76",
    chassi: "000000",
    renavam: "01354247202",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "SNM1B06",
    chassi: "000000",
    renavam: "01354247547",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "SNZ4B44",
    chassi: "000000",
    renavam: "01389612292",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "SOB5H55",
    chassi: "000000",
    renavam: "01394789847",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "SOD7B10",
    chassi: "000000",
    renavam: "01397470817",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "SOD9A93",
    chassi: "000000",
    renavam: "01398200996",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "SOO3B10",
    chassi: "000000",
    renavam: "01425326550",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "SOO3E30",
    chassi: "000000",
    renavam: "01425329370",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "SOO8D90",
    chassi: "000000",
    renavam: "01425403023",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "SOO4C40",
    chassi: "000000",
    renavam: "01425338655",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "SOO5D30",
    chassi: "000000",
    renavam: "01425350868",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "SOO3H70",
    chassi: "000000",
    renavam: "01425335028",
  },
  {
    modelo: "MICRO-ÔNIBUS",
    proprietario: "PMC",
    placa: "SOF1D09",
    chassi: "000000",
    renavam: "01404896993",
  },

  // ===== CAMINHÃO =====
  {
    modelo: "CAMINHÃO",
    proprietario: "PMC",
    placa: "NXV6582",
    chassi: "000000",
    renavam: "00231824068",
  },
  {
    modelo: "CAMINHÃO",
    proprietario: "PMC",
    placa: "RZX9C69",
    chassi: "000000",
    renavam: "01336190270",
  },
  {
    modelo: "CAMINHÃO",
    proprietario: "PMC",
    placa: "RZX9B19",
    chassi: "000000",
    renavam: "01336187830",
  },
  {
    modelo: "CAMINHÃO",
    proprietario: "PMC",
    placa: "RZX9E69",
    chassi: "000000",
    renavam: "01336193872",
  },
  {
    modelo: "CAMINHÃO",
    proprietario: "PMC",
    placa: "RZX9D69",
    chassi: "000000",
    renavam: "01336191764",
  },
  {
    modelo: "CAMINHÃO",
    proprietario: "PMC",
    placa: "RZX1J22",
    chassi: "000000",
    renavam: "01344229139",
  },
  {
    modelo: "CAMINHÃO",
    proprietario: "PMC",
    placa: "RZX2A52",
    chassi: "000000",
    renavam: "01344270589",
  },

  // ===== MOTO =====
  {
    modelo: "MOTO",
    proprietario: "LOCADO",
    placa: "RIE5A29",
    chassi: "000000",
    renavam: "1268216370",
  },
  {
    modelo: "MOTO",
    proprietario: "LOCADO",
    placa: "RIE7H39",
    chassi: "000000",
    renavam: "1268223414",
  },
];

async function main() {
  // cria / garante os modelos
  const modelosMap = new Map<string, string>();

  for (const nomeModelo of [...new Set(veiculos.map((v) => v.modelo))]) {
    const modelo = await prisma.veiculoModelo.upsert({
      where: { modelo: nomeModelo },
      update: {},
      create: { modelo: nomeModelo },
    });

    modelosMap.set(nomeModelo, modelo.id);
  }

  // cria veículos
  for (const v of veiculos) {
    await prisma.veiculo.create({
      data: {
        placaVeiculo: v.placa,
        chassiVeiculo: v.chassi,
        renavamVeiculo: v.renavam,
        proprietarioVeiculo: v.proprietario,
        crlvVeiculo: "000000",
        secretariaId: SECRETARIA_ID,
        modeloId: modelosMap.get(v.modelo)!,
      },
    });
  }
}

main()
  .then(() => {
    console.log("🌱 Seed de veículos executado com sucesso");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
