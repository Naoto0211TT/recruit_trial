import { IMG_DIR } from '@/constants/config';

const lp = `${IMG_DIR}/lp`;
const icons = `${IMG_DIR}/icons`;

export const lpAssets = {
  heroBg: `${lp}/hero-bg.webp`,
  logoAlo: `${lp}/logo-alo.webp`,
  aboutInterior: `${lp}/about-interior.webp`,
  aboutIllustration: `${lp}/about-illustration.svg`,
  chart: `${lp}/chart.webp`,
  product01: `${lp}/product-01.webp`,
  product02: `${lp}/product-02.webp`,
  product03: `${lp}/product-03.webp`,
  product04: `${lp}/product-04.webp`,
  iconPhoneCircle: `${lp}/icon-phone-circle.webp`,
  iconArrowUp: `${lp}/icon-arrow-up.webp`,
  iconMail: `${lp}/icon-mail.webp`,
} as const;

export const iconAssets = {
  mail: `${icons}/icon-mail.svg`,
  phone: `${icons}/icon-phone.svg`,
} as const;
