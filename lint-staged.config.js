/** @type {import('lint-staged').Config} */
const config = {
  '*.{ts,astro}': [() => 'npm run check'],
  './*.{js,cjs,mjs,ts}': [
    "eslint -c eslint.config.ts --fix --ignore-pattern '!.*rc.cjs' --ignore-pattern '!*.config.{js,cjs,mjs,ts}",
    'prettier --write --no-error-on-unmatched-pattern',
  ],
  './script/node/*.{js,cjs,mjs,ts}': [
    'eslint -c eslint.config.ts --fix',
    'prettier --write --no-error-on-unmatched-pattern',
  ],
  './src/**/*.{js,jsx,cjs,mjs,ts,tsx}': [
    'eslint -c eslint.config.ts --fix',
    'prettier --write --no-error-on-unmatched-pattern',
  ],
  './src/**/*.astro': [
    'markuplint --fix --allow-warnings',
    'eslint -c eslint.config.ts --fix',
    'prettier --write --no-error-on-unmatched-pattern',
  ],
};

export default config;
