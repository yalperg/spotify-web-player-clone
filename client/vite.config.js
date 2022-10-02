import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          `@import "./src/styles/abstracts/variables";`,
          `@import "./src/styles/abstracts/mixins";`,
        ].join(' '),
      },
    },
  },
});
