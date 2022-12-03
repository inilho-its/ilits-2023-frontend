import * as React from 'react';
import { BsCheck2 } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';

import Layout from '@/components/layout/Layout';
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

      <main>
        <section className='bg-bone-500'>
          <div className='flex min-h-screen flex-col items-center justify-center py-10'>
            <Typography variant='h6' as='h6' className='font-bold'>
              Pendaftaran Open Campus Nirwana Asa
            </Typography>
            <div className='relative min-w-[600px] rounded-lg border-2 border-bone-1000  bg-white p-10'>
              <div className='flex justify-end gap-4 rounded-t-lg border-2 border-black bg-bone-1000 p-2 lg:p-3'>
                <div className='h-3 w-3 rounded-full bg-green-300 outline outline-2 outline-black lg:h-5 lg:w-5'></div>
                <div className='h-3 w-3 rounded-full bg-red-400 outline outline-2 outline-black lg:h-5 lg:w-5'></div>
                <div className='h-3 w-3 rounded-full bg-yellow-300 outline outline-2 outline-black lg:h-5 lg:w-5'></div>
              </div>
              {/* Step Pendaftaran */}
              <div>
                <div className='relative -z-20 flex h-0.5 w-full max-w-[643px] items-center justify-between bg-neutral-1000'>
                  <div
                    className={clsxm(
                      'relative flex h-8 w-8 items-center justify-center rounded-full text-neutral-100',
                      step == 1
                        ? 'bg-blue-[#3872C3]'
                        : step > 1
                        ? 'bg-[#2E7D32]'
                        : 'bg-bone-600'
                    )}
                  >
                    <div className='absolute -z-20 flex h-16 w-16 items-center justify-center rounded-full bg-white'></div>{' '}
                    {step > 1 ? (
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
                      step == 2
                        ? 'bg-[#3872C3]'
                        : step > 2
                        ? 'bg-[#2E7D32]'
                        : 'bg-bone-600'
                    )}
                  >
                    <div className='absolute -z-20 flex h-16 w-16 items-center justify-center rounded-full bg-white'></div>{' '}
                    {step > 2 ? (
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
                      step == 3
                        ? 'bg-[#3872C3]'
                        : step > 3
                        ? 'bg-[#2E7D32]'
                        : 'bg-bone-600'
                    )}
                  >
                    <div className='absolute -z-20 flex h-16 w-16 items-center justify-center rounded-full bg-white'></div>{' '}
                    {step > 3 ? (
                      <p>
                        <BsCheck2 size={20} />
                      </p>
                    ) : (
                      <p>3</p>
                    )}
                  </div>
                  <div
                    className={clsxm(
                      'relative flex h-8 w-8 items-center justify-center rounded-full text-neutral-100',
                      step == 4
                        ? 'bg-[#3872C3]'
                        : step > 4
                        ? 'bg-[#2E7D32]'
                        : 'bg-bone-600'
                    )}
                  >
                    <div className='absolute -z-20 flex h-16 w-16 items-center justify-center rounded-full bg-white'></div>{' '}
                    {step > 4 ? (
                      <p>
                        <BsCheck2 size={20} />
                      </p>
                    ) : (
                      <p>4</p>
                    )}
                  </div>
                </div>
              </div>
              {step === 0 && <BiodataForm setStep={setStep} />}
              {step === 1 && <BerkasForm setStep={setStep} />}
              {step === 2 && <FakultasDepartemenForm setStep={setStep} />}
              {step === 3 && <CompletedPage />}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
