import {
  FaInstagram,
  FaLine,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function Footer() {
  return (
    <footer className='w-full bg-neutral-900'>
      <div className='mx-auto w-11/12'>
        <div className='flex items-center justify-between'>
          <NextImage
            className='w-96'
            alt='ilits logo'
            src='/images/ilits-logo-white.png'
            width='100%'
            height='60%'
            layout='responsive'
            objectFit='contain'
            priority
          />{' '}
          <div className='flex flex-col items-end justify-center space-y-4'>
            <Typography
              className='font-semibold text-neutral-100'
              variant='title'
            >
              Temukan kami di sosial media!
            </Typography>
            <div className='flex items-center justify-between space-x-4 text-neutral-100'>
              <FaTwitter size={32} />
              <FaInstagram size={32} />
              <FaYoutube size={32} />
              <FaLinkedin size={32} />
              <FaTiktok size={32} />
              <FaLine size={32} />
            </div>
          </div>
        </div>
        <hr className='my-3 h-1 bg-neutral-100' />
        <div className='flex items-start justify-between px-4'>
          <div className='flex flex-col items-start justify-center space-y-3 text-white'>
            <Typography variant='title' className='font-semibold'>
              Tentang Kami
            </Typography>
            <Typography variant='paragraph'>Lorem ipsum</Typography>
            <Typography variant='paragraph'>Lorem ipsum</Typography>
            <Typography variant='paragraph'>Lorem ipsum</Typography>
          </div>
          <div className='flex flex-col items-start justify-center space-y-3 text-white'>
            <Typography variant='title' className='font-semibold'>
              Eventual
            </Typography>
            <Typography variant='paragraph'>Lorem ipsum</Typography>
            <Typography variant='paragraph'>Lorem ipsum</Typography>
            <Typography variant='paragraph'>Lorem ipsum</Typography>
          </div>
          <div className='flex flex-col items-start justify-center space-y-3 text-white'>
            <Typography variant='title' className='font-semibold'>
              Tryout
            </Typography>
            <Typography variant='paragraph'>Lorem ipsum</Typography>
            <Typography variant='paragraph'>Lorem ipsum</Typography>
            <Typography variant='paragraph'>Lorem ipsum</Typography>
          </div>
          <div className='flex flex-col items-start justify-center space-y-3 text-white'>
            <Typography variant='title' className='font-semibold'>
              Shop
            </Typography>
            <Typography variant='paragraph'>Lorem ipsum</Typography>
          </div>
        </div>
        <div className='py-12 text-center font-medium text-white'>
          <Typography variant='caption'>
            &copy; Copyright Ini Lho ITS! 2023. All Rights Reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
}
