import { MenuNavigationCompleto } from "@/components/MenuNavbar";
import { SolicitacaoDemandaForm } from "@/components/SolicitacaoDeDemandas";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-100 flex flex-col">
      <MenuNavigationCompleto />
      <main className="flex items-center justify-center w-full pt-20">
        <div className=" w-full max-w-screen-lg px-4">
          <SolicitacaoDemandaForm />
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
