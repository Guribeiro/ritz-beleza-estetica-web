import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from '@tabler/icons-react';
import { salon, whatsappLink } from '@/config/salon';

const socials = [
  { href: salon.instagram.url, label: 'Instagram', Icon: IconBrandInstagram },
  { href: salon.facebook, label: 'Facebook', Icon: IconBrandFacebook },
  { href: whatsappLink(), label: 'WhatsApp', Icon: IconBrandWhatsapp },
];

export function SiteFooter() {
  return (
    <footer className="on-laca pb-24 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 border-t border-border px-4 py-14 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-5xl leading-none tracking-[0.28em] text-latao">
            RITZ
          </p>
          <p className="mt-3 text-marfim/75">
            {salon.name}, {salon.address.city} – {salon.address.state}
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <ul className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center border border-border text-marfim transition-colors hover:border-latao hover:text-latao"
                >
                  <Icon aria-hidden className="size-5" stroke={1.5} />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${salon.phone.tel}`}
            className="text-marfim/85 hover:text-latao"
          >
            {salon.phone.display}
          </a>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-10 text-sm text-marfim/55 sm:px-6">
        © {new Date().getFullYear()} {salon.name}. Site por Gustavo Ribeiro.
      </p>
    </footer>
  );
}
