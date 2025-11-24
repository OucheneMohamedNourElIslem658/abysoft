// src/blocks/TestimonialBlock.ts
import { headerField } from '@/fields/headerField'
import { Block } from 'payload'

export const University: Block = {
  slug: 'university',
  interfaceName: 'UniversityBlock',
  
  fields: [
    headerField,
    {
      name: 'universities',
      label: 'Universities',
      relationTo: 'universities',
      // maxDepth: 2,
      // depth: 1,
      type: 'relationship',
      hasMany: true,
    },
  ],
}
