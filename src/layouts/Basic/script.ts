import type Stats from '@/lib/stats';

const handle = () => {
  let stats: Stats | undefined;

  if (import.meta.env.DEV) {
    void import('@/lib/stats').then((file) => {
      stats = new file.default();
      stats.start();
    });
  }

  return () => {
    stats?.destroy();
  };
};

handle();
