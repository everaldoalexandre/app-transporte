import { MenuNavigationCompleto } from "@/components/MenuNavbar";
import { SolicitacaoDemandaForm } from "@/components/SolicitacaoDeDemandas";

export default function Home() {
  return (
    <div className="font-sans grid min-h-screen bg-gray-100">
      <main className="flex flex-col row-start-2 justify-items-center items-center sm:items-start">
        <MenuNavigationCompleto/>
        <div className="flex items-center justify-center w-full max-w-screen mt-15">
          <SolicitacaoDemandaForm/>
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
