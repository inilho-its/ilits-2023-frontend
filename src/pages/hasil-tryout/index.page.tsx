import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiOutlineSearch } from 'react-icons/ai';
import useDownloader from 'react-use-downloader';

import apiMock from '@/lib/apiMock';
import useSearchInputHooks from '@/hooks/useSearchInput';

import Button from '@/components/buttons/Button';
import SearchInput from '@/components/forms/SearchInput';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { ApiReturn } from '@/types/api-return';

type TiketFormState = {
  username: string;
};

type detailTiket = {
  username: string;
  password: string;
  nama: string;
  jenis_tryout: number;
  lokasi_ujian: string;
  nilai_tpa: number;
  nilai_tka: number;
  nilai_total: number;
  asal_sekolah: string;
  email: string;
  ranking_freepass: number;
  ranking_welcome_surabaya: number;
  ranking_welfor_nasional: number;
  ranking_welfor_regional: number;
  nama_penjurusan: string;
  sertifikat: {
    freePass: string[];
    pemenang_WelcomeNasional: string[];
    pemenang_Welfor: string[];
    pemenang_Welsur: string[];
    peserta_openCampus_Welcome: string[];
    peserta_welcomeNasional: string[];
  };
};

export default function HasilTryout() {
  const [page, setPage] = React.useState(1);
  const useSearchInput = useSearchInputHooks();
  const [ranking, setRangking] = React.useState<detailTiket>();

  const { download } = useDownloader();

  const methods = useForm<TiketFormState>();
  const { handleSubmit } = methods;

  const backBtn = () => {
    setRangking(undefined);
    setPage(1);
  };

  const downloadSertifikat = (url: string) => {
    const filename = url.split('/');

    download(url, filename[5]);
    window.open(url);
  };

  const onSubmit = (data: TiketFormState) => {
    toast.promise(
      apiMock
        .get<ApiReturn<detailTiket>>(`sertifikat-peserta/${data.username}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setRangking(res.data.data);
          setPage(2);
          return res;
        })
        .catch((err) => {
          useSearchInput.isVerified(false, 'Username tidak valid');
          throw err;
        }),
      {
        loading: 'Loading',
        success: (res) => (
          <p>
            {res.data.message
              ? res.data.message
              : 'Something Happened. Wait a bit then try again'}
          </p>
        ),
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
      <Seo templateTitle='Hasil Try Out' />
      <main className='relative min-h-screen bg-bone-500'>
        <section className=' bg-bone-500'>
          {page === 2 && (
            <NextImage
              className='absolute top-1/2 left-1/2 w-[90vh] -translate-x-1/2 -translate-y-1/2 lg:w-[120vh]'
              alt='bakground'
              height='60%'
              width='100%'
              src='/images/ilits-logo-white.png'
            />
          )}
          {page === 1 && (
            <NextImage
              className='absolute top-0 right-0 w-[13%] lg:w-[8%]'
              src='/images/tiket/eye.png'
              width='95%'
              height='100%'
              layout='responsive'
              alt=''
            />
          )}
          {page === 1 && (
            <NextImage
              className='absolute bottom-0 w-[15%] lg:w-[11%]'
              src='/images/tiket/person.png'
              width='43%'
              height='100%'
              layout='responsive'
              alt=''
            />
          )}
          <div className='absolute flex w-full items-center justify-center pt-10 sm:justify-start sm:pt-16 sm:pl-20 md:pt-10 md:pl-20 lg:pl-24 lg:pt-0'>
            <NextImage
              className={`${page === 1 ? 'w-[19%]' : 'w-[10%]'}`}
              src='/images/ilits-logo.png'
              width='100%'
              height='63%'
              layout='responsive'
              alt=''
            />
            <div className='w-[68%]'>
              {page === 1 && (
                <Typography
                  variant='h6'
                  className='mt-2 text-xs font-semibold sm:mt-4 sm:text-lg md:text-xl lg:pl-10'
                >
                  Kesuksesanmu bukanlah kebetulan. Sudah berapa banyak kerja
                  keras dan pengorbanan. Berharap, semoga selalu diberi
                  kemudahan.
                  <br />
                  Semangat! kami tunggu di ITS yaa
                </Typography>
              )}

              {page === 2 && (
                <Typography
                  variant='h6'
                  className='mt-0 text-sm font-semibold sm:mt-4 sm:text-lg md:text-xl lg:pl-10'
                >
                  Hasil Try Out INI LHO ITS !
                </Typography>
              )}
            </div>
          </div>
          <div
            className={`${
              page === 1 ? 'md:py-32 lg:py-32' : 'z-[99] pt-32 pb-8'
            } relative flex min-h-screen w-full items-center justify-center px-5`}
          >
            {page === 1 && (
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
                </div>
              </div>
            )}

            {page === 2 && (
              <div className='h-fit w-[95%] space-y-10 md:w-[70%] xl:w-[65%]'>
                <div className='text-lg md:text-2xl'>
                  <span className='inline-block w-24 font-medium'>Nama</span>
                  <span>: {ranking?.nama}</span>
                  <br />
                  <span className='inline-block w-24 font-medium'>Jenis</span>
                  <span>
                    : {ranking?.jenis_tryout === 1 ? 'Saintek' : 'Soshum'}
                  </span>
                  <br />
                  <span className='inline-block w-24 font-medium'>Lokasi</span>
                  <span>: {ranking?.lokasi_ujian}</span>
                </div>

                <div className='space-y-4'>
                  <h4 className='text-base font-medium md:text-xl'>
                    Terimakasih telah mengikuti Welcome Surabaya Ini Lho ITS!
                    2023, berikut merupakan hasil ujian mu:
                  </h4>
                  <div className='lg: flex flex-col space-y-8 text-base md:space-x-0 md:text-lg lg:flex-row lg:space-x-44 lg:space-y-0 xl:space-x-72'>
                    <div>
                      <p>Nilai TPA : {ranking?.nilai_tpa}</p>
                      <p>
                        Nilai{' '}
                        {ranking?.jenis_tryout === 1 ? 'Saintek' : 'Soshum'} :{' '}
                        {ranking?.nilai_tka}
                      </p>
                      <p>Nilai Total : {ranking?.nilai_total}</p>
                    </div>
                    <div>
                      {ranking?.ranking_freepass && (
                        <p>Ranking Freepas : {ranking?.ranking_freepass}</p>
                      )}
                      {ranking?.ranking_welcome_surabaya && (
                        <p>
                          Ranking Welcome Surabaya :{' '}
                          {ranking?.ranking_welcome_surabaya}
                        </p>
                      )}
                      {ranking?.ranking_welfor_nasional && (
                        <p>
                          Ranking Welcome Nasional :{' '}
                          {ranking?.ranking_welfor_nasional}
                        </p>
                      )}
                      {ranking?.ranking_welfor_regional && (
                        <p>
                          Ranking Regional Forda {ranking?.lokasi_ujian}:{' '}
                          {ranking?.ranking_welfor_regional}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className='mb-4 text-center font-semibold'>
                      Sertifikat
                    </h4>

                    <div className='mx-auto flex flex-col items-center gap-y-3'>
                      {ranking?.sertifikat.freePass && (
                        <Button
                          variant='bone'
                          className='flex w-64 items-center justify-center'
                          size='small'
                          onClick={() =>
                            downloadSertifikat(
                              `https://inilho.its.ac.id/storage/asset-sertifikat${ranking?.sertifikat.freePass[0]}`
                            )
                          }
                        >
                          Freepass
                        </Button>
                      )}
                      {ranking?.sertifikat.pemenang_WelcomeNasional && (
                        <Button
                          variant='bone'
                          className='flex w-64 items-center justify-center'
                          size='small'
                          onClick={() =>
                            downloadSertifikat(
                              `https://inilho.its.ac.id/storage/asset-sertifikat${ranking?.sertifikat.pemenang_WelcomeNasional[0]}`
                            )
                          }
                        >
                          Pemenang Welcome Nasional
                        </Button>
                      )}
                      {ranking?.sertifikat.pemenang_Welsur && (
                        <Button
                          variant='bone'
                          className='flex w-64 items-center justify-center'
                          size='small'
                          onClick={() =>
                            downloadSertifikat(
                              `https://inilho.its.ac.id/storage/asset-sertifikat${ranking?.sertifikat.pemenang_Welsur[0]}`
                            )
                          }
                        >
                          Pemenang Welcome Surabaya
                        </Button>
                      )}
                      {ranking?.sertifikat.pemenang_Welfor && (
                        <Button
                          variant='bone'
                          className='flex w-64 items-center justify-center'
                          size='small'
                          onClick={() =>
                            downloadSertifikat(
                              `https://inilho.its.ac.id/storage/asset-sertifikat${ranking?.sertifikat.pemenang_Welfor[0]}`
                            )
                          }
                        >
                          Pemenang Welcome Forda
                        </Button>
                      )}
                      {ranking?.sertifikat.peserta_openCampus_Welcome && (
                        <Button
                          variant='bone'
                          className='flex w-64 items-center justify-center'
                          size='small'
                          onClick={() =>
                            downloadSertifikat(
                              `https://inilho.its.ac.id/storage/asset-sertifikat${ranking?.sertifikat.peserta_openCampus_Welcome[0]}`
                            )
                          }
                        >
                          Peserta Open Campus Welcome
                        </Button>
                      )}
                      {ranking?.sertifikat.peserta_welcomeNasional && (
                        <Button
                          variant='bone'
                          className='flex w-64 items-center justify-center'
                          size='small'
                          onClick={() =>
                            downloadSertifikat(
                              `https://inilho.its.ac.id/storage/asset-sertifikat${ranking?.sertifikat.peserta_welcomeNasional[0]}`
                            )
                          }
                        >
                          Peserta Welcome Nasional
                        </Button>
                      )}
                    </div>
                  </div>

                  <h4 className='pt-10 text-center font-semibold'>
                    “Tetap semangat dan terus berjuang, sampai bertemu di kampus
                    perjuangan ITS Surabaya!”
                  </h4>
                  <div className='mx-auto mt-44 w-fit pt-8'>
                    <Button
                      variant='yellow'
                      onClick={backBtn}
                      leftIcon={AiOutlineSearch}
                      className=''
                    >
                      Kembali ke Pencarian
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* 
          <NextImage
            src={`https://inilho.its.ac.id/public/${ranking?.sertifikat.freePass[0]}`}
            width={300}
            height={200}
            alt='sertifikat'
          /> */}
        </section>
      </main>
    </Layout>
  );
}
