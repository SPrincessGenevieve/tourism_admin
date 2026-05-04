"use client"

import * as React from "react"
import { IconEye, IconEyeOff } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { Field, FieldDescription, FieldLabel } from "./field"

type InputVariant = "default" | "light"

interface InputProps extends React.ComponentProps<"input"> {
  label?: string
  labelClassname?: string
  description?: string
  variant?: InputVariant
}

function Input({
  className,
  type,
  label,
  description,
  id,
  labelClassname,
  variant = "default",
  ...props
}: InputProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const inputId = id || React.useId()

  const isPassword = type === "password"

  const resolvedType = isPassword ? (isVisible ? "text" : "password") : type

  const toggleVisibility = () => setIsVisible((prev) => !prev)

  // Base styles
  const baseStyles = `
    h-9 w-full min-w-0 rounded-3xl border px-3 py-1 text-base outline-none
    transition-[color,box-shadow,background-color]
    file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium
    placeholder:text-muted-foreground
    focus-visible:ring-3
    disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
    aria-invalid:ring-3
    md:text-sm
  `

  // Variants
  const variants: Record<InputVariant, string> = {
    default: `
      border-transparent bg-input/50 rounded-xl
      focus-visible:border-ring focus-visible:ring-ring/30
      aria-invalid:border-destructive aria-invalid:ring-destructive/20
      dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40
    `,
    light: `
      border-gray-300 bg-white text-black rounded-xl
      focus-visible:border-blue-500 focus-visible:ring-blue-200
      aria-invalid:border-red-500 aria-invalid:ring-red-200
    `,
  }

  return (
    <Field>
      {label && (
        <FieldLabel className={labelClassname} htmlFor={inputId}>
          {label}
        </FieldLabel>
      )}

      <div className="relative">
        <input
          id={inputId}
          type={resolvedType}
          data-slot="input"
          className={cn(
            baseStyles,
            variants[variant],
            isPassword && "pr-10",
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
