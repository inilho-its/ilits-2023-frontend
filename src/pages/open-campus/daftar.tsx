import * as React from 'react';
import { BsCheck2 } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import BerkasForm from '@/pages/open-campus/components/BerkasForm';
import BiodataForm from '@/pages/open-campus/components/BiodataForm';
import CompletedPage from '@/pages/open-campus/components/Completed';
import FakultasDepartemenForm from '@/pages/open-campus/components/FakultasDepartemenForm';

export default function DaftarOpenCampusPage() {
  const [step, setStep] = React.useState(0);
  return (
    <Layout>
      <Seo templateTitle='Daftar Open Campus' />

      <main className='bg-bone-500'>
        <section className='relative'>
          {/* Background Image Start */}
          <div>
            <div className='absolute top-0 right-0 w-10 sm:w-28'>
              <NextImage
                src='/images/opencampusPage/star-1.png'
                width='90%'
                height='100%'
                layout='responsive'
                objectFit='contain'
                alt='star-1'
              />
            </div>
            <div className='absolute bottom-0 left-0 w-24 sm:w-56'>
              <NextImage
                src='/images/opencampusPage/rainbow-1.png'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='contain'
                alt='rainbow-1'
              />
            </div>
            <div className='absolute bottom-0 right-0 w-20 sm:w-72'>
              <NextImage
                src='/images/opencampusPage/person-1.png'
                width='64%'
                height='100%'
                layout='responsive'
                objectFit='contain'
                alt='person-1'
              />
            </div>
          </div>
          {/* Background Image End */}
          <div className='mx-4 flex min-h-screen items-center justify-center sm:mx-0'>
            {/* Title Start */}
            <div className='absolute top-0 left-0 flex w-max items-center justify-start'>
              <div className='w-0 sm:w-32 xl:w-44'>
                <NextImage
                  src='/images/ilits-logo.png'
                  width='100%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='logo-ilits'
                />
              </div>
              <div className='w-20 sm:w-0'>
                <NextImage
                  src='/images/ilits-logo-only.png'
                  width='60%'
                  height='50%'
                  layout='responsive'
                  objectFit='contain'
                  alt='logo-ilits-only'
                />
              </div>
              <div className='mt-4 flex flex-col'>
                <Typography
                  variant='h6'
                  className='text-sm font-semibold text-neutral-1000 sm:text-xl xl:text-[24px] xl:leading-7'
                >
                  Pendaftaran Open Campus
                </Typography>
                <Typography
                  variant='h6'
                  className='text-sm font-semibold text-neutral-1000 sm:text-xl xl:text-[24px] xl:leading-7'
                >
                  Nirwana Asa
                </Typography>
              </div>
            </div>
            {/* Title End */}
            {/* Main Card Start */}
            <div className='relative z-10 mb-10 mt-24 flex w-full min-w-[300px] flex-col sm:mb-0 sm:mt-14 sm:min-w-0 sm:max-w-xl'>
              <div className='flex h-10 items-center justify-end gap-2 rounded-t-2xl border-4 border-bone-1000 bg-bone-1000 px-3'>
                <div className='h-3 w-3 rounded-full bg-green-300 lg:h-5 lg:w-5'></div>
                <div className='h-3 w-3 rounded-full bg-red-400 lg:h-5 lg:w-5'></div>
                <div className='h-3 w-3 rounded-full bg-yellow-300 lg:h-5 lg:w-5'></div>
              </div>
              <div className='w-full min-w-[300px] rounded-b-2xl border-x-4 border-b-4 border-bone-1000 bg-white p-10  sm:min-w-0 sm:max-w-xl'>
                {/* Step Pendaftaran */}
                <div>
                  {step <= 2 && (
                    <div className='relative z-20 mx-auto flex h-0.5 w-full max-w-xs select-none items-center justify-between bg-neutral-800'>
                      <div
                        className={clsxm(
                          'relative flex h-8 w-8 items-center justify-center rounded-full text-neutral-100',
                          step == 0
                            ? 'bg-[#3872C3]'
                            : step > 0
                            ? 'bg-[#2E7D32]'
                            : 'bg-bone-600'
                        )}
                      >
                        <div className='absolute -z-20 flex h-1 w-14 items-center justify-center rounded-full bg-white'></div>{' '}
                        {step > 0 ? (
                          <p>
                            <BsCheck2 size={20} />
                          </p>
                        ) : (
                          <p>1</p>
                        )}
                      </div>
                      <div
                        className={clsxm(
                          'relative flex h-8 w-8 items-center justify-center rounded-full text-neutral-100',
                          step == 1
                            ? 'bg-[#3872C3]'
                            : step > 1
                            ? 'bg-[#2E7D32]'
                            : 'bg-bone-600'
                        )}
                      >
                        <div className='absolute -z-20 flex h-1 w-14 items-center justify-center rounded-full bg-white'></div>{' '}
                        {step > 1 ? (
                          <p>
                            <BsCheck2 size={20} />
                          </p>
                        ) : (
                          <p>2</p>
                        )}
                      </div>
                      <div
                        className={clsxm(
                          'relative flex h-8 w-8 items-center justify-center rounded-full text-neutral-100',
                          step == 2
                            ? 'bg-[#3872C3]'
                            : step > 2
                            ? 'bg-[#2E7D32]'
                            : 'bg-bone-600'
                        )}
                      >
                        <div className='absolute -z-20 flex h-1 w-14 items-center justify-center rounded-full bg-white'></div>{' '}
                        {step > 2 ? (
                          <p>
                            <BsCheck2 size={20} />
                          </p>
                        ) : (
                          <p>3</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                {step === 0 && <BiodataForm setStep={setStep} />}
                {step === 1 && <BerkasForm setStep={setStep} />}
                {step === 2 && <FakultasDepartemenForm setStep={setStep} />}
                {step === 3 && <CompletedPage />}
              </div>
            </div>
          </div>
          {/* Main Card End */}
        </section>
      </main>
    </Layout>
  );
}
