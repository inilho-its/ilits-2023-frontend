import * as React from 'react';
import { BsHouseDoor } from 'react-icons/bs';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

import useOpenCampusStore from '@/store/useOpenCampusStore';

export default function CompletedPage() {
  const data = useOpenCampusStore.useFormData();
  return (
    <main>
      <section className=''>
        <div className='flex flex-col items-center space-y-4'>
          <pre>{JSON.stringify(data, null, 2)}</pre>
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
          <div>
            <Typography
              variant='body'
              className='text-center text-base  sm:text-[16px] sm:leading-[24px]'
            >
              Kami telah mengirim email ke akun anda untuk proses pembayaran,
            </Typography>
            <Typography
              variant='body'
              className='text-center text-base  sm:text-[16px] sm:leading-[24px]'
            >
              silahkan cek email anda untuk segera menyelesaikan proses
              pembayaran
            </Typography>
          </div>
          <UnstyledLink
            href='/'
            className='text-blue-500 underline decoration-blue-500 hover:text-blue-900'
          >
            Saya tidak menerima email masuk
          </UnstyledLink>

          <ButtonLink
            href='/'
            variant='yellow'
            leftIcon={BsHouseDoor}
            className='mt-14 hidden font-semibold sm:inline-flex'
          >
            Kembali ke Halaman Utama
          </ButtonLink>
          <ButtonLink
            href='/'
            variant='yellow'
            size='small'
            leftIcon={BsHouseDoor}
            className='mt-6 inline-flex text-center font-semibold sm:hidden'
          >
            Kembali ke Halaman Utama
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
