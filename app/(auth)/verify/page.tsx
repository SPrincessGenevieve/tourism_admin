"use client"
import CardForm from "@/components/CardForm"
import BackgroundGradientContianer from "@/components/login/BackgroundGradientContianer"
import { Button } from "@/components/ui/button"
import { IconArrowLeft, IconLockOpen } from "@tabler/icons-react"
import React from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function VerifyPage() {
  const router = useRouter()

  const handleVerify = () => {
    toast.success("Success", {
      description: "OTP verified successfully",
    })
    router.push("/verify/new-password")
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
              <IconLockOpen
                className="text-white"
                size={50}
                strokeWidth={1}
              ></IconLockOpen>
            </div>
          }
          title="Verify email address"
          description="Verification code sent to example@gmail.com"
        >
          <div className="mt-8 flex h-full w-full flex-col items-center gap-8">
            <InputOTP maxLength={6} className="">
              <InputOTPGroup>
                {[...Array(6)].map((_, i) => (
                  <InputOTPSlot className="h-10 w-16" index={i}></InputOTPSlot>
                ))}
              </InputOTPGroup>
            </InputOTP>
            <div className="flex w-full flex-col gap-4">
              <Button onClick={handleVerify}>Confirm Code</Button>
              <Button onClick={handleSignIn} variant={"ghost"}>
                <IconArrowLeft></IconArrowLeft> Back to Sign-in
              </Button>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Label className="font-bold text-white">00:29</Label>
                <Label className="font-light text-white">
                  Resend Confirmation Code
                </Label>
              </div>
            </div>
          </div>
        </CardForm>
      </BackgroundGradientContianer>
    </div>
  )
}
