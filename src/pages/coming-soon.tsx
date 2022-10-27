import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function CommingsoonPage() {
  return (
    <Layout>
      <Seo templateTitle='Coming-Soon' />
      <main>
        <section className='Coming Soon'>
          <div className='relative flex min-h-screen w-full overflow-hidden bg-[#F2F2F2] '>
            <div className='absolute top-4 left-[-20px] h-[282px] w-[227.38px] blur-lg sm:top-0 sm:left-[0px] sm:h-[350px] sm:w-[350px] sm:blur-none  lg:left-0 lg:h-[550px] lg:w-[375px]'>
              <Image alt='/' src='/images/bg-update1.svg' layout='fill' />
            </div>
            <div className='absolute bottom-0 -right-[30px] h-[250px] w-[200px] blur-lg sm:right-20 sm:blur-none lg:h-[287px] lg:w-[239px]'>
              <Image alt='/' src='/images/bg-update2.svg' layout='fill' />
            </div>
            <div className='m-auto'>
              <p className='text-center text-[39.1px] font-semibold text-[#3B71C7] sm:text-[44px] lg:text-6xl'>
                Coming Soon
              </p>
              <p className='pt-5 text-center text-lg font-[600] text-[#3B71C7] sm:text-xl lg:pt-8 lg:text-3xl'>
                <span className='bg-gradient-to-r from-[#487DBC] to-[#60BEE0] bg-clip-text pr-[7px] font-[600] text-transparent'>
                  INI LHO ITS! 2023
                </span>
                akan segera hadir
              </p>
              <p className='text-center text-lg font-[600] text-[#3B71C7] sm:text-xl md:pt-2  lg:pt-3 lg:text-3xl'>
                Stay tune.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
