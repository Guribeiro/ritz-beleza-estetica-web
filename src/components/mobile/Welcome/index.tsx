import Image from 'next/image';
import { IconBrandWhatsapp } from '@tabler/icons-react';

import backgroundImage from '@/assets/ritz-home-background.png';
import Link from 'next/link';

import { Container } from './styles';

const Welcome = (): JSX.Element => {
  return (
    <Container id="welcome">
      <article>
        <div>
          <h3>
            Melhoramos o seu dia através da sua <br />
            <span>autoestima</span>
          </h3>
          <p>
            Temos tudo o que você precisa para se sentir bem e feliz com a sua
            aparência.
          </p>

          <ul>
            <li>
              Ritz é um salão de beleza e estética focado no bem estar de seus
              clientes
            </li>
            <li>
              Profissionais especializados e prontos para os cuidados que você
              merece
            </li>
            <li>Trabalhamos com os melhores produtos do mercado</li>
          </ul>
        </div>

        <figure>
          <Image src={backgroundImage} alt="woman" />
        </figure>
      </article>

      <Link
        href="https://wa.me/5511968657222?text=Ol%C3%A1%2C+eu+gostaria+agendar+um+hor%C3%A1rio"
        target="_blank"
      >
        <IconBrandWhatsapp />
      </Link>
    </Container>
  );
};

export default Welcome;
