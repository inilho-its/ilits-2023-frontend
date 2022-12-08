import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { HiOutlineCash } from 'react-icons/hi';

import apiMock, { mockQuery } from '@/lib/apiMock';
import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { ApiReturn } from '@/types/api-return';
import { HargaOpenCampus } from '@/types/open-campus';

type ImageFile = {
  [0]: File;
  [1]: File;
};

type ApiResponse = {
  status: boolean;
  message: string;
};

type FormPembayaran = {
  buktiPembayaran: ImageFile;
  id: string;
};

export default function PembayaranOpenCampusPage() {
  const [isDaftar, setIsDaftar] = React.useState(false);
  const { id } = useRouter().query;

  const methods = useForm<FormPembayaran>({
    mode: 'onTouched',
    defaultValues: {
      id: id as string,
    },
  });
  const { handleSubmit } = methods;

  const url = 'https://inilho.its.ac.id/api/open-campus/harga';

  const { data: queryData } = useQuery<ApiReturn<HargaOpenCampus>, Error>([
    url,
    mockQuery,
    {
      keepPreviousData: true,
    },
  ]);

  const onSubmit = (data: FormPembayaran) => {
    const formdata: FormData = new FormData();
    formdata.append('buktiPembayaran', data.buktiPembayaran[0]);
    formdata.append('id', id as string);

    toast.promise(
      apiMock
        .post<ApiResponse>('/open-campus/upload-bukti-pembayaran', formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (!res.data.status) {
            throw res.data.message;
          } else {
            setIsDaftar(true);
          }
        })
        .catch((err) => {
          throw err;
        }),
      {
        loading: 'Loading',
        success: "You've successfully registered",
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
      <Seo templateTitle='Pembayaran Open Campus' />

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
            <div className='relative z-10 mt-4 mb-10 flex w-full min-w-[300px] flex-col sm:mb-4 sm:mt-24 sm:min-w-0 sm:max-w-2xl'>
              <div className='flex h-10 items-center justify-end gap-2 rounded-t-2xl border-4 border-bone-1000 bg-bone-1000 px-3'>
                <div className='h-3 w-3 rounded-full bg-green-300 lg:h-5 lg:w-5'></div>
                <div className='h-3 w-3 rounded-full bg-red-400 lg:h-5 lg:w-5'></div>
                <div className='h-3 w-3 rounded-full bg-yellow-300 lg:h-5 lg:w-5'></div>
              </div>
              {!isDaftar ? (
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div
                      className={clsxm(
                        'w-full min-w-[300px] items-center justify-center rounded-b-2xl border-x-4 border-b-4 border-bone-1000  bg-white p-10 sm:min-w-0 sm:max-w-2xl',
                        'flex flex-col items-center'
                      )}
                    >
                      {/* Step Pendaftaran */}
                      <Typography variant='h5' className='font-bold'>
                        Yuk, Selesaikan Pembayaranmu!
                      </Typography>
                      <div className='mt-8'>
                        <Typography className='text-bone-800'>
                          Jumlah yang harus dibayar:
                        </Typography>
                        <div className='flex items-center space-x-3'>
                          <HiOutlineCash
                            className='inline-block font-light text-green-500'
                            size={36}
                          />
                          {queryData ? (
                            <Typography variant='h5' className='font-bold'>
                              Rp{queryData.data.current_batch.harga}
                            </Typography>
                          ) : (
                            <Typography variant='h5' className='font-bold'>
                              Loading...
                            </Typography>
                          )}
                        </div>
                        <Typography className='mt-4 text-bone-800'>
                          Pembayaran dapat dilakukan melalui rekening :
                        </Typography>
                        <div className='mt-1 ml-4 text-bone-1000'>
                          <Typography>
                            <span className='font-medium'>
                              Ita Dwi Septiani - 085745596388
                            </span>{' '}
                            (Dana, Ovo, Shopeepay)
                          </Typography>
                        </div>
                        <div className='mt-1 ml-4 text-bone-1000'>
                          <Typography>
                            <span className='font-medium'>
                              Ita Dwi Septiani - 90360255960
                            </span>{' '}
                            (Bank BTPN Jenius)
                          </Typography>
                        </div>
                        <div className='mt-1 ml-4 text-bone-1000'>
                          <Typography>
                            <span className='font-medium'>
                              Bagus Narendra - 3012200234
                            </span>{' '}
                            (Bank BNI)
                          </Typography>
                        </div>
                        <div className='mt-1 ml-4 text-bone-1000'>
                          <Typography>
                            <span className='font-medium'>
                              Ita Dwi Septiani - 124801006635505
                            </span>{' '}
                            (Bank BRI)
                          </Typography>
                        </div>
                      </div>
                      <div className='mt-8 w-11/12 md:w-3/4'>
                        <DropzoneInput
                          id='buktiPembayaran'
                          label='Upload Bukti Pembayaran'
                          validation={{
                            required: 'Bukti Pembayaran harus diisi',
                          }}
                        />
                      </div>
                      <Button
                        type='submit'
                        variant='lightBlue'
                        className='mt-7'
                      >
                        Submit Bukti Pembayaran
                      </Button>
                    </div>
                  </form>
                </FormProvider>
              ) : (
                <div
                  className={clsxm(
                    'w-full min-w-[300px] items-center justify-center rounded-b-2xl border-x-4 border-b-4 border-bone-1000  bg-white p-10 sm:min-w-0 sm:max-w-2xl',
                    'flex flex-col items-center'
                  )}
                >
                  <div className='flex flex-col items-center space-y-4'>
                    <div className='w-72 self-center sm:w-[400px] md:w-[480px] lg:w-[512px]'>
                      <NextImage
                        alt='ilits-logo'
                        src='/images/ilits-logo.png'
                        width='100%'
                        height='40%'
                        layout='responsive'
                        objectFit='contain'
                        priority
                      />
                    </div>
                    <Typography
                      variant='body'
                      className='text-center text-base font-semibold sm:text-[16px] sm:leading-[24px]'
                    >
                      Terimakasih telah melakukan pendaftaran pada event:
                    </Typography>
                    <div>
                      <Typography
                        variant='h4'
                        className='text-center text-3xl font-bold text-orange-300 sm:text-[48px] sm:leading-[52px]'
                      >
                        Open Campus
                      </Typography>
                      <Typography
                        variant='h4'
                        className='text-center text-3xl font-bold text-orange-300 sm:text-[48px] sm:leading-[52px]'
                      >
                        Nirwana Asa
                      </Typography>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Main Card End */}
        </section>
      </main>
    </Layout>
  );
}

// Pembayaran dapat dilakukan melalui rekening :
// Yang desain page ini  (1111111111) (BCA)
// Yang desain page ini (111111111111) (BSI)
