import react from '@astrojs/react'
import compress from 'astro-compress'
// @ts-check
import { defineConfig } from 'astro/config'

import db from '@astrojs/db'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  output: 'server',

  server: {
    open: true,
  },

  devToolbar: {
    enabled: false,
  },

  build: {
    // format: 'file',
    inlineStylesheets: 'never',
  },

  compressHTML: false,
  integrations: [react(), compress({ CSS: false, Image: false, SVG: false }), db()],
  adapter: vercel(),
})
