import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components')
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, './src/services')
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, './src/hooks')
      },
      {
        find: '@lib',
        replacement: path.resolve(__dirname, './src/lib')
      },
      {
        find: '@models',
        replacement: path.resolve(__dirname, './src/models')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, './src/pages')
      },
      {
        find: '@type',
        replacement: path.resolve(__dirname, './src/types')
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, './src/utils')
      },
      {
        find: '@routes',
        replacement: path.resolve(__dirname, './src/routes')
      }
    ]
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  server: {
    fs: {
      cachedChecks: false
    }
  }
})
