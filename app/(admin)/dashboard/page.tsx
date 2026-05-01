import { Label } from "@/components/ui/label"
import { IconBarrierBlock } from "@tabler/icons-react"
import React from "react"

export default function DashboardPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 py-40">
      <IconBarrierBlock
        className="text-yellow-500"
        size={200}
        strokeWidth={1}
      ></IconBarrierBlock>
      <div className="flex w-full flex-col items-center justify-center">
        <Label className="text-center text-4xl font-bold text-black">
          Coming Soon
        </Label>
        <Label className="text-center text-black">
          This page is under construction
        </Label>
      </div>
    </div>
  )
}
