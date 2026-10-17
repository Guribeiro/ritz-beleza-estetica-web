'use client';

import Image from 'next/image';
import { serviceCategories, whatsappLink } from '@/config/salon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ServicesMenu() {
  return (
    <section
      id="servicos"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32"
    >
      <div className="max-w-[40ch]">
        <h2 className="font-display text-5xl leading-none md:text-6xl">
          Serviços
        </h2>
        <p className="mt-5 text-nevoa">
          Escolha o que quer fazer e agende direto pelo WhatsApp. A mensagem já
          vai com o nome do serviço.
        </p>
      </div>

      <Tabs defaultValue={serviceCategories[0].id} className="mt-14 gap-0">
        <TabsList
          variant="line"
          aria-label="Categorias de serviço"
          className="h-auto! w-full flex-wrap justify-start gap-x-6 gap-y-2 border-b border-border p-0 pb-px sm:gap-x-8"
        >
          {serviceCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex-none px-0 pt-0 pb-3 font-display text-xl font-normal text-nevoa after:bg-latao-escuro! sm:text-2xl md:text-4xl data-active:text-grafite"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {serviceCategories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="grid gap-12 pt-12 text-base lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-24"
          >
            <div>
              <p className="max-w-[48ch] text-xl font-light">
                {category.summary}
              </p>
              <ul className="mt-8 border-t border-border">
                {category.services.map((service) => (
                  <li
                    key={service.name}
                    className="flex flex-col gap-2 border-b border-border py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <div>
                      <h3 className="text-xl font-normal">{service.name}</h3>
                      <p className="text-nevoa">{service.detail}</p>
                    </div>
                    <a
                      href={whatsappLink(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-normal tracking-wide text-jade underline decoration-latao underline-offset-6 transition-colors hover:text-jade-escuro hover:decoration-jade"
                    >
                      Agendar {service.name.toLowerCase()}
                      <span className="sr-only"> pelo WhatsApp</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="order-first mx-auto w-full max-w-60 lg:order-last lg:max-w-none">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-full outline outline-offset-8 outline-latao">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  placeholder="blur"
                  sizes="(min-width: 768px) 20rem, 90vw"
                  className="size-full object-cover"
                />
              </div>
            </figure>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
