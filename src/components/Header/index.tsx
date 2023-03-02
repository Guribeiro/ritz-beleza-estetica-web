import { useScrollPosition } from '@/hooks/useScrollPosition';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/theme';

import { Container } from './styles';

const Header = (): JSX.Element => {
  const { position } = useScrollPosition();
  const { theme } = useTheme();

  const headerRef = useRef<HTMLHeadingElement>(null);
  const headerSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.transition = `300ms`;
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
              <Link href="/">Sobre</Link>
            </li>
            <li>
              <Link href="#services">Serviços</Link>
            </li>
            <li>
              <Link href="#team">Equipe</Link>
            </li>
            <li>
              <Link href="#location">Localização</Link>
            </li>
          </ul>
        </nav>
        <h3>RITZ</h3>
        <button>entrar</button>
      </section>
    </Container>
  );
};

export default Header;
