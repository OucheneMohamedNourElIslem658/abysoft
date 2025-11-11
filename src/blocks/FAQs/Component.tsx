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
              <AccordionTrigger className="font-geist-mono text-secondary text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <RichText data={faq.answer} enableGutter={false}/>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </section>
  )
}
