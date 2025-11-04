import { FreeToPlayPage } from '@/components/layout/free-to-play-page';
import { HomePage } from '@/components/layout/home-page';

export default function Home() {
  return (
    <main className='h-dvh snap-y snap-mandatory overflow-y-scroll scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
      <HomePage />
      <FreeToPlayPage />

      <section className='flex h-dvh snap-start items-center justify-center'>
        3
      </section>
    </main>
  );
}
