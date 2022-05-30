import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

const dirname = path.resolve(path.dirname('')); 

export default defineConfig({
  plugins: [solidPlugin(), eslintPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src')
    },
  },
  server: {
    proxy: {
      '/api': {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
});
