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
        <section className='hero relative bg-bone-500'>
          <div className='absolute top-0 hidden w-48 md:-right-[120px] md:top-20 md:block  md:w-[275px] lg:-right-[150px] lg:w-[375px]'>
            <NextImage
              src='/images/fakultasPage/awan3.png'
              width='100%'
              height='40%'
              layout='responsive'
              alt='awan'
            />
          </div>
          <div className='absolute hidden w-48 md:-left-[150px] md:bottom-96 md:block  md:w-[310px] lg:w-[475px]'>
            <NextImage
              src='/images/fakultasPage/awan4.png'
              width='100%'
              height='25%'
              layout='responsive'
              alt='awan'
            />
          </div>
          <div className='relative z-10 flex flex-col items-center justify-center pt-44 pb-72 md:pt-52 md:pb-[400px] lg:pt-56'>
            <Typography
              variant='h6'
              className='stroke z-10 max-w-[325px] text-center text-[24px] font-bold leading-[32px] text-yellow-400 sm:max-w-[450px] sm:text-[32px] sm:leading-[48px] md:max-w-[675px] md:text-[48px] md:leading-[64px] lg:max-w-[1150px] lg:text-[80px] lg:leading-[96px]'
            >
              Fakultas Teknologi Elektro & Informatika Cerdas
            </Typography>
            <Typography
              className='dark z-10 text-center font-semibold md:text-[24px] md:leading-[32px]'
              variant='body '
            >
              FTEIC / ELECTICS
            </Typography>
            <ButtonLink
              className='z-10 mt-5 rounded-lg bg-lightBlue-200 text-xs md:text-base'
              size='medium'
              href=''
            >
              Kenali Lebih Lanjut!
            </ButtonLink>

            {/* Awan hero mobile*/}
            <NextImage
              src='/images/fakultasPage/awan.png'
              className='absolute top-0 -left-20 w-48 sm:top-4 sm:hidden sm:w-60'
              objectFit='contain'
              width='100%'
              height='100%'
              layout='responsive'
              alt='Fakultas'
            />

            {/* Gedung FTEIC */}
            <NextImage
              src='/images/fakultasPage/FTEIC.png'
              className='absolute -bottom-[0.7rem] w-full sm:-bottom-[1rem] sm:max-w-[425px] md:max-w-[550px] lg:max-w-[720px]'
              objectFit='cover'
              width='100%'
              height='50%'
              layout='responsive'
              alt='Fakultas'
            />
            <div className='absolute -bottom-2 h-full w-full sm:hidden'>
              {/* Vector yellow string */}
              <NextImage
                src='/images/fakultasPage/yellow-string.png'
                objectFit='contain'
                width='100%'
                height='100%'
                layout='fill'
                alt='Fakultas'
              />

              {/* Vector red string */}
              <NextImage
                src='/images/fakultasPage/red-string.png'
                objectFit='contain'
                width='100%'
                height='100%'
                layout='fill'
                alt='Fakultas'
              />
            </div>
          </div>
          {/* Vector red string 4 */}

          <NextImage
            className='absolute hidden h-full w-full sm:-bottom-32 sm:block md:-bottom-64 lg:-bottom-80 xl:-bottom-0'
            src='/images/fakultasPage/red-string4.png'
            objectFit='cover'
            width='100%'
            height='100%'
            layout='responsive'
            alt='Fakultas'
          />

          {/* Vector yellow string 4 */}
          <div className='absolute hidden h-full w-full sm:-bottom-52 sm:block md:-bottom-64 lg:-bottom-72'>
            <NextImage
              src='/images/fakultasPage/yellow-string4.png'
              objectFit='contain'
              width='100%'
              height='100%'
              layout='fill'
              alt='Fakultas'
            />
          </div>
        </section>
        <section className='info-fakultas  overflow-hidden bg-bone-500 pb-20 sm:pb-40'>
          <div className='relative h-full w-full'>
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
            <div className='relative'>
              <NextImage
                className='absolute w-full sm:hidden'
                src='/images/fakultasPage/yellow-string3.png'
                alt='Yellow String'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='cover'
              />
              <div className='relative z-40 mx-auto  flex max-w-lg flex-col px-5 py-12 md:max-w-[900px] md:pt-40 md:pb-48 lg:max-w-6xl'>
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
                      Pada 15 Februari 2003, Prof. Dr. Ir. K.H. Mohammad Nuh,
                      DEA. dikukuhkan sebagai rektor ITS. Beliau adalah rektor
                      termuda dalam sejarah ITS, yakni berusia 42 tahun saat
                      menjabat.
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
                <div className=' absolute  -z-10 hidden w-40 sm:hidden md:top-80 md:block lg:top-[500px] lg:-left-[250px] lg:w-[620px]'>
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
          </div>

          <div className='relative z-20 flex flex-col items-center justify-center bg-bone-500  px-11 pb-36 sm:pt-32 sm:pb-40 md:px-20 '>
            <NextImage
              className='absolute left-0 -top-28 w-80 rotate-180'
              src='/images/fakultasPage/circle.png'
              width='40%'
              height='100%'
              layout='responsive'
              objectFit='contain'
              alt='Circle'
            />
            <div className='absolute bottom-0 h-full w-full sm:hidden'>
              <NextImage
                objectFit='contain'
                alt='Red String'
                src='/images/fakultasPage/red-string3.png'
                width='100%'
                height='100%'
                layout='fill'
              />
            </div>
            <div className='relative w-full rounded-2xl border-2 border-black bg-primary-main px-5 pt-6 pb-4 md:max-w-[700px] lg:max-w-[866px]'>
              <div className='flex justify-center overflow-hidden rounded-xl border-2 border-black '>
                <NextImage
                  className='hidden w-full sm:block'
                  src='/images/fakultasPage/petaFakultas.png'
                  width='100%'
                  height='50%'
                  layout='responsive'
                  alt='Peta Fakultas'
                  objectFit='cover'
                />
                <NextImage
                  className='block w-full  sm:hidden'
                  src='/images/fakultasPage/petaFakultas1.png'
                  width='100%'
                  objectFit='cover'
                  height='100%'
                  layout='responsive'
                  alt='Peta Fakultas'
                />
              </div>
              <Typography
                className='stroke mx-auto max-w-[200px] pt-4 text-center text-[24px] font-bold leading-[32px] text-white sm:max-w-none md:text-[32px] md:leading-[48px] lg:text-[48px] lg:leading-[64px]'
                variant='h5'
              >
                Peta Fakultas
              </Typography>
              <NextImage
                className='absolute -bottom-10 -right-6 w-[35%] sm:-right-12 sm:w-32 md:-right-20 md:w-40'
                src='/images/fakultasPage/pin.png'
                alt='Pin'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='contain'
              />
            </div>
          </div>
        </section>

        <section className='kenali-jurusanmu relative bg-bone-500'>
          <div className='absolute hidden h-full w-full sm:top-20 sm:block lg:top-40'>
            <NextImage
              src='/images/fakultasPage/red-string6.png'
              alt='Red String'
              layout='responsive'
              width='100%'
              height='82%'
              objectFit='cover'
            />
          </div>
          <div className='relative z-30 -rotate-3 scale-110 border-2 border-black bg-green-400 py-5'>
            <Typography
              variant='h6'
              className='stroke relative mx-auto w-fit text-center text-[24px] font-bold leading-[32px] text-white sm:px-20 sm:text-[32px] sm:leading-[48px] md:py-2 lg:py-4 lg:px-32 lg:text-[48px] lg:leading-[64px]'
            >
              Kenali Jurusanmu!
            </Typography>
            <div className='relative mx-auto hidden max-w-[500px] sm:block lg:max-w-[750px]'>
              <NextImage
                src='/images/fakultasPage/eye1.png'
                width='100%'
                height='80%'
                className='absolute -top-24 left-0 hidden w-[20%] sm:block sm:w-[18%] lg:-top-40 lg:w-[16%]'
                alt='Eye'
              />
              <NextImage
                src='/images/fakultasPage/magnifier.png'
                width='90%'
                height='100%'
                className='absolute -bottom-14 right-0 hidden w-[20%] sm:block sm:w-[12%] lg:-bottom-16 lg:w-[12%]'
                alt='Magnifier'
              />
            </div>
            <NextImage
              src='/images/fakultasPage/eye.png'
              width='100%'
              height='100%'
              className='absolute -top-7 left-3 w-16 sm:hidden sm:w-[14%]'
              alt='Eye'
            />
            <NextImage
              src='/images/fakultasPage/magnifier.png '
              width='90%'
              height='100%'
              className='absolute -bottom-7 right-0 w-16 sm:hidden sm:w-[12%]'
              alt='Magnifier'
            />
          </div>
          <NextImage
            className=' absolute -top-[40rem] z-20 hidden h-full w-full sm:block'
            src='/images/fakultasPage/red-string5.png'
            alt='Red String'
            objectFit='cover'
            width='100%'
            height='100%'
            layout='responsive'
          />
          <div className='relative'>
            <NextImage
              src='/images/fakultasPage/red-string2.png'
              alt='Red String'
              width='90%'
              className='absolute top-10 h-full w-full sm:hidden'
              height='100%'
              layout='responsive'
              objectFit='contain'
            />
            <div className=' flex flex-col gap-y-6 px-4 py-20 md:mx-auto md:max-w-[750px] md:py-40 md:px-6 lg:max-w-6xl'>
              <div className='z-50 flex overflow-hidden rounded-xl border-2 border-black  '>
                <div className='relative w-[45%] md:w-[25%]'>
                  <NextImage
                    src='/images/fakultasPage/fakultas.png'
                    layout='fill'
                    width='100%'
                    alt='fakultas'
                    height='100%'
                    objectFit='cover'
                  />
                </div>
                <div className='w-[55%] bg-white p-4 md:w-[75%] md:p-6'>
                  <Typography
                    variant='body'
                    className='text-[16px] font-bold leading-[24px] sm:text-lg md:text-xl'
                  >
                    DEPARTEMEN SISTEM INFORMASI
                  </Typography>
                  <Typography className='pt-2 text-justify text-xs sm:text-sm md:pb-4 md:text-lg '>
                    Turpis leo id a sed. Lacus amet massa in id viverra ornare
                    porttitor blandit nullam. Vel sit enim vitae enim lobortis
                    mattis arcu. Nec lacus sit nulla turpis sapien morbi
                    sagittis ornare. Leo viverra auctor{' '}
                  </Typography>
                  <ButtonLink
                    className='hidden md:inline-flex md:p-2'
                    variant='yellow'
                    size='small'
                    href=''
                  >
                    Lihat Departemen
                  </ButtonLink>
                </div>
              </div>
              <div className='z-50 flex overflow-hidden rounded-xl border-2 border-black '>
                <div className='w-[55%] bg-white p-4 md:w-[75%] md:p-6'>
                  <Typography
                    variant='body'
                    className='text-[16px] font-bold leading-[24px] sm:text-lg md:text-xl'
                  >
                    DEPARTEMEN SISTEM INFORMASI
                  </Typography>
                  <Typography className='pt-2 text-justify text-xs sm:text-sm md:pb-4 md:text-lg'>
                    Turpis leo id a sed. Lacus amet massa in id viverra ornare
                    porttitor blandit nullam. Vel sit enim vitae enim lobortis
                    mattis arcu. Nec lacus sit nulla turpis sapien morbi
                    sagittis ornare. Leo viverra auctor{' '}
                  </Typography>
                  <ButtonLink
                    className='hidden md:inline-flex md:p-2'
                    variant='yellow'
                    size='small'
                    href=''
                  >
                    Lihat Departemen
                  </ButtonLink>
                </div>
                <div className='relative w-[45%] md:w-[25%]'>
                  <NextImage
                    src='/images/fakultasPage/fakultas.png'
                    layout='fill'
                    width='100%'
                    alt='fakultas'
                    height='100%'
                    objectFit='cover'
                  />
                </div>
              </div>
              <div className='z-50 flex overflow-hidden rounded-xl border-2 border-black '>
                <div className='relative w-[45%] md:w-[25%]'>
                  <NextImage
                    src='/images/fakultasPage/fakultas.png'
                    layout='fill'
                    width='100%'
                    alt='fakultas'
                    height='100%'
                    objectFit='cover'
                  />
                </div>
                <div className='w-[55%] bg-white p-4 md:w-[75%] md:p-6'>
                  <Typography
                    variant='body'
                    className='text-[16px] font-bold leading-[24px] sm:text-lg md:text-xl'
                  >
                    DEPARTEMEN SISTEM INFORMASI
                  </Typography>
                  <Typography className='pt-2 text-justify text-xs  sm:text-sm md:pb-4 md:text-lg'>
                    Turpis leo id a sed. Lacus amet massa in id viverra ornare
                    porttitor blandit nullam. Vel sit enim vitae enim lobortis
                    mattis arcu. Nec lacus sit nulla turpis sapien morbi
                    sagittis ornare. Leo viverra auctor.
                  </Typography>
                  <ButtonLink
                    className='hidden md:inline-flex md:p-2'
                    variant='yellow'
                    size='small'
                    href=''
                  >
                    Lihat Departemen
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
