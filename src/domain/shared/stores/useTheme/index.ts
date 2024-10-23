import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTheme = create(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (set: any, get: any) => ({
      selectedTheme: get.selectedTheme || 'purpleHaze',
      setSelectedTheme: (theme: string) =>
        set(() => ({ selectedTheme: theme })),
    }),
    { name: 'selected-theme' },
  ),
);
