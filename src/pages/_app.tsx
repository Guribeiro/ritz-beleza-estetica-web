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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Mate&family=Playfair+Display:wght@400;500;600&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}
