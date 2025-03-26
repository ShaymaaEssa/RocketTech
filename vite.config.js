import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist' // Ensures output goes to the correct folder
  },
  publicDir: 'public' // Ensures fonts and images are included
});
