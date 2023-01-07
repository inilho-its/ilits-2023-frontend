import * as React from 'react';

import clsxm from '@/lib/clsxm';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { teamData } from '@/constant/timList';

type teamProps = {
  teamName: string;
  imgSrc: string;
  desc: string;
  isLeft: boolean;
};

function TimList(props: teamProps) {
  return (
    <div
      className={clsxm(
        'flex flex-col items-center overflow-hidden rounded-2xl border-2 border-black bg-neutral-100 lg:max-w-6xl xl:max-w-7xl',
        props.isLeft ? ' lg:flex-row' : ' lg:flex-row-reverse'
      )}
    >
      <div className='w-full lg:w-full xl:w-1/4'>
        <div className='w-full grayscale transition duration-200 hover:grayscale-0'>
          <NextImage
            src={props.imgSrc}
            width='100%'
            height='80%'
            objectFit='contain'
            layout='responsive'
            alt='tim'
            imgClassName={clsxm(
              'rounded-t-2xl',
              props.isLeft
                ? ' lg:rounded-tr-none lg:rounded-l-2xl'
                : ' lg:rounded-tl-none lg:rounded-r-2xl'
            )}
          />
        </div>
      </div>
      <div className='w-11/12 py-6 px-5 text-center lg:w-full lg:text-left xl:w-3/4'>
        <Typography
          variant='h4'
          as='h4'
          className='text-2xl font-bold text-bone-1000 md:text-4xl xl:text-5xl'
        >
          {props.teamName}
        </Typography>
        <Typography
          variant='body'
          as='p'
          className='pt-4 text-lg text-bone-1000'
        >
          {props.desc}
        </Typography>
      </div>
    </div>
  );
}

