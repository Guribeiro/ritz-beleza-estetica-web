import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppProvider from '@/hooks';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ritz beleza e estética - Arujá/SP</title>
        <meta
          name="description"
          content="Ritz beleza e estética é um salão de beleza localizado na cidade de arujá-sp"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}
