import * as React from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import clsxm from '@/lib/clsxm';

import Card from '@/components/homepageComponent/Card';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import {
  alumni,
  beasiswa,
  cardPrestasi,
  companyLogo,
  fakultas,
  openCampus,
} from '@/constant/homeData';

export default function HomePage() {
  const [heightW, setHeight] = React.useState<number>(0);
  const [widthW, setWidth] = React.useState<number>(0);
  const [id, setID] = React.useState<number>(1);
  React.useEffect(() => {
    if (window !== undefined) {
      const { innerHeight: height, innerWidth: width } = window;
      setHeight(height);
      setWidth(width);
    }
  }, []);

  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main className='overflow-hidden'>
        <section className='Home bg-bone-500'>
          <div className='relative flex min-h-screen flex-col bg-bone-500'>
            {/* Line kiri */}
            <NextImage
              className='absolute top-0 left-0 z-40 hidden w-2/5 md:block'
              src='/images/homePage/grup.png'
              layout='responsive'
              objectFit='contain'
              width='88%'
              height='60%'
              alt='Line 1'
            />
            {/* Line kanan */}
            <NextImage
              className='absolute top-64 right-0 w-full md:top-24 lg:top-0'
              src='/images/homePage/grup2.png'
              layout='responsive'
              objectFit='cover'
              width='100%'
              height='100%'
              alt='Line 2'
            />
            {/* Awan kanan */}
            <NextImage
              className='absolute top-[15rem] right-16 w-[33%] md:right-24 md:top-8 lg:-top-16'
              src='/images/homePage/awan1.png'
              layout='responsive'
              objectFit='contain'
              width='100%'
              height='100%'
              alt='Virtual Tour'
            />

            {/* Awan kiri */}
            <NextImage
              className='absolute top-[13%] left-[5%] w-[36%] lg:top-[7%]'
              src='/images/homePage/awan2.png'
              layout='responsive'
              objectFit='contain'
              width='100%'
              height='100%'
              alt='Virtual Tour'
            />
            <NextImage
              className='absolute top-[19rem] right-[17.2rem] block w-[38%] md:hidden'
              src='/images/homePage/awan1.png'
              layout='responsive'
              objectFit='contain'
              width='100%'
              height='100%'
              alt='Virtual Tour'
            />
            {/* Cewek */}
            <NextImage
              className='absolute top-72 -left-0 z-50 hidden w-[23%] md:top-28 md:block lg:top-32 1xl:w-[25%]'
              src='/images/homePage/female.png'
              layout='responsive'
              objectFit='contain'
              width='50%'
              height='100%'
              alt='Virtual Tour'
            />

            {/* Cowok */}
            <NextImage
              className='absolute right-0 top-72 z-50 hidden w-[23%] md:top-[14%] md:block lg:top-32 1xl:w-[25%]'
              src='/images/homePage/male.png'
              layout='responsive'
              objectFit='contain'
              width='50%'
              height='100%'
              alt='Virtual Tour'
            />
            {/* Cewek mobile */}
            <NextImage
              className='absolute top-64 left-0 z-[50] block w-[8.5rem] md:hidden'
              src='/images/homePage/girl-mobile.png'
              layout='responsive'
              objectFit='contain'
              width='50%'
              height='100%'
              alt='Virtual Tour'
            />
            {/* Cowok mobile */}
            <NextImage
              className='absolute top-56 right-0 z-[50] block w-[9.5rem] md:hidden'
              src='/images/homePage/boy-mobile.png'
              layout='responsive'
              objectFit='contain'
              width='50%'
              height='100%'
              alt='Virtual Tour'
            />
            {/* Star */}
            <NextImage
              id='more'
              className='absolute top-[28rem] right-[22%] z-50 w-10 md:top-[70vh] md:w-16 lg:w-20 xl:w-24'
              src='/images/homePage/star.png'
              layout='responsive'
              objectFit='contain'
              width='50%'
              height='50%'
              alt='Virtual Tour'
            />
            {/* Hero */}
            <div
              className={`${
                heightW < 800 ? 'md:mt-16' : 'md:mt-0'
              } relative mx-auto mt-24 flex h-fit w-fit flex-col md:h-screen md:justify-center`}
            >
              <div
                className={clsxm(
                  'shadow-box-sm md:shadow-box-md 1xl:shadow-box',
                  'relative mx-auto mb-4 w-fit rounded-lg bg-red-400 p-1 px-6 outline',
                  'outline-2 outline-black md:mb-8 md:rounded-xl md:px-10'
                )}
              >
                <div
                  className={clsxm(
                    'absolute top-2 left-2 h-[6px] w-[6px] rounded-full',
                    'bg-background-cream outline outline-2 outline-black md:left-4 md:h-2 md:w-2'
                  )}
                ></div>
                <div
                  className={clsxm(
                    'absolute bottom-2 left-2 h-[6px] w-[6px]',
                    'rounded-full bg-background-cream outline outline-2 outline-black md:left-4 md:h-2 md:w-2'
                  )}
                ></div>
                <Typography
                  variant='h6'
                  className={clsxm(
                    'stroke-md md:stroke text-center text-[14px] font-bold leading-[24px]',
                    'text-background-cream md:text-[20px] md:leading-[24px] xl:text-[24px] xl:leading-[32px]'
                  )}
                >
                  LAUNGAN HARAPAN
                </Typography>
                <div
                  className={clsxm(
                    'absolute top-2 right-2 h-[6px] w-[6px] rounded-full',
                    'bg-background-cream outline outline-2 outline-black md:right-4 md:h-2 md:w-2'
                  )}
                ></div>
                <div
                  className={clsxm(
                    'absolute bottom-2 right-2 h-[6px] w-[6px] rounded-full bg-background-cream',
                    'outline outline-2 outline-black md:right-4 md:h-2 md:w-2'
                  )}
                ></div>
              </div>
              <div className='relative z-[50] flex flex-col items-center space-y-4'>
                <Typography
                  variant='h1'
                  className={clsxm(
                    'stroke-sm md:stroke-md md:stroke text-center text-[48px] font-bold leading-[64px]',
                    'text-primary-main md:text-[72px] md:leading-[90px] xl:text-[80px] xl:leading-[96px]'
                  )}
                >
                  INI LHO ITS! 2023
                </Typography>
                <Typography
                  variant='p'
                  className='mx-12 max-w-lg py-4 pt-56 text-center font-medium md:mx-0 md:pt-0'
                >
                  Kenali Dirimu, Kenali Masa Depanmu, <br />
                  di INI LHO ITS! 2023.
                </Typography>
                <a
                  href='#more'
                  className='rounded-lg bg-yellow-500 px-5 py-[6px] font-semibold outline outline-2 outline-black md:py-2'
                >
                  Kenali Lebih Lanjut!
                </a>
              </div>
            </div>

            {/* Apa itu INI LHO ITS? */}
            <div className='relative w-full rounded-lg'>
              <NextImage
                className={`${
                  heightW > 799 ? 'top-[1%]' : 'top-[10%]'
                } absolute right-0 z-50 hidden w-16 md:block lg:w-20 1xl:w-24`}
                src='/images/homePage/star2.png'
                layout='responsive'
                objectFit='contain'
                width='80%'
                height='100%'
                alt='Virtual Tour'
              />
              <NextImage
                className='absolute top-52 right-0 z-50 w-[30%]'
                src='/images/homePage/awan3.png'
                layout='responsive'
                objectFit='contain'
                width='100%'
                height='60%'
                alt='Virtual Tour'
              />
              <div
                className={`${
                  heightW < 800 ? 'mt-20' : 'mt-8'
                } relative z-50 mx-4 flex w-fit max-w-5xl flex-col justify-center rounded-lg bg-white md:mx-16 xl:mx-auto`}
              >
                <NextImage
                  className='absolute bottom-0 right-4 z-[51] w-12 translate-x-[45%] translate-y-1/2 md:right-0 md:w-16 lg:w-20 1xl:w-24'
                  src='/images/homePage/cursor.png'
                  layout='responsive'
                  objectFit='contain'
                  width='50%'
                  height='50%'
                  alt='Virtual Tour'
                />
                <NextImage
                  className='absolute -top-6 left-2 z-[51] w-16 md:left-12 lg:-top-8 lg:w-20 1xl:-top-12 1xl:w-24'
                  src='/images/homePage/arrow.png'
                  layout='responsive'
                  objectFit='contain'
                  width='50%'
                  height='50%'
                  alt='Virtual Tour'
                />
                <NextImage
                  className='absolute bottom-0 left-0 z-[51] hidden w-24 translate-y-[65%] -translate-x-1/2 md:block lg:w-28 1xl:w-32'
                  src='/images/homePage/magnifier.png'
                  layout='responsive'
                  objectFit='contain'
                  width='50%'
                  height='50%'
                  alt='Virtual Tour'
                />
                <div className='flex justify-end gap-4 rounded-t-xl border-2 border-black bg-red-100 p-2 lg:p-3'>
                  <div className='h-3 w-3 rounded-full bg-yellow-300 outline outline-2 outline-black lg:h-4 lg:w-4'></div>
                  <div className='h-3 w-3 rounded-full bg-red-400 outline outline-2 outline-black lg:h-4 lg:w-4'></div>
                  <div className='h-3 w-3 rounded-full bg-green-300 outline outline-2 outline-black lg:h-4 lg:w-4'></div>
                </div>
                <div className='rounded-b-xl border-2 border-x-black border-b-black p-6 lg:p-8 1xl:p-10'>
                  <Typography
                    variant='h5'
                    className='pb-2 text-[24px] font-bold leading-[32px] lg:text-[32px] lg:leading-[48px]'
                  >
                    Apa itu INI LHO ITS?
                  </Typography>
                  <Typography variant='p' className='pt-1 pb-4 lg:pt-2'>
                    INI LHO ITS! merupakan suatu wadah yang mengintegrasikan
                    seluruh elemen-elemen ITS untuk memperkenalkan ITS beserta
                    kehidupan perkuliahan dan keilmuan di dalamnya dengan
                    memberikan informasi seputar fakultas dan jurusan yang ada
                    di ITS, sembari menyebarluaskan semangat perguruan tinggi
                    kepada seluruh siswa/i SMA sederajat di Indonesia dan bahkan
                    ke seluruh dunia dengan mengatasnamakan Institut Teknologi
                    Sepuluh Nopember, yang dikenal dengan sebutan INI LHO ITS!
                    2023. <br />
                    <br />
                    Harapannya, INI LHO ITS! 2023 dapat memberikan pengetahuan
                    dan pengalaman yang nyata bagi siswa/i SMA sederajat
                    mengenai kehidupan perkuliahan dan menjadi wadah untuk
                    mengantarkan siswa/i SMA sederajat pada jurusan impian yang
                    sesuai dengan minat dan bakat yang dimiliki.
                  </Typography>
                </div>
              </div>
            </div>

            {/* Virtual Tour ITS */}
            <div className='relative w-full'>
              <NextImage
                className='absolute top-[30%] left-[3%] z-[49] w-[30%] xl:left-[9%]'
                src='/images/homePage/awan4.png'
                layout='responsive'
                objectFit='contain'
                width='100%'
                height='60%'
                alt='Virtual Tour'
              />
              <NextImage
                className='absolute -bottom-8 right-0 z-[49] hidden w-[27%] md:block'
                src='/images/homePage/awan5.png'
                layout='responsive'
                objectFit='contain'
                width='100%'
                height='60%'
                alt='Virtual Tour'
              />
              <div
                className={clsxm(
                  'relative z-[50] mx-auto mt-24 mb-24 flex w-fit flex-col-reverse',
                  'rounded-2xl border-2 border-black bg-yellow-400',
                  'px-6 pb-6 pt-0 md:mb-44 md:mt-40 md:flex-col md:pb-0 md:pt-6 xl:mt-52'
                )}
              >
                <NextImage
                  className='absolute bottom-0 right-3 z-[51] w-16 translate-x-1/2 translate-y-1/2 md:right-0 md:w-20 lg:w-28'
                  src='/images/homePage/pin.png'
                  layout='responsive'
                  objectFit='contain'
                  width='100%'
                  height='100%'
                  alt='Virtual Tour'
                />
                <NextImage
                  className='absolute top-0 right-0 z-[51] hidden w-16 translate-x-[100%] -translate-y-1/3 md:block lg:w-20 lg:translate-x-[120%]'
                  src='/images/homePage/star3.png'
                  layout='responsive'
                  objectFit='contain'
                  width='50%'
                  height='50%'
                  alt='Virtual Tour'
                />
                <NextImage
                  className={clsxm(
                    'absolute bottom-0 left-0 z-[51] hidden w-16 -translate-x-3/4 translate-y-3/4',
                    'md:block lg:w-20 lg:-translate-x-full lg:translate-y-full'
                  )}
                  src='/images/homePage/star4.png'
                  layout='responsive'
                  objectFit='contain'
                  width='50%'
                  height='50%'
                  alt='Virtual Tour'
                />
                <UnstyledLink href='https://arek.its.ac.id/VTITS/'>
                  <div className='h-72 w-72 overflow-hidden rounded-xl border-2 border-black md:h-auto md:w-[574px]'>
                    <NextImage
                      src='/images/homePage/virtualTour1.png'
                      layout='responsive'
                      objectFit='cover'
                      width='100%'
                      height={widthW < 768 ? '100%' : '50%'}
                      alt='Virtual Tour'
                    />
                  </div>
                </UnstyledLink>
                <Typography variant='h6' className='py-3 text-center font-bold'>
                  Virtual Tour ITS!
                </Typography>
              </div>
            </div>

            <div className='relative border-t-2 border-b-2 border-black bg-lightBlue-500 p-4 lg:p-8 1xl:p-10'>
              <NextImage
                className='absolute top-0 left-0 z-[49] w-20 md:w-24 lg:w-32 1xl:w-48'
                src='/images/homePage/arrow2.png'
                layout='responsive'
                objectFit='contain'
                width='90%'
                height='50%'
                alt='Virtual Tour'
              />
              <NextImage
                className='absolute bottom-0 right-0 z-[49] w-16 md:w-24 lg:w-32 1xl:right-8 1xl:w-40'
                src='/images/homePage/eye.png'
                layout='responsive'
                objectFit='contain'
                width='90%'
                height='50%'
                alt='Virtual Tour'
              />
              <Typography
                variant='h4'
                className={clsxm(
                  'stroke-md lg:stroke px-12 text-center text-[24px] font-bold leading-[32px]',
                  'text-white md:px-0 md:text-[32px] md:leading-[48px] lg:text-[48px] lg:leading-[64px]'
                )}
              >
                Yuk, Kepoin Kita Lebih Lanjut !
              </Typography>
            </div>

            {/* Web Series ILITS */}
            <div className='relative w-full pt-16 md:pt-24'>
              <NextImage
                className='absolute top-0 left-0 w-full 1xl:-top-4'
                src='/images/homePage/lenn.png'
                layout='responsive'
                objectFit='cover'
                width='100%'
                height='45%'
                alt='Virtual Tour'
              />
              <div className='relative z-[50] mx-4 flex max-w-5xl flex-col rounded-lg bg-white md:mx-16 xl:mx-auto'>
                <div className='flex justify-end gap-4 rounded-t-lg border-2 border-black bg-lightBlue-500 p-2 lg:p-3'>
                  <div className='h-3 w-3 rounded-full bg-yellow-300 outline outline-2 outline-black lg:h-4 lg:w-4'></div>
                  <div className='h-3 w-3 rounded-full bg-red-400 outline outline-2 outline-black lg:h-4 lg:w-4'></div>
                  <div className='h-3 w-3 rounded-full bg-green-300 outline outline-2 outline-black lg:h-4 lg:w-4'></div>
                </div>
                <div className='rounded-x-lg home rounded-b-lg border-2 border-t-0 border-black'>
                  <Swiper
                    navigation={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    modules={[Autoplay, Navigation]}
                    className='mySwiper webseries'
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      <div className='flex'>
                        <div
                          className={clsxm(
                            'flex w-full flex-col items-center p-6 lg:w-1/2',
                            'lg:items-start lg:rounded-br-none lg:border-r-0 lg:p-8 xl:p-10'
                          )}
                        >
                          <Typography
                            variant='h5'
                            className='pb-4 text-[24px] font-bold leading-[32px] lg:pb-2 lg:text-[32px] lg:leading-[48px]'
                          >
                            Campaign
                          </Typography>
                          <NextImage
                            className='mb-4 block w-72 rounded-lg md:w-full md:max-w-lg lg:hidden lg:max-w-none'
                            src='/images/homePage/webseries-mobile.png'
                            layout='responsive'
                            objectFit='contain'
                            width='100%'
                            height='63%'
                            alt='Web Series ILITS'
                          />
                          <Typography
                            variant='p'
                            className='pt-1 md:w-full md:max-w-md md:text-center lg:max-w-none  lg:pt-2 lg:pb-[1.5rem] lg:text-left'
                          >
                            Nih buat temen-temen yang focus span nya
                            singkat-singkat! Pantengin terus TikTok Ini Lho ITS
                            karena bakal rutin nih bermunculan, video-video
                            asyik dan insightful buat teman-teman mulai dari
                            tentang ITS, perkuliahan, tips n trick, dan banyak
                            konten menarik lainnya!
                          </Typography>
                          <ButtonLink
                            href='https://www.youtube.com/@INILHOITS'
                            variant='lightBlue'
                            className='mb-12 mt-6 font-semibold lg:mb-0 lg:mt-12'
                          >
                            Tonton Sekarang!
                          </ButtonLink>
                        </div>
                        <div className='relative hidden w-1/2 rounded-br-lg lg:block'>
                          <NextImage
                            imgClassName='rounded-br-lg'
                            src='/images/homePage/webseries1.png'
                            layout='fill'
                            width='100%'
                            alt='Web Series ILITS'
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='flex'>
                        <div
                          className={clsxm(
                            'flex w-full flex-col items-center p-6 lg:w-1/2',
                            'lg:items-start lg:rounded-br-none lg:border-r-0 lg:p-8 xl:p-10'
                          )}
                        >
                          <Typography
                            variant='h5'
                            className='pb-4 text-[24px] font-bold leading-[32px] lg:pb-2 lg:text-[32px] lg:leading-[48px]'
                          >
                            Podcast Ini Lho ITS!
                          </Typography>
                          <NextImage
                            className='mb-4 block w-72 rounded-lg md:w-full md:max-w-lg lg:hidden lg:max-w-none'
                            src='/images/homePage/webseries-mobile.png'
                            layout='responsive'
                            objectFit='contain'
                            width='100%'
                            height='63%'
                            alt='Web Series ILITS'
                          />
                          <Typography
                            variant='p'
                            className='pt-1 md:w-full md:max-w-md md:text-center lg:max-w-none lg:pt-2 lg:text-left'
                          >
                            Bincang-bincang ringan, untuk mencapai harapan!
                            Podcast seru penuh insight dan manfaat ini, bakal
                            nemenin hari-hari kalian dengan berbagai topik mulai
                            dari tentang ITS, atur strategi untuk mencapai
                            impian, hingga dunia perkuliahan yang pasti kalian
                            pada penasaran! Pantengin terus di Youtube dan
                            Spotify Ini Lho ITS!
                          </Typography>
                          <ButtonLink
                            href='https://www.youtube.com/@INILHOITS'
                            variant='lightBlue'
                            className='mb-12 mt-6 font-semibold lg:mb-0 lg:mt-12'
                          >
                            Tonton Sekarang!
                          </ButtonLink>
                        </div>
                        <div className='relative hidden w-1/2 rounded-br-lg lg:block'>
                          <NextImage
                            imgClassName='rounded-br-lg'
                            src='/images/homePage/webseries1.png'
                            layout='fill'
                            width='100%'
                            alt='Web Series ILITS'
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='flex'>
                        <div
                          className={clsxm(
                            'flex w-full flex-col items-center p-6 lg:w-1/2',
                            'lg:items-start lg:rounded-br-none lg:border-r-0 lg:p-8 xl:p-10'
                          )}
                        >
                          <Typography
                            variant='h5'
                            className='pb-4 text-[24px] font-bold leading-[32px] lg:pb-2 lg:text-[32px] lg:leading-[48px]'
                          >
                            TWIT: Talkshow With ITS Team!
                          </Typography>
                          <NextImage
                            className='mb-4 block w-72 rounded-lg md:w-full md:max-w-lg lg:hidden lg:max-w-none'
                            src='/images/homePage/webseries-mobile.png'
                            layout='responsive'
                            objectFit='contain'
                            width='100%'
                            height='63%'
                            alt='Web Series ILITS'
                          />
                          <Typography
                            variant='p'
                            className='pt-1 md:w-full md:max-w-md md:text-center lg:max-w-none lg:pt-2 lg:text-left'
                          >
                            Sebuah talkshow untuk memperkenalkan tim-tim inovasi
                            di ITS, mulai dari Anargya, Antasena, Barunastra,
                            Ichiro, dan masih banyak lagi lhoo! Buat yang seneng
                            lomba-lomba, gaboleh ketinggalan nich!
                          </Typography>
                          <ButtonLink
                            href='https://www.youtube.com/@INILHOITS'
                            variant='lightBlue'
                            className='mb-12 mt-6 font-semibold lg:mb-0 lg:mt-12'
                          >
                            Tonton Sekarang!
                          </ButtonLink>
                        </div>
                        <div className='relative hidden w-1/2 rounded-br-lg lg:block'>
                          <NextImage
                            imgClassName='rounded-br-lg'
                            src='/images/homePage/webseries1.png'
                            layout='fill'
                            width='100%'
                            alt='Web Series ILITS'
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='flex'>
                        <div
                          className={clsxm(
                            'flex w-full flex-col items-center p-6 lg:w-1/2',
                            'lg:items-start lg:rounded-br-none lg:border-r-0 lg:p-8 xl:p-10'
                          )}
                        >
                          <Typography
                            variant='h5'
                            className='pb-4 text-[24px] font-bold leading-[32px] lg:pb-2 lg:text-[32px] lg:leading-[48px]'
                          >
                            CULTOUR: Faculty and Facility Tour
                          </Typography>
                          <NextImage
                            imgClassName=''
                            className='mb-4 block w-72 rounded-lg md:w-full md:max-w-lg lg:hidden lg:max-w-none'
                            src='/images/homePage/webseries-mobile.png'
                            layout='responsive'
                            objectFit='contain'
                            width='100%'
                            height='63%'
                            alt='Web Series ILITS'
                          />
                          <Typography
                            variant='p'
                            className='pt-1 md:w-full md:max-w-md md:text-center lg:max-w-none lg:pt-2 lg:text-left'
                          >
                            Langsung nih kita kasih vlog tour dari 7 fakultas
                            dari ITS beserta seluruh departemen yang
                            dinaunginya. Kalian bakal dimanjakan dengan insight
                            buat tempat-tempat menarik di masing-masing fakultas
                            lho!!
                          </Typography>
                          <ButtonLink
                            href='https://www.youtube.com/@INILHOITS'
                            variant='lightBlue'
                            className='mb-12 mt-6 font-semibold lg:mb-0 lg:mt-12'
                          >
                            Tonton Sekarang!
                          </ButtonLink>
                        </div>
                        <div className='relative hidden w-1/2 rounded-br-lg lg:block'>
                          <NextImage
                            imgClassName='rounded-br-lg'
                            src='/images/homePage/webseries1.png'
                            layout='fill'
                            width='100%'
                            alt='Web Series ILITS'
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='flex'>
                        <div
                          className={clsxm(
                            'flex w-full flex-col items-center p-6 lg:w-1/2',
                            'lg:items-start lg:rounded-br-none lg:border-r-0 lg:p-8 xl:p-10'
                          )}
                        >
                          <Typography
                            variant='h5'
                            className='pb-4 text-[24px] font-bold leading-[32px] lg:pb-2 lg:text-[32px] lg:leading-[48px]'
                          >
                            ILEVEN: ILITS Event
                          </Typography>
                          <NextImage
                            className='mb-4 block w-72 rounded-lg md:w-full md:max-w-lg lg:hidden lg:max-w-none'
                            src='/images/homePage/webseries-mobile.png'
                            layout='responsive'
                            objectFit='contain'
                            width='100%'
                            height='63%'
                            alt='Web Series ILITS'
                          />
                          <Typography
                            variant='p'
                            className='pt-1 md:w-full md:max-w-md md:text-center lg:max-w-none lg:pt-2 lg:pb-[4.5rem] lg:text-left'
                          >
                            Nahh, untuk yang ini, buat yang gak mau ketinggalan
                            kemeriahan dan perjalanan ILITS! Bakal kita kasih
                            nih recap vlog dari big event INI LHO ITS! 2023.
                          </Typography>
                          <ButtonLink
                            href='https://www.youtube.com/@INILHOITS'
                            variant='lightBlue'
                            className='mb-12 mt-6 font-semibold lg:mb-0 lg:mt-12'
                          >
                            Tonton Sekarang!
                          </ButtonLink>
                        </div>
                        <div className='relative hidden w-1/2 rounded-br-lg lg:block'>
                          <NextImage
                            imgClassName='rounded-br-lg'
                            src='/images/homePage/webseries1.png'
                            layout='fill'
                            width='100%'
                            height='100%'
                            alt='Web Series ILITS'
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='flex'>
                        <div
                          className={clsxm(
                            'flex w-full flex-col items-center p-6 lg:w-1/2',
                            'lg:items-start lg:rounded-br-none lg:border-r-0 lg:p-8 xl:p-10'
                          )}
                        >
                          <Typography
                            variant='h5'
                            className='pb-4 text-[24px] font-bold leading-[32px] lg:pb-2 lg:text-[32px] lg:leading-[48px]'
                          >
                            Short Movie ILITS
                          </Typography>
                          <NextImage
                            className='mb-4 block w-72 rounded-lg md:w-full md:max-w-lg lg:hidden lg:max-w-none'
                            src='/images/homePage/webseries-mobile.png'
                            layout='responsive'
                            objectFit='contain'
                            width='100%'
                            height='63%'
                            alt='Web Series ILITS'
                          />
                          <Typography
                            variant='p'
                            className='pt-1 md:w-full md:max-w-md md:text-center lg:max-w-none lg:pt-2 lg:pb-[3rem] lg:text-left'
                          >
                            Short Movie yang tiap tahunnya selalu memberikan
                            nuansa menyegarkan bagi Ini Lho ITS! Bagi yang
                            penasaran tahun ini bakal menceritakan tentang apa,
                            pantengin dulu dong teasernya di Instagram dan
                            Youtube Ini Lho ITS!
                          </Typography>
                          <ButtonLink
                            href='https://www.youtube.com/@INILHOITS'
                            variant='lightBlue'
                            className='mb-12 mt-6 font-semibold lg:mb-0 lg:mt-12'
                          >
                            Tonton Sekarang!
                          </ButtonLink>
                        </div>
                        <div className='relative hidden w-1/2 rounded-br-lg lg:block'>
                          <NextImage
                            imgClassName='rounded-br-lg'
                            src='/images/homePage/webseries1.png'
                            layout='fill'
                            width='100%'
                            alt='Web Series ILITS'
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>

            {/* Ada apa di INI LHO ITS 2023? */}
            <div className='relative w-full'>
              <NextImage
                className='absolute top-32 -right-4 w-12 md:w-24 lg:w-28 xl:w-32'
                src='/images/homePage/star5.png'
                layout='responsive'
                objectFit='contain'
                width='100%'
                height='100%'
                alt='Virtual Tour'
              />
              <NextImage
                className='absolute top-28 left-0 w-[21%]'
                src='/images/homePage/awan6.png'
                layout='responsive'
                objectFit='contain'
                width='100%'
                height='50%'
                alt='Virtual Tour'
              />
              <NextImage
                className='absolute -bottom-24 right-0 w-[10%]'
                src='/images/homePage/awan7.png'
                layout='responsive'
                objectFit='contain'
                width='100%'
                height='100%'
                alt='Virtual Tour'
              />

              <Typography
                variant='h4'
                className={clsxm(
                  'mt-24 mb-10 px-10 text-center text-[32px] font-bold leading-[48px]',
                  'tracking-tight md:mt-44 md:px-0 md:tracking-normal lg:mb-16 lg:text-[48px] lg:leading-[64px]'
                )}
              >
                Ada apa di <br className='block md:hidden' />
                INI LHO ITS 2023?
              </Typography>
              <div className='mx-4 mb-8 max-w-6xl md:mx-16 1xl:mx-auto'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 xl:gap-8'>
                  {openCampus.map(({ title, paragraph }, index) => (
                    <Card key={index} title={title} content={paragraph} />
                  ))}
                </div>
              </div>
            </div>

            {/* Pendaftaran Try Out ILITS! 2023 */}
            <div
              className={clsxm(
                'relative z-[50] mx-4 w-fit translate-y-1/4 rounded-xl',
                'border-2 border-black bg-primary-main md:mx-16 md:translate-y-1/2 xl:mx-auto'
              )}
            >
              <NextImage
                className='absolute top-0 left-0 z-[15] hidden w-16 -translate-y-1/2 -translate-x-1/2 md:block lg:w-24 xl:w-32'
                src='/images/homePage/star6.png'
                layout='responsive'
                objectFit='contain'
                width='100%'
                height='100%'
                alt='Virtual Tour'
              />
              <div
                className={clsxm(
                  'md:pt-auto relative z-10 mx-auto flex max-w-7xl flex-col justify-around',
                  'gap-20 overflow-hidden rounded-xl bg-primary-main px-12 py-20 pt-12',
                  'text-center md:flex-row md:py-6 md:px-8 md:text-left lg:px-12 lg:py-10'
                )}
              >
                <NextImage
                  className='absolute top-0 -right-4 z-[15] hidden w-[21rem] md:block'
                  src='/images/homePage/rainbow.png'
                  layout='responsive'
                  objectFit='contain'
                  width='80%'
                  height='50%'
                  alt='Virtual Tour'
                />
                <NextImage
                  className='absolute left-0 bottom-0 block w-full md:hidden'
                  src='/images/homePage/rainbow-mobile.png'
                  layout='responsive'
                  objectFit='contain'
                  width='100%'
                  height='50%'
                  alt='Virtual Tour'
                />

                <Typography
                  variant='h4'
                  className={clsxm(
                    'stroke-md lg:stroke max-w-3xl text-[24px] font-bold leading-[32px]',
                    'text-white lg:text-[32px] lg:leading-[48px] xl:text-[48px] xl:leading-[64px]'
                  )}
                >
                  Pendaftaran Try Out ILITS! 2023{' '}
                  <br className='block md:hidden' />
                  Sudah Dibuka!
                </Typography>
                <div className='self-center px-2'>
                  <ButtonLink
                    href='/coming-soon'
                    variant='bone'
                    size='medium'
                    round='medium'
                    className='relative z-[20] m-auto hidden bg-bone-50 font-semibold lg:block'
                  >
                    Daftar Sekarang!
                  </ButtonLink>
                  <ButtonLink
                    href='/coming-soon'
                    variant='bone'
                    size='small'
                    round='medium'
                    className='relative z-[20] m-auto block bg-bone-50 lg:hidden'
                  >
                    Daftar Sekarang!
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          {/* Prestasi */}
          <div
            className={clsxm(
              'relative flex flex-col gap-6 bg-dark px-4 pt-36 pb-20 md:flex-col-reverse',
              ' md:px-16 md:pb-36 lg:pt-64 xl:flex-row xl:px-20 xl:pb-44 xl:pt-72'
            )}
          >
            <NextImage
              className='absolute top-28 left-8 z-[15] hidden w-16 md:block lg:top-44 lg:w-20 xl:top-52 xl:w-24'
              src='/images/homePage/eye2.png'
              layout='responsive'
              objectFit='contain'
              width='100%'
              height='100%'
              alt='Virtual Tour'
            />
            <NextImage
              className='absolute bottom-0 right-0 z-[15] hidden w-12 md:block lg:w-16 xl:w-20'
              src='/images/homePage/eye3.png'
              layout='responsive'
              objectFit='contain'
              width='80%'
              height='100%'
              alt='Virtual Tour'
            />

            <div className='w-full xl:w-96 xl:max-w-xs '>
              <Typography
                variant='h4'
                className='block text-[28px] font-bold leading-[34px] text-white md:hidden xl:block xl:text-[48px] xl:leading-[64px]'
              >
                Segudang Prestasi
              </Typography>
              <Typography className='pt-3 text-[16px] leading-[24px] text-white md:pt-1 lg:pt-5 xl:text-[18px] xl:leading-[24px]'>
                Mahasiswa ITS juga Sering sekali lho mendapatkan dan meraih
                prestasi di tingkat nasional hingga internasional. prestasi
                tersebut bisa mereka dapatkan dengan usaha dan kerja keras yang
                mereka lakukan sehingga bisa meraih prestasi tersebut. penasaran
                ? simak informasi selengkapnya berikut ini !
              </Typography>
            </div>
            <div>
              <Typography
                variant='h4'
                className={clsxm(
                  'hidden pb-4 text-center text-[28px] font-bold leading-[34px]',
                  'text-white md:block lg:block xl:hidden xl:text-[32px] xl:leading-[48px]'
                )}
              >
                Segudang Prestasi
              </Typography>
              <div className='mx-auto grid grid-cols-1 gap-2 md:grid-cols-3 xl:gap-4'>
                {cardPrestasi.map(({ src, alt, label }, index) => (
                  <div
                    key={index}
                    className={clsxm(
                      'flex h-[35vw] flex-row overflow-hidden rounded-lg',
                      'border-2 border-black md:flex-col lg:h-[32vw] xl:rounded-xl'
                    )}
                  >
                    <div className='relative h-auto w-2/3 md:h-4/5 md:w-full'>
                      <NextImage
                        src={src}
                        width='100%'
                        height='100%'
                        layout='fill'
                        alt={alt}
                        objectFit='cover'
                      />
                    </div>
                    <div
                      className={clsxm(
                        'flex h-auto max-w-[200px] justify-center border-l-2 border-t-0 border-black md:max-w-none lg:max-h-[40%]',
                        'bg-white md:h-fit md:border-l-0 md:border-t-2 lg:h-fit xl:h-1/5'
                      )}
                    >
                      <Typography
                        variant='title'
                        className='self-center py-2 px-4 text-[16px] font-semibold leading-[22px] lg:text-[20px] xl:py-0 xl:leading-[24px]'
                      >
                        {label}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fakultas */}
          <div className='border-b-2 border-black bg-yellow-300'>
            <Typography
              variant='h4'
              className={clsxm(
                'stroke-md lg:stroke p-4 text-center text-[24px] font-bold',
                'leading-[32px] text-white md:text-[32px] md:leading-[48px]',
                'lg:p-8 lg:text-[48px] lg:leading-[64px] 1xl:p-10'
              )}
            >
              Kenali Fakultas Impianmu !
            </Typography>
          </div>
          <div className='bg-background-cream py-4 md:py-14'>
            <div className='mx-4 grid max-w-6xl grid-cols-12 grid-rows-2 items-stretch gap-2 md:mx-12 xl:mx-auto xl:gap-6'>
              <div
                onClick={() => setID(1)}
                className={clsxm(
                  `${
                    id === 1 && 'bg-red-300'
                  } col-span-6 flex items-center border-2`,
                  `justify-center rounded-lg border-black bg-white py-1 px-3 text-center`,
                  `cursor-pointer hover:bg-red-300 md:py-2 md:px-6 lg:col-span-4 lg:py-1 lg:px-8 xl:py-2 xl:px-10`
                )}
              >
                <Typography
                  variant='paragraph'
                  className='text-[12px] font-semibold leading-[16px] md:text-[18px] md:leading-[24px]'
                >
                  Teknologi Industri dan Rekayasa Sistem
                </Typography>
              </div>
              <div
                onClick={() => setID(2)}
                className={clsxm(
                  `${
                    id === 2 && 'bg-red-300'
                  } col-span-6  flex items-center justify-center rounded-lg border-2`,
                  `border-black bg-white py-1 px-3 text-center hover:bg-red-300`,
                  `cursor-pointer md:py-2 md:px-6 lg:col-span-4 lg:py-1 lg:px-8 xl:py-2 xl:px-10`
                )}
              >
                <Typography
                  variant='paragraph'
                  className='text-[12px] font-semibold leading-[16px] md:text-[18px] md:leading-[24px]'
                >
                  Teknik Sipil, Perencanaan dan Kebumian
                </Typography>
              </div>
              <div
                onClick={() => setID(3)}
                className={clsxm(
                  `${
                    id === 3 && 'bg-red-300'
                  } col-span-6 flex items-center justify-center rounded-lg border-2`,
                  `border-black bg-white py-1 px-3 text-center hover:bg-red-300`,
                  `cursor-pointer md:py-2 md:px-6 lg:col-span-4 lg:py-1 lg:px-8 xl:py-2 xl:px-10`
                )}
              >
                <Typography
                  variant='paragraph'
                  className='text-[12px] font-semibold leading-[16px] md:text-[18px] md:leading-[24px]'
                >
                  Teknik Elektro dan Informatika Cerdas
                </Typography>
              </div>
              <div
                onClick={() => setID(4)}
                className={clsxm(
                  `${
                    id === 4 && 'bg-red-300'
                  } col-span-6 flex items-center justify-center rounded-lg border-2 border-black`,
                  `cursor-pointer bg-white py-1 px-3 text-center hover:bg-red-300 md:py-2 md:px-6 lg:col-span-3 lg:py-1 lg:px-8 xl:py-2 xl:px-10`
                )}
              >
                <Typography
                  variant='paragraph'
                  className='text-[12px] font-semibold leading-[16px] md:text-[18px] md:leading-[24px]'
                >
                  Sains dan Analitika Data
                </Typography>
              </div>
              <div
                onClick={() => setID(5)}
                className={clsxm(
                  `${
                    id === 5 && 'bg-red-300'
                  } order-last col-span-12 flex items-center justify-center`,
                  `rounded-lg border-2 border-black bg-white py-3 px-6 text-center`,
                  `cursor-pointer hover:bg-red-300 md:py-5 lg:col-span-3 lg:py-1 lg:px-8 xl:py-2 xl:px-10`
                )}
              >
                <Typography
                  variant='paragraph'
                  className='max-w-xl text-[12px] font-semibold leading-[16px] md:text-[18px] md:leading-[24px]'
                >
                  Desain Kreatif dan Bisnis Digital
                </Typography>
              </div>
              <div
                onClick={() => setID(6)}
                className={clsxm(
                  `${
                    id === 6 && 'bg-red-300'
                  } col-span-6 flex items-center justify-center rounded-lg`,
                  `border-2 border-black bg-white py-3 px-6 text-center`,
                  `cursor-pointer hover:bg-red-300 md:py-5 lg:col-span-3 lg:py-1 lg:px-8 xl:py-2 xl:px-10`
                )}
              >
                <Typography
                  variant='paragraph'
                  className='text-[12px] font-semibold leading-[16px] md:text-[18px] md:leading-[24px]'
                >
                  Teknologi Kelautan
                </Typography>
              </div>
              <div
                onClick={() => setID(7)}
                className={clsxm(
                  `${
                    id === 7 && 'bg-red-300'
                  } col-span-6 flex items-center justify-center rounded-lg border-2 border-black`,
                  `cursor-pointer bg-white py-3 px-6 text-center hover:bg-red-300 md:py-5 lg:col-span-3 lg:py-1 lg:px-8 xl:py-2 xl:px-10`
                )}
              >
                <Typography
                  variant='paragraph'
                  className='text-[12px] font-semibold leading-[16px] md:text-[18px] md:leading-[24px]'
                >
                  Vokasi
                </Typography>
              </div>
            </div>
            <div
              className={clsxm(
                'mx-4 mt-6 flex max-w-6xl flex-col overflow-hidden',
                'rounded-xl border-2 border-black bg-white md:mx-12 md:flex-row xl:mx-auto'
              )}
            >
              {fakultas
                .filter((item) => item.id === id)
                .map((item, index) => {
                  return (
                    <>
                      <div
                        className='relative w-full md:w-[45%] lg:w-5/12'
                        key={index}
                      >
                        <NextImage
                          className='hidden md:block'
                          src={item.src}
                          alt='Fakultas Impianmu'
                          width={widthW <= 768 ? '79%' : '90%'}
                          layout='responsive'
                          height='100%'
                          objectFit='cover'
                        />
                        <NextImage
                          className='block md:hidden'
                          src={item.src}
                          alt='Fakultas Impianmu'
                          width='100%'
                          layout='responsive'
                          height='60%'
                          objectFit='cover'
                        />
                      </div>
                      <div
                        className={clsxm(
                          'flex w-full flex-col space-y-4 border-l-0 border-black',
                          'p-4 md:w-[55%] md:border-l-2 lg:w-7/12 lg:space-y-8 lg:p-6'
                        )}
                      >
                        <Typography
                          variant='h4'
                          className={clsxm(
                            'pb-0 text-[24px] font-bold leading-[32px] lg:pb-0 lg:text-[32px]',
                            'lg:leading-[48px] xl:text-[48px] xl:leading-[64px]'
                          )}
                        >
                          {item.nama}
                        </Typography>
                        <Typography variant='p'>{item.desc}</Typography>
                        <div
                          className={`${
                            id == 5 ? 'lg:pb-0' : 'lg:pb-6'
                          } pt-2 pb-0 text-center md:text-left lg:pt-0 xl:pb-10`}
                        >
                          <ButtonLink
                            className='hidden font-semibold lg:inline-block'
                            href='/coming-soon'
                            variant='yellow'
                            size='medium'
                            round='medium'
                          >
                            Lihat Fakultas
                          </ButtonLink>
                          <ButtonLink
                            className='inline-block lg:hidden'
                            href='/coming-soon'
                            variant='yellow'
                            size='small'
                            round='medium'
                          >
                            Lihat Fakultas
                          </ButtonLink>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
          <div className='home'>
            <div
              className={clsxm(
                'stroke-md xl:stroke relative z-[10] block border-t-2 border-black',
                'bg-red-400 px-6 py-1 text-center md:hidden lg:rounded-r-2xl xl:py-2 xl:px-8'
              )}
            >
              <Typography
                variant='h4'
                className={clsxm(
                  'pb-2 text-[24px] font-bold leading-[32px] text-white',
                  'lg:text-[32px] lg:leading-[40px] xl:text-[48px] xl:leading-[64px]'
                )}
              >
                Fasilitas Untuk Semua
              </Typography>
            </div>

            <Swiper
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay, Navigation]}
              className='mySwiper fasilitas flex min-h-[35rem] md:min-h-0'
              slidesPerView={1}
            >
              <SwiperSlide className='h-full'>
                <div className='max-w-8xl mx-auto flex h-full flex-1 flex-col border-y-2 border-black bg-yellow-300 md:flex-row'>
                  <div className='w-full md:w-1/2 lg:w-2/6'>
                    <NextImage
                      className='hidden md:block'
                      src='/images/homePage/fasilitas1.png'
                      width={widthW <= 768 ? '81%' : '100%'}
                      height='100%'
                      layout='responsive'
                      objectFit='cover'
                      alt='fasilitas1'
                    />
                    <NextImage
                      className='block md:hidden'
                      src='/images/homePage/fasilitas1-mobile.png'
                      width='100%'
                      height='50%'
                      layout='responsive'
                      objectFit='cover'
                      alt='fasilitas1'
                    />
                  </div>
                  <div className='relative w-full border-l-2 border-black py-4 pb-28 md:w-4/6 md:pb-0 lg:py-8 xl:py-12'>
                    <NextImage
                      className='absolute left-44 top-0 z-[1] hidden w-[60%] md:block'
                      src='/images/homePage/line2.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='30%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-0 top-0 z-[1] block w-56 md:hidden'
                      src='/images/homePage/line-fas-mobile.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='37%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute bottom-0 left-0 z-[1] block w-full md:hidden'
                      src='/images/homePage/line34.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='89%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-0 top-16 z-[1] hidden w-12 md:block lg:w-16 xl:w-20'
                      src='/images/homePage/eye4.png'
                      layout='responsive'
                      objectFit='contain'
                      width='60%'
                      height='100%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute bottom-0 left-0 block w-16 md:hidden'
                      src='/images/homePage/eye-fas-mob.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='100%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-0 bottom-0 z-[1] hidden w-52 md:block lg:w-72'
                      src='/images/homePage/line3.png'
                      layout='responsive'
                      objectFit='contain'
                      width='90%'
                      height='30%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-4 bottom-0 z-[1] w-20 md:right-16 lg:w-28 xl:w-36'
                      src='/images/homePage/arrow3.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='80%'
                      alt='Virtual Tour'
                    />

                    <div
                      className={clsxm(
                        'stroke-md xl:stroke relative z-[10] hidden rounded-r-xl border-y-2',
                        'border-r-2 border-black bg-red-400 px-6 py-1 md:inline-flex lg:rounded-r-2xl xl:py-2 xl:px-8'
                      )}
                    >
                      <Typography
                        variant='h4'
                        className='pb-2 text-[24px] font-bold leading-[32px] text-white lg:text-[32px] lg:leading-[40px] xl:text-[48px] xl:leading-[64px]'
                      >
                        Fasilitas Untuk Semua
                      </Typography>
                    </div>
                    <div className='relative z-[20] mt-0 px-4 md:mt-4 md:px-8'>
                      <Typography variant='h5' className='font-bold'>
                        ITS Training Center
                      </Typography>
                      <Typography
                        variant='p'
                        className='max-w-4xl pt-3 pb-[3.2rem] md:pb-6 xl:pt-4 xl:pb-10'
                      >
                        Menyelenggarakan pelatihan profesi dan jasa sertifikasi
                        bagi mahasiswa dan tenaga profesional dalam rangka
                        peningkatan kompetensi dalam bidang profesi tertentu.
                      </Typography>
                      <ButtonLink
                        href='/coming-soon'
                        variant='bone'
                        className='px-auto relative z-[10] flex w-full justify-center bg-white font-semibold md:w-fit'
                      >
                        Kenali Lebih Lanjut!
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='h-full'>
                <div className='max-w-8xl mx-auto flex h-full flex-1 flex-col border-y-2 border-black bg-yellow-300 md:flex-row'>
                  <div className='w-full md:w-1/2 lg:w-2/6'>
                    <NextImage
                      className='hidden md:block'
                      src='/images/homePage/fasilitas2.png'
                      width={widthW <= 768 ? '81%' : '99%'}
                      height='100%'
                      layout='responsive'
                      objectFit='cover'
                      alt='fasilitas2'
                    />
                    <NextImage
                      className='block md:hidden'
                      src='/images/homePage/fasilitas2-mobile.png'
                      width='100%'
                      height='50%'
                      layout='responsive'
                      objectFit='cover'
                      alt='fasilitas2'
                    />
                  </div>
                  <div className='relative w-full border-l-2 border-black py-4 pb-28 md:w-4/6 md:pb-0 lg:py-8 xl:py-12'>
                    <NextImage
                      className='absolute left-44 top-0 z-[1] hidden w-[60%] md:block'
                      src='/images/homePage/line2.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='30%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-0 top-0 z-[1] block w-56 md:hidden'
                      src='/images/homePage/line-fas-mobile.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='37%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute bottom-0 left-0 z-[1] block w-full md:hidden'
                      src='/images/homePage/line34.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='89%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-0 top-16 z-[1] hidden w-12 md:block lg:w-16 xl:w-20'
                      src='/images/homePage/eye4.png'
                      layout='responsive'
                      objectFit='contain'
                      width='60%'
                      height='100%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute bottom-0 left-0 block w-16 md:hidden'
                      src='/images/homePage/eye-fas-mob.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='100%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-0 bottom-0 z-[1] hidden w-52 md:block lg:w-72'
                      src='/images/homePage/line3.png'
                      layout='responsive'
                      objectFit='contain'
                      width='90%'
                      height='30%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-4 bottom-0 z-[1] w-20 md:right-16 lg:w-28 xl:w-36'
                      src='/images/homePage/arrow3.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='80%'
                      alt='Virtual Tour'
                    />

                    <div
                      className={clsxm(
                        'stroke-md xl:stroke relative z-[10] hidden rounded-r-xl border-y-2 border-r-2',
                        'border-black bg-red-400 px-6 py-1 md:inline-flex  lg:rounded-r-2xl xl:py-2 xl:px-8'
                      )}
                    >
                      <Typography
                        variant='h4'
                        className='pb-2 text-[24px] font-bold leading-[32px] text-white lg:text-[32px] lg:leading-[40px] xl:text-[48px] xl:leading-[64px]'
                      >
                        Fasilitas Untuk Semua
                      </Typography>
                    </div>
                    <div className='relative z-[20] mt-0 px-4 md:mt-4 md:px-8'>
                      <Typography variant='h5' className='font-bold'>
                        Graha ITS
                      </Typography>
                      <Typography
                        variant='p'
                        className='max-w-4xl pt-3 pb-[1.99rem] md:pb-6 xl:pt-4 xl:pb-10'
                      >
                        Digunakan untuk berbagai keperluan, seperti Wisuda
                        mahasiswa ITS, seminar, pentas musik, temu alumni,
                        pertemuan Dharma Wanita, pengukuhan guru besar,
                        pendaftaran mahasiswa baru, pesta pernikahan, tes kerja,
                        dan masih banyak lagi.
                      </Typography>
                      <ButtonLink
                        href='/coming-soon'
                        variant='bone'
                        className='px-auto relative z-[10] flex w-full justify-center bg-white font-semibold md:w-fit'
                      >
                        Kenali Lebih Lanjut!
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='h-full'>
                <div className='max-w-8xl mx-auto flex h-full flex-1 flex-col border-y-2 border-black bg-yellow-300 md:flex-row'>
                  <div className='w-full md:w-1/2 lg:w-2/6'>
                    <NextImage
                      className='hidden md:block'
                      src='/images/homePage/fasilitas3.png'
                      width={widthW <= 768 ? '81%' : '100%'}
                      height='100%'
                      layout='responsive'
                      objectFit='cover'
                      alt='fasilitas3'
                    />
                    <NextImage
                      className='block md:hidden'
                      src='/images/homePage/fasilitas3-mobile.png'
                      width='100%'
                      height='50%'
                      layout='responsive'
                      objectFit='cover'
                      alt='fasilitas3'
                    />
                  </div>
                  <div className='relative w-full border-l-2 border-black py-4 pb-28 md:w-4/6 md:pb-0 lg:py-8 xl:py-12'>
                    <NextImage
                      className='absolute left-44 top-0 z-[1] hidden w-[60%] md:block'
                      src='/images/homePage/line2.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='30%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-0 top-0 z-[1] block w-56 md:hidden'
                      src='/images/homePage/line-fas-mobile.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='37%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute bottom-0 left-0 z-[1] block w-full md:hidden'
                      src='/images/homePage/line34.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='89%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-0 top-16 z-[1] hidden w-12 md:block lg:w-16 xl:w-20'
                      src='/images/homePage/eye4.png'
                      layout='responsive'
                      objectFit='contain'
                      width='60%'
                      height='100%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute bottom-0 left-0 block w-16 md:hidden'
                      src='/images/homePage/eye-fas-mob.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='100%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-0 bottom-0 z-[1] hidden w-52 md:block lg:w-72'
                      src='/images/homePage/line3.png'
                      layout='responsive'
                      objectFit='contain'
                      width='90%'
                      height='30%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-4 bottom-0 z-[1] w-20 md:right-16 lg:w-28 xl:w-36'
                      src='/images/homePage/arrow3.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='80%'
                      alt='Virtual Tour'
                    />

                    <div
                      className={clsxm(
                        'stroke-md xl:stroke relative z-[10] hidden rounded-r-xl border-y-2',
                        'border-r-2 border-black bg-red-400 px-6 py-1 md:inline-flex  lg:rounded-r-2xl xl:py-2 xl:px-8'
                      )}
                    >
                      <Typography
                        variant='h4'
                        className='pb-2 text-[24px] font-bold leading-[32px] text-white lg:text-[32px] lg:leading-[40px] xl:text-[48px] xl:leading-[64px]'
                      >
                        Fasilitas Untuk Semua
                      </Typography>
                    </div>
                    <div className='relative z-[20] mt-0 px-4 md:mt-4 md:px-8'>
                      <Typography variant='h5' className='font-bold'>
                        Creative Co-Working Space
                      </Typography>
                      <Typography
                        variant='p'
                        className='max-w-4xl pt-3 pb-6 xl:pt-4 xl:pb-10'
                      >
                        Sebuah pusat pembelajaran yang sengaja dirancang dengan
                        suasana kafe, agar belajar terasa lebih menyenangkan.
                      </Typography>
                      <ButtonLink
                        href='/coming-soon'
                        variant='bone'
                        className='px-auto relative z-[10] flex w-full justify-center bg-white font-semibold md:w-fit'
                      >
                        Kenali Lebih Lanjut!
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Beasiswa */}
          <div className='relative flex flex-col overflow-hidden'>
            <NextImage
              className='absolute left-0 top-2 z-0 w-full'
              src='/images/homePage/line4.png'
              layout='responsive'
              objectFit='contain'
              width='100%'
              height='53%'
              alt='Virtual Tour'
            />
            <NextImage
              className='absolute right-0 top-10 z-0 w-96 lg:top-0'
              src='/images/homePage/line5.png'
              layout='responsive'
              objectFit='cover'
              width='100%'
              height='100%'
              alt='Virtual Tour'
            />
            <NextImage
              className='absolute -left-2 top-10 z-[99] w-16 md:left-12 md:top-32 md:w-24 lg:top-32 lg:w-32 1xl:left-20 1xl:top-24 1xl:w-36'
              src='/images/homePage/magnifier.png'
              layout='responsive'
              objectFit='contain'
              width='100%'
              height='100%'
              alt='Virtual Tour'
            />
            <NextImage
              className='absolute right-0 bottom-[3.5rem] z-[99] hidden w-16 md:block lg:w-20 xl:w-24'
              src='/images/homePage/star2.png'
              layout='responsive'
              objectFit='contain'
              width='75%'
              height='100%'
              alt='Virtual Tour'
            />
            <NextImage
              className='absolute bottom-16 right-0 z-[0] w-24 md:bottom-10 md:right-[12%] md:w-32 lg:right-[30%] xl:bottom-8 xl:w-36'
              src='/images/homePage/arrow4.png'
              layout='responsive'
              objectFit='contain'
              width='100%'
              height='100%'
              alt='Virtual Tour'
            />
            <Typography
              variant='h4'
              className={clsxm(
                'stroke-md md:stroke relative z-[10] p-8 text-center text-[32px]',
                'font-bold leading-[48px] text-white md:p-16 md:text-[48px] md:leading-[64px] lg:p-20'
              )}
            >
              Pilihan Beasiswa Untukmu!
            </Typography>
            <div className='relative'>
              <div className='absolute z-[0] h-full w-full border-y-2 border-black bg-red-300'></div>
              <div
                className={clsxm(
                  'md:px-auto z-30 mx-auto flex w-full -translate-x-0 rotate-0 flex-wrap',
                  'justify-center gap-2 overflow-x-hidden border-y-2 border-black bg-lightBlue-300',
                  'px-0 py-8 md:gap-3 lg:w-[101%] lg:-translate-x-2 lg:-rotate-2 lg:flex-row xl:gap-8'
                )}
              >
                {beasiswa.map(({ src, href, label }, index) => (
                  <UnstyledLink href={href} key={index}>
                    <div
                      className={clsxm(
                        'group h-full w-[43vw] max-w-[19rem] rounded-xl border-2 border-black',
                        'bg-white p-4 hover:bg-bone-400 md:w-64 md:p-6 lg:w-[30vh] xl:w-[33vh] xl:p-10 1xl:w-[40vh]'
                      )}
                    >
                      <div className='mx-auto h-fit w-24 grayscale group-hover:grayscale-0 lg:w-32 xl:w-44 1xl:w-48'>
                        <NextImage
                          src={src}
                          width='100%'
                          height='100%'
                          alt={label}
                          layout='responsive'
                          objectFit='cover'
                        />
                      </div>
                      <div className='flex h-fit items-center justify-center'>
                        <Typography
                          variant='p'
                          className='mt-1 text-center font-semibold'
                        >
                          {label}
                        </Typography>
                      </div>
                    </div>
                  </UnstyledLink>
                ))}
              </div>
            </div>
            <div className='flex justify-center'>
              <ButtonLink
                href='/beasiswa'
                size='medium'
                variant='orange'
                className='relative z-[30] mt-20 justify-center bg-orange-500 font-semibold'
              >
                Lihat Beasiswa Lainnya!
              </ButtonLink>
            </div>
          </div>
          <div className='home'>
            <div
              className={clsxm(
                'stroke-md xl:stroke mt-16 block w-full border-t-2 border-black',
                'bg-lightBlue-400 py-1 px-6 text-center md:hidden xl:px-8 xl:py-2'
              )}
            >
              <Typography
                variant='h4'
                className={clsxm(
                  'pb-2 text-center text-[24px] font-bold leading-[32px] text-white',
                  'lg:text-[32px] lg:leading-[40px] xl:text-[48px] xl:leading-[64px]'
                )}
              >
                Kenalan dengan Tim ITS!
              </Typography>
            </div>
            <Swiper
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay, Navigation]}
              className='mySwiper tim'
              slidesPerView={1}
            >
              <SwiperSlide>
                <div
                  className={clsxm(
                    'max-w-8xl relative mx-auto mt-0 flex h-[21reem] flex-col-reverse',
                    'border-y-2 border-black bg-red-200 md:mt-20 md:flex-row'
                  )}
                >
                  <NextImage
                    className='absolute top-0 left-0 z-[8] w-full'
                    src='/images/homePage/line6.png'
                    layout='responsive'
                    objectFit='contain'
                    width='100%'
                    height='32%'
                    alt='Virtual Tour'
                  />
                  <div className='relative z-[10] w-full py-4 pb-28 md:w-[60%] md:pb-0 lg:w-4/6 lg:py-8 xl:py-12'>
                    <NextImage
                      className='absolute top-0 left-4 hidden w-24 md:block lg:w-32 xl:w-44'
                      src='/images/homePage/eye5.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='60%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute bottom-0 left-4 hidden w-24 md:block lg:w-32 xl:w-44'
                      src='/images/homePage/arrow5.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='60%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute bottom-0 left-0 block w-16 md:hidden'
                      src='/images/homePage/eye-fas-mob.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='100%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-4 bottom-0 z-[1] block w-20 md:hidden'
                      src='/images/homePage/arrow3.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='80%'
                      alt='Virtual Tour'
                    />
                    <div
                      className={clsxm(
                        'stroke-md xl:stroke ml-auto hidden w-fit rounded-l-2xl border-y-2 border-l-2',
                        'border-black bg-lightBlue-400 py-1 px-6 md:block xl:px-8 xl:py-2'
                      )}
                    >
                      <Typography
                        variant='h4'
                        className={clsxm(
                          'pb-2 text-end text-[24px] font-bold leading-[32px] text-white',
                          'lg:text-[32px] lg:leading-[40px] xl:text-[48px] xl:leading-[64px]'
                        )}
                      >
                        Kenalan dengan Tim ITS!
                      </Typography>
                    </div>
                    <div className='mt-0 flex flex-col items-stretch px-4 text-start md:mt-4 md:items-end md:px-8 md:text-end'>
                      <Typography variant='h6' className='font-bold'>
                        Tim Banyubramanta ITS
                      </Typography>
                      <Typography
                        variant='p'
                        className='ml-auto max-w-4xl pt-3 pb-6 xl:pt-4 xl:pb-10'
                      >
                        Banyubramanta ITS merupakan tim dengan cita-cita
                        cemerlang dan inovatif. Tim ini telah berjuang dan terus
                        bergerak maju sejak 2018. Selain penelitian dan
                        pengembangan, kegiatan utama tim ini adalah berkompetisi
                        dalam kompetisi yang kompetitif
                        <br />
                        <br />
                      </Typography>
                      <ButtonLink
                        href='/tim'
                        variant='bone'
                        className='px-auto relative z-[10] mx-0 flex justify-center bg-white font-semibold md:w-fit'
                      >
                        Kenali Lebih Lanjut!
                      </ButtonLink>
                    </div>
                  </div>
                  <div className='relative z-[10] w-full md:w-[40%] lg:w-2/6'>
                    <NextImage
                      className='hidden h-full w-full md:block'
                      src='/images/homePage/bayubramanta.png'
                      width={widthW <= 768 ? '79%' : '96%'}
                      height='100%'
                      layout='responsive'
                      objectFit='cover'
                      alt='Tim Its'
                    />
                    <NextImage
                      className='block h-full w-full md:hidden'
                      src='/images/homePage/bayubramanta-mobile.png'
                      width='100%'
                      height='50%'
                      layout='responsive'
                      objectFit='cover'
                      alt='Tim Its'
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={clsxm(
                    'max-w-8xl relative mx-auto mt-0 flex flex-col-reverse',
                    'border-y-2 border-black bg-red-200 md:mt-20 md:flex-row'
                  )}
                >
                  <NextImage
                    className='absolute top-0 left-0 z-[8] w-full'
                    src='/images/homePage/line6.png'
                    layout='responsive'
                    objectFit='contain'
                    width='100%'
                    height='32%'
                    alt='Virtual Tour'
                  />
                  <div className='relative z-[10] w-full py-4 pb-28 md:w-[60%] md:pb-0 lg:w-4/6 lg:py-8 xl:py-12'>
                    <NextImage
                      className='absolute top-0 left-4 hidden w-24 md:block lg:w-32 xl:w-44'
                      src='/images/homePage/eye5.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='60%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute bottom-0 left-4 hidden w-24 md:block lg:w-32 xl:w-44'
                      src='/images/homePage/arrow5.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='60%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute bottom-0 left-0 block w-16 md:hidden'
                      src='/images/homePage/eye-fas-mob.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='100%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-4 bottom-0 z-[1] block w-20 md:hidden'
                      src='/images/homePage/arrow3.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='80%'
                      alt='Virtual Tour'
                    />
                    <div
                      className={clsxm(
                        'stroke-md xl:stroke ml-auto hidden w-fit rounded-l-2xl border-y-2 border-l-2',
                        'border-black bg-lightBlue-400 py-1 px-6 md:block xl:px-8 xl:py-2'
                      )}
                    >
                      <Typography
                        variant='h4'
                        className={clsxm(
                          'pb-2 text-end text-[24px] font-bold leading-[32px] text-white',
                          'lg:text-[32px] lg:leading-[40px] xl:text-[48px] xl:leading-[64px]'
                        )}
                      >
                        Kenalan dengan Tim ITS!
                      </Typography>
                    </div>
                    <div className='mt-0 flex flex-col items-stretch px-4 text-start md:mt-4 md:items-end md:px-8 md:text-end'>
                      <Typography variant='h6' className='font-bold'>
                        Tim Ichiro ITS
                      </Typography>
                      <Typography
                        variant='p'
                        className='ml-auto max-w-4xl pt-3 pb-6 sm:pb-11 xl:pt-4 xl:pb-10'
                      >
                        Tim ICHIRO adalah Tim Robot Robosoccer Humanoid dari
                        Institut Teknologi Sepuluh Nopember (ITS). Tim ICHIRO
                        telah mengikuti kontes robot nasional sejak tahun 2010.
                        Hingga tahun ini, tim Ichiro aktif berpartisipasi dan
                        telah memenangkan banyak kontes robot, baik nasional
                        maupun internasional.
                      </Typography>
                      <ButtonLink
                        href='/tim'
                        variant='bone'
                        className='px-auto relative z-[10] mx-0 flex justify-center bg-white font-semibold md:w-fit'
                      >
                        Kenali Lebih Lanjut!
                      </ButtonLink>
                    </div>
                  </div>
                  <div className='relative z-[10] w-full md:w-[40%] lg:w-2/6'>
                    <NextImage
                      className='hidden h-full w-full md:block'
                      src='/images/homePage/ichiro.png'
                      width={widthW <= 768 ? '79%' : '96%'}
                      height='100%'
                      layout='responsive'
                      objectFit='cover'
                      alt='Tim Its'
                    />
                    <NextImage
                      className='block h-full w-full md:hidden'
                      src='/images/homePage/tim-mobile.png'
                      width='100%'
                      height='50%'
                      layout='responsive'
                      objectFit='cover'
                      alt='Tim Its'
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={clsxm(
                    'max-w-8xl relative mx-auto mt-0 flex flex-col-reverse',
                    'border-y-2 border-black bg-red-200 md:mt-20 md:flex-row'
                  )}
                >
                  <NextImage
                    className='absolute top-0 left-0 z-[8] w-full'
                    src='/images/homePage/line6.png'
                    layout='responsive'
                    objectFit='contain'
                    width='100%'
                    height='32%'
                    alt='Virtual Tour'
                  />
                  <div className='relative z-[10] w-full py-4 pb-28 md:w-[60%] md:pb-0 lg:w-4/6 lg:py-8 xl:py-12'>
                    <NextImage
                      className='absolute top-0 left-4 hidden w-24 md:block lg:w-32 xl:w-44'
                      src='/images/homePage/eye5.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='60%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute bottom-0 left-4 hidden w-24 md:block lg:w-32 xl:w-44'
                      src='/images/homePage/arrow5.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='60%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute bottom-0 left-0 block w-16 md:hidden'
                      src='/images/homePage/eye-fas-mob.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='100%'
                      alt='Virtual Tour'
                    />
                    <NextImage
                      className='absolute right-4 bottom-0 z-[1] block w-20 md:hidden'
                      src='/images/homePage/arrow3.png'
                      layout='responsive'
                      objectFit='contain'
                      width='100%'
                      height='80%'
                      alt='Virtual Tour'
                    />
                    <div
                      className={clsxm(
                        'stroke-md xl:stroke ml-auto hidden w-fit rounded-l-2xl border-y-2 border-l-2',
                        'border-black bg-lightBlue-400 py-1 px-6 md:block xl:px-8 xl:py-2'
                      )}
                    >
                      <Typography
                        variant='h4'
                        className={clsxm(
                          'pb-2 text-end text-[24px] font-bold leading-[32px] text-white',
                          'lg:text-[32px] lg:leading-[40px] xl:text-[48px] xl:leading-[64px]'
                        )}
                      >
                        Kenalan dengan Tim ITS!
                      </Typography>
                    </div>
                    <div className='mt-0 flex flex-col items-stretch px-4 text-start md:mt-4 md:items-end md:px-8 md:text-end'>
                      <Typography variant='h6' className='font-bold'>
                        Tim Abinara ITS
                      </Typography>
                      <Typography
                        variant='p'
                        className='ml-auto max-w-4xl pt-3 pb-[2.73rem] xl:pt-4 xl:pb-10'
                      >
                        Abinara adalah tim yang melakukan penelitian dan
                        kompetisi robot otonom berkaki dengan misi menyelamatkan
                        korban dan memadamkan api. Tim ini terdiri dari
                        mahasiswa Institut Teknologi Sepuluh Nopember.
                      </Typography>
                      <ButtonLink
                        href='/tim'
                        variant='bone'
                        className='px-auto relative z-[10] mx-0 flex justify-center bg-white font-semibold md:w-fit'
                      >
                        Kenali Lebih Lanjut!
                      </ButtonLink>
                    </div>
                  </div>
                  <div className='relative z-[10] w-full md:w-[40%] lg:w-2/6'>
                    <NextImage
                      className='hidden h-full w-full md:block'
                      src='/images/homePage/abinara.png'
                      width={widthW <= 768 ? '79%' : '96%'}
                      height='100%'
                      layout='responsive'
                      objectFit='cover'
                      alt='Tim Its'
                    />
                    <NextImage
                      className='block h-full w-full md:hidden'
                      src='/images/homePage/abinara-mobile.png'
                      width='100%'
                      height='50%'
                      layout='responsive'
                      objectFit='cover'
                      alt='Tim Its'
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className='relative bg-dark'>
            <NextImage
              className='absolute top-8 left-0 hidden w-12 md:block xl:w-16'
              src='/images/homePage/star7.png'
              layout='responsive'
              objectFit='contain'
              width='50%'
              height='100%'
              alt='Virtual Tour'
            />
            <NextImage
              className='absolute bottom-0 right-0 hidden w-20 md:block xl:w-24 1xl:w-28'
              src='/images/homePage/eye6.png'
              layout='responsive'
              objectFit='contain'
              width='95%'
              height='100%'
              alt='Virtual Tour'
            />
            <Typography
              variant='h4'
              className={clsxm(
                'md:stroke mx-4 pt-8 pb-8 text-center text-[32px] font-bold',
                'leading-[48px] text-white md:mx-auto md:pt-16 lg:text-[48px] lg:leading-[64px]'
              )}
            >
              Jadilah Penerus Mereka!
            </Typography>
            <div className='mx-1 flex flex-wrap justify-center gap-3 md:mx-16 lg:flex-nowrap xl:mx-auto xl:gap-5'>
              {alumni.map(({ name, job, src }, index) => (
                <div
                  key={index}
                  className='overflow-hidden rounded-xl border-2 border-black'
                >
                  <div className='w-[41vw] md:w-60 xl:w-[17rem] 1xl:w-80'>
                    <NextImage
                      src={src}
                      alt={name}
                      width='100%'
                      height='100%'
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
                  <div className='h-full rounded-b-xl border-t-2 border-black bg-white py-2 px-4 md:px-4 xl:py-4 xl:px-12'>
                    <Typography
                      variant='title'
                      className='text-center text-[16px] font-semibold leading-[24px] md:text-[20px] md:leading-[24px]'
                    >
                      {name}
                    </Typography>
                    <Typography className='mx-auto w-24 text-center sm:w-auto'>
                      {job}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex justify-center pt-8 pb-12 md:pb-20'>
              <ButtonLink
                href='/alumni'
                variant='bone'
                className='bg-white font-semibold'
              >
                Lihat Alumni Lainnya!
              </ButtonLink>
            </div>
          </div>
          <div>
            <div className='border-y-2 border-black bg-green-400'>
              <Typography
                variant='h4'
                className={clsxm(
                  'md:stroke stroke-sm py-6 text-center text-[24px] font-bold leading-[32px] text-white',
                  'md:py-4 md:text-[32px] md:leading-[48px] lg:py-6 lg:text-[48px] lg:leading-[64px] xl:py-8'
                )}
              >
                Sponsor dan Media Partner
              </Typography>
            </div>
            <div className='mx-auto flex max-w-md flex-wrap justify-center gap-x-6 px-4 py-6 md:max-w-lg lg:max-w-2xl xl:max-w-5xl xl:py-10'>
              {companyLogo.map(({ src }, index) => (
                <div key={index} className='w-24 md:w-36 lg:w-44 xl:w-60'>
                  <NextImage
                    src={src}
                    alt='Sponsor'
                    width='100%'
                    height='100%'
                    layout='responsive'
                    objectFit='contain'
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
