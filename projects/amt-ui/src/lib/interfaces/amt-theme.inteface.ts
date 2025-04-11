export interface AmtTheme {
  title?: string;
  mode: AmtThemeMode;
  color: AmtThemeColor;
  direction: AmtThemeDirection;
  logo: string;
}

export type AmtThemeMode = 'dark' | 'light' | 'system';
export type AmtThemeColor = 'base' | 'violet' | 'red' | 'blue' | 'orange' | 'yellow' | 'green';
export type AmtThemeDirection = 'ltr' | 'rtl';
