import RichText from "@/components/RichText"
import { FaqsBlock as FaqsBlockProps } from "@/payload-types"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import clsx from "clsx"

const colorMap: Record<string, string> = {
  red: "bg-red-100 text-red-800",
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  yellow: "bg-yellow-100 text-yellow-800",
  purple: "bg-purple-100 text-purple-800",
};

export const FaqsBlock: React.FC<FaqsBlockProps> = ({ faqs, header }) => {
  // console.log('faqs--------', header)
  if (!faqs || faqs.length === 0) return null
  return (
    <section className="py-16">

      <div className="container grid grid-cols-1 md:grid-cols-2">

        {header ? 
        
          <div className="head relative">
            <div className="sticky top-10 left-0">
              {header.span && 
              <>
                {header.span[0].blockType === 'highlight' 
                ? 
                  <div
                  className={clsx(
                      "rounded-full py-1 px-3 w-fit mb-5 text-sm font-semibold",
                      colorMap[header.span[0].apperance] ?? "bg-gray-100 text-gray-800"
                    )} 
                  >
                    {header.span[0].text}
                  </div>
                : 
                  <div className="bg-muted rounded-full px-2 border-border border-[1px] w-fit mb-5">
                    <div className="flex justify-center items-center">
                      {/* {summary.lastSigned.map((user: { name: string; img_url: string }) => (
                        <div title={user.name} key={user.name} className="user-img w-8">
                          <Image className="w-full h-full object-cover" src={user.img_url} alt="user" width={100} height={100} />
                        </div>
                      ))} */}
                      <div className="ml-3 font-semibold text-sm">
                        150+ <span className="text-muted-foreground"> satisfied clients</span>
                      </div>
                    </div>
                  </div>
                }
              </>
              }
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-2xl">{header.title}</h1>
            </div>
          </div>
        : null}

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, index) => 
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-geist-mono text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <RichText className="text-gray-500" data={faq.answer} enableGutter={false}/>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </section>
  )
}
