// @/components/ui/sonner.tsx
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import {
  IconCircleCheck,
  IconInfoCircle,
  IconAlertTriangle,
  IconAlertOctagon,
  IconLoader,
} from "@tabler/icons-react"
import { cn } from "@/lib/utils" // Import your utility

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position="bottom-right"
      // richColors must be true for Sonner to apply type-based classes properly
      richColors={true}
      toastOptions={{
        classNames: {
          // Note: Removed 'border' from base toast to let type-specific borders handle it
          toast:
            "group rounded-xl shadow-lg px-4 py-3 backdrop-blur-sm flex items-center gap-3",
          title: "font-semibold text-sm",
          description: "text-sm opacity-90",
          // Adding '!' (important) ensures Tailwind overrides Sonner's internal CSS variables
          success: "!bg-green-600/50 !border-green-600 !text-green-400",
          error: "!bg-red-600/50 !border-red-600 !text-red-300",
          warning: "!bg-yellow-500/50 !border-yellow-500 !text-yellow-400",
          info: "!bg-blue-600/50 !border-blue-600 !text-blue-100",
          loading: "!bg-zinc-800/50 !border-zinc-700 !text-white",
        },
      }}
      icons={{
        // Match icon color to the text for a cleaner look
        success: <IconCircleCheck className="size-5 text-green-400" />,
        info: <IconInfoCircle className="size-5 text-blue-100" />,
        warning: <IconAlertTriangle className="size-5 text-yellow-400" />,
        error: <IconAlertOctagon className="size-5 text-red-300" />,
        loading: <IconLoader className="size-5 animate-spin text-white" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
