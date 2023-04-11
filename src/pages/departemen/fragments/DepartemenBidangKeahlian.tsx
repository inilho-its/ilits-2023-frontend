import clsx from 'clsx';
import * as React from 'react';

import Typography from '@/components/typography/Typography';

export type DepartemenBidangKeahlianProps = {
  bidangKeahlian1: string;
  bidangKeahlian2: string;
  bidangKeahlian3: string;
  bidangKeahlian4: string;
  bidangKeahlian5: string;
};

export default function DepartemenBidangKeahlian({
  bidangKeahlian1,
  bidangKeahlian2,
  bidangKeahlian3,
  bidangKeahlian4,
  bidangKeahlian5,
}: DepartemenBidangKeahlianProps) {
  type CardBidangKeahlianProps = {
    bidangKeahlian: string;
  };
  const CardBidangKeahlian = ({ bidangKeahlian }: CardBidangKeahlianProps) => {
    return (
      <div className='flex justify-center pb-[30px] lg:pb-0'>
        <div className='mb-[24px] flex h-[120px] w-[220px] flex-col justify-center rounded-[8px] border-[2px] border-solid border-bone-1000 bg-white lg:mb-0 min-lg:mb-[24px]'>
          <Typography variant='body' className=' text-center lg:text-[16px]'>
            {bidangKeahlian}
          </Typography>
        </div>
      </div>
    );
  };

  const data = [
    { bidangKeahlian: bidangKeahlian1 },
    { bidangKeahlian: bidangKeahlian2 },
    { bidangKeahlian: bidangKeahlian3 },
    { bidangKeahlian: bidangKeahlian4 },
    { bidangKeahlian: bidangKeahlian5 },
  ];

  return (
    <div className='xl:h-[440px]'>
      <div
        className={clsx(
          'h-auto w-auto border-b-[2px] border-solid border-bone-1000',
          'w-full'
        )}
      >
        <div className='lg:flex'>
          <div
            className={clsx(
              'h-auto border-solid border-bone-1000 bg-[#FF7A66]',
              'lg:h-auto lg:w-full lg:rounded-br-[0px]'
            )}
          >
            <div
              className={clsx(
                'flex justify-center',
                'lg:pt-[28px] lg:pb-[28px]'
              )}
            >
              <Typography
                as='h5'
                variant='h5'
                className={clsx(
                  'stroke-sm pt-[23px] pb-[23px] text-left text-[18px] font-bold text-[#FFFFFF]',
                  'lg:stroke lg:pt-0 lg:pb-0 lg:text-[48px] lg:leading-[64px]',
                  'md:stroke-sm md:text-[32px]',
                  'sm:stroke-sm sm:text-[32px]'
                )}
              >
                Bidang Keahlian Departemen
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className='relative z-30 mt-[54px] min-lg:flex min-lg:flex-wrap min-lg:justify-center min-lg:gap-[24px] xl:mt-[100px] xl:mb-[100px] xl:justify-center'>
        {data?.map((v, i) => (
          <CardBidangKeahlian key={`Card-Item-key-${i}`} {...v} />
        ))}
      </div>
    </div>
  );
}
