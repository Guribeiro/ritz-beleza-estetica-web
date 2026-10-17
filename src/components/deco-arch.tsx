import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type DecoArchProps = {
  /** Conteúdo da janela do arco, desenhado sobre os raios. */
  children?: ReactNode;
  className?: string;
};

// Leque de raios saindo do centro da base da janela, em graus.
const RAYS = [18, 34, 50, 66, 82, 90, 98, 114, 130, 146, 162];

// Geometria em um viewBox de 400×580: a janela tem 320 de largura, com o
// centro do arco em (200, 220) e raio 160. A div da janela reproduz esse
// recorte com rounded-t-full, então as porcentagens abaixo vêm daí.
// Sequência de entrada: filetes do arco → conteúdo da janela → raios.
export function DecoArch({ children, className }: DecoArchProps) {
  return (
    <div className={cn('relative aspect-[400/580] w-full', className)}>
      <div className="absolute top-[10.345%] right-[10%] bottom-0 left-[10%] overflow-hidden rounded-t-full">
        <svg
          aria-hidden
          viewBox="0 0 320 520"
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-0 size-full"
        >
          {RAYS.map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={angle}
                x1={160}
                y1={520}
                x2={160 + Math.cos(rad) * 620}
                y2={520 - Math.sin(rad) * 620}
                stroke="var(--latao)"
                strokeOpacity={angle === 90 ? 0.55 : 0.32}
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
                pathLength={1}
                strokeDasharray={1}
                className="animate-trace motion-reduce:animate-none"
                style={{ animationDelay: `${1500 + i * 40}ms` }}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 animate-unveil motion-reduce:animate-none">
          {children}
        </div>
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
