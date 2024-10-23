import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Include PNG as asset files to be handled by Vite
  assetsInclude: ['**/*.png', '**/*.PNG'],
});
