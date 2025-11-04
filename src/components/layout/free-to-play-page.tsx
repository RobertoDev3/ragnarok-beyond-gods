'use client';

import { baloo2, rougeScript } from '@/fonts';
import Image, { StaticImageData } from 'next/image';
import { Divider } from '@/assets/others/divider';

import Background2 from '@/assets/background/C12LvZZY.jpg';
import PayonCard from '@/assets/cards/b1fff5940b7256787cb7e8c9e7699e372941f869.png';
import PayonImage from '@/assets/cards/e9a51ac6ae3c681e868ae94bb2e8907a8cc59682.png';
import PayonPet from '@/assets/others/9652382a4380c9e7cbfec72ea609d063196ad771.png';
import KapoonCard from '@/assets/cards/69e099369393a6a021c4af25e476b0105c543ff8.png';
import KapoonImage from '@/assets/cards/5538f7563fa6b8d8c9eea00a0303835dcf6275f7.png';
import KapoonPet from '@/assets/others/aa1c6d474c847615c1bb1d9e7bb16c7c9feb5d19.png';
import { useState } from 'react';

type CarrouselImageProps = {
  name: string;
  url: StaticImageData;
  pet: StaticImageData;
  card: StaticImageData;
};

const carrouselImages: CarrouselImageProps[] = [
  {
    name: 'Payon',
    url: PayonImage,
    pet: PayonPet,
    card: PayonCard,
  },
  {
    name: 'Kapoon',
    url: KapoonImage,
    pet: KapoonPet,
    card: KapoonCard,
  },
];

export function FreeToPlayPage() {
  const [cardSelected, setCardSelected] = useState<CarrouselImageProps>(
    carrouselImages[0],
  );

  return (
    <section
      style={
        {
          '--img': `url(${Background2.src})`,
          '--speed': '20s',
          '--tileH': '720px',
          '--tileW': '1224px',
        } as React.CSSProperties
      }
      className='bg-(image:--img) bg-size-[var(--tileW)_var(--tileH)] relative h-dvh animate-[bgScrollY_var(--speed)_linear_infinite] snap-start overflow-hidden bg-repeat'
    >
      <div className='text-background mx-auto flex h-full max-w-7xl items-center justify-center px-4'>
        <div className='grid grid-cols-1 items-center gap-6 lg:grid-cols-[max-content_1fr]'>
          <div
            className={`${baloo2.className} flex flex-col items-center gap-6 lg:items-start`}
          >
            <div className='relative w-fit'>
              <p className='text-8xl font-semibold'>FREE</p>
              <p
                className={`${rougeScript.className} -rotate-5 text-secondary absolute -bottom-5 left-1/2 -translate-x-1/2 text-nowrap text-6xl font-bold`}
              >
                to Play
              </p>
            </div>

            <Divider className='w-full min-w-[200px] max-w-[400px]' />

            <div className='max-w-[400px]'>
              <p className='text-[clamp(16px,4vw,18px)] font-medium leading-relaxed'>
                Beyonds Gods tem uma missão: ser F2P sem P2W. <br />
                Como? Sussurro: Eles não vendem Nyan na loja... <br />
                Monetização aqui vem com rolos de lã, gachas de skins, passes de
                batalha, VIP e pacotes cosméticos.
              </p>
              <p className='text-xs'>
                * Sabia que skins com RGB causam 20% a mais de dano emocional?
              </p>
            </div>
          </div>
          <div className='relative h-full lg:row-span-2'>
            {cardSelected && (
              <>
                <Image
                  alt={`Cenário: ${cardSelected.name}`}
                  src={cardSelected.url}
                  priority
                  className='aspect-video h-full w-full max-w-2xl select-none'
                />
                <Image
                  alt={`Pet do cenário ${cardSelected.name}`}
                  src={cardSelected.pet}
                  className='h-30 pointer-events-none absolute -bottom-6 -right-3 w-auto select-none sm:-bottom-8 sm:-right-5 sm:h-40'
                  priority
                />
              </>
            )}
          </div>
          <div className='flex items-center gap-2'>
            {carrouselImages.map(item => {
              const isActive = cardSelected.name === item.name;

              return (
                <button
                  key={item.name}
                  type='button'
                  onClick={() => setCardSelected(item)}
                  className={`duration-400 shrink-0 rounded-md transition-transform ${isActive && '-rotate-10 border-background/10 border-4'}`}
                  title={item.name}
                >
                  <div className='relative aspect-video h-12 w-auto overflow-hidden rounded'>
                    <Image
                      alt={`Carta de ${item.name}`}
                      src={item.card}
                      priority
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
