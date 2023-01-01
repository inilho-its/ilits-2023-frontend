import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import apiMock from '@/lib/apiMock';
import useSearchInputHooks from '@/hooks/useSearchInput';

import SearchInput from '@/components/forms/SearchInput';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { ApiReturn } from '@/types/api-return';

type TiketFormState = {
  nomor_pendaftaran: string;
};

type detailTiket = {
  status: {
    status: string;
  };
  dataPeserta: [
    {
      nomerPeserta: string;
      password: string;
    }
  ];
};

type nomor_peserta = {
  nomerPeserta: string;
  password: string;
};

function filterDataPeserta(dataPeserta: nomor_peserta[]) {
  const filteredArr: nomor_peserta[] = dataPeserta.filter(
    (idx) => idx.nomerPeserta != ''
  );
  if (filteredArr.length == 0)
    filteredArr[0] = { nomerPeserta: '', password: '' };
  return filteredArr;
}

export default function MyTiket() {
  const useSearchInput = useSearchInputHooks();
  const [nomor_peserta, setNomorPeserta] = React.useState<nomor_peserta[]>([]);
  const methods = useForm<TiketFormState>();
  const { handleSubmit } = methods;
  const onSubmit = (data: TiketFormState) => {
    setNomorPeserta([]);
    toast.promise(
      apiMock
        .get<ApiReturn<detailTiket>>(
          `forda/order/cekorder/${data.nomor_pendaftaran}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => {
          setNomorPeserta(filterDataPeserta(res.data.data.dataPeserta));
          useSearchInput.isVerified(true, res.data.data.status.status);
        })
        .catch((err) => {
          useSearchInput.isVerified(false, 'Tidak Terverifikasi');
          throw err;
        }),
      {
        loading: 'Loading',
        success: 'Ticket information successfuly collected',
        error: (err) => (
          <p>
            {err.response
              ? err.response.data.message
              : 'Something Happened. Wait a bit then try again'}
          </p>
        ),
      }
    );
  };

  return (
    <Layout withFooter={false} withNavbar={false}>
      <Seo templateTitle='Tiket Open Campus' />
      <main className='relative bg-bone-500'>
        <section>
          <NextImage
            className='absolute top-0 right-0 w-[15%] lg:w-[9%]'
            src='/images/tiket/eye.png'
            width='95%'
            height='100%'
            layout='responsive'
            alt=''
          />
          <NextImage
            className='absolute bottom-0 w-[15%] '
            src='/images/tiket/person.png'
            width='43%'
            height='100%'
            layout='responsive'
            alt=''
          />
          <div className='absolute flex w-full items-center justify-center pt-16 sm:justify-start sm:pt-20 sm:pl-20 md:pt-16 md:pl-20 lg:pl-24 lg:pt-8'>
            <NextImage
              className='w-[20%]'
              src='/images/ilits-logo.png'
              width='100%'
              height='63%'
              layout='responsive'
              alt=''
            />
            <Typography
              variant='h6'
              className='text-base font-semibold sm:text-xl md:text-[24px] lg:pl-10'
            >
              Status Verifikasi Welcome Forda
            </Typography>
          </div>

          <div className='flex min-h-screen w-full items-center justify-center px-5 md:py-56 lg:py-64'>
            <div className='relative'>
              <NextImage
                className='absolute -right-2 -bottom-5 w-[15%] sm:-bottom-12 sm:-right-10 lg:w-[15%]'
                src='/images/tiket/magnifier.png'
                width='85%'
                height='100%'
                layout='responsive'
                alt=''
              />
              <div className='flex h-9 w-full items-center justify-end gap-x-3 rounded-t-2xl bg-dark pr-5 md:h-12 md:pr-8'>
                <div className='h-3 w-3 rounded-full bg-green-300 md:h-4 md:w-4'></div>
                <div className='h-3 w-3 rounded-full bg-red-300 md:h-4 md:w-4'></div>
                <div className='h-3 w-3 rounded-full bg-yellow-300 md:h-4 md:w-4'></div>
              </div>
              <div className='rounded-b-2xl border-4 border-dark bg-white px-6 py-8 sm:p-10 md:p-16 lg:px-32 lg:py-16'>
                <Typography
                  variant='h4'
                  className='stroke max-w-xl pb-4 text-2xl font-bold text-red-300 sm:text-3xl md:text-4xl lg:text-5xl'
                >
                  Cek Nomor Pendaftaran Disini
                </Typography>
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <SearchInput
                      id='nomor_pendaftaran'
                      rightTextButton={useSearchInput.buttonText}
                      status={useSearchInput.status}
                      disable={useSearchInput.disable}
                      helperText='Format nomor pendaftaran XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
                      placeholder='Masukkan nomor pendaftaran anda'
                      validation={{
                        required: {
                          value: true,
                          message: 'Wajib mengisi nomor pendaftaran',
                        },
                        pattern: {
                          value:
                            /(^[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12})/,
                          message: 'Nomor pendaftaran tidak valid',
                        },
                      }}
                    />
                  </form>
                </FormProvider>
                {nomor_peserta.length != 0 && (
                  <div className='pt-5'>
                    <Typography
                      variant='body'
                      className='pb-4 text-sm font-semibold sm:text-[16px]'
                    >
                      Nomor Peserta & Password :
                    </Typography>
                    <div className='flex flex-col gap-y-2'>
                      {nomor_peserta.map(
                        ({ nomerPeserta, password }, index) => (
                          <div className='w-full' key={index}>
                            <div className='flex justify-between gap-2 rounded-md border-2 p-3 sm:flex-row sm:p-4 md:px-7 md:py-4'>
                              {nomerPeserta && password != '' ? (
                                <>
                                  <div>
                                    <Typography
                                      variant='body'
                                      className='text-sm font-bold sm:text-[16px]'
                                    >
                                      Nomor Peserta :
                                    </Typography>
                                    <Typography
                                      variant='body'
                                      className='text-sm font-semibold sm:text-[16px]'
                                    >
                                      {nomerPeserta}
                                    </Typography>
                                  </div>
                                  <div className=' pr-4 md:pr-10'>
                                    <Typography
                                      variant='body'
                                      className='text-sm font-bold sm:text-[16px]'
                                    >
                                      Password :
                                    </Typography>
                                    <Typography
                                      variant='body'
                                      className='text-sm font-semibold sm:text-[16px]'
                                    >
                                      {password}
                                    </Typography>
                                  </div>
                                </>
                              ) : (
                                <Typography
                                  variant='body'
                                  className='text-sm font-semibold sm:text-[16px]'
                                >
                                  Coba beberapa saat lagi...
                                </Typography>
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
