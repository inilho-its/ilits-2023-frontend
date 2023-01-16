import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Typography from '@/components/typography/Typography';

export type DepartemenHeroSectionProps = {
  departmentName: string;
  facultyName: string;
  buttonScrollto: string;
};
export default function DepartemenHeroSection({
  departmentName,
  facultyName,
  buttonScrollto,
}: DepartemenHeroSectionProps) {
  const handleClickScroll = () => {
    const element = document.getElementById(buttonScrollto);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className='layout flex w-full'>
        <div className={clsx('lg:mt-[9.5rem] lg:ml-[-1.875rem]')}>
          <div className={clsx('max-w-[48.188rem] px-7 pt-7 font-bold')}>
            <Typography
              as='h1'
              variant='h1'
              className={clsx(
                'bordered1 pt-[100px] text-left text-5xl text-[#FFC95D]',
                'lg:bordered lg:pt-6 lg:text-[80px] lg:leading-[96px]',
                'md:bordered md:text-[72px]',
                'sm:bordered sm:text-[72px]'
              )}
            >
              {departmentName}
            </Typography>
            <Typography
              as='h5'
              variant='h5'
              className={clsx(
                'mt-[12px] text-[14px] font-semibold text-bone-1000',
                'lg:mt-[15px] lg:text-[24px]',
                'md:mt-[15px] md:text-[24px]',
                'sm:mt-[15px] sm:text-[24px]'
              )}
            >
              {facultyName}
            </Typography>
            <div className=''>
              <Button
                variant='lightBlue'
                size='medium'
                className={clsx(
                  'mt-[30px] h-[32px] w-[156px] justify-center pl-[20px] pr-[20px] pt-[4px] pb-[4px] text-[12px] ',
                  'lg:mt-[48px] lg:h-[48px] lg:w-[202px] lg:text-[16px]',
                  'md:mt-[48px] md:h-[48px] md:w-[202px] md:text-[16px]',
                  'sm:mt-[48px] sm:h-[48px] sm:w-[202px] sm:text-[16px]'
                )}
                onClick={handleClickScroll}
              >
                Kenali Lebih Lanjut!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
