"use client"

import DurationCard from "@/components/packages/DurationCard"
import GeneralCard from "@/components/packages/GeneralCard"
import LocationCard from "@/components/packages/LocationCard"
import PackageSettingsCard from "@/components/packages/PackageSettingsCard"
import PricingCard from "@/components/packages/PricingCard"
import StatusCard from "@/components/packages/PoliciesCard"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { IconPlus } from "@tabler/icons-react"
import Link from "next/link"
import React from "react"
import PoliciesCard from "@/components/packages/PoliciesCard"
import ThumbnailCard from "@/components/packages/ThumbnailCard"
import HighlightsCard from "@/components/packages/HighlightsCard"

export default function PackagePage() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Link className="text-sm text-black" href={""}>
            Packages
          </Link>
          <Label className="text-sm">/</Label>
          <Link className="text-sm text-black" href={""}>
            Create Package
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={"action"}
            className="bg-blue-200 text-blue-950 focus:text-white"
          >
            Draft
          </Button>
          <Button variant={"action"}>
            <IconPlus></IconPlus>Create Package
          </Button>
        </div>
      </div>
      <div className="relative flex gap-4">
        <div className="flex w-full flex-col gap-4">
          <GeneralCard></GeneralCard>
          <DurationCard></DurationCard>
          <LocationCard></LocationCard>
          <ThumbnailCard></ThumbnailCard>
          <HighlightsCard></HighlightsCard>
        </div>
        <div className="flex min-w-100 flex-col gap-4">
          <PricingCard></PricingCard>
          <PackageSettingsCard></PackageSettingsCard>
          <PoliciesCard></PoliciesCard>
        </div>
      </div>
    </div>
  )
}
