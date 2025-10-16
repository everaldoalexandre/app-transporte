import DemandasTable from "@/components/DemandasTable";
import { MenuNavigationCompleto } from "@/components/MenuNavbar";

export default function Home() {
  return (
    <div className="font-sans grid min-h-screen bg-gray-100">
      <main className="flex flex-col row-start-2 justify-items-center items-center sm:items-start">
        <MenuNavigationCompleto/>
        <div className="flex items-center justify-center w-full pt-26">
          <DemandasTable/>
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
