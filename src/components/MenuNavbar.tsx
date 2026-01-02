"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Logout from "@/components/Logout";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function MenuCenter() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/SolicitacaoDemandas">Solicitar Demanda</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MenuEnd() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/login">Login</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MenuEndSession() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Logout />
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MenuNavigationCompleto() {
  return (
    <nav className="flex fixed top-0 w-full py-1 justify-between bg-white  shadow-md">
      <div className="flex justify-center w-1/3"></div>
      <div className="flex justify-center ml-4 w-1/3">
        <Image
          src="/avatar.png"
          alt="Logo"
          width={80}
          height={80}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex justify-end mr-4 w-1/3">
        <MenuEnd />
      </div>
    </nav>
  );
}
