import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'jsonresume-theme-coldbrew',
      fileName: 'main',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        "luxon",
        "preact",
        "preact-render-to-string",
        "@shopify/address",
      ],
    },
  },
})
