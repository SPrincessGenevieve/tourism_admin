"use client"

import React from "react"
import BackgroundGradientContianer from "@/components/login/BackgroundGradientContianer"
import CardForm from "@/components/CardForm"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { IconArrowLeft, IconLock } from "@tabler/icons-react"
import { useRouter } from "next/navigation"

export default function ForgotPasswordPage() {
  const router = useRouter()

  const handleVerify = () => {
    toast.success("Success", {
      description: "A code has been sent to your email.",
    })
    router.push("/verify")
  }

  const handleSignIn = () => {
    router.push("/")
  }

  return (
    <div className="relative h-screen w-full">
      <BackgroundGradientContianer>
        <CardForm
          Headerchildren={
            <div className="flex w-full flex-col items-center justify-center">
              <IconLock
                className="text-white"
                size={50}
                strokeWidth={1}
              ></IconLock>
            </div>
          }
          title="Forgot Password?"
          description="Please write your email to receive a confirmation code to set a new password"
        >
          <div className="mt-8 flex h-full w-full flex-col gap-8">
            <Input
              labelClassname="text-white"
              label="Email Address"
              placeholder="example@gmail.com"
            ></Input>
            <div className="flex flex-col gap-4">
              <Button onClick={handleVerify}>Confirm Address</Button>
              <Button onClick={handleSignIn} variant={"ghost"}>
                <IconArrowLeft></IconArrowLeft> Back to Sign-in
              </Button>
            </div>
          </div>
        </CardForm>
      </BackgroundGradientContianer>
    </div>
  )
}
