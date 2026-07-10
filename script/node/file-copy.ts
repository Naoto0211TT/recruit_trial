import { globby as glob } from 'globby';
import fs from 'node:fs';
import path from 'node:path';

import { dropConsole } from './drop-console';

export const fileCopy = async (
  source: string | string[],
  outDir: string,
  regExp: RegExp | string = new RegExp(''),
  shouldOutputConsole: boolean = true,
  isGlobbed: boolean = false
) => {
  let sources =
    typeof source === 'string'
      ? await glob([source, '!.DS_Store', '!.gitkeep'])
      : await glob([...source, '!.DS_Store', '!.gitkeep']);

  if (isGlobbed) {
    sources = typeof source === 'string' ? [source] : source;
  }

  const files = sources.map((file) => {
    const baseDir = `${outDir}/${path.dirname(file).replace(regExp, '')}`;

    if (!fs.existsSync(baseDir)) {
      fs.mkdirSync(baseDir, { recursive: true });
    }

    const output = `${baseDir}/${path.basename(file)}`.replace(/\/\//, '/');

    return {
      original: file,
      output,
    };
  });

  for (const { original, output } of files) {
    fs.copyFileSync(original, output);

    if (shouldOutputConsole) dropConsole(output);
  }
};
