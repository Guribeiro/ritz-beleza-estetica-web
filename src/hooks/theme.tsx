import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { light, LightThemeType } from '@/styles/themes/light';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export type Theme = LightThemeType;

interface ThemeContextData {
  changeMainColor(color: string): void;
  theme: Theme;
}

interface Props {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(light);

  const changeMainColor = useCallback(
    (color: string) => {
      const themeClone: Theme = structuredClone(theme);

      themeClone.colors.primary = color;

      setTheme(themeClone);
    },
    [theme],
  );

  // useEffect(() => {
  //   const loadPersistentTheme = () => {
  //     const themePersisted = localStorage.getItem(`guribeiro-dev/theme`);
  //     if (themePersisted) {
  //       setTheme(JSON.parse(themePersisted));
  //     }
  //   };
  //   loadPersistentTheme();
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(`guribeiro-dev/theme`, JSON.stringify(theme));
  // }, [theme]);

  return (
    <ThemeContext.Provider value={{ changeMainColor, theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error(`useTheme must be used within an ThemeProvider`);

  return context;
}

export { ThemeProvider, useTheme };
