import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'

import blog from './schemas/blog'

export default defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || '',

  plugins: [structureTool(), visionTool()],
  schema: {
    types: [blog],
  },

  title: 'patrickroelofs.com',

  name: 'default',
})
