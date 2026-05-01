"use client"

import BackgroundGradientContianer from "@/components/login/BackgroundGradientContianer"
import CardForm from "@/components/CardForm"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { IconShoe } from "@tabler/icons-react"
import { Label } from "@/components/ui/label"

export default function Page() {
  const router = useRouter()

  const handleLogin = () => {
    toast.success("Success", { description: "Login successful. Welcome back!" })
    router.push("/")
  }

  const handleNavForgot = () => {
    router.push("/forgot-password")
  }

  return (
    <div className="relative h-screen w-full">
      <BackgroundGradientContianer>
        <CardForm
          title="Welcome Back!"
          Headerchildren={
            <div className="flex w-full flex-col items-center justify-center">
              <IconShoe
                className="text-white"
                size={50}
                strokeWidth={1}
              ></IconShoe>
              <Label className="text-center text-white">Travlr</Label>
            </div>
          }
        >
          <div className="my-4 flex flex-col gap-2">
            <Input placeholder="example@gmail.com" label="Email"></Input>
            <Input type="password" label="Password"></Input>
          </div>
          <div className="flex flex-col gap-4">
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
            <Button onClick={handleNavForgot} variant={"ghost"}>
              Forgot Password?
            </Button>
          </div>
        </CardForm>
      </BackgroundGradientContianer>
    </div>
  )
}
