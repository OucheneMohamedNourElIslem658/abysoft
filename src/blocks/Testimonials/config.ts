// src/blocks/TestimonialBlock.ts
import { headerField } from '@/fields/headerField'
import { Block } from 'payload'

export const Testimonial: Block = {
  slug: 'testimonial',
  interfaceName: 'TestimonialBlock',
  
  fields: [
    headerField,
    {
      name: 'testimonials',
      label: 'Testimonials',
      relationTo: 'testimonials',
      // maxDepth: 2,
      // depth: 1,
      type: 'relationship',
      hasMany: true,
    },
  ],
}
