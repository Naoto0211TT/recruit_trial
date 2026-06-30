import Stats from '@/lib/stats';

const handle = () => {
  let stats: Stats | undefined;

  if (import.meta.env.DEV) {
    stats = new Stats();
    stats.start();
  }

  return () => {
    stats?.destroy();
  };
};

handle();
