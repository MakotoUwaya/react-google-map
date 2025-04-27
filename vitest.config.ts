/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      reporter: ['text', 'html'],
      include: ['src/**/*'],
      exclude: ['node_modules/', 'src/**/*.d.ts'],
    },
    exclude: ['e2e/**/*', 'node_modules/**/*'],
  },
});
