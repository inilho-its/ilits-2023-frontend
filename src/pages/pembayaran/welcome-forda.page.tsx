import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import apiMock, { mockQuery } from '@/lib/apiMock';
import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import SelectInput from '@/components/forms/SelectInput';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { Bank_Forda } from '@/constant/bank';

import { ApiReturn } from '@/types/api-return';

type DataWelcomeForda = {
  forda_id: number;
  harga: number;
  id: string;
  jumlah_tiket: number;
  opsi_pembayaran: string;
  status_pendaftaran: number;
  diskon_id: number;
  diskonId: number;
};

type FormPembayaran = {
  status_pendaftaran: number;
  opsi_pembayaran: string;
  bukti_pembayaran: ImageFile;
};

type ImageFile = {
  [0]: File;
  [1]: File;
};

export default function ReuploadPembayaranWelcomeForda() {
  const [step, setStep] = React.useState(0);
  const { id } = useRouter().query;

  const url = 'https://inilho.its.ac.id/api/forda/order/' + id;

  const { data: queryData } = useQuery<ApiReturn<DataWelcomeForda>, Error>([
    url,
    mockQuery,
    {
      keepPreviousData: true,
    },
  ]);

  const methods = useForm<FormPembayaran>({
    mode: 'onTouched',
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: FormPembayaran) => {
    const formdata: FormData = new FormData();
    formdata.append('bukti_pembayaran', data.bukti_pembayaran[0]);
    formdata.append(
      'opsi_pembayaran',
      queryData?.data.opsi_pembayaran as string
    );
    formdata.append('harga', queryData?.data.harga.toString() as string);
    formdata.append(
      'jumlah_tiket',
      queryData?.data.jumlah_tiket.toString() as string
    );
    formdata.append(
      'status_pendaftaran',
      queryData?.data.status_pendaftaran.toString() as string
    );

    toast.promise(
      apiMock
        .post<ApiReturn<null>, AxiosResponse>(
          '/forda/update-pembayaran/' + id,
          formdata,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((res) => {
          if (res.data.status) {
            setStep(1);
            return res.data;
          } else {
            throw Error(res.data.message);
          }
        }),
      {
        loading: 'Loading',
        success: (res) => (
          <div className='flex flex-col space-y-2'>
            <span className='font-bold'>{res.message}</span>
          </div>
        ),
        error: (err) => (
          <div className='flex flex-col space-y-2'>
            <span className='font-bold'>{err.message}</span>
          </div>
        ),
      }
    );
  };

  return (
    <Layout withFooter={false} withNavbar={false}>
      <Seo templateTitle='ReuploadPembayaranWelcomeForda' />

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
                  Reupload Pembayaran Welcome Forda
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
              <div
                className={clsxm(
                  'w-full min-w-[300px] items-center justify-center rounded-b-2xl border-x-4 border-b-4 border-bone-1000  bg-white p-10 sm:min-w-0 sm:max-w-2xl',
                  'flex flex-col items-center'
                )}
              >
                {queryData?.data?.status_pendaftaran == 9 && step == 0 ? (
                  <FormProvider {...methods}>
                    <div className='text-center'>
                      <p className='mb-2 text-2xl font-bold md:text-3xl'>
                        Reupload Bukti Pembayaran
                      </p>
                      <p className='stroke-sm text-base font-bold text-yellow-500 md:text-lg'>
                        {queryData.data.id}
                      </p>
                    </div>
                    <div className='my-4 h-[1px] w-full rounded-full bg-slate-400'></div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className='space-y-2'>
                        <p className='text-xl font-medium'>
                          Total harga:{' '}
                          <span className='text-red-500'>
                            Rp.{queryData.data.harga}
                          </span>{' '}
                        </p>
                        <SelectInput
                          required
                          id='opsi_pembayaran'
                          label='Opsi Pembayaran'
                          validation={{
                            required: 'Wajib memilih opsi pembayaran',
                          }}
                          placeholder='Pilih opsi pembayaran anda'
                        >
                          {Bank_Forda.map((bank) => (
                            <option key={bank.id} value={bank.id}>
                              {bank.id} : {bank.name}
                            </option>
                          ))}
                        </SelectInput>
                        <DropzoneInput
                          label='Upload Bukti Pembayaran'
                          id='bukti_pembayaran'
                          helperText='Ukuran maksimal file 1 Mb (.jpeg/.png)'
                          validation={{
                            required: {
                              value: true,
                              message: 'Wajib mengupload bukti pembayaran',
                            },
                          }}
                        />
                      </div>
                      <div className='mt-5 flex justify-center'>
                        <Button
                          variant='lightBlue'
                          round='medium'
                          size='medium'
                          type='submit'
                        >
                          Submit
                        </Button>
                      </div>
                    </form>
                  </FormProvider>
                ) : step == 1 ? (
                  <div className='flex flex-col items-center justify-center space-y-4 text-gray-700'>
                    <h6 className='font-medium'>
                      Terimakasih telah melakukan pendaftaran pada event :
                    </h6>
                    <h1 className=' stroke-sm text-orange-500'>
                      WELCOME FORDA
                    </h1>
                    <div className='text-center font-medium'>
                      Kami sedang memproses pembayaran Anda, silahkan cek "My
                      Tickets" pada halaman utama web Ini Lho ITS! untuk melihat
                      verifikasi pembayaran Anda. Berikut No. Pendaftaran Anda
                      untuk pengecekan status tiket :
                      <div className='py-2 font-bold'>{id}</div>
                      Pembayaran anda sudah kami terima, kami akan segera
                      mengirimkan email kapada anda.
                    </div>
                    <div className='flex flex-col items-center font-medium'>
                      <UnstyledLink href='https://wa.me/+6281906398138'>
                        CP 1 : Maharani (maharaniglh/081906398138)
                      </UnstyledLink>
                      <UnstyledLink href='https://wa.me/+6285705782769'>
                        CP 2 : Aufa (aufahakimmm/085705782769)
                      </UnstyledLink>
                    </div>
                    <ButtonLink href='/' variant='yellow' size='medium'>
                      Kembali ke halaman utama
                    </ButtonLink>
                  </div>
                ) : (
                  <div className='text-start'>
                    <p className='text-3xl font-semibold'>
                      Your payment is still being verified
                    </p>
                    <p className='text-2xl font-medium'>
                      Pelase check again later
                    </p>
                    <p className='mt-4 text-2xl font-medium'>or contact us</p>
                    <div className='ml-4 flex flex-col font-medium'>
                      <UnstyledLink
                        href='https://wa.me/+6281906398138'
                        className='transition duration-300 hover:text-yellow-500'
                      >
                        CP 1 : Maharani (maharaniglh/081906398138)
                      </UnstyledLink>
                      <UnstyledLink
                        href='https://wa.me/+6285705782769'
                        className='transition duration-300 hover:text-yellow-500'
                      >
                        CP 2 : Aufa (aufahakimmm/085705782769)
                      </UnstyledLink>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Main Card End */}
        </section>
      </main>
    </Layout>
  );
}
