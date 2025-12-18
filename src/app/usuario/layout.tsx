import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Usuários - Sistema de Transporte",
  description: "Pagina de usuários do sistema de transporte",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSession = await auth.api.getSession({
    headers: await headers(),
  });

  if (!userSession) {
    redirect("/login");
  }

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
