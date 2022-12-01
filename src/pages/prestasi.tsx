import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import {
  HeaderPrestasi,
  PrestasiInternasional,
  PrestasiNasional,
  PrestasiRegional,
} from '@/constant/prestasi';

// Responsivity down to 300px
export default function PrestasiPage() {
  return (
    <Layout>
      <Seo templateTitle='Prestasi' />
      <main className='m-0 min-h-screen bg-bone-500 p-0'>
        {/* SECTION LANDING */}
        <section className='relative mb-60 p-0'>
          {/* ANCHOR BACKGROUND IMAGE AREA */}
          <div className='absolute top-6 w-full'>
            <NextImage
              src='/images/prestasi/String-1.png'
              width='100%'
              height='22%'
              objectFit='contain'
              layout='responsive'
              alt='string background'
            />
          </div>
          <div className='absolute -bottom-2/3 w-1/2'>
            <NextImage
              src='/images/prestasi/Cloud-1.png'
              width='100%'
              height='25%'
              objectFit='contain'
              layout='responsive'
              alt='cloud background'
            />
          </div>
          <div className='absolute -top-[8%] right-1/2 w-[40rem]'>
            <NextImage
              src='/images/prestasi/Light-2.png'
              width='100%'
              height='100%'
              objectFit='contain'
              layout='responsive'
              alt='light background'
              priority
            />
          </div>
          <div className='absolute -top-6 right-56 w-72'>
            <NextImage
              src='/images/prestasi/Light-1.png'
              width='100%'
              height='100%'
              objectFit='contain'
              layout='responsive'
              alt='light near person'
              priority
            />
          </div>

          <div className='absolute right-0 mt-6 md:w-[37rem]'>
            <NextImage
              src='/images/prestasi/Person-3.png'
              width='100%'
              height='100%'
              objectFit='contain'
              objectPosition='right'
              layout='responsive'
              alt='person'
              priority
            />
          </div>
          <div className='absolute right-0 mt-[30rem] w-16 sm:w-24 md:right-96 md:mt-64'>
            <NextImage
              src='/images/prestasi/Star-1.png'
              width='100%'
              height='100%'
              objectFit='contain'
              layout='responsive'
              alt='person'
              priority
            />
          </div>
          {/* ANCHOR CONTENT AREA */}
          <div className='layout'>
            <div className='relative top-16 ml-6 h-[295px] rounded-xl border-2 border-black bg-white sm:h-[343px] md:top-32 md:w-1/2'>
              <div className='h-8 w-full rounded-t-lg border-b-2 border-black bg-yellow-400'>
                {/* HEADER */}
              </div>
              <div className='flex h-[311px] flex-col justify-center'>
                <div className='mx-8'>
                  <div className='mb-8 sm:mt-10'>
                    <Typography
                      variant='h3'
                      className='stroke flex-none text-center font-sans text-5xl font-bold text-red-500 sm:text-[72px] sm:leading-[90px] md:text-left md:font-bold'
                    >
                      Prestasi
                    </Typography>
                    <Typography
                      variant='title'
                      className='order-1 mt-4 flex-none text-center font-sans text-lg font-semibold text-gray-800 sm:text-2xl md:text-left'
                    >
                      Institut Teknologi Sepuluh Nopember
                    </Typography>
                  </div>
                  <div className='flex justify-center align-middle md:block'>
                    <div className='m-auto pb-10'>
                      <ButtonLink
                        href='https://www.its.ac.id/id/kuliah-di-its/fakultas-dan-departemen/'
                        variant='yellow'
                        size='small'
                      >
                        <Typography
                          variant='button'
                          className='flex-none px-1 py-[2px] font-sans text-sm font-semibold text-gray-800 lg:text-base'
                        >
                          Kenali Lebih Lanjut!
                        </Typography>
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative float-right -mt-11 mr-2 w-9'>
                <NextImage
                  src='/images/prestasi/Star-box.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  alt='star in box'
                  priority
                ></NextImage>
                <div className='absolute top-4 -right-7 w-14'>
                  <NextImage
                    src='/images/prestasi/Cursor.png'
                    width='100%'
                    height='100%'
                    objectFit='contain'
                    objectPosition='right'
                    alt='star in box'
                    priority
                  ></NextImage>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* !SECTION LANDING END */}

        {/* SECTION BANNER */}
        <section className='relative mb-32 p-0'>
          {/* ANCHOR BACKGROUND AREA*/}
          <div className='absolute top-14 w-1/6'>
            <NextImage
              src='/images/prestasi/Cloud-2.png'
              width='100%'
              height='100%'
              objectFit='contain'
              alt='cloud decoration near banner'
            />
          </div>

          <div className='absolute top-14 right-0 w-1/4'>
            <NextImage
              src='/images/prestasi/Cloud-3.png'
              width='100%'
              height='100%'
              objectFit='contain'
              alt='cloud decoration near banner'
            />
          </div>

          {/* ANCHOR CONTENT AREA */}
          <div className='relative h-24 w-full  border-t-2 border-b-2 border-gray-800 bg-green-400 sm:h-32 '>
            <div className='absolute bottom-0 left-1 sm:left-[3%] md:left-[10%] lg:left-[20%]'>
              <div className='w-14 sm:w-24 lg:w-28'>
                <NextImage
                  src='/images/prestasi/Megaphone.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  objectPosition='bottom'
                  alt='Banner Megaphone'
                  priority
                ></NextImage>
              </div>
            </div>

            <div className='relative flex h-full flex-col justify-center'>
              <div className='flex justify-center'>
                <Typography
                  variant='h5'
                  className='stroke text-xl font-black text-white sm:text-4xl'
                >
                  ITS BERPRESTASI LHO!
                </Typography>
              </div>
            </div>
          </div>
        </section>
        {/* !SECTION BANNER END */}

        {/* SECTION  INFO UNIK */}
        <section className='relative mb-32 p-0'>
          {/* ANCHOR CONTENT AREA */}
          <div className='layout block min-w-min max-w-4xl rounded-xl border-2 border-black bg-white'>
            <div className='h-8 w-full rounded-t-xl border-b-2 border-black bg-pink-400'>
              <div className='flex justify-end pt-[0.4rem]'>
                <div className='mr-[0.4rem] h-4 w-4 rounded-full border-[1px] border-black bg-green-400'></div>
                <div className='mr-[0.4rem] h-4 w-4 rounded-full border-[1px] border-black bg-red-400'></div>
                <div className='mr-4 h-4 w-4 rounded-full border-[1px] border-black bg-yellow-400'></div>
              </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row lg:items-center lg:justify-evenly'>
              <div className='w-full border-black p-10'>
                {/* ONLY SHOW ON DESKTOP */}
                <Typography
                  className='mb-4 hidden font-sans font-bold lg:block'
                  variant='h5'
                >
                  Info Unik Buat Kamu
                </Typography>
                <Typography
                  className='text-center font-sans font-medium lg:text-left'
                  variant='caption'
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veritatis unde eos, officiis qui consequatur eius sequi dolor
                  deserunt quas sunt quis, pariatur facilis voluptates esse
                  explicabo accusamus natus, repellendus maiores cum quibusdam
                  minima quo optio aperiam nihil! Laudantium repudiandae totam,
                  et quasi molestiae atque velit esse odit perspiciatis quis
                  facilis repellat libero nam iste illum. Numquam, qui!
                  Temporibus voluptas possimus ea quo nulla dignissimos labore,
                  laudantium quasi tenetur odio porro doloremque veniam totam
                  expedita! Dolorum similique error quasi eaque enim?
                </Typography>
              </div>
              <div className='flex w-full justify-center'>
                <div className='mx-7 mt-6 block w-10/12 rounded-lg border-2 border-black pb-0 md:w-9/12 lg:m-0 lg:w-full lg:rounded-none lg:border-0 lg:border-l-2 lg:p-0'>
                  <NextImage
                    src='/images/prestasi/Random-People.png'
                    width='100%'
                    height='100%'
                    alt='people getting excited'
                    objectFit='cover'
                    objectPosition='top'
                    imgClassName='sm:rounded-lg lg:rounded-none lg:rounded-br-lg'
                    priority
                  ></NextImage>
                </div>
              </div>
              {/* ONLY SHOW ON MOBILE */}
              <Typography
                className='mt-14 mb-2 text-center font-sans text-2xl font-bold sm:text-4xl lg:hidden'
                variant='h6'
              >
                Info Unik Buat Kamu!
              </Typography>
            </div>
          </div>
        </section>
        {/* !SECTION INFO UNIK END */}

        {/* SECTION INTERNASIONAL */}
        <section className='relative'>
          {/* ANCHOR BACKGROUND AREA */}
          <div className='absolute -top-28 w-full'>
            <NextImage
              src='/images/prestasi/String-Cloud-1.png'
              width='100%'
              height='100%'
              objectFit='contain'
              objectPosition='top'
              alt='string and cloud background decor'
            ></NextImage>
          </div>
          {/* ANCHOR CONTENT AREA */}
          <TitleTable
            headerClass='bg-red-500'
            tableClass='bg-red-200'
            className='relative mb-40'
            title='PRESTASI INTERNASIONAL'
            header={HeaderPrestasi}
            items={PrestasiInternasional}
          ></TitleTable>
        </section>
        {/* !SECTION INTERNASIONAL END */}

        {/* SECTION NASIONAL */}
        <section className='relative'>
          {/* ANCHOR BACKGROUND AREA */}
          <div className='absolute right-0 -top-[10%] w-8/12'>
            <NextImage
              src='/images/prestasi/String-Cloud-2.png'
              width='100%'
              height='100%'
              objectFit='contain'
              objectPosition='top'
              alt='string and cloud background decor'
            ></NextImage>
          </div>
          {/* ANCHOR CONTENT AREA */}
          <TitleTable
            headerClass='bg-blue-500'
            tableClass='bg-blue-200'
            className='relative mb-40'
            title='PRESTASI NASIONAL'
            header={HeaderPrestasi}
            items={PrestasiNasional}
          ></TitleTable>
        </section>
        {/* !SECTION NASIONAL END */}

        {/* SECTION REGIONAL */}
        <section className='relative'>
          {/* ANCHOR BACKGROUND AREA */}
          <div className='absolute -top-3 w-full'>
            <NextImage
              src='/images/prestasi/String-Cloud-3.png'
              width='100%'
              height='60%'
              objectFit='contain'
              objectPosition='top'
              alt='string and cloud background decor'
            ></NextImage>
          </div>

          {/* ANCHOR CONTENT AREA */}
          <TitleTable
            headerClass='bg-yellow-500'
            tableClass='bg-yellow-200'
            className='relative pb-40'
            title='PRESTASI REGIONAL'
            header={HeaderPrestasi}
            items={PrestasiRegional}
          ></TitleTable>
        </section>
        {/* !SECTION REGIONAL END */}
      </main>
    </Layout>
  );
}

