import * as React from 'react';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import clsxm from '@/lib/clsxm';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import useDialogStore from '@/store/useDialogStore';

const links = [
  { href: '/', label: 'Home' },
  { href: '/eventual', label: 'Eventual' },
  { href: '/coming-soon', label: 'Fakultas' },
  { href: '/coming-soon', label: 'Prestasi' },
  { href: '/coming-soon', label: 'Fasilitas' },
  { href: '/coming-soon', label: 'Alumni' },
  { href: '/coming-soon', label: 'Beasiswa' },
];

export default function Navbar() {
  const isOpen = useDialogStore.useData();
  const setIsOpen = useDialogStore.useSetOpen();
  const [colorChange, setColorChange] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const toggleShowNav = () => {
    setIsOpen();
  };

  return (
    <header
      className={clsxm(
        'fixed top-0 z-[100] w-full bg-transparent',
        colorChange && 'bg-bone-500'
      )}
    >
      <div className='mx-auto flex h-16 w-11/12 items-center justify-between gap-x-1 md:h-24 md:w-[98%] lg:w-11/12'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <NextImage
            className='w-20 md:w-32'
            alt='ilits logo'
            src='/images/ilits-logo.png'
            width='100%'
            height='60%'
            layout='responsive'
            objectFit='contain'
            priority
          />
        </UnstyledLink>
        <nav className='hidden md:block'>
          <ul className='hidden items-center justify-between space-x-2 font-semibold md:flex lg:space-x-6 xl:space-x-10'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='hidden md:block'>
          <ButtonLink
            href='/open-campus'
            className='px-2 font-semibold lg:px-[22px]'
            variant='bone'
          >
            Daftar Sekarang!
          </ButtonLink>
        </div>
        <div className='relative z-50 mr-0 flex md:hidden'>
          {!isOpen && (
            <GiHamburgerMenu
              className='text-3xl text-gray-900'
              onClick={toggleShowNav}
            />
          )}
        </div>
      </div>
      <div
        className={`flex translate-y-[calc(100%-4rem)] md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full opacity-0'
        } absolute bottom-0 left-0 h-screen w-full flex-col bg-lightBlue-600 pt-[6vh] text-white transition duration-300`}
      >
        <NextImage
          className='absolute bottom-0 left-0 z-[10] w-full'
          alt='ilits logo'
          src='/images/rainbow-navbar.png'
          width='100%'
          height='43%'
          layout='responsive'
          objectFit='contain'
          priority
        />
        <nav className='relative z-20 flex h-screen w-full flex-col'>
          <ul>
            <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
              <NextImage
                className='mx-auto mb-[3vh] w-36'
                alt='ilits logo'
                src='/images/ilits-logo-white.png'
                width='100%'
                height='60%'
                layout='responsive'
                objectFit='contain'
                priority
              />
            </UnstyledLink>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className='py-3 px-7'>
                <UnstyledLink
                  href={href}
                  className='flex w-full items-center justify-center font-semibold hover:text-gray-600'
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
          <ButtonLink
            href='/open-campus'
            className='mx-auto mt-3 font-semibold'
            variant='bone'
            size='medium'
            round='medium'
          >
            Daftar Sekarang!
          </ButtonLink>
          {isOpen && (
            <FaTimes
              className='absolute bottom-20 right-1/2 mx-auto h-12 w-12 translate-x-1/2 rounded-full border-[2px] border-black bg-white p-3 text-3xl font-thin text-black'
              onClick={toggleShowNav}
            />
          )}
        </nav>
      </div>
    </header>
  );
}
