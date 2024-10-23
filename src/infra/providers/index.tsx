import AntDProvider from './AntD';
import LangProvider from './Language/LangProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Providers = ({ children, locale }: { children: any; locale: string }) => {
  return (
    <LangProvider locale={locale}>
      <AntDProvider>{children}</AntDProvider>
    </LangProvider>
  );
};

export default Providers;
