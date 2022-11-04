import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function NotFoundPage() {
  return (
    <Layout>
      <>
        <Seo templateTitle='Not Found' />
        <main>
          <section className='bg-background-cream'>
            <div className='flex h-screen flex-col items-center justify-center text-center'>
              <div className='w-80 sm:w-96'>
                <NextImage
                  src='/images/ilits-logo.png'
                  width='100%'
                  height='50%'
                  layout='responsive'
                  objectFit='contain'
                  alt='logo-ilits'
                  priority
                />
              </div>
              <Typography
                variant='h3'
                color='danger'
                className='whitespace-normal'
              >
                Page not Found
              </Typography>
              <ArrowLink
                className='mt-6 text-primary-blue  md:text-lg'
                href='/'
              >
                Back to Home
              </ArrowLink>
            </div>
          </section>
        </main>
      </>
    </Layout>
  );
}
