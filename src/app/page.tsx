import { BookButton } from '@/components/book-button';
import { Hero } from '@/components/hero';
import { InstagramBand } from '@/components/instagram-band';
import { ServicesMenu } from '@/components/services-menu';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Visit } from '@/components/visit';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ServicesMenu />
        <InstagramBand />
        <Visit />
      </main>
      <SiteFooter />
      <BookButton />
    </>
  );
}
