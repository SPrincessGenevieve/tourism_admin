"use client"

import React, { useState } from "react"
import CardContainer from "../CardContainer"
import { FieldContent, FieldGroup, FieldLabel } from "../ui/field"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../ui/combobox"
import phil from "phil-reg-prov-mun-brgy"

type city = {
  mun_code: string
  name: string
  prov_code: string
}

type prov = {
  name: string
  prov_code: string
  reg_code: string
}

type optionT = {
  label: string
  value: string
}

export default function LocationCard() {
  // ✅ pagination state
  const [provLimit, setProvLimit] = useState(10)
  const [cityLimit, setCityLimit] = useState(10)
  const [provQuery, setProvQuery] = useState("")
  const [cityQuery, setCityQuery] = useState("")

  const provOptions: optionT[] = phil.provinces
    .map((p: prov) => ({
      label: p.name,
      value: p.prov_code,
    }))
    .sort((a: any, b: any) => a.label.localeCompare(b.label))

  const cityOptions: optionT[] = phil.city_mun
    .map((p: city) => ({
      label: p.name,
      value: p.mun_code, // ✅ FIXED (was wrong before)
    }))
    .sort((a: any, b: any) => a.label.localeCompare(b.label))

  const filteredProv = provOptions.filter((item) =>
    item.label.toLowerCase().includes(provQuery.toLowerCase())
  )
  const filteredCity = cityOptions.filter((item) =>
    item.label.toLowerCase().includes(cityQuery.toLowerCase())
  )

  return (
    <CardContainer title="LOCATION">
      <div className="flex w-full gap-4">
        {/* PROVINCE */}
        <FieldGroup>
          <FieldContent>
            <FieldLabel>Province</FieldLabel>

            <Combobox items={provOptions}>
              <ComboboxInput
                className="rounded-xl"
                placeholder="Select a province"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setProvQuery(e.target.value)
                }
              />

              <ComboboxContent>
                <ComboboxEmpty>No items found.</ComboboxEmpty>

                <ComboboxList>
                  {filteredProv.slice(0, provLimit).map((item, i) => (
                    <ComboboxItem key={i} value={item.label}>
                      {item.label}
                    </ComboboxItem>
                  ))}

                  {/* LOAD MORE */}
                  {provLimit < provOptions.length && (
                    <div
                      onMouseDown={(e) => {
                        e.preventDefault() // prevent closing dropdown
                        setProvLimit((prev) => prev + 10)
                      }}
                      className="cursor-pointer px-3 py-2 text-center text-sm text-blue-500 hover:bg-gray-100"
                    >
                      Load more
                    </div>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </FieldContent>
        </FieldGroup>

        {/* CITY */}
        <FieldGroup>
          <FieldContent>
            <FieldLabel>City</FieldLabel>

            <Combobox items={cityOptions}>
              <ComboboxInput
                className="rounded-xl"
                placeholder="Select a city"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCityQuery(e.target.value)
                }
              />

              <ComboboxContent>
                <ComboboxEmpty>No items found.</ComboboxEmpty>

                <ComboboxList>
                  {filteredCity.slice(0, cityLimit).map((item, i) => (
                    <ComboboxItem key={i} value={item.label}>
                      {item.label}
                    </ComboboxItem>
                  ))}
                  {/* LOAD MORE */}
                  {cityLimit < cityOptions.length && (
                    <div
                      onMouseDown={(e) => {
                        e.preventDefault()
                        setCityLimit((prev) => prev + 10)
                      }}
                      className="cursor-pointer px-3 py-2 text-center text-sm text-blue-500 hover:bg-gray-100"
                    >
                      Load more
                    </div>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </FieldContent>
        </FieldGroup>
      </div>
    </CardContainer>
  )
}
