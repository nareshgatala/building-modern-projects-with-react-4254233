import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api':'https://pmwm301k-3000.auc1.devtunnels.ms',
    },
  }
});
