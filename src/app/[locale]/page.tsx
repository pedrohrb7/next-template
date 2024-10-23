'use client';

import Image from 'next/image';
import { useI18n } from '@src/infra/languages/client';
import LangSwitchButton from '@src/domain/shared/components/LangSwitch';

export default function Home() {
  const t = useI18n();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p>{t('welcome.title')}</p>
        <span>{t('welcome.description')}</span>
        <LangSwitchButton />
      </main>
    </div>
  );
}
