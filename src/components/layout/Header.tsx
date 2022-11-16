import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

const links = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'Eventual' },
  { href: '/', label: 'Fakultas' },
  { href: '/', label: 'Prestasi' },
  { href: '/', label: 'Fasilitas' },
  { href: '/', label: 'Alumni' },
  { href: '/', label: 'Beasiswa' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-bone-500'>
      <div className='layout flex h-24 items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <NextImage
            className='w-24'
            alt='ilits logo'
            src='/images/ilits-logo.png'
            width='100%'
            height='60%'
            layout='responsive'
            objectFit='contain'
            priority
          />
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-10 font-semibold'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <ButtonLink href='/' className='font-semibold' variant='bone'>
            Daftar Sekarang!
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
