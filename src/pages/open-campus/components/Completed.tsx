import * as React from 'react';
import { BsHouseDoor } from 'react-icons/bs';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import useOpenCampusStore from '@/store/useOpenCampusStore';

export default function CompletedPage() {
  const data = useOpenCampusStore.useFormData();
  return (
    <Layout>
      <Seo templateTitle='Completed' />

      <main>
        <section className=''>
          <div className='layout flex flex-col items-center py-20'>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <div className='w-72 self-center sm:w-[400px] md:w-[480px] lg:w-[512px]'>
              <NextImage
                alt='ilits-logo'
                src='/images/ilits-logo.png'
                width='100%'
                height='55%'
                layout='responsive'
                objectFit='contain'
                priority
              />
            </div>
            <Typography
              variant='h4'
              className='whitespace-nowrap text-center font-bold text-orange-300'
            >
              Open Campus Nirwana Asa
            </Typography>
            <Typography
              variant='body'
              className='mt-4 text-center font-semibold'
            >
              kami telah mengirim email ke akun anda untuk proses
            </Typography>
            <Typography variant='body' className='text-center font-semibold'>
              pembayaran, silahkan dicek dan lakukan pembayaran segera
            </Typography>
            <ButtonLink
              href='/'
              variant='yellow'
              leftIcon={BsHouseDoor}
              className='mt-14 font-semibold'
            >
              Kembali ke Home Page
            </ButtonLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
