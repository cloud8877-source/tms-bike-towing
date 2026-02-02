import { getRelativeLocaleUrl } from 'astro:i18n';

export const locales = ['en', 'ms', 'zh', 'th'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ms: 'Bahasa Malaysia',
  zh: '中文',
  th: 'ภาษาไทย'
};

export const localeFlagEmoji: Record<Locale, string> = {
  en: '🇬🇧',
  ms: '🇲🇾',
  zh: '🇨🇳',
  th: '🇹🇭'
};

export function getLocaleFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split('/');
  if (locales.includes(locale as Locale)) {
    return locale as Locale;
  }
  return 'en';
}

export function getLocalizedUrl(locale: Locale, path: string): string {
  // Remove any existing locale prefix from path
  const cleanPath = path.replace(/^\/(en|ms|zh|th)/, '');
  return getRelativeLocaleUrl(locale, cleanPath);
}

// WhatsApp messages per locale
export const whatsappMessages: Record<Locale, string> = {
  en: "Hello TMS Bike Towing, I'd like to inquire about your services.",
  ms: "Hai TMS Bike Towing, saya ingin bertanya tentang perkhidmatan anda.",
  zh: "您好 TMS Bike Towing，我想咨询您的服务。",
  th: "สวัสดี TMS Bike Towing ฉันต้องการสอบถามเกี่ยวกับบริการของคุณ"
};

export function getWhatsAppUrl(locale: Locale): string {
  const message = encodeURIComponent(whatsappMessages[locale]);
  return `https://wa.me/66968873125?text=${message}`;
}
