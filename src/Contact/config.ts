import type { GlobalConfig } from 'payload'


export const Contact: GlobalConfig = {
  slug: 'contact',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },

  
    {
      name: 'address',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'timework',
      type: 'text',
      required: true,
      localized: true,
    }
    // {

    // }
   
  ]
}
