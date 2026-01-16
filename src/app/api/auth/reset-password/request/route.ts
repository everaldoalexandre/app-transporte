import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  const { email } = await req.json();

  await auth.api.requestPasswordReset({
    body: {
      email,
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`,
    },
  });

  return NextResponse.json({ ok: true });
}
