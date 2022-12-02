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
      <div className='relative mx-auto flex h-[228px] w-full max-w-[1049px] items-center justify-center rounded-[20px] border-2 border-neutral-1000 bg-neutral-100 px-28 pt-4 text-justify text-lg font-medium'>
        <div className='absolute -top-10 flex h-[72px] w-full max-w-[829.37px] items-center justify-center rounded-full border-2 border-neutral-1000 bg-yellow-300 text-[32px] font-semibold leading-none'>
          Visit
        </div>
        Kegiatan yang diselenggarakan oleh panitia Ini Lho ITS! berbentuk
        roadshow dan berisi pengenalan kampus, departemen, dan lingkungan ITS
        secara general dan menyebarkan semangat perguruan tinggi kepada
        siswa/siswi SMA/SMK sederajat di berbagai daerah yang bekerja sama
        dengan forum daerah (Forda).
      </div>

      {/* Image Tab 1 */}

      {/* Jumbotron Tab 1 */}
    </div>
  );
};
const Tab2Content = () => {
  return (
    <div>
      {/* Text Box Tab 2 */}
      <div className='relative mx-auto flex h-[384px] w-full max-w-[1049px] items-center justify-center rounded-[20px] border-2 border-neutral-1000 bg-neutral-100 px-28 pt-4 text-justify text-lg font-medium'>
        <div className='absolute -top-10 flex h-[72px] w-full max-w-[829.37px] items-center justify-center rounded-full border-2 border-neutral-1000 bg-yellow-300 text-[32px] font-semibold leading-none'>
          Apa Itu Open Campus Nirwana Asa?
        </div>
        Open Campus terdiri dari 3 sub-event, yaitu: ITS Fair, Faculty and
        Departemen Day, dan One Day Lecture. ITS Fair adalah Suatu kegiatan
        pengenalan ITS secara umum meliputi jalur masuk ITS (SNMPTN, SBMPTN,
        SKMP), UKT ITS, beasiswa di ITS, prestasi, hingga talkshow dengan
        pembicara hebat dengan topik yang disesuaikan dengan kebutuhan peserta.
        Faculty and Department Day adalah Kegiatan yang dilakukan dalam satu
        hari untuk mengenalkan fakultas dan departemen yang ada di ITS kepada
        siswa/siswi SMA/SMK sederajat. Terakhir, One Day Lecture adalah Kegiatan
        yang dilakukan selama dua hari untuk memberikan pengalaman secara nyata
        mengenai pembelajaran saat kuliah kepada siswa/siswi SMA/SMK sederajat.
      </div>

      {/* Image Tab 2 */}
      <div className=' mt-20 flex items-center justify-center gap-6'>
        <div className='md:w-[34rem] xl:w-[38rem]'>
          <NextImage
            src='/images/eventualPage/tab2-image-1.png'
            width='100%'
            height='82%'
            layout='responsive'
            objectFit='contain'
            alt='tab2-image-1'
          />
        </div>
        <div className='md:w-[34rem] xl:w-[38rem]'>
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
      <div className='relative z-20 mt-20 flex h-[384px] w-screen items-center justify-center  border-2 border-bone-1000 bg-lightBlue-500'>
        <div className='absolute top-0 -left-1 w-[8rem]'>
          <NextImage
            src='/images/eventualPage/star-1.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='star-1'
          />
        </div>
        <div className='absolute -bottom-[0.9rem] left-32 w-32'>
          <NextImage
            src='/images/eventualPage/calendar-1.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='calendar-1'
          />
        </div>
        <div className='absolute -bottom-1 right-2 w-[17rem]'>
          <NextImage
            src='/images/eventualPage/person-2.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            alt='person-2'
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Typography
            variant='h4'
            className='stroke md:stroke px-11 text-center text-2xl font-bold leading-none text-white md:px-0 md:text-[48px]  md:leading-[64px]'
          >
            Ayo Jangan Lewatkan Keseruan
          </Typography>
          <Typography
            variant='h4'
            className='stroke md:stroke px-11 text-center text-2xl font-bold leading-none text-white md:px-0 md:text-[48px]  md:leading-[64px]'
          >
            Open Campus ILITS 2023!
          </Typography>
          <ButtonLink
            variant='bone'
            size='large'
            href='#'
            className='mt-8 font-semibold'
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
      <div className='relative mx-auto flex h-[204px] w-full max-w-[1049px] items-center justify-center rounded-[20px] border-2 border-neutral-1000 bg-neutral-100 px-28 pt-4 text-justify text-lg font-medium'>
        <div className='absolute -top-10 flex h-[72px] w-full max-w-[829.37px] items-center justify-center rounded-full border-2 border-neutral-1000 bg-yellow-300 text-[32px] font-semibold leading-none'>
          Welcome
        </div>
        Kegiatan eventual Ini Lho ITS! yang diselenggarakan oleh panitia Ini Lho
        ITS! diberbagai daerah di Indonesia yang berkerja sama dengan Forum
        Daerah (Forda) dengan kegiatan utama yakni tryout.
      </div>

      {/* Image Tab 3 */}

      {/* Jumbotron Tab 3 */}
    </div>
  );
};

