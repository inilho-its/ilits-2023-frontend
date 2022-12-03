import clsx from 'clsx';
import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function FacilityBanner() {
  return (
    <div className='m-[16px] mb-[-20px] flex w-full justify-between rounded-[16px] border-[2px] border-solid border-bone-1000 bg-[#FF9447] lg:h-[144px] lg:w-[1255px] lg:rounded-[24px]'>
      <div className='ml-[-25px] lg:mt-[45px] lg:w-[110px]'>
        <NextImage
          alt='comingsoon'
          src='/images/pageFasilitas/fasilitas-deco-loc.png'
          width='35%'
          height='35%'
          layout='responsive'
          objectFit='contain'
        />
      </div>
      <Typography
        as='h4'
        variant='h4'
        className={clsx(
          'bordered text bordered1 ml-[24px] p-[18px] pl-[80px] pr-[80px] text-center text-2xl font-extrabold text-neutral-100',
          'lg:bordered lg:mt-[15px] lg:p-[40px] lg:text-[48px]'
        )}
      >
        Apa Saja Fasilitas di ITS?
      </Typography>
      <div className='lg:mt-[-20px] lg:mr-[-15px] lg:w-[100px]'>
        <NextImage
          alt='comingsoon'
          src='/images/pageFasilitas/fasilitas-deco-star.png'
          width='35%'
          height='35%'
          layout='responsive'
          objectFit='contain'
        />
      </div>
    </div>
  );
}
