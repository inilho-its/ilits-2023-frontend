import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CommingsoonPage from '@/pages/coming-soon';

export default function FasilitasPage() {
  return (
    <Layout>
      <Seo templateTitle='Fasilitas' />
      <main>
        <CommingsoonPage />
      </main>
    </Layout>
  );
}
