import Image from 'next/image';

import tratamentoFacialImage from '@/assets/services/tratamento-facial.png';
import manicureImage from '@/assets/services/manicure.png';
import cabelosImage from '@/assets/services/cabelos.png';
import ceragemImage from '@/assets/services/ceragem.png';
import makeupImage from '@/assets/services/makeup.png';

import { Container } from './styles';
import Link from 'next/link';

const Services = (): JSX.Element => {
  return (
    <Container>
      <article>
        <h2>Contamos com uma variedade de serviços</h2>
        <h3>NOSSOS SERVIÇOS</h3>
        <article>
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

          <div className="circle">
            <Link href="/">
              <span>Agendar um horário</span>
            </Link>
          </div>
        </article>
      </article>
    </Container>
  );
};

export default Services;
