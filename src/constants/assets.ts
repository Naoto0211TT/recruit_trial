import { IMG_DIR } from '@/constants/config';

const lp = `${IMG_DIR}/lp`;
const icons = `${IMG_DIR}/icons`;

export const lpAssets = {
  heroBg: `${lp}/hero-bg.webp`,
  logoAlo: `${lp}/logo-alo.svg`,
  aboutInterior: `${lp}/about-interior.webp`,
  aboutIllustration: `${lp}/about-illustration.svg`,
  chartPc: `${lp}/chart-pc.svg`,
  chartSp: `${lp}/chart-sp.svg`,
  product01: `${lp}/product-01.webp`,
  product02: `${lp}/product-02.webp`,
  product03: `${lp}/product-03.webp`,
  product04: `${lp}/product-04.webp`,
} as const;

export const iconAssets = {
  mail: `${icons}/icon-mail.svg`,
  phone: `${icons}/icon-phone.svg`,
  phoneCircle: `${icons}/icon-phone-circle.svg`,
  arrowUp: `${icons}/icon-arrow-up.svg`,
  /** Hamburger menu only (white circle icons) */
  mailMenu: `${icons}/icon-mail-menu.svg`,
  phoneMenu: `${icons}/icon-phone-menu.svg`,
} as const;
