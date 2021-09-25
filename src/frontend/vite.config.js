import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true
  },
  proxy: {
    '/api': {
      target: 'http://localhost:5000/api',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      ws: true
    }
  }
})
