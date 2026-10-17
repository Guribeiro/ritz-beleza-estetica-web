import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { logoPaths, logoViewBox } from '@/components/ritz-logo';
import { salon } from '@/config/salon';

// Imagem de compartilhamento (Open Graph) gerada no build a partir do hero:
// o arco "portal" com os raios e a logo, e a frase ao lado.
export const alt = `${salon.name}, salão de beleza no ${salon.address.place}, em Arujá`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const LACA = '#000000';
const LATAO = '#b8954f';
const MARFIM = '#efe4df';

const RAYS = [18, 34, 50, 66, 82, 90, 98, 114, 130, 146, 162];

// Mesma geometria do DecoArch (viewBox 400×580), escalada para a altura da imagem.
function archSvg() {
  const k = 600 / 580;
  const x = size.width - 80 - 400 * k;
  const [, , vbW, vbH] = logoViewBox.full.split(' ').map(Number);
  const logoW = 320 * 0.76;
  const logoH = (logoW * vbH) / vbW;

  const rays = RAYS.map((angle) => {
    const rad = (angle * Math.PI) / 180;
    const x2 = 200 + Math.cos(rad) * 640;
    const y2 = 580 - Math.sin(rad) * 640;
    const opacity = angle === 90 ? 0.55 : 0.32;
    return `<line x1="200" y1="580" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${LATAO}" stroke-opacity="${opacity}" stroke-width="1"/>`;
  }).join('');

  const logo = `<svg x="${40 + 320 * 0.12}" y="${60 + 520 * 0.24}" width="${logoW}" height="${logoH}" viewBox="${logoViewBox.full}">
    <g fill="url(#ouro)">
      <path d="${logoPaths.word}"/><path d="${logoPaths.diamond}"/>
      ${logoPaths.strands.map((d) => `<path d="${d}"/>`).join('')}
      <path d="${logoPaths.tagline}"/>
    </g>
  </svg>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size.width}" height="${size.height}" viewBox="0 0 ${size.width} ${size.height}">
    <defs>
      <linearGradient id="ouro" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#e6cf98"/><stop offset=".55" stop-color="#c3a15e"/><stop offset="1" stop-color="#9c7c43"/>
      </linearGradient>
      <clipPath id="janela"><path d="M40 580V220a160 160 0 0 1 320 0v360z"/></clipPath>
    </defs>
    <g transform="translate(${x.toFixed(1)} 30) scale(${k.toFixed(4)})">
      <g clip-path="url(#janela)">${rays}</g>
      ${logo}
      <g fill="none" stroke="${LATAO}" stroke-width="1.4">
        <path d="M28 580V220a172 172 0 0 1 344 0v360"/>
        <path d="M8 580V300h8v-80a184 184 0 0 1 368 0v80h8v280"/>
        <path d="M200 6l10 14-10 14-10-14z"/>
      </g>
    </g>
  </svg>`;
}

export default async function OpengraphImage() {
  const dir = join(process.cwd(), 'src/app/_og');
  const [italiana, jost] = await Promise.all([
    readFile(join(dir, 'Italiana-Regular.ttf')),
    readFile(join(dir, 'Jost-Light.ttf')),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        background: LACA,
        position: 'relative',
      }}
    >
      <img
        alt=""
        width={size.width}
        height={size.height}
        src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(archSvg())}`}
        style={{ position: 'absolute', inset: 0 }}
      />
      <div
        style={{
          position: 'absolute',
          left: 80,
          top: 0,
          bottom: 0,
          width: 560,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 36,
        }}
      >
        <div
          style={{
            fontFamily: 'Italiana',
            fontSize: 60,
            lineHeight: 1.15,
            textWrap: 'balance',
            color: MARFIM,
          }}
        >
          Cabelo, maquiagem, unhas e estética com atenção a cada detalhe.
        </div>
        <div style={{ width: 96, height: 1, background: LATAO }} />
        <div
          style={{
            fontFamily: 'Jost',
            fontSize: 26,
            letterSpacing: 1,
            color: LATAO,
          }}
        >
          {`${salon.address.place}, ${salon.address.city} – ${salon.address.state}`}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'Italiana', data: italiana, weight: 400, style: 'normal' },
        { name: 'Jost', data: jost, weight: 300, style: 'normal' },
      ],
    },
  );
}
