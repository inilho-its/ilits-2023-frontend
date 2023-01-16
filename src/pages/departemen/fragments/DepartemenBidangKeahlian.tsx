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
      <div className='flex h-[120px] w-[220px] flex-col justify-center rounded-[8px] border-[2px] border-solid border-bone-1000 bg-white'>
        <Typography variant='body' className=' text-center lg:text-[16px]'>
          {bidangKeahlian}
        </Typography>
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
    <div className='lg:h-[440px]'>
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
                  'bordered1 text-left font-bold text-[#FFFFFF]',
                  'lg:bordered lg:text-[48px] lg:leading-[64px]',
                  'md:bordered md:text-[72px]',
                  'sm:bordered sm:text-[72px]'
                )}
              >
                Bidang Keahlian Departemen
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center lg:mt-[100px] lg:mb-[100px] lg:gap-[24px]'>
        {data?.map((v, i) => (
          <CardBidangKeahlian key={`Card-Item-key-${i}`} {...v} />
        ))}
      </div>
    </div>
  );
}
