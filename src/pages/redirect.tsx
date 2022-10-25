import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function RedirectPage() {
  return (
    <Layout>
      <Seo templateTitle='Loading' />
      <main className='flex justify-center bg-background-cream'>
        <section>
          <div className='layout flex h-screen w-full items-center'>
            <div className='flex flex-col items-center '>
              <div className='w-72'>
                <Image
                  src='/images/ilits-logo.svg'
                  width='100%'
                  height='50%'
                  layout='responsive'
                  objectFit='contain'
                  alt='logo-ilits'
                />
              </div>
              <Typography as='h3' variant='h3' className='text-primary-yellow'>
                You are being redirected...
              </Typography>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
