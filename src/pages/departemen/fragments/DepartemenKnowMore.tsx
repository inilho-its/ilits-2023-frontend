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
          'sm:w-[500px] md:w-[500px] lg:h-[80px] lg:w-[500px]',
          'flex h-[48px] w-[274px] justify-center rounded-[8px] border-[2px] border-solid border-bone-1000 bg-[#FF7A66] pt-[8px]'
        )}
      >
        <Typography
          as='h5'
          variant='h5'
          className={clsx(
            'bordered1 pt-[0.3rem] text-[24px] font-bold text-[#FFFFFF]',
            'lg:bordered lg:pt-0 lg:text-[48px] lg:leading-[64px]',
            'md:bordered1 md:text-[32px]',
            'sm:bordered1 sm:text-[32px]'
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
          <div className='w-0 lg:w-full'>
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
        <div className={clsx('bg-[#30302E]', 'lg:hidden')}>
          <div className='w-full lg:hidden'>
            <NextImage
              src='/images/pageDepartemen/m-knowMoreText.png'
              width='100%'
              height='20%'
              objectFit='contain'
              layout='responsive'
              alt=''
            />
          </div>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap'>
          <div
            className={clsx(
              'h-auto border-b-[4px] border-solid border-bone-1000 bg-[#FFBE3D]',
              'lg:h-auto lg:w-full lg:rounded-br-[0px] lg:border-r-[4px] lg:border-b-[0px]'
            )}
          >
            <div
              className={clsx(
                'p-[20px] pl-[32px] pr-[32px] pt-[61px] pb-[61px]',
                'lg:pt-[117px] lg:pb-0 lg:pl-[91px]'
              )}
            >
              <div className='flex justify-center lg:justify-start'>
                <KnowMoreTitle />
              </div>
              <Typography
                variant='body'
                className={clsx(
                  'mt-[24px] pr-[27.5px] pl-[27.5px] text-center text-[14px]',
                  'lg:mt-[36px] lg:mb-[36px] lg:min-h-[192px] lg:w-[491px] lg:pr-[0px] lg:pl-[0px] lg:text-left lg:text-[18px]'
                )}
              >
                {kenaliLebihDesc}
              </Typography>
              <div className='flex justify-center lg:justify-start'>
                <div className='w-[168px] pt-[24px] lg:w-[168px] lg:pb-[121px] lg:pt-[0px]'>
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
          </div>
          <div className='w-full bg-[#49AD7B]'>
            <div className='flex justify-center'>
              <div className='w-[282px] pt-[42px] pb-[42px] lg:w-[500px] lg:pb-[0px] lg:pt-[112.5px]'>
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
            <div
              className={clsx(
                'ml-[30px] mr-[30px] flex justify-center bg-[#30302E] pt-[12px] pl-[24px] pr-[24px]',
                'lg:absolute lg:bottom-0 lg:ml-[0px] lg:mr-[0px] lg:h-[52px] lg:w-auto'
              )}
            >
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
