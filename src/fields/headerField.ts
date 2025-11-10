import { Field } from "payload";

export const headerField: Field = {
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
    
  ],
}
