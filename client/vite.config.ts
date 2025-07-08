import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    TanStackRouterVite(), // 
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', //api request to backend
    }
  }
})
