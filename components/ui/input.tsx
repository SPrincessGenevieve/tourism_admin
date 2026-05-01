"use client"

import * as React from "react"
import { IconEye, IconEyeOff } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { Field, FieldDescription, FieldLabel } from "./field"

interface InputProps extends React.ComponentProps<"input"> {
  label?: string
  labelClassname?: string
  description?: string
}

function Input({
  className,
  type,
  label,
  description,
  id,
  labelClassname,
  ...props
}: InputProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const inputId = id || React.useId()

  const isPassword = type === "password"

  // Determine the actual type to pass to the HTML input
  const resolvedType = isPassword ? (isVisible ? "text" : "password") : type

  const toggleVisibility = () => setIsVisible((prev) => !prev)

  return (
    <Field>
      {label && (
        <FieldLabel className={`${labelClassname}`} htmlFor={inputId}>
          {label}
        </FieldLabel>
      )}

      <div className="relative">
        <input
          id={inputId}
          type={resolvedType}
          data-slot="input"
          className={cn(
            `h-9 w-full min-w-0 rounded-3xl border border-transparent bg-input/50 px-3 py-1 text-base transition-[color,box-shadow,background-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40`,
            isPassword && "pr-10", // Add padding so text doesn't overlap the icon
            className
          )}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
            aria-label={isVisible ? "Hide password" : "Show password"}
          >
            {isVisible ? (
              <IconEyeOff className="size-4" />
            ) : (
              <IconEye className="size-4" />
            )}
          </button>
        )}
      </div>

      {description && <FieldDescription>{description}</FieldDescription>}
    </Field>
  )
}

export { Input }
