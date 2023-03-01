import Image from 'next/image';
import Link from 'next/link';
import { IconBrandWhatsapp } from '@tabler/icons-react';

import { Container } from './styles';

import backgroundImage from '@/assets/ritz-home-background.png';

const Welcome = (): JSX.Element => {
  return (
    <Container>
      <article>
        <aside>
          <section>
            <h3>
              Melhoramos o seu <br /> dia através da sua{` `}
              <span>autoestima</span>
            </h3>
            <p>
              Temos tudo o que você precisa <br />
              para se sentir bem e feliz com <br /> a sua aparência.
            </p>
          </section>

          <section>
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
          </section>
        </aside>

        <figure>
          <Image src={backgroundImage} alt="woman" />
        </figure>

        <aside className="right-side">
          <section>
            <h4>Horário de funcionamento</h4>
            <p>
              📅 <span>Terça-feira à sábado</span>
            </p>
            <p>
              🕒 <span>08h às 20h</span>
            </p>
          </section>

          <section>
            <h2>Agende o seu horário</h2>
            <Link href={`/`}>
              <IconBrandWhatsapp size={16} />
              <span>Fale conosco</span>
            </Link>
          </section>
        </aside>
      </article>
    </Container>
  );
};

export default Welcome;
