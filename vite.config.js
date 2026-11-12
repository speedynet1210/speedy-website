import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Fixed port so the site never drifts to 5174+ when speedy-dashboard
  // is already running on 5173. strictPort fails fast instead of picking
  // another port, which keeps the ChatForge allowed-domain entry stable.
  server: {
    port: 5180,
    strictPort: true,
  },
  preview: {
    port: 4180,
    strictPort: true,
  },
})
