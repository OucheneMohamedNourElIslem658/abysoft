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
    // {

    // }
   
  ]
}
