"use client";
export const dynamic = "force-dynamic";

import { MenuNavigationCompleto } from "@/components/MenuNavbar";
import ResetPasswordPage from "@/components/NovaSenha";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-100 flex flex-col">
      <MenuNavigationCompleto />
      <main className="flex items-center justify-center w-full pt-25 pb-4">
        <div className=" w-full max-w-sm px-4">
          <ResetPasswordPage />
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-10 border-t">
        <p className="text-sm text-gray-500 font-bold">
          &copy; 2025 - Desenvolvido por Everaldo Alexandre
        </p>
      </footer>
    </div>
  );
}
