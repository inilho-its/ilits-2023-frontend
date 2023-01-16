import clsx from 'clsx';
import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function DepartemenDayaTampung() {
  const DayaTampungTitle = () => {
    return (
      <div
        className={clsx(
          'lg:h-[80px] lg:pl-[32px]',
          'flex w-full justify-start rounded-[8px] border-[2px] border-solid border-bone-1000 bg-[#3872C3] pt-[8px]'
        )}
      >
        <Typography
          as='h5'
          variant='h5'
          className={clsx(
            'bordered1 text-left font-bold text-[#FFFFFF]',
            'lg:bordered lg:text-[48px] lg:leading-[64px]',
            'md:bordered md:text-[72px]',
            'sm:bordered sm:text-[72px]'
          )}
        >
          Daya Tampung Departemen
        </Typography>
      </div>
    );
  };
  return (
    <div
      className={clsx(
        'h-auto w-auto border-b-[2px] border-solid border-bone-1000',
        'w-full'
      )}
    >
      <div className='lg:flex'>
        <div
          className={clsx(
            'h-auto border-solid border-bone-1000 bg-[#8FCDEC]',
            'lg:h-auto lg:w-full lg:rounded-br-[0px]'
          )}
        >
          <div
            className={clsx(
              'pl-[32px] pr-[32px]',
              'lg:pt-[76px] lg:pl-[120px] lg:pr-[120px]'
            )}
          >
            <DayaTampungTitle />
            <div className='flex justify-center'>
              <div className='lg:mt-[28px] lg:w-[800px] lg:pb-[71px]'>
                <NextImage
                  src='/images/pageDepartemen/dayatampungSisfor.png'
                  width='85%'
                  height='48%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
