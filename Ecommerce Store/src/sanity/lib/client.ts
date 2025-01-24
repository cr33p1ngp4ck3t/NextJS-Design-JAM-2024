import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.NEXT_PRIVATE_SANITY_TOKEN,
  useCdn: false,
})

