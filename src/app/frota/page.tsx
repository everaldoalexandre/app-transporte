import AppSidebar from "@/components/AppSidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import VeiculosTable from "@/components/VeiculosTable";

export default function Home() {
  return (
    <main className="p-4">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex items-star gap-2 transition-[width,height] duration-200 ease-in-out group-has-data-[collapsible=icon]/sidebar-wrapper:justify-center">
            <div className="flex fixed w-full items-start gap-2 px-4 sm:items-start sm:px-10">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
                />
            </div>
            <div className=" mt-6 ">
            <VeiculosTable />
            </div>
          </header>
        </SidebarInset> 
      </SidebarProvider>
    </main>
      
  );
}
