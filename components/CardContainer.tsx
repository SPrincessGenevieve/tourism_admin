import React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import Overview from "@/components/packages/Overview"

type CardContT = {
  title: string
  children?: React.ReactNode
}

export default function ({ title, children }: CardContT) {
  return (
    <Card className="border border-gray-300 p-0 shadow-none">
      <CardContent className="p-0 pb-4 shadow-none">
        <div className="border-b border-gray-300 bg-gray-50/70 p-4">
          <Label className="text-[14px] text-purple-700">{title}</Label>
        </div>
        <div className="flex w-full gap-2 p-4">{children}</div>
      </CardContent>
    </Card>
  )
}
