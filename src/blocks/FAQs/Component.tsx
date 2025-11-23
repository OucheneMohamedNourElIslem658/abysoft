import RichText from "@/components/RichText"
import { FaqsBlock as FaqsBlockProps } from "@/payload-types"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import HeaderField from "@/components/HeaderField"



export const FaqsBlock: React.FC<FaqsBlockProps> = ({ faqs, header }) => {
  // console.log('faqs--------', header)
  if (!faqs || faqs.length === 0) return null
  return (
    <section className="py-16 bg-muted/30">

      <div className="container grid grid-cols-1 md:grid-cols-3">

        {header && <HeaderField header={header} />}

        <Accordion type="single" collapsible className="mt-10 bg-muted/90 rounded-2xl col-span-2  px-3">
          {faqs.map((faq, index) => 
            <AccordionItem className="px-3 py-2 border-b-2 border-border last-of-type:border-0" key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl transition-colors data-[state=open]:text-primary text-start !border-b-0">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pt-2">
                <RichText data={faq.answer} enableGutter={false}/>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </section>
  )
}
