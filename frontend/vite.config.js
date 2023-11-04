import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { "/api": { target: "https://nodejs-production-3676.up.railway.app", changeOrigin: true } },
    // rewrite: (path) => path.replace(/^\/api/, ''),
    hmr: {
      overlay: false // Disable the HMR error overlay
    }

  },
})
