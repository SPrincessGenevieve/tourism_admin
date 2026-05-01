"use client"

import React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { IconShoe } from "@tabler/icons-react"

type FormT = {
  title: string
  description?: string
  children?: React.ReactNode
  Headerchildren?: React.ReactNode
}

export default function CardForm({
  title,
  children,
  Headerchildren,
  description,
}: FormT) {
  return (
    <Card className="w-full max-w-110 bg-black/20 shadow-[0_0_35px_5px] shadow-purple-300/30 backdrop-blur-3xl">
      <CardContent className="flex h-120 w-full flex-col gap-4">
        <CardHeader className="m-0 w-full items-center justify-center gap-0">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center justify-center">
              {Headerchildren}
            </div>
            <div className="flex flex-col items-center">
              <Label className="my-2 text-center text-2xl font-semibold text-white">
                {title}
              </Label>
              <Label className="text-center font-thin">{description}</Label>
            </div>
          </div>
        </CardHeader>
        {children}
      </CardContent>
    </Card>
  )
}
