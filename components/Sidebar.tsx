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
import { useRouter } from "next/navigation"

const pages = [
  {
    label: "Dashboard",
    icon: IconDashboard,
    href: "/dashboard",
  },
  {
    label: "Packages",
    icon: IconBox,
    href: "/packages",
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
  const [width, setWidth] = useState(250)
  const router = useRouter()

  useEffect(() => {
    setWidth(open ? 250 : 48)
  }, [open])

  const handleNav = (href: string) => {
    router.push(href)
  }

  return (
    <motion.div
      style={{
        minWidth: open ? 250 : 50,
      }}
      animate={{
        width: open ? 250 : 50,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
      }}
      className={`relative max-h-screen bg-transparent transition duration-500 ease-in-out`}
    >
      <motion.div
        animate={open ? { width: width } : { width: width }}
        transition={
          open
            ? { type: "spring", stiffness: 50, bounce: 0.5 }
            : { type: "tween", duration: 0.5, ease: "easeInOut" }
        }
        className="fixed left-0 z-40 h-full bg-primary-blue-400"
      >
        <Button
          onClick={() => setOpen(!open)}
          className="absolute top-1.5 -right-12 z-50"
        >
          <IconLayoutSidebar></IconLayoutSidebar>
        </Button>

        <div className="h-full overflow-hidden">
          <div className="flex gap-4 border-b border-white/20 p-2.5">
            <div>
              <IconShoe size={30}></IconShoe>
            </div>
            <Label className="text-xl font-semibold text-white">Travlr</Label>
          </div>
          {pages.map((item, i) => (
            <div
              onClick={() => handleNav(item.href)}
              key={i}
              className="flex h-10 w-full items-center justify-start gap-4 overflow-hidden rounded-none bg-transparent p-2.5 text-white transition duration-300 ease-in-out hover:bg-white/30"
            >
              <div>
                <item.icon className=""></item.icon>
              </div>
              <div className="min-w-50">
                <Label className="text-white">{item.label}</Label>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant={"ghost"}
          className="absolute bottom-0 flex w-full justify-start gap-4 rounded-none"
        >
          <IconLogout2 className="text-red-500"></IconLogout2>
          <Label className="text-white">Logout</Label>
        </Button>
      </motion.div>
    </motion.div>
  )
}