export default function TimPage() {
  return (
    <>
      <Seo templateTitle='Tim' />
      <main className='min-h-screen overflow-hidden bg-bone-500'>
        <section className='relative mb-28'>
          <div className='absolute -top-16 left-0 hidden w-screen lg:block'>
            <NextImage
              src='/images/pageTim/Group-7235.png'
              width='100%'
              height='48%'
              objectFit='contain'
              layout='responsive'
              alt='ornament'
            />
          </div>
          <div className='absolute top-48 z-0 block w-screen sm:-top-8 md:-top-20 lg:hidden'>
            <NextImage
              src='/images/pageTim/Group-7239.png'
              width='68%'
              height='100%'
              objectFit='contain'
              layout='responsive'
              alt='ornament'
            />
          </div>
          <div className='absolute top-36 right-0 z-0 block w-[270px] lg:hidden'>
            <NextImage
              src='/images/pageTim/cloud-6.png'
              width='100%'
              height='45%'
              objectFit='contain'
              layout='responsive'
              alt='cloud'
            />
          </div>
          <div className='mx-auto flex w-11/12 md:w-10/12 lg:justify-between'>
            <div className='relative w-[618px] pt-[225px]'>
              <div className='relative z-30 h-[33px] rounded-t-2xl border-2 border-black bg-yellow-400'>
                <div className='absolute -top-6 -left-4 z-50 w-28'>
                  <NextImage
                    src='/images/pageTim/Eye.png'
                    width='100%'
                    height='60%'
                    objectFit='contain'
                    layout='responsive'
                    alt='eye'
                  />
                </div>
              </div>
              <div className='absolute top-[530px] -left-56 z-10 w-[432px] lg:top-64 lg:left-56 xl:left-96 xl:w-[500px]'>
                <NextImage
                  src='/images/pageTim/cloud-1.png'
                  width='100%'
                  height='30%'
                  objectFit='contain'
                  layout='responsive'
                  alt='cloud'
                />
              </div>
              <div className='relative z-20 h-[343px] rounded-b-2xl border-b-2 border-l-2 border-r-2 border-black bg-neutral-100 pt-10 text-center md:pl-[66px] md:text-left lg:pt-[66px]'>
                <Typography
                  variant='h1'
                  as='h1'
                  className='stroke font-bold text-lightBlue-400'
                >
                  TIM
                </Typography>
                <Typography
                  variant='h6'
                  as='h6'
                  className='font-semibold text-bone-1000'
                >
                  Institut Teknologi Sepuluh Nopember
                </Typography>
                <ButtonLink
                  href='#'
                  variant='yellow'
                  size='medium'
                  round='medium'
                  className='mt-6'
                >
                  Kenali Lebih Lanjut
                </ButtonLink>
                <div className='absolute -bottom-10 -right-5 z-50 w-20 md:-bottom-16 md:right-7 md:w-32'>
                  <NextImage
                    src='/images/pageTim/Magnifier.png'
                    width='100%'
                    height='100%'
                    objectFit='contain'
                    layout='responsive'
                    alt='magnifier'
                  />
                </div>
              </div>
            </div>
            <div className='relative z-10 hidden w-[431.67px] pt-28 lg:block'>
              <div className='absolute z-50 w-28'>
                <NextImage
                  src='/images/pageTim/Star.png'
                  width='100%'
                  height='150%'
                  objectFit='contain'
                  layout='responsive'
                  alt='star'
                />
              </div>
              <div>
                <div className='absolute top-12 right-0 -z-10 w-[400px]'>
                  <NextImage
                    src='/images/pageTim/cloud-2.png'
                    width='100%'
                    height='50%'
                    objectFit='contain'
                    layout='responsive'
                    alt='cloud'
                  />
                </div>
                <div>
                  <NextImage
                    src='/images/pageTim/Person.png'
                    width='100%'
                    height='150%'
                    objectFit='contain'
                    layout='responsive'
                    alt='person'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='absolute -top-72 hidden w-screen lg:block'>
            <NextImage
              src='/images/pageTim/Group-7237.png'
              width='100%'
              height='100%'
              objectFit='contain'
              layout='responsive'
              alt='ornament'
            />
          </div>
          <div className='absolute -top-16 hidden w-screen lg:block'>
            <NextImage
              src='/images/pageTim/Group-7236.png'
              width='100%'
              height='100%'
              objectFit='contain'
              layout='responsive'
              alt='ornament'
            />
          </div>
        </section>
        <section>
          <div className='relative border-t-2 border-b-2 border-black bg-red-500'>
            <div className='absolute top-0 left-3 w-20 lg:w-32'>
              <NextImage
                src='/images/pageTim/Arrow-1.png'
                width='100%'
                height='75%'
                objectFit='contain'
                layout='responsive'
                alt='arrow'
              />
            </div>
            <div>
              <Typography
                variant='h6'
                as='h6'
                className='stroke p-10 text-center text-2xl font-bold text-neutral-100 md:text-3xl lg:text-5xl'
              >
                TIM KEBANGGAAN <br className='block md:hidden' />
                ITS ??!!
              </Typography>
            </div>
            <div className='absolute bottom-0 right-5 w-24 lg:top-10 lg:right-16 lg:w-36'>
              <NextImage
                src='/images/pageTim/Eye-1.png'
                width='100%'
                height='60%'
                objectFit='contain'
                layout='responsive'
                alt='eye staring'
              />
            </div>
          </div>
        </section>
        <section className='relative'>
          <div className='absolute top-36 right-0 hidden w-[400px] lg:block'>
            <NextImage
              src='/images/pageTim/cloud-4.png'
              width='100%'
              height='35%'
              objectFit='contain'
              layout='responsive'
              alt='cloud'
            />
          </div>
          <div className='absolute top-72 -left-12 block w-[300px] lg:hidden'>
            <NextImage
              src='/images/pageTim/cloud-1.png'
              width='100%'
              height='35%'
              objectFit='contain'
              layout='responsive'
              alt='cloud'
            />
          </div>
          <div className='absolute top-72 z-0 block w-screen lg:hidden'>
            <NextImage
              src='/images/pageTim/Vector.png'
              width='100%'
              height='75%'
              objectFit='contain'
              layout='responsive'
              alt='ornament'
            />
          </div>
          <div className='absolute top-96 right-0 z-10 block w-48 lg:hidden'>
            <NextImage
              src='/images/pageTim/gradien-2.png'
              width='100%'
              height='160%'
              objectFit='contain'
              layout='responsive'
              alt='gradien'
            />
          </div>
          <div className='absolute top-96 z-10 block w-screen lg:hidden'>
            <NextImage
              src='/images/pageTim/Vector-1.png'
              width='100%'
              height='160%'
              objectFit='contain'
              layout='responsive'
              alt='ornament'
            />
          </div>
          <div className='relative mx-auto mb-12 w-11/12 pt-[137px] sm:w-[500px] md:w-[618px] lg:mb-32 lg:w-[950px] lg:px-4 xl:w-[1046px]'>
            <div className='relative z-10'>
              <div>
                <div className='z-30 rounded-t-2xl border-2 border-black bg-pink-500'>
                  <div className='flex flex-row-reverse p-2'>
                    <div className='mr-2 h-[20px] w-[20px] rounded-full border-2 border-black bg-yellow-400'></div>
                    <div className='mr-2 h-[20px] w-[20px] rounded-full border-2 border-black bg-red-400'></div>
                    <div className='mr-2 h-[20px] w-[20px] rounded-full border-2 border-black bg-green-400'></div>
                  </div>
                </div>
                <div className='relative rounded-b-2xl border-2 border-t-0 border-black bg-neutral-100'>
                  <div className='flex flex-row'>
                    <div className='flex w-full flex-1 flex-col p-8 text-center lg:w-1/2 lg:p-10 lg:text-left'>
                      <Typography
                        variant='h5'
                        as='h5'
                        className='text-2xl font-semibold text-bone-1000 md:text-[32px]'
                      >
                        Info Unik Buat Kamu
                      </Typography>
                      <div className='z-10 mt-4 block max-w-full lg:hidden'>
                        <NextImage
                          src='/images/pageTim/image.png'
                          width='100%'
                          height='62.5%'
                          objectFit='contain'
                          layout='responsive'
                          alt='image'
                          imgClassName='rounded border-2 border-black'
                        />
                      </div>
                      <div className='pt-4'>
                        <Typography
                          variant='body'
                          as='p'
                          className='text-[14px] text-bone-1000 md:text-base'
                        >
                          Banyak sekali Tim yang ada di ITS, Tim ini biasanya
                          dibentuk dari suatu departemen dengan tujuan dan visi
                          tertentu, salah satunya yaitu untuk diikutkan kedalam
                          perlombaan. baik di kancah nasional maupun
                          internasional. penasaran kehebatan tim-tim ITS ini?
                          kepoin sekarang!
                        </Typography>
                        <div className='pt-4 lg:pt-16'>
                          <ButtonLink
                            href='#'
                            variant='pink'
                            size='medium'
                            round='medium'
                            className='pt-3 pb-3 pl-7 pr-7 text-bone-1000'
                          >
                            Tonton Sekarang!
                          </ButtonLink>
                        </div>
                      </div>
                    </div>
                    <div className='z-10 hidden w-[475px] lg:block'>
                      <NextImage
                        src='/images/pageTim/image-8.png'
                        width='100%'
                        height='88.5%'
                        objectFit='contain'
                        layout='responsive'
                        alt='image'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute -right-11 -bottom-16 z-20 hidden w-28 lg:block'>
                <NextImage
                  src='/images/pageTim/Cursor.png'
                  width='70%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt='cursor'
                />
              </div>
            </div>
            <div className='absolute -right-10 -bottom-28 hidden w-96 lg:block xl:-right-32'>
              <NextImage
                src='/images/pageTim/gradien-3.png'
                width='100%'
                height='100%'
                objectFit='contain'
                layout='responsive'
                alt='gradien'
              />
            </div>
            <div className='absolute -left-80 bottom-0 hidden w-[500px] lg:block'>
              <NextImage
                src='/images/pageTim/cloud-1.png'
                width='100%'
                height='30%'
                objectFit='contain'
                layout='responsive'
                alt='cloud'
              />
            </div>
          </div>
        </section>
        <section className='relative'>
          <div className='absolute -left-40 -top-24 block w-96 lg:hidden'>
            <NextImage
              src='/images/pageTim/gradien-4.png'
              width='100%'
              height='100%'
              objectFit='contain'
              layout='responsive'
              alt='gradien'
            />
          </div>
          <div className='relative'>
            <div className='absolute -top-36 hidden w-96 lg:block'>
              <NextImage
                src='/images/pageTim/gradien.png'
                width='100%'
                height='100%'
                objectFit='contain'
                layout='responsive'
                alt='gradien'
              />
            </div>
            <div className='relative z-30 mx-auto mt-12 w-11/12 rounded-3xl border-2 border-black bg-green-400 md:w-10/12 lg:mt-[147.66px]'>
              <div className='relative'>
                <div className='absolute -top-6 -left-8 hidden w-24 md:block lg:-top-12 lg:w-32'>
                  <NextImage
                    src='/images/pageTim/Magnifier.png'
                    width='100%'
                    height='100%'
                    objectFit='contain'
                    layout='responsive'
                    alt='magnifier'
                  />
                </div>
                <Typography
                  variant='h4'
                  className='stroke p-10 text-center text-2xl font-bold text-neutral-100 md:text-3xl lg:text-5xl'
                >
                  Apa Saja Tim di ITS?
                </Typography>
                <div className='absolute right-4 -bottom-6 hidden w-20 md:block lg:-bottom-20 lg:right-6 lg:w-36'>
                  <NextImage
                    src='/images/pageTim/Arrow-2.png'
                    width='100%'
                    height='100%'
                    objectFit='contain'
                    layout='responsive'
                    alt='Arrow'
                  />
                </div>
              </div>
            </div>
            <div className='absolute top-3 right-0 hidden w-[500px] lg:block'>
              <NextImage
                src='/images/pageTim/cloud-5.png'
                width='100%'
                height='27%'
                objectFit='contain'
                layout='responsive'
                alt='cloud'
              />
            </div>
          </div>
        </section>
        <section>
          <div className='relative'>
            <div className='relative'>
              <div className='absolute top-36 z-10 hidden w-[500px] lg:block'>
                <NextImage
                  src='/images/pageTim/cloud-1.png'
                  width='100%'
                  height='30%'
                  objectFit='contain'
                  layout='responsive'
                  alt='cloud'
                />
              </div>
              <div className='absolute -top-20 right-0 z-10 hidden w-96 lg:block'>
                <NextImage
                  src='/images/pageTim/gradien-2.png'
                  width='70%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt='gradien'
                />
              </div>
              <div className='absolute -top-96 z-10 hidden w-screen lg:block'>
                <NextImage
                  src='/images/pageTim/Group-7238.png'
                  width='83%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt='ornament'
                />
              </div>
              <div className='absolute -top-20 block w-screen md:-top-32 lg:hidden'>
                <NextImage
                  src='/images/pageTim/Vector-2.png'
                  width='100%'
                  height='160%'
                  objectFit='contain'
                  layout='responsive'
                  alt='ornament'
                />
              </div>
              <div className='absolute top-[570px] block w-screen lg:hidden'>
                <NextImage
                  src='/images/pageTim/Vector-3.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt='ornament'
                />
              </div>
              <div className='absolute top-[825px] -right-32 block w-[437px] lg:hidden'>
                <NextImage
                  src='/images/pageTim/gradien-5.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt='ornament'
                />
              </div>
              <div className='absolute top-[1050px] z-10 block w-screen lg:hidden'>
                <NextImage
                  src='/images/pageTim/Vector.png'
                  width='100%'
                  height='75%'
                  objectFit='contain'
                  layout='responsive'
                  alt='ornament'
                />
              </div>
              <div className='absolute top-[1050px] left-0 z-0 block w-48 lg:hidden'>
                <NextImage
                  src='/images/pageTim/cloud-7.png'
                  width='100%'
                  height='75%'
                  objectFit='contain'
                  layout='responsive'
                  alt='cloud'
                />
              </div>
              <div className='absolute top-[1400px] z-0 block w-screen lg:hidden'>
                <NextImage
                  src='/images/pageTim/Vector-5.png'
                  width='100%'
                  height='150%'
                  objectFit='contain'
                  layout='responsive'
                  alt='ornament'
                />
              </div>
              <div className='absolute top-[1650px] z-0 block w-screen lg:hidden'>
                <NextImage
                  src='/images/pageTim/Vector-6.png'
                  width='100%'
                  height='150%'
                  objectFit='contain'
                  layout='responsive'
                  alt='ornament'
                />
              </div>
              <div className='absolute top-[2600px] -left-32 z-0 block w-[437px] md:top-[2900px] lg:hidden'>
                <NextImage
                  src='/images/pageTim/gradien-6.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt='ornament'
                />
              </div>
              <div className='absolute top-[2750px] right-0 z-0 block w-80 md:top-[3050px] md:w-96 lg:hidden'>
                <NextImage
                  src='/images/pageTim/cloud-8.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt='ornament'
                />
              </div>
            </div>
            <div className='relative z-30 mx-4 mt-9 mb-[159px] flex flex-col items-center justify-center space-y-10  sm:mx-20 lg:mt-[159px]'>
              {teamData.map((v, i) => (
                <TimList key={i} {...v} />
              ))}
            </div>
            <div className='relative flex flex-row items-start'>
              <div className='absolute -top-80 -left-20 hidden w-96 lg:block'>
                <NextImage
                  src='/images/pageTim/gradien.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt='gradien'
                />
              </div>
              <div className='absolute -top-[400px] left-48 hidden w-[600px] lg:block xl:-top-[450px] xl:w-[800px]'>
                <NextImage
                  src='/images/pageTim/cloud-3.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt='cloud'
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
