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

    const veiculos = await prisma.veiculo.findMany({
      where: {
        secretariaId: { in: secretariasIds },
        placaVeiculo: { contains: search, mode: "insensitive" },
      },
      include: {
        secretaria: true,
        user: true,
        modelo: true,
      },
    });

    return new Response(JSON.stringify({ veiculos, userAccessLevel }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching veiculos:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  try {
    const user = await getAuthenticatedUser();

    if (!user) {
      return new NextResponse(
        JSON.stringify({ error: "Usuário não encontrado" }),
        { status: 404 }
      );
    }

    if (!user.secretariasIds || user.secretariasIds.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: "Usuário não possui secretaria vinculada" }),
        { status: 400 }
      );
    }

    const { veiculoNovo } = await request.json();

    if (!veiculoNovo) {
      return new NextResponse(
        JSON.stringify({ error: "Dados do veículo são obrigatórios" }),
        { status: 400 }
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

    const secretariaId = user.secretariasIds[0];

    const veiculoCriado = await prisma.veiculo.create({
      data: {
        placaVeiculo: veiculoNovo.placaVeiculo,
        chassiVeiculo: veiculoNovo.chassiVeiculo ?? "",
        renavamVeiculo: veiculoNovo.renavamVeiculo ?? "",
        proprietarioVeiculo: veiculoNovo.proprietarioVeiculo ?? "",
        crlvVeiculo: veiculoNovo.crlvVeiculo ?? "",
        user: { connect: { id: user.id } },
        secretaria: { connect: { id: secretariaId } },

        ...(veiculoNovo.modeloId && {
          modelo: { connect: { id: veiculoNovo.modeloId } },
        }),
      },
    });

    return new Response(JSON.stringify({ veiculoCriado }), { status: 201 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
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
    const { id, updatedVeiculos } = body;

    if (!id || !updatedVeiculos) {
      return new Response(
        JSON.stringify({
          error: "O ID e os campos atualizados são obrigatórios.",
        }),
        { status: 400 }
      );
    }

    const veiculo = await prisma.veiculo.findUnique({
      where: { id },
      include: {
        secretaria: true,
      },
    });

    if (!veiculo) {
      return new Response(
        JSON.stringify({ error: "Veículo não encontrado." }),
        { status: 404 }
      );
    }

    if (["administrador", "editor"].includes(user.userAccessLevel)) {
    } else if (user.userAccessLevel === "secretaria") {
      if (!user.secretariasIds.includes(veiculo.secretariaId ?? "")) {
        return new Response(
          JSON.stringify({
            error:
              "Acesso negado. Você não pode editar veículos de outras secretarias.",
          }),
          { status: 403 }
        );
      }
    } else {
      return new Response(JSON.stringify({ error: "Acesso negado." }), {
        status: 403,
      });
    }

    await prisma.veiculo.update({
      where: { id },
      data: {
        placaVeiculo: updatedVeiculos.placaVeiculo,
        chassiVeiculo: updatedVeiculos.chassiVeiculo ?? "",
        renavamVeiculo: updatedVeiculos.renavamVeiculo ?? "",
        proprietarioVeiculo: updatedVeiculos.proprietarioVeiculo ?? "",
        crlvVeiculo: updatedVeiculos.crlvVeiculo ?? "",
        modeloId: updatedVeiculos.modeloId || null,
      },
    });

    return new Response(
      JSON.stringify({ message: "Veículo atualizado com sucesso!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao atualizar veículos:", error);
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

    const veiculo = await prisma.veiculo.findUnique({
      where: { id },
      include: {
        secretaria: true,
      },
    });

    if (!veiculo) {
      return NextResponse.json(
        { error: "Veículo não encontrado." },
        { status: 404 }
      );
    }

    if (["administrador"].includes(user.userAccessLevel)) {
    } else if (user.userAccessLevel === "secretaria") {
      if (!user.secretariasIds.includes(veiculo.secretariaId ?? "")) {
        return NextResponse.json(
          {
            error:
              "Acesso negado. Você não pode deletar veículos de outras secretarias.",
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

    await prisma.veiculo.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Veículo deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar veículo:", error);
    return NextResponse.json(
      { error: "Erro interno ao deletar o veículo" },
      { status: 500 }
    );
  }
}
