"use client"

import { Stepper, useStepper } from "@/hooks/user-stepper"
import { cn } from "@/utilities/ui"
import React from "react"

export function SymmetricStepperItem({
  step,
  leftLabel,
  rightLabel,
  leftIcon,
  rightIcon,
  completed = false,
  disabled = false,
}: {
  step: number
  leftLabel: string
  rightLabel: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  completed?: boolean
  disabled?: boolean
}) {
  const { activeStep, setActiveStep } = useStepper()
  const isActive = activeStep === step
  const isCompleted = completed || step < activeStep

  return (
    <div
      className={cn(
        "group flex items-center gap-4 px-4 py-6 cursor-pointer transition-all duration-200",
        "hover:bg-muted/30 rounded-lg",
        isActive && "bg-accent/10 border-l-4 border-secondary",
        isCompleted && "opacity-75",
      )}
      onClick={() => !disabled && setActiveStep(step)}
    >
      {/* Left Column */}
      <div className="flex-1 flex items-center gap-3">
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full shrink-0 font-semibold text-sm",
            isCompleted
              ? "bg-success text-success-foreground"
              : isActive
                ? "bg-secondary text-secondary-foreground"
                : "bg-muted text-muted-foreground",
          )}
        >
          {isCompleted ? leftIcon || "✓" : isActive ? step : step}
        </div>
        <span className={cn("text-sm font-medium", isActive && "text-secondary")}>{leftLabel}</span>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-8 bg-border" />

      {/* Right Column */}
      <div className="flex-1 flex items-center gap-3">
        <span className={cn("text-sm text-muted-foreground flex-1 text-right md:text-left")}>{rightLabel}</span>
        <div
          className={cn(
            "flex items-center justify-center w-6 h-6 rounded-full shrink-0 text-xs",
            "text-muted-foreground",
          )}
        >
          {rightIcon || "✗"}
        </div>
      </div>
    </div>
  )
}

export function SymmetricStepper({
  items,
  value,
  onValueChange,
}: {
  items: Array<{
    step: number
    leftLabel: string
    rightLabel: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
  }>
  value?: number
  onValueChange?: (value: number) => void
}) {
  const [activeStep, setActiveStep] = React.useState(value || 1)

  const handleSetActiveStep = React.useCallback(
    (step: number) => {
      setActiveStep(step)
      onValueChange?.(step)
    },
    [onValueChange],
  )

  const contextValue = {
    activeStep: value ?? activeStep,
    setActiveStep: handleSetActiveStep,
    stepsCount: items.length,
    orientation: "vertical" as const,
    registerTrigger: () => {},
    triggerNodes: [],
    focusNext: () => {},
    focusPrev: () => {},
    focusFirst: () => {},
    focusLast: () => {},
    indicators: {},
  }

  return (
    <Stepper>
    <div className="w-full space-y-2">
      {items.map((item) => (
        <SymmetricStepperItem
          key={item.step}
          step={item.step}
          leftLabel={item.leftLabel}
          rightLabel={item.rightLabel}
          leftIcon={item.leftIcon}
          rightIcon={item.rightIcon}
        />
      ))}
    </div>
    </Stepper>
  )
}
