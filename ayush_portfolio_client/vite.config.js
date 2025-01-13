import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  // Specify the directory where your static assets (like images) are stored
  publicDir: 'C:/Ayush/Images', // Set to the folder that contains the image outside your project
  plugins: [solidPlugin()],
  server: {
    port: 5173,
  },
  build: {
    target: 'esnext',
  },
});
