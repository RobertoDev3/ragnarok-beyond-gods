'use client';

import { baloo2, rougeScript } from '@/fonts';
import Image, { StaticImageData } from 'next/image';
import { Divider } from '@/assets/others/divider';

import Background2 from '@/assets/background/C12LvZZY.jpg';
import Arrow from '@/assets/arrow/arrow-7WwGzFFA.webp';
import PayonCard from '@/assets/cards/b1fff5940b7256787cb7e8c9e7699e372941f869.png';
import PayonImage from '@/assets/cards/e9a51ac6ae3c681e868ae94bb2e8907a8cc59682.png';
import PayonPet from '@/assets/pets/9652382a4380c9e7cbfec72ea609d063196ad771.png';
import KapoonCard from '@/assets/cards/69e099369393a6a021c4af25e476b0105c543ff8.png';
import KapoonImage from '@/assets/cards/5538f7563fa6b8d8c9eea00a0303835dcf6275f7.png';
import KapoonPet from '@/assets/pets/aa1c6d474c847615c1bb1d9e7bb16c7c9feb5d19.png';
import TradingHallCard from '@/assets/cards/f7173075da229b8252de506d3a3830b4e63b7298.png';
import TradingHallImage from '@/assets/cards/3c467c2f27fdcb20a6df70e3334e475b6d491158.png';
import TradingHallPet from '@/assets/pets/BLao8Lpc.png';
import MtMjolnirCard from '@/assets/cards/63e1c83eaa239e25dcd950b05c0c06705928227c.png';
import MtMjolnirImage from '@/assets/cards/3949d9e6142d4065afb8890458def9275a344824.png';
import MtMjolnirPet from '@/assets/pets/35c60c82e3e6a99a7927c4ce96d850f3e51128bd.png';
import ChamberOfTheSageCard from '@/assets/cards/e3be9e5e9039406bd9b634410303d92c7e5c1483.png';
import ChamberOfTheSageImage from '@/assets/cards/2470376f0f866394f6bdf8960849edb6384bcd48.png';
import ChamberOfTheSagePet from '@/assets/pets/1327879628796143fc07f01b0f9ec8a901bca702.png';

import { type CarouselApi } from '@/components/ui/carousel';

import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

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
  {
    name: 'Trading Hall',
    url: TradingHallImage,
    pet: TradingHallPet,
    card: TradingHallCard,
  },
  {
    name: 'Mt Mjolnir',
    url: MtMjolnirImage,
    pet: MtMjolnirPet,
    card: MtMjolnirCard,
  },
  {
    name: 'Chamber of the Sage',
    url: ChamberOfTheSageImage,
    pet: ChamberOfTheSagePet,
    card: ChamberOfTheSageCard,
  },
];

export function FreeToPlayPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItem = carrouselImages[selectedIndex];

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

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
              <p className='text-7xl font-semibold sm:text-8xl'>FREE</p>
              <p
                className={`${rougeScript.className} -rotate-5 text-secondary absolute -bottom-3 left-1/2 -translate-x-1/2 text-nowrap text-4xl font-bold sm:-bottom-5 sm:text-6xl`}
              >
                to Play
              </p>
            </div>

            <Divider className='w-full min-w-[200px] max-w-[500px]' />

            <div className='max-w-[500px]'>
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
            {selectedItem && (
              <>
                <Image
                  alt={`Cenário: ${selectedItem.name}`}
                  src={selectedItem.url}
                  priority
                  className='aspect-video h-full w-full max-w-2xl select-none'
                />
                <Image
                  alt={`Pet do cenário ${selectedItem.name}`}
                  src={selectedItem.pet}
                  className='h-30 pointer-events-none absolute -bottom-6 -right-3 w-auto select-none sm:-bottom-8 sm:-right-5 sm:h-40'
                  priority
                />
              </>
            )}
          </div>

          <div className='flex items-center justify-center gap-2 lg:justify-start'>
            <button
              onClick={() => {
                if (!carouselApi) return;
                const total = carrouselImages.length;
                const prev = (selectedIndex - 1 + total) % total;
                setSelectedIndex(prev);
                carouselApi.scrollTo(prev);
              }}
              className='active:-translate-x-1'
            >
              <Image alt='Seta para esquerda' src={Arrow} className='size-15' />
            </button>

            <Carousel
              opts={{
                align: 'center',
                loop: true,
              }}
              setApi={setCarouselApi}
              className='w-full max-w-sm'
            >
              <CarouselContent className='h-[100px] items-center'>
                {carrouselImages.map((item, index) => {
                  const isActive = index === selectedIndex;
                  return (
                    <CarouselItem
                      key={item.name}
                      onClick={() => {
                        if (!carouselApi) return;
                        setSelectedIndex(index);
                        carouselApi.scrollTo(index);
                      }}
                      className='basis-1/2 min-[420px]:basis-1/3'
                      title={item.name}
                    >
                      <div
                        className={`rounded-lg ${isActive && '-rotate-10 border-background/10 border-4'}`}
                      >
                        <Image
                          alt={`Carta de ${item.name}`}
                          src={item.card}
                          priority
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>

            <button
              onClick={() => {
                if (!carouselApi) return;
                const total = carrouselImages.length;
                const next = (selectedIndex + 1) % total;
                setSelectedIndex(next);
                carouselApi.scrollTo(next);
              }}
              className='active:translate-x-1'
            >
              <Image
                alt='Seta para direita'
                src={Arrow}
                className='size-15 rotate-180'
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
