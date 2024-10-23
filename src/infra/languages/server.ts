import { createI18nServer } from 'next-international/server';
import pt from './messages/ptBR';

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } =
  createI18nServer(
    {
      en: () => import('./messages/enUS'),
      pt: () => import('./messages/ptBR'),
    },
    {
      fallbackLocale: pt,
    },
  );