const TitleTable = ({
  title,
  header,
  items,
  className = 'mb-20',
  headerClass,
  tableClass,
}: {
  title: string;
  header: string[];
  items: string[][];
  className?: string;
  headerClass: string;
  tableClass: string;
}): React.ReactElement => {
  return (
    <div className={className}>
      <Typography
        variant='h5'
        className='stroke mb-8 text-center font-sans text-2xl font-bold text-white sm:mb-10 sm:text-3xl md:text-4xl'
      >
        {title}
      </Typography>
      <div className='layout min-h-min max-w-4xl rounded-xl border-2 border-black'>
        {/* HEADER */}
        <div
          className={clsxm(
            'flex h-16 min-h-[4rem] items-center justify-center rounded-t-lg border-b-2 border-black bg-red-500',
            headerClass
          )}
        >
          {header?.map((title, index) => (
            <Typography
              style={{ width: `${100 / header.length}%` }} // we use style  here for readibility (integrating to tailwind results in unneeded complexity)
              key={index}
              className='stroke px-2 text-center font-sans text-sm font-medium text-white sm:text-base sm:font-bold'
              variant='body'
            >
              {title?.toUpperCase()}
            </Typography>
          ))}
        </div>

        {/* CONTENT */}
        {items?.map((item, indexRow) => {
          return (
            // Rounded bottom corners on the last item
            <div
              key={indexRow}
              className={clsxm(
                'flex min-h-[3.5rem] items-center justify-center border-b-2 border-black bg-red-200 sm:min-h-[3rem] ',
                indexRow + 1 == items.length ? 'rounded-b-lg border-b-0' : '',
                tableClass
              )}
            >
              {item?.map((value, indexItem) => {
                return (
                  <Typography
                    key={indexItem}
                    className='px-4 text-center font-sans font-medium text-black'
                    variant='caption'
                    style={{ width: `${100 / header.length}%` }}
                  >
                    {value}
                  </Typography>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
