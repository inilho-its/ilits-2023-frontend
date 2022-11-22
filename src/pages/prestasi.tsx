import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CommingsoonPage from '@/pages/coming-soon';

export default function PrestasiPage() {
  return (
    <Layout>
      <Seo templateTitle='Prestasi' />
      <main>
        <CommingsoonPage />
      </main>
    </Layout>
  );
}