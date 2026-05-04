import React from "react"
import CardContainer from "../CardContainer"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group"
import { IconCurrencyPeso, IconPercentage } from "@tabler/icons-react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"

export default function PricingCard() {
  return (
    <CardContainer title="PRICING DETAILS">
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full flex-col gap-4 p-2">
          <Label>Base Price (₱) *</Label>
          <InputGroup>
            <InputGroupInput type="number"></InputGroupInput>
            <InputGroupAddon>
              <IconCurrencyPeso></IconCurrencyPeso>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <Input
          variant="light"
          type="number"
          label="Compare at Price (Optional)"
        ></Input>
        <Separator className="my-2"></Separator>
        <Input
          label="Max guest per tour *"
          type="number"
          variant="light"
        ></Input>
        <Separator className="my-2"></Separator>
        <div className="flex w-full flex-col gap-4 p-2">
          <Label>Deposit Percentage *</Label>
          <InputGroup>
            <InputGroupInput type="number"></InputGroupInput>
            <InputGroupAddon>
              <IconPercentage></IconPercentage>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </CardContainer>
  )
}
