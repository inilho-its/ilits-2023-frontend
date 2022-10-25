import { useRouter } from 'next/router';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import apiMock from '@/lib/apiMock';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

import LoadingPage from '@/pages/redirect';
type ShortenerData = {
  id: string;
  url: string;
  alias: string;
};
type ApiReturnUrl = {
  shortener: ShortenerData;
  message?: string;
};
export default function NotFoundPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [status, setStatus] = React.useState(true);
  const router = useRouter();

  const redirect = React.useCallback(() => {
    const path = router.asPath;
    try {
      apiMock
        .get<ApiReturnUrl>(`/shortener${path}`)
        .then((res) => {
          if (res.status === 200) {
            setTimeout(() => router.push(res.data.shortener.url), 3000);
          }
        })
        .catch(() => {
          setStatus(false);
        });
    } finally {
      setIsLoading(false);
    }
    // Redirect to loading page
  }, [router]);

  React.useEffect(() => {
    // Detected path router
    redirect();
    window.addEventListener('focus', redirect);
    return () => {
      window.removeEventListener('focus', redirect);
    };
  }, [redirect]);

  React.useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Layout>
      {!status ? (
        <>
          <Seo templateTitle='Not Found' />
          <main>
            <section className='bg-white'>
              <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
                <RiAlarmWarningFill
                  size={60}
                  className='drop-shadow-glow animate-flicker text-red-500'
                />
                <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
                <ArrowLink className='mt-4 md:text-lg' href='/'>
                  Back to Home
                </ArrowLink>
              </div>
            </section>
          </main>
        </>
      ) : (
        <>
          <Seo templateTitle='Redirected' />
          <main>
            <LoadingPage />
          </main>
        </>
      )}
    </Layout>
  );
}
