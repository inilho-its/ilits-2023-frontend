import * as React from 'react';

import NextImage from '@/components/NextImage';

export default function DepartemenOrnaments() {
  return (
    <div>
      {/* Hero Section Start */}
      <div className='absolute z-10 lg:ml-[53.1rem] lg:mt-[11.5rem] lg:w-[590px]'>
        <NextImage
          src='/images/pageDepartemen/hero-1.png'
          width='90%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute lg:ml-[74.3rem] lg:mt-[4.5rem] lg:w-[250px]'>
        <NextImage
          src='/images/pageDepartemen/hero-3.png'
          width='90%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute z-0 mt-[-9rem] w-full'>
        <NextImage
          src='/images/pageDepartemen/hero-2.png'
          width='50%'
          height='50%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      {/* Hero Section End */}
      {/* Know More Section Start */}
      <div className='absolute z-30 w-[100px] lg:mt-[56rem] lg:ml-[50rem]'>
        <NextImage
          src='/images/pageDepartemen/eye.png'
          width='100%'
          height='80%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      {/* Know More Section End */}
      {/* Akreditasi Section Start */}
      <div className='absolute z-30 w-[100px] lg:mt-[98.7rem] lg:ml-[79.3rem]'>
        <NextImage
          src='/images/pageDepartemen/akreditasi-1.png'
          width='100%'
          height='80%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute z-30 w-[200px] lg:mt-[123.5rem] lg:ml-[0rem]'>
        <NextImage
          src='/images/pageDepartemen/akreditasi-2.png'
          width='96%'
          height='90%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      {/* Akreditasi Section End */}
      {/* Daya Tampung Section Start */}
      <div className='absolute z-30 w-[160px] lg:mt-[147.6rem] lg:ml-[77rem]'>
        <NextImage
          src='/images/pageDepartemen/dayatampung-1.png'
          width='30%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute z-30 w-[200px] lg:mt-[167.78rem] lg:ml-[0rem]'>
        <NextImage
          src='/images/pageDepartemen/dayatampung-2.png'
          width='95%'
          height='90%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      {/* Daya Tampung Section End */}
      {/* Bidang Keahlian Section Start */}
      <div className='absolute z-30 w-[150px] lg:mt-[187.15rem] lg:ml-[0rem]'>
        <NextImage
          src='/images/pageDepartemen/bidangkeahlian-2.png'
          width='96%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute z-30 w-[200px] lg:mt-[195.4rem] lg:ml-[77.5rem]'>
        <NextImage
          src='/images/pageDepartemen/bidangkeahlian-1.png'
          width='96%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute w-full lg:mt-[155.1rem]'>
        <NextImage
          src='/images/pageDepartemen/bidangkeahlian-3.png'
          width='96%'
          height='90%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      <div className='absolute z-30 w-[92px] lg:mt-[181.8rem] lg:ml-[77.5rem]'>
        <NextImage
          src='/images/pageDepartemen/bidangkeahlian-4.png'
          width='96%'
          height='100%'
          objectFit='contain'
          layout='responsive'
          alt=''
        />
      </div>
      {/* Bidang Keahlian Section End */}
    </div>
  );
}
