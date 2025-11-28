import { PrismaClient } from '@/generated/prisma';
import { auth } from '@/lib/auth';
import { headers } from "next/headers";
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET () {
  try {

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
        secretarias: {
          include: {
            secretaria: true
          }
        }
      }
    });

    if (!usuario) {
      return new NextResponse(
        JSON.stringify({ error: "Usuário não possui secretaria vinculada" }),
        { status: 400 }
      );
    }

    const secretariasIds = usuario.secretarias.map(s => s.secretariaId);
    
    const veiculos = await prisma.veiculo.findMany({
      where: { 
        secretariaId: { in: secretariasIds }
      }
    });

    return new Response(JSON.stringify(veiculos), { status: 200 });
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
        secretarias: true
      }
    });
    
    if (!usuario) {
      return new NextResponse(JSON.stringify({ error: "Usuário não encontrado" }), { status: 404 });
    }
    
    if (!usuario.secretarias || usuario.secretarias.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: "Usuário não possui secretaria vinculada" }),
        { status: 400 }
      );
    }
    
    const secretariaId = usuario.secretarias[0].secretariaId;
    
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