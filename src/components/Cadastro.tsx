'use client'

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { authClient } from "@/lib/auth-client";

export function Cadastro({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordconfirmation, setPasswordConfirmation] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password || !passwordconfirmation || !name) {
            toast.error('Por favor, preencha todos os campos.')
            return;
        }

        if (password !== passwordconfirmation) {
            toast.error('As senhas não coincidem.')
            return;
        }
            
        await authClient.signUp.email({
            
            email,
            password,
            name,
            callbackURL: "/demandas",
        },{
            onRequest(){

            },
            onError(ctx) {
                if (ctx?.error?.code?.includes('USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL')) {
                    toast.error('Este endereço de e-mail já está cadastrado. Tente usar outro endereço de e-mail.');
                } else if (ctx?.error?.code?.includes('PASSWORD_TOO_SHORT')) {
                    toast.error('Sua senha deve ter pelo menos 8 caracteres.');
                } else {
                    toast.error('Falha ao efetuar o cadastro. Tente novamente.');
                }
                console.log(ctx)
            },
            onSuccess(){
                toast.success("Cadastro concluído com sucesso!");
                window.location.href = "/"
            }
        });
    }
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>    
                <CardTitle>Faça seu cadastro</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nome Completo</Label>
                                <Input
                                id="name"
                                type="text"
                                autoCapitalize="none"
                                autoComplete="name"
                                autoCorrect="off"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Seu nome completo"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                            id="email"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Informe o seu email"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Informe sua senha"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="passwordconfirmation">Confirmação da Senha</Label>
                            <Input
                            id="passwordconfirmation"
                            type="password"
                            value={passwordconfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            placeholder="Confirme sua senha"
                            />
                        </div>
                        <div>
                        <Button type="submit" className="mt-4 w-full">Cadastrar</Button>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <div className="w-full text-center text-sm text-muted-foreground">
                Já possui conta? <a href="/login" className="underline hover:text-primary">Fazer login</a>
                </div>
            </CardFooter>
        </Card>
    )
}