import { NextRequest, NextResponse } from 'next/server';

import arrayMerge from '@/lib/arrayMerge';
import DateFormat from '@/lib/dateformat';
import { getUrlShortener } from '@/lib/getUrlShortener';

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.includes('pembahasan-tryout')) {
    const MyticketUrl = new URL('/welcome-forda/myticket', req.url).href;
    if (req.cookies.get('nomor_pendaftaran') === undefined)
      return NextResponse.redirect(MyticketUrl);
    else {
      const res = await fetch(
        `https://inilho.its.ac.id/api/forda/order/cekorder/${req.cookies.get(
          'nomor_pendaftaran'
        )}`
      ).then(async (res) => await res.json());
      if (res.status === false) return NextResponse.redirect(MyticketUrl);
      else if (res.data.status.status === 'pembayaran berhasil diverifikasi')
        return NextResponse.next();
      else return NextResponse.redirect(MyticketUrl);
    }
  }
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
      'beasiswa',
      'alumni',
      'open-campus',
      'pembayaran',
      'eventual',
      'fakultas',
      'pembayaran',
      'merchandise',
      'welcome-forda',
      'pembahasan-tryout',
    ],
  ]);

  if (pageList.includes(path)) {
    return;
  }

  const date = DateFormat();
  const ip = req.ip;

  if (path.match(/[~`!@#$%^()={}[\]:;<>+/?]/)) {
    // eslint-disable-next-line no-console
    console.error(`[Malicious]  ${date} - ${ip}  : with path ${path}`);
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
