import { Login } from "@/components/Login";
import { MenuNavigationCompleto } from "@/components/MenuNavbar";

export default function Home() {
  return (
    <div className="font-sans grid min-h-screen bg-gray-100">
      <main className="flex flex-col row-start-2 justify-items-center items-center sm:items-start">
        <MenuNavigationCompleto/>
        <div className="flex w-full items-center justify-center">
          <Login/>
        </div>
        <footer className="flex items-center justify-center w-full border-t mt-6">
          <p className="text-sm text-gray-500 font-bold">
            &copy; 2025 - Developed Everaldo Alexandre
          </p>
        </footer>
      </main>
    </div>
  );
}
