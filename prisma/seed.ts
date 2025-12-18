import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // ===== Acessos =====
  const acessos = ["administrador", "editor", "consultor"];

  for (const nivel of acessos) {
    const exists = await prisma.acesso.findFirst({
      where: { nivel },
    });

    if (!exists) {
      await prisma.acesso.create({
        data: { nivel },
      });
    }
  }

  // ===== Secretaria =====
  const secretaria = await prisma.secretaria.findFirst({
    where: { nome: "SEDUC" },
  });

  if (!secretaria) {
    await prisma.secretaria.create({
      data: { nome: "SEDUC" },
    });
  }

  console.log("Seed executado com sucesso 🚀");
}

main()
  .catch(console.error)
  .finally(async () => prisma.$disconnect());
