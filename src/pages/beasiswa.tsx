import * as React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { dataBeasiswaMitraITS } from '@/constant/beasiswaData';

type BeasiswaCardProps = {
  title: string;
  imgUrl: string;
};

const BeasiswaCard = ({ title, imgUrl }: BeasiswaCardProps) => {
  return (
    <div className='relative flex h-52 w-full max-w-[1046px]'>
      <div className='absolute inset-0 h-52 w-full max-w-[1046px]'>
        <NextImage
          src={imgUrl}
          width='100%'
          height='20%'
          layout='responsive'
          objectFit='contain'
          alt='star'
        />
      </div>
      <div className='relative flex h-52 w-full max-w-[1046px] justify-between rounded-2xl py-5'>
        <div className='flex h-16 w-full max-w-[372px] items-center justify-center rounded-r-3xl border-2 border-bone-1000 bg-white'>
          <Typography
            variant='title'
            className='text-[20px] font-bold leading-[24px] text-black '
          >
            {title}
          </Typography>
        </div>
        <div className='mr-4 self-end'>
          <ButtonLink variant='yellow' size='medium' round='medium' href='#'>
            Lihat
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default function BeasiswaPage() {
  return (
    <Layout>
      <Seo templateTitle='Beasiswa' />
      <main>
        {/* Section 1 Start */}
        <section className='relative z-10'>
          <div>
            <div className='absolute top-0 w-[422px]'>
              <NextImage
                src='/images/beasiswaPage/cloud-1.png'
                width='100%'
                height='50%'
                layout='responsive'
                objectFit='contain'
                alt='cloud-1'
              />
            </div>
            <div className='absolute -top-24 -left-96 w-full'>
              <NextImage
                src='/images/beasiswaPage/string-1.png'
                width='60%'
                height='40%'
                layout='responsive'
                objectFit='contain'
                alt='string-1'
              />
            </div>
            <div className='absolute right-0 w-full'>
              <NextImage
                src='/images/beasiswaPage/ribbon-1.png'
                width='100%'
                height='80%'
                layout='responsive'
                objectFit='contain'
                alt='ribbon1'
              />
            </div>
          </div>
          <div className='layout relative z-10 flex justify-between'>
            <div className='mt-56'>
              <Typography
                variant='h1'
                className='stroke text-[80px] font-bold leading-[96px] text-orange-200'
              >
                Beasiswa
              </Typography>
              <Typography
                variant='h6'
                className='text-[24px] font-semibold leading-[32px]'
              >
                Institut Teknologi Sepuluh Nopember
              </Typography>
              <ButtonLink
                variant='yellow'
                round='medium'
                size='large'
                href='#'
                className='mt-8'
              >
                Kenali Lebih Lanjut!
              </ButtonLink>
            </div>
            <div className='mt-20'>
              <div className='w-[434px]'>
                <NextImage
                  src='/images/beasiswaPage/star-1.png'
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='contain'
                  alt='star-1'
                />
              </div>
            </div>
          </div>
        </section>
        {/* Section 1 End */}
        {/* Section 2 Start */}
        <section className='relative pt-52'>
          <div className='relative z-10 flex flex-col items-center justify-center overflow-hidden'>
            <div className='relative flex h-36 w-screen items-center justify-center  border-2 border-bone-1000 bg-red-500'>
              <div className='absolute top-0 left-0 w-48'>
                <NextImage
                  src='/images/beasiswaPage/mic-1.png'
                  width='90%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='mic-1'
                />
              </div>
              <div className='absolute bottom-0 right-10 w-32'>
                <NextImage
                  src='/images/beasiswaPage/eye-1.png'
                  width='100%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='eye-1'
                />
              </div>
              <Typography
                variant='h4'
                className='stroke text-[48px] font-bold leading-[64px]  text-white'
              >
                Ada Info Unik Nih Buat Kamu!
              </Typography>
            </div>
          </div>
          <div className='relative z-10 mt-[137px] flex w-full flex-col items-center justify-center'>
            <div className='flex h-10 w-full max-w-[1046px] items-center justify-end space-x-2 rounded-t-2xl border-2 border-bone-1000 bg-pink-500 px-2'>
              <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-green-400'></div>
              <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-red-400'></div>
              <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-yellow-400'></div>
              <div className='ti absolute -left-10 -z-10 w-96'>
                <NextImage
                  src='/images/beasiswaPage/cloud-2.png'
                  width='100%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='cloud-2'
                />
              </div>
            </div>
            <div className='flex h-[415px] w-full max-w-[1046px] items-center rounded-b-2xl border-l-2 border-r-2 border-b-2 border-bone-1000 bg-white'>
              <div className='w-[55%] pt-10 pl-11 pr-20 pb-6'>
                <Typography
                  variant='h5'
                  className='text-[32px] font-semibold leading-[48px] text-bone-1000'
                >
                  Ada Info Unik Buat Kamu
                </Typography>
                <Typography
                  variant='body'
                  className='mt-4 text-[16px] font-semibold leading-[24px] text-bone-1000'
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore hic neque quasi repudiandae molestiae doloremque id
                  deserunt quis accusantium qui nam amet eos excepturi, nemo
                  quisquam dignissimos. A, est atque.
                </Typography>
                <ButtonLink
                  variant='lightBlue'
                  round='medium'
                  size='medium'
                  href='#'
                  className='mt-14'
                >
                  Tonton Sekarang
                </ButtonLink>
              </div>
              <div className='relative w-[45%] rounded-2xl '>
                <div className='w-full'>
                  <NextImage
                    src='/images/beasiswaPage/people-1.png'
                    width='100%'
                    height='100%'
                    layout='responsive'
                    objectFit='contain'
                    alt='people-1'
                    imgClassName='rounded-2xl'
                  />
                </div>
                <div className='absolute -right-12 -bottom-7 w-32'>
                  <NextImage
                    src='/images/beasiswaPage/mic-2.png'
                    width='100%'
                    height='100%'
                    layout='responsive'
                    objectFit='contain'
                    alt='mic-2'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2 End */}
        {/* Section 3 Start */}
        <section className='relative overflow-hidden pt-44'>
          <div>
            <div className='absolute top-96 w-96'>
              <NextImage
                src='/images/beasiswaPage/cloud-3.png'
                width='100%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                alt='cloud-3'
              />
            </div>
            <div className='absolute -top-44 w-full'>
              <NextImage
                src='/images/beasiswaPage/string-2.png'
                width='100%'
                height='80%'
                layout='responsive'
                objectFit='contain'
                alt='string-2'
              />
            </div>
          </div>
          <div className='relative z-10 flex flex-col items-center justify-center'>
            <div className='relative flex h-36 w-screen items-center justify-center border-2 border-bone-1000 bg-green-400'>
              <div className='absolute bottom-0 -left-2 w-64'>
                <NextImage
                  src='/images/beasiswaPage/rainbow-1.png'
                  width='100%'
                  height='50%'
                  layout='responsive'
                  objectFit='contain'
                  alt='rainbow-1'
                />
              </div>
              <div className='absolute -bottom-24 right-2 w-64'>
                <NextImage
                  src='/images/beasiswaPage/cursor-1.png'
                  width='100%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='cursor-1'
                />
              </div>
              <Typography
                variant='h4'
                className='stroke text-[48px] font-bold leading-[64px] text-white'
              >
                Beasiswa ITS
              </Typography>
            </div>

            <div className='mt-14 mb-24 flex h-[400px] w-full max-w-[1260px]'>
              <Swiper
                navigation={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                modules={[Autoplay, Navigation, Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={-50}
                slidesPerView={3}
                className='beasiswa myswiper'
              >
                <SwiperSlide>
                  <div className='mx-auto flex h-[345px] w-full max-w-[297px] flex-col items-center justify-center space-y-5 rounded-2xl border-2 border-neutral-1000 bg-neutral-100 pt-6 pl-6 pr-6 pb-4'>
                    <div className='w-full'>
                      <NextImage
                        src='/images/beasiswaPage/carousel-1.png'
                        width='100%'
                        height='70%'
                        layout='responsive'
                        objectFit='contain'
                        alt='carousel-1'
                      />
                    </div>
                    <Typography
                      variant='title'
                      className='text-[20px] font-bold leading-[24px] text-black '
                    >
                      Beasiswa Unggulan
                    </Typography>
                    <ButtonLink
                      variant='yellow'
                      size='medium'
                      round='medium'
                      href='#'
                    >
                      Lihat
                    </ButtonLink>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='mx-auto flex h-[345px] w-full max-w-[297px] flex-col items-center justify-center space-y-5 rounded-2xl border-2 border-neutral-1000 bg-neutral-100 pt-6 pl-6 pr-6 pb-4'>
                    <div className='w-full'>
                      <NextImage
                        src='/images/beasiswaPage/carousel-1.png'
                        width='100%'
                        height='70%'
                        layout='responsive'
                        objectFit='contain'
                        alt='carousel-1'
                      />
                    </div>
                    <Typography
                      variant='title'
                      className='text-[20px] font-bold leading-[24px] text-black '
                    >
                      Beasiswa Unggulan
                    </Typography>
                    <ButtonLink
                      variant='yellow'
                      size='medium'
                      round='medium'
                      href='#'
                    >
                      Lihat
                    </ButtonLink>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='mx-auto flex h-[345px] w-full max-w-[297px] flex-col items-center justify-center space-y-5 rounded-2xl border-2 border-neutral-1000 bg-neutral-100 pt-6 pl-6 pr-6 pb-4'>
                    <div className='w-full'>
                      <NextImage
                        src='/images/beasiswaPage/carousel-1.png'
                        width='100%'
                        height='70%'
                        layout='responsive'
                        objectFit='contain'
                        alt='carousel-1'
                      />
                    </div>
                    <Typography
                      variant='title'
                      className='text-[20px] font-bold leading-[24px] text-black '
                    >
                      Beasiswa Unggulan
                    </Typography>
                    <ButtonLink
                      variant='yellow'
                      size='medium'
                      round='medium'
                      href='#'
                    >
                      Lihat
                    </ButtonLink>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='mx-auto flex h-[345px] w-full max-w-[297px] flex-col items-center justify-center space-y-5 rounded-2xl border-2 border-neutral-1000 bg-neutral-100 pt-6 pl-6 pr-6 pb-4'>
                    <div className='w-full'>
                      <NextImage
                        src='/images/beasiswaPage/carousel-1.png'
                        width='100%'
                        height='70%'
                        layout='responsive'
                        objectFit='contain'
                        alt='carousel-1'
                      />
                    </div>
                    <Typography
                      variant='title'
                      className='text-[20px] font-bold leading-[24px] text-black '
                    >
                      Beasiswa Unggulan
                    </Typography>
                    <ButtonLink
                      variant='yellow'
                      size='medium'
                      round='medium'
                      href='#'
                    >
                      Lihat
                    </ButtonLink>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className='mb-24 flex h-1 w-10/12 items-center border-2 border-bone-1000'>
              <div className='ml-24 h-14 w-44 rounded-3xl border-2 border-black bg-lightBlue-400'></div>
            </div>
          </div>
        </section>
        {/* Section 3 End */}
        {/* Section 4 Start */}
        <section className='relative overflow-hidden px-14 pt-16 pb-32'>
          <div>
            <div className='absolute top-52 right-0 w-96'>
              <NextImage
                src='/images/beasiswaPage/cloud-4.png'
                width='100%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                alt='cloud-4'
              />
            </div>
            <div className='absolute top-72 w-full'>
              <NextImage
                src='/images/beasiswaPage/string-3.png'
                width='100%'
                height='80%'
                layout='responsive'
                objectFit='contain'
                alt='star'
              />
            </div>
          </div>
          <div className='relative z-10 flex flex-col items-center justify-center'>
            <div className='relative z-50 h-32 w-full max-w-[811px] -rotate-2 rounded-2xl border-2 '>
              <div className='-rotate-4 absolute inset-0 z-50 flex h-32 w-full max-w-[811px] items-center justify-between rounded-2xl border-2 border-bone-1000 bg-green-400 px-9'>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-white'></div>
                  <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-white'></div>
                </div>
                <Typography
                  variant='h4'
                  className='stroke text-[48px] font-bold leading-[64px] text-white'
                >
                  Beasiswa Mitra ITS
                </Typography>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-white'></div>
                  <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-white'></div>
                </div>
              </div>
              <div className='-rotate-4 absolute -left-4 -bottom-4 -z-50 h-32 w-full max-w-[811px] rounded-2xl border-2 border-bone-1000 bg-black'></div>
            </div>

            <div className='mt-24 flex w-full flex-col items-center justify-center space-y-8'>
              {dataBeasiswaMitraITS?.map((v, i) => (
                <BeasiswaCard key={`Beasiswa-Card-key-${i}`} {...v} />
              ))}
            </div>
          </div>
        </section>
        {/* Section 4 End */}
      </main>
    </Layout>
  );
}
