import { defineConfig } from 'vite'
import react from '@vitejs/react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/module2-html/", // 👈 THIS IS THE MAGIC LINE YOU NEED
})