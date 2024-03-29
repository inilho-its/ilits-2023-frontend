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
} from '@/constant/prestasiData';

// Responsivity down to 300px
export default function PrestasiPage() {
  return (
    <Layout>
      <Seo templateTitle='Prestasi' />
      <main className='m-0 min-h-screen bg-bone-500 p-0'>
        {/* SECTION LANDING */}
        <section className='relative mb-60 p-0 pt-24'>
          {/* ANCHOR BACKGROUND IMAGE AREA */}
          <div className='absolute top-24 w-full'>
            <NextImage
              src='/images/prestasiPage/String-1.png'
              width='100%'
              height='22%'
              objectFit='contain'
              layout='responsive'
              alt='string background'
            />
          </div>
          <div className='absolute -bottom-2/3 -ml-32 w-full sm:ml-0 sm:w-1/2'>
            <NextImage
              src='/images/prestasiPage/Cloud-1.png'
              width='100%'
              height='25%'
              objectFit='contain'
              layout='responsive'
              alt='cloud background'
            />
          </div>
          <div className='absolute -top-[8%] right-1/2 w-[40rem]'>
            <NextImage
              src='/images/prestasiPage/Light-2.png'
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
              src='/images/prestasiPage/Light-1.png'
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
              src='/images/prestasiPage/Person-3.png'
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
              src='/images/prestasiPage/Star-1.png'
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
            <div className='relative top-16 h-[295px] rounded-xl border-2 border-black bg-white sm:h-[343px] md:top-32 md:w-1/2'>
              <div className='h-8 w-full rounded-t-lg border-b-2 border-black bg-yellow-400'>
                {/* HEADER */}
              </div>
              <div className='flex h-[295px] flex-col justify-center sm:h-[343px]'>
                <div className='mx-8'>
                  <div className='mb-8 mt-2 sm:mt-2'>
                    <Typography
                      variant='h3'
                      className='flex-none stroke-bone-1000 text-center font-primary text-[64px] font-bold text-red-400 sm:text-[72px] sm:leading-[90px] md:text-left md:font-bold'
                    >
                      Prestasi
                    </Typography>
                    <Typography
                      variant='title'
                      className='order-1 mt-8 flex-none text-center font-primary text-base font-semibold text-gray-800 sm:mt-0 sm:text-2xl md:text-left'
                    >
                      Institut Teknologi Sepuluh Nopember
                    </Typography>
                  </div>
                  <div className='flex justify-center align-middle md:block'>
                    <div className='m-auto pb-10'>
                      <ButtonLink href='#more' variant='yellow' size='small'>
                        <Typography
                          variant='button'
                          className='flex-none px-1 font-primary text-sm font-medium leading-6 text-gray-800 lg:text-base'
                        >
                          Kenali Lebih Lanjut!
                        </Typography>
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative float-right -mt-[75px] mr-10 w-9 sm:mr-2'>
                <NextImage
                  src='/images/prestasiPage/Star-box.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  alt='star in box'
                  priority
                ></NextImage>
                <div className='absolute top-4 -right-7 w-14'>
                  <NextImage
                    src='/images/prestasiPage/Cursor.png'
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
              src='/images/prestasiPage/Cloud-2.png'
              width='100%'
              height='100%'
              objectFit='contain'
              alt='cloud decoration near banner'
            />
          </div>

          <div className='absolute top-14 right-0 w-1/4'>
            <NextImage
              src='/images/prestasiPage/Cloud-3.png'
              width='100%'
              height='100%'
              objectFit='contain'
              alt='cloud decoration near banner'
            />
          </div>

          {/* ANCHOR CONTENT AREA */}
          <div className='relative h-24 w-full  border-t-2 border-b-2 border-gray-800 bg-green-400 sm:h-32 '>
            <div className='absolute bottom-0 left-1 sm:left-[3%] md:left-[10%] lg:left-[20%]'>
              <div className='w-16 sm:w-24 lg:w-28'>
                <NextImage
                  src='/images/prestasiPage/Megaphone.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  objectPosition='bottom'
                  alt='Banner Megaphone'
                  priority
                ></NextImage>
              </div>
            </div>

            <div
              className='relative flex h-full flex-col justify-center'
              id='more'
            >
              <div className='flex justify-center'>
                <Typography
                  variant='h5'
                  className='stroke-bone-1000 text-2xl font-bold text-white sm:text-4xl'
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
            <div className='mt-5 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-evenly'>
              <div className='w-full border-black px-8 pt-4 pb-8'>
                {/* ONLY SHOW ON DESKTOP */}
                <Typography
                  className='mb-4 hidden font-primary font-bold text-[#121212] lg:block'
                  variant='h5'
                >
                  Info Unik Buat Kamu
                </Typography>
                <Typography
                  className='text-center font-primary font-normal text-[#393939] lg:text-left'
                  variant='caption'
                >
                  Institut Teknologi Sepuluh Nopember (ITS) memiliki Akreditasi
                  A pada BAN-PT. Lalu diikuti dengan 1 Prodi dengan Akreditasi
                  ABET yaitu Departemen Teknik Sistem dan Industri. ITS juga
                  memiliki 8 Prodi berakreditasi ASIIN dan 10 Prodi
                  berakreditasi IABEE.
                </Typography>
              </div>
              <div className='flex w-full justify-center lg:-mt-5'>
                <div className='mx-7 block w-10/12 rounded-lg pb-0 md:w-9/12 lg:m-0 lg:w-full lg:rounded-none lg:p-0'>
                  <NextImage
                    src='/images/prestasiPage/InfoUnik.png'
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
                className='mt-8 mb-4 text-center font-primary text-2xl font-bold text-[#121212] sm:text-3xl lg:hidden'
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
              src='/images/prestasiPage/String-Cloud-1.png'
              width='100%'
              height='100%'
              objectFit='contain'
              objectPosition='top'
              alt='string and cloud background decor'
            ></NextImage>
          </div>
          {/* ANCHOR CONTENT AREA */}
          <div className='relative z-10'>
            <TitleTable
              headerClass='bg-red-500'
              tableClass='bg-red-200'
              className='relative mb-40'
              title='PRESTASI INTERNASIONAL'
              header={HeaderPrestasi}
              items={PrestasiInternasional}
            ></TitleTable>
          </div>
        </section>
        {/* !SECTION INTERNASIONAL END */}

        {/* SECTION NASIONAL */}
        <section className='relative'>
          {/* ANCHOR BACKGROUND AREA */}
          <div className='absolute right-0 top-4 -mr-20 w-full sm:-top-[10%] sm:mr-0 sm:w-9/12'>
            <NextImage
              src='/images/prestasiPage/String-Cloud-2.png'
              width='100%'
              height='100%'
              objectFit='contain'
              objectPosition='top'
              alt='string and cloud background decor'
            ></NextImage>
          </div>
          {/* ANCHOR CONTENT AREA */}
          <div className='relative z-10'>
            <TitleTable
              headerClass='bg-blue-500'
              tableClass='bg-blue-200'
              className='relative mb-40'
              title='PRESTASI NASIONAL'
              header={HeaderPrestasi}
              items={PrestasiNasional}
            ></TitleTable>
          </div>
        </section>
        {/* !SECTION NASIONAL END */}

        {/* SECTION REGIONAL */}
        <section className='relative'>
          {/* ANCHOR BACKGROUND AREA */}
          <div className='absolute -top-[30rem] w-full'>
            <NextImage
              src='/images/prestasiPage/String-Cloud-3.png'
              width='100%'
              height='60%'
              objectFit='contain'
              objectPosition='top'
              alt='string and cloud background decor'
            ></NextImage>
          </div>

          {/* ANCHOR CONTENT AREA */}
          <div className='relative z-10'>
            <TitleTable
              headerClass='bg-yellow-500'
              tableClass='bg-yellow-200'
              className='relative pb-40'
              title='PRESTASI REGIONAL'
              header={HeaderPrestasi}
              items={PrestasiRegional}
            ></TitleTable>
          </div>
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
        className='mb-8 stroke-bone-1000 text-center font-primary text-2xl font-bold text-white sm:mb-10 sm:text-3xl md:text-4xl'
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
              className='stroke-sm-bone-1000 px-2 text-center font-primary text-base font-medium text-white sm:text-base sm:font-bold'
              variant='body'
            >
              {title}
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
                    className={clsxm(
                      'px-4 py-2 text-center font-primary font-medium text-black',
                      indexItem == 0 ? 'font-bold' : ''
                    )}
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
