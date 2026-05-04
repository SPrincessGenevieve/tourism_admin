import React from "react"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { IconBell, IconChevronDown } from "@tabler/icons-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export default function Header() {
  return (
    <div className="fixed top-0 right-0 z-30 flex h-13 w-full items-center justify-end border-b-2 border-gray-100 bg-white p-2">
      <div className="flex items-center gap-2">
        <Button className="mr-2 h-8.5 w-8.5">
          <IconBell></IconBell>
        </Button>
        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
          <Avatar>
            <AvatarImage></AvatarImage>
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Label className="">Hi, John</Label>
        </div>
      </div>
    </div>
  )
}
