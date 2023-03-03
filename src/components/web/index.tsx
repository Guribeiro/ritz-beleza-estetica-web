import Footer from './Footer';
import Header from './Header';
import Services from './Services';
import Team from './Team';
import Welcome from './Welcome';
import Location from './Location';
import { Container } from './styles';

const Web = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <Welcome />
      <Services />
      <Team />
      <Location />
      <Footer />
    </Container>
  );
};

export default Web;
