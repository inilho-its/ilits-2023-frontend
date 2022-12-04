import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function OpenCampusPage() {
  return (
    <Layout>
      <Seo templateTitle='Open Campus' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'></div>
        </section>
      </main>
    </Layout>
  );
}
