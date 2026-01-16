import { EmailPasswordReset } from "@/components/Resend";
import { PrismaClient } from "@/generated/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  advanced: {
    database: {
      generateId: false,
    },
  },

  plugins: [nextCookies()],

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,

    sendResetPassword: async ({ user, url }) => {
      await EmailPasswordReset({
        to: user.email,
        subject: "Redefinição de senha",
        html: `
      <p>Olá ${user.name},</p>
      <p>Clique no link abaixo para redefinir sua senha:</p>
      <a href="${url}">${url}</a>
      <p>Este link expira em alguns minutos.</p>
    `,
      });
    },
  },
});
