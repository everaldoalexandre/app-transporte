import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  const { token, password } = await req.json();

  await auth.api.resetPassword({
    query: {
      token,
    },
    body: {
      newPassword: password,
    },
  });

  return NextResponse.json({ ok: true });
}
