import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const baseUrl = import.meta.env.BASE_URL;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',

    backend: {
      loadPath: `${baseUrl}locales/{{lng}}/{{ns}}.json`,
    },

    ns: ['home', 'common', 'header'],
    defaultNS: 'common',

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
