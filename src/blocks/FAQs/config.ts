import { headerField } from "@/fields/headerField";
import { 
  FixedToolbarFeature, 
  HeadingFeature, 
  InlineToolbarFeature, 
  lexicalEditor 
} from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const Faqs: Block = {
  slug: "faqs",
  interfaceName: "FaqsBlock",
  fields: [
    headerField,
    {
      name: "faqs",
      type: "array",
      label: "FAQs",
      minRows: 1,
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
          label: "Question",
          localized: true,
        },
        {
          name: "answer",
          type: "richText",
          required: true,
          label: "Answer",
          localized: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
        }
      ]
    }
  ],
}