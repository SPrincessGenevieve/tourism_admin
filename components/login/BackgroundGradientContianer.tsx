import React from "react"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"

export default function BackgroundGradientContianer({
  children,
}: Readonly<{
  children?: React.ReactNode
}>) {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-70 flex h-full w-full items-center justify-center">
        {children}
      </div>
    </BackgroundGradientAnimation>
  )
}
