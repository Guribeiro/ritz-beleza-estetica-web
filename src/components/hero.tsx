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
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 pt-10 sm:px-6 md:pt-14 xl:grid-cols-[1fr_minmax(0,30rem)_1fr] xl:gap-12">
        <DecoArch className="mx-auto max-w-[24rem] sm:max-w-[30rem] xl:order-2">
          <h1 id="masthead" className="absolute inset-x-[12%] top-[24%]">
            <RitzLogo className="w-full" />
          </h1>
        </DecoArch>

        <p className="mx-auto max-w-[24ch] self-center text-center font-display text-2xl leading-tight text-balance text-marfim md:text-4xl xl:order-1 xl:mx-0 xl:justify-self-end xl:pb-24 xl:text-right xl:text-[2rem]">
          Cabelo, maquiagem, unhas e estética com atenção a cada detalhe.
        </p>

        <div className="flex flex-col items-center gap-6 pb-12 text-center xl:order-3 xl:items-start xl:pb-24 xl:text-left">
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
