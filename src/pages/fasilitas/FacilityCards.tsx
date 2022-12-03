import * as React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export type FacilityCardProps = {
  facilityName: string;
  imgSrc: string;
  desc: string;
  headerStyle: string;
};

export default function FacilityCards({
  facilityName,
  imgSrc,
  desc,
  headerStyle,
}: FacilityCardProps) {
  return (
    <div className='mb-[32px] pl-[18px] pr-[18px] last:mb-[82px]'>
      <div className={headerStyle}>
        <Typography
          as='h5'
          variant='h5'
          className='text-[18px] font-semibold text-neutral-100 sm:text-[24px] md:text-[24px] lg:mt-[10px] lg:text-[24px]'
        >
          {facilityName}
        </Typography>
      </div>
      <div
        className={clsxm(
          'z-0 mt-[-13px] flex justify-center rounded-[20px] border-[2px] border-solid border-neutral-1000 bg-neutral-100 p-[20px] text-[18px]',
          'lg:h-[661px] lg:w-[618px] lg:p-[53px] lg:pt-[48px] lg:pb-[32px]'
        )}
      >
        <div>
          <div className='mb-[32px] lg:w-[512px]'>
            <NextImage
              alt='comingsoon'
              src={imgSrc}
              width='100%'
              height='55%'
              layout='responsive'
              objectFit='contain'
            />
          </div>
          <Typography variant='body' className='text-center font-medium'>
            {desc}
          </Typography>
        </div>
      </div>
    </div>
  );
}
