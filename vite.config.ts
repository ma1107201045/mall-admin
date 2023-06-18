import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const alias: Record<string, string> = {
  '~': resolve(__dirname, './'),
  '@': resolve(__dirname, './src'),
  components: resolve(__dirname, './src/components'),
  styles: resolve(__dirname, './src/styles'),
  utils: resolve(__dirname, './src/utils')
}
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias
  }
})
