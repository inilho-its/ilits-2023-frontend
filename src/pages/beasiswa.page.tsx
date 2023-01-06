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

import {
  dataBeasiswaMitraITS,
  smolDataBeasiswaMitraITS,
} from '@/constant/beasiswaData';

type BeasiswaCardProps = {
  title: string;
  imgSrc: string;
  link: string;
};

const BeasiswaCard = ({ title, imgSrc, link }: BeasiswaCardProps) => {
  return (
    <>
      {/* Desktop Img Main */}
      <div className='relative inset-0 hidden h-52 w-full max-w-[1046px] sm:block'>
        <NextImage
          src={imgSrc}
          width='100%'
          height='20%'
          layout='responsive'
          objectFit='contain'
          alt='beasiswa-card'
        />
        <div className='absolute top-4 hidden h-16 w-full max-w-[372px] items-center justify-center rounded-r-3xl border-2 border-bone-1000 bg-white sm:flex'>
          <Typography
            variant='title'
            className='text-[20px] font-bold leading-[24px] text-black '
          >
            {title}
          </Typography>
        </div>
        <div className='absolute right-4 bottom-4 hidden lg:block '>
          <ButtonLink variant='yellow' size='medium' round='medium' href={link}>
            Lihat
          </ButtonLink>
        </div>
        <div className='absolute right-4 bottom-[4.8rem] hidden sm:block lg:hidden'>
          <ButtonLink variant='yellow' size='medium' round='medium' href={link}>
            Lihat
          </ButtonLink>
        </div>
      </div>

      {/* Mobile Img Main */}
      <div className='relative block w-full sm:hidden'>
        <NextImage
          src={imgSrc}
          width='100%'
          height='57%'
          layout='responsive'
          objectFit='contain'
          alt='beasiswa-card'
        />
        <div className='absolute top-6 flex h-16 w-full max-w-[158px] items-center justify-center rounded-r-xl border-2 border-bone-1000 bg-white sm:hidden'>
          <Typography
            variant='title'
            className='text-sm font-bold leading-[24px] text-black '
          >
            {title}
          </Typography>
        </div>
        <div className='absolute bottom-4 right-4 block sm:hidden '>
          <ButtonLink
            variant='yellow'
            size='medium'
            round='medium'
            href={link}
            className='text-[12px]'
          >
            Lihat
          </ButtonLink>
        </div>
      </div>
    </>
  );
};

