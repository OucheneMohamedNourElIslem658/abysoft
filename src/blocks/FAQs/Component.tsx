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

      <div className="container grid grid-cols-1 md:grid-cols-2">

        {header && <HeaderField header={header} />}

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, index) => 
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors font-geist-mono data-[state=open]:text-primary text-start">
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
