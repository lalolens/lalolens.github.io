  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    // resolve: {
    //   alias: {
    //     // Alias for Playground project
    //     '@lalolens/playground': path.resolve(__dirname, 'packages/playground/src'),
    //   }
    // },
    build: {
      outDir: 'dist',
      sourcemap: true,
      rollupOptions: {
        output: {
          dir: path.resolve(__dirname, 'dist'),
          format: 'es', // Define the output format as ES modules
          entryFileNames: '[name].js', // Specify entry file naming convention
          chunkFileNames: '[name]-[hash].js', // Specify chunk file naming convention
          assetFileNames: '[name]-[hash][extname]' // Specify asset file naming convention
        },
      }
    },
    server: {
      // Optional: If your project structure requires serving additional directories for development
      fs: {
        allow: ['.'], // Allow access to parent directory, which is important for shared projects
      }
    },
    // optimizeDeps: {
    //   // Optional: Pre-bundle dependencies if some modules from aliases are used frequently
    //   include: ['@lalolens/playground']
    // }
  });