import Web from '@/components/web';
import Mobile from '@/components/mobile';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

import preloadedAuthenticationState from '@/shared/store/ducks/authentication/preloadedAuthenticationState';

export const getStaticProps: GetStaticProps = () => {
  const authenticationState = preloadedAuthenticationState();

  return {
    props: {
      preloadedState: {
        authenticationState,
      },
    },
  };
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    const mobileKeywords = [`iphone`, `android`, `windows phone`];
    const isMobileDevice = mobileKeywords.some((keyword) =>
      userAgent.includes(keyword),
    );
    setIsMobile(isMobileDevice);
  }, []);
  return isMobile ? <Mobile /> : <Web />;
}
