import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change '/my-love/' to your GitHub repo name
// e.g. if your repo is github.com/yourname/my-love → base: '/my-love/'
export default defineConfig({
  plugins: [react()],
  base: '/my-love/',
})
