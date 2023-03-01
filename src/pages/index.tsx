import Header from '@/components/Header';
import Welcome from '@/components/Welcome';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

import { Main } from '@/styles/home';

export default function Home() {
  return (
    <Main>
      <Header />
      <Welcome />
      <Services />
      <Team />
      <Location />
      <Footer />
    </Main>
  );
}
