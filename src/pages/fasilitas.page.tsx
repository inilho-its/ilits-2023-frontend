import clsx from 'clsx';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { facilityData } from '@/constant/fasilitasData';

export default function FasilitasPage() {
  return (
    <Layout>
      <Seo templateTitle='Fasilitas' />
      <main>
        <section className='Fasilitas'>
          <Ornaments />
          <div className='m-auto min-h-screen place-items-center self-center bg-bone-500'>
            <section className='relative'>
              <HeroSection />
            </section>
            <section className='relative'>
              <Divider />
            </section>
            <section className='relative'>
              <CardInfo />
            </section>
            <div id='fasilitas'></div>
            <section className='relative'>
              <div className='mb-[86px] mt-[80px] flex justify-center'>
                <FacilityBanner />
              </div>
            </section>
            <section className='relative'>
              <div className='flex flex-wrap justify-center gap-[24px]'>
                {facilityData?.map((v, i) => (
                  <FacilityCards key={`Card-Item-key-${i}`} {...v} />
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function CardInfo() {
  return (
    <div
      className={clsx(
        'mt-[46px] mb-[46px]',
        'lg:m-[80px] lg:mb-[0px] lg:flex lg:justify-center'
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
                href='https://www.youtube.com/@INILHOITS'
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

function Divider() {
  return (
    <div
      className={clsx(
        'border-t-solid border-b-solid flex h-[100px] w-full justify-between border-t-[2px] border-b-[2px] border-t-bone-1000 border-b-bone-1000 bg-[#FF7A66]',
        'lg:h-[144px]'
      )}
    >
      <div className='sm:ml-[-58px] sm:mt-[-2px] md:ml-[50px] md:mt-[-14px] md:w-[90px] lg:mt-[-24px] lg:w-[150px]'>
        <NextImage
          alt='comingsoon'
          src='/images/pageFasilitas/fasilitas-deco-eyes.png'
          width='100%'
          height='100%'
          layout='responsive'
          objectFit='contain'
          priority
        />
      </div>
      <div className='ml-[0px] mt-[-6px] w-[70px] md:w-[0px] lg:w-[0px]'>
        <NextImage
          alt='comingsoon'
          src='/images/pageFasilitas/fasilitas-deco-eyes-mobile.png'
          width='100%'
          height='100%'
          layout='responsive'
          objectFit='contain'
          priority
        />
      </div>
      <Typography
        as='h4'
        variant='h4'
        className={clsx(
          'bordered bordered1 ml-[10px] mt-[8px] pt-[18px] pb-[18px] pl-[0px] pr-[0px] text-center text-[24px] font-extrabold text-neutral-100',
          'lg:bordered lg:mt-[15px] lg:ml-[-180px] lg:p-[40px] lg:text-[48px]',
          'md:mt-[15px] md:text-[27px]',
          'sm:mt-[15px] sm:text-[27px]'
        )}
      >
        Ada info Unik Buat Kamu!
      </Typography>
      <div
        className={clsx(
          'mr-[0px] w-[80px] pt-[40px]',
          'lg:mt-[-3px] lg:mr-[50px] lg:w-[120px]',
          'md:mt-[-13px] md:mr-[70px] md:w-[80px]',
          'sm:mt-[-13px] sm:mr-[20px] sm:w-[80px]'
        )}
      >
        <NextImage
          alt='comingsoon'
          src='/images/pageFasilitas/fasilitas-deco-megaphone.png'
          width='100%'
          height='100%'
          layout='responsive'
          objectFit='contain'
          priority
        />
      </div>
    </div>
  );
}

function Ornaments() {
  return (
    <div>
      <div className='absolute lg:w-[300px]'>
        <NextImage
          src='/images/pageFasilitas/deco-hero-lCloud.png'
          width='90%'
          height='60%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute top-[8rem] ml-[-8px] w-[120px] sm:top-[5rem] sm:ml-[-15px] sm:w-[200px] lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/fasilitas-mlcloud.png'
          width='90%'
          height='60%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute ml-[1140px] mt-[100px] lg:w-[300px]'>
        <NextImage
          src='/images/pageFasilitas/deco-hero-rCloud.png'
          width='80%'
          height='60%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute top-[19rem] ml-[18.7rem] w-[90px] sm:top-[5rem] sm:ml-[32.4rem] sm:w-[120px] md:ml-[40.5rem] lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/fasilitas-mrcloud.png'
          width='93%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute lg:w-full'>
        <NextImage
          src='/images/pageFasilitas/deco-hero-redStrings.png'
          width='90%'
          height='60%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[21rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/deco-hero-redStrings.png'
          width='90%'
          height='60%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute lg:w-full'>
        <NextImage
          src='/images/pageFasilitas/deco-hero-yellowStrings.png'
          width='90%'
          height='60%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[22rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/deco-hero-yellowStrings.png'
          width='90%'
          height='60%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[55.8rem] lg:w-full'>
        <NextImage
          src='/images/pageFasilitas/dornamen2.png'
          width='22%'
          height='81%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[55rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor1.png'
          width='74%'
          height='80%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[82rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor2.png'
          width='74%'
          height='80%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[122rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor3.png'
          width='74%'
          height='80%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[144rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor4.png'
          width='74%'
          height='80%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[164rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor5.png'
          width='74%'
          height='90%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[194rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor6.png'
          width='74%'
          height='90%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[212rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor7.png'
          width='70%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[238rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor8.png'
          width='74%'
          height='90%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[268rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor9.png'
          width='70%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[298rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor10.png'
          width='70%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[328rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor11.png'
          width='70%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[371.5rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor12.png'
          width='70%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[400rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor13.png'
          width='70%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute mt-[430rem] w-full lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/mor14.png'
          width='70%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <>
      <div className='layout flex w-full pt-[4.9rem]'>
        <div className='m-auto flex'>
          <div className={clsx('px-7 pt-7 text-center font-bold')}>
            <Typography
              as='h1'
              variant='h1'
              className={clsx(
                'bordered1 pt-[100px] text-5xl text-[#FF9447] ',
                'lg:bordered lg:pt-6 lg:text-[80px]',
                'md:bordered md:text-[72px]',
                'sm:bordered sm:text-[72px]'
              )}
            >
              Fasilitas
            </Typography>
            <Typography
              as='h5'
              variant='h5'
              className={clsx(
                'mt-[8px] text-[14px] font-semibold text-bone-1000',
                'lg:mt-[15px] lg:text-[32px]',
                'md:mt-[15px] md:text-[28px]',
                'sm:mt-[15px] sm:text-[28px]'
              )}
            >
              Institut Teknologi Sepuluh Nopember
            </Typography>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <ButtonLink
          href='#fasilitas'
          variant='yellow'
          size='medium'
          className={clsx(
            'mt-[30px] h-[32px] w-[156px] justify-center pl-[20px] pr-[20px] pt-[4px] pb-[4px] text-[12px] ',
            'lg:mt-[48px] lg:h-[48px] lg:w-[202px] lg:text-[16px]',
            'md:mt-[48px] md:h-[48px] md:w-[202px] md:text-[16px]',
            'sm:mt-[48px] sm:h-[48px] sm:w-[202px] sm:text-[16px]'
          )}
        >
          Kenali Lebih Lanjut
        </ButtonLink>
      </div>
      <div className='mt-[126px] flex justify-center lg:mt-[74px]'>
        <div className='w-[390px] sm:w-[600px] md:w-[800px] lg:w-[897px]'>
          <NextImage
            alt='comingsoon'
            src='/images/pageFasilitas/fasilitas-img.png'
            width='100%'
            height='34.5%'
            layout='responsive'
            objectFit='contain'
            priority
          />
        </div>
      </div>
    </>
  );
}

export type FacilityCardProps = {
  facilityName: React.ReactNode;
  imgSrc: string;
  desc: string;
  headerStyle: string;
  customFontHeader: string;
};

function FacilityCards({
  facilityName,
  imgSrc,
  desc,
  headerStyle,
  customFontHeader,
}: FacilityCardProps) {
  return (
    <div className='mb-[32px] pl-[18px] pr-[18px] last:mb-[82px]'>
      <div className={headerStyle}>
        <Typography
          as='h5'
          variant='h5'
          className={clsxm(
            'text-[18px] font-semibold text-neutral-100 sm:text-[24px] md:text-[24px] lg:mt-[10px] lg:text-[32px]',
            customFontHeader
          )}
        >
          {facilityName}
        </Typography>
      </div>
      <div
        className={clsxm(
          'z-0 mt-[-13px] flex justify-center rounded-[20px] border-[2px] border-solid border-neutral-1000 bg-neutral-100 p-[20px] text-[18px] transition duration-200 lg:saturate-0 lg:hover:saturate-100',
          'lg:min-h-[612px] lg:w-[618px] lg:p-[53px] lg:pt-[48px] lg:pb-[32px]'
        )}
      >
        <div>
          <div className='mb-[32px] mt-[6px] hover:saturate-100 lg:mt-[0px] lg:w-[512px]'>
            <NextImage
              alt='comingsoon'
              src={imgSrc}
              width='100%'
              height='55%'
              layout='responsive'
              objectFit='contain'
            />
          </div>
          <Typography
            variant='body'
            className='font-[16px] text-justify font-medium'
          >
            {desc}
          </Typography>
        </div>
      </div>
    </div>
  );
}

function FacilityBanner() {
  return (
    <div className='mb-[-48px] mt-[-28px] flex w-full justify-between rounded-[16px] border-[2px] border-solid border-bone-1000 bg-[#FF9447] lg:m-[16px] lg:mb-[-20px] lg:h-[144px] lg:w-[1255px] lg:rounded-[24px]'>
      <div className='ml-[-25px] lg:mt-[45px] lg:w-[110px]'>
        <NextImage
          alt='comingsoon'
          src='/images/pageFasilitas/fasilitas-deco-loc.png'
          width='35%'
          height='35%'
          layout='responsive'
          objectFit='contain'
        />
      </div>
      <Typography
        as='h4'
        variant='h4'
        className={clsx(
          'bordered text bordered1 ml-[24px] p-[18px] pl-[80px] pr-[80px] text-center text-2xl font-extrabold text-neutral-100',
          'lg:bordered lg:mt-[15px] lg:p-[40px] lg:text-[48px]'
        )}
      >
        Apa Saja Fasilitas di ITS?
      </Typography>
      <div className='lg:mt-[-20px] lg:mr-[-15px] lg:w-[100px]'>
        <NextImage
          alt='comingsoon'
          src='/images/pageFasilitas/fasilitas-deco-star.png'
          width='35%'
          height='35%'
          layout='responsive'
          objectFit='contain'
        />
      </div>
    </div>
  );
}
