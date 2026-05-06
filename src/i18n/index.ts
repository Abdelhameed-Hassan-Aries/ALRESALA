import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ar from './locales/ar.json';
import en from './locales/en.json';

export const SUPPORTED_LANGS = ['ar', 'en'] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

export const LANG_DIR: Record<SupportedLang, 'rtl' | 'ltr'> = {
  ar: 'rtl',
  en: 'ltr',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: ar },
      en: { translation: en },
    },
    fallbackLng: 'ar',
    supportedLngs: SUPPORTED_LANGS as unknown as string[],
    detection: {
      order: ['localStorage', 'htmlTag', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'alresalah_lang',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export const applyLangDir = (lng: string) => {
  const lang = (SUPPORTED_LANGS as readonly string[]).includes(lng) ? (lng as SupportedLang) : 'ar';
  const dir = LANG_DIR[lang];
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', dir);
};

i18n.on('languageChanged', applyLangDir);
applyLangDir(i18n.language || 'ar');

export default i18n;
