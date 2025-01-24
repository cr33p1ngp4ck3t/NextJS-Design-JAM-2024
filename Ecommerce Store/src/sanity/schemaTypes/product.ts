import { defineType, defineField } from 'sanity'
export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96
      }
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        { name: 'height', title: 'Height', type: 'string' },
        { name: 'width', title: 'Width', type: 'string' },
        { name: 'depth', title: 'Depth', type: 'string' },
      ],
      description: 'Dimensions of the product',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key features of the product',
    }),
    
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of:[{
          type: "string"
      }]
  }),
  defineField({
    name:"category",
    title:"Category",
    type:"reference",
    to:[{
        type:"category"
    }]
}
),
  ]
});
