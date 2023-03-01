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
              <Link href="/">Serviços</Link>
            </li>
            <li>
              <Link href="/">Equipe</Link>
            </li>
          </ul>
        </nav>
        <h3>RITZ</h3>
        <a>entrar</a>
      </section>
    </Container>
  );
};

export default Header;
