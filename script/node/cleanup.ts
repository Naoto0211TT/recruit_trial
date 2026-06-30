import { distDir } from '@root/project.config';
import { deleteAsync } from 'del';

const sources = process.env.TARGET ? [process.env.TARGET] : [distDir];

const cleanup = async () => {
  const patterns = sources.flatMap((source) => [
    `${source}/**/*`,
    `!${source}/.gitignore`,
    `!${source}/.gitkeep`,
  ]);

  await deleteAsync(patterns, { dot: true });
};

await cleanup();
