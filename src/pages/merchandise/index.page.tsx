import * as React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import MerchData from '@/constant/merchData';
import ItemModal from '@/pages/merchandise/components/ItemModal';

export default function MerchandisePage() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setReady(true);
  }, []);

  return (
    <Layout>
      <Seo templateTitle='Merchandise' />
      <main className='bg-bone-500'>
        <section className='relative'>
          {/* Img Area 1 Start*/}
          <div>
            {/* Desktop Img Area 1 */}
            {/* Mobile Img Area 1 */}
          </div>
          {/* Img Area 1 End*/}
          <div className='layout relative z-10 flex flex-col items-start sm:items-center md:flex-row md:items-start md:justify-between'>
            <div className='mt-40 text-left md:mt-72 md:text-left'>
              <Typography
                variant='h2'
                className='stroke-sm md:stroke text-5xl font-bold leading-none text-orange-500 md:text-5xl lg:text-7xl'
              >
                Merchandise
              </Typography>
              <Typography
                variant='h6'
                className='mt-2 text-sm font-bold leading-none md:mt-0 md:text-[24px] md:leading-[32px]'
              >
                INI LHO ITS 2023
              </Typography>
              <div className='mt-4 items-center md:mb-0 '>
                {/* Desktop Button Hero */}
                <ButtonLink
                  variant='yellow'
                  round='medium'
                  size='large'
                  href='#more'
                  className='hidden w-max font-semibold md:inline-flex'
                >
                  Kenali Lebih Lanjut!
                </ButtonLink>
                {/* Moblie Button Hero */}
                <ButtonLink
                  variant='yellow'
                  round='medium'
                  size='small'
                  href='#more'
                  className='inline-flex w-max font-semibold md:hidden'
                >
                  Kenali Lebih Lanjut!
                </ButtonLink>
              </div>
            </div>
            <div>
              <div className='w-80 md:mt-48 md:w-[400px] lg:w-[550px] xl:mt-24 xl:w-[755px]'>
                <NextImage
                  src='/images/merchandisePage/hero-1.png'
                  width='90%'
                  height='70%'
                  layout='responsive'
                  objectFit='contain'
                  alt='merch'
                />
              </div>
            </div>
          </div>
        </section>
        {/* Section 1 End */}
        {/* Section 2 Start*/}
        <section className='relative overflow-hidden sm:mt-20' id='more'>
          <div className='relative z-20 flex h-24 w-screen items-center justify-center border-b-2 border-t-2  border-bone-1000 bg-yellow-500 md:h-36'>
            <div className='absolute -top-[0.2rem] left-0 -z-10 w-[4.5rem] md:-top-[0.4rem] md:w-48'>
              <NextImage
                src='/images/eventualPage/arrow-1.png'
                width='90%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                alt='arrow-1'
              />
            </div>
            <div className='absolute bottom-0 right-10 -z-10 w-[4rem] md:w-32'>
              <NextImage
                src='/images/eventualPage/eye-1.png'
                width='100%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                alt='eye-1'
              />
            </div>
            <Typography
              variant='h4'
              className='stroke md:stroke px-11 text-center text-2xl font-bold leading-[32px] text-white md:px-0 md:text-[48px]  md:leading-[64px]'
            >
              Bundling Package
            </Typography>
          </div>
        </section>
        {/* Section 2 End */}
        {/* Section 3 Start */}
        <section className='relative'>
          {/* Img Area 3 Start*/}
          <div>
            <div className='absolute bottom-28 right-0 w-32'>
              <NextImage
                src='/images/merchandisePage/cloud-1.png'
                width='100%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                alt='cloud-1'
              />
            </div>
            <div className='absolute -bottom-8 right-0 w-20'>
              <NextImage
                src='/images/merchandisePage/star-1.png'
                width='60%'
                height='100%'
                layout='responsive'
                objectFit='contain'
                alt='star-1'
              />
            </div>
          </div>
          {/* Img Area 3 End*/}
          <div className='relative z-10 flex justify-center'>
            {ready && (
              <div className='mt-12 mb-8 w-[375px] sm:mt-28 sm:w-[600px] md:h-[450px] lg:mb-36 lg:h-[420px] lg:w-full lg:max-w-[900px] xl:max-w-[1200px]'>
                <Swiper
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  modules={[Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  breakpoints={{
                    640: {
                      spaceBetween: 50,
                      slidesPerView: 1,
                    },
                    768: {
                      spaceBetween: 50,
                      slidesPerView: 1,
                    },
                    1024: {
                      spaceBetween: 200,
                      slidesPerView: 1,
                    },
                    1280: {
                      spaceBetween: -300,
                      slidesPerView: 1,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className='relative mx-auto flex w-full max-w-[300px] flex-col items-center gap-4 overflow-hidden rounded-2xl border-2 border-neutral-1000 bg-white px-4 py-4 sm:mx-0 sm:h-[364px] sm:max-w-xl sm:flex-row sm:py-0 md:max-w-[832px]'>
                      <div className='absolute inset-0 -left-24 hidden h-[1000px] w-80 -translate-y-20 rotate-12 border-2 border-neutral-1000 bg-bone-500 sm:block'></div>
                      <div className='w-72 sm:w-1/2'>
                        <NextImage
                          src='/images/merchandisePage/bundle-1.png'
                          width='100%'
                          height='80%'
                          layout='responsive'
                          objectFit='contain'
                          alt='bundle-1'
                        />
                      </div>
                      <div className='relative flex w-[22rem] flex-col pl-14 sm:w-1/2'>
                        <p className='text-base font-medium sm:text-lg'>
                          From <span className='line-through'>Rp295.000</span>
                        </p>
                        <p className='text-xl font-bold sm:text-2xl'>
                          Now Just{' '}
                          <span className='text-red-500'>Rp275.000!</span>
                        </p>
                        <ul className='mt-4 ml-4 grid list-disc grid-cols-2'>
                          <li className='text-sm font-normal'>T-SHIRT</li>
                          <li className='text-sm font-normal'>GELANG</li>
                          <li className='text-sm font-normal'>TOTE BAG</li>
                          <li className='text-sm font-normal'>STICKER</li>
                          <li className='text-sm font-normal'>TOPI</li>
                          <li className='text-sm font-normal'>KIPAS</li>
                          <li className='text-sm font-normal'>NOTEBOOK</li>
                          <li className='text-sm font-normal'>LANYARD</li>
                          <li className='text-sm font-normal'>KEYCHAIN</li>
                        </ul>
                        <ButtonLink
                          variant='yellow'
                          href='https://linktr.ee/MerchandiseILITS2023'
                          className='mt-4 flex w-[80%] justify-center sm:w-2/3'
                        >
                          Order Now!
                        </ButtonLink>
                        <div className='absolute -top-4 right-10 w-10'>
                          <NextImage
                            src='/images/merchandisePage/diamond-1.png'
                            width='100%'
                            height='100%'
                            layout='responsive'
                            objectFit='contain'
                            alt='diamond-1'
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='relative mx-auto flex w-full max-w-[300px] flex-col items-center gap-4 overflow-hidden rounded-2xl border-2 border-neutral-1000 bg-white px-4 py-4 sm:mx-0 sm:h-[364px] sm:max-w-xl sm:flex-row sm:py-0 md:max-w-[832px]'>
                      <div className='absolute inset-0 -left-24 hidden h-[1000px] w-80 -translate-y-20 rotate-12 border-2 border-neutral-1000 bg-bone-500 sm:block'></div>
                      <div className='w-72 sm:w-1/2'>
                        <NextImage
                          src='/images/merchandisePage/bundle-2.png'
                          width='100%'
                          height='80%'
                          layout='responsive'
                          objectFit='contain'
                          alt='bundle-1'
                        />
                      </div>
                      <div className='relative flex w-[22rem] flex-col pl-14 sm:w-1/2'>
                        <p className='text-base font-medium sm:text-lg'>
                          From <span className='line-through'>Rp230.000</span>
                        </p>
                        <p className='text-xl font-bold sm:text-2xl'>
                          Now Just{' '}
                          <span className='text-red-500'>Rp210.000!</span>
                        </p>
                        <ul className='mt-4 ml-4 grid list-disc grid-cols-1 sm:grid-cols-2'>
                          <li className='text-sm font-normal'>T-SHIRT</li>
                          <li className='text-sm font-normal'>GELANG</li>
                          <li className='text-sm font-normal'>STICKER</li>
                          <li className='text-sm font-normal'>TOPI</li>
                          <li className='text-sm font-normal'>LANYARD</li>
                        </ul>
                        <ButtonLink
                          variant='yellow'
                          href='https://linktr.ee/MerchandiseILITS2023'
                          className='mt-4 flex w-[80%] justify-center sm:w-2/3'
                        >
                          Order Now!
                        </ButtonLink>
                        <div className='absolute -top-4 right-10 w-10'>
                          <NextImage
                            src='/images/merchandisePage/diamond-1.png'
                            width='100%'
                            height='100%'
                            layout='responsive'
                            objectFit='contain'
                            alt='diamond-1'
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='relative mx-auto flex w-full max-w-[300px] flex-col items-center gap-4 overflow-hidden rounded-2xl border-2 border-neutral-1000 bg-white px-4 py-4 sm:mx-0 sm:h-[364px] sm:max-w-xl sm:flex-row sm:py-0 md:max-w-[832px]'>
                      <div className='absolute inset-0 -left-24 hidden h-[1000px] w-80 -translate-y-20 rotate-12 border-2 border-neutral-1000 bg-bone-500 sm:block'></div>
                      <div className='w-72 sm:w-1/2'>
                        <NextImage
                          src='/images/merchandisePage/bundle-3.png'
                          width='100%'
                          height='80%'
                          layout='responsive'
                          objectFit='contain'
                          alt='bundle-1'
                        />
                      </div>
                      <div className='relative flex w-[22rem] flex-col pl-14 sm:w-1/2'>
                        <p className='text-base font-medium sm:text-lg'>
                          From <span className='line-through'>Rp125.000</span>
                        </p>
                        <p className='text-xl font-bold sm:text-2xl'>
                          Now Just{' '}
                          <span className='text-red-500'>Rp115.000!</span>
                        </p>
                        <ul className='mt-4 ml-4 grid list-disc grid-cols-1 pb-5 sm:pb-0'>
                          <li className='text-sm font-normal'>TOTE BAG</li>
                          <li className='text-sm font-normal'>NOTEBOOK</li>
                          <li className='text-sm font-normal'>STICKER</li>
                          <li className='text-sm font-normal'>LANYARD</li>
                        </ul>
                        <ButtonLink
                          variant='yellow'
                          href='https://linktr.ee/MerchandiseILITS2023'
                          className='mt-4 flex w-[80%] justify-center sm:w-2/3'
                        >
                          Order Now!
                        </ButtonLink>
                        <div className='absolute -top-4 right-10 w-10'>
                          <NextImage
                            src='/images/merchandisePage/diamond-1.png'
                            width='100%'
                            height='100%'
                            layout='responsive'
                            objectFit='contain'
                            alt='diamond-1'
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='relative mx-auto flex w-full max-w-[300px] flex-col items-center gap-4 overflow-hidden rounded-2xl border-2 border-neutral-1000 bg-white px-4 py-4 sm:mx-0 sm:h-[364px] sm:max-w-xl sm:flex-row sm:py-0 md:max-w-[832px]'>
                      <div className='absolute inset-0 -left-24 hidden h-[1000px] w-80 -translate-y-20 rotate-12 border-2 border-neutral-1000 bg-bone-500 sm:block'></div>
                      <div className='w-72 sm:w-1/2'>
                        <NextImage
                          src='/images/merchandisePage/bundle-4.png'
                          width='100%'
                          height='80%'
                          layout='responsive'
                          objectFit='contain'
                          alt='bundle-1'
                        />
                      </div>
                      <div className='relative flex w-[22rem] flex-col pl-14 sm:w-1/2'>
                        <p className='text-base font-medium sm:text-lg'>
                          From <span className='line-through'>Rp70.000</span>
                        </p>
                        <p className='text-xl font-bold sm:text-2xl'>
                          Now Just{' '}
                          <span className='text-red-500'>Rp60.000!</span>
                        </p>
                        <ul className='mt-4 ml-4 grid list-disc grid-cols-1'>
                          <li className='text-sm font-normal'>GELANG</li>
                          <li className='text-sm font-normal'>STICKER</li>
                          <li className='text-sm font-normal'>KEYCHAIN</li>
                          <li className='text-sm font-normal'>KIPAS</li>
                          <li className='text-sm font-normal'>LANYARD</li>
                        </ul>
                        <ButtonLink
                          variant='yellow'
                          href='https://linktr.ee/MerchandiseILITS2023'
                          className='mt-4 flex w-[80%] justify-center sm:w-2/3'
                        >
                          Order Now!
                        </ButtonLink>
                        <div className='absolute -top-4 right-10 w-10'>
                          <NextImage
                            src='/images/merchandisePage/diamond-1.png'
                            width='100%'
                            height='100%'
                            layout='responsive'
                            objectFit='contain'
                            alt='diamond-1'
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            )}
          </div>
        </section>
        {/* Section 3 End */}
        {/* Section 4 Start */}
        <section className='relative'>
          {/* Img Area 4 Start*/}
          <div>
            <div className='absolute top-0 left-0 w-72'>
              <NextImage
                src='/images/merchandisePage/cloud-2.png'
                width='100%'
                height='80%'
                layout='responsive'
                objectFit='contain'
                alt='cloud-2'
              />
            </div>
          </div>
          {/* Img Area 4 End*/}
          <div className='relative z-10 flex flex-col items-center justify-center'>
            <div className='relative z-50 h-20 w-full max-w-[300px]  rounded-2xl border-2 sm:h-32 sm:max-w-lg md:max-w-xl lg:max-w-[811px] '>
              <div className=' absolute  z-50 flex h-20 w-full max-w-xs items-center  justify-between rounded-2xl border-2 border-bone-1000 bg-orange-400 px-9 sm:h-32 sm:max-w-lg md:max-w-xl lg:max-w-[811px]'>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <div className='h-[8px] w-[8px] rounded-full border-2 border-bone-1000 bg-white sm:h-[20px] sm:w-[20px]'></div>
                  <div className='h-[8px] w-[8px] rounded-full border-2 border-bone-1000 bg-white sm:h-[20px] sm:w-[20px]'></div>
                </div>
                <Typography
                  variant='h4'
                  className='stroke text-2xl font-bold text-white sm:text-4xl sm:leading-none md:text-[48px] md:leading-[64px]'
                >
                  Katalog Kami!
                </Typography>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <div className='h-[8px] w-[8px] rounded-full border-2 border-bone-1000 bg-white sm:h-[20px] sm:w-[20px]'></div>
                  <div className='h-[8px] w-[8px] rounded-full border-2 border-bone-1000 bg-white sm:h-[20px] sm:w-[20px]'></div>
                </div>
              </div>
              <div className=' absolute -left-2 -bottom-4 -z-50 h-20 w-full max-w-[811px] rounded-2xl border-2 border-bone-1000 bg-black sm:-left-4 sm:h-32'></div>
            </div>
          </div>
          <div className='mx-2 mt-12 flex flex-wrap justify-center gap-2 pb-24 sm:mt-24 sm:gap-8 md:mx-4 lg:mx-20'>
            <ItemModal>
              {({ openModal }) => (
                <>
                  {MerchData.map((item, i) => (
                    <div key={i}>
                      <div className='flex h-full flex-col rounded-2xl border-2 border-neutral-1000 pb-2 sm:pb-0'>
                        <div className='h-36 w-40 sm:h-72 sm:w-80 lg:h-[353px] lg:w-[392px]'>
                          <NextImage
                            src={item.itemImage}
                            width='100%'
                            height='90%'
                            layout='responsive'
                            objectFit='contain'
                            imgClassName='rounded-t-2xl'
                            alt='item-1'
                          />
                        </div>
                        <div
                          className={clsxm(
                            'flex flex-col items-center justify-between rounded-b-2xl border-t-2 border-neutral-1000 bg-white px-2 sm:flex-row',
                            'h-full w-40 pt-2 sm:h-24 sm:w-80 sm:px-4 sm:pt-0 lg:h-[104px] lg:w-[392px]'
                          )}
                        >
                          <div className='flex flex-col justify-between'>
                            <p className='w-32 text-base text-neutral-1000 sm:w-auto sm:text-xl'>
                              {item.itemName}
                            </p>
                            <p className='w-32 text-lg font-bold text-neutral-1000 sm:w-auto sm:text-2xl'>
                              {item.itemPrice}
                            </p>
                          </div>
                          <Button
                            variant='yellow'
                            onClick={() => openModal(item)}
                            className='mt-2 flex w-full justify-center text-base font-medium sm:mt-0 sm:w-auto'
                          >
                            Detail
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </ItemModal>
          </div>
        </section>
      </main>
    </Layout>
  );
}
