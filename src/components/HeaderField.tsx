import clsx from "clsx"
const colorMap: Record<string, string> = {
  red: "bg-red-100 text-red-800",
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  yellow: "bg-yellow-100 text-yellow-800",
  purple: "bg-purple-100 text-purple-800",
};

import { FaqsBlock as FaqsBlockProps } from "@/payload-types"

export default function HeaderField({header, className}: {header: FaqsBlockProps['header'], className?: string}) {
  return (
    <div className={clsx("head relative", className)}>
      <div className="sticky top-10 left-0">
        
        
        <div
        className={clsx(
            "rounded-full py-1 px-3 w-fit mb-5 text-sm font-semibold",
            colorMap[header.span.apperance] ?? "bg-gray-100 text-gray-800"
          )} 
        >
          {header.span.text}
        </div>
         
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-2xl">{header.title}</h1>
      </div>
    </div>
  )
}
