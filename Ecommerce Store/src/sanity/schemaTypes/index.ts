import { type SchemaTypeDefinition } from 'sanity'
import customer  from './customer'
import delivery from './delivery'
import order from './order'
import product from './product'
import {category} from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [customer, delivery, order, product, category],
}
