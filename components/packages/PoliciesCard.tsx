"use client"

import React, { useState } from "react"
import CardContainer from "../CardContainer"
import { Label } from "../ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Input } from "../ui/input"

const policy = [
  {
    label: "Flexible Free (Free Cancellations 48 hours before)",
    id: 1,
  },
  {
    label: "Moderate (Free Cancellations 7 days before)",
    id: 2,
  },
  {
    label: "Strict (No Refunds)",
    id: 3,
  },
]

export default function PoliciesCard() {
  const [rule, setRule] = useState<{ label: string; id: number }>({
    label: "",
    id: 0,
  })

  return (
    <CardContainer title="POLICIES">
      <div className="w-full">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full rounded-2xl">
            <div className="flex h-10 items-center rounded-xl border border-gray-200 p-2">
              <Label>{rule.label}</Label>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {policy.map((item, i) => (
              <DropdownMenuItem
                onClick={() => setRule({ label: item.label, id: item.id })}
                key={item.id}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </CardContainer>
  )
}
