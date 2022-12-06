import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from '@tanstack/react-query';
import { AppProps } from 'next/app';
// EXPANSION CHANGES: 2 lines below
import Router from 'next/router';
import nProgress from 'nprogress';
import * as React from 'react';

import '@/styles/globals.css';
// EXPANSION CHANGES: line below
import '@/styles/nprogress.css';

import axiosClient from '@/lib/axios';

import DismissableToast from '@/components/DismissableToast';

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await axiosClient.get(`${queryKey?.[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

// EXPANSION CHANGES: 3 lines below
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DismissableToast />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
