"use client";

import Image from "next/image";
import {
  Car,
  ChevronsUpDown,
  Inbox,
  MonitorCog,
  UserCheck,
  UserCog,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import Logout from "./Logout";
import { User } from "@/generated/prisma";
import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const items = [
  {
    title: "Demandas",
    url: "/demandas",
    icon: Inbox,
  },
  {
    title: "Frota",
    url: "/frota",
    icon: Car,
  },
];

export default function AppSidebar() {
  const [user, setUser] = useState<User | null>(null);
  const [userAccessLevel, setUserAccessLevel] = useState<string | null>(null);

  const isAdmin = (userAccessLevel: string | null) =>
    ["administrador"].includes(userAccessLevel ?? "");
  const isEditor = (userAccessLevel: string | null) =>
    ["administrador", "editor", "consultor"].includes(userAccessLevel ?? "");

  useEffect(() => {
    async function carregarUser() {
      try {
        const res = await fetch("/api/usuario");
        const data = await res.json();
        setUser(data.usuario);
        setUserAccessLevel(data.userAccessLevel);
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
      }
    }

    carregarUser();
  }, []);

  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {isEditor(userAccessLevel) && (
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <MonitorCog className="w-4" />
                        <span className="flex w-full gap-2">Painel</span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {isAdmin(userAccessLevel) && (
                          <>
                            <SidebarMenuButton>
                              <a href="/usuario" className="flex gap-2">
                                <UserCheck className="w-4" />
                                <span>Usuário</span>
                              </a>
                            </SidebarMenuButton>
                          </>
                        )}
                        <SidebarMenuButton>
                          <a href="/motorista" className="flex gap-2">
                            <UserCog className="w-4" />
                            <span>Motorista</span>
                          </a>
                        </SidebarMenuButton>
                        <SidebarMenuSubItem />
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="justify-end">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="ml-[-2] flex h-15 justify-start">
                  <AvatarIcon size={35} />
                  {state !== "collapsed" && (
                    <div className="w-full flex ml-2">
                      <div className="flex flex-col ml-2 w-1/2">
                        <span>{user?.name?.split(" ")[0]}</span>
                        <span className="text-xs text-gray-500">
                          {user?.email}
                        </span>
                      </div>
                      <div className="flex justify-end w-1/2">
                        <ChevronsUpDown className="ml-auto" />
                      </div>
                    </div>
                  )}
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem className="flex justify-center">
                  <Logout />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

function AvatarIcon({ size = 35 }: { size?: number }) {
  return (
    <div className="flex-shrink-0" style={{ width: size, height: size }}>
      <Image
        src="/avatar.png"
        width={size}
        height={size}
        alt="Avatar"
        className="rounded-lg border w-full h-full"
      />
    </div>
  );
}
