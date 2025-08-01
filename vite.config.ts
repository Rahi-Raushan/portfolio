
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // If deploying to a subpath, set base: '/your-repo-name/'
  // base: '/',
  server: {
    open: true, // Automatically open browser on dev
    port: 5173, // Default Vite port
  },
});
