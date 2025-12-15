import AppSidebar from "@/components/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import MotoristasTable from "@/components/TableMotorista";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex fixed w-full items-start gap-2 px-3 sm:items-start top-4 z-10">
          <SidebarTrigger className="-ml-1" />
        </div>
        <header className="flex justify-center gap-2 transition-[width,height] duration-200 ease-in-out group-has-data-[collapsible=icon]/sidebar-wrapper:justify-center">
          <div className=" mt-6 ">
            <MotoristasTable />
          </div>
        </header>
      </SidebarInset>
    </SidebarProvider>
  );
}
