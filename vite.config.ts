import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    reactRefresh(),
  ],
  resolve: {
    alias: {
      hook: path.resolve(__dirname, 'src/hook'),
      pages: path.resolve(__dirname, 'src/pages'),
      component: path.resolve(__dirname, 'src/component'),
      style: path.resolve(__dirname, 'src/style'),
      types: path.resolve(__dirname, 'src/types'),
      util: path.resolve(__dirname, 'src/util'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
});
