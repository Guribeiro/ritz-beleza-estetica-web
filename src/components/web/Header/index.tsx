import { useEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useTheme } from '@/hooks/theme';

import { api } from '@/shared/services/api';

import { Container } from './styles';
import { errorHandler } from '@/shared/utils/error-handler';

const Header = (): JSX.Element => {
  const { position } = useScrollPosition();
  const { theme } = useTheme();
  const { push } = useRouter();

  const headerRef = useRef<HTMLHeadingElement>(null);
  const headerSectionRef = useRef<HTMLElement>(null);

  // const onNavigateToApplication = async () => {
  //   try {
  //     await api.get(`/redirect_signin`);
  //   } catch (error) {
  //     const message = errorHandler(error);
  //     alert(message);
  //   }
  // };

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.transition = `200ms`;
      headerRef.current.style.boxShadow =
        position > 0 ? `0 4px 30px rgba(0, 0, 0, 0.1)` : `none`;
    }
  }, [position]);

  useEffect(() => {
    if (headerSectionRef.current) {
      if (position > 0) {
        headerSectionRef.current.style.border = `none`;
      } else {
        headerSectionRef.current.style.borderBottomWidth = `1px`;
        headerSectionRef.current.style.borderBottomStyle = `solid`;
        headerSectionRef.current.style.borderBottomColor =
          theme.colors.platinum;

        headerSectionRef.current.style.boxShadow = `none`;
      }
    }
  }, [position]);

  return (
    <Container ref={headerRef}>
      <section ref={headerSectionRef}>
        <nav>
          <ul>
            <li>
              <AnchorLink href="#welcome">Sobre</AnchorLink>
            </li>
            <li>
              <AnchorLink offset={() => -50} href="#services">
                Serviços
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset={() => -50} href="#team">
                Equipe
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#location">Localização</AnchorLink>
            </li>
          </ul>
        </nav>
        <h3>RITZ</h3>
        <button onClick={() => push(`http://127.0.0.1:5173`)}>Entrar</button>
      </section>
    </Container>
  );
};

export default Header;
