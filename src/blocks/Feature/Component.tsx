"use client"

import { cn } from "@/utilities/ui"
import React from "react"
import { Button } from "@/components/ui/button"

export interface FeatureItem {
  title: string
  description: string
}

export interface FeatureSectionProps {
  label?: string
  title: string
  description: string
  features: FeatureItem[]
  buttonText?: string
  buttonLink?: string
  image: React.ReactNode | string
  direction?: "forward" | "reverse"
  className?: string
}

export default function FeatureComponent(
    {
      label,
      title,
      description,
      features,
      buttonText = "Learn More",
      buttonLink = "#",
      image,
      direction = "forward",
      className,
    } : FeatureSectionProps
) {
    const isReverse = direction === "reverse"
    const imageNode =
      typeof image === "string" ? (
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover rounded-lg" />
      ) : (
        image
      )
  return (
    <section className="py-16 bg-muted/30">
      <div className={"container"}>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto"
          )}
        >
          {/* Content Section */}
          <div className={cn("flex flex-col gap-6 items-start", isReverse && "md:order-2")}>
            {label && (
              <span className="text-sm font-semibold text-firebase-blue tracking-widest uppercase">{label}</span>
            )}

            <h2 className="text-4xl md:text-5xl font-bold text-gray-20 leading-tight">{title}</h2>

            <p className="text-gray-500 text-lg leading-relaxed">{description}</p>

            {/* Features List */}
            <ul>
              {features.map((feature, index) => (
            <li key={index} className="flex gap-4">
              <span className="text-firebase-blue font-bold text-xl flex-shrink-0">•</span>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-firebase-blue text-base">{feature.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </li>
              ))}
            </ul>

            {buttonText && (
            <Button
              variant="outline"
              onClick={() => {}}
              className="w-full md:w-auto tracking-widest"
            >
              {buttonText}
            </Button>
            )}
          </div>

          {/* Image Section */}
          <div className={cn("w-full h-96 md:h-full rounded-3xl overflow-hidden shadow-lg", isReverse && "md:order-1")}>
            {imageNode}
          </div>
        </div>
      </div>
    </section>
  )
}