import * as React from 'react';

import styles from './PrestasiPage.module.css';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function PrestasiPage() {
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
            />
          </div>
          <div className={`${styles.personLightDimension} absolute -top-6`}>
            <NextImage
              src='/images/prestasi/Light-1.png'
              width='100%'
              height='100%'
              objectFit='contain'
              layout='responsive'
              alt='person'
            />
          </div>
          <div className={`${styles.personWidth} absolute right-0 mt-6`}>
            <NextImage
              src='/images/prestasi/Person-3.png'
              width='100%'
              height='100%'
              objectFit='contain'
              objectPosition='right'
              layout='responsive'
              alt='person'
            />
          </div>
          {/* TODO: Change mainStar to landingStar 
              TODO: Change landingStar position to be closer to the prototype */}
          <div className={`${styles.mainStarLeft} absolute mt-64 w-24`}>
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
              className={`${styles.titleBoxDimension} relative top-32 ml-6 rounded-xl border-2 border-black bg-white`}
            >
              <div className='h-8 w-full rounded-t-lg border-b-2 border-black bg-yellow-400'></div>
              <div className='ml-8'>
                <div className='mb-8 mt-10'>
                  <Typography variant='h3' className={styles.prestasi}>
                    Prestasi
                  </Typography>
                  <Typography variant='title' className={styles.its}>
                    Institut Teknologi Sepuluh Nopember
                  </Typography>
                </div>
                <ButtonLink
                  href='https://www.its.ac.id/id/kuliah-di-its/fakultas-dan-departemen/'
                  variant='yellow'
                  size='small'
                >
                  <Typography className={styles.fakultasButton}>
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
                ></NextImage>
              </div>
            </div>
          </div>
        </section>
        {/* !SECTION LANDING END */}

        {/* SECTION BANNER */}
        <section className='relative m-0 p-0'>
          {/* ANCHOR CONTENT AREA */}
          <div className='relative h-32 w-full border-t-2 border-b-2 border-gray-800 bg-green-400 '>
            <div className={`${styles.megaPhoneLeft} absolute bottom-0`}>
              <div className='w-28'>
                <NextImage
                  src='/images/prestasi/Megaphone.png'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                  objectPosition='bottom'
                  alt='Banner Megaphone'
                ></NextImage>
              </div>
            </div>

            <div className='relative flex h-full flex-col justify-center'>
              <div className='flex justify-center'>
                <Typography variant='h5' className={styles.ITSFlex}>
                  ITS BERPRESTASI LHO!
                </Typography>
              </div>
            </div>
          </div>
        </section>
        {/* !SECTION BANNER END */}
      </main>
    </Layout>
  );
}
