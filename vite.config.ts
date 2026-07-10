import type { PluginOption, UserConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

import { assetsDir, isDevMode } from './project.config';

const plugins: PluginOption[] = [
  tailwindcss({
    optimize: {
      minify: !isDevMode,
    },
  }),
];
if (!isDevMode) {
  plugins.push(
    visualizer({
      emitFile: false,
      open: true,
    }) as PluginOption
  );
}

export const baseConfig: UserConfig = {
  plugins,
  server: {
    https:
      existsSync(`./certs/server.crt`) && existsSync(`./certs/server.key`)
        ? {
            cert: readFileSync(`./certs/server.crt`),
            key: readFileSync(`./certs/server.key`),
          }
        : {},
  },
  resolve: {
    alias: {
      '@/': `${import.meta.dirname}/src/`,
      '@root/': `${import.meta.dirname}/`,
    },
  },
  css: {
    devSourcemap: true,
  },
  build: {
    rolldownOptions: {
      external: ['src/statics'],
      output: {
        assetFileNames: (info) => {
          const name = info.names[0] ?? 'asset';
          const parsed = path.parse(name);
          const extension = parsed.ext.slice(1) || 'assets';

          return `${assetsDir}/${extension}/${parsed.name}-[hash]${parsed.ext}`;
        },
      },
    },
  },
  environments: {
    client: {
      build: {
        rolldownOptions: {
          output: {
            hashCharacters: 'hex',
            entryFileNames: (info) => {
              const basename = path.parse(info.name).name || 'index';
              return `${assetsDir}/js/${basename}-[hash].js`;
            },
            chunkFileNames: `${assetsDir}/js/chunk-[hash].js`,
          },
        },
      },
    },
  },
};

export default defineConfig(baseConfig);
