"use client"
import React from "react"
import CardForm from "@/components/CardForm"
import BackgroundGradientContianer from "@/components/login/BackgroundGradientContianer"
import { Button } from "@/components/ui/button"
import {
  IconArrowLeft,
  IconLockOpen,
  IconLockPassword,
} from "@tabler/icons-react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function page() {
  const router = useRouter()

  const handleUpdatePassword = () => {
    toast.success("Success", { description: "Password updated successfully" })
    router.replace("/")
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
              <IconLockPassword
                className="text-white"
                size={50}
                strokeWidth={1}
              ></IconLockPassword>
            </div>
          }
          title="Verify email address"
          description="Verification code sent to example@gmail.com"
        >
          <div className="mt-8 flex h-full w-full flex-col items-center gap-8">
            <div className="flex w-full flex-col gap-2">
              <Input
                labelClassname="text-white"
                label="Password"
                type="password"
              ></Input>
              <Input
                labelClassname="text-white"
                label="Confirm Password"
                type="password"
              ></Input>
            </div>
            <div className="flex w-full flex-col gap-4">
              <Button onClick={handleUpdatePassword}>Confirm Password</Button>
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
