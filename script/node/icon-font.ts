import type { Stream } from 'node:stream';

import { assetsDir, isDevMode, tmpDir } from '@root/project.config';
import webfontsGenerator from '@vusion/webfonts-generator';
import chalk from 'chalk';
import fancyLog from 'fancy-log';
import { globby } from 'globby';
import { existsSync, mkdirSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

import { dropConsole } from './drop-console';

const sourceDir = `src/icon-font`;

const baseDir = path.resolve(process.cwd(), sourceDir);
const outDir = `${tmpDir}/${assetsDir}/`;

const createFile = async (
  buffer:
    | AsyncIterable<NodeJS.ArrayBufferView | string>
    | Iterable<NodeJS.ArrayBufferView | string>
    | NodeJS.ArrayBufferView
    | Stream
    | string,
  filename: string,
  outputDir: string
) => {
  const filePath = `${outputDir}${filename}`;

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  try {
    await writeFile(filePath, buffer);
    dropConsole(filePath);
  } catch (error) {
    fancyLog(`${chalk.gray('[icon-font]')} ${chalk.red(error)}`);
  }
};

const iconFont = async () => {
  const files = await globby(`${baseDir}/svg/*.svg`);

  if (files.length === 0) {
    fancyLog(`${chalk.gray('[icon-font]')} ${chalk.red('SVG File does not exist')}`);
    return;
  }

  const fontName = 'myicon';
  const types: ('woff2' | 'woff')[] = ['woff2', 'woff'];

  webfontsGenerator<'woff2' | 'woff'>(
    {
      files,
      dest: outDir,
      fontName,
      types,
      order: types,
      templateOptions: {
        classPrefix: `${fontName}-`,
        baseSelector: `.${fontName}`,
      },
      writeFiles: false,
      cssTemplate: `template/icon/css.template.hbs`,
      cssContext(context, _options, handlebars) {
        handlebars.registerHelper(
          'unescapeDoubleQuote',
          (string) => new handlebars.SafeString(string as string)
        );
        handlebars.registerHelper('objectEntries', (object: { [s: string]: unknown }) =>
          Object.entries(object)
        );

        const source = context.src.replaceAll(
          context.fontName,
          () => `../webfonts/${context.fontName}`
        );

        const codepoints: { [name: string]: string } = {};
        for (const [key, value] of Object.entries(context.codepoints)) {
          codepoints[key.replace(/^[0-9]{3}-/, '')] = Number.parseInt(value, 16)
            .toString(16)
            .toUpperCase();
        }
        context.src = source;
        context.codepoints = codepoints;
      },
      htmlTemplate: `template/icon/html.template.hbs`,
      htmlContext(context, _options, handlebars) {
        handlebars.registerHelper('objectEntries', (object: { [s: string]: unknown }) =>
          Object.entries(object)
        );

        const codepoints: { [name: string]: number } = {};
        if (context.codepoints) {
          for (const [key, value] of Object.entries(context.codepoints)) {
            codepoints[key.replace(/^[0-9]{3}-/, '')] = value
              .toString(16)
              .toUpperCase() as unknown as number;
          }
        }
        context.codepoints = codepoints;
      },
    },
    (error, result) => {
      if (error) {
        fancyLog(`${chalk.gray('[icon-font]')} ${chalk.red(error)}`);
      }

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      (async () => {
        await createFile(result.generateCss(), `${fontName}.css`, `${outDir}css/`);

        await Promise.all(
          types.map(async (extension) =>
            createFile(result[extension], `${fontName}.${extension}`, `${outDir}webfonts/`)
          )
        );

        if (isDevMode) {
          const previewDir = `${baseDir}/preview/`;

          await createFile(result.generateHtml(), `${fontName}.html`, previewDir);
          await createFile(result.generateCss(), `${fontName}.css`, `${previewDir}css/`);

          await Promise.all(
            types.map(async (extension) =>
              createFile(result[extension], `${fontName}.${extension}`, `${previewDir}webfonts/`)
            )
          );
        }
      })();
    }
  );
};

await iconFont();
