import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function CommingsoonPage() {
  return (
    <Layout>
      <Seo templateTitle='Coming-Soon' />

      <main>
        <section className='Coming Soon'>
          <div className='relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900'>
            {/* <!-- Grid background --> */}
            <div className='grid-background absolute inset-0 grid -skew-y-12 scale-150 transform grid-cols-12 gap-2 p-2'>
              {/* <!-- row 1 --> */}
              <div className='col-span-2 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-5 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-1 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-4 animate-pulse rounded bg-gray-800'></div>
              {/* <!-- row 2 --> */}
              <div className='col-span-5 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-3 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-2 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-2 animate-pulse rounded bg-gray-800'></div>
              {/* <!-- row 3 --> */}
              <div className='col-span-4 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-7 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-1 animate-pulse rounded bg-gray-800'></div>

              {/* <!-- row 4 --> */}
              <div className='col-span-4 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-2 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-2 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-2 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-2 animate-pulse rounded bg-gray-800'></div>
              {/* <!-- row 5 --> */}
              <div className='col-span-2 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-5 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-1 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-4 animate-pulse rounded bg-gray-800'></div>

              {/* <!-- row 6 --> */}
              <div className='col-span-4 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-7 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-1 animate-pulse rounded bg-gray-800'></div>

              <div className='col-span-5 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-1 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-3 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-3 animate-pulse rounded bg-gray-800'></div>

              <div className='col-span-2 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-5 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-1 animate-pulse rounded bg-gray-800'></div>
              <div className='col-span-4 animate-pulse rounded bg-gray-800'></div>
            </div>

            <div className='relative'>
              <h2 className='flex flex-row items-center text-4xl font-bold text-white md:text-8xl'>
                Coming
                <div className='relative mx-2 text-sm'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-caret-up-fill text-blue-500'
                    viewBox='0 0 16 16'
                  >
                    <path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' />
                  </svg>
                  <div className='absolute -top-12 -rotate-45 transform text-blue-500'>
                    <p className='rounded-md bg-blue-500 px-2 py-0 text-base font-light text-white'>
                      super
                    </p>
                  </div>
                </div>
                Soon
              </h2>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
