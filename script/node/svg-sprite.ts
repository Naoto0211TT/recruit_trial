import type { Config as SpriteConfig } from 'svg-sprite';
import type { Config as SVGOConfig, CustomPlugin as SVGOCustomPlugin } from 'svgo';

import { assetsDir, tmpDir } from '@root/project.config';
import chalk from 'chalk';
import fancyLog from 'fancy-log';
import { globby } from 'globby';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import SVGSpriter from 'svg-sprite';
import { optimize } from 'svgo';

import { dropConsole } from './drop-console';

const source = [`src/svg-sprite/**/*.svg`, `!src/svg-sprite/**/_*.svg`];
const outDir = `${tmpDir}/${assetsDir}/images/common`;

type SpriteCompiler = {
  compileAsync: () => Promise<unknown>;
};

type SpriteCompileResult = {
  result: Record<string, Record<string, SpriteResource>>;
  data: Record<string, { sprite: string }>;
};

type SpriteResource = {
  path: string;
  contents: NodeJS.ArrayBufferView | string;
};

const compileSprite = async (spriter: SpriteCompiler): Promise<SpriteCompileResult> => {
  const compiled = await spriter.compileAsync();
  return compiled as SpriteCompileResult;
};

const customSVGOPlugins: SVGOCustomPlugin[] = [
  {
    name: 'removeSymbolXmlns',
    fn() {
      return {
        element: {
          enter: (node) => {
            if (node.name === 'symbol' && node.attributes.xmlns) {
              delete node.attributes.xmlns;
            }
          },
        },
      };
    },
  },
];

const SVGOOptions: SVGOConfig = {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke|stroke-linejoin|stroke-width)',
      },
    },
    ...customSVGOPlugins,
  ],
};

const spriteOptions: SpriteConfig = {
  mode: {
    symbol: {
      dest: outDir,
      sprite: `sprite.svg`,
    },
  },
  svg: {
    xmlDeclaration: false,
    namespaceClassnames: false,
    transform(svg) {
      return optimize(svg, SVGOOptions).data;
    },
  },
};

const svgSprite = async () => {
  const spriter = new SVGSpriter(spriteOptions);

  const sources = await globby(source);

  if (sources.length === 0) {
    fancyLog(`${chalk.gray('[svg-sprite]')} ${chalk.red('SVG File does not exist')}`);
    return;
  }

  for (const file of sources) {
    const code = readFileSync(file, { encoding: 'utf8' });
    spriter.add(file, '', code);
  }

  const { result, data } = await compileSprite(spriter);
  for (const resources of Object.values(result)) {
    for (const { path: outputPath, contents } of Object.values(resources)) {
      mkdirSync(path.dirname(outputPath), { recursive: true });
      writeFileSync(outputPath, contents);
    }
  }

  for (const { sprite } of Object.values(data)) {
    dropConsole(`${outDir}/${sprite}`);
  }
};

try {
  await svgSprite();
} catch (error) {
  fancyLog(`${chalk.gray('[svg-sprite]')} ${chalk.red(error)}`);
  process.exitCode = 1;
}
