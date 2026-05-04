"use client"

import React, { useState } from "react"
import CardContainer from "../CardContainer"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { Toggle } from "../ui/toggle"
import { Switch } from "../ui/switch"

export default function PackageSettingsCard() {
  const [type, setType] = useState("joiner")

  return (
    <CardContainer title="PACKAGE SETTINGS">
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Label>Package Type *</Label>
          <div className="flex w-full">
            <Button
              onClick={() => setType("joiner")}
              className={`w-1/2 rounded-r-none border-none ${type === "joiner" ? "bg-primary-blue-400 text-white hover:bg-primary-blue-400/70" : ""}`}
            >
              Joiner
            </Button>
            <Button
              onClick={() => setType("private")}
              className={`w-1/2 rounded-l-none border-none ${type === "private" ? "bg-primary-blue-400 text-white hover:bg-primary-blue-400/70" : ""}`}
            >
              Private
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-gray-100 p-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="active-status">Active Status *</Label>
            <Label htmlFor="active-status" className="text-sm font-normal">
              Package is visible to customers
            </Label>
          </div>
          <div>
            <Switch id="active-status" />
          </div>
        </div>
      </div>
    </CardContainer>
  )
}
