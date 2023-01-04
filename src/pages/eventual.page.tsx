import * as React from 'react';
import { HiOutlineDownload } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const Tab1Content = () => {
  return (
    <div>
      {/* Text Box Tab 1 */}
      <div className='mx-2 md:mx-0'>
        <div className='relative mx-auto flex min-h-[280px] max-w-[330px] items-center justify-center rounded-[20px] border-2 border-neutral-1000 bg-neutral-100 px-8 py-14 text-justify text-sm font-medium md:min-h-[250px] md:max-w-2xl md:py-0 md:px-14 md:pt-4 md:text-lg xl:min-h-[228px] xl:max-w-[1049px] xl:px-28'>
          <div className='absolute -top-5 flex h-14 w-full max-w-[829.37px] items-center justify-center rounded-full border-2 border-neutral-1000 bg-yellow-300 px-4 text-center text-2xl font-bold leading-none md:-top-10 md:h-[72px] md:px-0 md:text-[32px] md:font-semibold'>
            Visit
          </div>
          Kegiatan yang diselenggarakan oleh panitia Ini Lho ITS! berbentuk
          roadshow dan berisi pengenalan kampus, departemen, dan lingkungan ITS
          secara general dan menyebarkan semangat perguruan tinggi kepada
          siswa/siswi SMA/SMK sederajat di berbagai daerah yang bekerja sama
          dengan forum daerah (Forda).
        </div>
      </div>

      {/* Image Tab 1 */}
      <div className='mt-14 flex flex-col items-center justify-center gap-6 md:mt-20 xl:flex-row'>
        <div className='w-52 md:w-[38rem]'>
          <NextImage
            src='/images/eventualPage/tab2-image-1.png'
            width='100%'
            height='82%'
            layout='responsive'
            objectFit='contain'
            alt='tab2-image-1'
          />
        </div>
        <div className='w-52 md:w-[38rem]'>
          <NextImage
            src='/images/eventualPage/tab2-image-2.png'
            width='100%'
            height='82%'
            layout='responsive'
            objectFit='contain'
            alt='tab2-image-2'
          />
        </div>
      </div>
      {/* Jumbotron Tab 1 */}
      <div className='relative z-20 mt-14 flex h-[244px] w-screen items-center justify-center border-b-2 border-t-2 border-bone-1000  bg-lightBlue-500 md:mt-20 md:h-[384px]'>
        <div className='absolute top-0 -left-1 -z-10 w-[4.3rem] md:w-36 xl:w-[8rem]'>
          <NextImage
            src='/images/eventualPage/star-1.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='star-1'
          />
        </div>
        <div className='absolute left-5 -bottom-2 -z-10 w-20 md:left-32 md:-bottom-[1.1rem] md:w-36 xl:-bottom-[0.9rem] xl:w-32'>
          <NextImage
            src='/images/eventualPage/calendar-1.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='calendar-1'
          />
        </div>
        <div className='absolute -bottom-1 right-2 -z-10 md:w-52 xl:w-[17rem]'>
          <NextImage
            src='/images/eventualPage/person-2.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='person-2'
          />
        </div>
        <div className='absolute bottom-0 -right-1 -z-10 block w-32 md:hidden'>
          <NextImage
            src='/images/eventualPage/smolperson-1.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='smolperson-1'
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Typography
            variant='h4'
            className='stroke md:stroke px-11 text-center text-2xl font-bold leading-none text-white md:text-[48px] md:leading-[64px]  lg:px-60'
          >
            Ayo Jangan Lewatkan Keseruan Visit ILITS 2023!
          </Typography>
          <ButtonLink
            variant='bone'
            size='large'
            href='/welcome-forda'
            className='font-semibol mt-8 hidden md:block'
          >
            Daftar Sekarang
          </ButtonLink>
          <ButtonLink
            variant='bone'
            size='small'
            href='/welcome-forda'
            className='mt-8 block font-semibold md:hidden'
          >
            Daftar Sekarang
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
const Tab2Content = () => {
  return (
    <div>
      {/* Text Box Tab 2 */}
      <div className='mx-4 md:mx-0'>
        <div className='relative mx-auto flex min-h-[530px] w-full max-w-[330px] items-center justify-center rounded-[20px] border-2 border-neutral-1000 bg-neutral-100 px-8 py-14 text-justify text-sm font-medium md:min-h-[500px] md:max-w-2xl md:py-0 md:px-14 md:pt-4 md:text-lg xl:min-h-[384px] xl:max-w-[1049px] xl:px-28'>
          <div className='absolute -top-10 flex h-20 w-full max-w-[829.37px] items-center justify-center rounded-full border-2 border-neutral-1000 bg-yellow-300 px-4 text-center text-2xl font-bold leading-none md:h-[72px] md:px-0 md:text-[32px] md:font-semibold'>
            Apa Itu Open Campus Nirwana Asa?
          </div>
          Open Campus terdiri dari 3 sub-event, yaitu: ITS Fair, Faculty and
          Departemen Day, dan One Day Lecture. ITS Fair adalah Suatu kegiatan
          pengenalan ITS secara umum meliputi jalur masuk ITS (SNMPTN, SBMPTN,
          SKMP), UKT ITS, beasiswa di ITS, prestasi, hingga talkshow dengan
          pembicara hebat dengan topik yang disesuaikan dengan kebutuhan
          peserta. Faculty and Department Day adalah Kegiatan yang dilakukan
          dalam satu hari untuk mengenalkan fakultas dan departemen yang ada di
          ITS kepada siswa/siswi SMA/SMK sederajat. Terakhir, One Day Lecture
          adalah Kegiatan yang dilakukan selama dua hari untuk memberikan
          pengalaman secara nyata mengenai pembelajaran saat kuliah kepada
          siswa/siswi SMA/SMK sederajat.
        </div>
      </div>

      {/* Image Tab 2 */}
      <div className='mt-14 flex flex-col items-center justify-center gap-6 md:mt-20 xl:flex-row'>
        <div className='w-52 md:w-[38rem]'>
          <NextImage
            src='/images/eventualPage/tab2-image-1.png'
            width='100%'
            height='82%'
            layout='responsive'
            objectFit='contain'
            alt='tab2-image-1'
          />
        </div>
        <div className='w-52 md:w-[38rem]'>
          <NextImage
            src='/images/eventualPage/tab2-image-2.png'
            width='100%'
            height='82%'
            layout='responsive'
            objectFit='contain'
            alt='tab2-image-2'
          />
        </div>
      </div>
      {/* Jumbotron Tab 2 */}
      <div className='relative z-20 mt-14 flex h-[244px] w-screen items-center justify-center border-b-2 border-t-2 border-bone-1000  bg-lightBlue-500 md:mt-20 md:h-[384px]'>
        <div className='absolute top-0 -left-1 -z-10 w-[4.3rem] md:w-36 xl:w-[8rem]'>
          <NextImage
            src='/images/eventualPage/star-1.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='star-1'
          />
        </div>
        <div className='absolute left-5 -bottom-2 -z-10 w-20 md:left-32 md:-bottom-[1.1rem] md:w-36 xl:-bottom-[0.9rem] xl:w-32'>
          <NextImage
            src='/images/eventualPage/calendar-1.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='calendar-1'
          />
        </div>
        <div className='absolute -bottom-1 right-2 -z-10 md:w-52 xl:w-[17rem]'>
          <NextImage
            src='/images/eventualPage/person-2.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='person-2'
          />
        </div>
        <div className='absolute bottom-0 -right-1 -z-10 block w-32 md:hidden'>
          <NextImage
            src='/images/eventualPage/smolperson-1.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='smolperson-1'
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Typography
            variant='h4'
            className='stroke md:stroke px-11 text-center text-2xl font-bold leading-none text-white md:text-[48px] md:leading-[64px]  lg:px-60'
          >
            Ayo Jangan Lewatkan Keseruan Open Campus ILITS 2023!
          </Typography>
          <ButtonLink
            variant='bone'
            size='large'
            href='/open-campus'
            className='font-semibol mt-8 hidden md:block'
          >
            Daftar Sekarang
          </ButtonLink>
          <ButtonLink
            variant='bone'
            size='small'
            href='/open-campus'
            className='mt-8 block font-semibold md:hidden'
          >
            Daftar Sekarang
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
const Tab3Content = () => {
  return (
    <div>
      {/* Text Box Tab 3 */}
      <div className='mx-2 md:mx-0'>
        <div className='relative mx-auto flex min-h-[280px] max-w-[330px] items-center justify-center rounded-[20px] border-2 border-neutral-1000 bg-neutral-100 px-10 py-14 text-justify text-sm font-medium md:min-h-[250px] md:max-w-2xl md:py-0 md:px-14 md:pt-4 md:text-lg xl:min-h-[228px] xl:max-w-[1049px] xl:px-28'>
          <div className='absolute -top-5 flex h-14 w-full max-w-[829.37px] items-center justify-center rounded-full border-2 border-neutral-1000 bg-yellow-300 px-4 text-center text-2xl font-bold leading-none md:-top-10 md:h-[72px] md:px-0 md:text-[32px] md:font-semibold'>
            Welcome Forum Daerah
          </div>
          Salah satu acara utama INI LHO ITS! yang diselenggarakan secara
          offline di berbagai daerah di Indonesia oleh Panitia INI LHO ITS! 2023
          yang bekerja sama dengan Forum Daerah (Forda) dengan kegiatan utama
          yaitu Try Out.
        </div>
      </div>

      {/* Image Tab 3 */}
      <div className='mt-14 flex flex-col items-center justify-center gap-6 md:mt-20 xl:flex-row'>
        <div className='w-52 md:w-[38rem]'>
          <NextImage
            src='/images/eventualPage/tab2-image-1.png'
            width='100%'
            height='82%'
            layout='responsive'
            objectFit='contain'
            alt='tab2-image-1'
          />
        </div>
        <div className='w-52 md:w-[38rem]'>
          <NextImage
            src='/images/eventualPage/tab2-image-2.png'
            width='100%'
            height='82%'
            layout='responsive'
            objectFit='contain'
            alt='tab2-image-2'
          />
        </div>
      </div>

      {/* Jumbotron Tab 3 */}
      <div className='relative z-20 mt-14 flex h-[265px] w-screen items-center justify-center border-b-2 border-t-2 border-bone-1000  bg-lightBlue-500 sm:h-[384px] md:mt-20'>
        <div className='absolute top-0 -left-1 -z-10 w-[3.54rem] md:w-36 xl:w-[8rem]'>
          <NextImage
            src='/images/eventualPage/star-1.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='star-1'
          />
        </div>
        <div className='absolute left-5 -bottom-2 -z-10 w-20 md:left-32 md:-bottom-[1.1rem] md:w-36 xl:-bottom-[0.9rem] xl:w-32'>
          <NextImage
            src='/images/eventualPage/calendar-1.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='calendar-1'
          />
        </div>
        <div className='absolute -bottom-1 right-2 -z-10 md:w-52 xl:w-[17rem]'>
          <NextImage
            src='/images/eventualPage/person-2.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='person-2'
          />
        </div>
        <div className='absolute bottom-0 -right-1 -z-10 block w-32 md:hidden'>
          <NextImage
            src='/images/eventualPage/smolperson-1.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='smolperson-1'
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Typography
            variant='h4'
            className='stroke md:stroke px-11 text-center text-2xl font-bold leading-[28px] text-white sm:leading-[64px] md:text-[48px]  lg:px-60'
          >
            Udah Siap Ujian Belum? Yuk Langsung Daftar WELCOME ILITS 2023!
          </Typography>
          <div className='flex flex-col gap-2 sm:flex-row sm:gap-4'>
            <ButtonLink
              variant='bone'
              size='large'
              href='/welcome-forda'
              className='font-semibol mt-8 hidden md:block'
            >
              Daftar Sekarang
            </ButtonLink>
            <ButtonLink
              variant='bone'
              size='small'
              href='/welcome-forda'
              className='mt-4 block font-semibold sm:mt-8 md:hidden'
            >
              Daftar Sekarang
            </ButtonLink>
            <ButtonLink
              variant='lightBlue'
              size='large'
              href='/welcome-forda/myticket'
              className='font-semibol mt-8 hidden md:block'
            >
              My Ticket
            </ButtonLink>
            <ButtonLink
              variant='lightBlue'
              size='small'
              href='/welcome-forda/myticket'
              className='block text-center font-semibold sm:mt-8 md:hidden'
            >
              My Ticket
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EventualPage() {
  const [tab, setTab] = React.useState(3);

  return (
    <Layout>
      <Seo templateTitle='Eventual' />
      <main className='bg-bone-500'>
        {/* Section 1 Start*/}
        <section className='relative'>
          {/* Img Area 1 Start*/}
          <div>
            {/* Desktop Img Area 1 */}
            <div className='absolute top-0 hidden w-full md:block'>
              <NextImage
                src='/images/eventualPage/string-1.png'
                width='100%'
                height='27%'
                layout='responsive'
                objectFit='contain'
                alt='string-1'
              />
            </div>
            <div className='absolute -bottom-[8.2rem] hidden w-full md:block'>
              <NextImage
                src='/images/eventualPage/ribbon-1.png'
                width='100%'
                height='30%'
                layout='responsive'
                objectFit='contain'
                alt='ribbon-1'
              />
            </div>
            {/* Mobile Img Area 1 */}
            <div className='absolute -top-10 block w-full md:hidden'>
              <NextImage
                src='/images/eventualPage/smolstring-1.png'
                width='100%'
                height='65%'
                layout='responsive'
                objectFit='contain'
                alt='smolstring-1'
              />
            </div>
            <div className='absolute -bottom-44 block w-full md:hidden'>
              <NextImage
                src='/images/eventualPage/smolribbon-1.png'
                width='100%'
                height='80%'
                layout='responsive'
                objectFit='contain'
                alt='smolribbon-1'
              />
            </div>
            <div className='absolute top-56 -right-0 block w-1 md:hidden'>
              <NextImage
                src='/images/eventualPage/smolcalendar-1.png'
                width='55%'
                height='70%'
                layout='responsive'
                objectFit='contain'
                alt='smolcalendar-1'
              />
            </div>
          </div>
          {/* Img Area 1 End*/}
          <div className='layout relative z-10 flex flex-col items-center md:flex-row md:items-start md:justify-between'>
            <div className='mt-40 text-center md:mt-56 md:text-left'>
              <Typography
                variant='h2'
                className='stroke-sm md:stroke text-5xl font-bold leading-none text-yellow-500 md:text-[72px] md:leading-[90px]'
              >
                Eventual
              </Typography>
              <Typography
                variant='h6'
                className='mt-2 text-sm font-bold leading-none md:mt-0 md:text-[24px] md:leading-[32px]'
              >
                INI LHO ITS 2023
              </Typography>
              <div className='mt-20 mb-16 flex flex-col items-center gap-4 md:mb-0 xl:mt-8 xl:flex-row xl:gap-6'>
                {/* Desktop Button Hero */}
                <ButtonLink
                  variant='orange'
                  round='medium'
                  size='large'
                  href='#more'
                  className='hidden w-max font-semibold md:inline-flex'
                >
                  Kenali Lebih Lanjut!
                </ButtonLink>
                <ButtonLink
                  variant='bone'
                  round='medium'
                  size='large'
                  href='https://drive.google.com/file/d/1yOeCZb8w08BSFO5gbmH8C8XLBtkw2X4H/view'
                  className='hidden w-max font-semibold md:inline-flex'
                  leftIcon={HiOutlineDownload}
                >
                  Unduh Guidebook
                </ButtonLink>
                {/* Moblie Button Hero */}
                <ButtonLink
                  variant='orange'
                  round='medium'
                  size='small'
                  href='#more'
                  className='inline-flex w-max font-semibold md:hidden'
                >
                  Kenali Lebih Lanjut!
                </ButtonLink>
                <ButtonLink
                  variant='bone'
                  round='medium'
                  size='small'
                  href='https://drive.google.com/file/d/1yOeCZb8w08BSFO5gbmH8C8XLBtkw2X4H/view'
                  className='inline-flex w-max font-semibold md:hidden'
                  leftIcon={HiOutlineDownload}
                >
                  Unduh Guidebook
                </ButtonLink>
              </div>
            </div>
            <div>
              <div className='md:mt-36 md:block md:w-[425px] xl:mt-24 xl:w-[553.91px]'>
                <NextImage
                  src='/images/eventualPage/person-1.png'
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='contain'
                  alt='person-1'
                />
              </div>
            </div>
          </div>
        </section>
        {/* Section 1 End */}
        {/* Section 2 Start*/}
        <section className='relative mt-20 overflow-hidden'>
          <div className='relative z-20 flex h-24 w-screen items-center justify-center border-b-2 border-t-2  border-bone-1000 bg-yellow-500 md:h-36'>
            <div className='absolute -top-[0.2rem] left-0 -z-10 w-[4.5rem] md:-top-[0.4rem] md:w-48'>
              <NextImage
                src='/images/eventualPage/arrow-1.png'
                width='90%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                alt='arrow-1'
              />
            </div>
            <div className='absolute bottom-0 right-10 -z-10 w-[4rem] md:w-32'>
              <NextImage
                src='/images/eventualPage/eye-1.png'
                width='100%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                alt='eye-1'
              />
            </div>
            <Typography
              variant='h4'
              className='stroke md:stroke px-11 text-center text-2xl font-bold leading-[32px] text-white md:px-0 md:text-[48px]  md:leading-[64px]'
            >
              Yuk, Kepoin Kita Lebih Lanjut!
            </Typography>
          </div>
        </section>
        {/* Section 2 End */}
        {/* Section 3 Start*/}
        <section
          className='relative z-10 overflow-hidden py-24 md:mt-24'
          id='more'
        >
          {/* Img Area 3 Start*/}
          <div>
            {/* Desktop Img Area 3 */}

            {/* Mobile Img Area 3 */}
            <div className='absolute -top-52 block w-full md:hidden'>
              <NextImage
                src='/images/eventualPage/smolstring-2.png'
                width='60%'
                height='100%'
                layout='responsive'
                objectFit='contain'
                alt='smolstring-2'
              />
            </div>
            <div className='absolute top-80 block w-44 md:hidden'>
              <NextImage
                src='/images/eventualPage/smolcloud-1.png'
                width='100%'
                height='40%'
                layout='responsive'
                objectFit='contain'
                alt='smolcloud-1'
              />
            </div>
            <div className='absolute top-44 block w-full md:hidden'>
              <NextImage
                src='/images/eventualPage/smolstring-3.png'
                width='60%'
                height='100%'
                layout='responsive'
                objectFit='contain'
                alt='smolstring-3'
              />
            </div>
            <div className='absolute top-[650px] right-0 block w-44 md:hidden'>
              <NextImage
                src='/images/eventualPage/smolcloud-2.png'
                width='100%'
                height='40%'
                layout='responsive'
                objectFit='contain'
                alt='smolcloud-2'
              />
            </div>
            <div className='absolute top-[600px] block w-full md:hidden'>
              <NextImage
                src='/images/eventualPage/smolstring-4.png'
                width='60%'
                height='100%'
                layout='responsive'
                objectFit='contain'
                alt='smolstring-4'
              />
            </div>
            <div className='absolute top-[1150px] block w-32 md:hidden'>
              <NextImage
                src='/images/eventualPage/smolcloud-3.png'
                width='100%'
                height='40%'
                layout='responsive'
                objectFit='contain'
                alt='smolcloud-3'
              />
            </div>
            <div className='absolute top-[1025px] block w-full md:hidden'>
              <NextImage
                src='/images/eventualPage/smolstring-5.png'
                width='60%'
                height='100%'
                layout='responsive'
                objectFit='contain'
                alt='smolstring-5'
              />
            </div>
          </div>
          {/* Img Area 3 End*/}
          {/* Tab Selection Start */}
          <div className='mx-4 flex flex-col items-center justify-center gap-6 md:mx-16 md:flex-row'>
            {/* Tab 1 */}
            <div
              className='relative z-50 flex h-14 w-full max-w-[404px] md:h-[80px]'
              onClick={() => setTab(1)}
            >
              <div
                className={clsxm(
                  'absolute z-50 flex h-14 w-full max-w-[404px] cursor-pointer items-center justify-center rounded-2xl border-2 border-neutral-1000 text-xl  font-semibold md:h-[80px] md:text-2xl',
                  tab == 1
                    ? 'bg-yellow-300'
                    : 'bg-bone-500 transition duration-200 hover:bg-yellow-300/70'
                )}
              >
                Visit
              </div>
              {tab == 1 && (
                <div className='absolute -bottom-2 -right-2 -z-50 h-14 w-full max-w-[404px] rounded-2xl bg-black md:h-[80px]'></div>
              )}
            </div>
            {/* Tab 2 */}
            <div
              className='relative z-50 flex h-14 w-full max-w-[404px] md:h-[80px]'
              onClick={() => setTab(2)}
            >
              <div
                className={clsxm(
                  'absolute z-50 flex h-14 w-full max-w-[404px] cursor-pointer items-center justify-center rounded-2xl border-2 border-neutral-1000 text-center text-xl font-semibold md:h-[80px] md:px-4  md:text-2xl xl:px-0',
                  tab == 2
                    ? 'bg-yellow-300'
                    : 'bg-bone-500 transition duration-200 hover:bg-yellow-300/70'
                )}
              >
                Open Campus Nirwana Asa
              </div>
              {tab == 2 && (
                <div className='absolute -bottom-2 -right-2 -z-50 h-14 w-full max-w-[404px] rounded-2xl bg-black md:h-[80px]'></div>
              )}
            </div>
            {/* Tab 3 */}
            <div
              className='relative z-50 flex h-14 w-full max-w-[404px] md:h-[80px]'
              onClick={() => setTab(3)}
            >
              <div
                className={clsxm(
                  'absolute z-50 flex h-14 w-full max-w-[404px] cursor-pointer items-center justify-center rounded-2xl border-2 border-neutral-1000 text-xl  font-semibold md:h-[80px] md:text-2xl',
                  tab == 3
                    ? 'bg-yellow-300'
                    : 'bg-bone-500 transition duration-200 hover:bg-yellow-300/70'
                )}
              >
                Welcome Forum Daerah
              </div>
              {tab == 3 && (
                <div className='absolute -bottom-2 -right-2 -z-50 h-14 w-full max-w-[404px] rounded-2xl bg-black md:h-[80px]'></div>
              )}
            </div>
          </div>
          {/* Tab Selection End */}

          <div className=' mt-20 flex flex-col items-center justify-center md:mt-44'>
            {tab == 1 && <Tab1Content />}
            {tab == 2 && <Tab2Content />}
            {tab == 3 && <Tab3Content />}
          </div>
        </section>
        {/* Section 3 End */}
      </main>
    </Layout>
  );
}
