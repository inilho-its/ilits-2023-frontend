import * as React from 'react';
import { BsHouseDoor } from 'react-icons/bs';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function CompletedPage() {
  return (
    <main>
      <section className=''>
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
            className='text-center text-sm font-semibold sm:text-[16px] sm:leading-[24px]'
          >
            Terimakasih telah melakukan pendaftaran pada event:
          </Typography>
          <div>
            <Typography
              variant='h4'
              className='stroke-sm text-center text-4xl font-bold text-orange-300 sm:text-[48px] sm:leading-[52px]'
            >
              Open Campus <br />
              Nirwana Asa
            </Typography>
          </div>
          <div>
            <Typography
              variant='body'
              className='text-center text-sm font-semibold sm:text-[16px] sm:leading-[24px]'
            >
              Kami telah mengirim email ke akun anda untuk proses pembayaran,
              silahkan cek email anda untuk segera menyelesaikan proses
              pembayaran
            </Typography>
            <Typography
              variant='body'
              className='text-center text-base  sm:text-[16px] sm:leading-[24px]'
            ></Typography>
          </div>
          <div className='flex flex-col space-y-2'>
            <Typography
              variant='body'
              className='text-center text-sm sm:text-[16px] sm:leading-[24px]'
            >
              Jika anda mengalami kendala, silahkan hubungi kami melalui:
            </Typography>
            <div>
              <UnderlineLink
                href='https://api.whatsapp.com/send?phone=6281287580385&text=Halo%20Admin%2C%20Saya%20ingin%20bertanya%20mengenai%20ILITS%20Open%20Campus'
                className='mt-0'
              >
                CP: 1 Shila
              </UnderlineLink>
            </div>
            <div>
              <UnderlineLink href='https://api.whatsapp.com/send?phone=6285867643992&text=Halo%20Admin%2C%20Saya%20ingin%20bertanya%20mengenai%20ILITS%20Open%20Campus'>
                CP: 2 Dina
              </UnderlineLink>
            </div>
          </div>

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
