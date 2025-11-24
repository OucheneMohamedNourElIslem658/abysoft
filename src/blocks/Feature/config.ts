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
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'paragraph',
      type: 'richText',
      localized: true,
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
    {
      name: 'hasButton',
      type: 'checkbox',
      label: 'Add a button?',
      defaultValue: false,
    },
    // Button / Link
    {
      name: 'button',
      type: 'group',
      required: false,
      admin: {
        // Show only when hasButton is true
        condition: (_, value) => Boolean(value.hasButton),
        description: 'Add a button or link for this section',
      },
      fields: [link()],
    },

    // Background color
    {
      name: 'bgColor',
      type: 'select',
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Green', value: 'green' },
        { label: 'Purple', value: 'purple' },
        { label: 'Gray', value: 'gray' },
        { label: 'Transparent', value: 'transparent' },
      ],
      defaultValue: 'transparent',
    },
    
  ],
}
