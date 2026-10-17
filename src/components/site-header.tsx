'use client';

import { useEffect, useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { whatsappLink } from '@/config/salon';
import { Button } from '@/components/ui/button';
import { RitzLogo } from '@/components/ritz-logo';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#instagram', label: 'Instagram' },
  { href: '#visite', label: 'Visite' },
];

export function SiteHeader() {
  // O logotipo pequeno só aparece quando o masthead do hero sai da tela.
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const masthead = document.getElementById('masthead');
    if (!masthead) return;
    const observer = new IntersectionObserver(([entry]) =>
      setShowLogo(!entry.isIntersecting),
    );
    observer.observe(masthead);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b border-transparent on-laca transition-colors duration-300',
        showLogo && 'border-border',
      )}
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6">
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8 text-sm tracking-wide">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-marfim/80 transition-colors hover:text-latao"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#inicio"
          aria-label="Ritz, voltar ao início"
          aria-hidden={!showLogo}
          tabIndex={showLogo ? 0 : -1}
          className={cn(
            'col-start-2 transition-opacity duration-300',
            showLogo ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <RitzLogo variant="wordmark" title="Ritz" className="w-24" />
        </a>

        <div className="col-start-3 flex justify-end">
          <Button asChild variant="latao" size="lg" className="hidden md:flex">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <IconBrandWhatsapp aria-hidden />
              Agendar
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-lg"
                className="text-marfim hover:bg-marfim/10 hover:text-marfim md:hidden"
              >
                <MenuIcon className="size-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="h-svh border-none on-laca px-6 pt-20 pb-10 [&_[data-slot=sheet-close]]:text-marfim"
            >
              <SheetTitle>
                <RitzLogo className="w-56" />
              </SheetTitle>
              <SheetDescription className="sr-only">
                Navegação do site
              </SheetDescription>
              <nav aria-label="Menu" className="mt-6">
                <ul className="divide-y divide-border border-y border-border">
                  {links.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <a
                          href={link.href}
                          className="block py-5 font-display text-4xl"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button asChild variant="latao" size="xl" className="mt-auto">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandWhatsapp aria-hidden />
                  Agendar pelo WhatsApp
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
