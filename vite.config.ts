/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />

import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths()],
  server: {
    hmr: true,
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 1000,
    emptyOutDir: true,
    target: 'esnext',
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    exclude: ['**/node_modules/**', '**/dist/**', '**/.{idea,git,cache,output,temp}/**', '**/mocks/**'],
    globals: true,
    include: ['src/**/?(*.)(test).[jt]s?(x)'],
    outputFile: {
      html: './reports/index.html',
    },
    setupFiles: ['./configs/setupTests.js'],
  },
});
