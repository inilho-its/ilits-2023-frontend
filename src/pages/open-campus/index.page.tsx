import * as React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { MdArrowForwardIos } from 'react-icons/md';

import NextImage from '@/components/NextImage';

export default function OpenCampusPage() {
  return (
    <main>
      <section className='Open Campus'>
        <div className='m-auto flex min-h-screen w-full self-center bg-background-cream'>
          <div className='m-auto flex flex-col'>
            <div className='m-auto flex flex-col'>
              <div className='w-[300px] self-center sm:w-[400px] md:w-[500px] lg:w-[623px]'>
                <NextImage
                  alt='comingsoon'
                  src='/images/comingsoon/comingsoon-img.png'
                  width='100%'
                  height='70%'
                  layout='responsive'
                  objectFit='contain'
                  priority
                />
              </div>
              <div className='stroke-sm px-7 pt-7 text-center text-3xl font-bold sm:px-3 sm:text-4xl md:pt-6 md:text-5xl lg:pt-6 lg:text-6xl'>
                <p className='text-dark'>
                  <span className='leading-none text-danger-main md:leading-[68px]'>
                    Pendaftaran Open Campus <br />
                    sudah ditutup
                  </span>
                </p>
              </div>
              <p className='pt-5 pb-4 text-center text-xs font-semibold text-dark sm:text-sm md:pb-4 md:pt-6 md:text-base lg:pt-4'>
                meanwhile, have a look at these :
              </p>
            </div>
            <div className='inline-flex justify-center text-neutral-100'>
              <a href='https://www.instagram.com/inilhoits'>
                <div className='flex flex-row rounded-md bg-primary-main p-3 sm:py-3 sm:px-4'>
                  <AiOutlineInstagram className='self-center text-sm md:text-xl' />
                  <p className='self-center px-2 text-xs font-semibold sm:text-sm md:text-base lg:text-lg'>
                    Instagram Ini Lho ITS! 2023
                  </p>
                  <MdArrowForwardIos className='self-center text-sm font-semibold md:text-xl' />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
