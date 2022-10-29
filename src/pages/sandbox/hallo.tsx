import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HalloPage() {
  return (
    <Layout>
      <Seo templateTitle='Hallo' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <p>Hallo Nathan</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
