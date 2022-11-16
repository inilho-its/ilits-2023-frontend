import { AppProps } from 'next/app';
// EXPANSION CHANGES: 2 lines below
import Router from 'next/router';
import nProgress from 'nprogress';

import '@/styles/globals.css';
// EXPANSION CHANGES: line below
import '@/styles/nprogress.css';

import DismissableToast from '@/components/DismissableToast';

// EXPANSION CHANGES: 3 lines below
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DismissableToast />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
