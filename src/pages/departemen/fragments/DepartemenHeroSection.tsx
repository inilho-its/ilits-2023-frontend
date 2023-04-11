import clsx from 'clsx';
import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';

export type DepartemenHeroSectionProps = {
  departmentName: string;
  facultyName: string;
};
export default function DepartemenHeroSection({
  departmentName,
  facultyName,
}: DepartemenHeroSectionProps) {
  return (
    <>
      <div className='layout relative z-20 w-full pb-[80px] lg:flex lg:pb-0'>
        <div
          className={clsx('lg:top-[9.5rem] lg:left-[-1.875rem] lg:mt-[9.5rem]')}
        >
          <div
            className={clsx(
              'text-center font-bold lg:max-w-[48.188rem] lg:px-7 lg:pt-7 lg:text-left'
            )}
          >
            <Typography
              as='h1'
              variant='h1'
              className={clsx(
                'stroke-sm pt-[155px] pr-[72px] pl-[72px] text-[24px] leading-[32px] text-[#FFC95D]',
                'lg:stroke lg:pt-6 lg:pr-[0px] lg:pl-[0px] lg:text-left lg:text-[80px] lg:leading-[96px]',
                'md:stroke md:text-[50px] md:leading-[50px]',
                'sm:stroke sm:text-[50px] sm:leading-[50px]'
              )}
            >
              {departmentName}
            </Typography>
            <Typography
              as='h5'
              variant='h5'
              className={clsx(
                'mt-[8px] text-[16px] font-semibold text-bone-1000',
                'lg:mt-[12px] lg:text-[24px]',
                'md:mt-[16px] md:text-[24px]',
                'sm:mt-[16px] sm:text-[24px]'
              )}
            >
              {facultyName}
            </Typography>
            <div className='z-20'>
              <ButtonLink
                variant='lightBlue'
                size='medium'
                className={clsx(
                  'mt-[24px] h-[32px] justify-center pt-[4px] pb-[4px] text-[12px] ',
                  'lg:mt-[48px] lg:h-[48px] lg:w-[202px] lg:pl-[20px] lg:pr-[20px] lg:text-[16px]',
                  'md:mt-[48px] md:h-[48px] md:text-[16px]',
                  'sm:mt-[48px] sm:h-[48px] sm:text-[16px]'
                )}
                href='#buttonScrollto'
              >
                Kenali Lebih Lanjut!
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
