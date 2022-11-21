import * as React from 'react';

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
import TitleTable from '@/pages/prestasi/TitleTable';

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

          <div className='absolute right-0 mt-6 w-[37rem]'>
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
          <div className='absolute right-96 mt-64 w-24'>
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
            <div className='relative top-32 ml-6 h-auto w-1/2 rounded-xl border-2 border-black bg-white'>
              <div className='h-8 w-full rounded-t-lg border-b-2 border-black bg-yellow-400'>
                {/* HEADER */}
              </div>
              <div className='ml-8'>
                <div className='mb-8 mt-10'>
                  <Typography
                    variant='h3'
                    className='stroke flex flex-none items-end font-sans font-black leading-loose text-red-500'
                  >
                    Prestasi
                  </Typography>
                  <Typography
                    variant='title'
                    className='order-1 flex-none text-justify font-sans font-semibold text-gray-800'
                  >
                    Institut Teknologi Sepuluh Nopember
                  </Typography>
                </div>
                <div className='pb-10'>
                  <ButtonLink
                    href='https://www.its.ac.id/id/kuliah-di-its/fakultas-dan-departemen/'
                    variant='yellow'
                    size='small'
                  >
                    <Typography
                      variant='button'
                      className='flex-none pt-1 pb-1 pl-1 pr-1 font-sans text-sm font-bold leading-6 text-gray-800'
                    >
                      Lihat Fakultas
                    </Typography>
                  </ButtonLink>
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
          <div className='relative h-32 w-full border-t-2 border-b-2 border-gray-800 bg-green-400 '>
            <div className='absolute bottom-0 left-[20%]'>
              <div className='w-28'>
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
                  className='stroke text-4xl font-black text-white'
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
              {/* HEADER */}
            </div>
            <div className='flex items-center justify-evenly'>
              <div className='w-full pl-10 pr-10'>
                <Typography className='font-sans font-bold' variant='h6'>
                  Info Unik Buat Kamu
                </Typography>
                <Typography className='font-sans font-medium' variant='caption'>
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
              {/* TODO: Figure out/ask how to round the image */}
              <div className='w-full border-l-2 border-black'>
                <NextImage
                  src='/images/prestasi/Random-People.png'
                  width='100%'
                  height='100%'
                  alt='people getting excited'
                  objectFit='cover'
                  objectPosition='top'
                ></NextImage>
              </div>
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