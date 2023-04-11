import * as React from 'react';

import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import DepartemenAkreditasi, {
  DepartemenAkreditasiProps,
} from '@/pages/departemen/fragments/DepartemenAkreditasi';
import DepartemenBidangKeahlian, {
  DepartemenBidangKeahlianProps,
} from '@/pages/departemen/fragments/DepartemenBidangKeahlian';
import DepartemenDayaTampung, {
  DepartemenDayaTampungProps,
} from '@/pages/departemen/fragments/DepartemenDayaTampung';
import DepartemenHeroSection, {
  DepartemenHeroSectionProps,
} from '@/pages/departemen/fragments/DepartemenHeroSection';
import DepartemenKnowMore, {
  DepartemenKnowMoreProps,
} from '@/pages/departemen/fragments/DepartemenKnowMore';

export default function DepartemenTemplate({
  departmentName,
  facultyName,
  buildingName,
  kenaliLebihDesc,
  buildingImg,
  akreditasiImg1,
  akreditasiImg2,
  akreditasiTitle1,
  akreditasiTitle2,
  akreditasiDesc1,
  akreditasiDesc2,
  bidangKeahlian1,
  bidangKeahlian2,
  bidangKeahlian3,
  bidangKeahlian4,
  bidangKeahlian5,
  srcDayaTampungDesktop,
  srcDayaTampungMobile,
}: DepartemenHeroSectionProps &
  DepartemenKnowMoreProps &
  DepartemenAkreditasiProps &
  DepartemenBidangKeahlianProps &
  DepartemenDayaTampungProps) {
  return (
    <div>
      <Seo templateTitle={departmentName} />
      <main>
        <div className='m-auto min-h-screen place-items-center self-center overflow-hidden bg-bone-500'>
          <section className='relative z-20'>
            <div>
              {/* Hero Section Start */}
              <div className='absolute z-10 lg:right-[0rem] lg:mt-[11.5rem] lg:w-[590px]'>
                <NextImage
                  src='/images/pageDepartemen/hero-1.png'
                  width='90%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className='absolute z-10 ml-[2.5rem] mt-[20rem] w-[311px] sm:ml-[13rem] sm:mt-[26rem] md:ml-[16rem] lg:hidden'>
                <NextImage
                  src='/images/pageDepartemen/m-hero1.png'
                  width='90%'
                  height='80%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className='absolute z-0 ml-[0rem] mt-[4rem] w-[120px] lg:hidden'>
                <NextImage
                  src='/images/pageDepartemen/m-hero2.png'
                  width='90%'
                  height='80%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className='absolute z-0 ml-[0rem] mt-[12rem] w-full lg:hidden'>
                <NextImage
                  src='/images/pageDepartemen/m-hero3.png'
                  width='90%'
                  height='80%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className='absolute -z-50 lg:right-[0rem] lg:mt-[4.5rem] lg:w-[250px]'>
                <NextImage
                  src='/images/pageDepartemen/hero-3.png'
                  width='90%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className='absolute z-0 mt-[-9rem] w-0 lg:w-full'>
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
            </div>
            <DepartemenHeroSection
              departmentName={departmentName}
              facultyName={facultyName}
            />
          </section>
          <section id='buttonScrollto' className='relative z-20'>
            <div>
              {/* Know More Section Start */}
              <div className='absolute z-30 mt-[37rem] ml-[2rem] w-[70px] sm:mt-[32rem] sm:ml-[10rem] md:mt-[34rem] md:ml-[14rem] lg:w-[100px] min-lg:right-[43rem] min-lg:mt-[33rem] xl:right-[33.5rem] xl:mt-[10rem]'>
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
            </div>
            <DepartemenKnowMore
              buildingName={buildingName}
              kenaliLebihDesc={kenaliLebihDesc}
              buildingImg={buildingImg}
            />
          </section>
          <section className='relative z-20'>
            <div>
              {/* Akreditasi Section Start */}
              <div className='absolute z-30 mt-[4.5rem] ml-[21rem] w-[50px] sm:top-[0rem] sm:ml-[34rem] md:ml-[38rem] md:mt-[4rem] lg:right-[4rem] lg:mt-[8rem] lg:w-[100px]'>
                <NextImage
                  src='/images/pageDepartemen/akreditasi-1.png'
                  width='100%'
                  height='80%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className='absolute z-30 mt-[49.3rem] w-[150px] sm:mt-[66.95rem] md:mt-[76.5rem] lg:mt-[33.6rem] lg:ml-[0rem] lg:w-[200px]'>
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
            </div>
            <DepartemenAkreditasi
              akreditasiImg1={akreditasiImg1}
              akreditasiImg2={akreditasiImg2}
              akreditasiTitle1={akreditasiTitle1}
              akreditasiTitle2={akreditasiTitle2}
              akreditasiDesc1={akreditasiDesc1}
              akreditasiDesc2={akreditasiDesc2}
            />
          </section>
          <section className='relative z-20'>
            <div>
              {/* Daya Tampung Section Start */}
              <div className='min-[1023px]:hidden absolute z-30 w-0 lg:right-[5rem] lg:mt-[12.1rem] lg:w-[160px]'>
                <NextImage
                  src='/images/pageDepartemen/dayatampung-1.png'
                  width='30%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className='absolute z-30 mt-[32.9rem] w-[130px] sm:mt-[35.25rem] md:mt-[35.25rem] lg:mt-[32.25rem] lg:ml-[0rem] lg:w-[200px]'>
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
            </div>
            <DepartemenDayaTampung
              srcDayaTampungDesktop={srcDayaTampungDesktop}
              srcDayaTampungMobile={srcDayaTampungMobile}
            />
          </section>
          <section className='relative z-20'>
            <div>
              {/* Bidang Keahlian Section Start */}
              <div className='absolute z-30 w-0 md:w-0 lg:mt-[7.4rem] lg:ml-[0rem] lg:w-[150px]'>
                <NextImage
                  src='/images/pageDepartemen/bidangkeahlian-2.png'
                  width='96%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className='absolute z-30 w-0 md:w-0 lg:right-[0rem] min-lg:mt-[18.6rem] min-lg:w-[200px] xl:mt-[15.6rem] '>
                <NextImage
                  src='/images/pageDepartemen/bidangkeahlian-1.png'
                  width='96%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className='absolute w-0 md:w-0 min-lg:top-[-10rem] min-lg:w-full xl:top-[-24.4rem] '>
                <NextImage
                  src='/images/pageDepartemen/bidangkeahlian-3.png'
                  width='86%'
                  height='80%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className='absolute z-30 mt-[1.2rem] ml-[20.5rem] w-[50px] sm:w-0 md:w-0 lg:mt-[2.1rem] lg:ml-[77.5rem] lg:w-[92px]'>
                <NextImage
                  src='/images/pageDepartemen/bidangkeahlian-4.png'
                  width='96%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className='absolute z-0 mt-[2rem] w-full sm:mt-[1rem] md:mt-[0rem] lg:hidden '>
                <NextImage
                  src='/images/pageDepartemen/m-dtredline.png'
                  width='96%'
                  height='78%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              <div className='absolute mt-[24rem] w-full sm:top-[-13rem] md:top-[-30rem] lg:hidden '>
                <NextImage
                  src='/images/pageDepartemen/m-dtyelllowline.png'
                  width='70%'
                  height='100%'
                  objectFit='contain'
                  layout='responsive'
                  alt=''
                />
              </div>
              {/* Bidang Keahlian Section End */}
            </div>
            <DepartemenBidangKeahlian
              bidangKeahlian1={bidangKeahlian1}
              bidangKeahlian2={bidangKeahlian2}
              bidangKeahlian3={bidangKeahlian3}
              bidangKeahlian4={bidangKeahlian4}
              bidangKeahlian5={bidangKeahlian5}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
