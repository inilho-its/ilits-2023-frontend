import * as React from 'react';

import styles from './PrestasiPage.module.css';

import clsxm from '@/lib/clsxm';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import TitleTable from '@/components/prestasi/TitleTable';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

// TODO: Add remaining background decorations

export default function PrestasiPage() {
  const HeaderPrestasi = ['Nama Prestasi', 'Penyelenggara', 'Tahun'];
  const PrestasiInternasional = [
    ['Juara 1 Membuat Robot KRI', 'Puspresnas', '2022'],
    ['Juara 1 Membuat Robot KRI', 'Puspresnas', '2022'],
    ['Juara 1 Membuat Robot KRI', 'Puspresnas', '2022'],
    ['Juara 1 Membuat Robot KRI', 'Puspresnas', '2022'],
    ['Juara 1 Membuat Robot KRI', 'Puspresnas', '2022'],
  ];

  const PrestasiNasional = PrestasiInternasional;
  const PrestasiRegional = PrestasiInternasional;

  return (
    <Layout>
      <Seo templateTitle='Prestasi' />
      <main className='m-0 min-h-screen bg-bone-500 p-0'>
        {/* SECTION LANDING */}
        <section className='relative mb-80 p-0'>
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
          <div className='absolute mt-96 w-1/2'>
            <NextImage
              src='/images/prestasi/Cloud-1.png'
              width='100%'
              height='25%'
              objectFit='contain'
              layout='responsive'
              alt='cloud background'
            />
          </div>
          <div className='absolute -top-5 w-1/2'>
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
          <div
            className={clsxm(styles.personLightDimension, 'absolute -top-6')}
          >
            <NextImage
              src='/images/prestasi/Light-1.png'
              width='100%'
              height='100%'
              objectFit='contain'
              layout='responsive'
              alt='person'
              priority
            />
          </div>
          <div className={clsxm(styles.personWidth, 'absolute right-0 mt-6')}>
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
          <div className={clsxm(styles.landingStarLeft, 'absolute mt-64 w-24')}>
            <NextImage
              src='/images/prestasi/Star-1.png'
              width='100%'
              height='100%'
              objectFit='contain'
              layout='responsive'
              alt='person'
            />
          </div>
          {/* ANCHOR CONTENT AREA */}
          <div className='layout'>
            <div
              className={clsxm(
                styles.titleBoxDimension,
                'relative top-32 ml-6 rounded-xl border-2 border-black bg-white'
              )}
            >
              <div className='h-8 w-full rounded-t-lg border-b-2 border-black bg-yellow-400'>
                {/* HEADER */}
              </div>
              <div className='ml-8'>
                <div className='mb-8 mt-10'>
                  <Typography
                    variant='h3'
                    className={clsxm('stroke font-sans', styles.prestasi)}
                  >
                    Prestasi
                  </Typography>
                  <Typography
                    variant='title'
                    className={clsxm('font-sans', styles.its)}
                  >
                    Institut Teknologi Sepuluh Nopember
                  </Typography>
                </div>
                <ButtonLink
                  href='https://www.its.ac.id/id/kuliah-di-its/fakultas-dan-departemen/'
                  variant='yellow'
                  size='small'
                >
                  <Typography
                    variant='button'
                    className={clsxm('font-sans', styles.fakultasButton)}
                  >
                    Lihat Fakultas
                  </Typography>
                </ButtonLink>
              </div>

              <div className='float-right mr-3 mt-3 w-9'>
                <NextImage
                  src='/images/prestasi/Star-box.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  alt='star in box'
                  priority
                ></NextImage>
              </div>
              <div className='absolute mt-7 ml-4 w-full'>
                <NextImage
                  src='/images/prestasi/Cursor.png'
                  width='100%'
                  height='10%'
                  objectFit='contain'
                  objectPosition='right'
                  alt='star in box'
                  priority
                ></NextImage>
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
            <div className={clsxm(styles.megaPhoneLeft, 'absolute bottom-0')}>
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
                  className={clsxm('stroke', styles.ITSFlex)}
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
              <div className='w-full rounded-xl'>
                <NextImage
                  className='rounded-lg'
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

        {/* SECTION PRESTASI */}

        <section>
          {/* ANCHOR BACKGROUND AREA */}

          {/* ANCHOR CONTENT AREA */}
          <TitleTable
            title='prestasi internasional'
            header={HeaderPrestasi}
            items={PrestasiInternasional}
          ></TitleTable>
        </section>

        <section>
          {/* ANCHOR BACKGROUND AREA */}

          {/* ANCHOR CONTENT AREA */}
          <TitleTable
            title='prestasi nasional'
            header={HeaderPrestasi}
            items={PrestasiNasional}
          ></TitleTable>
        </section>

        <section>
          {/* ANCHOR BACKGROUND AREA */}

          {/* ANCHOR CONTENT AREA */}
          <TitleTable
            className='pb-40'
            title='prestasi regional'
            header={HeaderPrestasi}
            items={PrestasiRegional}
          ></TitleTable>
        </section>
        {/* !SECTION PRESTASI END */}
      </main>
    </Layout>
  );
}
