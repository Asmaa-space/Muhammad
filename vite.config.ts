import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // يضمن تحميل ملفات JS و CSS بمسارات نسبية لمنع الشاشة البيضاء
})
