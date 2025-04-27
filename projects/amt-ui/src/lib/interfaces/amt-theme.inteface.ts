export interface AmtTheme {
  title?: string;
  logo: string;
  mode: AmtThemeMode;
  color: AmtThemeColor;
  direction: AmtThemeDirection;
  navbarResponsive: boolean;
  navbarColors: boolean;
  navbarFullscreen: boolean;
  navbarTheme: boolean;
  navbarNotifications: boolean;
  navbarLanguages: boolean;
  navbarProfile: boolean;
}

export type AmtThemeMode = 'dark' | 'light' | 'system';
export type AmtThemeColor = 'base' | 'violet' | 'red' | 'blue' | 'orange' | 'yellow' | 'green';
export type AmtThemeDirection = 'ltr' | 'rtl';
