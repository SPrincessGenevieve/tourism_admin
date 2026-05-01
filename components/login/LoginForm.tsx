"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IconShoe } from "@tabler/icons-react"
import { toast } from "sonner"
import { styleText } from "node:util"

export default function LoginForm() {
  const handleLogin = () => {
    toast.success("Success", { description: "Login successful. Welcome back!" })
  }

  return (
    <Card className="w-full max-w-110 bg-black/20 shadow-[0_0_35px_5px] shadow-purple-300/30 backdrop-blur-3xl">
      <CardContent className="flex h-120 w-full flex-col gap-4">
        <CardHeader className="m-0 items-center justify-center gap-0">
          <div className="flex flex-col items-center justify-center">
            <IconShoe
              className="text-white"
              size={50}
              strokeWidth={1}
            ></IconShoe>
            <Label className="text-center text-white">Travlr</Label>
            <Label className="my-2 text-center text-2xl font-semibold text-white">
              Welcome Back!
            </Label>
          </div>
        </CardHeader>
        <div className="my-4 flex flex-col gap-2">
          <Input placeholder="example@gmail.com" label="Email"></Input>
          <Input type="password" label="Password"></Input>
        </div>
        <div className="flex flex-col gap-4">
          <Button onClick={handleLogin} className="w-full">
            Login
          </Button>
          <Button variant={"ghost"}>Forgot Password?</Button>
        </div>
      </CardContent>
    </Card>
  )
}
