import * as React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
          <div className='layout relative z-10 flex flex-col items-center md:flex-row md:items-start md:justify-between'>
            <div className='mt-40 text-center md:mt-56 md:text-left'>
              <Typography
                variant='h2'
                className='stroke-sm md:stroke text-5xl font-bold leading-none text-orange-500 md:text-[72px] md:leading-[90px]'
              >
                Merchandise
              </Typography>
              <Typography
                variant='h6'
                className='mt-2 text-sm font-bold leading-none md:mt-0 md:text-[24px] md:leading-[32px]'
              >
                INI LHO ITS 2023
              </Typography>
              <div className='mt-20 mb-16 flex flex-col items-center gap-4 md:mb-0 xl:mt-8 xl:flex-row xl:gap-6'>
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
              <div className='md:mt-36 md:block md:w-[425px] xl:mt-24 xl:w-[625px]'>
                <NextImage
                  src='/images/merchandisePage/hero-1.png'
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='contain'
                  alt='person-1'
                />
              </div>
            </div>
          </div>
        </section>
        {/* Section 1 End */}
        {/* Section 2 Start*/}
        <section className='relative mt-20 overflow-hidden'>
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
              <div className='mt-12 mb-8 flex h-[480px] w-[375px] sm:mt-28 sm:mb-36 sm:w-[600px] lg:h-[420px] lg:w-full lg:max-w-[900px] xl:max-w-[1400px]'>
                <Swiper
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  modules={[Autoplay]}
                  spaceBetween={-400}
                  slidesPerView={1}
                  // breakpoints={{
                  //   640: {
                  //     slidesPerView: 1,
                  //   },
                  //   768: {
                  //     slidesPerView: 2,
                  //   },
                  //   1024: {
                  //     slidesPerView: 2,
                  //   },
                  //   1280: {
                  //     slidesPerView: 2,
                  //   },
                  // }}
                >
                  <SwiperSlide>
                    <div className='relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border-2 border-neutral-1000 bg-white px-4 lg:h-[364px] lg:max-w-[832px] '>
                      <div className='absolute inset-0 -left-24 h-[1000px] w-80 -translate-y-20 rotate-12 border-2 border-neutral-1000 bg-bone-500'></div>
                      <div className='w-1/2'>
                        <NextImage
                          src='/images/merchandisePage/bundle-1.png'
                          width='100%'
                          height='80%'
                          layout='responsive'
                          objectFit='contain'
                          alt='bundle-1'
                        />
                      </div>
                      <div className='relative flex w-1/2 flex-col pl-14'>
                        <p className='text-lg font-medium'>
                          From <span className='line-through'>Rp295.000</span>
                        </p>
                        <p className='text-2xl font-bold'>
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
                          href='/'
                          className='mt-4 flex w-2/3 justify-center'
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
                    <div className='relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border-2 border-neutral-1000 bg-white px-4 lg:h-[364px] lg:max-w-[832px] '>
                      <div className='absolute inset-0 -left-24 h-[1000px] w-80 -translate-y-20 rotate-12 border-2 border-neutral-1000 bg-bone-500'></div>
                      <div className='w-1/2'>
                        <NextImage
                          src='/images/merchandisePage/bundle-2.png'
                          width='100%'
                          height='80%'
                          layout='responsive'
                          objectFit='contain'
                          alt='bundle-1'
                        />
                      </div>
                      <div className='relative flex w-1/2 flex-col pl-14'>
                        <p className='text-lg font-medium'>
                          From <span className='line-through'>Rp230.000</span>
                        </p>
                        <p className='text-2xl font-bold'>
                          Now Just{' '}
                          <span className='text-red-500'>Rp210.000!</span>
                        </p>
                        <ul className='mt-4 ml-4 grid list-disc grid-cols-2'>
                          <li className='text-sm font-normal'>T-SHIRT</li>
                          <li className='text-sm font-normal'>GELANG</li>
                          <li className='text-sm font-normal'>STICKER</li>
                          <li className='text-sm font-normal'>TOPI</li>
                          <li className='text-sm font-normal'>LANYARD</li>
                        </ul>
                        <ButtonLink
                          variant='yellow'
                          href='/'
                          className='mt-4 flex w-2/3 justify-center'
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
                    <div className='relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border-2 border-neutral-1000 bg-white px-4 lg:h-[364px] lg:max-w-[832px] '>
                      <div className='absolute inset-0 -left-24 h-[1000px] w-80 -translate-y-20 rotate-12 border-2 border-neutral-1000 bg-bone-500'></div>
                      <div className='w-1/2'>
                        <NextImage
                          src='/images/merchandisePage/bundle-3.png'
                          width='100%'
                          height='80%'
                          layout='responsive'
                          objectFit='contain'
                          alt='bundle-1'
                        />
                      </div>
                      <div className='relative flex w-1/2 flex-col pl-14'>
                        <p className='text-lg font-medium'>
                          From <span className='line-through'>Rp125.000</span>
                        </p>
                        <p className='text-2xl font-bold'>
                          Now Just{' '}
                          <span className='text-red-500'>Rp115.000!</span>
                        </p>
                        <ul className='mt-4 ml-4 grid list-disc grid-cols-1'>
                          <li className='text-sm font-normal'>TOTE BAG</li>
                          <li className='text-sm font-normal'>NOTEBOOK</li>
                          <li className='text-sm font-normal'>STICKER</li>
                          <li className='text-sm font-normal'>LANYARD</li>
                        </ul>
                        <ButtonLink
                          variant='yellow'
                          href='/'
                          className='mt-4 flex w-2/3 justify-center'
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
                    <div className='relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border-2 border-neutral-1000 bg-white px-4 lg:h-[364px] lg:max-w-[832px] '>
                      <div className='absolute inset-0 -left-24 h-[1000px] w-80 -translate-y-20 rotate-12 border-2 border-neutral-1000 bg-bone-500'></div>
                      <div className='w-1/2'>
                        <NextImage
                          src='/images/merchandisePage/bundle-4.png'
                          width='100%'
                          height='80%'
                          layout='responsive'
                          objectFit='contain'
                          alt='bundle-1'
                        />
                      </div>
                      <div className='relative flex w-1/2 flex-col pl-14'>
                        <p className='text-lg font-medium'>
                          From <span className='line-through'>Rp70.000</span>
                        </p>
                        <p className='text-2xl font-bold'>
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
                          href='/'
                          className='mt-4 flex w-2/3 justify-center text-base font-medium'
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
          <div className='mx-24 mt-24 flex flex-wrap justify-center gap-8'>
            {MerchData.map((item, i) => (
              <ItemModal key={i} data={item}>
                {({ openModal }) => (
                  <div className='flex flex-col rounded-2xl border-2 border-neutral-1000'>
                    <div className='h-[353px] w-[392px]'>
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
                    <div className='flex items-center justify-between rounded-b-2xl border-t-2 border-neutral-1000 bg-white px-4 lg:h-[104px]'>
                      <div className='flex flex-col'>
                        <p className='text-xl font-light text-neutral-1000'>
                          {item.itemName}
                        </p>
                        <p className='mt-2 text-2xl font-bold text-neutral-1000'>
                          {item.itemPrice}
                        </p>
                      </div>
                      <Button
                        variant='yellow'
                        onClick={openModal}
                        className='text-base font-medium'
                      >
                        Detail
                      </Button>
                    </div>
                  </div>
                )}
              </ItemModal>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
