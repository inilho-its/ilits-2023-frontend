import clsx from 'clsx';
import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export type DepartemenDayaTampungProps = {
  srcDayaTampungDesktop: string;
  srcDayaTampungMobile: string;
};
export default function DepartemenDayaTampung({
  srcDayaTampungDesktop,
  srcDayaTampungMobile,
}: DepartemenDayaTampungProps) {
  const DayaTampungTitle = () => {
    return (
      <div
        className={clsx(
          'sm:w-[500px] md:w-[500px] lg:h-[88px] lg:w-full lg:justify-start lg:pl-[32px]',
          'flex h-[48px] w-[329px] justify-center rounded-[8px] border-[2px] border-solid border-bone-1000 bg-[#3872C3] pt-[8px]'
        )}
      >
        <Typography
          as='h5'
          variant='h5'
          className={clsx(
            'bordered1 pt-[0.3rem] text-[21px] font-bold text-[#FFFFFF]',
            'lg:bordered lg:pt-0 lg:text-[48px] lg:leading-[64px]',
            'md:bordered1 md:text-[32px]',
            'sm:bordered1 sm:text-[32px]'
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
            <div className='flex justify-center pt-[43px] lg:justify-start lg:pt-0'>
              <DayaTampungTitle />
            </div>
            <div className='flex justify-center'>
              <div className='lg:mt-[28px] lg:w-[800px] lg:pb-[71px]'>
                <NextImage
                  src={srcDayaTampungDesktop}
                  width='85%'
                  height='47%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className='mt-[23px] w-[356px] pb-[120px] lg:hidden'>
                <NextImage
                  src={srcDayaTampungMobile}
                  width='55%'
                  height='70%'
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
