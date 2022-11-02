import type { NextRequest } from 'next/server';

import arrayMerge from '@/lib/arrayMerge';
import getUrlShortener from '@/lib/getUrlShortener';

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
      'favicon.ico',
    ],
    // Pages URL
    ['coming-soon'],
  ]);

  if (pageList.includes(path)) {
    return;
  }

  const url = await getUrlShortener(path);

  return url;
}
