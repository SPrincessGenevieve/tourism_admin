import React from "react"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { IconLine } from "@tabler/icons-react"
import Overview from "@/components/packages/Overview"
import CardContainer from "../CardContainer"

export default function () {
  return (
    <CardContainer title="BASIC INFORMATION">
      <div className="w-full">
        <div className="flex gap-2 p-4">
          <Input variant="light" label="Package Name *"></Input>
          <div className="flex w-full flex-col gap-4">
            <Label className="text-gray-400">Slug *</Label>
            <InputGroup>
              <InputGroupInput disabled></InputGroupInput>
              <InputGroupAddon>
                <IconLine></IconLine>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
        <Overview></Overview>
      </div>
    </CardContainer>
  )
}
