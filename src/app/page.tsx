'use client';

import Logo from '@/assets/logo/ragnarok-logo.png';
import Background from '@/assets/background/bg-yeXyXRoo.png';
import Background2 from '@/assets/background/C12LvZZY.jpg';
import { FacebookIcon } from '@/assets/icons/facebook-icon';
import { YoutubeIcon } from '@/assets/icons/youtube-icon';
import { TiktokIcon } from '@/assets/icons/tiktok-icon';
import { DiscordIcon } from '@/assets/icons/discord-icon';
import { TwitterIcon } from '@/assets/icons/twitter-icon';
import { InstagramIcon } from '@/assets/icons/instagram-icon';
import { AppleIcon } from '@/assets/icons/apple-icon';
import { AndroidIcon } from '@/assets/icons/android-icon';
import { WindowsIcon } from '@/assets/icons/windows-icon';
import ArrowDown from '@/assets/arrow/arrow-down.png';
import PayonCard from '@/assets/cards/b1fff5940b7256787cb7e8c9e7699e372941f869.png';
import PayonImage from '@/assets/cards/e9a51ac6ae3c681e868ae94bb2e8907a8cc59682.png';
import PayonPet from '@/assets/others/9652382a4380c9e7cbfec72ea609d063196ad771.png';
import KapoonCard from '@/assets/cards/69e099369393a6a021c4af25e476b0105c543ff8.png';
import KapoonImage from '@/assets/cards/5538f7563fa6b8d8c9eea00a0303835dcf6275f7.png';
import KapoonPet from '@/assets/others/aa1c6d474c847615c1bb1d9e7bb16c7c9feb5d19.png';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { baloo2, rougeScript } from '@/fonts';
import { Divider } from '@/assets/others/divider';
import { useState } from 'react';

const socialLinks = [
  {
    name: 'Facebook',
    url: '/',
    icon: FacebookIcon,
  },
  {
    name: 'YouTube',
    url: '/',
    icon: YoutubeIcon,
  },
  {
    name: 'TikTok',
    url: '/',
    icon: TiktokIcon,
  },
  {
    name: 'Discord',
    url: '/',
    icon: DiscordIcon,
  },
  {
    name: 'Twitter',
    url: '/',
    icon: TwitterIcon,
  },
  {
    name: 'Instagram',
    url: '/',
    icon: InstagramIcon,
  },
];

const availablePlatforms = [
  {
    name: 'iOS/Mac',
    url: '/',
    icon: AppleIcon,
  },
  {
    name: 'Android',
    url: '/',
    icon: AndroidIcon,
  },
  {
    name: 'Windows',
    url: '/',
    icon: WindowsIcon,
  },
  {
    name: 'Discord',
    url: '/',
    icon: DiscordIcon,
  },
];

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

export default function Home() {
  const [cardSelected, setCardSelected] = useState<CarrouselImageProps>(
    carrouselImages[0],
  );

  return (
    <main className='h-dvh snap-y snap-mandatory overflow-y-scroll scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
      <section
        className='h-dvh snap-start flex-col bg-cover bg-center'
        style={{
          backgroundImage: `url(${Background.src})`,
        }}
      >
        <div className='mx-auto flex h-full max-w-7xl flex-col justify-between p-4'>
          <div className='flex justify-end gap-1.5'>
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <Link
                    href={url}
                    aria-label={name}
                    className='duration-400 bg-background/60 text-foreground flex rounded-full p-2.5 transition hover:translate-y-1'
                  >
                    <Icon className='size-5' />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{name}</TooltipContent>
              </Tooltip>
            ))}
          </div>

          <div className='flex flex-col items-center justify-center'>
            <Image
              src={Logo}
              width={400}
              height={400}
              alt='Logo do Ragnarok Beyond Gods'
              loading='eager'
              className='sm:h-100 drop-shadow-blue-100/50 h-60 w-auto select-none drop-shadow-2xl'
            />

            <div className='grid transform grid-cols-2 gap-2 md:-translate-y-5 md:grid-cols-4'>
              {availablePlatforms.map(({ name, url, icon: Icon }) => (
                <Link
                  key={name}
                  href={url}
                  className='duration-400 md:w-45 border-foreground bg-background flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 transition hover:translate-y-1'
                >
                  <div>
                    <Icon className='size-8' />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <span className='text-xs'>
                      {name === 'Discord' ? 'Participe do' : 'Disponível no'}
                    </span>
                    <span className='text-lg font-semibold'>{name}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div>
              <Image
                src={ArrowDown}
                height={80}
                width={58}
                alt='seta indicando rolagem para baixo'
                loading='eager'
                className='mt-5 h-10 w-auto scale-50 transform animate-bounce select-none drop-shadow-lg'
              />
            </div>
          </div>
        </div>
      </section>

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
          <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-2'>
            <div className={`${baloo2.className} flex flex-col gap-6`}>
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
                  Monetização aqui vem com rolos de lã, gachas de skins, passes
                  de batalha, VIP e pacotes cosméticos.
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
                    className='aspect-video h-full w-auto select-none'
                  />
                  <Image
                    alt={`Pet do cenário ${cardSelected.name}`}
                    src={cardSelected.pet}
                    className='pointer-events-none absolute -bottom-8 -right-5 h-40 w-auto select-none'
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

      <section className='flex h-dvh snap-start items-center justify-center'>
        3
      </section>
    </main>
  );
}
