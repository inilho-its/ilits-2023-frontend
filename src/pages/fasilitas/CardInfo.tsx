import clsx from 'clsx';
import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function CardInfo() {
  return (
    <div
      className={clsx(
        'mt-[46px] mb-[46px]',
        'lg:m-[80px] lg:flex lg:justify-center'
      )}
    >
      <div
        className={clsx(
          'ml-[17px] mr-[17px] h-auto w-auto rounded-[12px] border-[2px] border-solid border-bone-1000',
          'lg:h-[454px] lg:w-[1046px]'
        )}
      >
        <div
          className={clsx(
            'border-b-solid h-[20px] w-full rounded-t-[9px] border-b-[2px] border-b-bone-1000 bg-lightBlue-500',
            'lg:relative lg:z-10 lg:flex lg:h-[36px] lg:justify-end'
          )}
        >
          <div
            className={clsx(
              'ml-[295px] w-[50px] pt-[3px]',
              'sm:ml-[545px] sm:w-[50px] sm:pt-[3px]',
              'md:ml-[670px]',
              'lg:mt-[5px] lg:mr-[16px] lg:w-[76px]'
            )}
          >
            <NextImage
              alt='comingsoon'
              src='/images/pageFasilitas/fasilitas-deco-nav.png'
              width='100%'
              height='25%'
              layout='responsive'
              objectFit='contain'
              imgClassName='lg:rounded-br-[10px]'
            />
          </div>
        </div>
        <div className='lg:flex'>
          <div
            className={clsx(
              'border-r-solid h-auto rounded-bl-[10px] rounded-br-[10px] bg-neutral-100',
              'lg:h-[414px] lg:w-full lg:rounded-br-[0px]'
            )}
          >
            <div
              className={clsx(
                'p-[20px] pl-[32px] pr-[32px]',
                'lg:p-[37px] lg:pl-[66px] lg:pr-[93px]'
              )}
            >
              <Typography
                as='h5'
                variant='h5'
                className={clsx(
                  'mb-[20px] text-center text-[24px] font-semibold',
                  'lg:mb-[16px] lg:text-left lg:text-[32px]'
                )}
              >
                Info Unik Buat Kamu
              </Typography>
              <div className='flex justify-center'>
                <div className='mb-[20px] w-[292px] lg:w-[0px]'>
                  <NextImage
                    alt='comingsoon'
                    src='/images/pageFasilitas/fasilitas-dummy3.png'
                    width='100%'
                    height='62%'
                    layout='responsive'
                    objectFit='contain'
                    imgClassName='lg:rounded-br-[10px]'
                  />
                </div>
              </div>
              <Typography
                variant='body'
                className='mb-[16px] text-[14px] lg:mb-[36px] lg:text-[16px]'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
              <ButtonLink
                variant='lightBlue'
                size='medium'
                className='w-full justify-center text-[14px] lg:w-[195px] lg:p-[12px] lg:text-[16px]'
                href='/'
              >
                Tonton Sekarang!
              </ButtonLink>
            </div>
          </div>
          <div className='w-[0px] lg:z-0 lg:mt-[-10px] lg:w-full'>
            <NextImage
              alt='comingsoon'
              src='/images/pageFasilitas/fasilitas-dummy.png'
              width='50%'
              height='41%'
              layout='responsive'
              objectFit='contain'
              imgClassName='lg:rounded-br-[10px]'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
