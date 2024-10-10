import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@lalolens/playground': path.resolve(__dirname, '../lalolens.playground/src/Playground'),
      '@lalolens/test': path.resolve(__dirname, '../lalolens.test/src/Test')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});