import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Input } from "./ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Label } from "./ui/label";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      toast("As senhas não coincidem");
      setLoading(false);
      return;
    }

    const res = await fetch("/api/auth/reset-password/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Erro ao redefinir senha");
    }
  }

  if (!token) {
    return <p>Token inválido</p>;
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Informe sua nova senha</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <Label htmlFor="password">Nova senha</Label>

              <Input
                type="password"
                placeholder="Nova senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Label htmlFor="confirmPassword">Confirme a senha</Label>

              <Input
                type="password"
                placeholder="Confirme a nova senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <Button disabled={loading}>
                {loading ? "Salvando..." : "Redefinir senha"}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
