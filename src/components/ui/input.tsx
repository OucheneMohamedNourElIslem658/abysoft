'use client'

import * as React from 'react'
import { cn } from '@/utilities/ui'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "w-full px-4 py-2 rounded-2xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export { Input }
