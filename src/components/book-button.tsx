import { IconBrandWhatsapp } from '@tabler/icons-react';
import { whatsappLink } from '@/config/salon';

/** Atalho de agendamento fixo no mobile, onde o botão do header não aparece. */
export function BookButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-30 flex h-14 items-center gap-2 bg-laca px-5 text-latao shadow-[0_0_0_1px_var(--latao)] md:hidden"
    >
      <IconBrandWhatsapp aria-hidden className="size-5" />
      Agendar
    </a>
  );
}
