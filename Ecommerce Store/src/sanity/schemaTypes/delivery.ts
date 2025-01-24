import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'delivery',
    title: 'Delivery',
    type: 'document',
    fields: [
        defineField({
            name: 'zone',
            title: 'Zone',
            type: 'string'
        }),
        defineField({
            name: 'coverage',
            title: 'Coverage',
            type: 'string'
        }),
    ]
});