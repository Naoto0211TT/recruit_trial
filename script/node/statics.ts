import { assetsDir, tmpDir } from '@root/project.config';

import { fileCopy } from './file-copy';

const source = process.argv[2]
  ? [process.argv[2], `!.*`]
  : [
      `src/statics/**/*`,
      `!src/statics/**/_*`,
      `!src/statics/_**/*`,
      `!src/statics/**/_**/*`,
      `!.*`,
    ];

const outDir = `${tmpDir}/${assetsDir}`;

const replacement = /^src\/statics\/?/;

const statics = async () => {
  await fileCopy(source, outDir, replacement);
};

await statics();