export default function EventualPage() {
  const [tab, setTab] = React.useState(2);

  return (
    <Layout>
      <Seo templateTitle='Eventual' />
      <main>
        {/* Section 1 Start*/}
        <section className='relative'>
          {/* Img Area 1 Start*/}
          <div>
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
              <div className='flex gap-6'>
                <ButtonLink
                  variant='orange'
                  round='medium'
                  size='large'
                  href='#section2'
                  className='mt-8 hidden font-semibold md:inline-flex'
                >
                  Kenali Lebih Lanjut!
                </ButtonLink>
                <ButtonLink
                  variant='bone'
                  round='medium'
                  size='large'
                  href='#'
                  className='mt-8 hidden font-semibold md:inline-flex'
                  leftIcon={HiOutlineDownload}
                >
                  Unduh Guidebook
                </ButtonLink>
              </div>
            </div>
            <div>
              <div className='w-[553.91px] md:mt-24 md:block'>
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
          <div
            id='section2'
            className='relative z-20 flex h-36 w-screen items-center justify-center  border-2 border-bone-1000 bg-yellow-500'
          >
            <div className='absolute -top-[3px] left-0 -z-10 w-[5.5rem] md:w-48'>
              <NextImage
                src='/images/eventualPage/arrow-1.png'
                width='90%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                alt='arrow-1'
              />
            </div>
            <div className='absolute bottom-0 right-10 -z-10 w-[4.5rem] md:w-32'>
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
              className='stroke md:stroke px-11 text-center text-2xl font-bold leading-none text-white md:px-0 md:text-[48px]  md:leading-[64px]'
            >
              Yuk, Kepoin Kita Lebih Lanjut!
            </Typography>
          </div>
        </section>
        {/* Section 2 End */}
        {/* Section 3 Start*/}
        <section className='relative z-10 mt-24 mb-24 overflow-hidden'>
          {/* Tab Selection Start */}
          <div className='mx-16 flex items-center justify-center gap-6'>
            {/* Tab 1 */}
            <div
              className='relative z-50 flex h-[80px] w-full max-w-[404px]'
              onClick={() => setTab(1)}
            >
              <div
                className={clsxm(
                  'absolute z-50 flex h-[80px] w-full max-w-[404px] cursor-pointer items-center justify-center rounded-2xl border-2 border-neutral-1000  text-2xl font-semibold',
                  tab == 1
                    ? 'bg-yellow-300'
                    : 'transition duration-200 hover:bg-yellow-300/70'
                )}
              >
                Visit
              </div>
              {tab == 1 && (
                <div className='absolute -bottom-2 -right-2 -z-50 h-[80px] w-full max-w-[404px] rounded-2xl bg-black'></div>
              )}
            </div>
            {/* Tab 2 */}
            <div
              className='relative z-50 flex h-[80px] w-full max-w-[404px]'
              onClick={() => setTab(2)}
            >
              <div
                className={clsxm(
                  'absolute z-50 flex h-[80px] w-full max-w-[404px] cursor-pointer items-center justify-center rounded-2xl border-2 border-neutral-1000  text-2xl font-semibold',
                  tab == 2
                    ? 'bg-yellow-300'
                    : 'transition duration-200 hover:bg-yellow-300/70'
                )}
              >
                Open Campus Nirwana Asa
              </div>
              {tab == 2 && (
                <div className='absolute -bottom-2 -right-2 -z-50 h-[80px] w-full max-w-[404px] rounded-2xl bg-black'></div>
              )}
            </div>
            {/* Tab 3 */}
            <div
              className='relative z-50 flex h-[80px] w-full max-w-[404px]'
              onClick={() => setTab(3)}
            >
              <div
                className={clsxm(
                  'absolute z-50 flex h-[80px] w-full max-w-[404px] cursor-pointer items-center justify-center rounded-2xl border-2 border-neutral-1000  text-2xl font-semibold',
                  tab == 3
                    ? 'bg-yellow-300'
                    : 'transition duration-200 hover:bg-yellow-300/70'
                )}
              >
                Welcome
              </div>
              {tab == 3 && (
                <div className='absolute -bottom-2 -right-2 -z-50 h-[80px] w-full max-w-[404px] rounded-2xl bg-black'></div>
              )}
            </div>
          </div>
          {/* Tab Selection End */}

          <div className='mt-44 flex flex-col items-center justify-center'>
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
