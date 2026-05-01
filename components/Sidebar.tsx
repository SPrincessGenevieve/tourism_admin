"use client"

import React, { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Button } from "./ui/button"
import {
  IconBookmarks,
  IconBox,
  IconCalendar,
  IconDashboard,
  IconLayoutSidebar,
  IconLogout2,
  IconPhoto,
  IconSettings,
  IconShoe,
} from "@tabler/icons-react"
import { Label } from "./ui/label"

const pages = [
  {
    label: "Dashboard",
    icon: IconDashboard,
    href: "",
  },
  {
    label: "Packages",
    icon: IconBox,
    href: "",
  },
  {
    label: "Schedules",
    icon: IconCalendar,
    href: "",
  },
  {
    label: "Bookings",
    icon: IconBookmarks,
    href: "",
  },
  {
    label: "Media Library",
    icon: IconPhoto,
    href: "",
  },
  {
    label: "Settings",
    icon: IconSettings,
    href: "",
  },
]

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const [width, setWidth] = useState(300)

  useEffect(() => {
    setWidth(open ? 300 : 45)
  }, [open])

  return (
    <motion.div
      animate={{ width: width }}
      transition={
        open
          ? { type: "spring", stiffness: 70, bounce: 0.5 }
          : { type: "tween", duration: 0.5, ease: "easeInOut" }
      }
      className="relative max-h-screen bg-transparent"
    >
      <Button
        onClick={() => setOpen(!open)}
        className="absolute top-2 -right-12"
      >
        <IconLayoutSidebar></IconLayoutSidebar>
      </Button>
      <motion.div
        animate={open ? { width: width - 50 } : { width: 45 }}
        transition={
          open
            ? { type: "spring", stiffness: 70, bounce: 0.5 }
            : { type: "tween", duration: 0.5, ease: "easeInOut" }
        }
        className="fixed left-0 z-40 h-full overflow-hidden bg-primary-blue-400"
      >
        <div className="flex gap-4 border-b border-white/20 p-2.5">
          <div>
            <IconShoe size={30}></IconShoe>
          </div>
          <Label className="text-xl font-semibold">Travlr</Label>
        </div>
        <div className="h-full">
          {pages.map((item, i) => (
            <div
              key={i}
              className="flex h-10 w-full items-center justify-start gap-4 overflow-hidden rounded-none bg-transparent p-2.5 text-white transition duration-300 ease-in-out hover:bg-white/30"
            >
              <div>
                <item.icon className=""></item.icon>
              </div>
              <div className="min-w-50">
                <Label>{item.label}</Label>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant={"ghost"}
          className="absolute bottom-0 flex w-full justify-start gap-4 rounded-none"
        >
          <IconLogout2 className="text-red-500"></IconLogout2>
          <Label>Logout</Label>
        </Button>
      </motion.div>
    </motion.div>
  )
}
