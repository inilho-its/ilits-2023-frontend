import React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const alumni = [
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
  {
    name: 'Cak Lontong',
    job: 'Komedian',
    src: '/images/alumni/alumni2.png',
  },
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
  {
    name: 'Cak Lontong',
    job: 'Komedian',
    src: '/images/alumni/alumni2.png',
  },
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
  {
    name: 'Cak Lontong',
    job: 'Komedian',
    src: '/images/alumni/alumni2.png',
  },
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
  {
    name: 'Cak Lontong',
    job: 'Komedian',
    src: '/images/alumni/alumni2.png',
  },
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
  {
    name: 'Tri Rismaharini',
    job: 'Menteri Sosial',
    src: '/images/alumni/alumni1.png',
  },
];

export default function Alumni() {
  return (
    <Layout>
      <Seo templateTitle='Alumni' />
      <main>
        <section className='Hero relative  bg-bone-500'>
          <div className='m-auto max-w-7xl py-32'>
            <div className='relative z-10 max-w-xl self-center'>
              <div className='relative h-8 rounded-t-xl border-x-2 border-t-2 border-x-black border-t-black bg-yellow-400'>
                <div className='absolute -top-14 -left-6 w-32'>
                  <NextImage
                    src='/images/alumni/Eye.png'
                    width='100%'
                    height='100%'
                    layout='responsive'
                    objectFit='contain'
                    alt='Magnifier'
                  />
                </div>
              </div>
              <div className='rounded-b-xl border-2 border-black bg-white px-14 py-20 '>
                <Typography
                  variant='h1'
                  className='stroke pb-2 font-bold leading-none text-lightBlue-300'
                >
                  ALUMNI
                </Typography>
                <Typography variant='h6' className='pb-6 font-semibold'>
                  Institut Teknologi Sepuluh Nopember
                </Typography>
                <ButtonLink variant='yellow' href='/' className='inline-flex'>
                  Kenali lebih lanjut
                </ButtonLink>
              </div>
              <div className='absolute right-4 -bottom-20 w-32'>
                <NextImage
                  src='/images/alumni/Magnifier.png'
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='contain'
                  alt='Magnifier'
                />
              </div>
            </div>
          </div>
          <div className='absolute right-32 bottom-20 z-10 w-[27vw]'>
            <NextImage
              src='/images/alumni/Megaphone.png'
              width='100%'
              height='100%'
              layout='responsive'
              alt='Megaphone'
              objectFit='contain'
            />
          </div>
          <div className='absolute top-44 w-full '>
            <div className='relative h-56 w-full'>
              <NextImage
                src='/images/alumni/benang.png'
                width='100%'
                height='100%'
                layout='fill'
                alt=''
              />
            </div>
          </div>
          <div className='absolute top-72 w-full '>
            <div className='relative h-56 w-full'>
              <NextImage
                src='/images/alumni/benang1.png'
                width='100%'
                height='100%'
                layout='fill'
                alt=''
              />
            </div>
          </div>
          <div className='absolute -top-36 w-full'>
            <NextImage
              src='/images/alumni/benang-merah1.png'
              width='110%'
              height='45%'
              layout='responsive'
              alt=''
            />
          </div>
          <div className='absolute right-0 top-0 w-[300px]'>
            <NextImage
              src='/images/alumni/Awan.png'
              width='100%'
              height='50%'
              layout='responsive'
              alt='Clouds'
            />
          </div>
          <div className='absolute top-8 right-[500px] w-36'>
            <NextImage
              src='/images/alumni/Star.png'
              layout='responsive'
              width='100%'
              height='100%'
              alt='Star'
            />
          </div>
        </section>
        <section>
          <div className='relative z-10 flex flex-col items-center justify-center overflow-hidden'>
            <div className='relative flex h-36 w-screen items-center justify-center  border-2 border-bone-1000 bg-red-500 '>
              <div className='absolute -top-1 left-0 w-48'>
                <NextImage
                  src='/images/alumni/mic-1.png'
                  width='90%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='mic-1'
                />
              </div>
              <div className='absolute bottom-0 right-10 w-32'>
                <NextImage
                  src='/images/alumni/eye-1.png'
                  width='100%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='eye-1'
                />
              </div>
              <Typography variant='h4' className='stroke font-bold text-white'>
                Ada Info Unik Nih Buat Kamu!
              </Typography>
            </div>
          </div>
        </section>
        <section className='Info Unik relative bg-bone-500'>
          <div className='relative z-10 mx-auto flex max-w-2xl flex-col px-5 pt-40 pb-52 md:max-w-6xl'>
            <div className='flex justify-end gap-1 rounded-t-xl border-2 border-black bg-lightBlue-500 p-1 pr-2 md:gap-4 md:p-3 '>
              <div className='h-2 w-2 rounded-full bg-yellow-300 outline outline-2 outline-black md:h-4 md:w-4'></div>
              <div className='h-2 w-2 rounded-full bg-red-400 outline outline-2 outline-black md:h-4 md:w-4'></div>
              <div className='h-2 w-2 rounded-full bg-green-300 outline outline-2 outline-black md:h-4 md:w-4'></div>
            </div>
            <div className='flex flex-col md:flex-row '>
              <div className='flex flex-col rounded-b-xl  border-black bg-white p-6 md:w-3/5 md:rounded-br-none md:rounded-bl-xl md:border-x-2 md:border-b-2 md:py-12 md:px-16 '>
                <Typography
                  variant='h5'
                  className='pb-2 text-center text-[24px] font-semibold leading-[32px] md:text-start md:text-[32px] md:leading-[48px]'
                >
                  Info Unik Buat Kamu
                </Typography>
                <div className='relative my-3 overflow-hidden  border-black md:hidden md:w-1/2'>
                  <NextImage
                    src='/images/home/webseries1.png'
                    layout='responsive'
                    width='100%'
                    height='50%'
                    alt='Web Series ILITS'
                    objectFit='cover'
                  />
                </div>
                <Typography
                  variant='paragraph'
                  className='text-[14px] leading-[24px] sm:pt-2 md:max-w-lg md:text-[18px] md:leading-[24px]'
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Typography>

                <div className='mx-auto md:mx-0'>
                  <ButtonLink
                    href=''
                    variant='lightBlue'
                    className='mt-4 md:mt-12'
                  >
                    Tonton Sekarang!
                  </ButtonLink>
                </div>
              </div>
              <div className='relative hidden overflow-hidden rounded-br-xl  border-r-2 border-b-2 border-black md:block md:w-2/5'>
                <NextImage
                  src='/images/alumni/webseries.png'
                  layout='responsive'
                  height='100%'
                  width='100%'
                  alt='Info-unik'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='absolute bottom-44 -right-4 w-24'>
              <NextImage
                src='/images/alumni/cursor.png'
                layout='responsive'
                height='100%'
                width='100%'
                alt='Web Series ILITS'
              />
            </div>
          </div>
          <div className='absolute top-20 right-0 w-[350px]'>
            <NextImage
              src='/images/alumni/awan2.png'
              width='100%'
              height='35%'
              layout='responsive'
              alt=''
            />
          </div>
          <div className='absolute top-28 w-full'>
            <NextImage
              src='/images/alumni/benang-merah2.png'
              alt=''
              width='100%'
              height='30%'
              layout='responsive'
            />
          </div>
          <div className='absolute top-56 w-full'>
            <NextImage
              src='/images/alumni/benang2.png'
              width='100%'
              height='15%'
              alt=''
              layout='responsive'
            />
          </div>
          <div className='absolute bottom-24 w-96'>
            <NextImage
              src='/images/alumni/awan3.png'
              width='100%'
              height='40%'
              alt=''
              layout='responsive'
            />
          </div>
        </section>
        <section className='Alumni relative bg-bone-500'>
          <div className='relative z-50 m-auto h-32 w-full max-w-[811px] -rotate-2 rounded-2xl border-2'>
            <div className='-rotate-4 shadow-box-alumni absolute inset-0 z-50 flex h-32 w-full max-w-[811px] items-center justify-between rounded-2xl border-2 border-bone-1000 bg-orange-400 px-9'>
              <div className='flex flex-col items-center justify-center gap-4'>
                <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-white'></div>
                <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-white'></div>
              </div>
              <Typography
                variant='h4'
                className='stroke text-[48px] font-bold leading-[64px] text-white'
              >
                Siapa Sajakah Mereka?!
              </Typography>
              <div className='flex flex-col items-center justify-center gap-4'>
                <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-white'></div>
                <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-white'></div>
              </div>
            </div>
            <div className='absolute top-14 -left-60 w-32'>
              <NextImage
                alt=''
                src='/images/alumni/Magnifier.png'
                width='85%'
                height='100%'
                layout='responsive'
              />
            </div>
            <div className='absolute top-48 -right-40 w-28'>
              <NextImage
                alt=''
                src='/images/alumni/arrow.png'
                width='85%'
                height='100%'
                layout='responsive'
              />
            </div>
          </div>
          <div className='mx-auto max-w-6xl pt-60 pb-32 '>
            <div className='mx-auto grid w-fit grid-cols-2 justify-center gap-x-5 gap-y-4 md:grid-cols-3 md:gap-x-20 md:gap-y-16'>
              {alumni.map(({ name, job, src }, index) => (
                <div
                  key={index}
                  className='z-10 mx-auto flex w-80 flex-col overflow-hidden rounded-xl border-black outline outline-2 outline-black'
                >
                  <div>
                    <div className='relative h-[44vw] md:h-96 md:w-80 '>
                      <NextImage
                        src={src}
                        alt=''
                        width='100%'
                        height='100%'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  <div className='flex h-full flex-col items-center justify-center rounded-b-xl border-t-2 border-black bg-white py-3 md:w-80 lg:py-5 '>
                    <Typography
                      variant='title'
                      className='text-center text-[16px] font-semibold leading-[24px] md:text-[20px]'
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant='paragraph'
                      className='text-center text-[14px] leading-[24px] md:text-[18px]'
                    >
                      {job}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='absolute top-[475px] w-full'>
            <NextImage
              alt=''
              src='/images/alumni/benang-merah3.png'
              width='100%'
              height='35%'
              layout='responsive'
            />
          </div>
          <div className='absolute top-[670px] w-full'>
            <NextImage
              src='/images/alumni/benang2.png'
              width='100%'
              height='15%'
              alt=''
              layout='responsive'
            />
          </div>
          <div className='absolute top-[1475px] w-full'>
            <NextImage
              src='/images/alumni/benang-merah4.png'
              width='100%'
              height='40%'
              alt=''
              layout='responsive'
            />
          </div>
          <div className='absolute bottom-[1375px] w-full'>
            <NextImage
              src='/images/alumni/benang4.png'
              width='100%'
              height='50%'
              alt=''
              layout='responsive'
            />
          </div>
          <div className='absolute bottom-52 w-full'>
            <NextImage
              src='/images/alumni/benang-merah4.png'
              width='100%'
              height='35%'
              alt=''
              layout='responsive'
            />
          </div>
          <div className='absolute -bottom-80 w-full'>
            <NextImage
              src='/images/alumni/benang5.png'
              width='100%'
              height='100%'
              alt=''
              layout='responsive'
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
