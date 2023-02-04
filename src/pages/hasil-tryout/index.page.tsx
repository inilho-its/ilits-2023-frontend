import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import useSearchInputHooks from '@/hooks/useSearchInput';

import SearchInput from '@/components/forms/SearchInput';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

type TiketFormState = {
  nomor_pendaftaran: string;
};

// type detailTiket = {
//   status: {
//     status: string;
//   };
// };

export default function MyTiket() {
  // const router = useRouter();
  const useSearchInput = useSearchInputHooks();
  // const [nomor_peserta, setNomorPeserta] = React.useState<detailTiket>({
  //   status: {
  //     status: '',
  //   },
  // });
  // const [, setCookie] = useCookies(['nomor_pendaftaran']);
  const methods = useForm<TiketFormState>();
  const { handleSubmit } = methods;
  const onSubmit = () => {
    toast('Coming Soon !', {
      icon: '⏳',
    });
    // setNomorPeserta({
    //   status: {
    //     status: '',
    //   },
    // });
    // toast.promise(
    //   apiMock
    //     .get<ApiReturn<detailTiket>>(
    //       `forda/order/cekorder/${data.nomor_pendaftaran}`,
    //       {
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       setNomorPeserta({
    //         status: {
    //           status: res.data.data.status.status,
    //         },
    //       });
    //       if (res.data.data.status.status == 'menunggu verifikasi')
    //         useSearchInput.isVerified(true, res.data.data.status.status);
    //       else if (
    //         res.data.data.status.status == 'pembayaran berhasil diverifikasi'
    //       ) {
    //         useSearchInput.isVerified(true, 'Terverifikasi');
    //         setCookie('nomor_pendaftaran', data.nomor_pendaftaran, {
    //           path: '/',
    //           sameSite: 'lax',
    //           maxAge: 43200,
    //         });
    //         router.push('/redirect?url=/pembahasan-tryout');
    //       } else useSearchInput.isVerified(false, 'Tidak Terverifikasi');
    //     })
    //     .catch((err) => {
    //       useSearchInput.isVerified(false, 'Tidak Terverifikasi');
    //       throw err;
    //     }),
    //   {
    //     loading: 'Loading',
    //     success: 'Ticket information successfuly collected',
    //     error: (err) => (
    //       <p>
    //         {err.response
    //           ? err.response.data.message
    //           : 'Something Happened. Wait a bit then try again'}
    //       </p>
    //     ),
    //   }
    // );
  };

  return (
    <Layout withFooter={false} withNavbar={false}>
      <Seo templateTitle='Hasil Try Out' />
      <main className='relative bg-bone-500'>
        <section>
          <NextImage
            className='absolute top-0 right-0 w-[13%] lg:w-[8%]'
            src='/images/tiket/eye.png'
            width='95%'
            height='100%'
            layout='responsive'
            alt=''
          />
          <NextImage
            className='absolute bottom-0 w-[15%] lg:w-[11%]'
            src='/images/tiket/person.png'
            width='43%'
            height='100%'
            layout='responsive'
            alt=''
          />
          <div className='absolute flex w-full items-center justify-center pt-10 sm:justify-start sm:pt-16 sm:pl-20 md:pt-10 md:pl-20 lg:pl-24 lg:pt-0'>
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
              className='mt-2 text-sm font-semibold sm:mt-4 sm:text-xl md:text-[24px] lg:pl-10'
            >
              Semoga Beruntung!
              <br />
              Semoga Berjumpa Di Kampus Perjuangan ITS!
            </Typography>
          </div>
          <div className='flex min-h-screen w-full items-center justify-center px-5 md:py-32 lg:py-32'>
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
              <div className='rounded-b-2xl border-4 border-dark bg-white px-6 py-8 sm:p-10 md:p-16 lg:px-24 lg:py-10 lg:pb-16'>
                <Typography
                  variant='h4'
                  className='stroke max-w-xl pb-4 text-2xl font-bold text-red-300 sm:text-3xl md:text-4xl lg:text-5xl'
                >
                  Pengumuman Tryout ILITS 2023
                </Typography>
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <SearchInput
                      id='username'
                      rightTextButton={useSearchInput.buttonText}
                      status={useSearchInput.status}
                      disable={useSearchInput.disable}
                      placeholder='Masukkan username anda'
                      validation={{
                        required: {
                          value: true,
                          message: 'Wajib mengisi username',
                        },
                      }}
                    />
                  </form>
                </FormProvider>
                {/* {nomor_peserta.status.status ===
                  'pembayaran berhasil diverifikasi' && <></>} */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
