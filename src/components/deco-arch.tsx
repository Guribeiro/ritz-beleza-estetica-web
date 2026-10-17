import Image, { type StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

type DecoArchProps = {
  image: StaticImageData;
  alt: string;
  className?: string;
};

// Geometria em um viewBox de 400×580: a janela tem 320 de largura, com o
// centro do arco em (200, 220) e raio 160. A div da janela reproduz esse
// recorte com rounded-t-full, então as porcentagens abaixo vêm daí.
export function DecoArch({ image, alt, className }: DecoArchProps) {
  return (
    <div className={cn('relative aspect-[400/580] w-full', className)}>
      <div className="absolute top-[10.345%] right-[10%] bottom-0 left-[10%] animate-unveil overflow-hidden rounded-t-full bg-laca motion-reduce:animate-none">
        <Image
          src={image}
          alt={alt}
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 22rem, 80vw"
          className="absolute inset-0 size-full object-cover object-[50%_30%]"
        />
      </div>

      <svg
        aria-hidden
        viewBox="0 0 400 580"
        className="pointer-events-none absolute inset-0 size-full overflow-visible"
        fill="none"
        stroke="var(--latao)"
        strokeWidth={1.25}
        vectorEffect="non-scaling-stroke"
      >
        <path
          className="animate-trace motion-reduce:animate-none"
          pathLength={1}
          strokeDasharray={1}
          d="M28 580V220a172 172 0 0 1 344 0v360"
        />
        <path
          className="animate-trace motion-reduce:animate-none"
          style={{ animationDelay: '200ms' }}
          pathLength={1}
          strokeDasharray={1}
          d="M8 580V300h8v-80a184 184 0 0 1 368 0v80h8v280"
        />
        <path
          className="animate-trace motion-reduce:animate-none"
          style={{ animationDelay: '600ms' }}
          pathLength={1}
          strokeDasharray={1}
          d="M200 6l10 14-10 14-10-14z"
        />
      </svg>
    </div>
  );
}
