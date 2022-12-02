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
        'flex flex-col rounded-2xl border-2 border-black bg-neutral-100',
        props.isLeft ? ' lg:flex-row' : ' lg:flex-row-reverse'
      )}
    >
      <div className='w-full grayscale transition duration-200 hover:grayscale-0 lg:w-[750px]'>
        <NextImage
          src={props.imgSrc}
          width='92%'
          height='73%'
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
      <div className='py-5 px-7 text-center lg:text-left'>
        <Typography
          variant='h4'
          as='h4'
          className='text-xl font-bold text-bone-1000 lg:text-5xl'
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
      <main className='min-h-screen bg-bone-500'>
        <section className='relative mb-28'>
          <div className='absolute -top-[520px] left-0 hidden w-screen lg:block'>
            <NextImage
              src='/images/pageTim/Group-7235.png'
              width='100%'
              height='100%'
              objectFit='contain'
              layout='responsive'
              alt='ornament'
            />
          </div>
          <div className='mx-auto flex w-10/12 justify-between'>
            <div className='relative w-[618px] pt-[225px]'>
              <div className='relative z-20 h-[33px] rounded-t-2xl border-2 border-black bg-yellow-400'>
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
              <div className='absolute top-64 -right-64 z-10 hidden w-[500px] lg:block'>
                <NextImage
                  src='/images/pageTim/cloud-1.png'
                  width='100%'
                  height='30%'
                  objectFit='contain'
                  layout='responsive'
                  alt='cloud'
                />
              </div>
              <div className='relative z-10 h-[343px] rounded-b-2xl border-b-2 border-l-2 border-r-2 border-black bg-neutral-100 pt-10 text-center md:pl-12 md:text-left lg:pt-[66px] lg:pl-[66px]'>
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
                <div className='absolute -bottom-16 right-7 z-50 hidden w-32 md:block'>
                  <NextImage
                    src='/images/pageTim/Magnifier.png'
                    width='100%'
                    height='100%'
                    objectFit='contain'
                    layout='responsive'
                    alt='magnifier'
                  />
                </div>
                <div className='absolute -bottom-5 right-2 z-50 block w-12 md:-bottom-16 md:right-7 md:hidden md:w-32'>
                  <NextImage
                    src='/images/pageTim/Magnifier-2.png'
                    width='70%'
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
          <div className='relative border-t-4 border-b-4 border-black bg-red-500'>
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
        <section>
          <div className='relative mx-auto mb-12 w-[356px] pt-[137px] md:w-[618px] lg:mb-32 lg:w-[950px] lg:px-4 xl:w-[1046px]'>
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
                  {/* <div className='absolute -right-80 w-[500px] hidden lg:block'>
                    <NextImage
                      src='/images/pageTim/cloud-1.png'
                      width='100%'
                      height='30%'
                      objectFit='contain'
                      layout='responsive'
                      alt='cloud'
                    />
                  </div> */}
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
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
                        height='87.5%'
                        objectFit='contain'
                        layout='responsive'
                        alt='image'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute right-0 -bottom-5 z-20 w-12 md:-right-11 md:-bottom-16 md:w-28'>
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
            {/* <div className='absolute -right-32 -bottom-28 w-96 hidden lg:block'>
              <NextImage
                src='/images/pageTim/gradien.png'
                width='100%'
                height='100%'
                objectFit='contain'
                layout='responsive'
                alt='gradien'
              />
            </div>
            <div className='absolute -left-80 bottom-0 w-[500px] hidden lg:block'>
              <NextImage
                src='/images/pageTim/cloud-1.png'
                width='100%'
                height='30%'
                objectFit='contain'
                layout='responsive'
                alt='cloud'
              />
            </div> */}
          </div>
        </section>
        <section>
          <div className='relative mx-auto mt-[147.66px] w-10/12 rounded-3xl border-2 border-black bg-green-400'>
            {/* <div className='absolute -top-24 -left-24 w-96 hidden lg:block'>
              <NextImage
                src='/images/pageTim/gradien.png'
                width='100%'
                height='100%'
                objectFit='contain'
                layout='responsive'
                alt='gradien'
              />
            </div>
            <div className='absolute right-0 w-[500px] hidden lg:block'>
              <NextImage
                src='/images/pageTim/cloud-1.png'
                width='100%'
                height='30%'
                objectFit='contain'
                layout='responsive'
                alt='cloud'
              />
            </div> */}
            <div className='relative'>
              <div className='absolute -top-12 -left-8 hidden w-32 md:block'>
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
              <div className='absolute -bottom-20 right-4 hidden w-24 md:block lg:right-6 lg:w-36'>
                <NextImage
                  src='/images/pageTim/Arrow-2.png'
                  width='90%'
                  height='110%'
                  objectFit='contain'
                  layout='responsive'
                  alt='Arrow'
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='mx-auto w-10/12 space-y-10 pt-[159px] pb-[159px]'>
            {teamData.map((v, i) => (
              <TimList key={i} {...v} />
            ))}
            ;
          </div>
        </section>
      </main>
    </>
  );
}
