import type { Block } from 'payload'
import { link } from '@/fields/link'
import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor, OrderedListFeature, UnorderedListFeature } from '@payloadcms/richtext-lexical'

export const Section: Block = {
  slug: 'section',
  labels: {
    singular: 'Section',
    plural: 'Sections',
  },
  fields: [
    
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    

    {
      name: 'direction',
      type: 'radio',
      options: [
        { label: 'Left to Right', value: 'ltr' },
        { label: 'Right to Left', value: 'rtl' },
      ],
      defaultValue: 'ltr',
      admin: {
        layout: 'horizontal',
      },
    },

    // Text content
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraph',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h5', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            OrderedListFeature(),
            UnorderedListFeature(),
          ]
        },
      }),
      required: true,
      
    },

    // Button / Link
    {
      name: 'button',
      type: 'group',
      fields: [link()],
      admin: {
        description: 'Add a button or link for this section',
      },
    },

    // Background color
    {
      name: 'bgColor',
      type: 'select',
      options: [
        { label: 'White', value: 'white' },
        { label: 'Light Gray', value: 'light-gray' },
        { label: 'Dark', value: 'dark' },
        { label: 'Primary', value: 'primary' },
        { label: 'Custom', value: 'custom' },
      ],
      defaultValue: 'white',
    },
    
  ],
}
