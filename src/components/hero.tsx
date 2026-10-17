import { IconBrandWhatsapp } from '@tabler/icons-react';
import { salon, whatsappLink } from '@/config/salon';
import { Button } from '@/components/ui/button';
import { DecoArch } from '@/components/deco-arch';
import { RitzLogo } from '@/components/ritz-logo';

// Hero "portal": o arco escalonado como a entrada do Ritz, com a logo na
// janela. Sem foto, de propósito: a identidade vem da geometria e do dourado.
export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden on-laca">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 pt-10 sm:px-6 md:pt-14 lg:grid-cols-[1fr_minmax(0,30rem)_1fr] lg:gap-12">
        <DecoArch className="mx-auto max-w-[24rem] sm:max-w-[30rem] lg:order-2">
          <h1 id="masthead" className="absolute inset-x-[12%] top-[24%]">
            <RitzLogo className="w-full" />
          </h1>
        </DecoArch>

        <p className="max-w-[24ch] self-center font-display text-2xl leading-tight text-marfim md:text-4xl lg:order-1 lg:justify-self-end lg:pb-24 lg:text-right">
          Cabelo, make, unhas e pele cuidados com calma.
        </p>

        <div className="flex flex-col gap-6 pb-12 lg:order-3 lg:pb-24">
          <p className="max-w-[34ch] text-marfim/75">
            No {salon.address.place}, em Arujá. {salon.hours.display}.
          </p>
          <Button asChild variant="latao" size="xl" className="w-full sm:w-fit">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <IconBrandWhatsapp aria-hidden />
              Agendar pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
