import { PrismaClient } from '@/generated/prisma';
import { auth } from '@/lib/auth';
import { headers } from "next/headers";
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET (request: Request) {
  try {

    const url = new URL(request.url);
    const search = url.searchParams.get("search") || "";

    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session?.user?.id) {
      return new NextResponse(JSON.stringify({ error: "Usuário não autenticado"}), {status: 401});
    }

    const userId = session.user.id

    const usuario = await prisma.user.findUnique({
      where: {id: userId},
      include: {
        secretaria: {
          include: {
            secretaria: true
          }
        },
        acesso: true
      }
    });

    if (!usuario) {
      return new NextResponse(
        JSON.stringify({ error: "Usuário não possui secretaria vinculada" }),
        { status: 400 }
      );
    }

    const userAccessLevel = usuario.acesso.length > 0 ? usuario.acesso[0].nivel : 'usuário';
    const secretariasIds = usuario.secretaria.map(s => s.secretariaId);
    
    const veiculos = await prisma.veiculo.findMany({
      where: { 
        secretariaId: { in: secretariasIds },
        placaVeiculo: {contains: search, mode: "insensitive"}
      },
      include: {
        secretaria: true,
        user: true
      }
    });

    return new Response(JSON.stringify({veiculos, userAccessLevel}), { status: 200 });
  } catch (error) {
    console.error('Error fetching veiculos:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

export async function POST (request: Request) {
  try {
    const session = await auth.api.getSession({headers: await headers()});

    if (!session?.user) {
      return NextResponse.json(
        {error: 'Unauthenticated user'},
        {status: 401}
      )
    }

    const userId = session.user.id;
    const usuario = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        secretaria: true
      }
    });
    
    if (!usuario) {
      return new NextResponse(JSON.stringify({ error: "Usuário não encontrado" }), { status: 404 });
    }
    
    if (!usuario.secretaria || usuario.secretaria.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: "Usuário não possui secretaria vinculada" }),
        { status: 400 }
      );
    }
    
    const secretariaId = usuario.secretaria[0].secretariaId;
    
    const body = await request.json();
    const { veiculoNovo } = body;
    
    const veiculoCriado = await prisma.veiculo.create({
      data: {
        ...veiculoNovo,
        crlvVeiculo: veiculoNovo.crlvVeiculo ?? "",
        user: { connect: { id: userId } },
        secretaria: { connect: { id: secretariaId } },
      }
    });
    
    return new Response(JSON.stringify(veiculoCriado), { status: 201 });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

export async function PUT (request: Request) {
  try {
    const body = await request.json();
    const { id, updatedVeiculos } = body;

    if (!id || !updatedVeiculos) {
      return new Response(JSON.stringify({ error: 'ID and updated fields are required.' }), { status: 400 });
    }

    await prisma.veiculo.update({
      where: { id },
      data: updatedVeiculos,
    });

    return new Response(JSON.stringify({ message: 'Veiculo atualizado com sucesso!' }), { status: 200 });
  } catch (error) {
    console.error('Error updating demanda:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

export async function DELETE (request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID is mandatory' }, { status: 400 });
    }

    await prisma.veiculo.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Veiculo deletado com sucesso' });
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json({ error: 'Erro interno ao deletar o veiculo' }, { status: 500 });
  }
}