import type { PathLike } from 'node:fs';

import chalk from 'chalk';
import fancyLog from 'fancy-log';
import { filesize } from 'filesize';
import { statSync } from 'node:fs';

export const dropConsole = (path: PathLike) => {
  const { size } = statSync(path);
  fancyLog(`${chalk.blue(path)} ${chalk.magenta(filesize(size, { standard: 'jedec' }))}`);
};
