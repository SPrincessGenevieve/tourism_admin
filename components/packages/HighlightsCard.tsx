import React from "react"
import CardContainer from "../CardContainer"
import { IconCloudUpload, IconUpload } from "@tabler/icons-react"
import { Label } from "../ui/label"

export default function HighlightsCard() {
  return (
    <CardContainer title="GALLERY HIGHLIGHTS">
      <div className="mt-2 w-full">
        <div className="flex h-50 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-200 transition duration-100 ease-in-out hover:bg-blue-100/10">
          <div className="rounded-full bg-blue-400/20 p-4">
            <IconCloudUpload
              className="text-blue-400"
              size={40}
            ></IconCloudUpload>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Label className="text-center text-[16px]">
              Upload multiple images
            </Label>
            <Label className="text-center text-[12px] font-normal text-gray-400">
              SVG, PNG, JPG or GIF (max, 10MB)
            </Label>
          </div>
        </div>
      </div>
    </CardContainer>
  )
}
