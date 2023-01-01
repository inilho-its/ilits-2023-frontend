import * as React from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import NextImage from '@/components/NextImage';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';
import SearchInput from '@/components/forms/SearchInput';
import apiMock from '@/lib/apiMock';
import useSearchInputHooks from '@/hooks/useSearchInput';


type ApiResponse = {
  status: boolean;
  message: string;
  data: {
    dataPeserta: [];
  };
};

type TiketFormState = {
  nomor_pendaftaran: string;
};

type nomorPeserta = {
  nomerPeserta: string;
  password: string;
};

export default function MyTiket() {
  const useSearchInput = useSearchInputHooks();
  const [nomor_peserta, setNomorPeserta] = React.useState<nomorPeserta[]>([]);
  const methods = useForm<TiketFormState>();
  const { handleSubmit } = methods;
  const onSubmit = (data: TiketFormState) => {
    setNomorPeserta([]);
    toast.promise(
      apiMock
        .get<ApiResponse>(`forda/order/cekorder/${data.nomor_pendaftaran}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setNomorPeserta(res.data.data.dataPeserta);
          useSearchInput.isVerified(true, 'Terverifikasi');
        })
        .catch((err) => {
          useSearchInput.isVerified(false, 'Tidak Terverifikasi');
          throw err;
        }),
      {
        loading: 'Loading',
        success: 'Ticket status successfuly collected',
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
          <div className='absolute flex items-center pt-20 pl-8 sm:pl-10 sm:pt-11 lg:pl-32'>
            <div className='w-40 lg:w-52 '>
              <NextImage
                src='/images/ilits-logo.png'
                width='100%'
                height='63%'
                layout='responsive'
                alt=''
              />
            </div>
            <div>
              <Typography
                variant='h6'
                className='text-lg font-semibold sm:text-xl md:text-[24px] lg:pl-10'
              >
                Status Verifikasi Welcome Forda
              </Typography>
            </div>
          </div>
          <div className='z-50 flex min-h-screen w-full items-center justify-center md:py-56 px-5 lg:py-64'>
            <div className='overflow-hidden rounded-2xl '>
              <div className='flex h-9 md:h-12 w-full items-center justify-end gap-x-3 bg-dark pr-5 md:pr-8'>
                <div className='w-3 h-3 md:h-4 md:w-4 rounded-full bg-green-300'></div>
                <div className='w-3 h-3 md:h-4 md:w-4 rounded-full bg-red-300'></div>
                <div className='w-3 h-3 md:h-4 md:w-4 rounded-full bg-yellow-300'></div>
              </div>
              <div className='rounded-b-2xl border-4 border-dark bg-white px-5 py-5 sm:p-10 md:p-16 lg:px-32 lg:py-16'>
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
                      placeholder='Masukkan nomor pendaftaran anda'
                      validation={{
                        required: {
                          value: true,
                          message: 'Wajib mengisi nomor pendaftaran',
                        },
                      }}
                    />
                  </form>
                </FormProvider>
                {nomor_peserta.length != 0 && (
                  <div className='pt-5'>
                    <Typography className='pb-4 font-semibold'>
                      Nomor Peserta & Password :
                    </Typography>
                    <div className='flex flex-col gap-y-2'>
                      {nomor_peserta.map(
                        ({ nomerPeserta, password }, index=3) => (
                          <div className='w-full' key={index}>
                            <div className='flex sm:flex-row flex-col gap-2 justify-between rounded-md border-2 p-3 sm:p-4 md:px-7 md:py-4'>
                              <div>
                                <Typography variant='' className='font-bold'>
                                  Nomor Peserta :
                                </Typography>
                                <Typography className='font-semibold'>
                                  {nomerPeserta}
                                </Typography>
                              </div>
                              <div className=' pr-4 md:pr-10'>
                                <Typography className='font-bold'>
                                  Password :
                                </Typography>
                                <Typography className='font-semibold'>
                                  {password}
                                </Typography>
                              </div>
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
