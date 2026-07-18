import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves from /thelearnify/ — set base accordingly
export default defineConfig({
  base: '/thelearnify/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
