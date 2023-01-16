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
          'lg:h-[80px] lg:pl-[32px]',
          'flex w-full justify-start rounded-[8px] border-[2px] border-solid border-bone-1000 bg-[#F78E54] pt-[8px]'
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
      <div>
        <div className='rounded-[12px] rounded-b-[0px] border-[2px] border-solid border-bone-1000 bg-white lg:h-[240px] lg:w-[360px]'>
          <div className='w-full'>
            <NextImage
              src={akreditasiImg}
              width='100%'
              height='66%'
              objectFit='contain'
              layout='responsive'
              imgClassName='lg:rounded-[10px]'
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
              'lg:mb-[56px] lg:pt-[76px] lg:pl-[120px] lg:pr-[120px]'
            )}
          >
            <AkreditasiTitle />
            <div className='mt-[56px] mb-[76px] flex justify-center gap-[64px]'>
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
