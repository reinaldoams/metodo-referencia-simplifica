// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

/** @see https://docs.astro.build/en/guides/integrations-guide/cloudflare/ */
function optimizeServerDeps() {
  return {
    name: 'optimize-server-deps',
    /** @param {string} name */
    configEnvironment(name) {
      if (name !== 'client') {
        return {
          optimizeDeps: {
            include: ['solid-js', 'solid-js/web'],
            exclude: ['astro:i18n', 'astro/virtual-modules/i18n.js'],
          },
        };
      }
    },
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],

  vite: {
    plugins: [tailwindcss(), optimizeServerDeps()],
  },

  adapter: cloudflare(),

  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});