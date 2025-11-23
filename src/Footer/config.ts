import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
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
      maxRows: 3,
      fields: [
        
        
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
         
        },
        {
          name: 'links',
          type: 'array',
          minRows: 2,
          fields: [link({appearances: false})],
          
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
