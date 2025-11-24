import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    
    {
      name: 'navigation',
      type: 'array',
      required: true,
      maxRows: 6,
      fields: [
        {
          name: 'type',
          type: 'radio',
          options: [
            { label: 'Simple Link', value: 'link' },
            { label: 'Dropdown', value: 'dropdown' },
          ],
          defaultValue: 'link',
          admin: {
            layout: 'horizontal',
          },
        },
        
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
          admin: {
            condition: (data, value) => value?.type === 'dropdown',
          },
        },
        {
          name: 'links',
          type: 'array',
          minRows: 1,
          admin: {
            condition: (data) => !data?.type,
          },
          fields: [link({appearances: false})],
          
        },
      ],
      
    }
  ],



  hooks: {
    afterChange: [revalidateHeader],
  },
}
