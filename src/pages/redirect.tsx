import { useRouter } from 'next/router';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function RedirectPage() {
  const router = useRouter();
  const { url } = router.query;
  React.useEffect(() => {
    setTimeout(() => {
      if (router.isReady) {
        if (url) {
          router.replace(url as string);
        } else {
          router.replace('/');
        }
      }
    }, 2000);
  }, [router, url]);

  return (
    <Layout>
      <Seo templateTitle='Loading' />
      <main className='flex justify-center bg-background-cream'>
        <section>
          <div className='layout flex h-screen w-full items-center'>
            <div className='flex flex-col items-center '>
              <div className='w-96'>
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
                variant='title'
                className='font-semibold tracking-widest text-warning-main'
              >
                You are being redirected...
              </Typography>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
