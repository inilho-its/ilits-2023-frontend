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
        <div className={clsx('relative bg-[#30302E]', 'xl:h-[80px]')}>
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
        <div className='flex flex-wrap min-lg:flex-wrap xl:flex-nowrap'>
          <div
            className={clsx(
              'h-auto border-b-[4px] border-solid border-bone-1000 bg-[#FFBE3D] min-lg:flex min-lg:justify-center',
              'lg:w-full min-lg:border-r-[0px] min-lg:border-b-[4px] xl:h-auto xl:rounded-br-[0px] xl:border-r-[4px] xl:border-b-[0px]'
            )}
          >
            <div
              className={clsx(
                'p-[20px] pl-[32px] pr-[32px] pt-[61px] pb-[61px]',
                'xl:left-0 xl:pt-[117px] xl:pb-0 xl:pl-[91px]'
              )}
            >
              <div className='flex justify-center min-lg:justify-center min-lg:pb-[30px] xl:justify-start'>
                <KnowMoreTitle />
              </div>
              <Typography
                variant='body'
                className={clsx(
                  'mt-[24px] pr-[27.5px] pl-[27.5px] text-center text-[14px] min-lg:mt-[24px] min-lg:text-center min-lg:text-[14px]',
                  'xl:mt-[36px] xl:mb-[36px] xl:min-h-[192px] xl:w-[491px] xl:pr-[0px] xl:pl-[0px] xl:text-left xl:text-[18px]'
                )}
              >
                {kenaliLebihDesc}
              </Typography>
              <div className='flex justify-center xl:justify-start'>
                <div className='w-[168px] pt-[24px] min-lg:pt-[50px] min-lg:pb-[0px] xl:w-[168px] xl:pb-[121px] xl:pt-[0px]'>
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
              <div className='w-[282px] pt-[42px] pb-[42px] min-lg:w-[500px] min-lg:pb-[84px] xl:pb-[0px] xl:pt-[112.5px]'>
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
