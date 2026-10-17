import {
  fullAddress,
  mapsEmbedUrl,
  mapsUrl,
  salon,
  whatsappLink,
} from '@/config/salon';

export function Visit() {
  return (
    <section
      id="visite"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
        <div>
          <h2 className="font-display text-5xl leading-none md:text-6xl">
            Visite o Ritz
          </h2>

          <dl className="mt-12 grid gap-8">
            <div>
              <dt className="text-sm tracking-wide text-nevoa">Endereço</dt>
              <dd className="mt-1 text-xl font-normal">
                {salon.address.place}
              </dd>
              <dd className="mt-1 max-w-[32ch]">{fullAddress}</dd>
              <dd className="mt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-latao-escuro underline decoration-latao underline-offset-6 transition-colors hover:text-grafite hover:decoration-latao-escuro"
                >
                  Abrir no Google Maps
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm tracking-wide text-nevoa">Horário</dt>
              <dd className="mt-1 text-xl font-normal">
                {salon.hours.display}
              </dd>
            </div>
            <div>
              <dt className="text-sm tracking-wide text-nevoa">Contato</dt>
              <dd className="mt-1 text-xl font-normal">
                <a
                  href={`tel:${salon.phone.tel}`}
                  className="hover:text-latao-escuro"
                >
                  {salon.phone.display}
                </a>
              </dd>
              <dd className="mt-2">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-latao-escuro underline decoration-latao underline-offset-6 transition-colors hover:text-grafite hover:decoration-latao-escuro"
                >
                  Agendar pelo WhatsApp
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Moldura déco dupla: filete externo em latão e respiro em marfim. */}
        <div className="border border-latao p-2 lg:self-end">
          <div className="border border-latao/60">
            <iframe
              title={`Mapa: ${salon.address.place}, ${fullAddress}`}
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[4/3] w-full grayscale-[0.7] sepia-[0.15]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
