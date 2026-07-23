export const site = {
  name: '日本ALO音楽研究所',
  tel: '0120-00-0000',
  telHours: '10:00～18:00 土日・祝日・年末年始除く',
  copyright: '© COMPANY',
} as const;

export const navItems = [
  { label: 'ALOについて', href: '#about' },
  { label: 'ALOの強み', href: '#about' },
  { label: 'ALOの商品紹介', href: '#product' },
  { label: 'ご加盟までの流れ', href: '#about' },
  { label: 'よくあるご質問', href: '#about' },
] as const;

export const hero = {
  catchCopy: 'この文章はダミーです。',
  subCopy: 'ANIMAL LIBERATION ORCHESTRA',
  description: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
} as const;

export const about = {
  heading: { en: 'ABOUT', sub: 'ABOUT ALO [ ANIMAL LIBERATION ORCHESTRA ]' },
  lead: [
    'この文章はダミーです。',
    '文字の大きさ、量、字間、',
    '行間等を確認するために',
    '入れています。',
  ],
  body: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
  blockTitle: [
    'この文章はダミーです。文字の大きさ、',
    '量、字間、行間等を確認するために',
    '入れています。',
  ],
  blockBody: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
  brand: {
    short: 'ALO',
    full: 'ANIMAL LIBERATION ORCHESTRA',
  },
  chart: {
    title: [
      'この文章はダミーです。文字の大きさ、',
      '量、字間、行間等を確認するために',
      '入れています。',
    ],
    body: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
  },
} as const;

export const product = {
  heading: { en: 'PRODUCT', sub: 'PRODUCT INFORMATION' },
  lead: 'この文章はダミーです。',
  body: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
  items: [
    { image: 'product-01', title: 'ダミーダミーダミー' },
    { image: 'product-02', title: 'ダミーダミーダミー' },
    { image: 'product-03', title: 'ダミーダミーダミー' },
    { image: 'product-04', title: 'ダミーダミーダミー' },
  ],
  cardBody:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
} as const;

export const footer = {
  telHeading: 'お電話でのお問い合わせはこちら',
  links: ['企業案内', '企業案内'],
} as const;
