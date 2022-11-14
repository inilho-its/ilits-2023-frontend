import { NextRequest, NextResponse } from 'next/server';

import arrayMerge from '@/lib/arrayMerge';
import { getUrlShortener } from '@/lib/getUrlShortener';

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname.split('/')[1];

  const pageList = arrayMerge([
    // Default URL
    [
      'favicons',
      'favicon',
      '_next',
      'fonts',
      'images',
      'svg',
      '',
      '/',
      'favicon.ico',
      'comingsoon',
    ],
    // Pages URL
    [
      'coming-soon',
      'redirect',
      '404',
      '500',
      '',
      'sandbox',
      'prestasi',
      'team',
      'fasilitas',
    ],
  ]);

  if (pageList.includes(path)) {
    return;
  }

  try {
    const res = await getUrlShortener(path);
    return NextResponse.redirect(
      'https://inilho.its.ac.id/redirect?url=' + res.data.url
    );
  } catch {
    // eslint-disable-next-line no-console
    console.error('Error: URL Shortener not found ' + path);
  }
}
