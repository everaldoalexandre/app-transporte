import { PrismaClient } from "@/generated/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

async function getAuthenticatedUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) return null;

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      acesso: true,
      secretarias: {
        select: {
          secretariaId: true,
        },
      },
    },
  });

  if (!user) return null;

  return {
    id: user.id,
    userAccessLevel: user.acesso?.[0]?.nivel ?? "usuário",
    secretariasIds: user.secretarias?.map((s) => s.secretariaId) || [],
  };
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get("search") || "";

    const user = await getAuthenticatedUser();

    if (!user) {
      return new NextResponse(
        JSON.stringify({ error: "Usuário não autenticado" }),
        { status: 401 }
      );
    }

    const userId = user.id;

    const usuario = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        secretarias: {
          include: {
            secretaria: true,
          },
        },
        acesso: true,
      },
    });

    if (!usuario) {
      return new NextResponse(
        JSON.stringify({ error: "Usuário não possui secretaria vinculada" }),
        { status: 400 }
      );
    }

    const userAccessLevel =
      usuario.acesso.length > 0 ? usuario.acesso[0].nivel : "usuário";
    const secretariasIds = usuario.secretarias.map((s) => s.secretariaId);

    const motoristas = await prisma.motorista.findMany({
      where: {
        secretariaId: { in: secretariasIds },
        nome: { contains: search, mode: "insensitive" },
      },
      include: {
        secretaria: true,
      },
    });

    return new Response(JSON.stringify({ motoristas, userAccessLevel }), {
      status: 200,
    });
  } catch (error) {
    console.error("Erro ao buscar motoristas:", error);
    return new Response(JSON.stringify({ error: "Erro interno" }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  try {
    const user = await getAuthenticatedUser();

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não autenticado" },
        { status: 401 }
      );
    }

    if (!["administrador", "editor"].includes(user.userAccessLevel)) {
      return new NextResponse(
        JSON.stringify({
          error: "Acesso negado. Nível de acesso insuficiente.",
        }),
        { status: 403 }
      );
    }

    if (!user.secretariasIds || user.secretariasIds.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: "Usuário não possui secretaria vinculada" }),
        { status: 400 }
      );
    }

    const body = await request.json();
    const { motoristaNovo } = body;

    if (!motoristaNovo) {
      return new NextResponse(
        JSON.stringify({ error: "Dados do motorista são obrigatórios" }),
        { status: 400 }
      );
    }

    if (!motoristaNovo.secretariaId) {
      return new NextResponse(
        JSON.stringify({ error: "Secretaria é obrigatórios." }),
        { status: 400 }
      );
    }

    const motoristaCriado = await prisma.motorista.create({
      data: {
        nome: motoristaNovo.nome,
        contato: motoristaNovo.contato,
        secretariaId: motoristaNovo.secretariaId,
      },
    });

    return new Response(JSON.stringify(motoristaCriado), { status: 201 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Erro interno" }), {
      status: 500,
    });
  }
}

export async function PUT(request: Request) {
  try {
    const user = await getAuthenticatedUser();

    if (!user) {
      return new Response(
        JSON.stringify({ error: "Usuário não autenticado" }),
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, updatedMotorista } = body;

    if (!id || !updatedMotorista) {
      return new Response(
        JSON.stringify({
          error: "O ID e os campos atualizados são obrigatórios.",
        }),
        { status: 400 }
      );
    }

    const motorista = await prisma.motorista.findUnique({
      where: { id },
      include: {
        secretaria: true,
      },
    });

    if (!motorista) {
      return new Response(
        JSON.stringify({ error: "Motorista não encontrado." }),
        { status: 404 }
      );
    }

    if (["administrador", "editor"].includes(user.userAccessLevel)) {
    } else if (user.userAccessLevel === "secretaria") {
      if (!user.secretariasIds.includes(motorista.secretariaId ?? "")) {
        return new Response(
          JSON.stringify({
            error:
              "Acesso negado. Você não pode editar motorista de outras secretarias.",
          }),
          { status: 403 }
        );
      }
    } else {
      return new Response(JSON.stringify({ error: "Acesso negado." }), {
        status: 403,
      });
    }

    await prisma.motorista.update({
      where: { id },
      data: {
        nome: updatedMotorista.nome,
        contato: updatedMotorista.contato,
        secretariaId: updatedMotorista.secretariaId,
      },
    });

    return new Response(
      JSON.stringify({ message: "Motorista atualizado com sucesso!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao atualizar motorista:", error);
    return new Response(JSON.stringify({ error: "Erro interno" }), {
      status: 500,
    });
  }
}

export async function DELETE(request: Request) {
  try {
    const user = await getAuthenticatedUser();

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não autenticado" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "A identificação é obrigatória" },
        { status: 400 }
      );
    }

    const motorista = await prisma.motorista.findUnique({
      where: { id },
      include: {
        secretaria: true,
      },
    });

    if (!motorista) {
      return NextResponse.json(
        { error: "Motorista não encontrado." },
        { status: 404 }
      );
    }

    if (["administrador"].includes(user.userAccessLevel)) {
    } else if (user.userAccessLevel === "secretaria") {
      if (!user.secretariasIds.includes(motorista.secretariaId ?? "")) {
        return NextResponse.json(
          {
            error:
              "Acesso negado. Você não pode deletar motorista de outras secretarias.",
          },
          { status: 403 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Acesso negado. Nível de acesso insuficiente." },
        { status: 403 }
      );
    }

    await prisma.motorista.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Motorista deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar motorista:", error);
    return NextResponse.json(
      { error: "Erro interno ao deletar o motorista" },
      { status: 500 }
    );
  }
}
