import Header from './Header';

import Welcome from './Welcome';
import Services from './Services';
import Team from './Team';

import Footer from '../web/Footer';
import { Container } from './styles';

const Mobile = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <Welcome />
      <Services />
      <Team />

      <Footer />
    </Container>
  );
};

export default Mobile;
