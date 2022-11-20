import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function TestPage() {
  return (
    <Layout>
      <Seo templateTitle='Test' />
      <main className='min-h-screen bg-bone-500 pt-24 pb-72'>
        {/* Section 1 Start*/}
        <section className='relative flex justify-center'>
          {/* Image Area Start */}
          <div className='absolute top-0 w-full'>
            <NextImage
              src='/images/pageTim/cloud-1.png'
              width='100%'
              height='25%'
              objectFit='contain'
              layout='responsive'
              alt='Lol'
            />
          </div>
          <div className='absolute -top-24 right-14 w-96'>
            <NextImage
              src='/images/pageTim/Arrow.png'
              width='100%'
              height='25%'
              objectFit='contain'
              layout='responsive'
              alt='Lol'
            />
          </div>
          {/* Image Area End */}
          {/* Content Area Start */}
          {/* !! Only apply className 'layout' in Content Area !!*/}
          <div className='layout flex justify-between'>
            <div className='relative z-10 h-72 w-full max-w-[600px] bg-yellow-500 pt-5 pl-4'>
              <Typography variant='h1' className='text-black'>
                Tim 2023
              </Typography>
            </div>
            <div className='relative z-10 h-72 w-full max-w-[600px] bg-blue-500 pt-5 pl-4'>
              <Typography variant='h1' className='text-yellow-500'>
                Fasilitas 2023
              </Typography>
            </div>
          </div>
          {/* Content Area End */}
        </section>
        {/* Section 1 End*/}

        {/* Section 2 Start*/}
        <section className='relative top-24 flex justify-center'>
          {/* Image Area Start */}
          <div className='absolute top-0 w-full'>
            <NextImage
              src='/images/pageTim/Eye-1.png'
              width='100%'
              height='25%'
              objectFit='contain'
              layout='responsive'
              alt='Lol'
            />
          </div>
          <div className='absolute top-32 right-24 w-96'>
            <NextImage
              src='/images/pageTim/Magnifier.png'
              width='100%'
              height='25%'
              objectFit='contain'
              layout='responsive'
              alt='Lol'
            />
          </div>
          {/* Image Area End */}
          {/* Content Area Start */}
          {/* !! Only apply className 'layout' in Content Area !!*/}
          <div className='layout flex justify-center'>
            <div className='relative z-10 h-72 w-full max-w-[600px] bg-yellow-500 pt-5 pl-4'>
              <Typography variant='h1' className='text-black'>
                Section 2
              </Typography>
            </div>
          </div>
          {/* Content Area End */}
        </section>
        {/* Section 2 End*/}
      </main>
    </Layout>
  );
}
