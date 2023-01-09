import clsx from 'clsx';
import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function Divider() {
  return (
    <div
      className={clsx(
        'border-t-solid border-b-solid flex h-[100px] w-full justify-between border-t-[2px] border-b-[2px] border-t-bone-1000 border-b-bone-1000 bg-[#FF7A66]',
        'lg:h-[144px]'
      )}
    >
      <div className='sm:ml-[-58px] sm:mt-[-2px] md:ml-[50px] md:mt-[-14px] md:w-[90px] lg:mt-[-24px] lg:w-[150px]'>
        <NextImage
          alt='comingsoon'
          src='/images/pageFasilitas/fasilitas-deco-eyes.png'
          width='100%'
          height='100%'
          layout='responsive'
          objectFit='contain'
          priority
        />
      </div>
      <div className='ml-[0px] mt-[-6px] w-[70px] md:w-[0px] lg:w-[0px]'>
        <NextImage
          alt='comingsoon'
          src='/images/pageFasilitas/fasilitas-deco-eyes-mobile.png'
          width='100%'
          height='100%'
          layout='responsive'
          objectFit='contain'
          priority
        />
      </div>
      <Typography
        as='h4'
        variant='h4'
        className={clsx(
          'bordered bordered1 ml-[10px] mt-[8px] pt-[18px] pb-[18px] pl-[0px] pr-[0px] text-center text-[24px] font-extrabold text-neutral-100',
          'lg:bordered lg:mt-[15px] lg:ml-[-180px] lg:p-[40px] lg:text-[48px]',
          'md:mt-[15px] md:text-[27px]',
          'sm:mt-[15px] sm:text-[27px]'
        )}
      >
        Ada info Unik Buat Kamu!
      </Typography>
      <div
        className={clsx(
          'mr-[0px] w-[80px] pt-[40px]',
          'lg:mt-[-3px] lg:mr-[50px] lg:w-[120px]',
          'md:mt-[-13px] md:mr-[70px] md:w-[80px]',
          'sm:mt-[-13px] sm:mr-[20px] sm:w-[80px]'
        )}
      >
        <NextImage
          alt='comingsoon'
          src='/images/pageFasilitas/fasilitas-deco-megaphone.png'
          width='100%'
          height='100%'
          layout='responsive'
          objectFit='contain'
          priority
        />
      </div>
    </div>
  );
}
