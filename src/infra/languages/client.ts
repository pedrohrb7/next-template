import { createI18nClient } from 'next-international/client';
import pt from './messages/ptBR';

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  defineLocale,
  useCurrentLocale,
} = createI18nClient(
  {
    en: async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      return import('./messages/enUS');
    },
    pt: async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      return import('./messages/ptBR');
    },
  },
  {
    fallbackLocale: pt,
  },
);
