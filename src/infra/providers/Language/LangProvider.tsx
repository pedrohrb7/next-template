'use client';
import { I18nProviderClient } from '@src/infra/languages/client';

const LangProvider = ({
  locale,
  children,
}: {
  locale: string;
  children: JSX.Element;
}) => {
  return (
    <I18nProviderClient locale={locale} fallback={<p>Loading...</p>}>
      {children}
    </I18nProviderClient>
  );
};

export default LangProvider;
