'use client';

import { Button, Flex } from 'antd';
import { useChangeLocale } from '@src/infra/languages/client';

const LangSwitchButton = (): JSX.Element => {
  // Uncomment to preserve the search params. Don't forget to also uncomment the Suspense in the layout
  const changeLocale = useChangeLocale({ preserveSearchParams: true });

  return (
    <Flex>
      <Button
        type="primary"
        onClick={() => changeLocale('en')}
        className="mr-2">
        EN
      </Button>
      <Button type="primary" onClick={() => changeLocale('pt')}>
        PT
      </Button>
    </Flex>
  );
};

export default LangSwitchButton;
