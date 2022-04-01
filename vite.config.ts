import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://...............',
    //     changeOrigin: true,
    //     rewrite: (path) => {
    //       return path.replace(/^/api/, '')
    //     }
    //   }
    // }
  },
})
