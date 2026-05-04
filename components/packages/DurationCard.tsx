"use client"

import React, { useState } from "react"
import CardContainer from "../CardContainer"
import { Label } from "../ui/label"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import {
  IconBrightness2,
  IconMinus,
  IconMoon,
  IconPlus,
} from "@tabler/icons-react"
import { Button } from "../ui/button"

export default function DurationCard() {
  const [duration, setDuration] = useState<{ days: number; nights: number }>({
    days: 1,
    nights: 1,
  })
  return (
    <CardContainer title="DURATION">
      <div className="flex w-full items-center gap-2">
        <div className="flex w-full items-end gap-2">
          <Button
            disabled={duration.days < 2 ? true : false}
            onClick={() =>
              setDuration({
                days: duration.days - 1,
                nights: duration.nights,
              })
            }
          >
            <IconMinus></IconMinus>
          </Button>
          <div className="flex w-full flex-col gap-4">
            <Label className="">Days</Label>
            <InputGroup>
              <InputGroupInput
                type="number"
                min={1}
                value={duration.days}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDuration((prev) => ({
                    ...prev,
                    days: Number(e.target.value),
                  }))
                }
              ></InputGroupInput>
              <InputGroupAddon>
                <IconBrightness2></IconBrightness2>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <Button
            onClick={() =>
              setDuration({
                days: duration.days + 1,
                nights: duration.nights,
              })
            }
          >
            <IconPlus></IconPlus>
          </Button>
        </div>
        <div className="flex w-full items-end gap-2">
          <Button
            disabled={duration.nights < 2 ? true : false}
            onClick={() =>
              setDuration({
                days: duration.days,
                nights: duration.nights - 1,
              })
            }
          >
            <IconMinus></IconMinus>
          </Button>
          <div className="flex w-full flex-col gap-4">
            <Label className="">Nights</Label>
            <InputGroup>
              <InputGroupInput
                type="number"
                min={1}
                value={duration.nights}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDuration((prev) => ({
                    ...prev,
                    nights: Number(e.target.value),
                  }))
                }
              ></InputGroupInput>
              <InputGroupAddon>
                <IconMoon></IconMoon>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <Button
            onClick={() =>
              setDuration({
                days: duration.days,
                nights: duration.nights + 1,
              })
            }
          >
            <IconPlus></IconPlus>
          </Button>
        </div>
      </div>
    </CardContainer>
  )
}
