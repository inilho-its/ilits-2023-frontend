import React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';
export default function FakultasPage() {
  return (
    <Layout>
      <Seo templateTitle='Fakultas' />
      <main>
        <section className='hero bg-bone-500'>
          <div className='relative flex flex-col items-center justify-center pt-44 pb-72 '>
            <Typography
              variant='h6'
              className='stroke max-w-[325px] text-center font-bold text-yellow-300'
            >
              Fakultas Teknologi Elektro & Informatika Cerdas
            </Typography>
            <Typography
              className='dark text-center font-semibold'
              variant='body'
            >
              FTEIC / ELECTICS
            </Typography>
            <ButtonLink
              className='z-10 mt-5 rounded-lg bg-lightBlue-200'
              size='medium'
              href=''
            >
              <Typography className='text-xs'>Kenali Lebih Lanjut!</Typography>
            </ButtonLink>

            {/* Awan hero mobile*/}
            <NextImage
              src='/images/fakultasPage/awan.png'
              className='absolute -top-10 -left-40 w-[70%]'
              objectFit='contain'
              width='100%'
              height='100%'
              layout='responsive'
              alt='Fakultas'
            />

            {/* Gedung FTEIC */}
            <NextImage
              src='/images/fakultasPage/FTEIC.png'
              className='absolute -bottom-[7.4rem] w-full'
              objectFit='contain'
              width='100%'
              height='100%'
              layout='responsive'
              alt='Fakultas'
            />

            {/* Vector yellow string */}
            <NextImage
              src='/images/fakultasPage/yellow-string.png'
              className='absolute top-[19%] w-full'
              objectFit='contain'
              width='100%'
              height='100%'
              layout='responsive'
              alt='Fakultas'
            />

            {/* Vector red string */}
            <NextImage
              src='/images/fakultasPage/red-string.png'
              className='absolute top-[19%] w-full'
              objectFit='contain'
              width='100%'
              height='100%'
              layout='responsive'
              alt='Fakultas'
            />
          </div>
        </section>
        <section className='info-fakultas bg-bone-500'>
          <div className='relative z-10 flex flex-col items-center justify-center overflow-hidden'>
            <div className='relative flex h-28 w-screen items-center justify-center border-y-2 border-bone-1000 bg-red-500 md:h-36 md:border-2 '>
              <div className='absolute -top-[1px] -left-3 w-24 md:left-4 md:w-28 lg:left-0 lg:w-44'>
                <NextImage
                  src='/images/fakultasPage/arrow.png'
                  width='90%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='arrow'
                  className='block'
                />
              </div>
              <div className='absolute bottom-0 -right-2 w-24 md:right-5 md:w-28 lg:right-10 lg:w-32'>
                <NextImage
                  src='/images/fakultasPage/magnifier.png'
                  width='100%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='magnifer'
                />
              </div>
              <Typography
                variant='h4'
                className='stroke  text-center text-[18px] font-bold leading-[32px] text-white md:max-w-6xl md:text-[32px] lg:text-[48px] lg:leading-[64px]'
              >
                FAKULTAS DI ITS APA AJA SIH??
              </Typography>
            </div>
          </div>
          <div>
            <div className='relative z-40 mx-auto flex max-w-lg flex-col px-5 py-12 md:max-w-[900px] md:pt-40 md:pb-48 lg:max-w-6xl'>
              <div className='flex justify-end gap-2 rounded-t-2xl border-2 border-black bg-red-300 p-2 pr-4 sm:gap-2 md:gap-4 md:p-3 '>
                <span className='h-[10px] w-[10px] rounded-full bg-green-300 outline outline-2 outline-black md:h-4 md:w-4'></span>
                <span className='h-[10px] w-[10px] rounded-full bg-red-400 outline outline-2 outline-black md:h-4 md:w-4'></span>
                <span className='h-[10px] w-[10px] rounded-full bg-yellow-300 outline outline-2 outline-black md:h-4 md:w-4'></span>
              </div>
              <div className='flex flex-col md:flex-row '>
                <div className='flex flex-col rounded-b-2xl border-x-2 border-b-2 border-black bg-white py-6 px-10 md:w-3/5 md:rounded-br-none lg:py-12 lg:px-16 '>
                  <Typography
                    variant='h5'
                    className='pb-2 text-center text-[24px] font-bold leading-[32px] md:text-start md:text-[32px] md:font-semibold md:leading-[48px]'
                  >
                    Info Unik Buat Kamu
                  </Typography>
                  <div className='relative my-3 overflow-hidden rounded-lg border-2 border-black md:hidden md:w-1/2'>
                    <NextImage
                      src='/images/alumni/infoalumni-mobile.png'
                      layout='responsive'
                      width='100%'
                      height='60%'
                      alt='info-alumni'
                      objectFit='cover'
                    />
                  </div>
                  <Typography
                    variant='paragraph'
                    className='text-center text-[14px] leading-[24px] md:max-w-md md:pt-2 md:text-start md:text-[16px] md:leading-[24px]'
                  >
                    Pada 15 Februari 2003, Prof. Dr. Ir. K.H. Mohammad Nuh, DEA.
                    dikukuhkan sebagai rektor ITS. Beliau adalah rektor termuda
                    dalam sejarah ITS, yakni berusia 42 tahun saat menjabat.
                  </Typography>

                  <div className='md:mx-0 md:pb-10'>
                    <ButtonLink
                      href='https://www.youtube.com/@INILHOITS'
                      variant='lightBlue'
                      className='mt-4 w-full justify-center md:mt-12'
                    >
                      Tonton Sekarang!
                    </ButtonLink>
                  </div>
                </div>
                <div className='relative hidden overflow-hidden rounded-br-xl border-r-2 border-b-2 border-black md:block md:w-2/5'>
                  <NextImage
                    src='/images/alumni/infoalumni.png'
                    layout='fill'
                    height='100%'
                    width='100%'
                    alt='Info-unik'
                    objectFit='cover'
                  />
                </div>
              </div>
              <div className='absolute bottom-44 -right-4 hidden w-24 xl:block'>
                <NextImage
                  src='/images/alumni/cursor.png'
                  layout='responsive'
                  height='100%'
                  width='100%'
                  alt='cursor'
                />
              </div>
              <div className='top-24 -z-10 hidden md:absolute md:-right-[360px] md:block md:w-64 lg:w-[533px]'>
                <NextImage
                  src='/images/alumni/awan2.png'
                  width='100%'
                  height='20%'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className=' absolute -left-9 -z-10 hidden w-40 sm:hidden md:top-80 md:block lg:top-[550px] lg:-left-[450px] lg:w-[620px]'>
                <NextImage
                  src='/images/alumni/awan2.png'
                  alt=''
                  width='110%'
                  height='25%'
                  layout='responsive'
                />
              </div>
            </div>
          </div>
          <div className='relative z-10 m-auto  h-14 w-full max-w-[340px] -rotate-2 rounded-2xl border-2 sm:max-w-[525px] md:h-32 md:max-w-[750px] md:-rotate-2 lg:max-w-[811px]'>
            <div className='md:-rotate-4 shadow-box-left-sm absolute inset-0 z-50 flex w-full max-w-[750px] items-center justify-between rounded-2xl border-[3px] border-black bg-lightBlue-500 px-3 md:h-32 md:px-9 lg:max-w-[811px]'>
              <div className='flex flex-col items-center justify-center gap-y-0.5 md:gap-4'>
                <div className='h-[10px] w-[10px] rounded-full border-[3px] border-bone-1000 bg-white md:h-[20px] md:w-[20px]'></div>
                <div className='h-[10px] w-[10px] rounded-full border-[3px] border-bone-1000 bg-white md:h-[20px] md:w-[20px]'></div>
              </div>
              <Typography
                variant='h4'
                className='stroke text-center text-[20px] font-bold leading-[24px] text-white sm:text-[32px] md:text-[48px] md:leading-[64px]'
              >
                Waktu Demi Waktu!
              </Typography>
              <div className='flex flex-col  items-center justify-center gap-y-0.5 md:gap-4'>
                <div className='h-[10px] w-[10px] rounded-full border-[3px] border-bone-1000 bg-white md:h-[20px] md:w-[20px]'></div>
                <div className='h-[10px] w-[10px] rounded-full border-[3px] border-bone-1000 bg-white md:h-[20px] md:w-[20px]'></div>
              </div>
            </div>
            <div className='absolute -top-7 left-6 z-50 w-[12%]'>
              <NextImage
                alt=''
                src='/images/fakultasPage/calendar.png'
                width='85%'
                height='100%'
                layout='responsive'
              />
            </div>
            <div className='absolute top-8 right-2 z-50 w-[12%] '>
              <NextImage
                alt=''
                src='/images/fakultasPage/cursor.png'
                width='85%'
                height='100%'
                layout='responsive'
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
