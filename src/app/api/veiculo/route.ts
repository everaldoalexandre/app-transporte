import { PrismaClient } from '@/generated/prisma';
import { auth } from '@/lib/auth';
import { headers } from "next/headers";
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

interface UpdateData {
  id: number;
  placaVeiculo?: string;
  chassiVeiculo: string;
  renavamVeiculo: string;
  proprietarioVeiculo: string;
  crlvVeiculo: string;
  userId: string
};

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
      where: { id: userId },
      select: { secretariasId: true }
    });

    if (!usuario?.secretariasId) {
      return new NextResponse(
        JSON.stringify({ error: "Usuário não possui secretaria vinculada" }),
        { status: 400 }
      );
    }

    const veiculos = await prisma.veiculos.findMany({
      where: { secretariasId: usuario.secretariasId }
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

    if (!session) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
    }

    if (!session?.user) {
      return NextResponse.json(
        {error: 'Unauthenticated user'},
        {status: 401}
      )
    }

    const userId = session.user.id;
    const usuario = await prisma.user.findUnique({
      where: { id: userId },
      select: { secretariasId: true }
    });

    if (!usuario?.secretariasId) {
      return new NextResponse(
        JSON.stringify({ error: "Usuário não possui secretaria vinculada" }),
        { status: 400 }
      );
    }
    const secretariasId = usuario.secretariasId;
    const body = await request.json();
    const {novoVeiculo} = body;

    const veiculo = await prisma.veiculos.create({ 
      data: {
        placaVeiculo: novoVeiculo.placaVeiculo.trim(),
        chassiVeiculo: novoVeiculo.chassiVeiculo.trim(),
        renavamVeiculo: novoVeiculo.renavamVeiculo.trim(),
        proprietarioVeiculo: novoVeiculo.proprietarioVeiculo.trim(),
        crlvVeiculo: novoVeiculo.crlvVeiculo.trim(),
        userId,
        secretariasId
        }
    } );

    return new Response(JSON.stringify({ message: 'Veiculo adicionado com sucesso!', veiculo}), { status: 200 });
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

    await prisma.veiculos.update({
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

    await prisma.veiculos.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Veiculo deletado com sucesso' });
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json({ error: 'Erro interno ao deletar o veiculo' }, { status: 500 });
  }
}