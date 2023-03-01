import { ReactNode } from 'react';

import { ThemeProvider } from './theme';
import GlobalStyle from '@/styles/global';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => (
  <ThemeProvider>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default AppProvider;
