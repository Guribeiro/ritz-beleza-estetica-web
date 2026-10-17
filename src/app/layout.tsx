import type { Metadata, Viewport } from 'next';
import { Italiana, Jost } from 'next/font/google';
import { cn } from '@/lib/utils';
import { salon } from '@/config/salon';

import './globals.css';

const italiana = Italiana({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-italiana',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
});

const description = `Salão de beleza e estética no ${salon.address.place}, em Arujá. Cortes, escovas, penteados, maquiagem, unhas e estética. Agende pelo WhatsApp.`;

// URL pública do site, usada para gerar links absolutos das imagens de
// compartilhamento. Defina SITE_URL no deploy (ex.: https://seudominio.com.br);
// na Vercel, o domínio de produção é detectado automaticamente.
const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${salon.name} | Arujá – SP`,
  description,
  openGraph: {
    title: salon.name,
    description,
    siteName: salon.name,
    locale: 'pt_BR',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: salon.name,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: salon.name,
  telephone: salon.phone.tel,
  address: {
    '@type': 'PostalAddress',
    streetAddress: salon.address.street,
    addressLocality: salon.address.city,
    addressRegion: salon.address.state,
    postalCode: salon.address.postalCode,
    addressCountry: 'BR',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: salon.hours.days,
    opens: salon.hours.opens,
    closes: salon.hours.closes,
  },
  sameAs: [salon.instagram.url, salon.facebook],
  description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn(italiana.variable, jost.variable)}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
