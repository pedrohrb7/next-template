'use client';
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import { useTheme } from '@src/domain/shared/stores/useTheme';

import { purpleHaze, wisdom } from '@src/ui/styles/themes';

// Definindo o tipo para o tema
type Theme = typeof purpleHaze | typeof wisdom;
// Definindo o tipo para os temas disponíveis
type ThemeName = 'purpleHaze' | 'wisdom';

const themes: Record<string, Theme> = {
  purpleHaze,
  wisdom,
};

const AntDProvider = ({ children }: { children: JSX.Element }) => {
  const { selectedTheme } = useTheme(); // Obtém o tema selecionado

  // Obtém o tema correspondente ou usa o tema padrão
  const theme = themes[selectedTheme as ThemeName] || themes.purpleHaze;
  return (
    <AntdRegistry>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </AntdRegistry>
  );
};

export default AntDProvider;
