import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
// import TimGrid from '@/components/TimGrid';
import Typography from '@/components/typography/Typography';

type teamProps = {
  teamName: string;
  imgSrc: string;
  desc: string;
  isLeft: boolean;
};

function TimGrid(props: teamProps) {
  return (
    <div
      className={clsxm(
        'flex rounded-2xl border-2 border-black bg-neutral-100',
        props.isLeft ? ' flex-row' : ' flex-row-reverse'
      )}
    >
      <div className='w-76 rounded-2xl grayscale transition duration-200 hover:grayscale-0'>
        <NextImage
          src={props.imgSrc}
          width='100%'
          height='80%'
          objectFit='contain'
          layout='responsive'
          alt='tim'
          className='rounded-2xl'
        />
      </div>
      <div className='pt-5 pl-7 pr-7'>
        <Typography variant='h4' className='font-bold text-bone-1000'>
          {props.teamName}
        </Typography>
        <Typography variant='body' className='pt-4 text-bone-1000'>
          {props.desc}
        </Typography>
      </div>
    </div>
  );
}

export default function TimPage() {
  return (
    <Layout>
      <Seo templateTitle='Tim' />
      <main className='min-h-screen bg-bone-500'>
        <section>
          <div className='mx-auto flex w-10/12 justify-between'>
            <div className='pt-[225px]'>
              <div className='relative z-20 h-[33px] w-[618px] rounded-t-2xl border-2 border-black bg-yellow-400'>
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
              <div className='relative z-10 h-[343px] w-[618px] rounded-b-2xl border-b-2 border-l-2 border-r-2 border-black bg-neutral-100 pt-[66px] pl-[66px]'>
                <Typography
                  variant='h1'
                  className='stroke font-bold text-lightBlue-400'
                >
                  TIM
                </Typography>
                <Typography
                  variant='h6'
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
                <div className='absolute -bottom-16 right-7 z-50 w-32'>
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
            <div className='w-[431.67px] pt-28'>
              <NextImage
                src='/images/pageTim/Person.png'
                width='100%'
                height='150'
                objectFit='contain'
                layout='responsive'
                alt='person'
              />
            </div>
          </div>
        </section>
        <section>
          <div className='relative border-t-4 border-b-4 border-black bg-red-500'>
            <div className='absolute top-0 left-3 w-32'>
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
                variant='h4'
                className='stroke p-10 text-center font-bold text-neutral-100'
              >
                TIM KEBANGGAAN ITS ??!!
              </Typography>
            </div>
            <div className='absolute top-10 right-16 w-32'>
              <NextImage
                src='/images/pageTim/Eye-1.png'
                width='100%'
                height='100%'
                objectFit='contain'
                layout='responsive'
                alt='eye staring'
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className='mx-auto w-[1046px] pt-[137px]'>
              <div className='rounded-t-2xl border-2 border-black bg-pink-500'>
                <div className='flex flex-row-reverse p-2'>
                  <div className='mr-2 h-[20px] w-[20px] rounded-full border-2 border-black bg-yellow-400'></div>
                  <div className='mr-2 h-[20px] w-[20px] rounded-full border-2 border-black bg-red-400'></div>
                  <div className='mr-2 h-[20px] w-[20px] rounded-full border-2 border-black bg-green-400'></div>
                </div>
              </div>
              <div className='relative h-[414px] border-2 border-t-0 border-black bg-neutral-100'>
                <div className='flex flex-row'>
                  <div className='flex w-1/2 flex-1 flex-col p-10'>
                    <Typography
                      variant='h5'
                      className='font-semibold text-bone-1000'
                    >
                      Info Unik Buat Kamu
                    </Typography>
                    <div className='pt-4'>
                      <Typography variant='body' className='text-bone-1000'>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </Typography>
                      <div className='pt-16'>
                        <ButtonLink
                          href='#'
                          variant='lightBlue'
                          size='medium'
                          round='medium'
                          className='pt-3 pb-3 pl-7 pr-7 text-bone-1000'
                        >
                          Tonton Sekarang!
                        </ButtonLink>
                      </div>
                    </div>
                  </div>
                  <div className='w-[475px]'>
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
                {/* <div className='absolute -right-11'>
                  <NextImage
                    src='/images/pageTim/Cursor.png'
                    width={106}
                    height={119}
                    objectFit='contain'
                    layout='responsive'
                    alt='cursor'
                  />
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='relative mx-auto mt-[147.66px] w-10/12 rounded-3xl border-2 border-black bg-green-400'>
            <div className='absolute -top-12 -left-8 w-32'>
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
              className='stroke p-10 text-center font-bold text-neutral-100'
            >
              Apa Saja Tim di ITS?
            </Typography>
            <div className='absolute -bottom-20 right-6 w-36'>
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
        </section>
        <section>
          <div className='mx-auto w-10/12 space-y-10 pt-[159px] pb-[159px]'>
            <TimGrid
              teamName='TIM ICHIRO'
              imgSrc='/images/pageTim/tim.png'
              desc='Turpis leo id a sed. Lacus amet massa in id viverra ornare porttitor blandit nullam. Vel sit enim vitae enim lobortis mattis arcu. Nec lacus sit nulla turpis sapien morbi sagittis ornare. Leo viverra auctor vitae morbi lacus posuere. At leo malesuada sit adipiscing nisi tincidunt at bibendum. Arcu massa adipiscing in adipiscing tempor.'
              isLeft={true}
            />
            <TimGrid
              teamName='TIM BAYUCARAKA'
              imgSrc='/images/pageTim/tim-r.png'
              desc='Turpis leo id a sed. Lacus amet massa in id viverra ornare porttitor blandit nullam. Vel sit enim vitae enim lobortis mattis arcu. Nec lacus sit nulla turpis sapien morbi sagittis ornare. Leo viverra auctor vitae morbi lacus posuere. At leo malesuada sit adipiscing nisi tincidunt at bibendum. Arcu massa adipiscing in adipiscing tempor.'
              isLeft={false}
            />
            <TimGrid
              teamName='TIM ICHIRO'
              imgSrc='/images/pageTim/tim-c.png'
              desc='Turpis leo id a sed. Lacus amet massa in id viverra ornare porttitor blandit nullam. Vel sit enim vitae enim lobortis mattis arcu. Nec lacus sit nulla turpis sapien morbi sagittis ornare. Leo viverra auctor vitae morbi lacus posuere. At leo malesuada sit adipiscing nisi tincidunt at bibendum. Arcu massa adipiscing in adipiscing tempor.'
              isLeft={true}
            />
            <TimGrid
              teamName='TIM BAYUCARAKA'
              imgSrc='/images/pageTim/tim-r.png'
              desc='Turpis leo id a sed. Lacus amet massa in id viverra ornare porttitor blandit nullam. Vel sit enim vitae enim lobortis mattis arcu. Nec lacus sit nulla turpis sapien morbi sagittis ornare. Leo viverra auctor vitae morbi lacus posuere. At leo malesuada sit adipiscing nisi tincidunt at bibendum. Arcu massa adipiscing in adipiscing tempor.'
              isLeft={false}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
/* 
yg blkg" di absolut in dulu, yg bersentuhan sama gambar lain dibikin relative ke "block" tertentu. z index jg diatur
 */

/*
kl hover jd berwarna:
- default semua image grayscale
- hover:grayscale-0
 */
