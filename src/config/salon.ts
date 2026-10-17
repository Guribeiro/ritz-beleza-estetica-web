import type { StaticImageData } from 'next/image';

import cabelo from '@/assets/services/cabelo.jpg';
import estetica from '@/assets/services/estetica.jpg';
import make from '@/assets/services/make.jpg';
import unhas from '@/assets/services/unhas.jpg';

/**
 * Dados do salão em um só lugar. Fonte: Instagram @ritz.aruja.
 * TODO(cliente): confirmar o número de WhatsApp — o Instagram não divulga
 * um; este é o que o site anterior usava.
 */
export const salon = {
  name: 'Ritz Beleza & Estética',
  phone: { display: '(11) 4654-1352', tel: '+551146541352' },
  whatsapp: '5511968657222',
  address: {
    place: 'Arujá Lagos Boulevard',
    street: 'Estr. de Santa Isabel, 1201',
    district: 'Caputera',
    city: 'Arujá',
    state: 'SP',
    postalCode: '07435-180',
  },
  hours: {
    display: 'Terça a sábado, das 8h às 20h',
    days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '20:00',
  },
  instagram: {
    handle: 'ritz.aruja',
    url: 'https://www.instagram.com/ritz.aruja/',
  },
  facebook: 'https://www.facebook.com/salaoritzbeleza',
} as const;

export const fullAddress = `${salon.address.street} – ${salon.address.district}, ${salon.address.city} – ${salon.address.state}, ${salon.address.postalCode}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${salon.address.place}, ${fullAddress}`)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

export function whatsappLink(service?: string) {
  const text = service
    ? `Olá! Gostaria de agendar ${service.toLowerCase()} no Ritz.`
    : 'Olá! Gostaria de agendar um horário no Ritz.';
  return `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(text)}`;
}

export type ServiceCategory = {
  id: string;
  name: string;
  summary: string;
  image: StaticImageData;
  imageAlt: string;
  /** Classe object-position do Tailwind, para fotos que pedem outro recorte. */
  imagePosition?: string;
  services: { name: string; detail: string }[];
};

/** Organizado pelos destaques do Instagram: Cortes, Escovas, Penteados, Make, Unhas. */
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'cabelo',
    name: 'Cabelo',
    summary: 'Do corte do dia a dia ao penteado da festa.',
    image: cabelo,
    imageAlt: 'Cabelo castanho com mechas iluminadas e cachos modelados',
    services: [
      { name: 'Corte', detail: 'Feminino, com lavagem e finalização' },
      { name: 'Escova', detail: 'Lisa, modelada ou com ondas' },
      { name: 'Penteado', detail: 'Para eventos, noivas e madrinhas' },
      { name: 'Tranças', detail: 'Laterais, embutidas e boho' },
      {
        name: 'Coloração e mechas',
        detail: 'Loiros, iluminados e retoque de raiz',
      },
    ],
  },
  {
    id: 'make',
    name: 'Make',
    summary: 'Maquiagem que acompanha a ocasião, não esconde você.',
    image: make,
    imageAlt: 'Close de olho com sombra dourada recebendo máscara de cílios',
    services: [
      {
        name: 'Maquiagem social',
        detail: 'Para jantares, formaturas e eventos',
      },
      { name: 'Maquiagem de noiva', detail: 'Para o grande dia' },
    ],
  },
  {
    id: 'unhas',
    name: 'Unhas',
    summary: 'Cuidado de mãos e pés com acabamento impecável.',
    image: unhas,
    imageAlt: 'Mão com unhas em esmalte nude sobre tecido claro',
    services: [
      { name: 'Manicure', detail: 'Cutilagem e esmaltação' },
      { name: 'Pedicure', detail: 'Cutilagem, lixamento e esmaltação' },
    ],
  },
  {
    id: 'estetica',
    name: 'Estética',
    summary: 'Pele cuidada e depilação com conforto.',
    image: estetica,
    imagePosition: 'object-[72%_50%]',
    imageAlt: 'Mãos fazendo massagem facial em ambiente à luz de vela',
    services: [
      {
        name: 'Tratamento facial',
        detail: 'Limpeza, hidratação e revitalização',
      },
      { name: 'Depilação com cera', detail: 'Corpo e rosto' },
    ],
  },
];
