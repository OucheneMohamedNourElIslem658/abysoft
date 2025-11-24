"use client"

import { cn } from "@/utilities/ui"
import React from "react"
// import { Button } from "@/components/ui/button"
import { FeatureBlock as FeatureBlockProps } from "@/payload-types"
import { CMSLink } from "@/components/Link"
import { Media } from "@/components/Media"
import RichText from "@/components/RichText"
export interface FeatureItem {
  title: string
  description: string
}

const colorMap: Record<string, string> = {
  red: "bg-red-500/10",
  blue: "bg-blue-500/10",
  green: "bg-green-500/10",
  yellow: "bg-yellow-500/10 ",
  purple: "bg-purple-500/10 ",
  gray: "bg-gray-500/10 ",
  transparent: "bg-transparent",
};


export const FeatureBlock: React.FC<FeatureBlockProps> = (section) => {
  // console.log('cl', section)
  const isReverse = section.direction === "rtl"
  
  return (
    <section className={cn("py-16", colorMap[section.bgColor] || "bg-transparent")}>
      <div className={"container"}>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto"
          )}
        >

          <div className={cn("flex flex-col gap-6 items-start", isReverse && "md:order-2")}>
            {section.label && (
              <span className="text-sm font-semibold text-firebase-blue tracking-widest uppercase">{section.label}</span>
            )}

            <h2 className="text-4xl md:text-5xl font-bold text-gray-20 leading-tight">{section.title}</h2>
            <RichText data={section.paragraph} enableGutter={false} />
            <CMSLink {...section.button.link} />
          </div>

          <div className={cn("w-full h-96 md:h-full rounded-3xl overflow-hidden shadow-lg", isReverse && "md:order-1")}>
            <Media className="w-full h-full" imgClassName="w-full h-full object-cover" resource={section.image} />
          </div>
        </div>
      </div>
    </section>
  )
}