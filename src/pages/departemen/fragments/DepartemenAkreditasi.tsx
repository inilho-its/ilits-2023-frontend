import clsx from 'clsx';
import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export type DepartemenAkreditasiProps = {
  akreditasiImg1: string;
  akreditasiImg2: string;
  akreditasiTitle1: string;
  akreditasiTitle2: string;
  akreditasiDesc1: string;
  akreditasiDesc2: string;
};
export default function DepartemenAkreditasi({
  akreditasiImg1,
  akreditasiImg2,
  akreditasiTitle1,
  akreditasiTitle2,
  akreditasiDesc1,
  akreditasiDesc2,
}: DepartemenAkreditasiProps) {
  const AkreditasiTitle = () => {
    return (
      <div
        className={clsx(
          'sm:w-[500px] md:w-[500px] lg:h-[88px] lg:w-full lg:justify-start lg:pl-[32px]',
          'flex h-[48px] w-[329px] justify-center rounded-[8px] border-[2px] border-solid border-bone-1000 bg-[#F78E54] pt-[8px]'
        )}
      >
        <Typography
          as='h5'
          variant='h5'
          className={clsx(
            'stroke-sm pt-[0.3rem] text-[24px] font-bold text-[#FFFFFF]',
            'lg:stroke lg:pt-0 lg:text-[48px] lg:leading-[64px]',
            'md:stroke-sm md:text-[32px]',
            'sm:stroke-sm sm:text-[32px]'
          )}
        >
          Akreditasi Bersaing!
        </Typography>
      </div>
    );
  };

  type AkreditasiCard = {
    akreditasiImg: string;
    akreditasiTitle: string;
    akreditasiDesc: string;
  };
  const CardAkreditasi = ({
    akreditasiImg,
    akreditasiTitle,
    akreditasiDesc,
  }: AkreditasiCard) => {
    return (
      <div className='mb-[32px] lg:mb-[0px]'>
        <div className='rounded-[12px] rounded-b-[0px] border-[2px] border-solid border-bone-1000 bg-white lg:h-[240px] lg:w-[360px]'>
          <div className='w-full'>
            <NextImage
              src={akreditasiImg}
              width='100%'
              height='66%'
              objectFit='contain'
              layout='responsive'
              imgClassName='rounded-[10px]'
              alt=''
            />
          </div>
        </div>
        <div
          className={clsx(
            'rounded-[12px] rounded-t-[0px] border-[2px] border-t-[0px] border-solid border-bone-1000 bg-white p-[16px] pb-[24px]',
            'lg:min-h-[172px] lg:w-[360px]'
          )}
        >
          <Typography
            as='h5'
            variant='h5'
            className={clsx(
              'mb-[12px] text-[20px] font-bold text-bone-1000',
              'lg:text-[32px] lg:leading-[48px]',
              'md:text-[32px]',
              'sm:text-[32px]'
            )}
          >
            {akreditasiTitle}
          </Typography>
          <Typography variant='body' className=' lg:text-[18px]'>
            {akreditasiDesc}
          </Typography>
        </div>
      </div>
    );
  };

  const data = [
    {
      akreditasiImg: akreditasiImg1,
      akreditasiTitle: akreditasiTitle1,
      akreditasiDesc: akreditasiDesc1,
    },
    {
      akreditasiImg: akreditasiImg2,
      akreditasiTitle: akreditasiTitle2,
      akreditasiDesc: akreditasiDesc2,
    },
  ];
  return (
    <div
      className={clsx(
        'h-auto w-auto border-b-[4px] border-solid border-bone-1000',
        'w-full'
      )}
    >
      <div className='lg:flex'>
        <div
          className={clsx(
            'h-auto border-solid border-bone-1000 bg-[#FCD2BB]',
            'lg:h-auto lg:w-full lg:rounded-br-[0px]'
          )}
        >
          <div
            className={clsx(
              'pb-[15px] lg:pb-[38px] lg:pt-[76px] lg:pl-[120px] lg:pr-[120px]'
            )}
          >
            <div className='flex justify-center pt-[43px] lg:flex-none lg:justify-start lg:pt-0'>
              <AkreditasiTitle />
            </div>
            <div className='mt-[32px] flex-wrap justify-center pl-[60px] pr-[60px] pb-[76px] lg:flex lg:flex-nowrap lg:gap-[64px]'>
              {data?.map((v, i) => (
                <CardAkreditasi key={`Card-Item-key-${i}`} {...v} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
