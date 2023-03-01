import Link from 'next/link';
import { HTMLAttributes, MutableRefObject, RefObject } from 'react';

import { Container } from './styles';

const Header = (): JSX.Element => {
  return (
    <Container>
      <section>
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
