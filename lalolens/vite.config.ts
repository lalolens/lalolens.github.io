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
        input: {
          main: path.resolve(__dirname, 'dotcom/main.tsx'),
          // playground: path.resolve(__dirname, 'packages/playground/src/Playground.tsx'), // Update this to the main file of your playground package
        },
        output: {
          dir: path.resolve(__dirname, 'dist'),
          format: 'es', // Define the output format as ES modules
          entryFileNames: '[name].js', // Specify entry file naming convention
          chunkFileNames: '[name]-[hash].js', // Specify chunk file naming convention
          assetFileNames: '[name]-[hash][extname]' // Specify asset file naming convention
        },
        external: [
          // Specify dependencies to be treated as external (not bundled in the final output)
          'react', 
          'react-dom'
        ]
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