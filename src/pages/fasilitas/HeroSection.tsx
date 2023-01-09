import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function HeroSection() {
  const handleClickScroll = () => {
    const element = document.getElementById('fasilitas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className='layout flex w-full pt-[4.9rem]'>
        <div className='m-auto flex'>
          <div className={clsx('px-7 pt-7 text-center font-bold')}>
            <Typography
              as='h1'
              variant='h1'
              className={clsx(
                'bordered1 pt-[100px] text-5xl text-[#FF9447] ',
                'lg:bordered lg:pt-6 lg:text-[80px]',
                'md:bordered md:text-[72px]',
                'sm:bordered sm:text-[72px]'
              )}
            >
              Fasilitas
            </Typography>
            <Typography
              as='h5'
              variant='h5'
              className={clsx(
                'mt-[8px] text-[14px] font-semibold text-bone-1000',
                'lg:mt-[15px] lg:text-[32px]',
                'md:mt-[15px] md:text-[28px]',
                'sm:mt-[15px] sm:text-[28px]'
              )}
            >
              Institut Teknologi Sepuluh Nopember
            </Typography>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Button
          variant='yellow'
          size='medium'
          className={clsx(
            'mt-[30px] h-[32px] w-[156px] justify-center pl-[20px] pr-[20px] pt-[4px] pb-[4px] text-[12px] ',
            'lg:mt-[48px] lg:h-[48px] lg:w-[202px] lg:text-[16px]',
            'md:mt-[48px] md:h-[48px] md:w-[202px] md:text-[16px]',
            'sm:mt-[48px] sm:h-[48px] sm:w-[202px] sm:text-[16px]'
          )}
          onClick={handleClickScroll}
        >
          Kenali Lebih Lanjut
        </Button>
      </div>
      <div className='mt-[126px] flex justify-center lg:mt-[74px]'>
        <div className='w-[390px] sm:w-[600px] md:w-[800px] lg:w-[897px]'>
          <NextImage
            alt='comingsoon'
            src='/images/pageFasilitas/fasilitas-img.png'
            width='100%'
            height='34.5%'
            layout='responsive'
            objectFit='contain'
            priority
          />
        </div>
      </div>
    </>
  );
}
