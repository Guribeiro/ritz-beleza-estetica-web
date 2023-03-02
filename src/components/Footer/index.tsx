import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconChevronUp,
} from '@tabler/icons-react';
import { Container } from './styles';

const Footer = (): JSX.Element => {
  return (
    <Container>
      <section>
        <article>
          <p>Ritz Beleza & Estética</p>

          <ul>
            <li>
              <Link href="/">
                <IconBrandFacebook className="facebook" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <IconBrandInstagram className="instagram" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <IconBrandWhatsapp className="whatsapp" />
              </Link>
            </li>
          </ul>
        </article>

        <article>
          <p>📞 (11) 96865-7222</p>
          <div>
            <p>Ir para o topo</p>
            <Link href="/">
              <IconChevronUp />
            </Link>
          </div>
        </article>
      </section>
    </Container>
  );
};

export default Footer;
