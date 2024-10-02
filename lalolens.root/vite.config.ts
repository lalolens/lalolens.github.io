import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@lalolens/chatbot': path.resolve(__dirname, '../lalolens.services/chatbot/dist'),
    },
  },
  server: {
    fs: {
      allow: [
        path.resolve(__dirname, '.'), // Root project directory
        path.resolve(__dirname, '../lalolens.services/chatbot') // Chatbot dist directory
      ],
    },
  },
  build: {
    outDir: 'dist',
  },
});
