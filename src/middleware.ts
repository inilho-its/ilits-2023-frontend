import { NextRequest, NextResponse } from 'next/server';

import arrayMerge from '@/lib/arrayMerge';
import DateFormat from '@/lib/dateformat';
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
      'tim',
      'fasilitas',
    ],
  ]);

  if (pageList.includes(path)) {
    return;
  }

  const date = DateFormat();
  const ip = req.ip;

  if (path.match(/[~`!@#$%^&()_={}[\]:;,.<>+/?-]/)) {
    // eslint-disable-next-line no-console
    console.error(`[Malicus]  ${date} - ${ip}  : with path ${path}`);
    return NextResponse.redirect('https://inilho.its.ac.id/404');
  }

  try {
    const res = await getUrlShortener(path);
    return NextResponse.redirect(
      'https://inilho.its.ac.id/redirect?url=' + res.data.url
    );
  } catch {
    // eslint-disable-next-line no-console
    console.error(
      `[Error] ${date} - ${ip} : URL Shortener not found ' + ${path}`
    );
  }
}
