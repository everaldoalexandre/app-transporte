import { PrismaClient } from '@/generated/prisma';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
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
      where: { id: userId },
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

    const demandas = await prisma.demanda.findMany({
      where: { 
        secretariaId: { in: secretariasIds }
      }
    });
    return new Response(JSON.stringify(demandas), { status: 200 });
  } catch (error) {
    console.error('Error fetching demandas:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

export async function POST (request: Request) {
  try {
    const body = await request.json();
    const { novaDemanda } = body;

    if (!novaDemanda) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
    }

    await prisma.demanda.create({ data: novaDemanda });

    return new Response(JSON.stringify({ message: 'Demanda externa adicionada com sucesso!' }), { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

export async function PUT (request: Request) {
  try {
    const body = await request.json();
    const { id, updatedDemandas } = body;

    if (!id || !updatedDemandas) {
      return new Response(JSON.stringify({ error: 'ID and updated fields are required.' }), { status: 400 });
    }

    await prisma.demanda.update({
      where: { id },
      data: updatedDemandas,
    });

    return new Response(JSON.stringify({ message: 'Demanda atualizada com sucesso!' }), { status: 200 });
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

    await prisma.demanda.delete({
      where: { id },
    });
    
    return NextResponse.json({ message: 'Demanda deletada com sucesso' });
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json({ error: 'Erro interno ao deletar a demanda' }, { status: 500 });
  }
}