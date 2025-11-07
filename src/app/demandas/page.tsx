import AppSidebar from "@/components/AppSidebar";
import DemandasTable from "@/components/DemandasTable";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex  items-center gap-2 px-4 sm:items-start">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
              />
          </div>
        </header>
      </SidebarInset>
      <DemandasTable/>
    </SidebarProvider>
  );
}
