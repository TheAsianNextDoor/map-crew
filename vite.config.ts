/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
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
