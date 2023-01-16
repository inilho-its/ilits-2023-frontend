import clsx from 'clsx';
import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export type DepartemenKnowMoreProps = {
  buildingName: string;
  kenaliLebihDesc: string;
  buildingImg: string;
};

export default function DepartemenKenaliLebih({
  kenaliLebihDesc,
  buildingName,
  buildingImg,
}: DepartemenKnowMoreProps) {
  const KnowMoreTitle = () => {
    return (
      <div
        className={clsx(
          'lg:h-[80px] lg:w-[500px]',
          'flex justify-center rounded-[8px] border-[2px] border-solid border-bone-1000 bg-[#FF7A66] pt-[8px]'
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
          Kenali Lebih Jauh!
        </Typography>
      </div>
    );
  };
  return (
    <div className='mt-[13.375rem]'>
      <div
        className={clsx(
          'h-auto w-auto border-b-[4px] border-solid border-bone-1000',
          'w-full'
        )}
      >
        <div className={clsx('bg-[#30302E]', 'lg:h-[80px]')}>
          <div className='lg:w-full'>
            <NextImage
              src='/images/pageDepartemen/knowMoreText.png'
              width='100%'
              height='6%'
              objectFit='contain'
              layout='responsive'
              alt=''
            />
          </div>
        </div>
        <div className='lg:flex'>
          <div
            className={clsx(
              'h-auto border-r-[4px] border-solid border-bone-1000 bg-[#FFBE3D]',
              'lg:h-auto lg:w-full lg:rounded-br-[0px]'
            )}
          >
            <div
              className={clsx(
                'p-[20px] pl-[32px] pr-[32px]',
                'lg:pt-[117px] lg:pl-[91px]'
              )}
            >
              <KnowMoreTitle />
              <Typography
                variant='body'
                className=' text-[14px] lg:mt-[36px] lg:mb-[36px] lg:min-h-[192px] lg:w-[491px] lg:text-[16px]'
              >
                {kenaliLebihDesc}
              </Typography>
              <div className='lg:w-[168px] lg:pb-[121px]'>
                <NextImage
                  src='/images/pageDepartemen/departemenDot.png'
                  width='100%'
                  height='18%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='bg-[#49AD7B] lg:w-full'>
            <div className='flex justify-center'>
              <div className='lg:w-[500px] lg:pt-[112.5px]'>
                <NextImage
                  src={buildingImg}
                  width='100%'
                  height='75%'
                  objectFit='contain'
                  layout='responsive'
                  alt='Gedung Departemen'
                />
              </div>
            </div>
            <div className='absolute bottom-0 flex w-auto justify-center bg-[#30302E] pt-[12px] pl-[24px] pr-[24px] lg:h-[52px]'>
              <div className='w-[28px]'>
                <NextImage
                  src='/images/pageDepartemen/location.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <Typography
                as='h5'
                variant='h5'
                className={clsx(
                  'mt-[2px] ml-[8px] text-[14px] font-semibold text-[#FFFFFF]',
                  'lg:text-[18px]',
                  'md:text-[18px]',
                  'sm:text-[18px]'
                )}
              >
                {buildingName}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
