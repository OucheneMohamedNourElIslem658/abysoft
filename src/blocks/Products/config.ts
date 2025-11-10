import type { Block } from 'payload'
import { Section } from '../Feature/config'
import { Faqs } from '../FAQs/config'
import { headerField } from '@/fields/headerField'

export const Tabs: Block = {
  slug: 'tabs',
  labels: {
    singular: 'Tabs',
    plural: 'Tabs',
  },
  fields: [
    headerField,
    {
      name: 'tabs',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'contentType',
          type: 'radio',
          options: [
            { label: 'Rich Text', value: 'richText' },
            { label: 'Custom Blocks', value: 'blocks' },
          ],
          defaultValue: 'richText',
          admin: {
            layout: 'horizontal',
          },
        },
        // Rich Text content
        {
          name: 'richTextContent',
          type: 'richText',
          required: false,
         
          admin: {
            condition: (_, value) => value?.contentType === 'richText',
          },
        },
        // Blocks content
        {
          name: 'blocksContent',
          type: 'blocks',
          blocks: [Section, Faqs], // add your custom blocks here e.g., Section, Image, etc.
          minRows: 1,
          admin: {
            condition: (_, value) => value?.contentType === 'blocks',
          },
        },
      ],
    },
  ],
}
