import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET () {
  try {
    const demandas = await prisma.demandas.findMany();
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

    await prisma.demandas.create({ data: novaDemanda });

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

    await prisma.demandas.update({
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

    await prisma.demandas.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json({ error: 'Internal error while deleting task' }, { status: 500 });
  }
}