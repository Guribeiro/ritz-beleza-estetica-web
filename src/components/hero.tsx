import { IconBrandWhatsapp } from '@tabler/icons-react';
import heroImage from '@/assets/ritz-home-background.png';
import { salon, whatsappLink } from '@/config/salon';
import { Button } from '@/components/ui/button';
import { DecoArch } from '@/components/deco-arch';

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden on-laca">
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 md:pt-10">
        <div id="masthead" className="text-center">
          <h1>
            <span className="[margin-right:-0.28em] block font-display text-[clamp(4.5rem,17vw,10.5rem)] leading-[0.85] tracking-[0.28em]">
              RITZ
            </span>
            <span className="mt-4 block text-base font-light tracking-[0.12em] text-latao md:text-xl">
              Beleza & Estética
            </span>
          </h1>
        </div>

        <div className="mt-10 grid items-end gap-10 md:mt-14 lg:grid-cols-[1fr_minmax(0,24rem)_1fr] lg:gap-14">
          <div className="max-w-[24ch] self-center text-marfim/85 lg:order-1 lg:justify-self-end lg:pb-24 lg:text-right">
            <p className="font-display text-2xl leading-tight text-marfim md:text-4xl">
              Cabelo, make, unhas e pele cuidados com calma.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:order-3 lg:pb-24">
            <p className="max-w-[34ch] text-marfim/75">
              No {salon.address.place}, em Arujá. {salon.hours.display}.
            </p>
            <Button
              asChild
              variant="latao"
              size="xl"
              className="w-full sm:w-fit"
            >
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandWhatsapp aria-hidden />
                Agendar pelo WhatsApp
              </a>
            </Button>
          </div>

          <DecoArch
            image={heroImage}
            alt="Mulher sorrindo com longos cabelos ruivos em movimento"
            className="mx-auto max-w-[20rem] sm:max-w-[24rem] lg:order-2"
          />
        </div>
      </div>
    </section>
  );
}
