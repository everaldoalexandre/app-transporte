import { Login } from "@/components/Login";
import { MenuNavigationCompleto } from "@/components/MenuNavbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginForm() {
  const userSession = await auth.api.getSession({
    headers: await headers()
  })

  if (userSession){
    redirect('/demandas');
  }
  return (
    <div className="font-sans grid min-h-screen bg-gray-100">
      <main className="flex flex-col row-start-2 justify-items-center items-center sm:items-start">
        <MenuNavigationCompleto/>
        <div className="flex w-full items-center justify-center">
          <Login/>
        </div>
        <footer className="flex items-center justify-center w-full border-t mt-6">
          <p className="text-sm text-gray-500 font-bold">
            &copy; 2025 - Desenvolvido por Everaldo Alexandre
          </p>
        </footer>
      </main>
    </div>
  );
}
