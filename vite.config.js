import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'; // Import TailwindCSS properly
import autoprefixer from 'autoprefixer'; // Import Autoprefixer properly

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Change the port to 3000
    open: true,  // Automatically open the browser on server start
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,  // Use imported TailwindCSS
        autoprefixer,  // Use imported Autoprefixer
      ],
    },
  },
});
