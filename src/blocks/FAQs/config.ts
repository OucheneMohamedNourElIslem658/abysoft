import { 
  FixedToolbarFeature, 
  HeadingFeature, 
  InlineToolbarFeature, 
  lexicalEditor 
} from "@payloadcms/richtext-lexical";
import { Block, Field } from "payload";

const headerBlock: Field = {
  name: "header",
  type: "group",
  label: "Header",
  fields: [
    {
      name: "span",
      type: "blocks",
      label: "Span",
      required: false,
      maxRows: 1,
      admin: {
        description: "Optional text to appear above the title",
      },
      blocks: [
        {

          slug: "highlight",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
              label: "Text",
            }, 
            {
              name: "apperance",
              type: "select",
              required: true,
              label: "Apperance",
              options: ["blue", "red", "green", "yellow", "purple"],
            }
          ]
        },
        {
          slug: "relation",
          fields: [
            {
              name: "relation",
              type: "relationship",
              required: true,
              label: "Relation",
              hasMany: true,
              relationTo: ["categories", "users"],
            }
          ]
        }
      ]

    },
    {
      name: "title",
      type: "text",
      label: "Section Title",
      required: true,
    },
    // {
    //   name: "description",
    //   type: "text",
    //   label: "Description",
    //   required: true,
    // }
  ],
}

export const Faqs: Block = {
  slug: "faqs",
  interfaceName: "FaqsBlock",
  fields: [
    headerBlock,
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
        },
        {
          name: "answer",
          type: "richText",
          required: true,
          label: "Answer",
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