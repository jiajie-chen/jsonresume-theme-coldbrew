import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { resolve } from 'path'

// TODO: root alias & fix imports
export default defineConfig({
  resolve: {
    alias: {
      '/@/': resolve(__dirname, './src'),
    },
  },
  plugins: [preact()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/main.tsx'),
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
