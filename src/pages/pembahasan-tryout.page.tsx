import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function PembahasanTryout() {
  return (
    <Layout withFooter={false} withNavbar={false}>
      <Seo templateTitle='Pembahasan Tryout Nasional' />
      <main className='relative bg-bone-500'>
        <section>
          <NextImage
            className='absolute top-0 right-0 w-[15%] lg:w-[9%]'
            src='/images/tiket/eye.png'
            width='95%'
            height='100%'
            layout='responsive'
            alt=''
          />
          <NextImage
            className='absolute bottom-0 w-[15%] '
            src='/images/tiket/person.png'
            width='43%'
            height='100%'
            layout='responsive'
            alt=''
          />
          <div className='absolute flex w-full items-center justify-center pt-16 sm:justify-start sm:pt-20 sm:pl-20 md:pt-16 md:pl-20 lg:pl-24 lg:pt-8'>
            <NextImage
              className='w-[20%]'
              src='/images/ilits-logo.png'
              width='100%'
              height='63%'
              layout='responsive'
              alt=''
            />
            <Typography
              variant='h6'
              className='text-base font-semibold sm:text-xl md:text-[24px] lg:pl-10'
            >
              Pembahasan Tryout Nasional
            </Typography>
          </div>
          <div className='flex min-h-screen w-full items-center justify-center px-5 md:py-56 lg:py-64'>
            <div className='relative'>
              <NextImage
                className='absolute -right-2 -bottom-5 w-[15%] sm:-bottom-12 sm:-right-10 lg:w-[15%]'
                src='/images/tiket/magnifier.png'
                width='85%'
                height='100%'
                layout='responsive'
                alt=''
              />
              <div className='flex h-9 w-full items-center justify-end gap-x-3 rounded-t-2xl bg-dark pr-5 md:h-12 md:pr-8'>
                <div className='h-3 w-3 rounded-full bg-green-300 md:h-4 md:w-4'></div>
                <div className='h-3 w-3 rounded-full bg-red-300 md:h-4 md:w-4'></div>
                <div className='h-3 w-3 rounded-full bg-yellow-300 md:h-4 md:w-4'></div>
              </div>
              <div className='rounded-b-2xl border-4 border-dark bg-white px-6 py-8 sm:p-10 md:p-16 lg:px-32 lg:py-16'>
                <Typography
                  variant='h4'
                  className='stroke max-w-xl pb-4 text-2xl font-bold text-red-300 sm:text-3xl md:text-4xl lg:text-5xl'
                >
                  Pembahasan Tryout Nasional!
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
