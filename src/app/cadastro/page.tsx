import { MenuNavigationCompleto } from "@/components/MenuNavbar";
import { Cadastro } from "@/components/Cadastro";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default async function CadastroForm() {
  const userSession = await auth.api.getSession({
    headers: await headers(),
  });

  if (!userSession) {
    redirect("/demandas");
  }
  return (
    <div className="font-sans grid min-h-screen bg-gray-100">
      <main className="flex flex-col row-start-2 justify-items-center items-center sm:items-start">
        <MenuNavigationCompleto />
        <div className="flex items-center justify-center w-full mt-6">
          <Cadastro />
        </div>
        <footer className="flex items-center justify-center w-full h-10 border-t mt-6">
          <p className="text-sm text-gray-500 font-bold">
            &copy; 2025 - Developed Everaldo Alexandre
          </p>
        </footer>
      </main>
    </div>
  );
}
