import * as React from 'react';
import { BsHouseDoor } from 'react-icons/bs';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function ClosedFormPage() {
  return (
    <main>
      <section className=''>
        <div className='flex flex-col items-center space-y-4'>
          <div className='w-72 self-center sm:w-[400px] md:w-[480px] lg:w-[512px]'>
            <NextImage
              alt='ilits-logo'
              src='/images/ilits-logo.png'
              width='100%'
              height='40%'
              layout='responsive'
              objectFit='contain'
              priority
            />
          </div>
          <div>
            <Typography
              variant='h4'
              className='stroke-sm text-center text-4xl font-bold text-red-500 sm:text-[64px] sm:leading-[68px]'
            >
              Registration <br />
              Closed
            </Typography>
          </div>
          <div className='flex flex-col space-y-2'>
            <Typography
              variant='body'
              className='text-center text-sm font-medium sm:text-[16px] sm:leading-[24px]'
            >
              Jika anda memiliki pertanyaan, mohon hubungi kami melalui:
            </Typography>
            <div>
              <UnderlineLink
                href='https://wa.me/+6281906398138'
                className='mt-0'
              >
                CP 1 : Maharani
              </UnderlineLink>
            </div>
            <div>
              <UnderlineLink href='https://wa.me/+6285705782769'>
                CP 2 : Aufa
              </UnderlineLink>
            </div>
          </div>

          <ButtonLink
            href='/'
            variant='yellow'
            leftIcon={BsHouseDoor}
            className='mt-14 hidden font-semibold sm:inline-flex'
          >
            Kembali ke Halaman Utama
          </ButtonLink>
          <ButtonLink
            href='/'
            variant='yellow'
            size='small'
            leftIcon={BsHouseDoor}
            className='mt-6 inline-flex text-center font-semibold sm:hidden'
          >
            Kembali ke Halaman Utama
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
