import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    defineField({
      name: 'customerId',
      title: 'Customer ID',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
        name: 'phone',
        title: 'Phone',
        type: 'number',
      validation: (Rule) => Rule.required()
    })
  ]
});