export default function BeasiswaPage() {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    setReady(true);
  }, []);

  return (
    // <Layout>
    <Layout>
      <Seo templateTitle='Beasiswa' />
      <main className='bg-bone-500'>
        {/* Section 1 Start */}
        <section className='relative z-10'>
          {/* Img Area 1 Start*/}
          <div>
            {/* Desktop BG Img Area 1 */}
            <div className='absolute top-0 hidden w-32 md:block'>
              <NextImage
                src='/images/beasiswaPage/cloud-1.png'
                width='100%'
                height='50%'
                layout='responsive'
                objectFit='contain'
                alt='cloud-1'
              />
            </div>
            <div className='absolute -bottom-44 right-0 hidden w-72 md:block'>
              <NextImage
                src='/images/beasiswaPage/cloud-2.png'
                width='100%'
                height='50%'
                layout='responsive'
                objectFit='contain'
                alt='cloud-1'
              />
            </div>
            <div className='absolute hidden w-full  md:block lg:-top-72 xl:-top-24'>
              <NextImage
                src='/images/beasiswaPage/string-1.png'
                width='60%'
                height='40%'
                layout='responsive'
                objectFit='contain'
                alt='string-1'
              />
            </div>
            <div className='absolute right-0 hidden w-full md:block'>
              <NextImage
                src='/images/beasiswaPage/ribbon-1.png'
                width='100%'
                height='80%'
                layout='responsive'
                objectFit='contain'
                alt='ribbon1'
              />
            </div>
            {/* Mobile BG Img Area 1 */}
            <div className='absolute top-6 block w-32 md:hidden'>
              <NextImage
                src='/images/beasiswaPage/smolcloud-1.png'
                width='100%'
                height='40%'
                layout='responsive'
                objectFit='contain'
                alt='smolcloud-1'
              />
            </div>
            <div className='absolute block w-full md:hidden'>
              <NextImage
                src='/images/beasiswaPage/smolstring-1.png'
                width='100%'
                height='85%'
                layout='responsive'
                objectFit='contain'
                alt='smolstring-1'
              />
            </div>
            <div className='absolute top-52 right-0 block w-16 md:hidden'>
              <NextImage
                src='/images/beasiswaPage/smolcloud-2.png'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='contain'
                alt='smolcloud-2'
              />
            </div>
          </div>
          {/* Img Area 1 End*/}
          <div className='layout relative z-10 flex flex-col items-center md:flex-row md:items-start md:justify-between'>
            <div className='mt-40 text-center md:mt-56 md:text-left'>
              <Typography
                variant='h2'
                className='stroke-sm md:stroke text-5xl font-bold leading-none text-orange-200 md:text-[72px] md:leading-[90px]'
              >
                Beasiswa
              </Typography>
              <Typography
                variant='h6'
                className='mt-2 text-sm font-medium leading-none md:mt-0 md:text-[24px] md:font-semibold md:leading-[32px]'
              >
                Institut Teknologi Sepuluh Nopember
              </Typography>
              {/*Desktop ver */}
              <ButtonLink
                variant='yellow'
                round='medium'
                size='large'
                href='#section2'
                className='mt-8 hidden font-semibold md:inline-flex'
              >
                Kenali Lebih Lanjut!
              </ButtonLink>
              {/*Mobile ver */}
              <ButtonLink
                variant='yellow'
                round='medium'
                size='small'
                href='#section2'
                className='mx-auto mt-8 block w-max font-semibold md:hidden'
              >
                Kenali Lebih Lanjut!
              </ButtonLink>
            </div>
            <div className='mt-0 md:mt-20'>
              <div className='hidden md:block md:w-96 lg:w-[434px]'>
                <NextImage
                  src='/images/beasiswaPage/star-1.png'
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='contain'
                  alt='star-1'
                />
              </div>
              <div className='ml-28 block w-52 md:hidden'>
                <NextImage
                  src='/images/beasiswaPage/smolstar-1.png'
                  width='80%'
                  height='100%'
                  layout='responsive'
                  objectFit='contain'
                  alt='smolstar-1'
                />
              </div>
            </div>
          </div>
        </section>
        {/* Section 1 End */}
        {/* Section 2 Start */}
        <section className='relative -mt-20 overflow-hidden md:pt-52'>
          {/* Img Area 2 Start */}
          <div>
            {/* Desktop BG Img Area 2 */}
            <div className='absolute top-72 -left-24 hidden w-96 md:block'>
              <NextImage
                src='/images/beasiswaPage/cloud-3.png'
                width='100%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                alt='cloud-3'
              />
            </div>
            <div className='absolute hidden w-full md:block '>
              <NextImage
                src='/images/beasiswaPage/ribbon-2.png'
                width='100%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                alt='ribbon-2'
              />
            </div>
            {/* Mobile BG Img Area 2 */}
            <div className='absolute bottom-0 block w-full md:hidden '>
              <NextImage
                src='/images/beasiswaPage/smolribbon-1.png'
                width='100%'
                height='110%'
                layout='responsive'
                objectFit='contain'
                alt='smolribbon-1'
              />
            </div>
          </div>
          {/* Img Area 2 End*/}
          <div
            className='relative z-10 flex flex-col items-center justify-center'
            id='section2'
          >
            <div className='relative z-20 flex h-36 w-screen items-center justify-center border-t-2 border-b-2 border-bone-1000 bg-red-500'>
              <div className='absolute -top-[3px] left-0 -z-10 w-[5.5rem] md:w-48'>
                <NextImage
                  src='/images/beasiswaPage/mic-1.png'
                  width='90%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='mic-1'
                />
              </div>
              <div className='absolute bottom-0 right-10 -z-10 w-[4.5rem] md:w-32'>
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
                className='stroke md:stroke px-11 text-center text-2xl font-bold leading-none text-white md:px-0 md:text-[48px]  md:leading-[64px]'
              >
                Ada Info Unik Nih Buat Kamu!
              </Typography>
            </div>
          </div>
          <div className='relative z-10 mx-auto mt-8 flex w-[95%] flex-col items-center justify-center md:mt-[137px]'>
            <div className='flex h-10 w-full max-w-[600px] items-center justify-end space-x-2 rounded-t-2xl border-2 border-bone-1000 bg-pink-500 px-2 lg:max-w-[1046px]'>
              <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-green-400'></div>
              <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-red-400'></div>
              <div className='h-[20px] w-[20px] rounded-full border-2 border-bone-1000 bg-yellow-400'></div>
            </div>
            <div className='mb-20 flex h-full max-h-[586px] w-full max-w-[600px] flex-col-reverse items-center rounded-b-2xl border-l-2 border-r-2 border-b-2 border-bone-1000 bg-white sm:max-h-[900px] lg:max-h-[463px] lg:max-w-[1046px] lg:flex-row'>
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
                  Jumlah dari lembaga yang menyediakan beasiswa di ITS ada 45
                  lembaga dengan skema sebanyak 55 macam dan total mahasiswa
                  yang telah mendapat beasiswa sebanyak 4.733 orang. Hal ini
                  menunjukkan bahwa peluang untuk mendapat beasiswa di ITS
                  sangat besar
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
                <div className='absolute -right-14 -bottom-10 z-20 hidden w-32 lg:block'>
                  <NextImage
                    src='/images/beasiswaPage/mic-2.png'
                    width='100%'
                    height='100%'
                    layout='responsive'
                    objectFit='contain'
                    alt='mic-2'
                  />
                </div>
                <Typography
                  variant='h5'
                  className='my-5 block text-2xl font-semibold text-bone-1000 sm:my-8 sm:text-[32px] sm:leading-none lg:my-0 lg:hidden lg:leading-[48px]'
                >
                  Info Unik Buat Kamu
                </Typography>
                {/* Desktop ver */}
                <div className='hidden w-full lg:block'>
                  <NextImage
                    src='/images/beasiswaPage/people-1.png'
                    width='100%'
                    height='88%'
                    layout='responsive'
                    objectFit='contain'
                    alt='people-1'
                    imgClassName='rounded-br-2xl'
                  />
                </div>
                <div className='hidden w-full sm:block lg:hidden'>
                  <NextImage
                    src='/images/beasiswaPage/people-1.png'
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
                    src='/images/beasiswaPage/smolpeople-1.png'
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
        </section>
        {/* Section 2 End */}
        {/* Section 3 Start */}
        <section className='relative overflow-hidden pt-4 sm:pt-24'>
          {/* Img Area 3 Start*/}
          <div>
            {/* Desktop BG Img Area 3 */}
            <div className='absolute -right-10 top-14 hidden w-72 md:block'>
              <NextImage
                src='/images/beasiswaPage/cloud-4.png'
                width='100%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                alt='cloud-4'
              />
            </div>
            <div className='absolute -bottom-5 -left-14 hidden w-64 md:block'>
              <NextImage
                src='/images/beasiswaPage/cloud-5.png'
                width='100%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                alt='cloud-5'
              />
            </div>
            <div className='absolute -top-28 hidden w-full md:block'>
              <NextImage
                src='/images/beasiswaPage/string-2.png'
                width='100%'
                height='80%'
                layout='responsive'
                objectFit='contain'
                alt='string-2'
              />
            </div>
            {/* Mobile BG Img Area 3 */}
            <div className='absolute bottom-3 block w-full md:hidden'>
              <NextImage
                src='/images/beasiswaPage/smolstring-2.png'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='contain'
                alt='smolstring-2'
              />
            </div>
            <div className='absolute right-4 bottom-20 block w-14 md:hidden'>
              <NextImage
                src='/images/beasiswaPage/smolstar-2.png'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='contain'
                alt='smolstar-2'
              />
            </div>
          </div>
          {/* Img Area 3 End*/}
          <div className='relative z-10 flex flex-col items-center justify-center'>
            <div className='relative z-50 h-20 w-full max-w-[300px] -rotate-2 rounded-2xl border-2 sm:h-32 sm:max-w-lg md:max-w-xl lg:max-w-[811px] '>
              <div className='-rotate-4 absolute  z-50 flex h-20 w-full max-w-xs items-center  justify-between rounded-2xl border-2 border-bone-1000 bg-[#3872C3] px-9 sm:h-32 sm:max-w-lg md:max-w-xl lg:max-w-[811px]'>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <div className='absolute -top-6 left-3 w-20 md:-top-12 md:-left-24 md:w-44'>
                    <NextImage
                      src='/images/beasiswaPage/arrow-1.png'
                      width='100%'
                      height='70%'
                      layout='responsive'
                      objectFit='contain'
                      alt='arrow-1'
                    />
                  </div>
                  <div className='absolute -bottom-8 right-0 w-14 md:-bottom-[3.7rem] md:w-32'>
                    <NextImage
                      src='/images/beasiswaPage/cursor-1.png'
                      width='100%'
                      height='70%'
                      layout='responsive'
                      objectFit='contain'
                      alt='cursor-1'
                    />
                  </div>
                  <div className='h-[8px] w-[8px] rounded-full border-2 border-bone-1000 bg-white sm:h-[20px] sm:w-[20px]'></div>
                  <div className='h-[8px] w-[8px] rounded-full border-2 border-bone-1000 bg-white sm:h-[20px] sm:w-[20px]'></div>
                </div>
                <Typography
                  variant='h4'
                  className='stroke text-2xl font-bold text-white sm:text-4xl sm:leading-none md:text-[48px] md:leading-[64px]'
                >
                  Beasiswa ITS
                </Typography>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <div className='h-[8px] w-[8px] rounded-full border-2 border-bone-1000 bg-white sm:h-[20px] sm:w-[20px]'></div>
                  <div className='h-[8px] w-[8px] rounded-full border-2 border-bone-1000 bg-white sm:h-[20px] sm:w-[20px]'></div>
                </div>
              </div>
              <div className='-rotate-4 absolute -left-2 -bottom-4 -z-50 h-20 w-full max-w-[811px] rounded-2xl border-2 border-bone-1000 bg-black sm:-left-4 sm:h-32'></div>
            </div>

            {ready && (
              <div className='mt-12 mb-8 flex h-[480px] w-[375px] sm:mt-28 sm:mb-36 sm:w-[600px] lg:h-[420px] lg:w-full lg:max-w-[900px] xl:max-w-[1200px]'>
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
                  className='beasiswa myswiper'
                  spaceBetween={50}
                  slidesPerView={1}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: -100,
                    },
                    1280: {
                      slidesPerView: 3,
                      spaceBetween: -50,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className='mx-auto flex h-[345px] w-full max-w-[297px] flex-col items-center justify-center space-y-5 rounded-2xl border-2 border-neutral-1000 bg-neutral-100 pt-6 pl-6 pr-6 pb-4'>
                      <div className='w-full'>
                        <NextImage
                          src='/images/beasiswaPage/beasiswa-car-1.png'
                          width='100%'
                          height='70%'
                          layout='responsive'
                          objectFit='contain'
                          alt='beasiswa-car-1'
                        />
                      </div>
                      <Typography
                        variant='title'
                        className='text-[20px] font-bold leading-[24px] text-black '
                      >
                        Beasiswa Sang Pejuang
                      </Typography>
                      <ButtonLink
                        variant='yellow'
                        size='medium'
                        round='medium'
                        href='https://www.its.ac.id/id/agenda/beasiswa-sang-pejuang-2021/'
                      >
                        Lihat
                      </ButtonLink>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='mx-auto flex h-[345px] w-full max-w-[297px] flex-col items-center justify-center space-y-5 rounded-2xl border-2 border-neutral-1000 bg-neutral-100 pt-6 pl-6 pr-6 pb-4'>
                      <div className='w-full'>
                        <NextImage
                          src='/images/beasiswaPage/beasiswa-car-2.png'
                          width='100%'
                          height='70%'
                          layout='responsive'
                          objectFit='contain'
                          alt='beasiswa-car-2'
                        />
                      </div>
                      <Typography
                        variant='title'
                        className='text-[20px] font-bold leading-[24px] text-black '
                      >
                        Beasiswa IKA ITS
                      </Typography>
                      <ButtonLink
                        variant='yellow'
                        size='medium'
                        round='medium'
                        href='https://tunasunggulbangsa.or.id'
                      >
                        Lihat
                      </ButtonLink>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='mx-auto flex h-[345px] w-full max-w-[297px] flex-col items-center justify-center space-y-5 rounded-2xl border-2 border-neutral-1000 bg-neutral-100 pt-6 pl-6 pr-6 pb-4'>
                      <div className='w-full'>
                        <NextImage
                          src='/images/beasiswaPage/beasiswa-car-3.png'
                          width='100%'
                          height='70%'
                          layout='responsive'
                          objectFit='contain'
                          alt='beasiswa-car-3'
                        />
                      </div>
                      <Typography
                        variant='title'
                        className='text-[20px] font-bold leading-[24px] text-black '
                      >
                        Beasiswa Dana Abadi
                      </Typography>
                      <ButtonLink
                        variant='yellow'
                        size='medium'
                        round='medium'
                        href='http://danaabadi.its.ac.id/web/about'
                      >
                        Lihat
                      </ButtonLink>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='mx-auto flex h-[345px] w-full max-w-[297px] flex-col items-center justify-center space-y-5 rounded-2xl border-2 border-neutral-1000 bg-neutral-100 pt-6 pl-6 pr-6 pb-4'>
                      <div className='w-full'>
                        <NextImage
                          src='/images/beasiswaPage/beasiswa-car-4.png'
                          width='100%'
                          height='70%'
                          layout='responsive'
                          objectFit='contain'
                          alt='beasiswa-car-4'
                        />
                      </div>
                      <Typography
                        variant='title'
                        className='text-[20px] font-bold leading-[24px] text-black '
                      >
                        Beasiswa UKT ADIK
                      </Typography>
                      <ButtonLink
                        variant='yellow'
                        size='medium'
                        round='medium'
                        href='https://www.its.ac.id/ppid/wp-content/uploads/sites/68/2021/07/3.-2348-SK-Rektor-ttg-Perubahan-Penerima-Beasiswa-Afirmasi-Pendidikan-Tinggi-ADIK-On-Going-Semester-Genap.pdf'
                      >
                        Lihat
                      </ButtonLink>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='mx-auto flex h-[345px] w-full max-w-[297px] flex-col items-center justify-center space-y-5 rounded-2xl border-2 border-neutral-1000 bg-neutral-100 pt-6 pl-6 pr-6 pb-4'>
                      <div className='w-full'>
                        <NextImage
                          src='/images/beasiswaPage/beasiswa-car-5.png'
                          width='100%'
                          height='70%'
                          layout='responsive'
                          objectFit='contain'
                          alt='beasiswa-car-5'
                        />
                      </div>
                      <Typography
                        variant='title'
                        className='text-[20px] font-bold leading-[24px] text-black '
                      >
                        Beasiswa UKT Bidikmisi
                      </Typography>
                      <ButtonLink
                        variant='yellow'
                        size='medium'
                        round='medium'
                        href='https://www.its.ac.id/instrumentasi/id/calon-mahasiswa/beasiswa/#1584626771150-eaac8132-7441'
                      >
                        Lihat
                      </ButtonLink>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            )}
          </div>
        </section>
        {/* Section 3 End */}
        {/* Section 4 Start */}
        <section className='relative overflow-hidden pt-8 pb-32 sm:-mt-24 lg:mt-0'>
          {/* Img Area 4 Start*/}
          <div>
            {/* Desktop BG Img Area 4 */}
            <div className='absolute top-[21rem] hidden w-full md:block'>
              <NextImage
                src='/images/beasiswaPage/ribbon-3.png'
                width='100%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                alt='ribbon-3'
              />
            </div>
            <div className='absolute top-28 hidden w-full md:block'>
              <NextImage
                src='/images/beasiswaPage/string-3.png'
                width='100%'
                height='80%'
                layout='responsive'
                objectFit='contain'
                alt='star'
              />
            </div>
            {/* Mobile BG Img Area 4 */}
            <div className='absolute top-52 block w-full md:hidden'>
              <NextImage
                src='/images/beasiswaPage/smolstring-3.png'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='contain'
                alt='smolstring-3'
              />
            </div>
            <div className='absolute bottom-40 block w-full md:hidden'>
              <NextImage
                src='/images/beasiswaPage/smolribbon-2.png'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='contain'
                alt='smolribbon-2'
              />
            </div>
          </div>
          {/* Img Area 4 End*/}
          <div className='relative flex flex-col items-center justify-center'>
            <div className='relative z-50 h-20 w-full max-w-[300px] -rotate-2 rounded-2xl border-2 sm:h-32 sm:max-w-lg md:max-w-xl lg:max-w-[811px] '>
              <div className='-rotate-4 absolute  z-50 flex h-20 w-full max-w-xs items-center  justify-between rounded-2xl border-2 border-bone-1000 bg-green-400 px-9 sm:h-32 sm:max-w-lg md:max-w-xl lg:max-w-[811px]'>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <div className='absolute -top-6 left-3 w-20 md:-top-12 md:-left-24 md:w-44'>
                    <NextImage
                      src='/images/beasiswaPage/arrow-1.png'
                      width='100%'
                      height='70%'
                      layout='responsive'
                      objectFit='contain'
                      alt='arrow-1'
                    />
                  </div>
                  <div className='absolute -bottom-8 right-0 w-14 md:-bottom-[3.7rem] md:w-32'>
                    <NextImage
                      src='/images/beasiswaPage/cursor-1.png'
                      width='100%'
                      height='70%'
                      layout='responsive'
                      objectFit='contain'
                      alt='cursor-1'
                    />
                  </div>
                  <div className='h-[8px] w-[8px] rounded-full border-2 border-bone-1000 bg-white sm:h-[20px] sm:w-[20px]'></div>
                  <div className='h-[8px] w-[8px] rounded-full border-2 border-bone-1000 bg-white sm:h-[20px] sm:w-[20px]'></div>
                </div>
                <Typography
                  variant='h4'
                  className='stroke text-center text-xl font-bold text-white sm:text-4xl sm:leading-none md:text-[48px] md:leading-[64px]'
                >
                  Beasiswa Mitra ITS
                </Typography>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <div className='h-[8px] w-[8px] rounded-full border-2 border-bone-1000 bg-white sm:h-[20px] sm:w-[20px]'></div>
                  <div className='h-[8px] w-[8px] rounded-full border-2 border-bone-1000 bg-white sm:h-[20px] sm:w-[20px]'></div>
                </div>
              </div>
              <div className='-rotate-4 absolute -left-2 -bottom-4 -z-50 h-20 w-full max-w-[811px] rounded-2xl border-2 border-bone-1000 bg-black sm:-left-4 sm:h-32'></div>
            </div>
            {/* Desktop ver */}
            <div className='mx-auto mt-24  hidden w-11/12 flex-col items-center justify-center sm:flex lg:space-y-8'>
              {dataBeasiswaMitraITS?.map((v, i) => (
                <BeasiswaCard key={`Beasiswa-Card-key-${i}`} {...v} />
              ))}
            </div>
            {/* Mobile ver */}
            <div className='mx-auto mt-10 flex w-11/12 flex-col items-center justify-center space-y-4  sm:hidden'>
              {smolDataBeasiswaMitraITS?.map((v, i) => (
                <BeasiswaCard key={`Beasiswa-Card-key-${i}`} {...v} />
              ))}
            </div>
          </div>
        </section>
        {/* Section 4 End */}
      </main>
    </Layout>
    // </Layout>
  );
}
