import Logo from '@/assets/logo/ragnarok-logo.png';
import Background from '@/assets/background/bg-yeXyXRoo.png';
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

import Image from 'next/image';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

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

export default function Home() {
  return (
    <main className='h-dvh snap-y snap-mandatory overflow-y-scroll scroll-smooth'>
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
                  className='duration-400 md:w-45 flex cursor-pointer items-center gap-2 rounded-lg border border-white bg-black px-4 py-2 transition hover:translate-y-1'
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

      <section className='flex h-dvh snap-start items-center justify-center'>
        2
      </section>

      <section className='flex h-dvh snap-start items-center justify-center'>
        3
      </section>
    </main>
  );
}
