import Image from 'next/image';

import amandaImage from '@/assets/team/amanda.png';
import fernandaImage from '@/assets/team/fernanda.png';
import juliaImage from '@/assets/team/julia.png';
import larissaImage from '@/assets/team/larissa.png';
import pamelaImage from '@/assets/team/pamela.png';
import tamiresImage from '@/assets/team/tamires.png';

import { Container } from './styles';

const Team = (): JSX.Element => {
  return (
    <Container id="team">
      <article>
        <h2>Nossos profissionais especializados esperam por você</h2>
        <h3>NOSSA EQUIPE</h3>
        <article>
          <Image src={amandaImage} alt="tratamento facial" />
          <Image src={fernandaImage} alt="imagem manicure" />
          <Image src={juliaImage} alt="image mulher loira com longos cabelos" />
          <Image
            src={larissaImage}
            alt="imagem perna recebendo cera depiladora"
          />
          <Image src={pamelaImage} alt="imagem mulher sendo maquiada" />
          <Image src={tamiresImage} alt="imagem mulher sendo maquiada" />
        </article>
      </article>
    </Container>
  );
};

export default Team;
