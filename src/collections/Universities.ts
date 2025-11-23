// src/collections/Testimonials.ts
import { CollectionConfig } from 'payload'

export const Universities: CollectionConfig = {
  slug: 'universities',
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: 'University',
    plural: 'Universities',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,

    },
    {
      name: 'studentsNumber',
      label: 'Number of Students',
      type: 'text',
      // required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
