import { ReactNode } from 'react';

import { ThemeProvider } from './theme';
import GlobalStyle from '@/styles/global';
import { ToastContainer } from 'react-toastify';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => (
  <ThemeProvider>
    <GlobalStyle />
    <ToastContainer />
    {children}
  </ThemeProvider>
);

export default AppProvider;
