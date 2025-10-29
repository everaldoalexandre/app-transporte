'use client'

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Logout from "@/components/Logout";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"  

export function MenuCenter() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/SolicitacaoDemandas">Solicitar Demanda</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function MenuCenterSession() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/demandas">Demandas</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/frota">Frota</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
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
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/cadastro">Cadastro</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function MenuEndSession() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Logout/>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function MenuNavigationCompleto() {
  return(
    <nav className="flex fixed top-0 w-full justify-between bg-white shadow-md p-2">
      <div className="flex justify-center w-1/3">
        <Image
          src="/logo_navbar.png"
          alt="Logo"
          width={150}
          height={150}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex justify-center w-1/3">
        <MenuCenter/>
      </div>
      <div className="flex justify-center w-1/3">
        <MenuEnd/>
      </div>
    </nav>
  )
}

export function MenuCompletoSession() {
  return(
    <nav className="flex fixed top-0 w-full justify-between bg-white shadow-md p-2">
      <div className="flex justify-center w-1/3">
        <Image
          src="/logo_navbar.png"
          alt="Logo"
          width={150}
          height={150}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex justify-center w-1/3">
        <MenuCenterSession/>
      </div>
      <div className="flex justify-center w-1/3">
        <MenuEndSession/>
      </div>
    </nav>
  )
}