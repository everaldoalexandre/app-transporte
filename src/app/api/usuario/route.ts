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
      secretarias: true,
    },
  });

  if (!user) return null;

  return {
    id: user.id,
    userAccessLevel: user.acesso?.[0]?.nivel ?? "usuário",
    secretariasIds: user.secretarias?.map((s) => s.secretariaId) || [],
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

    const usuarios = await prisma.user.findMany({
      where: {
        secretarias: {
          some: { secretariaId: { in: secretariasIds } },
        },
      },
      include: {
        secretarias: {
          include: { secretaria: true },
        },
      },
    });

    return new Response(
      JSON.stringify({ usuario, usuarios, userAccessLevel }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
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

    if (!user.secretariasIds || user.secretariasIds.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: "Usuário não possui secretaria vinculada" }),
        { status: 400 }
      );
    }

    const body = await request.json();
    const { usuarioNovo } = body;

    if (!usuarioNovo) {
      return new NextResponse(
        JSON.stringify({ error: "Dados do usuário são obrigatórios" }),
        { status: 400 }
      );
    }

    if (["administrador", "editor"].includes(user.userAccessLevel)) {
    } else {
      return new NextResponse(
        JSON.stringify({
          error: "Acesso negado. Nível de acesso insuficiente.",
        }),
        { status: 403 }
      );
    }

    const usuarioCriado = await prisma.user.create({
      data: {
        name: usuarioNovo.name,
        email: usuarioNovo.email,
        secretarias: {
          createMany: {
            data: usuarioNovo.secretarias.map((secretariaId: string) => ({
              secretariaId,
            })),
          },
        },
      },
      include: {
        secretarias: {
          include: { secretaria: true },
        },
      },
    });

    return new Response(JSON.stringify(usuarioCriado), { status: 201 });
  } catch (error) {
    console.error("Erro ao processar solicitação:", error);
    return new Response(JSON.stringify({ error: "Erro interno" }), {
      status: 500,
    });
  }
}

export async function PUT(request: Request) {
  try {
    const user = await getAuthenticatedUser();

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não autenticado" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, updatedUsuario } = body;

    if (!id || !updatedUsuario) {
      return NextResponse.json(
        { error: "ID e campos atualizados são obrigatórios." },
        { status: 400 }
      );
    }

    const usuario = await prisma.user.findUnique({
      where: { id },
      include: {
        secretarias: true,
      },
    });

    if (!usuario) {
      return NextResponse.json(
        { error: "Usuário não encontrado." },
        { status: 404 }
      );
    }

    if (!["administrador", "editor"].includes(user.userAccessLevel)) {
      return NextResponse.json(
        {
          error:
            "Acesso negado. Apenas administradores e editores podem editar usuários.",
        },
        { status: 403 }
      );
    }

    if (updatedUsuario.email && updatedUsuario.email !== usuario.email) {
      const existingUser = await prisma.user.findUnique({
        where: { email: updatedUsuario.email },
      });

      if (existingUser) {
        return NextResponse.json(
          { error: "Este email já está cadastrado" },
          { status: 400 }
        );
      }
    }

    const updateData: any = {};

    if (updatedUsuario.acessoIds && Array.isArray(updatedUsuario.acessoIds)) {
      updateData.acesso = {
        set: updatedUsuario.acessoIds.map((acessoId: string) => ({
          id: acessoId,
        })),
      };
    }

    if (updatedUsuario.name) {
      updateData.name = updatedUsuario.name;
    }

    if (updatedUsuario.email) {
      updateData.email = updatedUsuario.email;
    }

    if (updatedUsuario.acessoIds?.length) {
      updateData.acesso = {
        set: updatedUsuario.acessoIds.map((id: string) => ({ id })),
      };
    }

    if (
      updatedUsuario.secretariaIds &&
      Array.isArray(updatedUsuario.secretariaIds)
    ) {
      await prisma.userSecretaria.deleteMany({
        where: { userId: id },
      });

      updateData.secretarias = {
        create: updatedUsuario.secretariaIds.map((secretariaId: string) => ({
          secretaria: {
            connect: { id: secretariaId },
          },
        })),
      };
    }

    const usuarioAtualizado = await prisma.user.update({
      where: { id },
      data: updateData,
      include: {
        acesso: true,
        secretarias: {
          include: {
            secretaria: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        message: "Usuário atualizado com sucesso!",
        usuario: usuarioAtualizado,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao atualizar o usuário:", error);
    return NextResponse.json(
      {
        error: "Erro interno",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
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

    const usuario = await prisma.user.findUnique({
      where: { id },
      include: {
        secretarias: true,
      },
    });

    if (!usuario) {
      return NextResponse.json(
        { error: "Usuário não encontrado." },
        { status: 404 }
      );
    }

    if (["administrador"].includes(user.userAccessLevel)) {
    } else {
      return NextResponse.json(
        { error: "Acesso negado. Nível de acesso insuficiente." },
        { status: 403 }
      );
    }

    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    return NextResponse.json(
      { error: "Erro interno ao deletar o usuário" },
      { status: 500 }
    );
  }
}
