import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Dynamic-web/student-perk-archive/react-app/',
  plugins: [react()],
})
