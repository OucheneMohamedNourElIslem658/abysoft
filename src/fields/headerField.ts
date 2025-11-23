import { Field } from "payload";

export const headerField: Field = {
  name: "header",
  type: "group",
  label: "Header",
  fields: [
    {
      name: "span",
      type: "group",
      required: true,
      
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Text",
          localized: true,
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
      name: "title",
      type: "text",
      localized: true,
      label: "Section Title",
      required: true,
    },
    
  ],
}
