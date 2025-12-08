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
      secretaria: true,
    },
  });

  if (!user) return null;

  return {
    id: user.id,
    userAccessLevel: user.acesso?.[0]?.nivel ?? "usuário",
    secretariasIds: user.secretaria?.map((s) => s.secretariaId) || [],
  };
}

export async function GET() {
  try {
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
        secretaria: {
          include: {
            secretaria: true,
          },
        },
        veiculos: true,
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
    const secretariasIds = usuario.secretaria.map((s) => s.secretariaId);
    const veiculosIds = usuario.veiculos.map((v) => v.id);

    const demandas = await prisma.demanda.findMany({
      where: {
        OR: [
          { veiculoId: { in: veiculosIds } },
          { secretariaId: { in: secretariasIds } },
        ],
      },
      include: {
        veiculo: true,
        motorista: true,
        secretaria: true,
      },
    });
    return new Response(JSON.stringify({ demandas, userAccessLevel }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching demandas:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { novaDemanda } = body;

    if (!novaDemanda) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 }
      );
    }

    await prisma.demanda.create({ data: novaDemanda });

    return new Response(
      JSON.stringify({ message: "Demanda externa adicionada com sucesso!" }),
      { status: 200 }
    );
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
      return new NextResponse(
        JSON.stringify({ error: "Usuário não autenticado" }),
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, updatedDemandas } = body;

    if (!id || !updatedDemandas) {
      return new Response(
        JSON.stringify({ error: "ID and updated fields are required." }),
        { status: 400 }
      );
    }

    const demanda = await prisma.demanda.findUnique({
      where: { id },
      include: {
        secretaria: true,
      },
    });

    if (!demanda) {
      return new Response(
        JSON.stringify({ error: "Demanda não encontrada." }),
        { status: 404 }
      );
    }

    if (["administrador", "editor"].includes(user.userAccessLevel)) {
    } else if (user.userAccessLevel === "secretaria") {
      if (!user.secretariasIds.includes(demanda.secretariaId ?? "")) {
        return new Response(
          JSON.stringify({
            error:
              "Acesso negado. Você não pode editar demandas de outras secretarias.",
          }),
          { status: 403 }
        );
      }
    } else {
      return new Response(
        JSON.stringify({
          error: "Acesso negado. Nível de acesso insuficiente.",
        }),
        { status: 403 }
      );
    }

    await prisma.demanda.update({
      where: { id },
      data: updatedDemandas,
    });

    return new Response(
      JSON.stringify({ message: "Demanda atualizada com sucesso!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating demanda:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
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
      return NextResponse.json({ error: "ID is mandatory" }, { status: 400 });
    }

    const demanda = await prisma.demanda.findUnique({
      where: { id },
      include: {
        secretaria: true,
      },
    });

    if (!demanda) {
      return NextResponse.json(
        { error: "Demanda não encontrada" },
        { status: 404 }
      );
    }

    if (["administrador"].includes(user.userAccessLevel)) {
    } else if (user.userAccessLevel === "secretaria") {
      if (!user.secretariasIds.includes(demanda.secretariaId ?? "")) {
        return NextResponse.json(
          {
            error:
              "Acesso negado. Você não pode deletar demandas de outras secretarias.",
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

    await prisma.demanda.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Demanda deletada com sucesso" });
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json(
      { error: "Erro interno ao deletar a demanda" },
      { status: 500 }
    );
  }
}
