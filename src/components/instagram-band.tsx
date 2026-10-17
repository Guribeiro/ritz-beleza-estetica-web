import { IconBrandInstagram } from '@tabler/icons-react';
import { salon } from '@/config/salon';
import { Button } from '@/components/ui/button';

export function InstagramBand() {
  return (
    <section id="instagram" className="border-t border-border on-laca">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-[1fr_auto] md:items-end md:py-24">
        <div>
          <h2 className="font-display text-4xl leading-none break-words text-latao sm:text-5xl md:text-6xl">
            @{salon.instagram.handle}
          </h2>
          <p className="mt-5 max-w-[46ch] text-marfim/85">
            Escovas, penteados, tranças, make e unhas: os trabalhos mais
            recentes da equipe saem primeiro no Instagram.
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          size="xl"
          className="w-full border-latao bg-transparent text-latao hover:bg-latao hover:text-laca sm:w-fit"
        >
          <a
            href={salon.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram aria-hidden />
            Ver no Instagram
          </a>
        </Button>
      </div>
    </section>
  );
}
