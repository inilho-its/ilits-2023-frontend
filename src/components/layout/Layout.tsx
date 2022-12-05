import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

type LayoutPros = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutPros) {
  // Put Header or Footer Here
  return (
    <div className='overflow-x-hidden bg-bone-100'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
