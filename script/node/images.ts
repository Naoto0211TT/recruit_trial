import type { AvailableFormatInfo, FormatEnum, JpegOptions, PngOptions, WebpOptions } from 'sharp';

import { assetsDir, tmpDir } from '@root/project.config';
import chalk from 'chalk';
import fancyLog from 'fancy-log';
import { globby } from 'globby';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { optimize } from 'svgo';

import { dropConsole } from './drop-console';

type Formats = {
  [key: string]: {
    type: AvailableFormatInfo | keyof FormatEnum;
    options: JpegOptions | PngOptions | WebpOptions;
  };
};

const source = process.argv[2]
  ? [process.argv[2]]
  : [
      `src/images/**/*.{jpg,jpeg,png,gif,svg}`,
      `!src/images/**/_*.{jpg,jpeg,png,gif,svg}`,
      `!src/images/_**/*.{jpg,jpeg,png,gif,svg}`,
      `!src/images/**/_**/*.{jpg,jpeg,png,gif,svg}`,
      `!src/images/_**/**/*.{jpg,jpeg,png,gif,svg}`,
    ];

const outDir = `${tmpDir}/${assetsDir}/images`;

const formats: Formats = {
  webp: {
    type: 'webp',
    options: {
      quality: 80,
    },
  },
  jpg: {
    type: 'jpeg',
    options: {
      quality: 80,
      mozjpeg: true,
    },
  },
  png: {
    type: 'png',
    options: {
      quality: 80,
      progressive: false,
    },
  },
};

const convertImage = async (file: string, format: Formats[keyof Formats], output: string) => {
  await sharp(file)
    .toFormat(format.type, { ...format.options })
    .toFile(output);
};

const images = async () => {
  const sources = await globby(source);

  for (const imagePath of sources) {
    const originalImageDirBase = path.dirname(imagePath).replace(/^src\/images\/?/, '');
    const originalBaseName = path.parse(imagePath).name;
    const originalExtension = path.extname(imagePath);

    const outputDir = `${outDir}/${originalImageDirBase}`;

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    if (/^\.svg$/g.test(originalExtension)) {
      const buffer = fs.readFileSync(imagePath);
      const binary = optimize(buffer as unknown as string).data;

      const output = `${outputDir}/${originalBaseName}.svg`;

      try {
        fs.writeFileSync(output, binary);
        dropConsole(output);
      } catch (error) {
        fancyLog(
          chalk.red(
            `Error converting image to ${chalk.yellow(originalExtension)}\n${error as string}`
          )
        );
      }
    } else {
      try {
        const output = `${outputDir}/${originalBaseName}.${formats.webp.type as string}`;
        await convertImage(imagePath, formats.webp, output);

        dropConsole(output);
      } catch (error) {
        fancyLog(
          chalk.red(
            `Error converting image to ${chalk.yellow(originalExtension)}\n${error as string}`
          )
        );
      }
    }
  }
};

await images();
