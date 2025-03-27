import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig((env) => {
  return {
    root: path.join(__dirname, 'src/renderer'),
    base: './',
    plugins: [Vue()],
    server: {
      port: 3344,
    },
    resolve: {},
    build: {
      outDir: path.join(__dirname, 'dist/render'),
      emptyOutDir: true,
      minify: false,
      sourcemap: true,
    },
  }
})
