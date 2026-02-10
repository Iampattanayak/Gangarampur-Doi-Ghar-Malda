import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: 'automatic',
    })
  ],
  build: {
    // Enable minification with esbuild (faster than terser, built into Vite)
    minify: 'esbuild',
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['lucide-react'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei']
        },
        // Improve chunk naming for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      }
    },
    // Reduce chunk size
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Source maps for debugging (disable in production for smaller builds)
    sourcemap: false,
    // Target modern browsers for smaller bundle
    target: 'es2015',
  },
  // Configure esbuild for production
  esbuild: {
    drop: ['console', 'debugger'],
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
    // Exclude heavy dependencies from optimization
    exclude: ['three', '@react-three/fiber', '@react-three/drei']
  },
  // Enable compression
  server: {
    // Enable compression in dev server
    hmr: {
      overlay: true
    }
  }
})
