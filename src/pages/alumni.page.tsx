import React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { alumni } from '@/constant/alumniData';

export default function Alumni() {
  return (
    <Layout>
      <Seo templateTitle='Alumni' />
      <main>
        <section className='Hero relative overflow-hidden bg-bone-500'>
          <div className='m-auto px-5 pt-32 pb-16 md:max-w-7xl md:pt-32 md:pb-44'>
            <div className='relative z-10 mx-auto max-w-lg self-center md:max-w-[800px] md:px-10 lg:max-w-[625px] lg:px-0 xl:m-0'>
              <div className='relative h-5 rounded-t-xl border-x-2 border-t-2 border-x-black border-t-black bg-yellow-400 md:h-8'>
                <div className='absolute -top-9 -left-2 w-20 sm:-top-14 sm:-left-1 sm:w-32'>
                  <NextImage
                    src='/images/alumni/Eye.png'
                    width='100%'
                    height='100%'
                    layout='responsive'
                    objectFit='contain'
                    alt='Eye'
                  />
                </div>
              </div>
              <div className='md:py-16" rounded-b-xl border-2 border-black bg-white py-16 px-4 md:px-14'>
                <Typography
                  variant='h1'
                  className='stroke pb-2 text-center text-[64px] font-bold text-lightBlue-300 md:text-start md:text-[80px] md:leading-none'
                >
                  ALUMNI
                </Typography>
                <Typography
                  variant='h6'
                  className='pb-10 pt-8 text-center text-[16px] font-semibold leading-none md:pb-6 md:text-start md:text-[24px] md:leading-[32px]'
                >
                  Institut Teknologi Sepuluh Nopember
                </Typography>
                <div className='flex justify-center pb-2 md:justify-start'>
                  <ButtonLink variant='yellow' href='/' className='inline-flex'>
                    Kenali lebih lanjut
                  </ButtonLink>
                </div>
              </div>
              <div className='absolute -right-4 -bottom-10 w-20 sm:-right-4 sm:-bottom-14 sm:w-28 md:right-4 md:-bottom-20 md:w-32'>
                <NextImage
                  src='/images/alumni/Magnifier.png'
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='contain'
                  alt='Magnifier'
                />
              </div>
              <div className='absolute -right-[625px] -bottom-3 z-10 hidden xl:block xl:w-[375px]'>
                <NextImage
                  src='/images/alumni/Megaphone.png'
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='contain'
                  alt='Megaphone'
                />
              </div>
              <div className='absolute -top-20 -right-72 hidden w-36 xl:block'>
                <NextImage
                  src='/images/alumni/Star.png'
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='contain'
                  alt='Star'
                />
              </div>
              <div className='absolute top-0 right-0 hidden w-48 md:-right-[800px] md:-top-28 md:block md:w-[350px]'>
                <NextImage
                  src='/images/alumni/awan.png'
                  width='110%'
                  height='40%'
                  layout='responsive'
                  alt='awan'
                />
              </div>
            </div>
          </div>
          <div className='absolute top-[75px] -right-16 w-56  md:hidden'>
            <NextImage
              src='/images/alumni/awan.png'
              width='110%'
              height='40%'
              layout='responsive'
              alt='awan'
            />
          </div>
          <div className='absolute top-32 w-full md:hidden'>
            <NextImage
              src='/images/alumni/benang-mobile.png'
              width='100%'
              height='100%'
              layout='responsive'
              alt=''
            />
          </div>

          <div className='absolute -left-4 bottom-4 w-56 md:hidden'>
            <NextImage
              src='/images/alumni/awan3.png'
              width='100%'
              height='50%'
              layout='responsive'
              alt=''
            />
          </div>
          <div className='absolute -bottom-7 w-[140vw] md:top-44 md:w-full'>
            <div className='relative h-24 w-[140vw] md:h-56 md:w-full'>
              <NextImage
                src='/images/alumni/benang.png'
                width='100%'
                height='100%'
                layout='fill'
                alt='benang'
              />
            </div>
          </div>
          <div className='absolute -bottom-56 -right-0 w-full sm:hidden'>
            <div className='relative h-[600px] w-full'>
              <NextImage
                src='/images/alumni/benang-merah5.png'
                width='100%'
                height='100%'
                layout='fill'
                alt=''
              />
            </div>
          </div>
          <div className='absolute -bottom-16 w-[120vw] md:top-72 '>
            <div className='relative -left-20 h-24 w-[120vw] md:h-56 md:w-full'>
              <NextImage
                src='/images/alumni/benang1.png'
                width='100%'
                height='100%'
                layout='fill'
                alt=''
              />
            </div>
          </div>
          <div className='absolute -top-64 hidden w-full md:block'>
            <div className='relative h-[750px] w-full'>
              <NextImage
                src='/images/alumni/benang-merah1.png'
                width='110%'
                height='45%'
                layout='fill'
                alt=''
              />
            </div>
          </div>
        </section>
        <section>
          <div className='relative z-10 flex flex-col items-center justify-center overflow-hidden'>
            <div className='relative flex h-28 w-screen items-center justify-center border-y-2 border-bone-1000 bg-red-500 md:h-36 md:border-2 '>
              <div className='absolute -top-1 -left-2 w-20 md:left-4 md:w-28 lg:left-0 lg:w-44'>
                <NextImage
                  src='/images/alumni/mic-1.png'
                  width='90%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='mic-1'
                  className='block'
                />
              </div>
              <div className='absolute bottom-0 right-2 w-16 md:right-5 md:w-28 lg:right-10 lg:w-32'>
                <NextImage
                  src='/images/alumni/eye-1.png'
                  width='100%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='eye-1'
                />
              </div>
              <Typography
                variant='h4'
                className='stroke max-w-[250px] text-center text-[24px] font-bold leading-[32px] text-white md:max-w-6xl md:text-[32px] lg:text-[48px] lg:leading-[64px]'
              >
                Ada Info Unik Nih Buat Kamu!
              </Typography>
            </div>
          </div>
        </section>
        <section className='Info Unik relative overflow-hidden bg-bone-500'>
          <div className='relative z-40 mx-auto flex max-w-lg flex-col px-5 py-12 md:max-w-[900px] md:pt-40 md:pb-48 lg:max-w-6xl'>
            <div className='flex justify-end gap-1 rounded-t-xl border-2 border-black bg-lightBlue-500 p-1 pr-2 sm:gap-2 md:gap-4 md:p-3 '>
              <div className='h-2 w-2 rounded-full bg-yellow-300 outline outline-2 outline-black md:h-4 md:w-4'></div>
              <div className='h-2 w-2 rounded-full bg-red-400 outline outline-2 outline-black md:h-4 md:w-4'></div>
              <div className='h-2 w-2 rounded-full bg-green-300 outline outline-2 outline-black md:h-4 md:w-4'></div>
            </div>
            <div className='flex flex-col md:flex-row '>
              <div className='flex flex-col rounded-b-xl rounded-bl-xl border-x-2 border-b-2 border-black bg-white py-6 px-10 md:w-3/5 md:rounded-br-none lg:py-12 lg:px-16 '>
                <Typography
                  variant='h5'
                  className='pb-2 text-center text-[24px] font-bold leading-[32px] md:text-start md:text-[32px] md:font-semibold md:leading-[48px]'
                >
                  Tahukah kamu?
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

                <div className='mx-auto md:mx-0 md:pb-10'>
                  <ButtonLink
                    href='https://www.youtube.com/@INILHOITS'
                    variant='lightBlue'
                    className='mt-4 md:mt-12'
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
          <div className='absolute top-80 -left-9 w-40 sm:hidden '>
            <NextImage
              src='/images/alumni/awan2.png'
              width='100%'
              height='35%'
              layout='responsive'
              alt=''
            />
          </div>
          <div className='absolute top-80 w-full sm:hidden md:top-20 md:right-0 md:w-[350px]'>
            <NextImage
              src='/images/alumni/benang6.png'
              width='100%'
              height='50%'
              layout='responsive'
              alt=''
            />
          </div>
          <div className='absolute top-14 hidden w-full md:block'>
            <NextImage
              src='/images/alumni/benang-merah2.png'
              alt=''
              width='100%'
              height='30%'
              layout='responsive'
            />
          </div>

          <div className='absolute top-[425px] right-0 w-72 md:hidden'>
            <NextImage
              src='/images/alumni/circle.png'
              alt=''
              width='100%'
              height='100%'
              layout='responsive'
            />
          </div>
          <div className='absolute top-[975px] left-0 w-96 rotate-180 md:hidden'>
            <NextImage
              src='/images/alumni/circle.png'
              alt=''
              width='100%'
              height='100%'
              layout='responsive'
            />
          </div>
          <div className='absolute top-[590px] right-0 w-full sm:hidden'>
            <NextImage
              src='/images/alumni/benang-mobile1.png'
              alt=''
              width='100%'
              height='160%'
              layout='responsive'
            />
          </div>
          <div className='absolute top-[1000px] right-0 w-full sm:hidden'>
            <NextImage
              src='/images/alumni/benang7.png'
              alt=''
              width='100%'
              height='150%'
              layout='responsive'
            />
          </div>

          <div className='relative z-10 m-auto h-20 w-full max-w-[350px] rounded-2xl border-2 sm:max-w-[525px] md:h-32 md:max-w-[750px] md:-rotate-2 lg:max-w-[811px]'>
            <div className='md:-rotate-4 shadow-box-left absolute inset-0 z-50 flex h-20 w-full max-w-[750px] items-center justify-between rounded-2xl border-2 border-bone-1000 bg-orange-400 px-4 md:h-32 md:px-9 lg:max-w-[811px]'>
              <div className='flex flex-col items-center justify-center gap-2 md:gap-4'>
                <div className='h-4 w-4 rounded-full border-4 border-bone-1000 bg-white md:h-[20px] md:w-[20px] md:border-[3px]'></div>
                <div className='h-4 w-4 rounded-full border-4 border-bone-1000 bg-white md:h-[20px] md:w-[20px] md:border-[3px]'></div>
              </div>
              <Typography
                variant='h4'
                className='stroke text-center text-[20px] font-bold leading-[24px] text-white sm:text-[32px] md:text-[48px] md:leading-[64px]'
              >
                Siapa Sajakah Mereka?!
              </Typography>
              <div className='flex flex-col items-center justify-center gap-2 md:gap-4'>
                <div className='h-4 w-4 rounded-full border-4 border-bone-1000 bg-white md:h-[20px] md:w-[20px] md:border-[3px]'></div>
                <div className='h-4 w-4 rounded-full border-4 border-bone-1000 bg-white md:h-[20px] md:w-[20px] md:border-[3px]'></div>
              </div>
            </div>
            <div className='absolute -top-10 -left-24 z-50 hidden w-32 md:block'>
              <NextImage
                alt=''
                src='/images/alumni/Magnifier.png'
                width='85%'
                height='100%'
                layout='responsive'
              />
            </div>
            <div className='absolute top-24 -right-16 z-50 hidden w-28 md:block'>
              <NextImage
                alt=''
                src='/images/alumni/arrow.png'
                width='85%'
                height='100%'
                layout='responsive'
              />
            </div>
          </div>
          <div className='mx-auto max-w-6xl pt-12 pb-6 sm:pb-10 md:pt-48 md:pb-32 '>
            <div className='mx-auto hidden w-fit justify-center gap-y-8 md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-16 xl:grid-cols-3'>
              {alumni.map(({ name, job, src }, index) => (
                <div
                  key={index}
                  className='z-50 mx-auto flex w-80 flex-col overflow-hidden rounded-xl border-black outline outline-2 outline-black'
                >
                  <div>
                    <div className='relative h-80 md:h-96 md:w-80 '>
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
                  <div className='flex h-full flex-col items-center justify-center rounded-b-xl border-t-2 border-black bg-white py-3 md:w-80 md:py-5 '>
                    <Typography
                      variant='title'
                      className='pb-2 text-center text-[16px] font-semibold leading-[24px] md:text-[20px]'
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant='paragraph'
                      className='max-w-[225px] pb-3 text-center text-[14px] leading-[24px] md:text-[18px]'
                    >
                      {job}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
            <div className='mx-auto grid w-fit grid-cols-1  justify-center gap-y-8 sm:grid-cols-2 sm:gap-x-8 md:hidden '>
              {alumni.map(
                ({ name, job, src }, index) =>
                  index <= 7 && (
                    <div
                      key={index}
                      className='z-50 mx-auto flex w-[83vw] flex-col overflow-hidden rounded-xl border-black outline outline-2 outline-black sm:w-72'
                    >
                      <div>
                        <div className='relative h-[83vw] sm:h-80'>
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
                      <div className='flex h-full flex-col items-center justify-center rounded-b-xl border-t-2 border-black bg-white py-3 md:w-80 md:py-5 '>
                        <Typography
                          variant='title'
                          className='text-center text-[16px] font-semibold leading-[24px] md:text-[20px]'
                        >
                          {name}
                        </Typography>
                        <Typography
                          variant='paragraph'
                          className='max-w-[200px] text-center text-[14px] leading-[24px] md:text-[18px]'
                        >
                          {job}
                        </Typography>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className='absolute top-20 w-full md:hidden'>
            <NextImage
              alt=''
              src='/images/alumni/benang-mobile1.png'
              width='100%'
              height='35%'
              layout='responsive'
            />
          </div>
          <div className='absolute top-[1290px] hidden  w-full md:top-[1675px] md:block xl:top-[1225px]'>
            <NextImage
              alt=''
              src='/images/alumni/benang-merah3.png'
              width='100%'
              height='35%'
              layout='responsive'
            />
          </div>
          <div className='absolute top-[1800px] hidden w-full md:block xl:top-[1450px]'>
            <NextImage
              src='/images/alumni/benang2.png'
              alt=''
              width='100%'
              height='15%'
              layout='responsive'
            />
          </div>
          <div className='absolute bottom-[1439px] right-0 w-full md:hidden'>
            <NextImage
              src='/images/alumni/benang-merah7.png'
              width='100%'
              height='100%'
              alt=''
              layout='responsive'
            />
          </div>

          <div className='absolute top-[1800px] right-0 w-[400px] md:hidden'>
            <NextImage
              src='/images/alumni/circle.png'
              width='100%'
              height='100%'
              alt=''
              layout='responsive'
            />
          </div>
          <div className='absolute bottom-[1330px] -left-0 z-20 w-48 sm:hidden'>
            <NextImage
              src='/images/alumni/awan4.png'
              width='100%'
              height='40%'
              alt=''
              layout='responsive'
            />
          </div>
          <div className='absolute bottom-[1190px] w-full  md:hidden'>
            <NextImage
              src='/images/alumni/benang6.png'
              width='100%'
              height='50%'
              alt=''
              layout='responsive'
            />
          </div>
          <div className='absolute bottom-[760px] w-full sm:hidden'>
            <NextImage
              src='/images/alumni/benang-mobile1.png'
              width='100%'
              height='60%'
              alt=''
              layout='responsive'
            />
          </div>
          <div className='absolute bottom-[775px]  w-full sm:hidden'>
            <NextImage
              src='/images/alumni/benang-mobile1.png'
              width='100%'
              height='60%'
              alt=''
              layout='responsive'
            />
          </div>
          <div className='absolute bottom-[490px] z-10 w-full sm:hidden'>
            <NextImage
              src='/images/alumni/benang-merah4.png'
              width='100%'
              height='75%'
              alt=''
              layout='responsive'
            />
          </div>
          <div>
            <NextImage
              className='absolute bottom-[289px] left-0 z-20 w-[300px] rotate-180 md:hidden'
              src='/images/alumni/circle.png'
              width='100%'
              height='100%'
              alt=''
              layout='responsive'
            />
          </div>
          <div className='absolute -bottom-56 right-0 w-[437px] md:hidden'>
            <NextImage
              src='/images/alumni/benang7.png'
              width='90%'
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
