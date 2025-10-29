'use client'

import { useState } from "react";
import { toast } from "sonner";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "./ui/card";
import { authClient } from "@/lib/auth-client";

export function Login({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email || !password) {
      toast.error("Please fill in all fields.")
      return
    }

    await authClient.signIn.email({
      email,
      password,
      callbackURL: "/demandas",
    }, {
      onRequest() {
        
      },
      onError(ctx) {

        if (ctx?.error?.code?.includes('INVALID_EMAIL_OR_PASSWORD')){
          toast.error("Error logging in. Please check your credentials.")
        }
      },
      onSuccess() {
        
        toast.success("Login successful!")

        setEmail('');
        setPassword('');
      }
    })
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Informa seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Informe sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>  
            </div>
            <div>
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <div className="w-full text-center text-sm text-muted-foreground">
          Você não possui conta? <a href="/cadastro" className="underline hover:text-primary">Cadastre-se</a>
        </div>
      </CardFooter>
    </Card>
  )
}