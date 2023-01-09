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
            <section className='relative overflow-hidden'>
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
    <div className='relative z-10 mx-auto mt-8 flex w-[95%] flex-col items-center justify-center md:mt-[137px]'>
      <div className='flex h-10 w-full max-w-[600px] items-center justify-end space-x-2 rounded-t-2xl border-2 border-bone-1000 bg-lightBlue-500 px-2 lg:max-w-[1046px]'>
        <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-green-400'></div>
        <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-red-400'></div>
        <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-yellow-400'></div>
      </div>
      <div className='mb-10 flex h-full max-h-[586px] w-full max-w-[600px] flex-col-reverse items-center rounded-b-2xl border-l-2 border-r-2 border-b-2 border-bone-1000 bg-white sm:max-h-[900px] md:mb-20 lg:max-h-[463px] lg:max-w-[1046px] lg:flex-row'>
        <div className='w-[75%] sm:w-2/3 lg:w-1/2 lg:pt-10 lg:pl-11 lg:pr-20 lg:pb-6'>
          <Typography
            variant='h5'
            className='hidden text-[32px] font-semibold text-bone-1000 sm:leading-none lg:block lg:leading-[48px]'
          >
            Info Unik Buat Kamu
          </Typography>
          <Typography
            variant='body'
            className='mt-5 text-[16px] font-normal leading-[24px] text-bone-1000 sm:mt-8 sm:text-center lg:mt-4 lg:text-left'
          >
            Institut Teknologi Sepuluh Nopember (ITS) menyediakan berbagai
            fasilitas kampus untuk mendukung dan menunjang kegiatan yang ada di
            lingkungan kampus. ITS akan selalu berupaya mengembangkan dan
            meningkatkan kualitas fasilitas kampus ITS sehingga dapat selalu
            menyediakan pelayanan yang prima.
          </Typography>
          {/* Desktop ver */}
          <ButtonLink
            variant='lightBlue'
            round='medium'
            size='medium'
            href='https://www.youtube.com/@INILHOITS'
            className='mt-14 hidden w-max lg:block '
          >
            Tonton Sekarang
          </ButtonLink>
          {/* Mobile ver */}
          <ButtonLink
            variant='lightBlue'
            round='medium'
            size='medium'
            href='https://www.youtube.com/@INILHOITS'
            className='my-5 block w-full text-center sm:my-8 lg:hidden'
          >
            Tonton Sekarang
          </ButtonLink>
        </div>
        <div className='relative rounded-2xl sm:w-fit lg:w-1/2 '>
          <Typography
            variant='h5'
            className='my-5 block text-2xl font-semibold text-bone-1000 sm:my-8 sm:text-[32px] sm:leading-none lg:my-0 lg:hidden lg:leading-[48px]'
          >
            Info Unik Buat Kamu
          </Typography>
          {/* Desktop ver */}
          <div className='hidden w-full lg:block'>
            <NextImage
              src='/images/pageFasilitas/fasilitas-dummy4.png'
              width='100%'
              height='81%'
              layout='responsive'
              objectFit='contain'
              alt='people-1'
              imgClassName='rounded-br-2xl'
            />
          </div>
          <div className='hidden w-full sm:block lg:hidden'>
            <NextImage
              src='/images/pageFasilitas/fasilitas-dummy3.png'
              width='100%'
              height='88%'
              layout='responsive'
              objectFit='contain'
              alt='people-1'
              imgClassName='rounded-xl border-2 border-black border-none '
            />
          </div>
          {/* Mobile ver */}
          <div className='block w-full sm:hidden'>
            <NextImage
              src='/images/pageFasilitas/fasilitas-dummy3.png'
              width='100%'
              height='65%'
              layout='responsive'
              objectFit='contain'
              alt='smolpeople-1'
              imgClassName='rounded-xl border-2 border-black border-none '
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
      className='relative z-10 flex flex-col items-center justify-center'
      id='section2'
    >
      <div className='relative z-20 flex h-28 w-screen items-center justify-center border-t-2 border-b-2 border-bone-1000 bg-red-500 sm:h-36'>
        <div className='absolute top-0 left-0 -z-10 w-[4.5rem] sm:left-10 sm:w-24 lg:left-[4.5rem]  lg:w-40 xl:w-44'>
          <NextImage
            src='/images/pageFasilitas/fasilitas-deco-eyes.png'
            width='90%'
            height='60%'
            layout='responsive'
            objectFit='contain'
            alt='eyes'
          />
        </div>
        <div className='absolute bottom-0 right-0 -z-10 w-[5rem] sm:right-10 sm:w-24 lg:right-[4.5rem] lg:w-40 xl:w-44'>
          <NextImage
            src='/images/pageFasilitas/fasilitas-deco-megaphone.png'
            width='100%'
            height='60%'
            layout='responsive'
            objectFit='contain'
            alt='megaphone'
          />
        </div>
        <Typography
          variant='h4'
          className='stroke-sm md:stroke px-11 text-center text-2xl font-bold leading-none text-white sm:text-4xl md:px-0 md:text-5xl lg:text-[48px]  lg:leading-[64px]'
        >
          Ada Info Unik Buat Kamu!
        </Typography>
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
      {/* <div className='absolute ml-[1140px] mt-[100px] lg:w-[300px]'>
        <NextImage
          src='/images/pageFasilitas/deco-hero-rCloud.png'
          width='80%'
          height='60%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div> */}
      {/* <div className='absolute top-[19rem] ml-[18.7rem] w-[90px] sm:top-[5rem] sm:ml-[32.4rem] sm:w-[120px] md:ml-[40.5rem] lg:hidden'>
        <NextImage
          src='/images/pageFasilitas/fasilitas-mrcloud.png'
          width='93%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div> */}
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
      <div className='absolute mt-[8.4rem] lg:w-full'>
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
      <div className='absolute  mt-[430rem] w-full lg:hidden'>
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
    <div className='mx-4 mb-[-48px] mt-[-28px] flex w-full justify-between rounded-[16px] border-[2px] border-solid border-bone-1000 bg-[#FF9447] lg:m-[16px] lg:mb-[-20px] lg:h-[144px] lg:w-[1255px] lg:rounded-[24px]'>
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
          'bordered text bordered1 ml-[24px] p-[18px] px-10 text-center text-2xl font-extrabold text-neutral-100',
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
