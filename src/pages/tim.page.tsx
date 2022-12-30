import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CommingsoonPage from '@/pages/coming-soon.page';

export default function TimPage() {
  return (
    <Layout>
      <Seo templateTitle='Tim' />
      <main>
        <CommingsoonPage />
      </main>
    </Layout>
  );
}
