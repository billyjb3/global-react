import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

const getEntry = () => {
  const entry = {};

  const componentsPath = resolve(__dirname, 'src/components');
  const components = readdirSync(componentsPath).filter((file) => !file.includes('.'));
  components.forEach((component) => {
    const path = `${componentsPath}/${component}`;
    const hasStyles = !!readdirSync(path)
      .find((file) => file.includes('.css'));
    entry[`Components/${component}/index`] = `${path}/index.js`;
    if (hasStyles) entry[`Components/${component}/styles`] = `${path}/styles.css`;
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
  })
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

          let components = keys.filter((key) => key.includes('Components/'))
            .map((key) => key.replace('/index.mjs', '').replace('/styles.css', ''));
          components = [...new Set(components)];
          content += components.map((component) => `export * from './${component}';`).join('\n');

          content += '\n';
          const hooks = keys.filter((key) => key.includes('hooks/'))
            .map((hook) => hook.replace('hooks/', '').replace('.mjs', ''));
          content += hooks.map((hook) => `export * from './hooks/${hook}';`).join('\n');

          content += '\n';
          const icons = keys.filter((key) => key.includes('Icons/'))
            .map((icon) => icon.replace('Icons/', '').replace('.mjs', ''));
          content += icons.map((icon) => `export * from './Icons/${icon}';`).join('\n');

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
