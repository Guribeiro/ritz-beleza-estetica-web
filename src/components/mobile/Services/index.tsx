import Image from 'next/image';
import Link from 'next/link';

import tratamentoFacialImage from '@/assets/services/tratamento-facial.png';
import manicureImage from '@/assets/services/manicure.png';
import cabelosImage from '@/assets/services/cabelos.png';
import ceragemImage from '@/assets/services/ceragem.png';
import makeupImage from '@/assets/services/makeup.png';

import { Container } from './styles';

const Services = (): JSX.Element => {
  return (
    <Container id="services">
      <article>
        <h2>Contamos com uma variedade de serviços</h2>
        <h3>NOSSOS SERVIÇOS</h3>

        <section>
          <Image src={tratamentoFacialImage} alt="tratamento facial" />
          <Image src={manicureImage} alt="imagem manicure" />
          <Image
            src={cabelosImage}
            alt="image mulher loira com longos cabelos"
          />
          <Image
            src={ceragemImage}
            alt="imagem perna recebendo cera depiladora"
          />
          <Image src={makeupImage} alt="imagem mulher sendo maquiada" />
        </section>

        <div className="circle">
          <Link
            href="https://wa.me/5511968657222?text=Ol%C3%A1%2C+eu+gostaria+agendar+um+hor%C3%A1rio"
            target="_blank"
          >
            <span>Agendar um horário</span>
          </Link>
        </div>
      </article>
    </Container>
  );
};

export default Services;
