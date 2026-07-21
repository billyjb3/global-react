import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

const getEntry = () => {
  const entry = {};

  const componentsPath = resolve(__dirname, 'src/components');
  const components = readdirSync(componentsPath).filter((dir) => !dir.includes('.'));
  components.forEach((component) => {
    const path = `${componentsPath}/${component}`;
    const hasStyles = !!readdirSync(path)
      .find((file) => file.includes('.css'));
    entry[`components/${component}/${component}`] = `${path}/${component}.jsx`; // TODO: watch for file extensions here. component should always be .jsx though so shouldnt have to worry much
    if (hasStyles) entry[`components/${component}/styles`] = `${path}/styles.css`;
  });

  const iconsPath = resolve(__dirname, 'src/Icons');
  const icons = readdirSync(iconsPath).filter((file) => !file.includes('index.js'));
  icons.forEach((icon) => {
    entry[`Icons/${icon.replace('.jsx', '')}`] = `${iconsPath}/${icon}`;
  });

  const hooksPath = resolve(__dirname, 'src/hooks');
  const hooks = readdirSync(hooksPath).filter((file) => !file.includes('index.js'));
  hooks.forEach((hook) => {
    entry[`hooks/${hook.replace('.js', '')}`] = `${hooksPath}/${hook}`;
  });

  const contextPath = resolve(__dirname, 'src/context');
  const context = readdirSync(contextPath).filter((file) => !file.includes('index.js'));
  context.forEach((c) => {
    entry[`context/${c.replace('.js', '')}`] = `${contextPath}/${c}`;
  });

  const utilsPath = resolve(__dirname, 'src/utils');
  const utils = readdirSync(utilsPath).filter((file) => !file.includes('index.js'));
  utils.forEach((util) => {
    entry[`utils/${util.replace('.js', '')}`] = `${utilsPath}/${util}`;
  });

  return entry;
};

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: getEntry(),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      plugins: [{
        name: 'dist-index',
        generateBundle(options, bundle) {
          const keys = Object.keys(bundle);
          let content = '';

          let components = keys.filter((key) => key.includes('components/'))
            .filter((key) => !key.includes('.css'))
            .map((key) => key.replace('.mjs', ''));
          content += components.map((component) => `export * from './${component}';`).join('\n');

          content += '\n';
          const hooks = keys.filter((key) => key.includes('hooks/'))
            .map((hook) => hook.replace('hooks/', '').replace('.mjs', ''));
          content += hooks.map((hook) => `export * from './hooks/${hook}';`).join('\n');

          content += '\n';
          const icons = keys.filter((key) => key.includes('Icons/'))
            .map((icon) => icon.replace('Icons/', '').replace('.mjs', ''));
          content += icons.map((icon) => `export * from './Icons/${icon}';`).join('\n');

          content += '\n';
          const context = keys.filter((key) => key.includes('context/'))
            .map((c) => c.replace('context/', '').replace('.mjs', ''));
          content += context.map((c) => `export * from './context/${c}';`).join('\n');

          content += '\n';
          const utils = keys.filter((key) => key.includes('utils/'))
            .map((util) => util.replace('utils/', '').replace('.mjs', ''));
          content += utils.map((util) => `export * from './utils/${util}';`).join('\n');

          this.emitFile({
            type: 'asset',
            fileName: 'index.js',
            source: content,
          });
        },
      }],
    }
  },
});
