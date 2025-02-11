import { defineStore } from 'pinia';
import { i18n } from '@/main';
export const useLanguageStore = defineStore('views/lang', {
  state: () => ({
    currentLanguage: i18n.global.locale,
  }),
  actions: {
    setLanguage(lang) {
      i18n.global.locale = lang;
      this.currentLanguage = lang;
      localStorage.setItem('language', lang);
    },
  },
});
