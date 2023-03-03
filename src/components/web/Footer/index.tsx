import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
              <Link
                href="https://www.facebook.com/salaoritzbeleza"
                target="_blank"
              >
                <IconBrandFacebook className="facebook" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/ritz.aruja/?hl=pt-br"
                target="_blank"
              >
                <IconBrandInstagram className="instagram" />
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/5511968657222?text=Ol%C3%A1%2C+eu+gostaria+agendar+um+hor%C3%A1rio"
                target="_blank"
              >
                <IconBrandWhatsapp className="whatsapp" />
              </Link>
            </li>
          </ul>
        </article>

        <article>
          <p>📞 (11) 96865-7222</p>
          <div>
            <p>Ir para o topo</p>
            <AnchorLink href="#welcome">
              <IconChevronUp />
            </AnchorLink>
          </div>
        </article>
      </section>
    </Container>
  );
};

export default Footer;
