'use client'

import Image  from "next/image"; 
import { ChevronDown, ChevronUp, Home, Inbox } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar";
import Logout from "./Logout";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Demandas",
    url: "/demandas",
    icon: Inbox,
  },
  {
    title: "Frota",
    url: "/frota",
    icon: Inbox,
  },
]

export default function AppSidebar() {
    
    const {
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
    } = useSidebar()

    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
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
                    </SidebarMenu>
                </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="justify-end">
                <SidebarMenu>
                    <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <SidebarMenuButton className=" flex h-15 justify-start">
                            <AvatarIcon size={35}/>
                            {state !== "collapsed" && (
                            <div className="flex flex-col ml-2">
                                <span>Username</span>
                                <span className="text-xs text-gray-500">m@exemple.com</span>
                            </div>)}
                            {state !== "collapsed" && <ChevronUp className="ml-auto" />}
                        </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                        side="right"
                        className="w-[--radix-popper-anchor-width]"
                        >
                        <DropdownMenuItem>
                            <Logout/>
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

function AvatarIcon({ size = 35 }: { size?: number }) {
  return (
    <div
      className="flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <Image
        src="/avatar.jpg"
        width={size}
        height={size}
        alt="Avatar"
        className="rounded-lg border w-full h-full"
      />
    </div>
  )
}