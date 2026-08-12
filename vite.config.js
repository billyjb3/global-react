/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
// import { playwright } from '@vitest/browser-playwright';
// const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), libInjectCss()
  // Generates TypeScript declaration (.d.ts) files for your preserved modules
  // dts({ insertTypesEntry: true, include: ['lib'] })
  ],
  build: {
    lib: {
      // Points to your main entry/barrel file
      entry: resolve(__dirname, 'src/index.js'),
      formats: ['es'] // ESM is strictly required for tree-shaking
    },
    rollupOptions: {
      // CRITICAL: Do not bundle React or React DOM into your library
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Keeps the original directory structure (creates separate files per component)
        preserveModules: true,
        preserveModulesRoot: 'lib',
        // Defines naming structure for files
        entryFileNames: '[name].js'
      }
    }
  },
});